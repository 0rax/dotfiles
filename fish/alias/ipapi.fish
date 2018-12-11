#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function ipapi
    curl -sS "http://ip-api.com/json/$argv[1]" | jq "."
end
