# Arch Linux / Manjaro

## Packages

### Install packages from a file

```sh
cut -d# -f1 packages/file.pkgs | sed '/^$/d' | xargs -o yay -S --needed
```

### List explicitly installed packages

```sh
pacman -Qqen
pacman -Qqem | sed 's|^|aur/|'
```

## Config files

### Install configuration files

```sh
cp -R $PWD/pacman                   ~/.config/
cp -R $PWD/yubikey-touch-detector   ~/.config/
```
