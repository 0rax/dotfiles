#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function pbcopy
	xclip -selection clipboard $argv
end
