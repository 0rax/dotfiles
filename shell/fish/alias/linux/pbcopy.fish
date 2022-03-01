#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function pbcopy
	xsel --clipboard --input $argv
end
