require("compose")
require("caffeine")
require("nightshift")
require("brew")
require("switcher")
require("spotify")

hs.hotkey.bind({ "cmd" }, "l", function() hs.caffeinate.lockScreen() end)
hs.hotkey.bind({ "ctrl", "shift", "alt" }, "R", function() hs.reload() end)

hs.alert.show("Config loaded")
