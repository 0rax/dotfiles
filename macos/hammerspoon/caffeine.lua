local ICONS = {
    -- on  = hs.image.imageFromPath(os.getenv("HOME") .. "/.hammerspoon/assets/caffeine-on.pdf"),
    -- off = hs.image.imageFromPath(os.getenv("HOME") .. "/.hammerspoon/assets/caffeine-off.pdf"),
    on  = hs.image.imageFromPath(os.getenv("HOME") .. "/.hammerspoon/assets/mdi/sleep-off.svg"),
    off = hs.image.imageFromPath(os.getenv("HOME") .. "/.hammerspoon/assets/mdi/sleep.svg"),
}

local caffeine = hs.menubar.new(true, "caffeine")

local function setMenubar(state)
    caffeine:setIcon(state and ICONS.on or ICONS.off)
    caffeine:setTooltip("Caffeine\n" .. (state and "Screen will stay awake" or "Screen will sleep normally"))
end

local function refresh()
    local state = hs.caffeinate.get("displayIdle")
    setMenubar(state)
end

local function setCaffeine(state)
    hs.caffeinate.set("displayIdle", state)
    setMenubar(state)
    hs.notify.new({
        title           = "Caffeine",
        informativeText = state and "Screen will stay awake" or "Screen will sleep normally",
        withdrawAfter   = 2,
    }):send()
end

caffeine:setClickCallback(function()
    setCaffeine(not hs.caffeinate.get("displayIdle"))
end)

refresh()
