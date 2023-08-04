#!/usr/bin/env bash

PLAYER="spotify"

MDFORMAT='{ "status": "{{status}}", "artist": "{{xesam:artist}}", "title": "{{xesam:title}}", "position": "{{duration(position)}}", "length": "{{duration(mpris:length)}}", "album": "{{xesam:album}}" }'
JQFUNC='{
    "alt": .status | ascii_downcase,
    "text": ( if (.title|length) > 0 then .artist + " - " + .title else .status end ),
    "tooltip": ( "󰓇 " + .status + " (" + .position + "/" + .length + ")" + "\n󰝚 " + .title +  "\n󰠃 " + .artist + "\n󰲸 " + .album ),
    "class": .status | ascii_downcase
}'


CMD="${1:-status}"
case $CMD in
status)
    playerctl --player="${PLAYER}" metadata --format="${MDFORMAT}" 2>/dev/null \
        | jq --unbuffered --compact-output "${JQFUNC}"
    ;;
watch)
    playerctl --player="${PLAYER}" --follow metadata --format="${MDFORMAT}" \
        | while read -r line; do
            if [ ${#line} -gt 0 ]; then
                echo "${line}" | jq --unbuffered --compact-output "${JQFUNC}"
            else
                echo
            fi
        done
    ;;
raw)
    playerctl --player="${PLAYER}" metadata --format="${MDFORMAT}"
    ;;
next)
    playerctl --player="${PLAYER}" next
    ;;
prev)
    playerctl --player="${PLAYER}" previous
    ;;
play-pause)
    playerctl --player="${PLAYER}" play-pause
    ;;
esac
