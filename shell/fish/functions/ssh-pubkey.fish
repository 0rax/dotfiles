#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function ssh-pubkey
	for k in $argv
		set -l pk (ssh-keygen -y -f $k)
		echo "$pk $k"
	end
end
