#!/bin/sh

op=$(printf " Lock\n Logout\n Suspend\n Hibernate\n Poweroff\n Reboot\n" | wofi -i --dmenu --lines=4 --width=240 | awk '{print tolower($2)}')

case $op in
poweroff)
    systemctl poweroff
    ;;
reboot)
    systemctl reboot
    ;;
suspend)
    systemctl suspend
    ;;
hibernate)
    systemctl hibernate
    ;;
lock)
    swaylock
    ;;
logout)
    swaymsg exit
    ;;
esac
