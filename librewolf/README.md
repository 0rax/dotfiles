# LibreWolf

## Install configuration

- Link or copy `librewolf.overrides.cfg` to `~/.librewolf`
- Link or copy `userChrome.css` to the `chrome` folder in your profile (folder finishing by `.default` or `.default-release` in `~/.librewolf/`, can be retrieved in using the `about:support` page)

## Add-ons

To view the list of add-ons I use everyday on LibreWolf, please see the [`extensions.csv`](extensions.csv).

### Export installed add-ons

```sh
export PROFILE_DIR=$HOME/.librewolf/xyz.default
jq -r '["name","id","type","enabled","homepage"],
  (.addons[] | select(.location == "app-profile") | [.defaultLocale.name,.id,.type,.active,.defaultLocale.homepageURL])
  | join(",")' "$PROFILE_DIR/extensions.json" > extensions.csv
```

## References

- https://librewolf.net/docs/settings/
- https://www.privacytools.io/#browser
- http://kb.mozillazine.org/Profile_folder_-_Firefox
- http://kb.mozillazine.org/User.js_file
- http://kb.mozillazine.org/UserChrome.css
- https://wiki.mozilla.org/Security/Safe_Browsing
- https://wiki.mozilla.org/Security/Download_Protection
- https://github.com/arkenfox/user.js/wiki/4.1-Extensions#-recommended=
- https://github.com/pyllyukko/user.js/blob/master/user.js
- https://github.com/ghacksuserjs/ghacks-user.js/blob/master/user.js
- https://github.com/Timvde/UserChrome-Tweaks
