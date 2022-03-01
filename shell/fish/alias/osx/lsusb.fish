#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function lsusb
	system_profiler SPUSBDataType $argv
end
