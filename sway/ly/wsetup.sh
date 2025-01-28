#!/bin/sh
# wayland-session - run as user
# Copyright (C) 2015-2016 Pier Luigi Fiorini <pierluigi.fiorini@gmail.com>

# This file is extracted from kde-workspace (kdm/kfrontend/genkdmconf.c)
# Copyright (C) 2001-2005 Oswald Buddenhagen <ossi@kde.org>

# Note that the respective logout scripts are not sourced.
# shellcheck disable=SC1090,SC1091,SC3040
case ${SHELL} in
  */bash)
    [ -z "$BASH" ] && exec ${SHELL} "$0" "$@"
    set +o posix
    [ -f /etc/profile ] && . /etc/profile
    if [ -f "${HOME}/.bash_profile" ]; then
      . "${HOME}/.bash_profile"
    elif [ -f "${HOME}/.bash_login" ]; then
      . "${HOME}/.bash_login"
    elif [ -f "${HOME}/.profile" ]; then
      . "${HOME}/.profile"
    fi
    ;;
*/zsh)
    [ -z "${ZSH_NAME}" ] && exec ${SHELL} "$0" "$@"
    [ -d /etc/zsh ] && zdir=/etc/zsh || zdir=/etc
    zhome=${ZDOTDIR:-$HOME}
    # zshenv is always sourced automatically.
    [ -f "$zdir/zprofile" ] && . "$zdir/zprofile"
    [ -f "$zhome/.zprofile" ] && . "$zhome/.zprofile"
    [ -f "$zdir/zlogin" ] && . "$zdir/zlogin"
    [ -f "$zhome/.zlogin" ] && . "$zhome/.zlogin"
    emulate -R sh
    ;;
  */csh|*/tcsh)
    # [t]cshrc is always sourced automatically.
    # Note that sourcing csh.login after .cshrc is non-standard.
    wlsess_tmp=$(mktemp /tmp/wlsess-env-XXXXXX)
    ${SHELL} -c "if (-f /etc/csh.login) source /etc/csh.login; if (-f ~/.login) source ~/.login; /bin/sh -c 'export -p' >! ${wlsess_tmp}"
    . "${wlsess_tmp}"
    rm -f "${wlsess_tmp}"
    ;;
  */fish)
    [ -f /etc/profile ] && . /etc/profile
    xsess_tmp=$(mktemp /tmp/xsess-env-XXXXXX)
    ${SHELL} --login -c "/bin/sh -c 'export -p' > ${xsess_tmp}"
    . "${xsess_tmp}"
    rm -f "${xsess_tmp}"
    ;;
  *) # Plain sh, ksh, and anything we do not know.
    [ -f /etc/profile ] && . /etc/profile
    [ -f "${HOME}/.profile" ] && . "${HOME}/.profile"
    ;;
esac

# Force GTK4 application to respect set theme
GTK_CONFIG="${XDG_CONFIG_HOME:-$HOME/.config}/gtk-3.0/settings.ini"
if test -f "${GTK_CONFIG}"; then
  prefer_dark="$(grep 'gtk-application-prefer-dark-theme' "${GTK_CONFIG}" | sed 's/.*\s*=\s*//')"
  gtk_theme="$(grep 'gtk-theme-name' "${GTK_CONFIG}" | sed 's/.*\s*=\s*//')"
  icon_theme="$(grep 'gtk-icon-theme-name' "${GTK_CONFIG}" | sed 's/.*\s*=\s*//')"
  cursor_theme="$(grep 'gtk-cursor-theme-name' "${GTK_CONFIG}" | sed 's/.*\s*=\s*//')"
  font_name="$(grep 'gtk-font-name' "${GTK_CONFIG}" | sed 's/.*\s*=\s*//')"
  if [ "$prefer_dark" = "1" ]; then
    gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'
  fi
  gsettings set org.gnome.desktop.interface gtk-theme "$gtk_theme"
  gsettings set org.gnome.desktop.interface icon-theme "$icon_theme"
  gsettings set org.gnome.desktop.interface cursor-theme "$cursor_theme"
  gsettings set org.gnome.desktop.interface font-name "$font_name"
  # export GTK_THEME="$(grep 'gtk-theme-name' "${GTK_CONFIG}" | sed 's/.*\s*=\s*//')"
fi

# Add Flatpak path to XDH_DATA_DIRS
export XDG_DATA_DIRS="${HOME}/.local/share/flatpak/exports/share:/var/lib/flatpak/exports/share:$XDG_DATA_DIRS"

exec systemd-cat --identifier ly "$@"
