// ==UserScript==
// @name        AWS Accent Colors
// @namespace   https://github.com/0rax/dotfiles
// @description Color the AWS Menubar depending on the account you are in (uses account name suffix)
// @match       https://console.aws.amazon.com/*
// @match       https://*.console.aws.amazon.com/*
// @grant       none
// @author      0rax
// @version     0.1.4
// @homepageURL https://github.com/0rax/dotfiles/tree/master/firefox/violentmonkey
// @downloadURL https://raw.githubusercontent.com/0rax/dotfiles/master/firefox/violentmonkey/aws-accent-colors.js
// ==/UserScript==
var styles = {
    'default': '',
    'billing': 'body #awsc-nav-header { background: #263238; }',
    'pkgs':    'body #awsc-nav-header { background: #311B92; }',
    'prod':    'body #awsc-nav-header { background: #b71c1c; }',
    'dev':     'body #awsc-nav-header { background: #0D47A1; }',
    'dns':     'body #awsc-nav-header { background: #546E7A; }',
    'sandbox': 'body #awsc-nav-header { background: #1B5E20; }',
  };
  function setStyle() {
    var iam = document.querySelector('#nav-usernameMenu > span > span');
    if (iam) {
        account = iam.innerHTML.split(' @ ')[1];
        role = iam.innerHTML.split('/')[0];
        account_type = account.split('-')[1];
        if (account_type === undefined) {
          account_type = "default"
        }
        iam.innerHTML = role + " @ " + account_type
        var style = styles[account_type];
        if (style) {
            let head = document.getElementsByTagName('head')[0];
            if (head) {
                let style_element = document.createElement('style');
                style_element.setAttribute('type', 'text/css');
                style_element.textContent = style;
                head.appendChild(style_element);
            }
        }
    } else {
        setTimeout(setStyle, 300);
    }
  }
  setTimeout(setStyle, 300);
