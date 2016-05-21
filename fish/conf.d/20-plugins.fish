#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  Plugins  ----------------------------------------------------------------
# ------------------------------------------------------------------------------

# Do not load plugins or configure plugins when launched non-interactivly
status --is-interactive; or exit

# ---  Plugins/VirtualFish  ----------------------------------------------------

if test -f "$FISH_PLUGIN_PATH/virtualfish/virtualfish/virtual.fish"

    source $FISH_PLUGIN_PATH/virtualfish/virtualfish/virtual.fish
    emit virtualfish_did_setup_plugins

    set -gx VIRTUALFISH_DEFAULT_PYTHON "python3"
    set -gx VIRTUALFISH_HOME           "$HOME/.virtualenvs"

end

# ---  Plugins/Z  --------------------------------------------------------------

set -U Z_DATA $XDG_DATA_HOME/z.db
set -U Z_CMD  "j"

# ---  Plugins/Fish-BD  --------------------------------------------------------

set -gx BD_OPT 'insensitive'

# ---  Plugins/GRC  ------------------------------------------------------------

if test -f "$FISH_PLUGIN_PATH/plugin-grc/init.fish"

    # Remove cat & ls from the list
    set -U grc_plugin_execs cvs df diff dig gcc g++ ifconfig wdiff \
                            make mount mtr netstat ping ps tail traceroute

    # Load GRC
    source $FISH_PLUGIN_PATH/plugin-grc/init.fish

end


# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
