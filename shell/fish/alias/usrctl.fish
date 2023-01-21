#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function usrctl
	if [ (count $argv) -eq 0 ]
		systemctl --user list-units --type=service
	else
		systemctl --user $argv
	end
end
