#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function cdp -d "Change directory while resolving simlink (cd physical vs logical)"
	set -l new_path
	if [ (count $argv) -eq 0 ]
		set new_path (readlink -f $HOME)
	else if [ (count $argv) -gt 1 ]
		echo "Too many arguments for $_ command" 1>&2
		exit 1
	else if [ "$argv" = "-" ]
		set new_path (readlink -f $dirprev[1])
	else
		set new_path (readlink -f $argv[1])
	end
	cd $new_path
end
