#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function code
	if type -q codium
		codium $argv
	else
		command code $argv
	end
end
