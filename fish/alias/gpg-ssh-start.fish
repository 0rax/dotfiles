#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function gpg-ssh-start
	set -gx SSH_AUTH_SOCK (gpgconf --list-dirs agent-ssh-socket)
	echo "Using ssh-agent at $SSH_AUTH_SOCK"
end
