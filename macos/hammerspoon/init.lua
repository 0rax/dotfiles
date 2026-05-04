hs.loadSpoon("SpoonInstall")
spoon.SpoonInstall:andUse("EmmyLua")

WarpMouse = hs.loadSpoon("WarpMouse")
WarpMouse:start()

hs.loadSpoon("ComposeKey")
spoon.ComposeKey:bindHotKeys({ compose = { {}, "f20" } })
spoon.ComposeKey:start()

hs.loadSpoon("Caffeine")
spoon.Caffeine:start()

hs.loadSpoon("NightShift")
spoon.NightShift:start()

hs.loadSpoon("BrewUpdater")
spoon.BrewUpdater:start()

require("switcher")
require("spotify")
require("screencapture")

hs.hotkey.bind({ "alt" }, "d", function() hs.application.launchOrFocus("Apps") end)
hs.hotkey.bind({ "cmd" }, "l", function() hs.caffeinate.lockScreen() end)
hs.hotkey.bind({ "alt" }, "l", function() hs.caffeinate.lockScreen() end)
hs.hotkey.bind({ "ctrl", "shift", "cmd" }, "R", function() hs.reload() end)
hs.hotkey.bind({ "ctrl", "shift", "cmd" }, "c", function() hs.openConsole() end)

hs.alert.show("Config loaded")
