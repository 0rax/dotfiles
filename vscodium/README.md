# VSCodium Configuration

## Install configuration

- Find your current configuration folder for your system and back it up:
  - Linux: `~/.config/VSCodium/User/`
  - macOS: `~/Library/Application\ Support/VSCodium/User/`
- Remove this folder and link this current folder in its place

## Extensions

### Install extensions from a file

```sh
xargs -tL 1 codium --install-extension < extensions.txt
```

### Export installed extensions

```sh
codium --list-extensions > extensions.txt
```
