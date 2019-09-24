#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function samlprofile

	if [ (count $argv) -eq 0 ]
		awsstatus
		return $status
	end

	set new_profile $argv[1]
	if begin; set -q AWS_VAULT; set -q SAML2AWS_PROFILE; end
		echo "> Switching AWS Profile from '$AWS_VAULT$SAML2AWS_PROFILE' to '$new_profile' ..." 1>&2
	else
		echo "> Switching AWS Profile to '$new_profile' ..." 1>&2
	end

	awsdisconnect

	set credentials (saml2aws --idp-account=$new_profile script 2>&1)
	if [ "$status" -ne 0 ]
		if echo "$credentials" | grep -E "(error aws credentials have expired)|(error loading credentials)" >/dev/null
			echo "> SAML2AWS failed to retrieve credentials or credentials have expired, login in ..." 1>&2
			saml2aws login --idp-account=$new_profile --skip-prompt --force
		else
			echo "  > status: failure" 1>&2
			echo "  > error: $credentials" 1>&2
			return 1
		end
	end

	set credentials (saml2aws --idp-account=$new_profile script 2>&1)
	if [ "$status" -eq 0 ]
		eval "$credentials"
		awsstatus
		return $status
	else
		echo "> SAML2AWS was unable to generate credentials ..." 1>&2
		echo "  > status: failure" 1>&2
		echo "  > error: $credentials" 1>&2
		return 1
	end
end
