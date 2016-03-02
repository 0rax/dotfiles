#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function emacs_connect -d "Connect to an emacs server if present else launch emacs"

    set -l bin

    if test -S /tmp/emacs(id -u)/server
        set bin "command emacsclient -s /tmp/emacs(id -u)/server -n"
    else
        set bin "command emacs"
    end

    if test "$argv[1]" = "[1]"
        eval $bin .
    else
        eval $bin $argv
    end

end
