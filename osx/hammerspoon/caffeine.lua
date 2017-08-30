-- Caffeine

local caffeine = hs.menubar.new()
function setCaffeineDisplay(state)
    if state then
        caffeine:setIcon(os.getenv("HOME") .. "/.hammerspoon/caffeine-on.pdf")
    else
         caffeine:setIcon(os.getenv("HOME") .. "/.hammerspoon/caffeine-off.pdf")
    end
end

function caffeineClicked()
    setCaffeineDisplay(hs.caffeinate.toggle("displayIdle"))
end

if caffeine then
    caffeine:setClickCallback(caffeineClicked)
    setCaffeineDisplay(hs.caffeinate.get("displayIdle"))
end

-- Bindings

hs.hotkey.bind({"alt"}, "l",  hs.caffeinate.lockScreen)
