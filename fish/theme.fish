#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# Base-16 - Eighties
set __base_16_00 2d2d2d
set __base_16_01 393939
set __base_16_02 515151
set __base_16_03 747369
set __base_16_04 a09f93
set __base_16_05 d3d0c8
set __base_16_06 e8e6df
set __base_16_07 f2f0ec
set __base_16_08 f2777a
set __base_16_09 f99157
set __base_16_0A ffcc66
set __base_16_0B 99cc99
set __base_16_0C 66cccc
set __base_16_0D 6699cc
set __base_16_0E cc99cc
set __base_16_0F d27b53

# Fish colors
set -U fish_color_normal                normal
set -U fish_color_command               $__base_16_0D
set -U fish_color_param                 $__base_16_0C
set -U fish_color_redirection           $__base_16_0A
set -U fish_color_comment               $__base_16_03
set -U fish_color_error                 $__base_16_08
set -U fish_color_escape                $__base_16_0E
set -U fish_color_operator              $__base_16_0E
set -U fish_color_end                   $__base_16_05
set -U fish_color_quote                 $__base_16_0B
set -U fish_color_autosuggestion        $__base_16_04
set -U fish_color_valid_path            --underline
set -U fish_color_match                 $__base_16_09
set -U fish_color_search_match          --background=$__base_16_02
set -U fish_color_selection             --background=$__base_16_02
set -U fish_pager_color_prefix          $__base_16_06
set -U fish_pager_color_completion      $__base_16_04
set -U fish_pager_color_description     $__base_16_06
set -U fish_pager_color_progress        $__base_16_09
set -U fish_color_history_current       $__base_16_09

# Color for PWD and FULLPWD segment
set FLCLR_PWD_BG_HOME       $__base_16_0D
set FLCLR_PWD_FG_HOME       $__base_16_07
set FLCLR_PWD_BG            $__base_16_02
set FLCLR_PWD_FG            $__base_16_07
set FLCLR_FULLPWD_BG        $FLCLR_PWD_BG
set FLCLR_FULLPWD_FG        $FLCLR_PWD_FG

# Color for STATUS segment
set FLCLR_STATUS_BG         $__base_16_08
set FLCLR_STATUS_FG         $__base_16_01

# Color for WRITE segment
set FLCLR_WRITE_BG          $__base_16_08
set FLCLR_WRITE_FG          $__base_16_01

# Color for ARROW  segment
set FLCLR_ARROW_BG          $FLCLR_PWD_BG
set FLCLR_ARROW_FG          $FLCLR_PWD_FG

# Color for ROOT segment
set FLCLR_ROOT_BG_USER      $FLCLR_PWD_BG
set FLCLR_ROOT_FG_USER      $FLCLR_PWD_FG
set FLCLR_ROOT_BG_ROOT      $__base_16_05
set FLCLR_ROOT_FG_ROOT      $__base_16_01

# Color for VFISH  segment
set FLCLR_VFISH_BG          $__base_16_0B
set FLCLR_VFISH_FG          $__base_16_01

# Color for GIT segment
set FLCLR_GIT_BG_CLEAN      $__base_16_0A
set FLCLR_GIT_FG_CLEAN      $__base_16_01
set FLCLR_GIT_BG_DIRTY      $__base_16_09
set FLCLR_GIT_FG_DIRTY      $__base_16_01
set FLCLR_GIT_BG_DETACHED   $__base_16_08
set FLCLR_GIT_FG_DETACHED   $__base_16_01

# Color for CLOCK segment
set FLCLR_CLOCK_BG          $__base_16_0D
set FLCLR_CLOCK_FG          $__base_16_07

# Color for USERHOST segment
set FLCLR_USERHOST_BG       $__base_16_0F
set FLCLR_USERHOST_FG       $__base_16_01

# Color for JOBS segment
set FLCLR_JOBS_BG           $__base_16_0A
set FLCLR_JOBS_FG           $__base_16_01
