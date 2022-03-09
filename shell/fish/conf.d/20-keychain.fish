#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  Keychain  ---------------------------------------------------------------
# ------------------------------------------------------------------------------

# Do not load keychain when launched non-interactivly
status --is-interactive; or exit

# Setup keychain if present
if type -fq keychain
    set -l keys (ls $HOME/.ssh/id_ed25519 $HOME/.ssh/id_ecdsa $HOME/.ssh/id_rsa 2>/dev/null)
    keychain --quiet --quick --nogui --agents ssh --inherit local-once $keys
    [ -e $HOME/.keychain/$hostname-fish ]; and source $HOME/.keychain/$hostname-fish
end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
