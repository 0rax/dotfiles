#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function fish_prompt

	fishline -s $status VIMODE SIGSTATUS JOBS VFISH PWD GIT WRITE N ROOT

end
