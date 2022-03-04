#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function __awsaml_profile
    sed -nE 's|^\[([a-zA-Z0-9_-]+)\]$|\1|p' $HOME/.saml2aws
end

complete -c awsaml -f
complete -c awsaml -n "__fish_use_subcommand" -a "(__awsaml_profile)"
complete -c awsaml -x -n "__fish_seen_subcommand_from (__awsaml_profile)" -l force --description "Force refresh credentials"
complete -c awsaml -x -n "__fish_seen_subcommand_from (__awsaml_profile)" -l quiet --description "Silence logs"
