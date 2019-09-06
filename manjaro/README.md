# Manjaro Setup

## Global Setup

### Docker automatic start & user access
```sh
sudo systemctl enable --now docker
sudo usermod -a -G docker $USER
```

### Give access to dictionaries to VSCode
```sh
ln -s /usr/share/hunspell ~/.config/Code/Dictionaries
```

## Laptop Setup

### Setup trackpage gesture via libinput-gestures
```sh
sudo usermod -a -G input $USER
libinput-gestures-setup autostart
libinput-gestures-setup start
```

## Keyboard Setup

### Remap capslock to backspace (needs to be added to autostart script)
```sh
setxkbmap -option caps:backspace
```

## Gnome Setup (DE/WM)
### Theme
- Set theme to Adapta, Icon to Papyius & Shell theme to Adapta-Nokto
- Use Kvantum Manager to set KDE + QT theme to KvAdapta
- Use QT5 Settings to set theme to kvantum and icon theme to Papyrus-Adapta-Nokto
- Run papirus-folders -C bluegrey

### Shell extension
- caffeine
- media-player-indictor
- no-annoyance
- dash-to-dock
- remove-dropdown-arrows

## Cinnamon Setup (DE/WM)
### Theme
- Set theme to Arc-Dark with Papirus-Dark icon pack
- Use Kvantum Manager to set KDE + QT theme to KvArcDark

### Applets
- [QRedshift](https://cinnamon-spices.linuxmint.com/applets/view/313)
- [ScreenShot](https://cinnamon-spices.linuxmint.com/applets/view/35)
