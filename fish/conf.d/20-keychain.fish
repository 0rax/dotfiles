#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  Keychain  ---------------------------------------------------------------
# ------------------------------------------------------------------------------

# Do not load keychain when launched non-interactivly
status --is-interactive; or exit

# Setup keychain if present
if type -fq keychain
    set -gx HOSTNAME (hostname)
    keychain --quiet --quick --nogui --agents ssh --inherit local-once $HOME/.ssh/id_ecdsa
    [ -e $HOME/.keychain/$HOSTNAME-fish ]; and . $HOME/.keychain/$HOSTNAME-fish
end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
