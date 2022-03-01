#!/usr/bin/env fish

set -l commands saml vault cli get list status disconnect help

complete -c awsenv -f
# complete -c awsenv -n "not __fish_seen_subcommand_from $commands" -a "$commands"
complete -c awsenv -n "not __fish_seen_subcommand_from $commands" -a "(__awsenv_list complete)"

complete -c awsenv -n "__fish_seen_subcommand_from saml" -a "(__awsenv_list saml)"
complete -c awsenv -n "__fish_seen_subcommand_from vault" -a "(__awsenv_list vault)"
complete -c awsenv -n "__fish_seen_subcommand_from cli" -a "(__awsenv_list cli)"
