#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function awsprofile

	if [ (count $argv) -eq 0 ]
		aws configure list
		return $status
	end

	set new_profile $argv[1]
	echo "Switch AWS Profile to '$new_profile' ..." 1>&2
	set output (env --unset=AWS_DEFAULT_PROFILE aws --profile="$new_profile" configure list 2>&1 1>/dev/null)
	if [ "$status" -eq 0 ]
		set -gx AWS_DEFAULT_PROFILE $new_profile
		set -gx AWS_PROFILE $new_profile
		set account (aws sts get-caller-identity --output text --query 'Account' --output text 2>/dev/null)
		echo "  account: $account" 1>&2
		echo "  status: success" 1>&2
	else
		echo "  status: failure" 1>&2
		set process (echo "$output" | tail -n1)
		printf "  reason:%s\n" "$process" 2>&1
	end
end
