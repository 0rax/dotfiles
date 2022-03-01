# Sway

## Link software config files

```sh
ln -s $PWD/alactritty             ~/.config/alactritty
ln -s $PWD/sway                   ~/.config/sway
ln -s $PWD/swaylock               ~/.config/swaylock
ln -s $PWD/waybar                 ~/.config/waybar
ln -s $PWD/gtk-3.0                ~/.config/gtk-3.0
ln -s $PWD/gtk-4.0                ~/.config/gtk-4.0
ln -s $PWD/gammastep              ~/.config/gammastep
ln -s $PWD/kanshi                 ~/.config/kanshi
ln -s $PWD/mako                   ~/.config/mako
ln -s $PWD/xdg/user-dirs.dirs     ~/.config/user-dirs.dirs
ln -s $PWD/libinput/libinput-gestures.conf ~/.config/libinput-gestures.conf
```

## Install & enable `systemd` unit files

```sh
mkdir -p ~/.config/systemd/user/
cp systemd/user/* ~/.config/systemd/user/
systemctl --user enable --now waybar gammastep kanshi mako swayidle
```