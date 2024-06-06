#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function awsprofile --argument-names profile opt1 opt2
    if test -z "$profile"
        awsreset
        return $status
    end
    printf "> aws login using '%s' profile\n" "$profile" 1>&2
    awsreset 2>/dev/null
    set -l vaultenv (aws-vault export $profile $opt1 $opt2)
    if [ "$status" -ne 0 ]
        return 1
    end
    set -gx AWSVAULT_PROFILE $profile
    for vaultvar in $vaultenv
        export "$vaultvar"
    end
    awsstatus
end
