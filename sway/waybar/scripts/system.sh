#!/usr/bin/env bash

calc(){ awk "BEGIN { print $* }"; }

TEMPCRITICAL=70
THERMALZONE="/sys/class/thermal/thermal_zone7/"
DISKMOUNT="/"

## CPU
CPUPCT=$(grep "cpu " /proc/stat | awk '{ idle = $5; total = 0; for (i=2; i<=NF; i++) { total += $i}; print (1-(idle)/(total))*100 }')
CPUFREQ=$(grep 'cpu MHz' /proc/cpuinfo | awk -F: -v N=2 '{ sum += $N/1000 } END { if (NR > 0) print sum / NR }')

## Temperature Data
TEMPCUR=$(awk '{ print $N/1000 }' < "${THERMALZONE}/temp")
TEMPTYPE=$(cat "${THERMALZONE}/type")

## RAM
RAMTOTAL=$(grep MemTotal /proc/meminfo | awk '{ print $2/1024/1024 }')
RAMAVAIL=$(grep MemAvailable /proc/meminfo | awk '{ print $2/1024/1024 }')
RAMUSED=$(calc "${RAMTOTAL} - ${RAMAVAIL}")
RAMPCT=$(calc "${RAMUSED} / ${RAMTOTAL} * 100")

## Swap
SWAPTOTAL=$(grep SwapTotal /proc/meminfo | awk '{ print $2/1024/1024 }')
SWAPAVAIL=$(grep SwapFree /proc/meminfo | awk '{ print $2/1024/1024 }')
SWAPUSED=$(calc "${SWAPTOTAL} - ${SWAPAVAIL}")

## Disk
DISKTOTAL=$(stat -f -c '%b %S' "${DISKMOUNT}" | awk '{ print ($1 * $2) / 1024 / 1024 / 1024 }')
DISKAVAIL=$(stat -f -c '%a %S' "${DISKMOUNT}" | awk '{ print ($1 * $2) / 1024 / 1024 / 1024 }')
DISKUSED=$(calc "${DISKTOTAL} - ${DISKAVAIL}")

## Waybar output
TEXT=$(printf "󰢻 %.0f%%  %d°C 󱘲 %.0f%%\n" "${CPUPCT}" "${TEMPCUR}" "${RAMPCT}")
TOOLTIP=$(printf "󰢻 %02.1f%% (%.3fGhz)
 %d°C (%s)
󱘲 %.1fGB/%.1fGB
󰾴 %.1fGB/%.1fGB
󰋊 %.1fGB/%.1fGB" "${CPUPCT}" "${CPUFREQ}" "${TEMPCUR}" "${TEMPTYPE}" "${RAMUSED}" "${RAMTOTAL}" "${SWAPUSED}" "${SWAPTOTAL}" "${DISKUSED}" "${DISKTOTAL}")
CLASS=""

CMD="${1:-status}"
case $CMD in
status)
    if [[ ${TEMPCUR} -ge ${TEMPCRITICAL} ]]; then
        CLASS="critical"
    fi
    jq --null-input --compact-output '{"text":$text, "tooltip":$tooltip, "class":$class}' \
                --arg text "${TEXT}" \
                --arg tooltip "${TOOLTIP}" \
                --arg class "${CLASS}"
    ;;
raw)
    echo "${TEXT}"
    echo "------------------"
    echo "${TOOLTIP}"
    ;;
esac
