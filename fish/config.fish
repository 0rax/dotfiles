#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-
#
# config.fish is loaded after conf.d directory in fish 2.3.0
# On fish version < 2.3.0 & fish version ≥ 2.0.0 force loading of conf.d dir
#

#
#    ╱╲
#   ╱  ╲    0rax's fish-config
#  ╱╲  ╱╲
# ╱  ╲╱  ╲  Fish-Shell . v2.6.0
# ╲  ╱╲  ╱  
#  ╲╱  ╲╱   OS Compat .. Linux
#   ╲  ╱              .. MacOSX
#    ╲╱
#

# ------------------------------------------------------------------------------
# ---  Conf.D  -----------------------------------------------------------------
# ------------------------------------------------------------------------------

set -l __fish_version (echo $version | tr '.' '\n')
if [ $__fish_version[1] -eq 2 -a $__fish_version[2] -lt 3 ]
    for f in $HOME/.config/fish/conf.d/*.fish
        source $f
    end
end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
set -g fish_user_paths "/usr/local/opt/zip/bin" $fish_user_paths
