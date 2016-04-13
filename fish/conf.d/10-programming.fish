#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

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
   set -gx PATH $PATH $HOME/Library/Python/3.5/bin
end

if test -d $HOME/Library/Python/2.7/
    # Add local Python 2 path on OS X
   set -gx PATH $PATH $HOME/Library/Python/2.7/bin
end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
