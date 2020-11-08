#!/usr/bin/env fish
# -*-  mode:fish; tab─width:4  -*-

#
#         ╱ ╲
#   ┌───╱     ╲───┐   user@hostname
#   │ ╱ ╲     ╱ ╲ │   OS ..... OS Type & Release
#   ╱     ╲ ╱     ╲   Kernel . Kernel Type
#   ╲     ╱ ╲     ╱   Arch ... CPU Architecture
#   │ ╲ ╱     ╲ ╱ │   CPU .... CPU Core / CPU Thread
#   └───╲     ╱───┘   Load ... Load Average
#         ╲ ╱
#

function fish_greeting

    # Do no show on sudo or call to kubie
    if set -q SUDO_UID; or set -q KUBIE_ACTIVE
      return
    end

    alias _s "set_color blue"
    alias _t "set_color red"
    alias _i "set_color yellow"
    alias _n "set_color normal"

    set -l PLATFORM (uname)
    set -l OS 'Unknown'
    set -l LOAD '? ? ?'
    set -l CORE '?'
    set -l THREAD '?'
    set -l DEVICE '?'
    # Parse /proc/meminfo MemFree / MemAvailable to show memory usage
    if [ "$PLATFORM" = "Linux" ]
        if test -f /etc/os-release
            set OS (cat /etc/os-release | sed -nE 's/^PRETTY_NAME="(.*)"$/\1/p')
        else if command -s lsb_release > /dev/null
            set OS (lsb_release)
        end
        set LOAD (cat /proc/loadavg | cut -d " " -f1-3)
        set CORE (sed -nE 's/^((physical id)|(cpu cores))\s+: ([0-9]+)$/\4/p' /proc/cpuinfo | paste -d " " - - | sort -u | awk '{s+=$2}END{print s}')
        set THREAD (grep -c "^processor" /proc/cpuinfo)
	set DEVICE (cat /sys/devices/virtual/dmi/id/product_name)
    else if [ "$PLATFORM" = "Darwin" ]
        set OS 'Mac OS X' (sw_vers -productVersion)
        set LOAD (sysctl -n vm.loadavg | cut -d" " -f2-4)
        set CORE (sysctl -a machdep.cpu.core_count | cut -d' ' -f2)
        set THREAD (sysctl -a machdep.cpu.thread_count | cut -d' ' -f2)
	set DEVICE (sysctl -n hw.model)
    end

    echo ''
    echo       '         '(_t)'╱ ╲'(_n)'        '
    echo '   '(_s)'┌───'(_t)'╱     ╲'(_s)'───┐'(_n)'  ' (_i)$USER(_s) @ (_t)(hostname)(_n)
    echo '   '(_s)'│ '(_i)'╱ ╲     ╱ ╲ '(_s)'│'(_n)'  ' (_i)'OS '(_s).....(_t) $OS \((uname -m)\)(_n)
    echo       '   '(_i)'╱     ╲ ╱     ╲'(_n)'  '       (_i)'Kernel '(_s).(_t) (uname -rs)(_n)
    echo       '   '(_i)'╲     ╱ ╲     ╱'(_n)'  '       (_i)'Uptime '(_s).(_t) (uptime -p)(_n)
    echo '   '(_s)'│ '(_i)'╲ ╱     ╲ ╱ '(_s)'│'(_n)'  ' (_i)'CPU '(_s)....(_t) "$CORE Cores / $THREAD Threads"(_n)
    echo '   '(_s)'└───'(_t)'╲     ╱'(_s)'───┘'(_n)'  ' (_i)'Load '(_s)...(_t) $LOAD(_n)
    echo       '         '(_t)'╲ ╱'(_n)'        '
    echo ''

end
