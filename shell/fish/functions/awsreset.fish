#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function awsreset
    echo "> cleaning up all AWS related environment variables" 1>&2
    for i in (env | grep "AWS_" | cut -d"=" -f1)
        set -e "$i"
    end
    set -e SAML2AWS_PROFILE
    set -e AWSVAULT_PROFILE
    return 0
end
