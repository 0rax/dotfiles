# VSCode Configuration
## Install configuration

- Find your current configuration folder for your system and back it up:
  - macOS: `~/Library/Application\ Support/Code/User/`
  - Linux: `~/.config/Code/User/` or `~/.code/` depending on the platform
- Remove this folder and link this current folder in its place

## Install extensions from list
```sh
cat extensions.csv | cut -d '#' -f 1 | tr -d ' \t' | xargs -L 1 code --install-extension
```

## Export installed extensions
```sh
code --list-extensions > extensions.csv
```
