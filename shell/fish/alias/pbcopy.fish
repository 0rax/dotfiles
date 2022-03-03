#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function pbcopy
    wl-copy --trim-newline $argv
end
