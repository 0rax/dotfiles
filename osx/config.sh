#!/bin/sh

# Config
SCREENSHOT_PATH=~/Pictures/Screenshots/
HIDDEN_FILES=false

# Change default screenshot path
defaults write com.apple.screencapture location ${SCREENSHOT_PATH}

# Show hidden files
if [ "${HIDDEN_FILES}" = "true" ]; then
    defaults write com.apple.Finder AppleShowAllFiles TRUE
else
    defaults write com.apple.Finder AppleShowAllFiles false
fi

# Apply all config by restart system app
killall SystemUIServer
killall Finder
