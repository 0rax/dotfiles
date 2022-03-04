#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function weather
    if [ (count $argv) -eq 0 ]
        set url "http://wttr.in/"
    else
        set url "http://wttr.in/$argv[1]"
    end
    curl -sS "$url"
end
