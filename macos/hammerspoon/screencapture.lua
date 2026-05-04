local log = hs.logger.new("screencapture", "info")

local function capture(args)
    hs.task.new("/usr/sbin/screencapture", nil, args):start()
end

-- Print: active screen
hs.hotkey.bind({}, "f13", function()
    log:i("screen")
    local f = hs.mouse.getCurrentScreen():fullFrame()
    local rect = string.format("%d,%d,%d,%d", f.x, f.y, f.w, f.h)
    capture({ "-P", "-C", "-R", rect })
end)

-- Shift+Print: area (interactive selection)
hs.hotkey.bind({ "shift" }, "f13", function()
    log:i("area")
    capture({ "-P", "-i", "-J", "selection" })
end)

-- Ctrl+Print: window (interactive selection)
hs.hotkey.bind({ "ctrl" }, "f13", function()
    log:i("window")
    capture({ "-P", "-i", "-J", "window" })
end)

-- Alt+Print: clipboard (interactive selection)
hs.hotkey.bind({ "alt" }, "f13", function()
    log:i("clipboard")
    capture({ "-c", "-i" })
end)

-- Cmd+Print: screenshot and recording options
hs.hotkey.bind({ "cmd" }, "f13", function()
    hs.application.launchOrFocus("Screenshot")
end)
