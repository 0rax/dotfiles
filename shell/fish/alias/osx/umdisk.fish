#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function umdisk
	diskutil umountDisk $argv
end
