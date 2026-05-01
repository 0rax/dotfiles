-- Homebrew auto-update: runs `brew update` on startup and every 8h,
-- notifies if outdated packages exist, with Upgrade action button.


local BREW       = hs.execute("which brew", true):gsub("%s+$", "")
local TAG        = "brew.outdated"
local alertId    = nil
local alertTimer = nil

local function runBrew(cmd)
    local out, ok = hs.execute(BREW .. " " .. cmd)
    return ok and (out or "") or ""
end

local function deliveredNotification()
    return hs.fnutils.find(hs.notify.deliveredNotifications(), function(n)
        return n:getFunctionTag() == TAG
    end)
end

hs.notify.register(TAG, function(n)
    if n:activationType() == hs.notify.activationTypes.contentsClicked then
        if alertTimer then
            alertTimer:fire()
        else
            alertId = hs.alert.show(n:informativeText(), { radius = 9 }, "infinity")
            alertTimer = hs.timer.doAfter(5, function()
                hs.alert.closeSpecific(alertId)
                alertId    = nil
                alertTimer = nil
            end)
        end
    elseif n:activationType() == hs.notify.activationTypes.actionButtonClicked then
        if alertTimer then alertTimer:fire() end
        hs.osascript.applescript('tell app "Terminal" to activate do script "brew upgrade"')
    end
end)

local function check()
    if not BREW or BREW == "" then
        print("[brew] no brew binary found, aborting")
        return
    end
    print("[brew] running brew update...")
    runBrew("update")
    local outdated = runBrew("outdated -v")
    local _, count = outdated:gsub("\n", "\n")
    print("[brew] found " .. count .. " outdated package(s)")

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
            autoWithdraw      = false,
            withdrawAfter     = 0,
            hasActionButton   = true,
            actionButtonTitle = "Upgrade",
        }):send()
    else
        if existing then existing:withdraw() end
        hs.notify.new({
            title           = "Homebrew",
            informativeText = "All packages up to date",
            withdrawAfter   = 4,
        }):send()
    end
end

_G.brewTime = hs.timer.doAt(hs.timer.localTime() + 10, "4h", check)

-- TODO: Allow notification to get hidden in the notification center when not interacted with
