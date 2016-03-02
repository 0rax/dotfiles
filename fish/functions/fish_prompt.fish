#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function fish_prompt

	fishline -s $status SIGSTATUS JOBS VFISH PWD GIT WRITE N ROOT

end
