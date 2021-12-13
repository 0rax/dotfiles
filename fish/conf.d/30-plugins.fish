#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  Plugins  ----------------------------------------------------------------
# ------------------------------------------------------------------------------

# Do not load plugins or configure plugins when launched non-interactivly
status --is-interactive; or exit

# ---  Plugins/Fishline  -------------------------------------------------------

if test -f "$FISH_PLUGIN_PATH/fishline/init.fish"

    set FLINE_PATH "$FISH_PLUGIN_PATH/fishline"
    source $FLINE_PATH/init.fish

end

# ---  Plugins/Fish-BD  --------------------------------------------------------

set -gx BD_OPT 'insensitive'

# ---  Plugins/Z  --------------------------------------------------------------

if test -f "$FISH_PLUGIN_PATH/z/conf.d/z.fish"
    set -gx fish_function_path $fish_function_path "$FISH_PLUGIN_PATH/z/functions"
    set -U Z_DATA $XDG_DATA_HOME/z/db
    set -U Z_DATA_DIR $XDG_DATA_HOME/z
    set -U Z_CMD  "j"
    source "$FISH_PLUGIN_PATH/z/conf.d/z.fish"
end

# ---  Plugins/GRC  ------------------------------------------------------------

set -U grc_plugin_execs df wdiff diff dig ifconfig id ip w who mount mtr \
                        netstat ping ps tail traceroute blkid du dnf env \
                        iostat last lsattr lsblk lspci lsmod lsof \
                        ulimit uptime nmap fdisk findmnt free \
                        sysctl systemctl stat showmount \
                        tcpdump vmstat

if type -q grc
    for executable in $grc_plugin_execs
        if type -q $executable
            function $executable --inherit-variable executable --wraps=$executable
                if isatty 1
                    grc $executable $argv
                else
                    eval command $executable $argv
                end
            end
        end
    end
end

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
