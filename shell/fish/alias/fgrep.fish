#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function fgrep --wraps=fgrep
	command fgrep --color=auto $argv
end
