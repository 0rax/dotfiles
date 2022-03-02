# Firefox Configuration

## Tweaks

This section of the repository contains two different files providing tweaks to your Firefox installation:

- `user.js`: defining the default configuration options for a user (if modified by an add-on or `about:config` during a session, it will be overridden by what is in this file next time you open Firefox). This is used to enable and disable different feature of Firefox as well as hardening its security.
- `userChrome.css`: which is used to apply custom CSS to the Firefox UI, here it is used to apply some minor modification to the UI.

### Install

- Find your current profile folder inside the one of the following directory:
  - macOS: `~/Library/Application Support/Firefox/Profiles/`
  - Linux: `~/.mozilla/firefox/`
- Find your default profile (folder finishing by `.default`)
- Link or copy `user.js` to `${profile}`
- Link or copy `userChrome.css` to `${profile}/chrome/`

### Useful links & references

- https://www.privacytools.io/#browser
- https://github.com/pyllyukko/user.js/blob/master/user.js
- https://github.com/ghacksuserjs/ghacks-user.js/blob/master/user.js
- https://github.com/Timvde/UserChrome-Tweaks
- http://kb.mozillazine.org/Profile_folder_-_Firefox
- http://kb.mozillazine.org/User.js_file
- http://kb.mozillazine.org/UserChrome.css

## Add-ons

To view the list of add-ons I use everyday on Firefox, please see the [`firefox/extensions.csv`](extensions.csv).

### Export installed add-ons

```sh
export PROFILE_DIR=$HOME/.mozilla/firefox/xyz.default/
jq -r '["name","id","type","enabled","homepage"],
  (.addons[] | select(.location == "app-profile") | [.defaultLocale.name,.id,.type,.active,.defaultLocale.homepageURL])
  | join(",")' "$PROFILE_DIR/extensions.json" > extensions.csv
```
