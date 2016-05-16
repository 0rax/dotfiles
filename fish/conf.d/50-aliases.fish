#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

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

alias editor     'eval $EDITOR'

if type -q emacs
    alias emacs  'emacs_connect'
    alias ne     'command emacs -nw --quick --no-init-file'
end

if begin; type -q rlwrap; and type -q gpg2; end > /dev/null
    alias gpg    'rlwrap gpg2'
end

if functions -q narwhal
    alias docker 'narwhal'
end

# ---  Alises/System Specific  -------------------------------------------------

if [ "$OS_TYPE" = "Darwin" ] # Mac OS X

    alias airport '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport'
    alias lsusb   'system_profiler SPUSBDataType'
    alias display 'open'

else if [ "$OS_TYPE" = "Linux" ] # GNU/Linux

    if type -q viewnior > /dev/null
        alias display 'viewnior'
    else if type -q eog > /dev/null
        alias display 'eog'
    end

end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
