#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  Programming  ------------------------------------------------------------
# ------------------------------------------------------------------------------

# ---  Programming/Fluff  ------------------------------------------------------

if test -d $HOME/.local/bin; and not contains $HOME/.local/bin $PATH
    set -p PATH $HOME/.local/bin
end

# ---  Programming/Rancher Desktop  --------------------------------------------

if test -d $HOME/.rd; and not contains $HOME/.rd/bin $PATH
    set -p PATH $HOME/.rd/bin
end

# ---  Programming/Golang  -----------------------------------------------------

if test -d /usr/lib/go
    set -gx GOROOT /usr/lib/go
    set -a PATH $GOROOT/bin
else if test -d /usr/local/go
    set -gx GOROOT /usr/local/go
    set -a PATH $GOROOT/bin
end

if test -d $HOME/projects/go
    set -gx GOPATH $HOME/projects/go
    set -p PATH $GOPATH/bin
else if test -d $HOME/Projects/go
    set -gx GOPATH $HOME/Projects/go
    set -p PATH $GOPATH/bin
else if test -d $HOME/go
    set -gx GOPATH $HOME/go
    set -p PATH $GOPATH/bin
end

# ---  Programming/NodeJS  -----------------------------------------------------

if test -d $HOME/.yarn/bin; and not contains $HOME/.yarn/bin $PATH
    set -p PATH $HOME/.yarn/bin
end

# ---  Programming/Python  -----------------------------------------------------

if type -q pyenv; and status is-login
    source (pyenv init --path | psub)
end

if type -q pyenv; and status is-interactive
    set -gx PIPENV_VERBOSITY -1
    source (pyenv init - | psub)
    source (pyenv virtualenv-init - | psub)
end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
