#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function pbcopy --wraps='wl-copy'
    wl-copy --trim-newline $argv
end
