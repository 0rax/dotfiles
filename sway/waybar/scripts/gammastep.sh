#!/usr/bin/env bash

SERVICE="gammastep.service"
STATUS=$(systemctl --user status "${SERVICE}" | grep "Active: active (running)" >/dev/null; echo "$?")

CMD="${1:-status}"
case $CMD in
status)
    if [[ "${STATUS}" = "1" ]]; then
        jq --null-input --compact-output \
            '{"alt":$alt, "text":$text, "tooltip":$tooltip, "class":$class}' \
            --arg alt disabled \
            --arg text disabled \
            --arg tooltip "󰌶 Disabled" \
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
        jq --null-input --compact-output \
            '{"alt":$alt, "text":$text, "tooltip":$tooltip, "class":$class}' \
            --arg alt "${ALT}" \
            --arg text "${TEMP}" \
            --arg tooltip "${ICON} ${PERIOD} (${TEMP})" \
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
    if [[ "${STATUS}" = "1" ]]; then
        systemctl --user start "${SERVICE}"
    else
        systemctl --user stop "${SERVICE}"
    fi
    ;;
esac
