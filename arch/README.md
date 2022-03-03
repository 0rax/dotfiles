# Arch Linux Setup

## Packages

### Install packages from a file

```sh
sed 's/^#.*//;s/\s*#.*$//;/^$/d' packages/file.pkgs | xargs -o yay -S
```

### List explicitly installed packages

```sh
pacman -Qqen
pacman -Qqem | sed 's|^|aur/|'
```
