#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function egrep --wraps=egrep
	command egrep --color=auto $argv
end
