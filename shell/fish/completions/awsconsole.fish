#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function __awsconsole_profile
    sed -nE 's|^\[([a-zA-Z0-9_-]+)\]$|\1|p' $HOME/.saml2aws
end

complete -c awsconsole -f
complete -c awsconsole -n "__fish_use_subcommand" -a "(__awsconsole_profile)"
complete -c awsconsole -x -n "__fish_seen_subcommand_from (__awsconsole_profile)" -l force --description "Force refresh credentials"
complete -c awsconsole -x -n "__fish_seen_subcommand_from (__awsconsole_profile)" -l quiet --description "Silence logs"
