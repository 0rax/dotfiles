#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  System  -----------------------------------------------------------------
# ------------------------------------------------------------------------------

# ---  System/Environment Variables  -------------------------------------------

set -gx XDG_CONFIG_HOME  $HOME/.config
set -gx XDG_DATA_HOME    $HOME/.local/share
set -gx OS_TYPE          (uname)

# ---  System/Editor & Pager  --------------------------------------------------

set -gx EDITOR           'vim'
set -gx GIT_EDITOR       'vim'
set -gx ALTERNATE_EDITOR 'nano'
set -gx PAGER            'less'

if command -s most > /dev/null
	set -gx MANPAGER     'most'
else
	set -gx MANPAGER     'less'
end

if command -s bat > /dev/null
	set -gx BAT_PAGER    'less -RF'
	set -gx BAT_THEME    'base16'
end

# ---  System/Fish Related Path  -----------------------------------------------

set -gx FISH_CONFIG_PATH $XDG_CONFIG_HOME/fish
set -gx FISH_ALIAS_PATH  $FISH_CONFIG_PATH/alias
set -gx FISH_PLUGIN_PATH $FISH_CONFIG_PATH/plugins
set -gx FISH_CONFD_PATH  $FISH_CONFIG_PATH/conf.d

set -p fish_function_path $FISH_ALIAS_PATH

if test -d /usr/local/share/fish/vendor_functions.d
    set -a fish_function_path /usr/local/share/fish/vendor_functions.d
end

if test -d /usr/local/share/fish/vendor_completions.d
    set -a fish_complete_path /usr/local/share/fish/vendor_completions.d
end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
