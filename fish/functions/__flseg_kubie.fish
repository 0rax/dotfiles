#!/usr/bin/env fish

function __flseg_kubie

    if set -q KUBIE_ACTIVE
        set -l ns  (kubie info ctx)
        set -l ctx (kubie info ns)

        set -l out "$ns"
        if [ "$ctx" != "default" ]
            set out "$ns($ctx)"
        end

        __fishline_segment 66cccc 393939
        printf "\ufd31 %s" "$out"
    end

end
