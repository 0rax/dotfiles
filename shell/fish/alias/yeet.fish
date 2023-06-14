#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function yeet --wraps='yay -Rcs' --description='alias yeet=yay -Rcs'
	yay -Rcs $argv
end
