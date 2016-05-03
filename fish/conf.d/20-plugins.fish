#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  Plugins  ----------------------------------------------------------------
# ------------------------------------------------------------------------------

# ---  Plugins/VirtualFish  ----------------------------------------------------

if test -f "$FISH_PLUGIN_PATH/virtualfish/virtualfish/virtual.fish"

    source $FISH_PLUGIN_PATH/virtualfish/virtualfish/virtual.fish
    emit virtualfish_did_setup_plugins

    set -gx VIRTUALFISH_DEFAULT_PYTHON "python3"
    set -gx VIRTUALFISH_HOME           "$HOME/.virtualenvs"

end

# ---  Plugins/Z  --------------------------------------------------------------

set -gx Z_DATA $XDG_DATA_HOME/z.db
set -gx Z_CMD  "j"

# ---  Plugins/Fish-BD  --------------------------------------------------------

set -gx BD_OPT 'insensitive'

# ---  Plugins/GRC  ------------------------------------------------------------

# Remove cat & ls from the list
set -U grc_plugin_execs cvs df diff dig gcc g++ ifconfig wdiff \
                        make mount mtr netstat ping ps tail traceroute

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
