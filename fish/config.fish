#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

#
#    ╱╲
#   ╱  ╲    0rax's fish-config
#  ╱╲  ╱╲
# ╱  ╲╱  ╲  Fish-Shell . v2.2.0
# ╲  ╱╲  ╱  Fisherman .. v1.3.1
#  ╲╱  ╲╱   OS Compat .. Linux
#   ╲  ╱              .. MacOSX
#    ╲╱
#

# ------------------------------------------------------------------------------
# ---  System  -----------------------------------------------------------------
# ------------------------------------------------------------------------------

# ---  System/Environment Variables  -------------------------------------------

set -gx XDG_CONFIG_HOME  $HOME/.config
set -gx XDG_DATA_HOME    $HOME/.data
set -gx OS_TYPE          (uname)
set -gx PATH             $PATH $HOME/bin /sbin /usr/sbin /usr/local/sbin
set -gx MINIMAL_SHELL    false
if [ "$TERM_PROGRAM" = "Terminal-Plus" ]
    set MINIMAL_SHELL true
else if [ "$OS_TYPE" != "Darwin" ]; and tty | grep tty > /dev/null
    set MINIMAL_SHELL true
end

# ---  System/Editor & Pager  --------------------------------------------------

set -gx EDITOR           'vim'
set -gx GIT_EDITOR       'vim'
set -gx ALTERNATE_EDITOR 'nano'

if command -s most > /dev/null
    set -gx MANPAGER     'most'
    set -gx PAGER        'most'
end

# ---  System/Fish Related Path  -----------------------------------------------

set -gx FISH_CONFIG_PATH $XDG_CONFIG_HOME/fish
set -gx FISH_PLUGIN_PATH $FISH_CONFIG_PATH/plugins
set -gx FISH_CONFD_PATH  $FISH_CONFIG_PATH/conf.d

# ---  Stop loading here if non interactive  -----------------------------------

status --is-interactive; or exit

# ------------------------------------------------------------------------------
# ---  Conf.D  -----------------------------------------------------------------
# ------------------------------------------------------------------------------

set -l __fish_version (echo $version | tr '.' '\n')

if [ $__fish_version[1] -eq 2 -a $__fish_version[2] -lt 3 ]
    for f in $FISH_CONFD_PATH/*.fish
        source $f
    end
end

# ------------------------------------------------------------------------------
# ---  Utils  ------------------------------------------------------------------
# ------------------------------------------------------------------------------

start_gpg_agent

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
