local obj = {}
obj.__index = obj

obj.name         = "Nightshift"
obj.version      = "1.0"
obj.author       = "JP Roemer"
obj.license      = "MIT"

obj.nightlightPath = "/opt/homebrew/bin/nightlight"
obj.pollInterval   = 10

local _path = debug.getinfo(1, "S").source:match("^@(.*/)") or ""

local MSGS = {
    night = "Night Shift on",
    day   = "Night Shift scheduled — daytime",
    off   = "Night Shift disabled",
}

function obj:init()
    self._icons = {
        night = hs.image.imageFromPath(_path .. "assets/weather-sunset.svg"),
        day   = hs.image.imageFromPath(_path .. "assets/weather-sunny.svg"),
        off   = hs.image.imageFromPath(_path .. "assets/weather-sunny-off.svg"),
    }
    self._menubar   = hs.menubar.new(true, "nightshift")
    self._lastState = nil
    self._timer     = nil
    self._menubar:setClickCallback(function()
        self:_run("toggle")
        hs.timer.doAfter(0.2, function() self:_refresh() end)
    end)
    return self
end

function obj:start()
    self:_refresh()
    self._timer = hs.timer.doEvery(self.pollInterval, function() self:_refresh() end)
    return self
end

function obj:stop()
    if self._timer   then self._timer:stop();    self._timer   = nil end
    if self._menubar then self._menubar:delete(); self._menubar = nil end
    return self
end

function obj:_run(cmd)
    return hs.execute(self.nightlightPath .. " " .. cmd .. " 2>/dev/null"):gsub("%s+$", "")
end

function obj:_stateFromStatus(status)
    if status:sub(1, 2) == "on"    then return "night" end
    if status:find("until")        then return "day"   end
    return "off"
end

function obj:_refresh()
    local status   = self:_run("status")
    local temp     = self:_run("temp")
    local schedule = self:_run("schedule")
    local state    = self:_stateFromStatus(status)

    self._menubar:setIcon(self._icons[state])
    self._menubar:setTooltip("Nightshift\n" .. status .. "\n" .. "󰔏 " .. temp .. "%   " .. schedule)

    if state ~= self._lastState then
        if self._lastState ~= nil then
            hs.notify.new({
                title           = "Nightshift",
                informativeText = MSGS[state],
                withdrawAfter   = 2,
            }):send()
        end
        self._lastState = state
    end
end

return obj
