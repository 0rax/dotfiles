#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function gpg-ssh-stop
    eval (keychain --eval -q)
    echo "Using ssh-agent at $SSH_AUTH_SOCK"
end
