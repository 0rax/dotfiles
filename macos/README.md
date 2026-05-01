# macOS Setup

## Cleanup

```sh
# Disable desktop
defaults write com.apple.finder CreateDesktop false
killall Finder

# Change default screenshot path
defaults write com.apple.screencapture location $HOME/Pictures/Screenshots/
```
