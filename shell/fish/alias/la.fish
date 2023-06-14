#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function la --wraps=ls --description='alias la=ls -a'
	ls -a $argv
end
