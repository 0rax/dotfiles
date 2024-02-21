#!/usr/bin/env fish

function __orchestra_subcommands
    orchestra --generate-bash-completion
end

function __orchestra_targets
    set targets $(orchestra ps --generate-bash-completion 2>/dev/null)
    if [ "$status" -eq 0 ]
        for i in $targets
            echo $i
        end
    end
end

complete -c orchestra -f
complete -c orchestra -n "not __fish_seen_subcommand_from (__orchestra_subcommands)" -l "help" -s "h" --description "show help"
complete -c orchestra -n "__fish_seen_subcommand_from (__orchestra_subcommands)" -l "help" -s "h" --description "show help"
complete -c orchestra -n "not __fish_seen_subcommand_from (__orchestra_subcommands)" -l "version" -s "v" --description "print the version"
complete -c orchestra -n "not __fish_seen_subcommand_from (__orchestra_subcommands)" -l "config" -r -F --description "specify a different config file to use"

complete -c orchestra -n "not __fish_seen_subcommand_from (__orchestra_subcommands)" -a "$(__orchestra_subcommands)"
complete -c orchestra -n "__fish_seen_subcommand_from (__orchestra_subcommands)" -a "(__orchestra_targets)"
complete -c orchestra -n "__fish_seen_subcommand_from start restart" -l "attach" -s "a" --description "attach to services output after start"
complete -c orchestra -n "__fish_seen_subcommand_from start restart" -l "logs" -s "l" --description "start logging after start"
complete -c orchestra -n "__fish_seen_subcommand_from test" -l "race" -s "r" --description "enable data race detection"
complete -c orchestra -n "__fish_seen_subcommand_from test" -l "verbose" -s "v" --description "log all tests as they are run"
