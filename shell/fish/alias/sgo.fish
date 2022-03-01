#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function sgo
	env GOOS=linux CGO=0 go $argv
end
