#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function clean -d "Clean specified directories - or if not specified the current working one"

    # Find pattern options
    set -l pattern -name '\#*\#' -o -name '*~' -o -name '.*~' -o -name '*.pyc' -o -name '*.orig'
    # Limit 'find' search depths to 1 by default
    set -l recur -maxdepth 1

    # Other default value
    set -l dry false
    set -l path "."
    set -l to_rm

    # Argument parser
    set -l args (getopt "rdh" $argv)
    [ $status -gt 0 ]; and return 1
    set args (echo $args | sed 's/^\s//' | tr ' ' '\n')

    set -l i 1
    for arg in $args
        switch $arg
            case -r
                set -e recur
            case -d
                set dry true
            case --
                set i (math $i + 1)
                break
            case -h
                printf 'Usage: clean [-rdh] [directory ...]

Options:
    -r      Cleanup recursively: search file to cleanup recursively in path
    -d      Dry run: print out found files without removing them
    -h      Display help and exit
'
                return 0
        end
        set i (math $i + 1)
    end

    if [ $i -le (count $args) ]
        set path $args[$i..(count $args)]
    end

    # Cleanup logic
    set to_rm (find $path $recur $pattern)
    if [ (count $to_rm) -eq 0 ]
        echo "# $_: nothing to clean" 1>&2
    else if [ "$dry" = true ]
        echo "# $_: dry mode" 1>&2
        echo $to_rm | tr ' ' '\n'
    else
        echo "# $_: cleanup mode" 1>&2
        for i in $to_rm
            rm -v "$i"
        end
    end

end
