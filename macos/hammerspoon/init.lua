hs.loadSpoon("SpoonInstall")
spoon.SpoonInstall:andUse("EmmyLua")

hs.loadSpoon("ComposeKey")
spoon.ComposeKey:bindHotKeys({ compose = { {}, "f20" } })
spoon.ComposeKey:start()

hs.loadSpoon("Caffeine")
spoon.Caffeine:start()

hs.loadSpoon("Nightshift")
spoon.Nightshift:start()

require("brew")
require("switcher")
require("spotify")

hs.hotkey.bind({ "cmd" }, "l", function() hs.caffeinate.lockScreen() end)
hs.hotkey.bind({ "ctrl", "shift", "alt" }, "R", function() hs.reload() end)

hs.alert.show("Config loaded")
