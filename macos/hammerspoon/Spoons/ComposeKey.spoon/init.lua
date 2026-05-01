local obj        = {}
obj.__index      = obj

obj.name         = "ComposeKey"
obj.version      = "1.0"
obj.author       = "JP Roemer"
obj.license      = "MIT"

obj.timeout      = 2.0

local _spoonPath = debug.getinfo(1, "S").source:match("^@(.*/)") or ""

local function isPrintable(char)
    if not char or #char == 0 then return false end
    local b = char:byte(1)
    return b >= 32 and b ~= 127
end

function obj:init()
    self._mappings     = dofile(_spoonPath .. "mappings.lua")
    self._composing    = false
    self._buffer       = ""
    self._timeoutTimer = nil
    self._hotkey       = nil

    self._tap          = hs.eventtap.new({ hs.eventtap.event.types.keyDown }, function(event)
        if not self._composing then
            self._tap:stop(); return false
        end

        if event:getProperty(hs.eventtap.event.properties.keyboardEventAutorepeat) == 1 then
            return true
        end

        local flags = event:getFlags()
        if flags.cmd or flags.ctrl or flags.alt then
            self:_cancel(); return false
        end
        if event:getKeyCode() == hs.keycodes.map["escape"] then
            self:_cancel(); return true
        end

        local char = event:getCharacters(true)
        if not isPrintable(char) then
            self:_cancel(); return false
        end

        local candidate = self._buffer .. char

        if self._mappings[candidate] then
            self._composing = false
            self._buffer    = ""
            self:_stopTimeout()
            self._tap:stop()
            hs.eventtap.keyStrokes(self._mappings[candidate])
            return true
        end

        if self:_hasPrefix(candidate) then
            self._buffer = candidate
            self:_resetTimeout()
            return true
        end

        self._composing = false
        self._buffer    = ""
        self:_stopTimeout()
        self._tap:stop()
        return true
    end)

    return self
end

function obj:bindHotKeys(mapping)
    local spec = {
        compose = hs.fnutils.partial(self._compose, self),
    }
    hs.spoons.bindHotkeysToSpec(spec, mapping)
    return self
end

function obj:start()
    return self
end

function obj:stop()
    if self._hotkey then
        self._hotkey:delete(); self._hotkey = nil
    end
    self:_cancel()
    return self
end

function obj:_compose()
    if self._composing then self:_cancel() end
    self._composing = true
    self._buffer    = ""
    self:_resetTimeout()
    self._tap:start()
end

function obj:_hasPrefix(buf)
    for seq in pairs(self._mappings) do
        if seq:sub(1, #buf) == buf then return true end
    end
    return false
end

function obj:_stopTimeout()
    if self._timeoutTimer then
        self._timeoutTimer:stop(); self._timeoutTimer = nil
    end
end

function obj:_resetTimeout()
    self:_stopTimeout()
    self._timeoutTimer = hs.timer.doAfter(self.timeout, function()
        if self._composing then self:_cancel() end
    end)
end

function obj:_cancel()
    self._composing = false
    self._buffer    = ""
    self:_stopTimeout()
    if self._tap then self._tap:stop() end
end

return obj
