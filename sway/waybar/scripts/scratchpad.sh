#!/usr/bin/env bash

get_status() {
    scratchpads=$(swaymsg -t get_tree | jq --raw-output --unbuffered '
        (
            recurse(.nodes[]) | select(.name == "__i3_scratch") | .focus
        ) as $scratch_ids |
        [
            ..  | (.nodes? + .floating_nodes?) // empty | .[] | select(.id |IN($scratch_ids[]))
        ] |
        if (.|length) > 0 then
            map("\(.app_id // .window_properties.class) (\(.id)): \(.name)") | join("\n")
        else
            empty
        end'
    )
    count=$(wc -l <<< "${scratchpads}")
}

status() {
    get_status
    if [[ ${scratchpads} != "" ]]; then
        jq --null-input --compact-output '{"text":$text, "tooltip":$tooltip}' \
                    --arg text "${count}" \
                    --arg tooltip "${scratchpads}"
    fi
}

raw() {
    get_status
    if [[ ${scratchpads} != "" ]]; then
        echo "${scratchpads}"
    fi
}

CMD="${1:-status}"
case $CMD in
status)
    status
    ;;
raw)
    raw
    ;;
show)
    # Cycle through the scratchpad windows
    swaymsg 'scratchpad show'
    ;;
move)
    # Move current window to the scratchpad
    swaymsg 'move scratchpad'
    # Refresh Waybar
    pkill -SIGRTMIN+9 waybar
    ;;
esac
