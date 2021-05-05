#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function share
	python3 -m http.server $argv
end
