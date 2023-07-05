#!/usr/bin/env bash

CMD="${1:-status}"
case $CMD in
status)
    swaymsg -t get_tree | jq --unbuffered --compact-output '
        (
            recurse(.nodes[]) | select(.name == "__i3_scratch") | .focus
        ) as $scratch_ids |
        [
            ..  | (.nodes? + .floating_nodes?) // empty | .[] | select(.id |IN($scratch_ids[]))
        ] as $scratch_nodes |
        if ($scratch_nodes|length) > 0 then
            {
                text: "\($scratch_nodes | length)",
                tooltip: $scratch_nodes | map("\(.app_id // .window_properties.class) (\(.id)): \(.name)") | join("\n")
            }
        else
            empty
        end'
    exit
    ;;
show)
    swaymsg 'scratchpad show'
    ;;
move)
    swaymsg 'move scratchpad'
    ;;
esac

# Refresh Waybar on actions
if [[ ${CMD} != "status" ]]; then
    pkill -SIGRTMIN+9 waybar
fi
