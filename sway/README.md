# Sway

## Update ly startup script & update Wayland session

```sh
sudo cp $PWD/ly/wsetup.sh /etc/ly/wsetup.sh
sudo cp $PWD/wayland-sessions/sway.desktop /usr/share/wayland-sessions/sway.desktop
```

## Install configurations

```sh
ln -s $PWD/alacritty                        ~/.config/alacritty
ln -s $PWD/sway                             ~/.config/sway
ln -s $PWD/swaylock                         ~/.config/swaylock
ln -s $PWD/waybar                           ~/.config/waybar
ln -s $PWD/wofi                             ~/.config/wofi
ln -s $PWD/gtk-3.0                          ~/.config/gtk-3.0
ln -s $PWD/gtk-4.0                          ~/.config/gtk-4.0
ln -s $PWD/gammastep                        ~/.config/gammastep
ln -s $PWD/mako                             ~/.config/mako
ln -s $PWD/xdg-desktop-portal               ~/.config/xdg-desktop-portal
ln -s $PWD/xdg-desktop-portal-wlr           ~/.config/xdg-desktop-portal-wlr
ln -s $PWD/libinput/libinput-gestures.conf  ~/.config/libinput-gestures.conf
ln -s $PWD/swappy                           ~/.config/swappy
ln -s $PWD/yubikey-touch-detector           ~/.config/yubikey-touch-detector
cp $PWD/xdg/user-dirs.dirs                  ~/.config/user-dirs.dirs
```

Kanshi configuration being pretty dependent on the system it is installed on, it's better to just copy the file and update it to match your specific system need.

```sh
mkdir -p ~/.config/kanshi
cp $PWD/kanshi/config ~/.config/kanshi
```

## Install & enable `systemd` unit files

```sh
systemctl --user disable gnome-keyring-daemon.service
mkdir -p ~/.config/systemd/user/
cp systemd/user/* ~/.config/systemd/user/
systemctl --user enable --now waybar.service
systemctl --user enable --now kanshi.service
systemctl --user enable --now swayidle.service
systemctl --user enable --now gammastep.service
systemctl --user enable --now mako.service
systemctl --user enable --now polkit-gnome-agent.service
systemctl --user enable --now libinput-gestures.service
systemctl --user enable --now gnome-keyring-daemon.socket
systemctl --user enable --now yubikey-touch-detector.service
```
