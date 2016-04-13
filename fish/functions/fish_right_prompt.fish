#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function fish_right_prompt

  if [ "$CMD_DURATION" -ge 100 ]
	  fishline -s 0 -r EXECTIME
  else
    fishline -s 0 -r CLOCK
  end

end
