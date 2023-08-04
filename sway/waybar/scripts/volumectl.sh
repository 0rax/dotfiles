#!/usr/bin/env bash

VOLUMEMIN=0
VOLUMEMAX=100
VOLUMESTEP=5
WOBSOCK="$XDG_RUNTIME_DIR/wob.sock"

wob_output() {
    if [[ ${muted} -eq 1 ]]; then
        volume=$((volume + 1000))
    fi
    if [[ ${volume} -eq 1100 ]]; then
        volume=$((volume - 1))
    fi
    echo "${volume}" > "${WOBSOCK}"
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
}

toggle-mute() {
    wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle
    get_volume
    wob_output
}

volume-up() {
    get_volume
    volume=$((volume + VOLUMESTEP))
    if [[ ${volume} -gt ${VOLUMEMAX} ]]; then
        volume=${VOLUMEMAX}
    fi
    wpctl set-volume @DEFAULT_AUDIO_SINK@ "${volume}%"
    wob_output
}

volume-down() {
    get_volume
    volume=$((volume - VOLUMESTEP))
    if [[ ${volume} -lt ${VOLUMEMIN} ]]; then
        volume=${VOLUMEMIN}
    fi
    wpctl set-volume @DEFAULT_AUDIO_SINK@ "${volume}%"
    wob_output
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
