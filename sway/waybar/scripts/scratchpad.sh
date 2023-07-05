#!/usr/bin/env bash

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
