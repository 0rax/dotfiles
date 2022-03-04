#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function awsaml --argument-names profile opt1 opt2
    if ! type -q saml2aws
        return 2
    else if test -z "$profile"
        awsreset
        return $status
    end
    printf "> saml2aws login using '%s' profile\n" "$profile" 1>&2
    awsreset 2>/dev/null
    saml2aws login --idp-account=$profile --skip-prompt $opt1 $opt2
    if [ "$status" -ne 0 ]
        return 1
    end
    source (saml2aws --idp-account=$profile script | psub)
    awsstatus
end
