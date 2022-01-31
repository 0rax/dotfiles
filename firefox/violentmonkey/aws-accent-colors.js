// ==UserScript==
// @name        AWS Accent Colors
// @namespace   https://github.com/0rax/dotfiles
// @description Color the AWS Menubar depending on the account you are in (uses account name suffix)
// @match       https://console.aws.amazon.com/*
// @match       https://*.console.aws.amazon.com/*
// @grant       none
// @author      0rax
// @version     0.1.5
// @homepageURL https://github.com/0rax/dotfiles/tree/master/firefox/violentmonkey
// @downloadURL https://raw.githubusercontent.com/0rax/dotfiles/master/firefox/violentmonkey/aws-accent-colors.js
// ==/UserScript==
var styles = {
  'default': '',
  'billing': 'body #awsc-nav-header > nav { background: #8E44AD; }',
  'pkgs':    'body #awsc-nav-header > nav { background: #2C3E50; }',
  'prod':    'body #awsc-nav-header > nav { background: #C0392B; }',
  'dev':     'body #awsc-nav-header > nav { background: #2980B9; }',
  'sandbox': 'body #awsc-nav-header > nav { background: #27AE60; }',
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
