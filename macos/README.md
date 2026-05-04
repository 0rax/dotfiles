# macOS Setup

## Enable Local TimeMachine

```sh
tmutil addexclusion ~/.cache/
tmutil addexclusion ~/Temp
tmutil addexclusion ~/Downloads
tmutil addexclusion ~/Library/Application\ Support/rancher-desktop/
tmutil addexclusion ~/Library/Application\ Support/Claude/vm_bundles/

tmutil enable # This doesnt enable a schedule :'(
tmutil localsnapshot
```

## Rift setup

```sh
brew services start rift
brew services start sketchybar
```

## Cleanup

```sh
# Disable desktop
defaults write com.apple.finder CreateDesktop false
killall Finder

# Change default screenshot path
defaults write com.apple.screencapture location $HOME/Pictures/Screenshots/
```
