#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function awsprofile

	if [ (count $argv) -eq 0 ]
		echo "Checking current AWS Profile ..." 1>&2
		set profile (aws configure get profile; or begin; set -q AWS_PROFILE; and echo $AWS_PROFILE; end; or begin; set -q AWS_VAULT; and echo $AWS_VAULT; end)
		set region (aws configure get region; or begin; set -q AWS_REGION; and echo $AWS_REGION; end; or begin; set -q AWS_DEFAULT_REGION; and echo $AWS_DEFAULT_REGION; end; or echo "<none>")
		set account (aws sts get-caller-identity --output text --query 'Account' --output text 2>&1)
		set stsstatus $status
		if [ "$stsstatus" -eq 0 ]
			echo "  status: success" 1>&2
			echo "  profile: $profile" 1>&2
			echo "  account: $account" 1>&2
			echo "  region: $region" 1>&2
		else
			echo "  status: failure" 1>&2
			echo "  error: $account" 1>&2
		end
		return "$stsstatus"
	end

	set new_profile $argv[1]
	if set -q AWS_VAULT
		echo "Switching AWS Profile from '$AWS_VAULT' to '$new_profile' ..." 1>&2
		for i in (env | grep "AWS_" | cut -d"=" -f1)
			set -e "$i"
		end 
	else
		echo "Switching AWS Profile to '$new_profile' ..." 1>&2
	end

	set output (aws-vault exec "$new_profile" -- env 2>&1)
	if [ "$status" -eq 0 ]
		eval (printf "export %s\n" $output | grep "^export AWS_")
		set account (aws sts get-caller-identity --output text --query 'Account' --output text 2>/dev/null)
		set region (aws configure get region; or begin; set -q AWS_REGION; and echo $AWS_REGION; end; or begin; set -q AWS_DEFAULT_REGION; and echo $AWS_DEFAULT_REGION; end; or echo "<none>")
		echo "  status: success" 1>&2
		echo "  profile: $new_profile" 1>&2
		echo "  account: $account" 1>&2
		echo "  region: $region" 1>&2
	else
		echo "  status: failure" 1>&2
		echo "  $output" | sed 's/aws-vault: //g' 1>&2
	end
end
