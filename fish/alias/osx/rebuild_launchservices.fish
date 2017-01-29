#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function rebuild_launchservices -d "Rebuild com.apple.LaunchServices.plist"

    /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user && killall Finder

end
