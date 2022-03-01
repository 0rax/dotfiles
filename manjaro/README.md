# Manjaro Setup

## Global Setup

### Give access to dictionaries to VSCode

```sh
ln -s /usr/share/hunspell ~/.config/Code/Dictionaries
```

### Display Environment Themes

- Application: Matcha-Dark-Azul
- Cursor: Xcursor-breeze-snow
- Icons: Papirus-Dark
- Font: Cantarell Regular

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
