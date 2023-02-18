#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function alacritty
	if [ (count $argv) -eq 0 ]
		command alacritty msg create-window; or command alacritty
	else
		command alacritty $argv
	end
end
