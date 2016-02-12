#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function emacs -d "Connect to an Emacs server if present else launch $EDITOR"

    set -l bin

    if test -S /tmp/emacs(id -u)/server
        set bin "emacsclient -s /tmp/emacs(id -u)/server -n"
    else
        set bin $EDITOR
    end

    if test "$argv[1]" = "[1]"
       eval $bin .
    else
        eval $bin $argv
    end

end
