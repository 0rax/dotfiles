#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function ldd
	otool -L $argv
end
