#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  Plugins  ----------------------------------------------------------------
# ------------------------------------------------------------------------------

# ---  Plugins/Fisherman -------------------------------------------------------

if test -d $XDG_DATA_HOME/fisherman
    set -gx fisher_home   $XDG_DATA_HOME/fisherman
    set -gx fisher_config $XDG_CONFIG_HOME/fisherman
    source $fisher_home/config.fish
end

# ---  Plugins/VirtualFish  ----------------------------------------------------

if test -f "$XDG_CONFIG_HOME/fish/virtualfish/virtualfish/virtual.fish"

    source $XDG_CONFIG_HOME/fish/virtualfish/virtualfish/virtual.fish
    emit virtualfish_did_setup_plugins

    set -gx VIRTUALFISH_DEFAULT_PYTHON "python3"
    set -gx VIRTUALFISH_HOME           "$HOME/.virtualenvs"

end

# ---  Plugins/Z  --------------------------------------------------------------

alias j "z"
set -gx Z_DATA $XDG_DATA_HOME/z.db

# ---  Plugins/Fish-BD  --------------------------------------------------------

set -gx BD_OPT 'insensitive'

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
