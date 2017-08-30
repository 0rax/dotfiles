#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function md2lynx

    pandoc $argv | lynx -stdin -dump

end
