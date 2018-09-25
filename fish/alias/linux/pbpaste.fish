#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function pbpaste
	xclip -selection clipboard -o $argv
end
