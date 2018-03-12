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

# Set default python binary version to python3.5
if test -x /usr/local/opt/python3/bin/python3
    # Add local Python 3 path on OS X
   set -gx PATH /usr/local/opt/python3/bin/ $PATH
end

if test -x /usr/local/opt/python2/bin/python2
    # Add local Python 2 path on OS X
   set -gx PATH /usr/local/opt/python2/bin $PATH
end

# ---  Programming/Fluff  ------------------------------------------------------

if test -d $HOME/TMP/bin
    set -gx PATH   $PATH $HOME/TMP/bin
end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
