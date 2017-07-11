-- Config

local spotify_show_title = false
local spotify_notify = true
local spotify_breaker = true

-- Logger

local log = hs.logger.new('spotify', hs.logger.defaultLogLevel)

-- Bindings

hs.hotkey.bind({ "shift" }, "F5",  hs.spotify.previous)
hs.hotkey.bind({ "shift" }, "F6",  hs.spotify.next)
hs.hotkey.bind({ "shift" }, "F7",  hs.spotify.playpause)
hs.hotkey.bind({ "shift" }, 'F9', function() hs.audiodevice.defaultOutputDevice():setVolume(hs.audiodevice.current().volume - 5) end)
hs.hotkey.bind({ "shift" }, 'F10', function() hs.audiodevice.defaultOutputDevice():setVolume(hs.audiodevice.current().volume + 5) end)

-- Jack Breaker

function jackDisconnectedWatcher(dev_uid, event_name, event_scope, event_element)
   if event_name == 'jack' then
        dev = hs.audiodevice.findDeviceByUID(dev_uid)
        if not dev:jackConnected() then
            log.df("Jack disconnect from %s", dev:name())
            if hs.spotify.isRunning() and hs.spotify.isPlaying() then
                hs.spotify.pause()
                updateDisplay()
            end
        end
    end
end


if spotify_breaker then
    for i,dev in ipairs(hs.audiodevice.allOutputDevices()) do
        dev:watcherCallback(jackDisconnectedWatcher):watcherStart()
    end
end

-- -- Icon
--
-- local play = [[ASCII:
-- .............
-- ..AB.........
-- .............
-- .............
-- .............
-- ..........C..
-- ..........D..
-- .............
-- .............
-- .............
-- ..FE.........
-- .............
-- ]]
-- local pause = [[ASCII:
-- .............
-- ..A.B...F.G..
-- .............
-- .............
-- .............
-- .............
-- .............
-- .............
-- .............
-- .............
-- ..D.C...I.H..
-- .............
-- ]]
-- local stop = [[ASCII:
-- .............
-- ..A.......B..
-- .............
-- .............
-- .............
-- .............
-- .............
-- .............
-- .............
-- .............
-- ..D.......C..
-- .............
-- ]]
--
-- -- Menubar
--
-- local spotify = hs.menubar.new()
-- local current_song = nil
--
-- function onMenubarClick(action)
--     log.df("Clicked on menuBarIcon with (alt: %s)", action["alt"])
--     if action["alt"] then
--         notifyTrack()
--     else
--         hs.spotify.playpause()
--         updateDisplay()
--     end
-- end
--
-- function notifyTrack()
--     hs.notify.show("Now playing", hs.spotify.getCurrentTrack(), hs.spotify.getCurrentArtist())
-- end
--
-- function getCurrentTrack()
--     local current = nil
--     if hs.spotify.getCurrentArtist() then
--         current = hs.spotify.getCurrentArtist() .. " - " .. hs.spotify.getCurrentTrack()
--     end
--     return current
-- end
--
-- function updateDisplay()
--
--     log.df("Callback called")
--
--     if not hs.spotify.isRunning() then
--
--         spotify:setIcon(stop)
--         spotify:setTitle(nil)
--
--         -- spotify:removeFromMenuBar()
--
--     else
--
--         -- spotify:returnToMenuBar()
--
--         local c = getCurrentTrack()
--
--         if spotify_notify and c and not (c == current_song) then
--             notifyTrack()
--         end
--
--         if c then
--             spotify:setTitle(spotify_show_title and c or nil)
--             current_song = c
--         else
--             spotify:setTitle(nil)
--         end
--
--         if hs.spotify.isPlaying() then
--             spotify:setIcon(play)
--         else
--             spotify:setIcon(pause)
--         end
--
--     end
-- end
--
-- if spotify then
--     spotify:setClickCallback(onMenubarClick)
--     local timer = hs.timer.new(5, updateDisplay, true):start()
--     timer:fire()
-- end
