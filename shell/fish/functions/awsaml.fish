#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function awsaml --argument-names profile

	switch "$profile"
		case ''
			awsenv disconnect
		case '*'
			awsenv saml $argv
	end

end
