-- Logger

local log = hs.logger.new('spectacle', hs.logger.defaultLogLevel)

-- Arg to Func

hs.window.animationDuration = 0

local winLayout = {}
local layouts = {
    left = { hs.layout.left50, hs.layout.left30, hs.layout.left70 },
    right = { hs.layout.right50, hs.layout.right30, hs.layout.right70 },
    maximized = { hs.layout.maximized },
}

function windowNotMoved(layoutName, win, previous)
    return (
        previous
        and (previous["name"] == layoutName)
        and (previous["frame"] == win:frame())
    )
end

function resizeWindow(layoutName)

    -- default
    local next = layouts[layoutName][1]

    -- window info
    local win = hs.window.focusedWindow()
    local id = win:id()
    local previous = winLayout[id]

    log.df("id: %s -- frame: %s -- prev: %s", id, win:frame(), previous and previous["frame"] or nil)

    -- check if window is in same state as before if so circle through layaouts
    if windowNotMoved(layoutName, win, previous) then

        local found = 0
        local length = 0
        for i, l in ipairs(layouts[layoutName]) do
            if (l == previous["layout"]) then
                found = i
            end
            length = i
        end

        next = layouts[layoutName][(found % length) + 1]

    end

    win:moveToUnit(next)

    winLayout[id] = { name = layoutName, layout = next, frame = win:frame() }

end

function toggleMaximize()

    -- default layout
    local layout = layouts["maximized"][1]

    -- window info
    local win = hs.window.focusedWindow()
    local id = win:id()
    local previous = winLayout[id]
    local frame = win:frame()

    -- check if previously maximed, if so restore
    if windowNotMoved("maximized", win, previous) then

        win:move(previous["oldFrame"])
        winLayout[id] = nil

    else

        win:moveToUnit(layout)
        winLayout[id] = { name = "maximized", layout = layout, frame = win:frame(), oldFrame = frame }

    end

end

-- Bindings

hs.hotkey.bind({"ctrl", "alt", "cmd"}, "Left",  hs.fnutils.partial(resizeWindow, "left"))
hs.hotkey.bind({"ctrl", "alt", "cmd"}, "Right", hs.fnutils.partial(resizeWindow, "right"))
hs.hotkey.bind({"ctrl", "alt", "cmd"}, "Up",    toggleMaximize)

-- -- Icon
--
-- local icon = [[ASCII:
-- .............
-- ..AB.........
-- .............
-- .............
-- .............
-- ......H...C..
-- ......G...D..
-- .............
-- .............
-- .............
-- ..FE.........
-- .............
-- ]]
--
-- -- Menu
--
-- local spectacle = hs.menubar.new()
-- local menu = {
--     { title = "Center",           fn = function() print("center") end },
--     { title = "Fullscreen",       fn = function() print("fullscreen") end },
--     { title = "-" },
--     { title = "Left Half",        fn = function() print("center") end },
--     { title = "Right Half",       fn = function() print("fullscreen") end },
--     { title = "Top Half",         fn = function() print("center") end },
--     { title = "Bottom Half",      fn = function() print("fullscreen") end },
--     { title = "-" },
--     { title = "Next Display",     fn = function() print("center") end },
--     { title = "Previous Display", fn = function() print("fullscreen") end },
--     { title = "-" },
--     { title = "Make Larger",      fn = function() print("center") end },
--     { title = "Make Smaller",     fn = function() print("fullscreen") end },
-- }
-- spectacle:setTitle("X")
-- spectacle:setIcon(icon)
-- spectacle:setMenu(menu)
