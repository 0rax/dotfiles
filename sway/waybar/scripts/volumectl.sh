#!/usr/bin/env bash

VOLUMEMIN=0
VOLUMEMAX=100
VOLUMESTEP=2

notify_volume() {
    icon="audio-volume-medium"
    if [[ ${volume} -eq 0 ]]; then
        icon="audio-volume-off"
    elif [[ ${volume} -le 30 ]]; then
        icon="audio-volume-low"
    elif [[ ${volume} -le 70 ]]; then
        icon="audio-volume-medium"
    else
        icon="audio-volume-high"
    fi
    if [[ ${muted} -eq 1 ]]; then
        notify-send --app-name="Volume" \
            --icon="audio-volume-muted" --hint="int:value:${volume}" \
            --hint="string:x-canonical-private-synchronous:volumectl" \
            "${volume}% [MUTED] (${device})"
    else
        notify-send --app-name="Volume" \
            --icon="${icon}" --hint="int:value:${volume}" \
            --hint="string:x-canonical-private-synchronous:volumectl" \
            "${volume}% (${device})"
    fi
}

status() {
    get_volume
    if [[ ${muted} -eq 1 ]]; then
        echo "${volume} [mute]"
    else
        echo "${volume}"
    fi
}

get_volume() {
    muted=$(wpctl get-volume @DEFAULT_AUDIO_SINK@ | grep "[MUTED]" > /dev/null && echo 1)
    volume=$(wpctl get-volume @DEFAULT_AUDIO_SINK@ | awk '{print $2 * 100}')
    device=$(wpctl inspect @DEFAULT_SINK@ | grep -E "node.description|node.nick" | tail -n1 | cut -d'"' -f2)
}

toggle-mute() {
    wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle
    get_volume
    notify_volume
}

volume-up() {
    get_volume
    volume=$((volume + VOLUMESTEP))
    if [[ ${volume} -gt ${VOLUMEMAX} ]]; then
        volume=${VOLUMEMAX}
    fi
    wpctl set-volume @DEFAULT_AUDIO_SINK@ "${volume}%"
    notify_volume
}

volume-down() {
    get_volume
    volume=$((volume - VOLUMESTEP))
    if [[ ${volume} -lt ${VOLUMEMIN} ]]; then
        volume=${VOLUMEMIN}
    fi
    wpctl set-volume @DEFAULT_AUDIO_SINK@ "${volume}%"
    notify_volume
}

CMD="${1:-status}"
case $CMD in
status)
    status
    ;;
toggle-mute)
    toggle-mute
    ;;
volume-up)
    volume-up
    ;;
volume-down)
    volume-down
    ;;
esac

# Refresh Waybar on actions
pkill -SIGRTMIN+7 waybar
