#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function tg --wraps='terragrunt'
	command terragrunt $argv
end
