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

set -gx XDG_CONFIG_HOME $HOME/.config/
set -gx XDG_DATA_HOME   $HOME/.data/
set -gx OS_TYPE         (uname)
set -gx PATH            $PATH $HOME/bin /sbin/ /usr/sbin /usr/local/sbin

# ---  System/Editor & Pager  --------------------------------------------------

set -gx EDITOR           'vim'
set -gx GIT_EDITOR       'vim'
set -gx ALTERNATE_EDITOR 'nano'

if command -s most > /dev/null
    set -gx MANPAGER     'most'
    set -gx PAGER        'most'
end

# ------------------------------------------------------------------------------
# ---  Programming  ------------------------------------------------------------
# ------------------------------------------------------------------------------

# ---  Programming/Golang  -----------------------------------------------------

if test -d /usr/local/go
    set -gx GOROOT /usr/local/go
    set -gx PATH   $PATH $GOROOT/bin
end

if test -d $HOME/Projects/Go
    set -gx GOPATH $HOME/Projects/Go
    set -gx PATH   $PATH $GOPATH/bin
else if test -d $HOME/projects/Go
    set -gx GOPATH $HOME/projects/Go
    set -gx PATH   $PATH $GOPATH/bin
end

# ---  Programming/Python [MacOSX]  --------------------------------------------

# Set default python binary version to python3.5
if test -d $HOME/Library/Python/3.5/
    # Add local Python 3 path on OS X
   set -gx PATH $PATH $HOME/Library/Python/3.5/bin/
end

if test -d $HOME/Library/Python/2.7/
    # Add local Python 2 path on OS X
   set -gx PATH $PATH $HOME/Library/Python/2.7/bin/
end

# ------------------------------------------------------------------------------
# ---  Plugins  ----------------------------------------------------------------
# ------------------------------------------------------------------------------

# ---  Plugins/Fisherman -------------------------------------------------------

if test -d $XDG_DATA_HOME/fisherman
    set -gx fisher_home   $XDG_DATA_HOME/fisherman
    set -gx fisher_config $XDG_CONFIG_HOME/fisherman
    source $fisher_home/config.fish
end

# ---  Plugins/FishLine  -------------------------------------------------------

if test -f "$XDG_CONFIG_HOME/fish/fishline/fishline.fish"

    set FLINE_PATH "$XDG_CONFIG_HOME/fish/fishline"
    source $FLINE_PATH/fishline.fish

    if test -f "$XDG_CONFIG_HOME/fish/theme.fish"
        source $XDG_CONFIG_HOME/fish/theme.fish
    end

    if [ "$OS_TYPE" = "Linux" ]; and tty | grep tty > /dev/null
        source $FLINE_PATH/themes/git_minimal.fish
        source $FLINE_PATH/themes/tty.fish
    end

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
# ---  Aliases  ----------------------------------------------------------------
# ------------------------------------------------------------------------------

# ---  Aliases/Shell  ----------------------------------------------------------

alias l          'ls -A'
alias la         'ls -a'
alias lla        'ls -lha'

alias fgrep      'fgrep --color=auto'
alias egrep      'egrep --color=auto'
alias grep       'grep --color=auto'

alias size       'du -sh'
alias share      'python -m SimpleHTTPServer 8000'

if command -s emacs > /dev/null
    alias emacs  'emacs_connect'
    alias ne     'command emacs -nw --quick --no-init-file'
end

if begin; command -s rlwrap; and command -s gpg2; end > /dev/null
    alias gpg    'rlwrap gpg2'
end

# if command -s hub > /dev/null
#     alias git    'hub'
# end

if functions -q narwhal
    alias docker 'narwhal'
end

# ---  Alises/System Specific  -------------------------------------------------

if [ "$OS_TYPE" = "Darwin" ] # Mac OS X

    alias airport '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport'
    alias lsusb   'system_profiler SPUSBDataType'
    alias display 'open'

else if [ "$OS_TYPE" = "Linux" ] # GNU/Linux

    if command -s viewnior > /dev/null
        alias display 'viewnior'
    else if command -s eog > /dev/null
        alias display 'eog'
    end

end

# ------------------------------------------------------------------------------
# ---  Utils  ------------------------------------------------------------------
# ------------------------------------------------------------------------------

# --- Utils/GPG Agent ----------------------------------------------------------

start_gpg_agent

# ---  Utils/Fleetctl  ---------------------------------------------------------

if test -e $HOME/.fleetctl/host # Check for a remote fleetctl host configuration
    set -gx FLEETCTL_TUNNEL (cat $HOME/.fleetctl/host)
end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
