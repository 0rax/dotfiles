#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# Color for PWD and FULLPWD segment
set FLCLR_PWD_BG_HOME       16c
set FLCLR_PWD_FG_HOME       fff
set FLCLR_PWD_BG            414a4c
set FLCLR_PWD_FG            fff
set FLCLR_FULLPWD_BG        $FLCLR_PWD_BG
set FLCLR_FULLPWD_FG        $FLCLR_PWD_FG

# Color for STATUS segment
set FLCLR_STATUS_BG         A22
set FLCLR_STATUS_FG         normal

# Color for WRITE segment
set FLCLR_WRITE_BG          A22
set FLCLR_WRITE_FG          normal

# Color for ARROW  segment
set FLCLR_ARROW_BG          $FLCLR_PWD_BG
set FLCLR_ARROW_FG          $FLCLR_PWD_FG

# Color for ROOT segment
set FLCLR_ROOT_BG_USER      $FLCLR_PWD_BG
set FLCLR_ROOT_FG_USER      $FLCLR_PWD_FG
set FLCLR_ROOT_BG_ROOT      red
set FLCLR_ROOT_FG_ROOT      normal

# Color for VFISH  segment
set FLCLR_VFISH_BG          green
set FLCLR_VFISH_FG          black

# Color for GIT segment
set FLCLR_GIT_BG_CLEAN      fa1
set FLCLR_GIT_FG_CLEAN      000
set FLCLR_GIT_BG_DIRTY      744
set FLCLR_GIT_FG_DIRTY      fff
set FLCLR_GIT_BG_DETACHED   c45 
set FLCLR_GIT_FG_DETACHED   fff

# Color for CLOCK segment
set FLCLR_CLOCK_BG          cb410b
set FLCLR_CLOCK_FG          000

# Color for USERHOST segment
set FLCLR_USERHOST_BG       1F1209
set FLCLR_USERHOST_FG       white

# Color for JOBS segment
set FLCLR_JOBS_BG           C50
set FLCLR_JOBS_FG           normal
