#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function grep --wraps=grep
	command grep --color=auto $argv
end
