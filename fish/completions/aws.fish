#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

complete --command aws --no-files --arguments '(begin; set --local --export COMP_SHELL fish; set --local --export COMP_LINE (commandline); /usr/bin/aws_completer | sed \'s/ $//\'; end)'
