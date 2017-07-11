-- Logger Configuration

hs.logger.defaultLogLevel = 'debug'

-- Modules

-- require("spotify")
require("caffeine")
require("spectacle")
require("spotify")

-- Global Bindings

hs.hotkey.bind({"ctrl", "alt", "cmd"}, "R", function() hs.reload() end)

-- Notify on config load
hs.alert.show("Config loaded")
