#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function lsdisk
	diskutil list $argv
end
