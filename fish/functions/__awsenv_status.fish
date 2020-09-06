#!/usr/bin/env fish

function __awsenv_status

    echo "> Checking status of the current profile ..." 1>&2

    set -l region (aws configure get region; or begin; set -q AWS_REGION; and echo $AWS_REGION; end; or begin; set -q AWS_DEFAULT_REGION; and echo $AWS_DEFAULT_REGION; end; or echo "<none>")
    set -l account (aws sts get-caller-identity --output text --query 'Account' --output text 2>&1)
    set -l stsstatus $status

    if [ "$stsstatus" -eq 0 ]
        echo "  status: success" 1>&2
        echo "  provider: $AWSENV_PROVIDER" 1>&2
        echo "  profile: $AWSENV_PROFILE" 1>&2
        echo "  account: $account" 1>&2
        echo "  region: $region" 1>&2
    else
        echo "  status: failure" 1>&2
        echo "  provider: $AWSENV_PROVIDER" 1>&2
        echo "  error:$error" 1>&2
    end

    return $stsstatus

end
