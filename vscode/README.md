# VS Code Configuration

## Install configuration

- Find your current configuration folder for your system and back it up:
  - Linux: `~/.config/Code/User/` or `~/.code/` depending on the platform
  - macOS: `~/Library/Application\ Support/Code/User/`
- Remove this folder and link this current folder in its place

## Extensions

### Install extensions from a file

```sh
xargs -tL 1 code --install-extension < extensions.txt
```

### Export installed extensions

```sh
code --list-extensions > extensions.txt
```
