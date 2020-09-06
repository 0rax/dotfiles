#!/usr/bin/env fish

function __awsenv_cli --argument-names profile

    if test -z profile
        return 1
    end

    printf "> Switching profile" 1>&2
    if set -q AWSENV_PROFILE
        printf " from '%s[%s]'" "$AWSENV_PROFILE" "$AWSENV_PROVIDER" 1>&2
    end
    printf " to '%s[cli]' ...\n" "$profile" 1>&2

    __awsenv_disconnect 2>/dev/null

    set output (aws --profile="$profile" sts get-session-token 2>&1 >/dev/null)
    if [ "$status" -eq 0 ]
        set -gx AWS_PROFILE "$profile"
        set -gx AWSENV_PROFILE "$profile"
        set -gx AWSENV_PROVIDER "cli"
        echo 1>&2
        __awsenv_status
        return $status
    else
        echo 1>&2
        echo "> aws-cli was unable to verify credentials ..." 1>&2
        echo "  status: failure" 1>&2
        echo "  provider: cli" 1>&2
        echo "  error:$output" 1>&2
        return 1
    end

end
