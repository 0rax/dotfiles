local obj = {}
obj.__index = obj

obj.name    = "Caffeine"
obj.version = "1.0"
obj.author  = "JP Roemer"
obj.license = "MIT"

local _path = debug.getinfo(1, "S").source:match("^@(.*/)") or ""

function obj:init()
    self._icons = {
        on  = hs.image.imageFromPath(_path .. "assets/sleep-off.svg"),
        off = hs.image.imageFromPath(_path .. "assets/sleep.svg"),
    }
    self._menubar = hs.menubar.new(true, "caffeine")
    self._menubar:setClickCallback(function() self:_toggle() end)
    return self
end

function obj:start()
    self:_refresh()
    return self
end

function obj:stop()
    if self._menubar then self._menubar:delete(); self._menubar = nil end
    return self
end

function obj:_toggle()
    local state = not hs.caffeinate.get("displayIdle")
    hs.caffeinate.set("displayIdle", state)
    self:_setMenubar(state)
    hs.notify.new({
        title           = "Caffeine",
        informativeText = state and "Screen will stay awake" or "Screen will sleep normally",
        withdrawAfter   = 2,
    }):send()
end

function obj:_refresh()
    self:_setMenubar(hs.caffeinate.get("displayIdle"))
end

function obj:_setMenubar(state)
    self._menubar:setIcon(state and self._icons.on or self._icons.off)
    self._menubar:setTooltip("Caffeine\n" .. (state and "Screen will stay awake" or "Screen will sleep normally"))
end

return obj
