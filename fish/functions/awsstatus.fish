#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function awsstatus

	echo "> Checking current AWS Profile ..." 1>&2
	set -l provider "aws-cli"
	set -l profile (aws configure get profile)
	if set -q SAML2AWS_PROFILE
		set provider "saml2aws"
		set profile $SAML2AWS_PROFILE
	else if set -q AWS_VAULT
		set provider "aws-vault"
		set profile $SAML2AWS_PROFILE
	else if set -q AWS_PROFILE
		set provider "environment"
		set profile $AWS_PROFILE
	else if set -q AWS_DEFAULT_PROFILE
		set provider "environment"
		set profile $AWS_DEFAULT_PROFILE
	end
	set -l region (aws configure get region; or begin; set -q AWS_REGION; and echo $AWS_REGION; end; or begin; set -q AWS_DEFAULT_REGION; and echo $AWS_DEFAULT_REGION; end; or echo "<none>")
	set -l account (aws sts get-caller-identity --output text --query 'Account' --output text 2>&1)
	set -l stsstatus $status
	if [ "$stsstatus" -eq 0 ]
		echo "  status: success" 1>&2
		echo "  provider: $provider" 1>&2
		echo "  profile: $profile" 1>&2
		echo "  account: $account" 1>&2
		echo "  region: $region" 1>&2
	else
		set -l error (echo "$account" | cut -d: -f1)
		echo "  provider: $provider" 1>&2
		echo "  status: failure" 1>&2
		echo "  error: $error" 1>&2
	end
	return $stsstatus
end
