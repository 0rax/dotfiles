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
