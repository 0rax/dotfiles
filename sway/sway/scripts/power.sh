#!/bin/sh

op=$(printf "img:/usr/share/icons/Papirus/48x48/apps/system-lock-screen.svg:text:Lock
img:/usr/share/icons/Papirus/48x48/apps/gnome-logout.svg:text:Logout
img:/usr/share/icons/Papirus/48x48/apps/sleep.svg:text:Suspend
img:/usr/share/icons/Papirus/48x48/apps/system-hibernate.svg:text:Hibernate
img:/usr/share/icons/Papirus/48x48/apps/system-shutdown.svg:text:Poweroff
img:/usr/share/icons/Papirus/48x48/apps/system-reboot.svg:text:Reboot" \
    | wofi --cache-file=/dev/null --columns=2 --width=320 --height=172 --show dmenu \
    | awk -F: '{print tolower($NF)}')

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
