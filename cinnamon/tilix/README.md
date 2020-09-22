# Tilix Terminal Emulator

## Information
- GTK3 tilable terminal emulator
- Sources available at https://github.com/gnunn1/tilix
- Base16 ColorScheme from https://github.com/karlding/base16-tilix

## Exporting config
- Run `dconf dump /com/gexperts/Tilix/ > tilix.dconf`

## Restoring config
- Run `dconf load /com/gexperts/Tilix/ < tilix.dconf`

## Loading custom colorscheme config
- Copy/link the `schemes` folder to `~/.config/tilix/schemes`
- Restart Tilix
- You should now be able to load it from your profile setting
