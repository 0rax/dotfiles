#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function lsport
	lsof -i -P | grep "LISTEN" $argv
end
