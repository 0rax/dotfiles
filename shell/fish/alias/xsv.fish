#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function xsv --wraps='qsv' --description='alias xsv=qsv'
	qsv $argv
end
