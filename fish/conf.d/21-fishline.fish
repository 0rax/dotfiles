#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  Fishline  ---------------------------------------------------------------
# ------------------------------------------------------------------------------

if test -f "$XDG_CONFIG_HOME/fish/fishline/fishline.fish"

    set FLINE_PATH "$XDG_CONFIG_HOME/fish/fishline"
    set FLINE_PATH "$HOME/Projects/Fish/fishline/"
    source $FLINE_PATH/fishline.fish

    if test -f "$XDG_CONFIG_HOME/fish/theme.fish"
        source $XDG_CONFIG_HOME/fish/theme.fish
    end

    if [ "$OS_TYPE" = "Linux" ]; and tty | grep tty > /dev/null
        source $FLINE_PATH/themes/git_minimal.fish
        source $FLINE_PATH/themes/tty.fish
    end

end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
