// ==UserScript==
// @name        AWS Accent Colors
// @namespace   Violentmonkey Scripts
// @match       https://console.aws.amazon.com/*/home*
// @match       https://*.console.aws.amazon.com/*/home*
// @grant       none
// @version     0.1.0
// @author      0rax
// @description Color the AWS Menubar depending on the account you are in (uses account name suffix)
// ==/UserScript==
var styles = {
  'default': '',
  'billing': 'body #awsgnav #nav-menubar, body #awsgnav #nav-menubar .nav-menu, body #awsgnav #nav-menubar #nav-menu-right { background: #263238; }',
  'pkgs':    'body #awsgnav #nav-menubar, body #awsgnav #nav-menubar .nav-menu, body #awsgnav #nav-menubar #nav-menu-right { background: #311B92; }',
  'prod':    'body #awsgnav #nav-menubar, body #awsgnav #nav-menubar .nav-menu, body #awsgnav #nav-menubar #nav-menu-right { background: #b71c1c; }',
  'dev':     'body #awsgnav #nav-menubar, body #awsgnav #nav-menubar .nav-menu, body #awsgnav #nav-menubar #nav-menu-right { background: #0D47A1; }',
  'sandbox': 'body #awsgnav #nav-menubar, body #awsgnav #nav-menubar .nav-menu, body #awsgnav #nav-menubar #nav-menu-right { background: #1B5E20; }',
};
function setStyle() {
  var iam = document.querySelector('#nav-usernameMenu > div.nav-elt-label');
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
