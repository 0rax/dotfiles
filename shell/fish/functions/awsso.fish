#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function awsso  --argument-names profile
    if test -z "$profile"
        awsreset
        return $status
    end
    printf "> aws sso login using '%s' profile\n" "$profile" 1>&2
    awsreset 2>/dev/null
    aws --profile="$profile" sso login
    if [ "$status" -ne 0 ]
        return 1
    end
    set -l awsenv (aws --profile="$profile" configure export-credentials --format=env-no-export)
    if [ "$status" -ne 0 ]
        return 1
    end
    set -gx AWS_PROFILE $profile
    for awsvar in $awsenv
        export "$awsvar"
    end
    awsstatus
end
