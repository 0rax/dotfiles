#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function ipapi
	if [ (count $argv) -eq 0 ]
		set url "http://ip-api.com/json/"
	else
		set url "http://ip-api.com/json/$argv[1]"
	end
	curl -sS "$url" | jq "."
end
