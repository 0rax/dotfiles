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
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
