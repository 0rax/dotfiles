#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function uarmory_share

    sudo sysctl -w net.inet.ip.forwarding=1
    sudo pfctl -e
    sudo pfctl -F nat
    echo "nat on en0 from 10.0.0.0/24 to any -> (en0)" | sudo pfctl -f -

end
