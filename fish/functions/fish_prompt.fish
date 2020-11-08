#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

function fish_prompt

	fishline -s $status vimode sigstatus jobs vfish awsprofile pwd git write n root

end
