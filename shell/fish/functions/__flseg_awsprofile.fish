#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function __flseg_awsprofile
    if set -q SAML2AWS_PROFILE
        __fishline_segment ffcc66 393939
        printf "󰅠 %s" "$SAML2AWS_PROFILE"
    else if set -q AWSVAULT_PROFILE
        __fishline_segment ffcc66 393939
        printf "󰞵 %s" "$AWSVAULT_PROFILE"
    else if set -q AWS_PROFILE
        __fishline_segment ffcc66 393939
        printf "󰅟 %s" "$AWS_PROFILE"
    end
end
