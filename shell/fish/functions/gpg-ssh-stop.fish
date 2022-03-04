#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function gpg-ssh-stop
    source (keychain --eval -q | psub)
    echo "Using ssh-agent at $SSH_AUTH_SOCK"
end
