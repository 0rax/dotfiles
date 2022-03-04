#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function awsconsole --argument-names profile opt1 opt2
    if ! type -q saml2aws
        return 2
    else if test -z "$profile"
        return 1
    end
    printf "> saml2aws console using '%s' profile\n" "$profile" 1>&2
    saml2aws console --idp-account=$profile --skip-prompt $opt1 $opt2
    return $status
end
