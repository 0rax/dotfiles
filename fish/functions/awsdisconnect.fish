#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function awsdisconnect

	for i in (env | grep "AWS_" | cut -d"=" -f1)
		set -e "$i"
	end
	set -e SAML2AWS_PROFILE
	set -e AWS_VAULT
	return 0

end
