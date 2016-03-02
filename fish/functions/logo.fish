#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function logo

    alias _s "set_color 16c"
    alias _t "set_color cb410b"
    alias _i "set_color fa1"
    alias _n "set_color normal"

    echo
    echo (_t)'         ╱ ╲        '              (_n)
    echo (_s)'   ┌───'(_t)'╱     ╲ '(_s)'───┐ '  (_n)
    echo (_s)'   │ '(_i)'╱ ╲     ╱ ╲  '(_s)'│ '(_n)
    echo (_i)'   ╱     ╲ ╱     ╲  '            (_n)
    echo (_i)'   ╲     ╱ ╲     ╱  '            (_n)
    echo (_s)'   │ '(_i)'╲ ╱     ╲ ╱  '(_s)'│ '(_n)
    echo (_s)'   └───'(_t)'╲     ╱ '(_s)'───┘ '  (_n)
    echo (_t)'         ╲ ╱        '              (_n)
    echo

end
