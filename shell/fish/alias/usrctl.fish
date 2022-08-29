#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function usrctl
	systemctl --user $argv
end
