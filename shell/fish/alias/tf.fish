#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function tf --wraps='terraform'
	command terraform $argv
end
