#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function weather
	curl http://wttr.in/$argv[1]
end
