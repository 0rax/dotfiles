#!/usr/bin/env fish

function __awsenv_disconnect

    echo "> Cleaning up all potentielly loaded AWS profile or credentials from the environment ..." 1>&2

    for i in (env | grep "AWS_" | cut -d"=" -f1)
        set -e "$i"
    end

    set -e AWSENV_PROFILE
    set -e AWSENV_PROVIDER
    set -e SAML2AWS_PROFILE
    set -e AWS_VAULT

    return 0

end
