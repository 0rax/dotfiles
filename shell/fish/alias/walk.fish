#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function walk --wraps='walk --icons --hide-hidden'
	command walk --icons --hide-hidden --with-border $argv
end
