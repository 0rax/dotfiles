local lastTrack   = nil
local initialized = false

local function notify(track, artist, album)
    local n = hs.notify.new(function()
        hs.application.launchOrFocus("Spotify")
    end, {
        title           = "Now Playing",
        subTitle        = track,
        informativeText = artist .. " — " .. album,
        withdrawAfter   = 4,
    })
    n:send()
end

hs.timer.doEvery(2, function()
    if hs.spotify.getPlaybackState() ~= "kPSP" then return end

    local track = hs.spotify.getCurrentTrack()
    if not track or track == "" then return end

    local artist = hs.spotify.getCurrentArtist()
    local album  = hs.spotify.getCurrentAlbum()

    if track ~= lastTrack then
        if initialized then notify(track, artist, album) end
        lastTrack   = track
        initialized = true
    end
end)
