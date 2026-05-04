local obj   = {}
obj.__index = obj

obj.name    = "Caffeine"
obj.version = "1.1"
obj.author  = "JP Roemer"
obj.license = "MIT"

local _path = debug.getinfo(1, "S").source:match("^@(.*/)") or ""

function obj:init()
    self._icons = {
        on  = hs.image.imageFromPath(_path .. "assets/sleep-off.svg"),
        off = hs.image.imageFromPath(_path .. "assets/sleep.svg"),
    }
    self._state = false
    return self
end

function obj:start()
    self._menubar = hs.menubar.new(true, "Caffeine")
    self._menubar:setTooltip("Caffeine")
    self:_updateState(hs.caffeinate.get("displayIdle"))
    return self
end

function obj:stop()
    if self._menubar then
        self._menubar:delete(); self._menubar = nil
    end
    return self
end

function obj:_updateMenu()
    local label = self._state and "Screen will stay awake" or "Screen will sleep normally"
    self._menubar:setMenu({
        { title = label,                                                   disabled = true },
        { title = "-" },
        { title = self._state and "Disable Caffeine" or "Enable Caffeine", fn = function() self:_toggle() end },
        { title = "-" },
        {
            title = "Lock Screen Settings...",
            fn = function()
                hs.execute(
                    "open 'x-apple.systempreferences:com.apple.Lock'")
            end
        },
        {
            title = "Battery Settings...",
            fn = function()
                hs.execute(
                    "open 'x-apple.systempreferences:com.apple.Battery-Settings.extension'")
            end
        },
    })
end

function obj:_updateState(state)
    self._state = state
    self._menubar:setIcon(state and self._icons.on or self._icons.off)
    self:_updateMenu()
end

function obj:_toggle()
    local state = not hs.caffeinate.get("displayIdle")
    hs.caffeinate.set("displayIdle", state)
    self:_updateState(state)
    hs.notify.new({
        title         = "Caffeine",
        subTitle      = state and "Screen will stay awake" or "Screen will sleep normally",
        withdrawAfter = 5,
    }):send()
end

return obj
