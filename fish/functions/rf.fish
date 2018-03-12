#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function rf -d "Find file with a pattern in the name"

    set -l pattern "*"
    set -l path    "."

    if [ (count $argv) -ge 1 ]
        set pattern $argv[1]
    end

    if [ (count $argv) -ge 2 ]
        set path $argv[2]
    end

    find $path -type f -name "$pattern"

end
