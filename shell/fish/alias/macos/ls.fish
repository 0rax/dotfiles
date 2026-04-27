#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function ls --wraps='gls --color=auto -h --indicator-style=classify --group-directories-first'
	LC_COLLATE=C command gls --color=auto -h --indicator-style=classify --group-directories-first $argv
end
