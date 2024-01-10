#!/usr/bin/env bash

SERVICE="gammastep.service"
BRIGHTNESSMIN=10
BRIGHTNESSMAX=100
BRIGHTNESSSTEP=5

notify_brightness() {
    # icon="display-brightness-symbolic"
    # if [[ ${brightness} -eq 0 ]]; then
    #     icon="display-brightness-off-symbolic"
    # elif [[ ${brightness} -le 30 ]]; then
    #     icon="display-brightness-low-symbolic"
    # elif [[ ${brightness} -le 70 ]]; then
    #     icon="display-brightness-medium-symbolic"
    # else
    #     icon="display-brightness-high-symbolic"
    # fi
    icon="/usr/share/icons/Papirus-Dark/24x24/apps/display-brightness.svg"
    notify-send --app-name="Brightness" \
        --icon="${icon}" --hint="int:value:${brightness}" \
        --hint="string:x-canonical-private-synchronous:brightnessctl" \
        "Brigthness: ${brightness}%"
}

get_brightness() {
    brightness=$(brightnessctl -m info | head -n1 | cut -d, -f4 | tr -d '%')
}

get_status() {
    if systemctl --user status "${SERVICE}" | grep "Active: active (running)" >/dev/null; then
        output=$(gammastep -p 2>&1)
        period=$(echo "${output}" | sed -nE 's|^Notice: Period: ([A-Za-Z]+)( .*)?$|\1|p')
        temp=$(echo "${output}" | sed -nE 's|^Notice: Color temperature: (.*)$|\1|p')
        alt=$(echo "${period}" | tr '[:upper:]' '[:lower:]')
        icon="󰌵"
    else
        period="Disabled"
        temp="none"
        alt="disabled"
        icon="󰌶"
    fi
    text="${alt}"
    tooltip="${icon} ${period} (${temp})
󰃟 Brightness (${brightness}%)"
}

status() {
    get_brightness
    get_status
    jq --null-input --compact-output '{"alt":$alt, "text":$text, "tooltip":$tooltip, "class":$class}' \
        --arg alt "${alt}" \
        --arg text "${text}" \
        --arg tooltip "${tooltip}" \
        --arg class "${alt}"
}

raw() {
    get_brightness
    get_status
    alticon="${icon}"
    case ${period} in
    Daytime)
        alticon="󰖙" ;;
    Transition)
        alticon="󰖚" ;;
    Night)
        alticon="󰖔" ;;
    esac
    echo "${alticon} ${text}"
    echo "------------------"
    echo "${tooltip}"
}

start() {
    systemctl --user start "${SERVICE}"
}

stop() {
    systemctl --user stop "${SERVICE}"
}

toggle() {
    if systemctl --user status "${SERVICE}" | grep "Active: active (running)" >/dev/null; then
        stop
    else
        start
    fi
}

brightness-up() {
    get_brightness
    brightness=$((brightness + BRIGHTNESSSTEP))
    if [[ ${brightness} -gt ${BRIGHTNESSMAX} ]]; then
        brightness=${BRIGHTNESSMAX}
    fi
    brightnessctl -q set "${brightness}%"
    notify_brightness
}

brightness-down() {
    get_brightness
    brightness=$((brightness - BRIGHTNESSSTEP))
    if [[ ${brightness} -lt ${BRIGHTNESSMIN} ]]; then
        brightness=${BRIGHTNESSMIN}
    fi
    brightnessctl -q set "${brightness}%"
    notify_brightness
}

CMD="${1:-status}"
case $CMD in
status)
    status
    exit
    ;;
raw)
    raw
    exit
    ;;
start)
    start
    ;;
stop)
    stop
    ;;
toggle)
    toggle
    ;;
brightness-up)
    brightness-up
    ;;
brightness-down)
    brightness-down
    ;;
esac

# Refresh Waybar on actions
pkill -SIGRTMIN+10 waybar
