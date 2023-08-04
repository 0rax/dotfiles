#!/usr/bin/env bash

TEMPCRITICAL=70
THERMALZONE="/sys/class/thermal/thermal_zone7/"
DISKMOUNT="/"

TEMPTYPE=$(cat "${THERMALZONE}/type")

calc(){ awk "BEGIN { print $* }"; }

cpu_active_prev=0
cpu_total_prev=0
cpu() {
    # Fetch CPU data
    read -r user nice system idle iowait softirq steal < <(awk '/cpu /{print $2" "$3" "$4" "$5" "$6" "$8" "$9}' /proc/stat)
    cpu_active=$(calc "$user+$system+$nice+$softirq+$steal")
    cpu_total=$(calc "$user+$system+$nice+$softirq+$steal+$idle+$iowait")
    cpu_pct=$(calc "($cpu_active-$cpu_active_prev) / ($cpu_total-$cpu_total_prev) * 100")
    cpu_active_prev=${cpu_active}
    cpu_total_prev=${cpu_total}
    cpu_freq=$(awk -F: '/cpu MHz/{ sum += $2/1000; i++ } END { if (i > 0) print sum / i }' /proc/cpuinfo)
}

temperature() {
    # Fetch Temperature data
    temp=$(awk '{ print $N/1000 }' "${THERMALZONE}/temp")
}

memory() {
    # Fetch RAM data
    ram_total=$(awk '/MemTotal/{ print $2/1024/1024 }' /proc/meminfo)
    ram_avail=$(awk '/MemAvailable/{ print $2/1024/1024 }' /proc/meminfo)
    ram_used=$(calc "${ram_total} - ${ram_avail}")
    ram_pct=$(calc "${ram_used} / ${ram_total} * 100")
}

swap() {
    # Fetch Swap data
    swap_total=$(awk '/SwapTotal/{ print $2/1024/1024 }' /proc/meminfo)
    swap_avail=$(awk '/SwapFree/{ print $2/1024/1024 }' /proc/meminfo)
    swap_used=$(calc "${swap_total} - ${swap_avail}")
    swap_pct=$(calc "${swap_used} / ${swap_total} * 100")
}

disk() {
    # Fetch Disk data
    disk_total=$(stat -f -c '%b %S' "${DISKMOUNT}" | awk '{ print ($1 * $2) / 1024 / 1024 / 1024 }')
    disk_avail=$(stat -f -c '%a %S' "${DISKMOUNT}" | awk '{ print ($1 * $2) / 1024 / 1024 / 1024 }')
    disk_used=$(calc "${disk_total} - ${disk_avail}")
    disk_pct=$(calc "${disk_used} / ${disk_total} * 100")
}

get_status() {
    # Fetch statuses and generate output variables
    cpu
    temperature
    memory
    swap
    disk

    text=$(printf "󰢻 %.0f%%  %d°C 󱘲 %.0f%%\n" "${cpu_pct}" "${temp}" "${ram_pct}")
    tooltip=$(printf "󰢻 %02.1f%% (%.3fGhz)
 %3d°C (${TEMPTYPE})
󱘲 %.1f%% (%.1fGB/%.1fGB)
󰾴 %.1f%% (%.1fGB/%.1fGB)
󰋊 %.1f%% (%.0fGB/%.0fGB)" "${cpu_pct}" "${cpu_freq}" "${temp}" "${ram_pct}" "${ram_used}" "${ram_total}" "${swap_pct}" "${swap_used}" "${swap_total}" "${disk_pct}" "${disk_used}" "${disk_total}")
    class=""
    if [[ ${temp} -ge ${TEMPCRITICAL} ]]; then
        class="critical"
    fi
}

status() {
    # Print system status once (shows average CPU usage since boot)
    get_status
    jq --null-input --compact-output '{"text":$text, "tooltip":$tooltip, "class":$class}' \
                --arg text "${text}" \
                --arg tooltip "${tooltip}" \
                --arg class "${class}"
}

watch() {
    # Print system status periodically (calculate CPU usage from each cycle)
    while true; do
        status
        sleep 3
    done
}

raw() {
    # Print a raw version of status
    get_status
    echo "${text}"
    echo "------------------"
    echo "${tooltip}"
}

CMD="${1:-status}"
case $CMD in
status)
    status
    ;;
watch)
    watch
    ;;
raw)
    raw
    ;;
esac
