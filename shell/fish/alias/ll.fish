#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function ll --wraps='ls -lh' --description='alias ll=ls -lh'
	ls -lh $argv
end
