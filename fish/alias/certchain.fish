#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function certchain
    openssl s_client -showcerts -connect $argv
end
