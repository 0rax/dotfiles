#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ---  System  -----------------------------------------------------------------

set -gx XDG_CONFIG_HOME $HOME/.config/
set -gx XDG_DATA_HOME   $HOME/.data/
set -gx OS_TYPE         (uname)

# ---  Editor & Pager  ---------------------------------------------------------

set -gx EDITOR           'vim'
set -gx GIT_EDITOR       'vim'
set -gx ALTERNATE_EDITOR 'nano'

if command -s most > /dev/null
    set -gx MANPAGER     'most'
    set -gx PAGER        'most'
end

# ---  Aliases  ----------------------------------------------------------------

alias ne      '/usr/bin/emacs -nw --quick --no-init-file'
alias l       'ls -A'
alias la      'ls -a'
alias lla     'ls -lha'
alias fgrep   'fgrep --color=auto'
alias egrep   'egrep --color=auto'
alias grep    'grep --color=auto'
alias size    'du -sh'
alias share   'python -m SimpleHTTPServer 8000'

if command -s rlwrap > /dev/null
    alias gpg 'rlwrap gpg2'
end

# ---  System Specific Aliases  ------------------------------------------------

if [ "$OS_TYPE" = "Darwin" ] # Mac OS X

    alias airport "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport"
    alias lsusb   "system_profiler SPUSBDataType"

else if [ "$OS_TYPE" = "Linux" ] # GNU/Linux

    if command -s viewnior > /dev/null
        alias display "viewnior"
    else if command -s eog > /dev/null
        alias display "eog"
    end

end

# --- GPG Agent ----------------------------------------------------------------

start_gpg_agent

# ---  FishLine  ---------------------------------------------------------------

set FLINE_PATH "$HOME/.config/fish/fishline"
source $FLINE_PATH/fishline.fish

if test -f  $HOME/.config/fish/fishline-theme.fish
    source $HOME/.config/fish/fishline-theme.fish
end

if [ "$OS_TYPE" = "Linux" ]; and tty | grep tty > /dev/null
     source $FLINE_PATH/themes/git_minimal.fish
     source $FLINE_PATH/themes/tty.fish
end

# ---  VirtualFish  ------------------------------------------------------------

if test -d $HOME/.config/fish/virtualfish/
    source $HOME/.config/fish/virtualfish/virtualfish/virtual.fish
    source $HOME/.config/fish/virtualfish/virtualfish/global_requirements.fish
    set -gx VIRTUALFISH_HOME $HOME/.virtualenvs
end

# ---  Golang  -----------------------------------------------------------------

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

# ---  Docker  -----------------------------------------------------------------


if test -d /Applications/Docker # Check if DockerToolbox is installed

    # -- To manualy init your vm $DOCKER_VM_NAME with docker-machine -- #
    #                                                                   #
    #   docker-machine create -d virtualbox --virtualbox-cpu-count 1    #
    #                                       --virtualbox-memory 2048    #
    #                                       $DOCKER_VM_NAME             #
    #                                                                   #
    # ----------------------------------------------------------------- #

    # Create function to pass machine name as arg with "default" as default value
    set -gx DOCKER_VM_NAME default
    alias docker-env      'docker-machine env --shell fish $DOCKER_VM_NAME'
    alias docker-unenv    'docker-machine env --shell fish -u'
    alias docker-start    'docker-machine start $DOCKER_VM_NAME'
    alias docker-restart  'docker-machine restart $DOCKER_VM_NAME'
    alias docker-stop     'docker-machine stop $DOCKER_VM_NAME'
    alias docker-status   'docker-machine status $DOCKER_VM_NAME'
    alias docker-ip       'docker-machine inspect -f "{{ .Driver.IPAddress }}" $DOCKER_VM_NAME'

end

# ---  Fleetctl  ---------------------------------------------------------------

if test -e $HOME/.fleetctl/host # Check for a remote fleetctl host configuration
    set -gx FLEETCTL_TUNNEL (cat $HOME/.fleetctl/host)
end

# ---  Latex for MacOSX  -------------------------------------------------------

if test -d /usr/texbin
    # Add path of BasicTeX (brew cask install basictex)
   set -gx PATH $PATH /usr/texbin
end

# ---  Python for MacOSX  ------------------------------------------------------

if test -d /Users/orax/Library/Python/2.7/bin/
    # Add local Python 2 path on OS X
   set -gx PATH $PATH /Users/orax/Library/Python/2.7/bin/
end

if test -d /Users/orax/Library/Python/3.5/bin/
    # Add local Python 3 path on OS X
   set -gx PATH $PATH /Users/orax/Library/Python/3.5/bin/
end

# ---  Autojump  ---------------------------------------------------------------

if test -f $HOME/.autojump/share/autojump/autojump.fish
   source $HOME/.autojump/share/autojump/autojump.fish
else if test -f /usr/local/share/autojump/autojump.fish
   source /usr/local/share/autojump/autojump.fish
end

set -gx AUTOJUMP_IGNORE_CASE 1
set -gx AUTOJUMP_AUTOCOMPLETE_CMDS 'cp vim'

# ---  Fish-BD  ----------------------------------------------------------------

set -gx BD_OPT 'insensitive'

# ---  PATH  -------------------------------------------------------------------

set -gx PATH $PATH $HOME/bin /sbin/ /usr/sbin /usr/local/sbin

# ---  END  --------------------------------------------------------------------
