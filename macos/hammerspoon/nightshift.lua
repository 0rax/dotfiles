-- Night Shift via nightlight CLI

local ICONS      = {
    night = hs.image.imageFromPath(os.getenv("HOME") .. "/.hammerspoon/assets/mdi/weather-sunset.svg"),
    day   = hs.image.imageFromPath(os.getenv("HOME") .. "/.hammerspoon/assets/mdi/weather-sunny.svg"),
    off   = hs.image.imageFromPath(os.getenv("HOME") .. "/.hammerspoon/assets/mdi/weather-sunny-off.svg"),
}

local MSGS       = {
    night = "Night Shift on",
    day   = "Night Shift scheduled — daytime",
    off   = "Night Shift disabled",
}

local nightshift = hs.menubar.new(true, "nightshift")
local lastState  = nil

local NIGHTLIGHT = "/opt/homebrew/bin/nightlight"

local function run(cmd)
    return hs.execute(NIGHTLIGHT .. " " .. cmd .. " 2>/dev/null"):gsub("%s+$", "")
end

-- "on[...]" → night, "off until X" → day (scheduled), "off" → disabled
local function stateFromStatus(status)
    if status:sub(1, 2) == "on" then return "night" end
    if status:find("until") then return "day" end
    return "off"
end

local function refresh()
    local status   = run("status")
    local temp     = run("temp")
    local schedule = run("schedule")
    local state    = stateFromStatus(status)

    nightshift:setIcon(ICONS[state])
    nightshift:setTooltip(
        "Nightshift\n" ..
        status .. "\n" ..
        "󰔏 " .. temp .. "%   " .. schedule
    )

    if state ~= lastState then
        if lastState ~= nil then
            hs.notify.new({
                title           = "Nightshift",
                informativeText = MSGS[state],
                withdrawAfter   = 2,
            }):send()
        end
        lastState = state
    end
end

nightshift:setClickCallback(function()
    run("toggle")
    hs.timer.doAfter(0.2, refresh)
end)

hs.timer.doEvery(10, refresh)
refresh()
