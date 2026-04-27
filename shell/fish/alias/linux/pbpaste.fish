#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function pbpaste --wraps='wl-paste'
	wl-paste $argv
end
