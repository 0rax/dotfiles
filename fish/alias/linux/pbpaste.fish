#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function pbpaste
	xsel --clipboard --output $argv
end
