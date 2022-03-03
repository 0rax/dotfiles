#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  Programming  ------------------------------------------------------------
# ------------------------------------------------------------------------------

# ---  Programming/Fluff  ------------------------------------------------------

if test -d $HOME/.local/bin; and not contains $HOME/.local/bin $PATH
	set -p PATH $HOME/.local/bin
end

# ---  Programming/Golang  -----------------------------------------------------

if test -d /usr/local/go
	set GOROOT /usr/local/go
	set -a PATH $GOROOT/bin
end

if test -d $HOME/projects/go
	set GOPATH $HOME/projects/go
else if test -d $HOME/Projects/go
	set GOPATH $HOME/Projects/go
else if test -d $HOME/go
	set GOPATH $HOME/go
end

if set -q GOPATH and not contains $GOPATH/bin $PATH
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
	source (pyenv init - | psub)
	source (pyenv virtualenv-init - | psub)
end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
