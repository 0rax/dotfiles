-- ~/.hammerspoon/compose.lua

local COMPOSE_KEY     = "f20"
local COMPOSE_TIMEOUT = 2.0

local composing  = false
local buffer     = ""
local timeoutTimer = nil

local mappings = dofile(hs.configdir .. "/compose_mappings.lua")

local function isPrintable(char)
    if not char or #char == 0 then return false end
    local b = char:byte(1)
    if b < 32 or b == 127 then return false end
    return true
end

local function stopTimeout()
    if timeoutTimer then
        timeoutTimer:stop(); timeoutTimer = nil
    end
end

local tap -- forward declaration

local function cancel()
    composing = false
    buffer = ""
    stopTimeout()
    tap:stop()
end

local function resetTimeout()
    stopTimeout()
    timeoutTimer = hs.timer.doAfter(COMPOSE_TIMEOUT, function()
        if not composing then return end
        cancel()
    end)
end

local function hasPrefix(buf)
    for seq in pairs(mappings) do
        if seq:sub(1, #buf) == buf then return true end
    end
    return false
end

tap = hs.eventtap.new({ hs.eventtap.event.types.keyDown }, function(event)
    if not composing then
        tap:stop()
        return false
    end

    if event:getProperty(hs.eventtap.event.properties.keyboardEventAutorepeat) == 1 then
        return true
    end

    local flags = event:getFlags()
    if flags.cmd or flags.ctrl or flags.alt then
        cancel()
        return false
    end

    if event:getKeyCode() == hs.keycodes.map["escape"] then
        cancel()
        return true
    end

    local char = event:getCharacters(true)
    if not isPrintable(char) then
        cancel()
        return false
    end

    local candidate = buffer .. char

    if mappings[candidate] then
        composing = false
        buffer = ""
        stopTimeout()
        tap:stop()
        hs.eventtap.keyStrokes(mappings[candidate])
        return true
    end

    if hasPrefix(candidate) then
        buffer = candidate
        resetTimeout()
        return true
    end

    composing = false
    buffer = ""
    stopTimeout()
    tap:stop()
    return true
end)

hs.hotkey.bind({}, COMPOSE_KEY, function()
    if composing then cancel() end
    composing = true
    buffer = ""
    resetTimeout()
    tap:start()
end)
