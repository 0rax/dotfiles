#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  Programming  ------------------------------------------------------------
# ------------------------------------------------------------------------------

# # ---  Programming/Fluff  ------------------------------------------------------

# if test -d $HOME/.local/bin
#     set -gx PATH   $HOME/.local/bin $PATH
# end

# ---  Programming/Docker [Windows]  -------------------------------------------

if uname -r | grep -q Microsoft
    set -gx DOCKER_HOST tcp://localhost:2375
end

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
else if test -d $HOME/projects/go
    set -gx GOPATH $HOME/projects/go
    set -gx PATH   $PATH $GOPATH/bin
else if test -d $HOME/go
    set -gx GOPATH $HOME/go
    set -gx PATH   $PATH $GOPATH/bin
end

# ---  Programming/NodeJS  -----------------------------------------------------

if test -d $HOME/.yarn/bin
    set -gx PATH $HOME/.yarn/bin $PATH
end

# ---  Programming/Python  -----------------------------------------------------

if type -q pyenv; and status is-login
    source (pyenv init --path | psub)
end

if type -q pyenv; and status is-interactive
    source (pyenv init - | psub)
    source (pyenv virtualenv-init - | psub)
end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
