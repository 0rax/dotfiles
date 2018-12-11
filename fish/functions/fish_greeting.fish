#!/usr/bin/env fish
# -*-  mode:fish; tab─width:4  -*-

#
#       ╱ ╲
# ┌───╱     ╲ ───┐ user@hostname
# │ ╱ ╲     ╱ ╲  │ OS ..... OS Type & Release
# ╱     ╲ ╱     ╲  Kernel . Kernel Type
# ╲     ╱ ╲     ╱  Arch ... CPU Architecture
# │ ╲ ╱     ╲ ╱  │ CPU .... Number of CPU cores
# └───╲     ╱ ───┘ Load ... Load Average
#       ╲ ╱
#

function fish_greeting

    if set -q SUDO_UID
      return
    end

    alias _s "set_color blue"
    alias _t "set_color red"
    alias _i "set_color yellow"
    alias _n "set_color normal"

    set -l OS
    set -l LOAD
    set -l CPU

    if test -f /etc/os-release
        set OS (cat /etc/os-release | sed -nE 's/^PRETTY_NAME="(.*)"$/\1/p')
        set LOAD (cat /proc/loadavg | cut -d " " -f1-3)
        set CPU (cat /proc/cpuinfo | grep -E '^processor\s+:' | wc -l)
    else if command -s lsb_release > /dev/null
        set OS (lsb_release)
        set LOAD (cat /proc/loadavg | cut -d " " -f1-3)
        set CPU (cat /proc/cpuinfo | grep -E '^processor\s+:' | wc -l)
    else if command -s sw_vers > /dev/null
        set OS 'Mac OS X' (sw_vers -productVersion)
        set LOAD (sysctl -n vm.loadavg | cut -d" " -f2-4)
        set CPU (sysctl -a machdep.cpu.thread_count | cut -d' ' -f2)
    else
        set OS 'Unknown'
        set CPU '?'
        set LOAD '? ? ?'
    end

    echo (_n)
    echo (_t)'       ╱ ╲        '             (_i)
    echo (_s)' ┌───'(_t)'╱     ╲ '(_s)'───┐ ' (_i)$USER(_s)@(_t)(hostname)
    echo (_s)' │ '(_i)'╱ ╲     ╱ ╲  '(_s)'│ ' (_i)'OS '(_s).....(_t) $OS
    echo (_i)' ╱     ╲ ╱     ╲  '             (_i)'Kernel '(_s).(_t) (uname -rs)
    echo (_i)' ╲     ╱ ╲     ╱  '             (_i)'Arch '(_s)...(_t) (uname -m)
    echo (_s)' │ '(_i)'╲ ╱     ╲ ╱  '(_s)'│ ' (_i)'CPU '(_s)....(_t) "$CPU core(s)"
    echo (_s)' └───'(_t)'╲     ╱ '(_s)'───┘ ' (_i)'Load '(_s)...(_t) $LOAD
    echo (_t)'       ╲ ╱        '             (_i)
    echo (_n)

end
