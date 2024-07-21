# Arch Linux / Manjaro

## Packages

### Install packages from a file

```sh
cut -d# -f1 packages/file.pkgs | sed '/^$/d' | xargs -o yay -S --needed
```

### List explicitly installed packages

```sh
(pacman -Qqen; pacman -Qqem | sed 's|^|aur/|') | sort
```

### List wanted packages

```sh
sed 's/ *#.*$//;/^$/d;s/ +$//' packages/*.pkgs packages/extras/* | sort
```

## Config files

### Install user configuration files

```sh
cp -R $PWD/pacman                   ~/.config/
```

### Install system configuration files

```sh
sudo cp -R $PWD/systemd/logind.conf.d /etc/systemd/
sudo cp -R $PWD/systemd/sleep.conf.d  /etc/systemd/
```
