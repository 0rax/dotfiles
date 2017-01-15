#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function start_gpg_agent

    set -l GPG_ENVFILE $HOME/.gnupg/environment
    set -l GPG_BIN (which gpg-agent)

    # See if a gpg-agent is already configured
    if test -f "$GPG_ENVFILE"
        if kill -0 (cat $GPG_ENVFILE | grep GPG_AGENT_INFO | cut -d: -f2) ^ /dev/null
            set -l IFS
            eval (cat $GPG_ENVFILE | sed -E 's/^(.*)=(.*)$/set -gx \1 \2/g' ^ /dev/null)
            set -e IFS
            return
        else
            rm $GPG_ENVFILE
        end
    end

    # Kill non reachable agents
    set -l NB_AGENT (ps x | grep -E "( gpg-agent|$GPG_BIN)" | grep -v grep | wc -l)
    if [ "$NB_AGENT" -gt 0 ]
        kill (ps x | grep -E "( gpg-agent|$GPG_BIN)" | grep -v grep | cut -d" " -f1)
    end

    set -l IFS
    eval (command gpg-agent --write-env-file $GPG_ENVFILE --daemon | sed -E 's/^(.*)=(.*)$/set -gx \1 \2/g')
    set -e IFS

end
