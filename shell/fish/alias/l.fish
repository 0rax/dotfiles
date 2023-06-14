#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function l --wraps=ls --description='alias l=ls -A'
	ls -A $argv
end
