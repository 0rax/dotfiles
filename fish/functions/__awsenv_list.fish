#!/usr/bin/env fish

function __awsenv_list --argument-names provider

    set -l saml (sed -nE 's|^\[([a-zA-Z0-9_-]+)\]$|\1|p' $HOME/.saml2aws)
    set -l vault (aws-vault list | tr -s ' ' | cut -d' ' -f1,2 | tail -n+3 | grep -v -- '-$' | cut -d' ' -f1)
    set -l cli (sed -nE 's|^\[([a-zA-Z0-9_-]+)\]$|\1|p' $HOME/.aws/credentials)
    set -l cli_ignore (echo $saml $vault | tr ' ' '|')

    switch "$provider"
        case complete
            printf "saml %s\n" (string join \n $saml)
            printf "vault %s\n" (string join \n $vault)
            printf "cli %s\n" (string join \n $cli | grep -Ewv "$cli_ignore")
        case saml
            string join \n $saml
        case vault
            string join \n $vault
        case cli
            string join \n $cli | grep -Ewv "$cli_ignore"
        case ''
            echo "> Listing all available profiles ..." 1>&2
            printf "%-16s [saml]\n" (string join \n $saml)
            printf "%-16s [vault]\n" (string join \n $vault)
            printf "%-16s [cli]\n" (string join \n $cli | grep -Ewv "$cli_ignore")
    end

end
