#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function awsstatus
    echo "> checking current AWS session status" 1>&2
    set -l region (aws configure get region; or begin; set -q AWS_REGION; and echo $AWS_REGION; end; or begin; set -q AWS_DEFAULT_REGION; and echo $AWS_DEFAULT_REGION; end; or echo "<none>")
    set -l account (aws sts get-caller-identity --output text --query 'Account' --output text 2>&1)
    set -l stsstatus $status
    if [ "$stsstatus" -eq 0 ]
        echo "  status:  success" 1>&2
        echo "  account: $account" 1>&2
        echo "  region:  $region" 1>&2
    else
        echo "  status:  failure" 1>&2
        echo "  error:   $account" 1>&2
    end
    return $stsstatus
end
