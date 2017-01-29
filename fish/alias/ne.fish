#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function ne
	command emacs -nw --quick --no-init-file $argv
end
