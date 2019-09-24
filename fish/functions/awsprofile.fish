#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function awsprofile

	if [ (count $argv) -eq 0 ]
		awsstatus
		return $status
	end

	set new_profile $argv[1]
	if begin; set -q AWS_VAULT; or set -q SAML2AWS_PROFILE; end
		echo "> Switching AWS Profile from '$AWS_VAULT$SAML2AWS_PROFILE' to '$new_profile' ..." 1>&2
	else
		echo "> Switching AWS Profile to '$new_profile' ..." 1>&2
	end

	awsdisconnect

	set output (aws-vault exec --session-ttl=4h --assume-role-ttl=1h "$new_profile" -- env)
	if [ "$status" -eq 0 ]
		eval (printf "export %s\n" $output | grep "^export AWS_")
		awsstatus
		return $status
	else
		echo "> AWSVault was unable to generate credentials ..." 1>&2
		echo "  status: failure" 1>&2
		echo "  $output" | sed 's/aws-vault: //g' 1>&2
		return 1
	end
end
