#!/usr/bin/env fish

complete -c awsaml -f
complete -c awsaml -a "(sed -nE 's|^\[([a-zA-Z0-9_-]+)\]\$|\1|p' $HOME/.saml2aws)"
