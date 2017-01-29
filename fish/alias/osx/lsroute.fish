#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function lsroute
	netstat -nr $argv
end
