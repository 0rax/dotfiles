#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  Fish & Fishline Theme  --------------------------------------------------
# ------------------------------------------------------------------------------

# ---  ColorSet/Base-16 - Eighties ---------------------------------------------

set -l __base_16_00 2d2d2d
set -l __base_16_01 393939
set -l __base_16_02 515151
set -l __base_16_03 747369
set -l __base_16_04 a09f93
set -l __base_16_05 d3d0c8
set -l __base_16_06 e8e6df
set -l __base_16_07 f2f0ec
set -l __base_16_08 f2777a
set -l __base_16_09 f99157
set -l __base_16_0A ffcc66
set -l __base_16_0B 99cc99
set -l __base_16_0C 66cccc
set -l __base_16_0D 6699cc
set -l __base_16_0E cc99cc
set -l __base_16_0F d27b53

# ---  Colors/Fish-Shell  ------------------------------------------------------

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

# ---  Colors/Fishline  --------------------------------------------------------

# Color for PWD and FULLPWD segment
set -g FLCLR_PWD_BG_HOME       $__base_16_0D
set -g FLCLR_PWD_FG_HOME       $__base_16_07
set -g FLCLR_PWD_BG            $__base_16_02
set -g FLCLR_PWD_FG            $__base_16_07
set -g FLCLR_FULLPWD_BG        $FLCLR_PWD_BG
set -g FLCLR_FULLPWD_FG        $FLCLR_PWD_FG

# Color for STATUS segment
set -g FLCLR_STATUS_BG         $__base_16_08
set -g FLCLR_STATUS_FG         $__base_16_01

# Color for WRITE segment
set -g FLCLR_WRITE_BG          $__base_16_08
set -g FLCLR_WRITE_FG          $__base_16_01

# Color for ARROW  segment
set -g FLCLR_ARROW_BG          $FLCLR_PWD_BG
set -g FLCLR_ARROW_FG          $FLCLR_PWD_FG

# Color for ROOT segment
set -g FLCLR_ROOT_BG_USER      $FLCLR_PWD_BG
set -g FLCLR_ROOT_FG_USER      $FLCLR_PWD_FG
set -g FLCLR_ROOT_BG_ROOT      $__base_16_05
set -g FLCLR_ROOT_FG_ROOT      $__base_16_01

# Color for VFISH  segment
set -g FLCLR_VFISH_BG          $__base_16_0B
set -g FLCLR_VFISH_FG          $__base_16_01

# Color for GIT segment
set -g FLCLR_GIT_BG_CLEAN      $__base_16_0A
set -g FLCLR_GIT_FG_CLEAN      $__base_16_01
set -g FLCLR_GIT_BG_DIRTY      $__base_16_09
set -g FLCLR_GIT_FG_DIRTY      $__base_16_01
set -g FLCLR_GIT_BG_DETACHED   $__base_16_08
set -g FLCLR_GIT_FG_DETACHED   $__base_16_01

# Color for CLOCK segment
set -g FLCLR_CLOCK_BG          $__base_16_0D
set -g FLCLR_CLOCK_FG          $__base_16_07

# Color for USERHOST segment
set -g FLCLR_USERHOST_BG       $__base_16_0F
set -g FLCLR_USERHOST_FG       $__base_16_01

# Color for JOBS segment
set -g FLCLR_JOBS_BG           $__base_16_0A
set -g FLCLR_JOBS_FG           $__base_16_01

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
