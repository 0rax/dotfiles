#!/bin/sh

case $1 in
period-changed)
    icon="/usr/share/icons/Papirus-Dark/24x24/panel/redshift-status-on.svg"
    if [ "$3" = "none" ]; then
        icon="/usr/share/icons/Papirus-Dark/24x24/panel/redshift-status-off.svg"
    fi
    exec notify-send --app-name="Gammestep" --icon="${icon}" \
        --hint="string:x-canonical-private-synchronous:gammastep" \
        "Gammastep" "Period changed to $3"
    ;;
esac
