#!/usr/bin/env bash

SERVICE="gammastep.service"
BRIGHTNESSMIN="10"
BRIGHTNESSMAX="100"
WOBSOCK="$XDG_RUNTIME_DIR/wob.sock"

BRIGHTNESS=$(brightnessctl -m info | head -n1 | cut -d, -f4 | tr -d '%')
STATUS=$(systemctl --user status "${SERVICE}" | grep "Active: active (running)" >/dev/null; echo "$?")
JQTMPL='{"alt":$alt, "text":$text, "tooltip":$tooltip, "class":$class}'

CMD="${1:-status}"
case $CMD in
status)
    if [[ ${STATUS} = "1" ]]; then
        jq --null-input --compact-output "${JQTMPL}" \
            --arg alt disabled \
            --arg text disabled \
            --arg tooltip "󰌶 Disabled (none)
󰃟 Brightness (${BRIGHTNESS}%)" \
            --arg class disabled
    else
        OUTPUT=$(gammastep -p 2>&1)
        PERIOD=$(echo "${OUTPUT}" | sed -nE 's|^Notice: Period: ([A-Za-Z]+)( .*)?$|\1|p')
        TEMP=$(echo "${OUTPUT}" | sed -nE 's|^Notice: Color temperature: (.*)$|\1|p')
        ALT=$(echo "${PERIOD}" | tr '[:upper:]' '[:lower:]')
        ICON="󰌵"
        # case ${PERIOD} in
        # Daytime)
        #     ICON="󰖙" ;;
        # Transition)
        #     ICON="󰖚" ;;
        # Night)
        #     ICON="" ;;
        # esac
        jq --null-input --compact-output "${JQTMPL}" \
            --arg alt "${ALT}" \
            --arg text "${TEMP}" \
            --arg tooltip "${ICON} ${PERIOD} (${TEMP})
󰃟 Brightness (${BRIGHTNESS}%)" \
            --arg class "${ALT}"
    fi
    ;;
start)
    systemctl --user start "${SERVICE}"
    ;;
stop)
    systemctl --user stop "${SERVICE}"
    ;;
toggle)
    if [[ ${STATUS} = "1" ]]; then
        systemctl --user start "${SERVICE}"
    else
        systemctl --user stop "${SERVICE}"
    fi
    ;;
brightness-up)
    BRIGHTNESS=$((BRIGHTNESS + 5))
    if [[ ${BRIGHTNESS} -gt ${BRIGHTNESSMAX} ]]; then
        BRIGHTNESS=${BRIGHTNESSMAX}
    fi
    brightnessctl -q set "${BRIGHTNESS}%"
    echo "${BRIGHTNESS}" > "${WOBSOCK}"
    ;;
brightness-down)
    BRIGHTNESS=$((BRIGHTNESS - 5))
    if [[ ${BRIGHTNESS} -lt ${BRIGHTNESSMIN} ]]; then
        BRIGHTNESS=${BRIGHTNESSMIN}
    fi
    brightnessctl -q set "${BRIGHTNESS}%"
    echo "${BRIGHTNESS}" > "${WOBSOCK}"
    ;;
esac

# Refresh Waybar on actions
if [[ ${CMD} != "status" ]]; then
    pkill -SIGRTMIN+10 waybar
fi
