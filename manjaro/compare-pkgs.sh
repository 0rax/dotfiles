#!/usr/bin/env bash
set -euo pipefail

SDIR=$(dirname "${BASH_SOURCE[0]}")
NEED=$(mktemp)
INSTALLED=$(mktemp)

cat "${SDIR}"/packages/*.pkgs | sed '/^#/d;s/# .*//;s/ *$//;/^$/d' > "${NEED}"
"${SDIR}/list-pkgs.sh" > "${INSTALLED}"

echo "# NEEDED not INSTALLED"
combine "${NEED}" not "${INSTALLED}"

rm "${NEED}" "${INSTALLED}"
