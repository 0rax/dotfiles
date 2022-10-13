#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  GPG & SSH Agents  -------------------------------------------------------
# ------------------------------------------------------------------------------

# Do not load keychain when launched non-interactivly
status --is-interactive; or exit

set GPG_AGENT_SSH_SOCK (gpgconf --list-dirs agent-ssh-socket)
if [ -S "$GPG_AGENT_SSH_SOCK" ]
    set -gx SSH_AGENT_PID ""
    set -gx SSH_AUTH_SOCK "$GPG_AGENT_SSH_SOCK"
end

# # Setup keychain if present
# if type -fq keychain
#     set -e SSH_AGENT_PID
#     set -e SSH_AUTH_SOCK
#     set -l ssh_keys (ls $HOME/.ssh/id_ed25519 $HOME/.ssh/id_ecdsa $HOME/.ssh/id_rsa $HOME/.ssh/id_dsa 2>/dev/null)
#     keychain --quiet --nogui --ignore-missing --agents gpg --inherit local-once $ssh_keys
#     if [ -e $HOME/.keychain/$hostname-fish-gpg ]
#         source $HOME/.keychain/$hostname-fish-gpg
#     end
# end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
