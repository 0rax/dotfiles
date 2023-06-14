#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function lla --wraps='ls -lah' --description='alias lla=ls -lah'
	ls -lah $argv
end
