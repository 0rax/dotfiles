# Sway

## `systemctl --user`

mkdir -p ~/.config/systemd/user/
cp systemd/user/* ~/.config/systemd/user/
systemctl --user enable --now gammastep kanshi mako swayidle
