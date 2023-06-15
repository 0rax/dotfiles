#!/bin/sh

op=$(printf "img:/usr/share/icons/Papirus/48x48/apps/system-lock-screen.svg:text:Lock
img:/usr/share/icons/Papirus/48x48/apps/system-log-out.svg:text:Logout
img:/usr/share/icons/Papirus/48x48/apps/system-suspend.svg:text:Suspend
img:/usr/share/icons/Papirus/48x48/apps/system-hibernate.svg:text:Hibernate
img:/usr/share/icons/Papirus/48x48/apps/system-shutdown.svg:text:Poweroff
img:/usr/share/icons/Papirus/48x48/apps/system-reboot.svg:text:Reboot" \
    | wofi --allow-image --insensitive --dmenu --columns=2 --width=320 --height=174 \
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
