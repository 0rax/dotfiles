#!/usr/bin/env fish

function __awsenv_saml --argument-names profile

    if ! type -q saml2aws
        return 2
    else if test -z profile
        return 1
    end

    printf "> Switching profile" 1>&2
    if set -q AWSENV_PROFILE
        printf " from '%s[%s]'" "$AWSENV_PROFILE" "$AWSENV_PROVIDER" 1>&2
    end
    printf " to '%s[saml]' ...\n" "$profile" 1>&2

    __awsenv_disconnect 2>/dev/null

    set -l credentials (saml2aws --idp-account=$profile script 2>&1)
    set -l samlstatus $status
    if [ "$status" -ne 0 ]
        if echo "$credentials" | grep -E "(error aws credentials have expired)|(error loading credentials)" >/dev/null
            echo 1>&2
            echo "> saml2aws credentials are experied or missing, authenticating ..." 1>&2
            echo 1>&2
            saml2aws login --idp-account=$profile --skip-prompt --force
            set credentials (saml2aws --idp-account=$profile script 2>&1)
            set samlstatus $status
        end
    end

    if [ "$samlstatus" -eq 0 ]
        eval "$credentials"
        set -gx AWSENV_PROFILE "$profile"
        set -gx AWSENV_PROVIDER "saml"
        echo 1>&2
        __awsenv_status
        return $status
    else
        set -l error (echo "$credentials" | sed -E 's/error //')
        echo 1>&2
        echo "> saml2aws was unable to generate credentials ..." 1>&2
        echo "  status: failure" 1>&2
        echo "  provider: saml" 1>&2
        echo "  error: $error" 1>&2
        return 1
    end

end
