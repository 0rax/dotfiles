#!/usr/bin/env fish

function __awsenv_vault --argument-names profile

    if ! type -q aws-vault
        return 2
    else if test -z profile
        return 1
    end

    printf "> Switching profile" 1>&2
    if set -q AWSENV_PROFILE
        printf " from '%s[%s]'" "$AWSENV_PROFILE" "$AWSENV_PROVIDER" 1>&2
    end
    printf " to '%s[vault]' ...\n" "$profile" 1>&2

    __awsenv_disconnect 2>/dev/null

    set output (aws-vault exec --duration=4h "$profile" -- env)
    if [ "$status" -eq 0 ]
        eval (printf "export %s\n" $output | grep "^export AWS_")
        set -gx AWSENV_PROFILE "$profile"
        set -gx AWSENV_PROVIDER "vault"
        echo 1>&2
        __awsenv_status
        return $status
    else
        set -l error (echo "$output" | sed -E 's/aws-vault: error: (exec: )?//')
        echo 1>&2
        echo "> aws-vault was unable to generate credentials ..." 1>&2
        echo "  status: failure" 1>&2
        echo "  provider: vault" 1>&2
        echo "  error: $error" 1>&2
        return 1
    end

end
