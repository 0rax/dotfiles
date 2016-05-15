#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  Fishline  ---------------------------------------------------------------
# ------------------------------------------------------------------------------

if test -f "$FISH_PLUGIN_PATH/fishline/fishline.fish"

    # set FLINE_PATH "$FISH_PLUGIN_PATH/fishline"
    # source $FLINE_PATH/fishline.fish
    set FLINE_PATH "$HOME/Projects/Fish/fishline"
    source $FLINE_PATH/init.fish

    if [ "$TERM_PROGRAM" = "Terminal-Plus" ]
        source $FLINE_PATH/themes/git_minimal.fish
        source $FLINE_PATH/themes/tty-compatible.fish
    else if [ "$OS_TYPE" = "Linux" ]; and tty | grep tty > /dev/null
        source $FLINE_PATH/themes/git_minimal.fish
        source $FLINE_PATH/themes/tty-compatile.fish
    end

end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
