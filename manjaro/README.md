# Manjaro Setup

## Global Setup

### Display Environment Themes

- Application: `Matcha-Dark-Azul`
- Icons: `Papirus-Dark`
- Cursor: `Vanilla-DMZ`
- Font: `Cantarell Regular`

## AUR Setup

See https://wiki.archlinux.org/index.php/Makepkg#Reduce_source_download_and_extraction_times to make `makepkg` faster.

## Yubikey U2F For Sudo

See:
- https://po-ru.com/2019/06/22/using-u2f-for-passwordless-sudo
- https://askubuntu.com/questions/1071027/how-to-configure-a-u2f-keysuch-as-a-yubikey-for-system-wide-2-factor-authentic
- https://support.yubico.com/support/solutions/articles/15000011356-ubuntu-linux-login-guide-u2f
- https://developers.yubico.com/pam-u2f/

Requires
- `pam-u2f`
- `libfido2`
- `libu2f-host`
- `yubikey-personalization`

## Packages

### List explicitly installed packages

```sh
pacman -Qqen
pacman -Qqem | sed 's|^|aur/|'
```

## Bootloader

## Bootloader
refind
### On Surface Laptop
# Add the following line to /boot/efi/EFI/refind/refind.conf
# extra_kernel_version_strings linux-surface,linux
# Add at the end of /boot/refind_linux.conf "Boot with standard options" kernel params
# reboot=pci
### To add & enable theme
# Clone repository https://github.com/bobafetthotmail/refind-theme-regular
# Check and run `./install.sh`
