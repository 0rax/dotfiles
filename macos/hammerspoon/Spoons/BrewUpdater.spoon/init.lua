local obj         = {}
obj.__index       = obj

obj.name          = "BrewUpdater"
obj.version       = "1.0"
obj.author        = "JP Roemer"
obj.license       = "MIT"

obj.checkInterval = "1h"
obj.brewPath      = "/opt/homebrew/bin/brew"

local _path       = debug.getinfo(1, "S").source:match("^@(.*/)") or ""

local TAG         = "brew.outdated"

local function deliveredNotification()
    return hs.fnutils.find(hs.notify.deliveredNotifications(), function(n)
        return n:getFunctionTag() == TAG
    end)
end

function obj:init()
    self._icon     = hs.image.imageFromPath(_path .. "assets/glass-mug-variant.svg")
    self._packages = {}
    self._count    = 0
    return self
end

function obj:upgrade()
    self._menubar:setTitle("↻")
    hs.task.new("/Applications/Ghostty.app/Contents/MacOS/ghostty", function(exitCode, stdout, stderr)
        self:_check()
    end, { "--title=Homebrew", "--wait-after-command", "-e", "sh", "-c", self.brewPath .. " upgrade" }):start()
end

function obj:start()
    -- TODO: check brew binary exists

    hs.notify.register(TAG, function(n)
        if n:activationType() == hs.notify.activationTypes.actionButtonClicked then
            self:upgrade()
        end
    end)

    self._menubar = hs.menubar.new(true, "BrewUpdater")
    self._menubar:setIcon(self._icon)
    self._menubar:setTitle("↻")
    self._menubar:setTooltip("Homebrew")
    self:_updateMenu()

    -- check for updates after 10sec then every checkInternval
    self._timer = hs.timer.doAt(hs.timer.localTime() + 10, self.checkInterval, function()
        self:_check()
    end)
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
    local items = {}

    if self._count > 0 then
        local label = self._count == 1 and "update" or "updates"
        table.insert(items, { title = string.format("%d %s available", self._count, label), disabled = true })
        table.insert(items, { title = "-" })
        for _, pkg in ipairs(self._packages) do
            table.insert(items, { title = "  " .. pkg, disabled = true })
        end
        -- table.insert(items, { title = "-" })
        -- table.insert(items, {
        --     title = "Upgrade All",
        --     fn = function()
        --         self:upgrade()
        --     end,
        -- })
    else
        table.insert(items, { title = "All packages up to date", disabled = true })
    end

    table.insert(items, { title = "-" })
    table.insert(items, {
        title = "Check for Updates",
        fn    = function() self:_check() end,
    })
    table.insert(items, {
        title = "Upgrade All",
        fn = function()
            self:upgrade()
        end,
    })

    self._menubar:setMenu(items)
end

function obj:_check()
    self._menubar:setTitle("↻")

    hs.task.new(self.brewPath, function(_, _, _)
        hs.task.new(self.brewPath, function(_, stdout, _)
            local outdated = (stdout or ""):gsub("%s*$", "")
            local packages = {}
            local count    = 0
            for line in (outdated .. "\n"):gmatch("([^\n]*)\n") do
                if line ~= "" then
                    count = count + 1
                    table.insert(packages, line)
                end
            end


            self._packages = packages
            self._count    = count

            if count > 0 then
                self._menubar:setTitle(tostring(count))
            else
                self._menubar:setTitle("")
            end
            self:_updateMenu()

            local existing = deliveredNotification()

            if count > 0 then
                if existing then
                    if existing:informativeText() == outdated then return end
                    existing:withdraw()
                end
                local label = count == 1 and "update" or "updates"
                hs.notify.new(TAG, {
                    title             = "Homebrew",
                    subTitle          = string.format("%d %s available", count, label),
                    informativeText   = outdated,
                    hasActionButton   = true,
                    actionButtonTitle = "Upgrade",
                    withdrawAfter     = 10,
                }):send()
            else
                if existing then existing:withdraw() end
                hs.notify.new({
                    title         = "Homebrew",
                    subTitle      = "All packages up to date",
                    withdrawAfter = 5,
                }):send()
            end
        end, { "outdated", "-v" }):start()
    end, { "update" }):start()
end

return obj
