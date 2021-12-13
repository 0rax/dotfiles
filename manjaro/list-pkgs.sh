#!/usr/bin/env bash
set -euo pipefail

pacman -Qqn
IFS=$'\n'
AUR=($(pacman -Qm))
for i in "${AUR[@]}"; do
	pkg="$(echo "$i" | cut -d' ' -f1)"
	echo "aur/$pkg"
done
