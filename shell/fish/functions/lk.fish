#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function lk --wraps=walk
    set loc (walk $argv); and cd $loc;
end
