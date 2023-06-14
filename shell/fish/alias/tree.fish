#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function tree --wraps='tree --dirsfirst'
	command tree --dirsfirst $argv
end
