#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  Programming  ------------------------------------------------------------
# ------------------------------------------------------------------------------

# ---  Programming/Fluff  ------------------------------------------------------

if test -d $HOME/.local/bin; and not contains $HOME/.local/bin $PATH
    fish_add_path -P $HOME/.local/bin
end

# ---  Programming/Rancher Desktop  --------------------------------------------

if test -d $HOME/.rd; and not contains $HOME/.rd/bin $PATH
    fish_add_path -P $HOME/.rd/bin
end

# ---  Programming/Direnv  -----------------------------------------------------

direnv hook fish | source

# ---  Programming/Golang  -----------------------------------------------------

if test -d /usr/lib/go
    set -gx GOROOT /usr/lib/go
    fish_add_path -Pa $GOROOT/bin
else if test -d /usr/local/go
    set -gx GOROOT /usr/local/go
    fish_add_path -Pa $GOROOT/bin
end

if test -d $HOME/projects/go
    set -gx GOPATH $HOME/projects/go
    fish_add_path -P $GOPATH/bin
else if test -d $HOME/Projects/go
    set -gx GOPATH $HOME/Projects/go
    fish_add_path -P $GOPATH/bin
else if test -d $HOME/go
    set -gx GOPATH $HOME/go
    fish_add_path -P $GOPATH/bin
end

# ---  Programming/NodeJS  -----------------------------------------------------

if test -d $HOME/.yarn/bin; and not contains $HOME/.yarn/bin $PATH
    fish_add_path -P $HOME/.yarn/bin
end

set -gx PNPM_HOME "/home/orax/.local/share/pnpm"
if not string match -q -- $PNPM_HOME $PATH
  fish_add_path -P $PNPM_HOME
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

# ---  Programming/Rust --------------------------------------------------------

if test -d $HOME/.cargo/bin
    fish_add_path -P $HOME/.cargo/bin
end

# ---  Programming/Android -----------------------------------------------------

if test -d /opt/android-sdk
    set -gx JAVA_HOME /usr/lib/jvm/default/
    set -gx ANDROID_HOME /opt/android-sdk
    fish_add_path -Pa $ANDROID_HOME/tools $ANDROID_HOME/tools/bin $ANDROID_HOME/platform-tools
end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
