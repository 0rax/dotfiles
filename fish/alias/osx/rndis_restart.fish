#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function rndis_restart

    sudo kextunload /Library/Extensions/HoRNDIS.kext
    sudo kextload /Library/Extensions/HoRNDIS.kext

end
