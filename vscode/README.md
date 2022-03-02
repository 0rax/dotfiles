# VS Code Configuration

## Install configuration

- Find your current configuration folder for your system and back it up:
  - macOS: `~/Library/Application\ Support/Code/User/`
  - Linux: `~/.config/Code/User/` or `~/.code/` depending on the platform
- Remove this folder and link this current folder in its place

## Extensions

### Export installed extensions

```sh
code --list-extensions > extensions.txt
```

### Install extensions from list

```sh
xargs -tL 1 code --install-extension < extensions.txt
```
