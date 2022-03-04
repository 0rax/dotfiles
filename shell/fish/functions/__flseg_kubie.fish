#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function __flseg_kubie
    if set -q KUBIE_ACTIVE
        set -l ctx (kubie info ctx)
        set -l ns (kubie info ns)
        set -l out "$ctx"
        if [ "$ns" != default ]
            set out "$ctx($ns)"
        end
        __fishline_segment 66cccc 393939
        printf "\ufd31 %s" "$out"
    end
end
