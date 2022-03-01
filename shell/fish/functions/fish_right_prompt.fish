#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function fish_right_prompt

    if set -q KUBIE_ACTIVE
        fishline -s 0 -r kubie
    else if [ "$CMD_DURATION" -ge 100 ]
        fishline -s 0 -r exectime
    else
        fishline -s 0 -r clock
    end

end
