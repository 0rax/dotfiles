#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  Plugins  ----------------------------------------------------------------
# ------------------------------------------------------------------------------

# Do not load plugins or configure plugins when launched non-interactivly
status --is-interactive; or exit

# ---  Plugins/Fishline  -------------------------------------------------------

if test -f "$FISH_PLUGIN_PATH/fishline/init.fish"

    set FLINE_PATH "$FISH_PLUGIN_PATH/fishline"
    # set FLINE_PATH "$HOME/Projects/Fish/fishline"
    source $FLINE_PATH/init.fish

end

# ---  Plugins/Fish-BD  --------------------------------------------------------

set -gx BD_OPT 'insensitive'

# ---  Plugins/VirtualFish  ----------------------------------------------------

if test -f "/usr/local/lib/python3.6/site-packages/virtualfish/virtual.fish"

    eval (/usr/local/bin/python3 -m virtualfish)

    set -gx VIRTUALFISH_DEFAULT_PYTHON "python3"
    set -gx VIRTUALFISH_HOME           "$HOME/.virtualenvs"

end

# ---  Plugins/Z  --------------------------------------------------------------

set -U Z_DATA $XDG_DATA_HOME/z.db
set -U Z_CMD  "j"

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
