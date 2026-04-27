#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function make --wraps='gnumake'
	command gnumake $argv
end
