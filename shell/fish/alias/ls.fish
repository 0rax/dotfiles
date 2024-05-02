#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function ls --wraps='ls --color=auto -h --indicator-style=classify --group-directories-first'
	LC_COLLATE=C command ls --color=auto -h --indicator-style=classify --group-directories-first $argv
end
