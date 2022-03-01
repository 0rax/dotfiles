#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  System  -----------------------------------------------------------------
# ------------------------------------------------------------------------------

# ---  System/Environment Variables  -------------------------------------------

set -gx XDG_CONFIG_HOME  $HOME/.config
set -gx XDG_DATA_HOME    $HOME/.data
set -gx OS_TYPE          (uname)
set -gx PATH             $PATH /sbin /usr/sbin /usr/local/sbin

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
set -gx FISH_PLUGIN_PATH $FISH_CONFIG_PATH/plugins
set -gx FISH_CONFD_PATH  $FISH_CONFIG_PATH/conf.d

if test -d /usr/local/share/fish/vendor_functions.d
	set -gx fish_function_path $fish_function_path /usr/local/share/fish/vendor_functions.d
end

if test -d /usr/local/share/fish/vendor_completions.d
	set -gx fish_complete_path $fish_complete_path /usr/local/share/fish/vendor_completions.d
end

set -gx fish_function_path $FISH_CONFIG_PATH/functions $fish_function_path

# ---  System/Fish Alias Folder ------------------------------------------------

set -gx fish_function_path $FISH_CONFIG_PATH/alias $fish_function_path

if [ "$OS_TYPE" = "Darwin" ] # Mac OS X

	set -gx fish_function_path $FISH_CONFIG_PATH/alias/osx $fish_function_path
	set -gx fish_complete_path $FISH_CONFIG_PATH/completions/osx $fish_complete_path

else if [ "$OS_TYPE" = "Linux" ]

	set -gx fish_function_path $FISH_CONFIG_PATH/alias/linux $fish_function_path
	set -gx fish_complete_path $FISH_CONFIG_PATH/completions/linux $fish_complete_path

end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
