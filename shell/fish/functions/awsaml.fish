#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function awsaml --argument-names profile

    if ! type -q saml2aws
        return 2
    else if test -z "$profile"
        awsreset
        return $status
    end

    printf "> saml2aws login using '%s' profile\n" "$profile" 1>&2
    awsreset 2>/dev/null
    set -l credentials (saml2aws --idp-account=$profile script 2>&1)
    set -l samlstatus $status
    if [ "$status" -ne 0 ]
        if echo "$credentials" | grep -E "(error aws credentials have expired)|(error loading credentials)" >/dev/null
            echo "> saml2aws credentials are experied or missing, re-authenticating" 1>&2
            saml2aws login --idp-account=$profile --skip-prompt --force
            set credentials (saml2aws --idp-account=$profile script 2>&1)
            set samlstatus $status
        end
    end

    if [ "$samlstatus" -eq 0 ]
        eval "$credentials"
        awsstatus
        return $status
    else
        set -l error (echo "$credentials" | sed -E 's/error //')
        echo "> saml2aws was unable to generate credentials" 1>&2
        echo "  status:  failure" 1>&2
        echo "  error:   $error" 1>&2
        return 1
    end

end
