#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function bssh
    ssh -o IdentitiesOnly=yes $argv
end
