local obj          = {}
obj.__index        = obj

obj.name           = "NightShift"
obj.version        = "1.1"
obj.author         = "JP Roemer"
obj.license        = "MIT"

obj.nightlightPath = "/opt/homebrew/bin/nightlight"
obj.pollInterval   = 10
obj.customSchedule = "22:00 7:00"

local _path        = debug.getinfo(1, "S").source:match("^@(.*/)") or ""

local MSGS         = {
    night = "Night Shift on",
    day   = "Night Shift scheduled — daytime",
    off   = "Night Shift disabled",
}

function obj:init()
    self._icons     = {
        night = hs.image.imageFromPath(_path .. "assets/weather-sunset.svg"),
        day   = hs.image.imageFromPath(_path .. "assets/weather-sunny.svg"),
        off   = hs.image.imageFromPath(_path .. "assets/weather-sunny-off.svg"),
    }
    self._lastState = nil
    self._timer     = nil
    self._info      = { status = "", temp = "", schedule = "", state = "off" }
    return self
end

function obj:start()
    -- TODO: check nightlight binary exists

    self._menubar = hs.menubar.new(true, "NightShift")
    self._menubar:setTooltip("Night Shift")
    self:_refresh()

    self._timer = hs.timer.doEvery(self.pollInterval, function() self:_refresh() end)
    return self
end

function obj:stop()
    if self._timer then
        self._timer:stop(); self._timer = nil
    end
    if self._menubar then
        self._menubar:delete(); self._menubar = nil
    end
    return self
end

function obj:_updateMenu()
    local i = self._info
    self._menubar:setMenu({
        { title = MSGS[i.state], disabled = true },
        { title = "-" },
        {
            title = i.state == "night" and "Turn off for Today" or "Turn on until Tomorrow",
            fn = function()
                self:_run("toggle")
                hs.timer.doAfter(0.2, function() self:_refresh() end)
            end
        },
        {
            title = "Color Temperature",
            menu = {
                { title = "20%",  fn = function() self:_setTemp(20) end,  checked = i.temp == "20" },
                { title = "40%",  fn = function() self:_setTemp(40) end,  checked = i.temp == "40" },
                { title = "60%",  fn = function() self:_setTemp(60) end,  checked = i.temp == "60" },
                { title = "80%",  fn = function() self:_setTemp(80) end,  checked = i.temp == "80" },
                { title = "100%", fn = function() self:_setTemp(100) end, checked = i.temp == "100" },
            },
        },
        {
            title = "Schedule",
            menu = {
                { title = "-" },
                {
                    title = "Off",
                    fn = function()
                        self:_run("schedule stop")
                        hs.timer.doAfter(0.2, function() self:_refresh() end)
                    end,
                    checked = i.mode == "off"
                },
                {
                    title = "Sunset to Sunrise",
                    fn = function()
                        self:_run("schedule start")
                        hs.timer.doAfter(0.2, function() self:_refresh() end)
                    end,
                    checked = i.mode == "sunset"
                },
                {
                    title = "Custom (" .. (i.mode == "custom" and i.schedule or
                        self.customSchedule:gsub(" ", " to ")) .. ")",
                    fn = function()
                        self:_run("schedule " .. self.customSchedule)
                        hs.timer.doAfter(0.2, function() self:_refresh() end)
                    end,
                    checked = i.mode == "custom"
                },
            },
        },
        { title = "-" },
        {
            title = "Display Settings...",
            fn = function()
                hs.execute("open 'x-apple.systempreferences:com.apple.preference.displays?NightShift'")
            end
        },
    })
end

function obj:_run(cmd)
    return hs.execute(self.nightlightPath .. " " .. cmd .. " 2>/dev/null"):gsub("%s+$", "")
end

function obj:_stateFromStatus(status)
    if status:sub(1, 2) == "on" then return "night" end
    if status:find("until") then return "day" end
    return "off"
end

function obj:_modeFromSchedule(schedule)
    if schedule == "off" then return "off" end
    if schedule == "sunset to sunrise" then return "sunset" end
    return "custom"
end


function obj:_setTemp(value)
    self:_run("temp " .. value)
    hs.timer.doAfter(0.2, function() self:_refresh() end)
end

function obj:_refresh()
    local status   = self:_run("status")
    local temp     = self:_run("temp")
    local schedule = self:_run("schedule")
    local state    = self:_stateFromStatus(status)
    local mode     = self:_modeFromSchedule(schedule)

    self._info     = { status = status, temp = temp, schedule = schedule, state = state, mode = mode }
    self._menubar:setIcon(self._icons[state])
    self:_updateMenu()

    if state ~= self._lastState then
        if self._lastState ~= nil then
            hs.notify.new({
                title         = "Night Shift",
                subTitle      = MSGS[state],
                withdrawAfter = 5,
            }):send()
        end
        self._lastState = state
    end
end

return obj
