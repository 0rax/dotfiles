#!/usr/bin/env fish
# -*-  mode:fish; tab-width:4  -*-

# ------------------------------------------------------------------------------
# ---  Fish & Fishline Theme  --------------------------------------------------
# ------------------------------------------------------------------------------

# Do not set custom theme when running on a TTY
if tty | grep tty > /dev/null
    exit
end

# ---  ColorSet/Base-16 - Oceanic Next -----------------------------------------


set -l __base_16_00 1B2B34
set -l __base_16_01 343D46
set -l __base_16_02 4F5B66
set -l __base_16_03 65737E
set -l __base_16_04 A7ADBA
set -l __base_16_05 C0C5CE
set -l __base_16_06 CDD3DE
set -l __base_16_07 D8DEE9
set -l __base_16_08 EC5f67
set -l __base_16_09 F99157
set -l __base_16_0A FAC863
set -l __base_16_0B 99C794
set -l __base_16_0C 5FB3B3
set -l __base_16_0D 6699CC
set -l __base_16_0E C594C5
set -l __base_16_0F AB7967

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

# ---  Symbols/Fishline  -------------------------------------------------------

# Symbols for VFISH segment
set FLSYM_VFISH             "\ue73c "
set FLSYM_GIT_BRANCH        "\ue725 "

# ------------------------------------------------------------------------------
# ---  END  --------------------------------------------------------------------
# ------------------------------------------------------------------------------
