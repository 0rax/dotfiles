#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function clean -d "Clean specified directories - or if not specified the current working one"

    set -l path
    if test -z "$argv"
        set path .
    else
        set path $argv
    end

    set -l to_rm (find $path -maxdepth 1 -name '#*#' -o -name '*~' -o -name '.*~' -o -name '*.pyc')

    for i in $to_rm
        rm -v "$i"
    end

end
