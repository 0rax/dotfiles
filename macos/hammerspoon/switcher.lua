local switcher = hs.window.switcher.new(
    hs.window.filter.new():setCurrentSpace(true):setDefaultFilter {},
    {
        showThumbnails        = false,
        showTitles            = false,
        showSelectedThumbnail = false,
        showSelectedTitle     = true,
        onlyActiveApplication = true,
        titleBackgroundColor  = { red = 0, green = 0, blue = 0, alpha = 0 },
        fontName              = "Menlo",
        textSize              = 11,
        textColor             = { red = 1, green = 1, blue = 1, alpha = 0.8 },
        backgroundColor       = { red = 0.08, green = 0.08, blue = 0.08, alpha = 0.92 },
        highlightColor        = { red = 0.4, green = 0.6, blue = 1.0, alpha = 0.3 },
        iconSize              = 48,
        selectedIconSize      = 64,
    }
)

hs.hotkey.bind({ "alt" }, "tab", function() switcher:next() end)
hs.hotkey.bind({ "alt", "shift" }, "tab", function() switcher:previous() end)
