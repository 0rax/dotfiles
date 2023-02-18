set -l commands list-units list-sockets list-unit-files list-jobs \
    start stop reload restart try-restart reload-or-restart reload-or-try-restart \
    isolate kill cancel is-active is-failed status show help cat edit \
    reset-failed enable disable is-enabled reenable mask unmask link revert  \
    list-dependencies daemon-reload show-environment set-environment unset-environment
set -l types services sockets mounts service_paths targets automounts timers

# All usrctl commands
complete -f -c usrctl -n "not __fish_seen_subcommand_from $commands" -a "$commands"

# Command completion done via argparse.
complete -c usrctl -a '(__fish_systemctl)' -f

# These "--x=help" outputs always have lines like "Available unit types:". We use the fact that they end in a ":" to filter them out.
complete -f -c usrctl -s t -l type -d 'List of unit types' -xa '(systemctl --type=help --no-legend --no-pager | string match -v "*:")'
complete -f -c usrctl -l state -d 'List of unit states' -xa '(systemctl --state=help --no-legend --no-pager | string match -v "*:")'
complete -f -c usrctl -s a -l all -d 'Show all units or properties'
complete -f -c usrctl -l reverse -d 'Show reverse dependencies between units'
complete -f -c usrctl -l after -d 'Show units ordered before specified unit' -n "__fish_seen_subcommand_from list-dependencies"
complete -f -c usrctl -l before -d 'Show units ordered after specified unit' -n "__fish_seen_subcommand_from list-dependencies"
complete -f -c usrctl -s l -l full -d 'Do not ellipsize anything'
complete -f -c usrctl -l show-types -d 'Show the type of the socket'
complete -f -c usrctl -l job-mode -d 'How to deal with queued jobs' -xa 'fail replace replace-irreversibly isolate ignore-dependencies ignore-requirements flush'
complete -f -c usrctl -s q -l quiet -d 'Suppress output to STDOUT'
complete -f -c usrctl -l no-block -d 'Do not wait for the requested operation to finish'
complete -f -c usrctl -l no-legend -d 'Do not print header and footer'
complete -c usrctl -l failed -d 'List units in failed state'
complete -f -c usrctl -l no-reload -d 'Do not reload daemon configuration'
complete -f -c usrctl -l kill-who -d 'Send signal to which process' -xa 'main control all'
complete -f -c usrctl -s s -l signal -d 'Which signal to send' -xa 'SIGTERM SIGINT SIGSTOP SIGKILL SIGHUP SIGCONT'
complete -f -c usrctl -s f -l force -d 'Overwrite conflicting existing symlinks'
# --root needs a path
complete -f -r -c usrctl -s n -l lines -d 'Number of journal lines to show' -a "(seq 1 1000)"
complete -f -c usrctl -s o -l output -d 'Control journal formatting' -xa 'short short-monotonic verbose export json json-pretty json-sse cat'
complete -f -c usrctl -l plain -d 'list-dependencies flat, not as tree'
complete -f -c usrctl -s h -l help -d 'Print a short help and exit'
complete -f -c usrctl -l version -d 'Print a short version and exit'
complete -f -c usrctl -l no-pager -d 'Do not pipe output into a pager'
complete -f -c usrctl -l now -n "__fish_seen_subcommand_from enable" -d "Also start unit"
complete -f -c usrctl -l now -n "__fish_seen_subcommand_from disable mask" -d "Also stop unit"
