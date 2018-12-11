// Sidebar theme: #232425,#1d1e20,#398FFF,#FFFFFF,#398FFF,#FFFFFF,#398FFF,#398FFF
// https://pavelmakhov.com/2017/01/rambox-dark-theme

function applycss(css){
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
}

applycss(`
  *::-webkit-scrollbar {
      width: 10px !important;
      height: 10px !important;
      background: #1e1e1e !important;
      border: 1px solid #252525 !important;
  }

  *::-webkit-scrollbar-button {
      display: none !important;
  }

  *::-webkit-scrollbar-thumb,
  *::-webkit-scrollbar-track {
      border: 0 !important;
      box-shadow: none !important;
  }

  *::-webkit-scrollbar-thumb {
      min-height: 28px !important;
      background: #333 !important;
  }

  *::-webkit-scrollbar-corner,
  *::-webkit-scrollbar-track {
      background: #1e1e1e !important;
  }

  body {
      background: #282a2e;
      color: #e0e0e0;
  }

  a {
      color: #2D9EE0;
  }

  a:link,
  a:visited {
      color: #2D9EE0;
  }

  a:hover,
  a:active,
  a:focus {
      color: #2D9EE0;
  }

  hr {
      border-bottom: 1px solid #373b41;
      border-top: 1px solid #282a2e;
  }

  h1,
  h2,
  h3,
  h4 {
      color: #e0e0e0;
  }

  h1 a {
      color: #e0e0e0;
  }

  h1 a:active,
  h1 a:hover,
  h1 a:link,
  h1 a:visited {
      color: #e0e0e0;
  }

  .bordered {
      border: 1px solid #282a2e;
  }

  .top_border {
      border-top: 1px solid #282a2e;
  }

  .bottom_border {
      border-bottom: 1px solid #282a2e;
  }

  .left_border {
      border-left: 1px solid #282a2e;
  }

  .right_border {
      border-right: 1px solid #282a2e;
  }

  .alert {
      background-color: #282a2e;
      border-color: #1d1f21;
      color: #e0e0e0;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
  }

  .alert h4 {
      color: #e0e0e0;
  }

  .alert-info {
      background-color: #282a2e;
      border-color: #1d1f21;
      color: #e0e0e0;
  }

  .alert-info h4 {
      color: #e0e0e0;
  }

  ::-webkit-scrollbar-track {
      background: #282a2e !important;
      border-left-color: #282a2e !important;
      border-right-color: #282a2e !important;
      color: #282a2e !important;
  }

  ::-webkit-scrollbar-thumb {
      background: #373b41 !important;
      border-left-color: #282a2e !important;
      border-right-color: #282a2e !important;
      color: #282a2e !important;
  }

  ::-webkit-scrollbar-corner {
      background: #282a2e !important;
  }

  .supports_custom_scrollbar #messages_container::after {
      background: none !important;
  }

  .monkey_scroll_bar {
      background: #373b41;
  }

  .monkey_scroll_handle_inner {
      background: #373b41;
      border: 1px solid #969896;
  }

  .monkey_scroll_bar_native_scrollbar_shim {
      background: transparent;
  }

  #client-ui .monkey_scroll_bar {
      background: #373b41;
  }

  #client-ui .monkey_scroll_handle_inner {
      background: #373b41;
      border: 3px solid #282a2e;
  }

  #monkey_scroll_wrapper_for_channels_scroller .monkey_scroll_bar {
      background: #373b41;
  }

  #monkey_scroll_wrapper_for_channels_scroller .monkey_scroll_handle_inner {
      background: #373b41;
      border: 3px solid #282a2e;
  }

  #col_channels {
      background-color: #282a2e;
      color: #e0e0e0;
  }

  #col_channels_collapse_view {
      background: #282a2e;
  }

  .channels_list_holder h2 {
      color: #e0e0e0 !important;
  }

  .channels_list_holder h2.hoverable:not(.jquery_hover):hover {
      color: #e0e0e0;
      opacity: 0.8;
  }

  .channels_list_holder ul {
      color: #e0e0e0 !important;
  }

  .channels_list_holder ul li {
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  }

  .channels_list_holder ul li .channel_name,
  .channels_list_holder ul li .group_name,
  .channels_list_holder ul li .im_name,
  .channels_list_holder ul li .mpim_name,
  .channels_list_holder ul li>a {
      background: #282a2e;
      color: rgba(224, 224, 224, 0.8) !important;
  }

  .channels_list_holder ul li .channel_name:hover,
  .channels_list_holder ul li .group_name:hover,
  .channels_list_holder ul li .im_name:hover,
  .channels_list_holder ul li .mpim_name:hover,
  .channels_list_holder ul li>a:hover {
      background: #282a2e !important;
      border-bottom-right-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
  }

  .channels_list_holder ul li .group_close,
  .channels_list_holder ul li .im_close,
  .channels_list_holder ul li .mpim_close {
      color: #ffffff !important;
  }

  .channels_list_holder ul li.mention a {
      color: #e0e0e0;
  }

  .channels_list_holder ul li.unread:not(.muted_channel) {
      color: #efefef !important;
  }

  .channels_list_holder ul li.unread:not(.muted_channel) .channel_name,
  .channels_list_holder ul li.unread:not(.muted_channel) .group_name,
  .channels_list_holder ul li.unread:not(.muted_channel) .im_name,
  .channels_list_holder ul li.unread:not(.muted_channel) .mpim_name,
  .channels_list_holder ul li.unread:not(.muted_channel)>a {
      background: #282a2e;
      color: #efefef !important;
  }

  .channels_list_holder ul li.unread .prefix {
      color: #e0e0e0 !important;
      opacity: 1;
  }

  .channels_list_holder .unread_just {
      background: #282a2e;
      color: #e0e0e0;
  }

  .channels_list_holder .unread_highlights {
      background: #bf360c;
      color: #e0e0e0;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  }

  .channels_list_new_btn {
      color: #ffffff;
  }

  .list_more {
      border-bottom: 1px dotted #ffffff;
      color: #ffffff !important;
  }

  .list_more:hover {
      border-bottom: 1px solid #cc6666;
      color: #cc6666 !important;
  }

  #channels_scroller.show_which_channel_is_active ul li.active .channel_name,
  #channels_scroller.show_which_channel_is_active ul li.active .group_name,
  #channels_scroller.show_which_channel_is_active ul li.active .mpim_name,
  #channels_scroller.show_which_channel_is_active ul li.active .im_name {
      background: #282a2e;
      color: #e0e0e0 !important;
  }

  #channels_scroller.show_which_channel_is_active ul li.active a.group_name,
  #channels_scroller.show_which_channel_is_active ul li.active a.im_name,
  #channels_scroller.show_which_channel_is_active ul li.active a.mpim_name {
      background: #282a2e;
      color: #e0e0e0;
  }

  #channels_scroller.show_which_channel_is_active ul li.active a.channel_name .prefix,
  #channels_scroller.show_which_channel_is_active ul li.active a.group_name .prefix {
      color: #398FFF;
  }

  #channels_scroller.show_which_channel_is_active ul li.active .unread_highlights {
      background: #bf360c;
      color: #e0e0e0;
  }

  #channel_scroll_down,
  #channel_scroll_up {
      background: #1d1f21;
      color: #e0e0e0;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  }

  #channel_scroll_down:hover {
      color: #e0e0e0;
  }

  #channel_scroll_down.unseen_have_mentions {
      background: #bf360c;
  }

  #channel_scroll_up.unseen_have_mentions {
      background: #bf360c;
  }

  #channel_scroll_up:hover {
      color: #e0e0e0;
  }

  #list_controls {
      border-bottom: 1px solid #282a2e;
      color: #398FFF;
  }

  #list_search {
      border: 1px solid #282a2e;
  }

  #list_search_container .icon_search {
      color: #398FFF;
  }

  #list_search_container .icon_close {
      color: #398FFF;
  }

  #list_browser p.highlighted {
      background: #282a2e;
  }

  #list_browser:not(.keyboard_active) p:hover {
      background: #282a2e;
  }

  #list_browser .item_creator {
      color: #398FFF;
  }

  #list_browser .item_count {
      color: #e0e0e0;
  }

  #list_browser .item_purpose {
      color: #e0e0e0;
  }

  #list_browser_dialog .modal-footer a {
      color: #ffffff;
  }

  #list_browser_dialog .modal-footer a:hover {
      color: #cc6666;
  }

  #channel_list_invites_link {
      border-bottom: 1px dotted #ffffff;
      color: #ffffff !important;
      font-size: 0.9rem;
  }

  #channel_list_invites_link:hover {
      border-bottom: 1px solid #ffffff;
  }

  #quick_switcher_btn {
      background: #282a2e;
      border-top: 2px solid #282a2e;
  }

  #quick_switcher_btn>i {
      color: #398FFF;
  }

  #quick_switcher_btn:active,
  #quick_switcher_btn:hover {
      background: #282a2e;
      border-color: #282a2e;
  }

  #quick_switcher_btn:active>i,
  #quick_switcher_btn:hover>i {
      color: #ffffff;
  }

  #quick_switcher_btn:active #quick_switcher_label,
  #quick_switcher_btn:hover #quick_switcher_label {
      color: #ffffff;
  }

  #quick_switcher_btn:active #quick_switcher_shortcut,
  #quick_switcher_btn:hover #quick_switcher_shortcut {
      color: #ffffff;
  }

  #quick_switcher_shortcut {
      color: #398FFF;
  }

  #quick_switcher_label {
      color: #398FFF;
  }

  .loading #loading-zone {
      background: #282a2e;
  }

  #loading_welcome {
      background-image: none;
  }

  #loading_message p {
      color: #e0e0e0;
  }

  #loading_message #loading_message_attribution {
      color: #398FFF;
  }

  #col_channels_bg {
      background: #282a2e;
  }

  #loading_team_menu_bg,
  #loading_user_menu_bg {
      background: #282a2e;
      border: none;
  }

  #loading_message_spinner {
      background-image: none;
      width: auto;
  }

  #loading_message_spinner::after {
      color: #398FFF;
      content: "Loading...";
  }

  body.loading #team_menu,
  body.loading #quick_switcher_btn,
  body.loading #team_menu_overlay,
  body.loading #col_channels_overlay,
  body.loading #col_channels {
      background-color: #282a2e;
  }

  input[type=text],
  input[type=password],
  input[type=datetime],
  input[type=datetime-local],
  input[type=date],
  input[type=month],
  input[type=time],
  input[type=week],
  input[type=number],
  input[type=email],
  input[type=url],
  input[type=tel],
  input[type=color],
  input[type=search] {
      background-color: #373b41;
      border: 1px solid #1d1f21;
      color: #e0e0e0;
  }

  input[type=text]:focus,
  input[type=password]:focus,
  input[type=datetime]:focus,
  input[type=datetime-local]:focus,
  input[type=date]:focus,
  input[type=month]:focus,
  input[type=time]:focus,
  input[type=week]:focus,
  input[type=number]:focus,
  input[type=email]:focus,
  input[type=url]:focus,
  input[type=tel]:focus,
  input[type=color]:focus,
  input[type=search]:focus {
      border-color: rgba(40, 42, 46, 0.8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(150, 152, 150, 0.6);
  }

  input[type=file]:focus {
      outline: #e0e0e0 dotted thin;
  }

  input[type=radio]:focus,
  input[type=checkbox]:focus {
      outline: #e0e0e0 dotted thin;
  }

  select {
      background: #373b41;
  }

  select,
  textarea {
      border: 1px solid #1d1f21;
      color: #e0e0e0;
  }

  select:active,
  select:focus,
  textarea:active,
  textarea:focus {
      border-color: #282a2e;
      box-shadow: 0 0 7px rgba(150, 152, 150, 0.15);
  }

  input:disabled,
  input:disabled:active,
  select:disabled,
  textarea:disabled {
      border-color: #373b41 !important;
  }

  .no_touch input:hover,
  .no_touch select:hover,
  .no_touch textarea:hover {
      border-color: #282a2e;
  }

  .no_touch label.select:hover select {
      border-color: #282a2e;
  }

  .no_touch label.select:not(.disabled):hover::after {
      color: #282a2e;
  }

  label.disabled {
      color: #e0e0e0;
  }

  legend {
      border-bottom: 1px solid #969896;
  }

  legend small {
      color: #398FFF;
  }

  .uneditable-input,
  .uneditable-textarea {
      background-color: #373b41;
      border: 1px solid #1d1f21;
      color: #e0e0e0;
  }

  .uneditable-input:focus,
  .uneditable-textarea:focus {
      border-color: rgba(150, 152, 150, 0.8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(150, 152, 150, 0.6);
  }

  textarea {
      background-color: #373b41;
      border: 1px solid #1d1f21;
      color: #e0e0e0;
  }

  textarea:focus {
      border-color: rgba(150, 152, 150, 0.8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(150, 152, 150, 0.6);
  }

  ::-webkit-input-placeholder {
      color: #e0e0e0 !important;
      -webkit-filter: none;
      filter: none;
      opacity: 0.5;
  }

  ::-moz-placeholder {
      color: #e0e0e0 !important;
      filter: none;
      opacity: 0.5;
  }

  ::placeholder {
      color: #e0e0e0 !important;
      filter: none;
      opacity: 0.5;
  }

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
      color: #e0e0e0 !important;
      -webkit-filter: none;
      filter: none;
      opacity: 0.5;
  }

  input::-moz-placeholder,
  textarea::-moz-placeholder {
      color: #e0e0e0 !important;
      filter: none;
      opacity: 0.5;
  }

  input::placeholder,
  textarea::placeholder {
      color: #e0e0e0 !important;
      filter: none;
      opacity: 0.5;
  }

  input[disabled],
  input[readonly],
  textarea[disabled],
  textarea[readonly] {
      background-color: #373b41 !important;
  }

  .form-actions {
      background-color: #373b41;
      border-top: 1px solid #282a2e;
  }

  .help-block,
  .help-inline {
      color: #398FFF;
  }

  .input-append .add-on,
  .input-prepend .add-on {
      background-color: #969896;
      border: 1px solid #373b41;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  }

  .btn {
      background-color: #373b41;
      color: #e0e0e0 !important;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  }

  .btn.hover,
  .btn:focus,
  .btn:hover,
  .btn.active,
  .btn:active {
      background-color: #373b41;
      color: #e0e0e0;
  }

  .btn.btn_border {
      border: 2px solid #373b41;
  }

  .btn.disabled,
  .btn:disabled {
      background-color: #1d1f21 !important;
  }

  .btn.disabled:active,
  .btn.disabled:hover,
  .btn:disabled:active,
  .btn:disabled:hover {
      background-color: #1d1f21 !important;
  }

  .btn.btn_outline.btn_danger,
  .btn.btn_outline.btn_warning {
      background-color: #bf360c !important;
      color: #e0e0e0 !important;
  }

  .btn.btn_outline.btn_danger:focus,
  .btn.btn_outline.btn_danger:hover,
  .btn.btn_outline.btn_warning:focus,
  .btn.btn_outline.btn_warning:hover {
      background-color: #282a2e !important;
      border-color: #bf360c !important;
      color: #bf360c !important;
  }

  .btn.btn_outline.disabled {
      background: #373b41 !important;
      color: #ffffff !important;
  }

  .btn.btn_outline.disabled:hover {
      background: #373b41 !important;
      color: #ffffff !important;
  }

  .btn.btn_attachment {
      border-color: #373b41;
  }

  .btn.btn_attachment:hover,
  .btn.btn_attachment:focus {
      background-color: #282a2e;
      border-color: #969896;
  }

  .btn.btn_attachment.btn_danger {
      border-color: #bf360c;
  }

  .btn.btn_attachment.btn_danger:hover,
  .btn.btn_attachment.btn_danger:focus {
      border-color: #ef440f;
  }

  .btn.btn_attachment.btn_primary {
      border-color: #969896;
  }

  .btn.btn_attachment.btn_primary:hover,
  .btn.btn_attachment.btn_primary:focus {
      border-color: #b0b1b0;
  }

  .btn_outline {
      background: #282a2e;
      color: #ffffff !important;
  }

  .btn_outline::after {
      border: 1px solid #373b41;
  }

  .btn_outline.btn_transparent {
      color: rgba(55, 59, 65, 0.9) !important;
  }

  .btn_outline.btn_transparent::after {
      border: 1px solid rgba(40, 42, 46, 0.5);
  }

  .btn_outline.btn_transparent.active,
  .btn_outline.btn_transparent.hover,
  .btn_outline.btn_transparent:active,
  .btn_outline.btn_transparent:focus,
  .btn_outline.btn_transparent:hover {
      background-color: rgba(55, 59, 65, 0.9) !important;
      color: #cc6666 !important;
  }

  .btn_outline.btn_transparent.active,
  .btn_outline.btn_transparent:active {
      background-color: rgba(55, 59, 65, 0.8) !important;
  }

  .btn_outline.hover,
  .btn_outline:focus,
  .btn_outline:hover {
      background: #282a2e;
      color: #cc6666 !important;
  }

  .btn_outline:active {
      color: #cc6666;
  }

  .btn_outline.active {
      color: #cc6666 !important;
  }

  .btn_link {
      color: #ffffff;
  }

  .btn_link:hover,
  .btn_link:focus {
      color: #cc6666;
  }

  .btn-group.open .btn.dropdown-toggle {
      background-color: #373b41;
  }

  .btn-group.open .btn-primary.dropdown-toggle {
      background-color: #373b41;
  }

  .btn-group>.btn+.dropdown-toggle {
      box-shadow: inset 1px 0 0 rgba(0, 0, 0, 0.125), inset 0 1px 0 rgba(0, 0, 0, 0.2), 0 1px 2px rgba(255, 255, 255, 0.05);
  }

  .btn_info,
  .btn.btn_success {
      background-color: #282a2e !important;
  }

  .btn_warning,
  .btn_danger {
      background-color: #bf360c !important;
  }

  .btn-danger .caret,
  .btn-info .caret,
  .btn-inverse .caret,
  .btn-primary .caret,
  .btn-success .caret,
  .btn-warning .caret {
      border-bottom-color: #e0e0e0;
      border-top-color: #e0e0e0;
  }

  .input_note {
      color: #e0e0e0;
  }

  .lazy_filter_select.default_style.disabled {
      background: #282a2e;
  }

  .lazy_filter_select.default_style.disabled input.lfs_input {
      background: #969896;
  }

  .lazy_filter_select.default_style .lfs_input_container {
      border: 1px solid #1d1f21;
  }

  .lazy_filter_select.default_style .lfs_input_container.active,
  .lazy_filter_select.default_style .lfs_input_container:hover {
      border-color: #282a2e;
  }

  .lazy_filter_select.default_style .lfs_input_container.active {
      box-shadow: 0 0 7px rgba(40, 42, 46, 0.15);
  }

  .lazy_filter_select.default_style .lfs_list_container {
      background: #282a2e;
      border: 1px solid #1d1f21;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }

  .lazy_filter_select.default_style .lfs_list .lfs_item.selected {
      color: #e0e0e0;
  }

  .lazy_filter_select.default_style .lfs_list .lfs_item.disabled {
      color: #e0e0e0;
  }

  .lazy_filter_select.default_style .lfs_list .lfs_item.active {
      background-color: #1d1f21;
      border-color: #282a2e;
      color: #e0e0e0;
  }

  .lazy_filter_select.default_style .lfs_token {
      background: #282a2e;
      border: 1px solid #1d1f21;
      color: #e0e0e0;
  }

  .lazy_filter_select.default_style .lfs_token::after {
      color: #e0e0e0;
  }

  .lazy_filter_select.default_style.single .lfs_input_container.active::after,
  .lazy_filter_select.default_style.single .lfs_input_container:hover::after {
      color: #e0e0e0;
  }

  #message_edit_form .emo_menu {
      color: rgba(224, 224, 224, 0.3);
  }

  #message_edit_form .emo_menu.active .ts_icon_happy_smile,
  #message_edit_form .emo_menu:hover .ts_icon_happy_smile {
      color: #969896;
  }

  #message_edit_form.focus .emo_menu {
      color: rgba(224, 224, 224, 0.6);
  }

  #message_edit_form.focus #primary_file_button:not(:hover) {
      border-color: #282a2e;
  }

  #message_edit_form.offline #message-input,
  #message_edit_form.offline #primary_file_button {
      background-color: #282a2e !important;
  }

  #message_edit_form.offline #primary_file_button {
      border-color: #373b41;
      color: #398FFF;
  }

  #msg_form.focus #msg_input,
  #msg_form.focus #primary_file_button:not(:hover):not(.active) {
      border-color: #282a2e;
  }

  #msg_form #msg_input {
      background: padding-box #373b41;
      border-color: #373b41;
      border-left: 0;
      color: #e0e0e0;
  }

  #msg_input {
      background: #373b41;
      border-color: #373b41;
      color: #e0e0e0;
  }

  #msg_input:focus {
      border-color: #282a2e;
  }

  #msg_input:focus+#primary_file_button:not(:hover):not(.active) {
      border-color: #282a2e;
  }

  #msg_input.offline:not(.pretend-to-be-online) {
      background-color: #282a2e !important;
      color: #398FFF;
  }

  #msg_input.disabled,
  #msg_input.ql-disabled {
      background-color: #282a2e;
      border-color: #282a2e;
      color: #398FFF;
  }

  #msg_input_message {
      background-color: #282a2e;
      color: #e0e0e0;
  }

  #primary_file_button {
      background: padding-box #373b41;
      border-color: #373b41;
  }

  #primary_file_button.active,
  #primary_file_button:hover {
      background: #373b41;
      border-color: #282a2e;
      color: #398FFF;
  }

  #footer,
  #footer.footer_msg_input {
      background: #282a2e;
  }

  #footer.disabled #message-input,
  #footer.disabled #msg_input {
      background: padding-box #282a2e !important;
      border-color: #282a2e !important;
  }

  #footer_archives_table {
      color: #398FFF;
  }

  #typing_text {
      color: #398FFF;
  }

  #notification_bar.wide #typing_text.overflow_ellipsis {
      -webkit-filter: none;
      filter: none;
  }

  #special_formatting_text {
      color: #398FFF;
  }

  #msg_form .emo_menu,
  #message_edit_form .emo_menu,
  .inline_message_input_container .emo_menu {
      color: rgba(224, 224, 224, 0.35);
  }

  .ts_toggle .ts_toggle_button {
      background: #1d1f21;
      color: #e0e0e0;
  }

  .ts_toggle .ts_toggle_button .ts_toggle_handle {
      background: #282a2e;
  }

  .ts_toggle .ts_toggle_secondary_label {
      color: #398FFF;
  }

  .ts_toggle.checked .ts_toggle_button {
      background: #969896;
      color: #e0e0e0;
  }

  .ts_toggle.ts_toggle_orange .ts_toggle_button {
      background: #bf360c;
      color: #e0e0e0;
  }

  .menu {
      background: #282a2e;
      border: 1px solid #282a2e;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
      color: #e0e0e0;
  }

  .menu .menu_content {
      background: #282a2e !important;
  }

  .menu .menu_filter_container {
      background: #282a2e;
  }

  .menu .menu_filter_container input.menu_filter {
      border: 1px solid #373b41;
  }

  .menu .menu_filter_container input.menu_filter:focus {
      border-color: #373b41;
  }

  .menu .menu_filter_container .icon_search {
      color: #398FFF;
  }

  .menu .menu_filter_container .icon_close {
      color: #398FFF !important;
  }

  .menu #menu_header .menu_simple_header {
      background: #1d1f21;
      border-color: #282a2e;
      color: #e0e0e0;
  }

  .menu #menu_header .menu_simple_header a {
      color: #ffffff;
  }

  .menu #menu_header .menu_simple_header a:hover {
      color: #cc6666;
  }

  .menu #menu_header .menu_close {
      color: #e0e0e0;
  }

  .menu .section_header .header_label {
      background-color: #282a2e;
      color: #398FFF;
  }

  .menu .section_header>div.header_label_container {
      color: #398FFF;
  }

  .menu ul li a {
      background: #282a2e;
      border-bottom: 0;
      color: #e0e0e0;
  }

  .menu ul li a.delete_link {
      color: #bf360c;
  }

  .menu ul li.highlighted a {
      background: #282a2e;
      border-bottom-color: #1d1f21;
      color: #e0e0e0;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  }

  .menu ul li.highlighted a.delete_link {
      color: #bf360c;
  }

  .menu ul li.disabled a {
      color: #398FFF;
  }

  .menu ul li i {
      color: #398FFF;
  }

  .menu ul li.divider {
      border-bottom-color: #282a2e;
  }

  .menu:not(.keyboard_active) ul li:hover:not(.disabled) a {
      background: #282a2e;
      border-bottom-color: #1d1f21;
      color: #e0e0e0;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  }

  .menu:not(.keyboard_active) ul li:hover:not(.disabled) a.delete_link {
      color: #bf360c;
  }

  .menu input {
      background: #282a2e;
      border: 1px solid #373b41;
  }

  .menu textarea {
      background: #282a2e;
      border: 1px solid #373b41;
  }

  .menu #menu_footer .menu_footer {
      background: #1d1f21;
      border-top: 1px solid #282a2e;
  }

  .menu #monkey_scroll_wrapper_for_menu_items_scroller {
      background: #282a2e;
  }

  .menu #menu_list_container #menu_list .menu_list_item a {
      color: #e0e0e0;
  }

  .menu #menu_list_container #menu_list .menu_list_item.active a {
      background: #373b41;
      color: #e0e0e0;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  }

  #autocomplete_menu {
      color: #e0e0e0;
  }

  #autocomplete_menu h2 {
      color: #e0e0e0;
  }

  #autocomplete_menu .no_results {
      color: #e0e0e0;
  }

  #autocomplete_menu .keyword_match .modifier {
      color: #398FFF;
  }

  #autocomplete_menu .boxed {
      background: #282a2e;
      border: 1px solid #282a2e;
      box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);
  }

  #autocomplete_menu .section_header .header_label {
      background-color: #282a2e;
      color: #398FFF;
  }

  #autocomplete_menu .pickmeup {
      border-bottom: 1px solid #282a2e;
  }

  #autocomplete_menu.search_menu .section_header::before {
      background-color: #373b41;
  }

  #autocomplete_menu.search_menu header {
      color: #e0e0e0;
  }

  #autocomplete_menu.search_menu header .header_label::before {
      background-color: #282a2e;
  }

  #autocomplete_menu.search_menu .query_header {
      background-color: transparent;
  }

  #autocomplete_menu.search_menu .query_header .search_query_preview {
      color: #e0e0e0;
  }

  #autocomplete_menu.search_menu li.highlighted .result_item_btn {
      background: #282a2e;
      color: #e0e0e0;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  }

  #autocomplete_menu.search_menu li.highlighted .modifier_icon {
      color: #398FFF;
  }

  #autocomplete_menu.search_menu li.highlighted .action_btn {
      color: #e0e0e0;
  }

  #autocomplete_menu.search_menu li.highlighted .delete_btn {
      color: #ffffff;
  }

  #autocomplete_menu.search_menu li.highlighted .delete_btn:focus,
  #autocomplete_menu.search_menu li.highlighted .delete_btn:hover {
      color: #bf360c;
  }

  #autocomplete_menu.search_menu li.highlighted .muted_text {
      color: #398FFF;
  }

  #autocomplete_menu.search_menu:not(.keyboard_active) li:focus .muted_text,
  #autocomplete_menu.search_menu:not(.keyboard_active) li:hover .muted_text {
      color: #398FFF;
  }

  #autocomplete_menu.search_menu:not(.keyboard_active) li:focus .result_item_btn,
  #autocomplete_menu.search_menu:not(.keyboard_active) li:hover .result_item_btn {
      background: #282a2e;
      color: #e0e0e0;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  }

  #autocomplete_menu.search_menu:not(.keyboard_active) li:focus .modifier_icon,
  #autocomplete_menu.search_menu:not(.keyboard_active) li:hover .modifier_icon {
      color: #398FFF;
  }

  #autocomplete_menu.search_menu:not(.keyboard_active) li:focus .action_btn,
  #autocomplete_menu.search_menu:not(.keyboard_active) li:hover .action_btn {
      color: #e0e0e0;
  }

  #autocomplete_menu.search_menu:not(.keyboard_active) li:focus .delete_btn,
  #autocomplete_menu.search_menu:not(.keyboard_active) li:hover .delete_btn {
      color: #ffffff;
  }

  #autocomplete_menu.search_menu:not(.keyboard_active) li:focus .delete_btn:focus,
  #autocomplete_menu.search_menu:not(.keyboard_active) li:focus .delete_btn:hover,
  #autocomplete_menu.search_menu:not(.keyboard_active) li:hover .delete_btn:focus,
  #autocomplete_menu.search_menu:not(.keyboard_active) li:hover .delete_btn:hover {
      color: #bf360c;
  }

  #autocomplete_menu.search_menu .muted_text {
      color: #398FFF;
  }

  #autocomplete_menu.search_menu .time_modifiers::before {
      background-color: #282a2e;
  }

  #autocomplete_menu.search_menu .result_item_btn {
      color: #e0e0e0;
  }

  #autocomplete_menu.search_menu .action_btn,
  #autocomplete_menu.search_menu .modifier_icon {
      color: #398FFF;
  }

  #autocomplete_menu.search_menu footer .keyword::before,
  #autocomplete_menu.search_menu footer .modifier::before {
      background: #969896;
      border: 1px solid #373b41;
      color: #e0e0e0;
  }

  #autocomplete_menu.search_menu footer .selected .keyword::before,
  #autocomplete_menu.search_menu footer .selected .modifier::before {
      background: rgba(55, 59, 65, 0.25);
      border: #969896;
  }

  #autocomplete_menu.search_menu footer .modifier.incomplete::before {
      background: #282a2e;
      border: 1px solid #1d1f21;
  }

  .search_light_grey {
      color: #e0e0e0 !important;
  }

  .highlighter_underlay .keyword::before {
      background: #969896;
      border: 1px solid #373b41;
      color: #e0e0e0;
  }

  .highlighter_underlay .modifier::before {
      background: #969896;
      border: 1px solid #373b41;
      color: #e0e0e0;
  }

  .highlighter_underlay .modifier.incomplete::before {
      background: #282a2e;
      border: 1px solid #1d1f21;
  }

  .highlighter_underlay .selected .keyword::before,
  .highlighter_underlay .selected .modifier::before {
      background: rgba(150, 152, 150, 0.25);
      border: #373b41;
  }

  .highlighter_underlay .ghost_text {
      color: #e0e0e0;
  }

  .pickmeup {
      background: #282a2e;
      border: 1px solid #282a2e;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  }

  .pickmeup .pmu-instance .pmu-button {
      color: #e0e0e0;
  }

  .pickmeup .pmu-instance .pmu-today.pmu-selected,
  .pickmeup .pmu-instance .pmu-today:hover {
      background: #282a2e !important;
  }

  .pickmeup .pmu-instance .pmu-today.pmu-selected .pmu-today-border,
  .pickmeup .pmu-instance .pmu-today:hover .pmu-today-border {
      background: #969896;
      color: #e0e0e0 !important;
  }

  .pickmeup .pmu-instance .pmu-today-border {
      border: 2px solid #373b41 !important;
      color: #969896 !important;
  }

  .pickmeup .pmu-instance .pmu-button:not(.pmu-disabled):hover {
      background: #373b41;
      color: #e0e0e0;
  }

  .pickmeup .pmu-instance .pmu-not-in-month {
      background: #282a2e;
      color: #398FFF;
  }

  .pickmeup .pmu-instance .pmu-not-in-month.pmu-selected {
      background: #373b41;
  }

  .pickmeup .pmu-instance .pmu-disabled {
      background: #282a2e;
      color: #398FFF;
  }

  .pickmeup .pmu-instance .pmu-disabled:hover {
      background: #282a2e;
      color: #398FFF;
  }

  .pickmeup .pmu-instance .pmu-selected {
      background: #373b41;
      color: #e0e0e0;
  }

  .pickmeup .pmu-instance nav {
      color: #ffffff;
  }

  .pickmeup .pmu-instance nav :first-child :hover {
      color: #cc6666;
  }

  .pickmeup .pmu-instance .pmu-months *,
  .pickmeup .pmu-instance .pmu-years * {
      border: 1px solid #282a2e;
  }

  .pickmeup .pmu-instance .pmu-day-of-week {
      color: #e0e0e0;
  }

  .pickmeup .pmu-instance .pmu-day-of-week * {
      border: 1px solid #282a2e;
  }

  .pickmeup .pmu-instance .pmu-days * {
      border: 1px solid #282a2e;
  }

  #menu.date_picker .pickmeup .pmu-instance .pmu-button:not(.pmu-disabled):hover,
  #menu.date_picker .pickmeup .pmu-selected {
      background: #373b41;
  }

  #menu.date_picker li.date_picker_item a {
      color: #e0e0e0;
  }

  #menu.date_picker li.date_picker_item a:hover {
      color: #e0e0e0;
  }

  #menu.date_picker li.date_picker_item.highlighted a {
      color: #398FFF;
  }

  #im-list li.member.active .presence,
  #starred-list li.member.active .presence {
      color: #fff;
  }

  #im-list li.member.active .presence.away,
  #starred-list li.member.active .presence.away {
      text-shadow: 1px 1px rgba(0, 0, 0, 0.15);
  }

  #file_member_filter {
      background: #1d1f21;
  }

  #client-ui .member_filter {
      border: 1px solid #373b41;
  }

  #client-ui .member_file_filter_menu .searchable_member_list_scroller .team_list_item:hover .channel_page_member_row {
      background: #282a2e;
  }

  #client-ui .member_file_filter_menu .searchable_member_list_scroller .team_list_item:hover .member {
      color: #e0e0e0;
  }

  #client-ui #team_list_container #team_filter .member_filter {
      background-color: #282a2e;
      border-left: 1px solid #1d1f21;
  }

  #client-ui #file_member_filter {
      border-color: #373b41;
  }

  #client-ui #file_member_filter .member_filter {
      border-color: #373b41;
  }

  #client-ui .team_tabs_container {
      border-bottom: 1px solid #1d1f21;
  }

  #team_filter .icon_search {
      color: #398FFF;
  }

  #team_filter a.icon_close {
      color: #ffffff;
  }

  #team_filter a.icon_close:hover {
      color: #cc6666;
  }

  .filter_header {
      background-color: #282a2e;
  }

  .popover_menu {
      background-color: #282a2e;
      border-top: 1px solid #373b41;
  }

  .popover_menu .arrow::after {
      background-color: #1d1f21;
  }

  .popover_menu .arrow_shadow::after {
      background-color: #282a2e;
      box-shadow: 0 0 0 1px #373b41, 0 0 3px rgba(0, 0, 0, 0.08);
  }

  .popover_menu.showing_header .arrow::after,
  .popover_menu.showing_header .arrow_shadow::after {
      background-color: #282a2e !important;
  }

  .popover_menu .content {
      background-color: #282a2e;
  }

  .tab_complete_ui {
      background: #282a2e;
      border: 1px solid #282a2e;
      box-shadow: 0 1px 15px rgba(0, 0, 0, 0.5);
  }

  .tab_complete_ui .tab_complete_ui_header {
      background: padding-box #1d1f21;
      border-bottom: 1px solid #282a2e;
      color: #e0e0e0;
      text-shadow: 0 1px rgba(0, 0, 0, 0.15);
  }

  .tab_complete_ui ul.type_emoji li {
      color: #e0e0e0;
  }

  .tab_complete_ui ul.type_members .broadcast_info,
  .tab_complete_ui ul.type_members .realname {
      color: #e0e0e0;
  }

  .tab_complete_ui ul.type_cmds li.tab_complete_ui_group .group_name {
      color: #e0e0e0 !important;
  }

  .tab_complete_ui ul.type_cmds li.tab_complete_ui_group .group_divider {
      border-bottom: 0;
      border-top-color: #282a2e;
  }

  .tab_complete_ui ul.type_cmds li.tab_complete_ui_item .cmd-left-td,
  .tab_complete_ui ul.type_cmds li.tab_complete_ui_item .cmd-right-td {
      color: #398FFF;
  }

  .tab_complete_ui ul.type_cmds .cmdname {
      color: #e0e0e0;
      font-weight: 900;
  }

  .tab_complete_ui li.tab_complete_ui_item,
  .tab_complete_ui li.tab_complete_ui_group {
      border-bottom: 1px solid #282a2e;
  }

  .tab_complete_ui li.tab_complete_ui_item.active,
  .tab_complete_ui li.tab_complete_ui_group.active {
      background: #373b41;
      border-bottom-color: #282a2e;
      text-shadow: 0 1px rgba(0, 0, 0, 0.15);
  }

  .tab_complete_ui li.tab_complete_ui_item.active span,
  .tab_complete_ui li.tab_complete_ui_group.active span {
      color: #e0e0e0 !important;
  }

  .tab_complete_ui .not_in_channel {
      color: #398FFF;
  }

  #team_menu {
      /* background: #282a2e; */
      border-bottom: 2px solid #282a2e;
      color: #e0e0e0;
  }

  #team_menu.active,
  #team_menu:hover {
      background: #282a2e !important;
      border-bottom-color: #282a2e !important;
  }

  #team_menu.active i,
  #team_menu:hover i {
      color: #e0e0e0;
  }

  #team_menu i {
      color: #398FFF;
  }

  #team_menu .presence .presence_icon {
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  }

  #team_menu .team_name_caret,
  #team_menu .notifications_menu_btn {
      color: #e0e0e0 !important;
  }

  #team_menu_user {
      color: #398FFF;
  }

  #im-list li.member.active .presence,
  #starred-list li.member.active .presence {
      color: #e0e0e0;
  }

  #im-list li.member.active .presence.away,
  #starred-list li.member.active .presence.away {
      color: #398FFF;
      text-shadow: 1px 1px rgba(0, 0, 0, 0.15);
  }

  .slack_menu_section::before {
      border-top-color: #282a2e;
  }

  .slack_menu_header_secondary {
      color: #398FFF;
  }

  .slack_menu_download {
      background-color: #282a2e;
  }

  #menu_items_scroller::-webkit-scrollbar-track {
      background: #282a2e !important;
  }

  .channel_header {
      background: #282a2e;
  }

  .channel_header .blue_on_hover:hover {
      color: #e0e0e0;
  }

  #client_body:not(.onboarding)::before {
      background: #282a2e;
      border-bottom: 1px solid #282a2e;
  }

  .messages_header {
      color: #e0e0e0;
  }

  .channel_title .channel_name_container .channel_name {
      color: #e0e0e0;
  }

  .channel_title .channel_name_container .channel_name.muted {
      color: #398FFF;
  }

  .channel_title .channel_name_container .ts_icon_shared_channel.away,
  .channel_title .channel_name_container .mpdm_member.away {
      color: #398FFF;
  }

  .channel_title .channel_name_container .muted_icon {
      color: #398FFF;
  }

  .channel_title .channel_name_container .muted_icon:hover {
      color: #bf360c;
  }

  #im_title.away {
      color: #398FFF;
  }

  .channel_header_info .star,
  .channel_header_info button {
      color: #ffffff;
  }

  .channel_title_info {
      background: #282a2e;
      color: #398FFF;
  }

  .channel_title_info .divider_bar {
      background: #282a2e;
  }

  .channel_title_info .channel_details_toggle {
      color: #398FFF;
  }

  .channel_title_info .channel_actions_toggle {
      color: #398FFF;
  }

  .channel_header_icon {
      color: #e0e0e0;
  }

  .channel_calls_button .call_icon.call_window_offline {
      color: #398FFF;
  }

  .channel_actions_toggle.active:focus,
  .details_toggle.active:focus {
      color: #e0e0e0;
  }

  #flex_menu_toggle.active,
  #flex_menu_toggle.active:focus {
      color: #e0e0e0;
  }

  #flex_menu_toggle .flex_menu_download_circle {
      background: #282a2e;
  }

  #flex_menu_toggle .flex_menu_download_circle canvas {
      background: #282a2e;
  }

  #flex_menu_toggle.unread #help_icon_circle_count {
      background-color: #bf360c;
      color: #fff;
  }

  #flex_menu_toggle.open #help_icon_circle_count {
      background-color: #1d1f21;
      color: #e0e0e0;
  }

  #details_toggle.active,
  #recent_mentions_toggle.active,
  #stars_toggle.active {
      background: #282a2e;
  }

  #details_toggle.active:hover,
  #recent_mentions_toggle.active:hover,
  #stars_toggle.active:hover {
      background: #373b41;
      color: #e0e0e0;
  }

  #recent_mentions_toggle:hover {
      color: #bf360c;
  }

  #rxn_toast_div {
      background: #1d1f21;
      border: 1px solid #373b41;
  }

  .presence {
      color: #398FFF;
  }

  #banner {
      background: #1d1f21;
  }

  #banner a {
      color: #ffffff;
  }

  .banner_content {
      color: #e0e0e0;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  }

  #notifications_banner {
      background: #1d1f21;
  }

  #banner:hover #notifications_banner {
      background: #1d1f21;
  }

  #notifications_dismiss_banner {
      background: #1d1f21;
  }

  #macssb1_banner,
  #macssb1_dismiss_banner,
  #winssb1_banner,
  #winssb1_dismiss_banner {
      background: #1d1f21;
  }

  .day_divider,
  .mention_day_container_div .day_divider {
      background: #282a2e;
      color: #398FFF;
  }

  .day_divider hr,
  .mention_day_container_div .day_divider hr {
      border-bottom: 0;
      border-top: 1px solid #282a2e;
  }

  .day_divider .day_divider_label {
      background: #282a2e;
  }

  .day_container .day_msgs {
      border-top: 1px solid #282a2e;
  }

  .day_container.unread_day_container .day_msgs {
      border-color: #969896;
  }

  .day_container .day_divider {
      background: none;
      color: #398FFF;
  }

  .day_container .day_divider .day_divider_label {
      background: #282a2e;
  }

  .search_form {
      border-color: #373b41;
  }

  .search_form .search_input {
      background: transparent;
  }

  .search_form:hover {
      border-color: #969896;
  }

  .search_focused .search_form {
      border-color: #969896;
  }

  .search_clear_icon .ts_icon_times_circle {
      color: #398FFF;
  }

  #search_spinner {
      color: #e0e0e0;
  }

  .flexbox_client #search_container .search_input {
      background: transparent;
  }

  .flexbox_client #search_container .icon_search {
      color: #398FFF;
  }

  .flexbox_client #search_container .icon_close {
      color: #ffffff;
  }

  #team_filter .icon_search {
      color: #398FFF;
  }

  #team_filter a.icon_close {
      color: #ffffff;
  }

  #team_filter a.icon_close:hover {
      color: #cc6666;
  }

  #client-ui .icon_search {
      color: #398FFF;
  }

  #client-ui a.icon_close {
      color: #ffffff;
  }

  #client-ui a.icon_close:hover {
      color: #cc6666;
  }

  .inline_edit .inline_edit_inner::before {
      background: #282a2e;
      border: 1px solid #373b41;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.5);
  }

  .inline_edit .inline_edit_inner::after {
      color: #e0e0e0;
  }

  .inline_edit.inline_edit_success .inline_edit_inner::after {
      color: #0c95bf;
  }

  .inline_edit.inline_edit_error .inline_edit_inner::after {
      color: #bf360c;
  }

  .inline_edit.inline_edit_editing .inline_edit_inner::before {
      border-color: #1d1f21;
      box-shadow: none;
  }

  .inline_edit.inline_edit_editing .inline_edit_inner::after {
      color: #398FFF;
  }

  #msgs_overlay_div {
      background: #282a2e;
  }

  ts-message {
      color: #e0e0e0;
  }

  ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply),
  ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply) {
      background: rgba(29, 31, 33, 0.1);
  }

  ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).is_pinned,
  ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).show_recap:not(.is_pinned),
  ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).is_pinned,
  ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).show_recap:not(.is_pinned) {
      background: rgba(29, 31, 33, 0.2);
  }

  ts-message.is_pinned {
      background: rgba(29, 31, 33, 0.15);
  }

  ts-message .timestamp {
      color: #ffffff;
  }

  ts-message .edited,
  ts-message .temp_msg_controls {
      color: #398FFF;
  }

  ts-message .only_visible_to_user {
      color: #398FFF;
  }

  ts-message.ephemeral {
      color: #e0e0e0;
  }

  ts-message .bot_label {
      background: #1d1f21;
      color: #398FFF;
  }

  ts-message .in_reply_to {
      background: #1d1f21;
      color: #398FFF;
  }

  ts-message.standalone:not(.for_mention_display):not(.for_search_display):not(.for_top_results_search_display):not(.for_star_display) {
      border: 1px solid #282a2e;
  }

  ts-message.unprocessed {
      color: rgba(224, 224, 224, 0.75);
  }

  ts-message.highlight {
      background: rgba(191, 54, 12, 0.4);
  }

  ts-message.highlight:hover {
      background: rgba(191, 54, 12, 0.4);
  }

  ts-message .is_highlights_holder {
      color: #398FFF;
  }

  ts-message .is_highlights_holder ts-icon {
      color: #398FFF;
  }

  ts-message .is_highlights_holder .highlights_feedback_link {
      color: #398FFF;
  }

  ts-message .is_highlights_holder .highlights_feedback a:not(.highlights_feedback_link) {
      color: #e0e0e0;
  }

  ts-message .recap_highlight {
      background: rgba(191, 54, 12, 0.4);
  }

  ts-message .recap_highlight a {
      color: #e0e0e0;
  }

  ts-message.delete_mode,
  ts-message.multi_delete_mode {
      background: rgba(191, 54, 12, 0.75);
  }

  ts-message.automated .message_body {
      color: rgba(224, 224, 224, 0.8);
  }

  ts-message .action_hover_container {
      border: 1px solid #282a2e;
  }

  ts-message .action_hover_container:hover {
      border-color: #373b41;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  }

  ts-message .action_hover_container:hover a {
      background: #282a2e;
      border-right: 1px solid #373b41;
  }

  ts-message .action_hover_container .btn_msg_action {
      background: #282a2e;
      border-right: 1px solid #282a2e;
      color: #ffffff;
  }

  ts-message .action_hover_container .btn_msg_action:hover {
      color: #e0e0e0;
  }

  ts-message .action_hover_container .btn_msg_action.active,
  ts-message .action_hover_container .btn_msg_action:active {
      background: #282a2e;
      color: #e0e0e0;
  }

  ts-message.selected {
      background: #282a2e;
  }

  ts-message.selected:not(.delete_mode) {
      background: #282a2e;
  }

  ts-message.selected:hover {
      background: rgba(0, 0, 0, 0.15);
  }

  ts-message .meta {
      color: #398FFF;
  }

  ts-message .meta.msg_inline_img_toggler .member,
  ts-message .meta.msg_inline_img_toggler .service_link,
  ts-message .meta.msg_inline_file_preview_toggler .member,
  ts-message .meta.msg_inline_file_preview_toggler .service_link {
      color: #ffffff !important;
  }

  ts-message .meta.msg_inline_img_toggler .ts_icon_dropbox,
  ts-message .meta.msg_inline_img_toggler a,
  ts-message .meta.msg_inline_file_preview_toggler .ts_icon_dropbox,
  ts-message .meta.msg_inline_file_preview_toggler a {
      color: #398FFF !important;
  }

  ts-message .pinned_item_message_header {
      color: #398FFF;
  }

  ts-message .mention {
      background: #373b41;
      border: 1px solid #969896;
      border-radius: 3px;
      color: #e0e0e0;
      padding: 0 3px;
  }

  ts-message a .mention {
      color: #e0e0e0;
  }

  ts-message.show_recap:not(.is_pinned) {
      background: rgba(29, 31, 33, 0.15);
  }

  ts-message.show_recap:not(.is_pinned):hover {
      background: rgba(29, 31, 33, 0.15);
  }

  .selecting_messages ts-message.multi_delete_mode:hover {
      background: rgba(191, 54, 12, 0.75);
  }

  .selecting_messages ts-message:hover {
      background: #1d1f21;
  }

  #convo_container {
      background-color: #282a2e;
  }

  #convo_container #message_edit_container {
      border-bottom: 1px solid #373b41;
      border-top: 1px solid #373b41;
  }

  #convo_container .more_messages {
      background: #373b41;
  }

  #convo_container .more_messages_container .more_messages {
      color: #398FFF;
  }

  #convo_container ts-conversation::after {
      background: rgba(29, 31, 33, 0.08);
      background: -webkit-gradient(linear, left bottom, left top, color-stop(0, transparent), color-stop(1, rgba(29, 31, 33, 0.08)));
      background: -moz-linear-gradient(center bottom, transparent 0, rgba(29, 31, 33, 0.08) 100%);
  }

  #convo_container ts-conversation::before {
      background: transparent;
      background: -webkit-gradient(linear, left bottom, left top, color-stop(0, rgba(29, 31, 33, 0.08)), color-stop(1, transparent));
      background: -moz-linear-gradient(center bottom, rgba(29, 31, 33, 0.08) 0, transparent 100%);
  }

  #convo_container ts-conversation ts-message.selected {
      background: #282a2e;
  }

  #convo_container ts-conversation ts-relatives::after {
      background: #373b41;
  }

  #convo_container ts-conversation ts-relatives ts-message.deleted .message_icon i {
      background-color: #373b41;
      color: #398FFF;
  }

  #convo_container ts-conversation ts-relatives ts-message.deleted .message_content {
      color: #e0e0e0;
  }

  #convo_container ts-conversation ts-relatives ts-message:not(.selected):not(.highlight):not(.delete_mode).new {
      background-color: #34363c;
  }

  #msgs_div .unread_divider hr {
      border-top: 1px solid #373b41;
  }

  #msgs_div .unread_divider .divider_label {
      background: #282a2e;
      color: #373b41;
  }

  #msgs_div .unread_divider.no_unreads hr {
      border-top-color: #282a2e;
  }

  #msgs_div .unread_divider.no_unreads .divider_label {
      color: #398FFF;
  }

  #msgs_div ts-message.automated_grey {
      background: #1d1f21;
  }

  #msgs_div ts-message.automated_grey .timestamp {
      color: #ffffff;
  }

  #msgs_div ts-message.automated_grey:hover .timestamp {
      color: #cc6666;
  }

  .channel_archive_messages.card .col:first-child {
      border-right: 1px solid #373b41;
  }

  .star {
      color: #398FFF;
  }

  .star_item {
      border-bottom: 1px solid #1d1f21;
  }

  .star_item .star_meta {
      color: #398FFF;
  }

  .bot_message .message_sender {
      color: #e0e0e0;
  }

  .bot_message .message_sender a {
      color: #e0e0e0;
  }

  .color_USLACKBOT:not(.nuc),
  #col_channels ul li:not(.active):not(.away)>.color_USLACKBOT:not(.nuc),
  #col_channels:not(.show_presence) ul li>.color_USLACKBOT:not(.nuc) {
      color: #e0e0e0;
  }

  #msgs_scroller_div #end_display_div #end_display_status {
      color: #398FFF;
  }

  #msgs_scroller_div #end_display_div #end_display_meta {
      color: #398FFF;
  }

  #msgs_scroller_div #end_display_div #end_display_meta h1 {
      color: #e0e0e0;
  }

  #msgs_scroller_div #end_display_div p {
      color: #e0e0e0;
  }

  .member_mentions_options {
      background-color: #1d1f21;
      border-top: 1px solid #282a2e;
  }

  .dm_badge .dm_badge_meta {
      color: #e0e0e0;
  }

  .dm_badge a {
      color: #ffffff;
  }

  .dm_badge a.member_preview_link {
      color: #ffffff;
  }

  .dm_badge .dm_badge:hover a {
      color: #ffffff;
  }

  .dm_badge .hint {
      color: #398FFF;
  }

  .is_limited_div {
      background-color: #282a2e !important;
  }

  .is_limited_div.mini {
      color: #398FFF !important;
  }

  #message_edit_container form textarea,
  .inline_message_input_container form textarea {
      color: #e0e0e0;
  }

  .attachment_group.has_container {
      background: #282a2e;
      border: 1px solid #282a2e;
  }

  .attachment_group.has_container .inline_attachment::after {
      background-color: #282a2e;
  }

  .attachment_group.has_container.has_link:hover {
      border-bottom-color: #282a2e;
      border-left-color: #282a2e;
      border-right-color: #282a2e;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  }

  .attachment_group .media_caret {
      color: #398FFF;
  }

  .attachment_group .attachment_source span {
      color: #398FFF !important;
  }

  .attachment_group .attachment_source .attachment_source_name+.attachment_author_name::before {
      color: #398FFF;
  }

  .attachment_group .inline_attachment.reply_broadcast+.attachment_rule {
      color: #398FFF;
  }

  .attachment_group .inline_attachment.reply_broadcast+.attachment_rule::after {
      border-bottom: 1px solid #282a2e;
  }

  .attachment_group .inline_attachment.message_unfurl .attachment_source .attachment_source_name a,
  .attachment_group .inline_attachment.message_unfurl .attachment_source .attachment_source_name span {
      color: #398FFF;
  }

  .attachment_group .attachment_title a {
      color: #e0e0e0;
  }

  .attachment_group .attachment_footer_text+.attachment_ts::before {
      color: #398FFF;
  }

  .attachment_group .delete_attachment_link ts-icon::before {
      color: #ffffff;
  }

  .attachment_group .delete_attachment_link:hover ts-icon::before {
      color: #cc6666;
  }

  .attachment_still_pending ts-inline-saver {
      color: #398FFF;
  }

  .msg_inline_attachment_column.column_border {
      background-color: #373b41;
  }

  .msg_inline_img_holder .msg_inline_img {
      box-shadow: inset 0 0 0 1px #1d1f21;
  }

  .msg_inline_attachment_collapser,
  .msg_inline_attachment_expander,
  .msg_inline_file_preview_collapser,
  .msg_inline_file_preview_expander,
  .msg_inline_img_collapser,
  .msg_inline_img_expander,
  .msg_inline_media_toggler,
  .msg_inline_room_preview_collapser,
  .msg_inline_room_preview_expander {
      color: #ffffff;
  }

  .msg_inline_attachment_collapser:hover,
  .msg_inline_attachment_expander:hover,
  .msg_inline_file_preview_collapser:hover,
  .msg_inline_file_preview_expander:hover,
  .msg_inline_img_collapser:hover,
  .msg_inline_img_expander:hover,
  .msg_inline_media_toggler:hover,
  .msg_inline_room_preview_collapser:hover,
  .msg_inline_room_preview_expander:hover {
      color: #cc6666;
  }

  .msg_inline_img {
      background: #373b41;
  }

  .msg_inline_room_preview_collapser {
      color: #398FFF;
  }

  .msg_inline_room_preview_collapser:hover {
      color: #398FFF;
  }

  .inline_attachment span.attachment_author_name {
      color: #ffffff;
  }

  .inline_attachment span.attachment_author_subname,
  .inline_attachment span.attachment_service_name {
      color: #ffffff;
  }

  .inline_attachment a span:active,
  .inline_attachment a span:hover {
      color: #cc6666 !important;
  }

  .inline_attachment .attachment_footer,
  .inline_attachment .attachment_ts {
      color: #ffffff;
  }

  .inline_attachment .attachment_footer a,
  .inline_attachment .attachment_ts a {
      color: #ffffff;
  }

  .inline_attachment .attachment_footer a:active,
  .inline_attachment .attachment_footer a:hover {
      color: #cc6666 !important;
  }

  .inline_attachment .attachment_ts a:active,
  .inline_attachment .attachment_ts a:hover {
      color: #cc6666 !important;
  }

  .inline_attachment .iframe_placeholder,
  .inline_attachment iframe {
      background-color: #1d1f21;
  }

  .meta.msg_inline_file_preview_toggler,
  .meta.msg_inline_img_toggler,
  .dense_meta.msg_inline_file_preview_toggler,
  .dense_meta.msg_inline_img_toggler {
      color: #ffffff !important;
  }

  .meta.msg_inline_file_preview_toggler a[data-file-id],
  .meta.msg_inline_img_toggler a[data-file-id],
  .dense_meta.msg_inline_file_preview_toggler a[data-file-id],
  .dense_meta.msg_inline_img_toggler a[data-file-id] {
      color: #ffffff !important;
  }

  .meta.msg_inline_file_preview_toggler:hover,
  .meta.msg_inline_img_toggler:hover,
  .dense_meta.msg_inline_file_preview_toggler:hover,
  .dense_meta.msg_inline_img_toggler:hover {
      color: #cc6666 !important;
  }

  .meta.msg_inline_file_preview_toggler:hover a[data-file-id],
  .meta.msg_inline_img_toggler:hover a[data-file-id],
  .dense_meta.msg_inline_file_preview_toggler:hover a[data-file-id],
  .dense_meta.msg_inline_img_toggler:hover a[data-file-id] {
      color: #cc6666 !important;
  }

  .meta.msg_inline_file_preview_toggler .msg_inline_file_preview_title,
  .meta.msg_inline_img_toggler .msg_inline_file_preview_title,
  .dense_meta.msg_inline_file_preview_toggler .msg_inline_file_preview_title,
  .dense_meta.msg_inline_img_toggler .msg_inline_file_preview_title {
      color: #e0e0e0;
  }

  .meta.msg_inline_file_preview_toggler .msg_inline_file_preview_title:hover,
  .meta.msg_inline_img_toggler .msg_inline_file_preview_title:hover,
  .dense_meta.msg_inline_file_preview_toggler .msg_inline_file_preview_title:hover,
  .dense_meta.msg_inline_img_toggler .msg_inline_file_preview_title:hover {
      color: #398FFF;
  }

  .meta.msg_inline_file_preview_toggler .ts_icon[class*=ts_icon_caret]:hover,
  .meta.msg_inline_img_toggler .ts_icon[class*=ts_icon_caret]:hover,
  .dense_meta.msg_inline_file_preview_toggler .ts_icon[class*=ts_icon_caret]:hover,
  .dense_meta.msg_inline_img_toggler .ts_icon[class*=ts_icon_caret]:hover {
      color: #cc6666;
  }

  .meta.meta_feature_fix_files .file_new_window_link:hover,
  .dense_meta.meta_feature_fix_files .file_new_window_link:hover {
      color: #cc6666 !important;
  }

  .meta.meta_feature_fix_files .file_new_window_link:hover .file_inline_icon,
  .dense_meta.meta_feature_fix_files .file_new_window_link:hover .file_inline_icon {
      color: #cc6666 !important;
  }

  .meta.meta_feature_fix_files .member,
  .dense_meta.meta_feature_fix_files .member {
      color: #ffffff !important;
  }

  .delete_attachment_link {
      color: #ffffff;
  }

  .delete_attachment_link:hover {
      color: #cc6666;
  }

  .file_container {
      background: #1d1f21;
      border: 1px solid #282a2e;
      color: #e0e0e0;
  }

  .file_container:hover,
  .file_container:focus,
  .file_container.file_menu_open {
      border-bottom-color: #282a2e;
      border-left-color: #282a2e;
      border-right-color: #282a2e;
  }

  .file_container::after,
  .file_container.post_container::after {
      background-image: -webkit-linear-gradient(top, rgba(40, 42, 46, 0) 0, #282a2e 100%);
      background-image: -moz-linear-gradient(top, rgba(40, 42, 46, 0) 0, #282a2e 100%);
      background-image: -o-linear-gradient(top, rgba(40, 42, 46, 0) 0, #282a2e 100%);
      background-image: linear-gradient(top, rgba(40, 42, 46, 0) 0, #282a2e 100%);
  }

  .file_container.generic_container .file_header_icon .ts_icon {
      background: #282a2e;
      box-shadow: 0 0 0 3px #282a2e;
      color: #e0e0e0;
  }

  .file_container.generic_container .file_header_icon .ts_icon.snippet {
      background: #282a2e;
  }

  .file_container.generic_container .file_header_meta .meta_hover {
      background: #1d1f21;
      color: #e0e0e0;
  }

  .file_container .file_header .file_header_meta {
      color: #398FFF;
  }

  .file_container .file_header+.file_body {
      border-top: 1px solid #1d1f21;
  }

  .file_container .preview_actions .btn {
      background-color: #282a2e;
  }

  .file_container .preview_actions .btn::after {
      border-color: #1d1f21;
  }

  .file_container .preview_actions .btn.preview_show_less_header {
      background-color: rgba(150, 152, 150, 0.9);
      color: #e0e0e0 !important;
  }

  .file_container .preview_actions .btn.preview_show_less_header::after {
      border: 2px solid #1d1f21;
  }

  .file_container .preview_actions .btn.preview_show_less_header:focus,
  .file_container .preview_actions .btn.preview_show_less_header:hover {
      background-color: #282a2e;
  }

  .file_container .preview_actions .btn.preview_show_less_header:focus::after,
  .file_container .preview_actions .btn.preview_show_less_header:hover::after {
      border-color: #282a2e;
  }

  .file_container.image_container .image_body {
      background-color: #282a2e;
  }

  .file_container.image_container .preview_actions .btn {
      background-color: rgba(150, 152, 150, 0.9);
  }

  .file_container.image_container .preview_actions .btn:focus,
  .file_container.image_container .preview_actions .btn:hover {
      background-color: #282a2e;
  }

  .file_container.image_container .preview_actions.overflow_preview_actions {
      background: rgba(150, 152, 150, 0.9);
      border: 1px solid rgba(29, 31, 33, 0.1);
  }

  .file_container .preview_show .preview_show_btn {
      background: linear-gradient(rgba(29, 31, 33, 0.8), rgba(29, 31, 33, 0.8)), linear-gradient(rgba(150, 152, 150, 0.3), rgba(150, 152, 150, 0.3));
      color: #ffffff;
  }

  .msg_inline_video_buttons_div {
      background-color: rgba(40, 42, 46, 0.4);
  }

  .msg_inline_video_buttons_div a {
      color: #e0e0e0;
      text-shadow: 0 1px 1px rgba(29, 31, 33, 0.5);
  }

  .msg_inline_video_buttons_div a:visited {
      color: #e0e0e0;
      text-shadow: 0 1px 1px rgba(29, 31, 33, 0.5);
  }

  .post_body ul.checklist {
      background-color: #282a2e;
  }

  .post_body ul.checklist li::before {
      background: #282a2e;
  }

  .post_body ul.checklist li.checked {
      color: #398FFF;
  }

  .post_body ul.list.checklist li {
      border-bottom: 1px solid #373b41;
  }

  .post_body ul.list.checklist li.checked {
      color: #398FFF;
  }

  .post_body .message {
      background-color: #e0e0e0;
  }

  .post_body code,
  .post_body pre {
      background: #282a2e;
  }

  ts-message .reply_bar .reply_bar_caret,
  ts-message .reply_bar .view_conv_hover,
  ts-message .reply_bar .last_reply_at {
      color: #398FFF;
  }

  ts-message .reply_bar:hover {
      background: #282a2e;
      border-color: #1d1f21;
  }

  .inline_color_block {
      border-color: #373b41;
  }

  .messages_banner {
      color: #e0e0e0;
      text-shadow: 0 1px rgba(0, 0, 0, 0.15);
  }

  .messages_banner a {
      color: #e0e0e0;
  }

  .messages_banner a:hover {
      color: #e0e0e0;
  }

  #connection_div {
      background: #bf360c;
  }

  #archives_return {
      background: padding-box #969896;
      color: #e0e0e0;
  }

  #archives_return.warning {
      background: #bf360c;
  }

  #archives_return a {
      color: #e0e0e0;
  }

  #archives_return a:hover {
      color: rgba(224, 224, 224, 0.8);
  }

  #messages_unread_status {
      background: #373b41;
  }

  #messages_unread_status:hover {
      background: #969896;
  }

  #messages_unread_status:hover .clear_unread_messages {
      background: #969896;
  }

  #messages_unread_status:hover .clear_unread_messages:hover {
      background: #373b41;
  }

  #messages_unread_status.quiet {
      background: #969896;
      color: #e0e0e0;
      text-shadow: 0 1px rgba(0, 0, 0, 0.15);
  }

  #messages_unread_status.quiet a {
      color: #e0e0e0;
  }

  .clear_unread_messages {
      border-left: 1px solid rgba(0, 0, 0, 0.15);
  }

  #messages_container:not(.has_reply_banners).has_top_messages_banner::before,
  #messages_container.has_top_messages_banner::before {
      background: none;
  }

  code {
      background-color: #1d1f21;
      border: 1px solid #282a2e;
      color: #e0e0e0;
  }

  .file_list_item.snippet .snippet_preview {
      background: #1d1f21;
  }

  .snippet_preview,
  .snippet_body {
      background: #1d1f21;
  }

  .snippet_preview pre,
  .snippet_body pre {
      color: #e0e0e0 !important;
  }

  .file_container .CodeMirror .CodeMirror-code>div::before,
  .file_container .CodeMirror .sssh-line::before,
  .file_container .sssh-code .CodeMirror-code>div::before,
  .file_container .sssh-code .sssh-line::before {
      background-color: #282a2e;
      border-right: 1px solid #282a2e;
      color: #398FFF;
  }

  .CodeMirror {
      background: #1d1f21;
      border: 1px solid #282a2e;
      color: #e0e0e0;
  }

  .CodeMirror pre {
      background: transparent !important;
  }

  .CodeMirror div.CodeMirror-cursor {
      border-left: 1px solid #e0e0e0;
  }

  .CodeMirror.cm-fat-cursor div.CodeMirror-cursor {
      background: #e0e0e0;
  }

  .CodeMirror .CodeMirror-gutters {
      background-color: #282a2e;
      border-right: 1px solid #282a2e;
  }

  .CodeMirror-gutter-filler,
  .CodeMirror-scrollbar-filler {
      background-color: #282a2e;
  }

  .CodeMirror-linenumber {
      color: #398FFF !important;
  }

  .CodeMirror-guttermarker {
      color: #398FFF;
  }

  .CodeMirror-guttermarker-subtle {
      color: #398FFF;
  }

  .CodeMirror-ruler {
      border-left: 1px solid #969896;
  }

  .cm-s-default .cm-keyword {
      color: #ce93d8;
  }

  .cm-s-default .cm-atom {
      color: #9fa8da;
  }

  .cm-s-default .cm-number {
      color: #a5d6a7;
  }

  .cm-s-default .cm-def {
      color: #536dfe;
  }

  .cm-s-default .cm-variable-2 {
      color: #9fa8da;
  }

  .cm-s-default .cm-variable-3 {
      color: #c5e1a5;
  }

  .cm-s-default .cm-comment {
      color: #ffcc80;
  }

  .cm-s-default .cm-string {
      color: #ef9a9a;
  }

  .cm-s-default .cm-string-2 {
      color: #ffab91;
  }

  .cm-s-default .cm-meta {
      color: #eee;
  }

  .cm-s-default .cm-qualifier {
      color: #eee;
  }

  .cm-s-default .cm-builtin {
      color: #b39ddb;
  }

  .cm-s-default .cm-bracket {
      color: #e6ee9c;
  }

  .cm-s-default .cm-tag {
      color: #a5d6a7;
  }

  .cm-s-default .cm-attribute {
      color: #40c4ff;
  }

  .cm-s-default .cm-header {
      color: #80cbc4;
  }

  .cm-s-default .cm-quote {
      color: #b0bec5;
  }

  .cm-s-default .cm-hr {
      color: #282a2e;
  }

  .cm-s-default .cm-link {
      color: #ffffff;
  }

  .cm-negative {
      color: #bf360c;
  }

  .cm-positive {
      color: #0c95bf;
  }

  .cm-invalidchar,
  .cm-s-default .cm-error {
      color: #bf360c;
  }

  div.CodeMirror span.CodeMirror-matchingbracket {
      color: #0c95bf;
  }

  div.CodeMirror span.CodeMirror-nonmatchingbracket {
      color: #bf360c;
  }

  .CodeMirror-matchingtag {
      background: #1d1f21;
  }

  .CodeMirror-activeline-background {
      background: #969896;
  }

  .CodeMirror-selected {
      background: #969896;
  }

  .CodeMirror-focused .CodeMirror-selected {
      background: #969896;
  }

  .cm-searching {
      background: #969896;
  }

  .sssh-keyword {
      color: #ce93d8;
  }

  .sssh-atom {
      color: #9fa8da;
  }

  .sssh-number {
      color: #a5d6a7;
  }

  .sssh-def {
      color: #536dfe;
  }

  .sssh-variable {
      color: #9fa8da;
  }

  .sssh-variable-2 {
      color: #c5e1a5;
  }

  .sssh-variable-3 {
      color: #c1a5e1;
  }

  .sssh-operator {
      color: #e0e0e0;
  }

  .sssh-property {
      color: #e0e0e0;
  }

  .sssh-comment {
      color: #ffcc80;
  }

  .sssh-string {
      color: #ef9a9a;
  }

  .sssh-string-2 {
      color: #ffab91;
  }

  .sssh-meta {
      color: #eee;
  }

  .sssh-error {
      color: #bf360c;
  }

  .sssh-qualifier {
      color: #eee;
  }

  .sssh-builtin {
      color: #b39ddb;
  }

  .sssh-bracket {
      color: #e6ee9c;
  }

  .sssh-tag {
      color: #a5d6a7;
  }

  .sssh-attribute {
      color: #40c4ff;
  }

  .sssh-header {
      color: #80cbc4;
  }

  .sssh-quote {
      color: #b0bec5;
  }

  .sssh-hr {
      color: #282a2e;
  }

  .sssh-link {
      color: #ffffff;
  }

  .dense_theme ts-message {
      color: #e0e0e0;
  }

  .dense_theme ts-message.unprocessed {
      color: rgba(224, 224, 224, 0.75);
  }

  .dense_theme ts-message.first .timestamp,
  .dense_theme ts-message:hover .timestamp {
      color: #cc6666;
  }

  .dense_theme ts-message.first .message_gutter .timestamp,
  .dense_theme ts-message.selected .message_gutter .timestamp {
      color: #ffffff;
  }

  .dense_theme ts-message.divider {
      border-top: 1px solid #282a2e;
  }

  .dense_theme ts-message.archived,
  .dense_theme ts-message.bot_change,
  .dense_theme ts-message.joined,
  .dense_theme ts-message.left,
  .dense_theme ts-message.pinned .pinned_item_message_header,
  .dense_theme ts-message.purpose,
  .dense_theme ts-message.rename,
  .dense_theme ts-message.sh_created .sh_auto_msg_text,
  .dense_theme ts-message.sh_shared .sh_auto_msg_text,
  .dense_theme ts-message.topic,
  .dense_theme ts-message.unarchived {
      color: #398FFF;
  }

  .dense_theme #message_editing_info {
      color: #398FFF;
  }

  .dense_theme #message_edit_form {
      margin-left: 0;
  }

  .dense_theme #message_edit_form textarea {
      color: #e0e0e0;
  }

  .dense_theme #message_edit_form p,
  .dense_theme #message_edit_form span {
      color: #398FFF;
  }

  .dense_theme #message_edit_form .timestamp {
      color: #398FFF;
  }

  .dense_theme .file_reference .post_meta,
  .dense_theme .file_reference .space_meta {
      color: #398FFF;
  }

  .dense_theme .file_reference .post_meta,
  .dense_theme .file_reference .snippet_meta,
  .dense_theme .file_reference .space_meta {
      color: #398FFF;
  }

  .dense_theme .file_reference a:not(.member):not(.member_name):not(.icon):not(.timestamp):not(.preview_main_action):not(.preview_show_more):not(.file_preview_action) {
      color: #ffffff;
  }

  .dense_theme .file_reference:hover a:not(.member):not(.member_name):not(.icon):not(.timestamp) {
      color: #ffffff;
  }

  .dense_theme .file_reference:hover a:hover:not(.member):not(.member_name):not(.icon):not(.timestamp) {
      color: #cc6666;
  }

  .dense_theme .file_reference:hover a.file_download_link {
      color: #ffffff !important;
  }

  .dense_theme .file_reference:hover a.file_download_link:hover {
      color: #cc6666 !important;
  }

  .light_theme ts-message {
      color: #e0e0e0;
  }

  .light_theme ts-message.unprocessed {
      color: rgba(224, 224, 224, 0.75);
  }

  .light_theme ts-message .msg_right_link {
      color: #ffffff;
  }

  .light_theme ts-message .message_content .message_sender {
      color: #e0e0e0 !important;
  }

  .light_theme ts-message .comment::before {
      color: #398FFF;
  }

  .light_theme ts-message.archived .message_content,
  .light_theme ts-message.bot_change .message_content,
  .light_theme ts-message.joined .message_content,
  .light_theme ts-message.left .message_content,
  .light_theme ts-message.purpose .message_content,
  .light_theme ts-message.rename .message_content,
  .light_theme ts-message.sh_created .message_content .sh_auto_msg_text,
  .light_theme ts-message.sh_shared .message_content .sh_auto_msg_text,
  .light_theme ts-message.topic .message_content,
  .light_theme ts-message.unarchived .message_content {
      color: #398FFF;
  }

  .light_theme ts-message .meta {
      color: #398FFF;
  }

  .light_theme ts-message .file_service_icon {
      color: #398FFF;
  }

  .light_theme #message_editing_info {
      color: #398FFF;
  }

  .light_theme #message_edit_form textarea {
      color: #e0e0e0;
  }

  .light_theme #message_edit_form p,
  .light_theme #message_edit_form span {
      color: #398FFF;
  }

  .light_theme .msg_inline_video_holder {
      border: 1px solid #282a2e;
  }

  .light_theme .pinned_item_message_header {
      color: #398FFF;
  }

  .channel_overlay {
      border-color: #282a2e;
      color: #398FFF;
  }

  .channel_overlay.channel_overlay_redesign .channel_overlay_title {
      color: #e0e0e0;
  }

  .channel_overlay.channel_overlay_redesign li {
      color: #398FFF;
  }

  .channel_overlay_title_wrap {
      border-color: #282a2e;
  }

  .channel_overlay_title_shared {
      color: #e0e0e0;
  }

  pre {
      background: #1d1f21;
      border: 1px solid #282a2e;
      color: #e0e0e0;
  }

  pre span.mention {
      padding: 2px 0 !important;
  }

  #page pre,
  body>pre {
      background: #1d1f21;
      color: #e0e0e0 !important;
  }

  body>pre {
      background: #969896;
  }

  .special_formatting_quote .quote_bar {
      background-color: #373b41;
  }

  #threads_msgs_scroller_div {
      background: #282a2e;
  }

  #threads_msgs_scroller_div:not(.loading)::before {
      background: #282a2e;
  }

  #threads_msgs_scroller_div.loading::before {
      color: #398FFF;
  }

  #threads_msgs_scroller_div .threads_caught_up_divider .divider_line {
      border-top: 1px solid #282a2e;
  }

  #threads_msgs_scroller_div .threads_caught_up_divider .divider_label {
      background: #373b41;
      color: #e0e0e0;
  }

  #threads_msgs_scroller_div.loading {
      background: none;
  }

  #threads_msgs_scroller_div.loading::before {
      color: #e0e0e0;
  }

  #threads_view_banner.messages_banner {
      background: #282a2e;
  }

  #threads_view_banner.messages_banner:hover {
      background: #373b41;
  }

  #threads_view_banner.messages_banner:hover .clear_unread_messages {
      background: #373b41;
  }

  #threads_msgs.new_banner_is_showing::before {
      background: #282a2e;
  }

  ts-thread {
      background: #282a2e;
  }

  ts-thread .reply_input_container .inline_message_input_container form textarea {
      border-color: #282a2e;
      color: #e0e0e0;
  }

  ts-thread .reply_input_container .collapsed_input_placeholder,
  ts-thread .reply_input_container .join_channel_from_thread_container,
  ts-thread .reply_input_container .reply_limited_in_general {
      background: #282a2e;
      border-color: #282a2e;
  }

  ts-thread .thread_messages {
      background: #282a2e;
      border-color: #282a2e;
  }

  ts-thread ts-message.new_reply {
      background: #282a2e;
  }

  ts-thread ts-message.new_reply:hover {
      background: #282a2e;
  }

  ts-thread .thread_header .thread_channel_name a {
      color: #e0e0e0;
  }

  ts-thread .thread_header .thread_action_btns button {
      color: #398FFF;
  }

  ts-thread .new_reply_indicator .blue_dot {
      color: #bf360c;
  }

  #convo_tab .thread_participants,
  ts-thread .thread_participants {
      color: #398FFF;
  }

  #convo_loading_indicator {
      background-image: none;
  }

  #unread_msgs_scroller_div::after {
      background: transparent;
  }

  #unread_msgs_scroller_div.loading {
      background-image: none;
  }

  #unread_msgs_scroller_div.loading::before {
      color: #398FFF;
  }

  #unread_msgs_div .day_divider .day_divider_line {
      border-top-color: #282a2e;
  }

  .unread_group.marked_as_read .unread_group_header {
      background: #282a2e;
  }

  .unread_group_header {
      background: #282a2e;
      border-top-color: #373b41;
      color: #e0e0e0;
  }

  .unread_group_header .unread_group_collapse_toggle:hover ts-icon {
      color: #e0e0e0;
  }

  .collapsed .unread_group_header .ts_icon_caret_right,
  .collapsing .unread_group_header .ts_icon_caret_right {
      color: #398FFF;
  }

  .mark_as_read_checkmark {
      color: #398FFF;
  }

  .bottom_mark_all_read {
      border-top-color: #282a2e;
  }

  .unread_group_header_name a {
      color: #e0e0e0;
  }

  .unread_group_footer .unread_group_new .unread_group_new_text {
      color: #398FFF;
  }

  .unread_group_footer .unread_group_new:hover .unread_group_new_text {
      color: #398FFF;
  }

  .unread_empty_state_message {
      color: #ccc;
  }

  .unread_empty_state_undo_inner {
      background: #1d1f21;
      color: #e0e0e0;
  }

  .unread_empty_state_undo_action {
      color: #e0e0e0;
  }

  .unread_empty_state_refresh {
      background: rgba(40, 42, 46, 0.97);
  }

  #col_flex {
      background: transparent;
  }

  #flex_contents {
      background: #282a2e;
  }

  #flex_contents .heading {
      background: #1c1e20;
      color: #ffffff;
  }

  #flex_contents .heading a {
      color: #ffffff;
  }

  #flex_contents .heading a:hover {
      color: #cc6666;
  }

  #flex_contents .heading a.close_flexpane {
      color: #ffffff;
  }

  #flex_contents .heading .cancel_link {
      color: #ffffff;
  }

  #flex_contents .heading .menu_heading:hover {
      color: #e0e0e0;
  }

  #flex_contents .heading .menu_icon {
      color: #ffffff;
  }

  #flex_contents .heading .menu_icon:hover {
      color: #cc6666;
  }

  #flex_contents .subheading {
      background: #282a2e;
      border-top: 1px solid #1d1f21;
      color: #398FFF;
  }

  #flex_contents .subheading p a {
      color: #e0e0e0;
  }

  #flex_contents .subheading .filter_menu_label.active .arrow_down {
      color: #398FFF;
  }

  #flex_contents .toolbar_container {
      background: #282a2e;
  }

  #flex_contents .flexpane_tab_bar li a {
      color: #ffffff;
  }

  #flex_contents .flexpane_tab_bar li:hover {
      border-bottom: 4px solid #282a2e;
  }

  #flex_contents .flexpane_tab_bar li:hover a {
      color: #ffffff;
  }

  #flex_contents .flexpane_tab_bar li.active {
      border-bottom: 4px solid #282a2e;
  }

  #flex_contents .flexpane_tab_bar li.active a {
      color: #ffffff;
  }

  #flex_contents .help {
      border-top: 5px solid #1d1f21;
      color: #e0e0e0;
  }

  #flex_contents i.callout {
      color: #398FFF;
  }

  .flexpane_redesign #flex_contents .heading {
      border-bottom: 0.0625rem solid #282a2e;
  }

  .flexpane_redesign #flex_contents .heading_text {
      color: #ffffff;
  }

  .flexpane_redesign .close_flexpane {
      color: #398FFF;
  }

  .flexpane_redesign .close_flexpane:focus,
  .flexpane_redesign .close_flexpane:hover {
      color: #e0e0e0;
  }

  .flexpane_redesign.flex_pane_showing #col_flex {
      border-left: 1px solid #282a2e;
  }

  .toolbar_container {
      background: #282a2e;
      border-bottom: 1px solid #1d1f21;
      color: #e0e0e0;
  }

  .msg_right_link {
      color: #ffffff;
  }

  #details_tab .heading {
      background: #1c1e20;
  }

  #details_tab .heading a.close_flexpane {
      color: #ffffff;
  }

  #details_tab .heading a.close_flexpane:hover {
      color: #cc6666;
  }

  #details_tab hr {
      border-top-color: #282a2e;
  }

  #details_tab .channel_page_section {
      background: #282a2e;
      border-top: 1px solid #282a2e;
  }

  #details_tab .channel_page_section .section_header:hover .disclosure_triangle {
      color: #cc6666;
  }

  #details_tab .channel_page_section .section_header a {
      color: #ffffff;
  }

  #details_tab .channel_page_section .section_title {
      color: #e0e0e0;
  }

  #details_tab .channel_page_section .disclosure_triangle {
      color: #ffffff;
  }

  #details_tab .channel_page_section .channel_page_members_highlighter,
  #details_tab .channel_page_section .channel_page_pinned_items_highlighter {
      background: rgba(191, 54, 12, 0.25) !important;
  }

  #details_tab .created_by {
      color: #e0e0e0;
  }

  #details_tab .channel_page_member_tabs .icon_member_header {
      color: #398FFF;
  }

  #details_tab .pinned_item:hover {
      border-color: #373b41;
  }

  #details_tab .channel_page_action .leave_link {
      color: #ffffff;
  }

  #details_tab .channel_page_action .leave_link:hover {
      color: #cc6666;
  }

  .channel_page_member_row {
      color: #e0e0e0;
  }

  .channel_page_member_row a {
      color: #ffffff;
  }

  .channel_page_member_row.away {
      color: #e0e0e0;
  }

  .channel_page_member_row.away a {
      color: #ffffff;
  }

  .pinned_item {
      color: #e0e0e0;
  }

  .pinned_item .pin_file_title {
      color: #ffffff;
  }

  .pinned_item .pin_member_name a {
      color: #ffffff !important;
  }

  .pinned_item .pin_metadata {
      color: #398FFF;
  }

  .pinned_item .remove_pin {
      color: #ffffff;
  }

  .pinned_item .remove_pin:hover {
      color: #cc6666;
  }

  .pinned_item .pinned_message_text .pin_truncate_fade {
      background: #282a2e;
  }

  .pinned_item.delete_mode {
      border-color: #bf360c !important;
  }

  #file_list_toggle_users {
      color: #ffffff;
  }

  #file_list_toggle_users.active:hover,
  #file_list_toggle_users:hover {
      color: #cc6666;
  }

  #file_list_toggle_users.active {
      color: #398FFF;
  }

  #primary_file_button {
      color: #398FFF !important;
  }

  #primary_file_button:hover {
      color: #e0e0e0 !important;
  }

  .file_list_item .icon,
  .file_reference .icon {
      background: #969896;
      border: 1px solid #373b41;
      color: #e0e0e0 !important;
  }

  .filetype_button {
      background: #969896;
      border: 1px solid #373b41;
      color: #e0e0e0 !important;
  }

  .filetype_button:hover {
      background: #969896;
  }

  .filetype_button:hover .file_download_label {
      background: #373b41;
      color: #e0e0e0;
  }

  .filetype_button .file_title {
      color: #e0e0e0;
  }

  .filetype_button .file_download_label {
      background: #969896;
      border-top: 1px solid #373b41;
  }

  a.filetype_button_web {
      background: #969896;
      border: 1px solid #373b41;
      color: #e0e0e0;
  }

  a.filetype_button_web .filetype_icon {
      background-color: #373b41;
  }

  a.file_download_link {
      color: #ffffff;
  }

  a.file_download_link:hover {
      color: #cc6666;
  }

  a:hover .file_inline_icon {
      color: #398FFF;
  }

  a.gsheet img,
  a.pdf img {
      background: #282a2e !important;
  }

  html.no_touch a.filetype_button_web:hover {
      border-color: #373b41;
  }

  html.no_touch a.filetype_button_web:hover .file_title {
      color: #e0e0e0;
  }

  .file_header_detailed {
      color: #398FFF;
  }

  .file_header_detailed .member {
      color: #e0e0e0 !important;
  }

  .file_inline_icon {
      color: #398FFF;
  }

  .file_header .member {
      color: #398FFF !important;
  }

  .file_header .title {
      color: #e0e0e0;
  }

  .file_header .title a {
      color: #ffffff;
  }

  .file_header .title a:hover {
      color: #cc6666;
  }

  .flexpane_file_title .member,
  .flexpane_file_title .service_link {
      color: #ffffff !important;
  }

  .flexpane_file_title .title a,
  .flexpane_file_title .file_action_list a {
      color: #ffffff;
  }

  .flexpane_file_title .title a:hover,
  .flexpane_file_title .file_action_list a:hover {
      color: #cc6666;
  }

  .file_actions_cog {
      color: #ffffff !important;
  }

  .file_actions_cog:hover {
      color: #cc6666 !important;
  }

  .file_list_item {
      color: #e0e0e0;
  }

  .file_list_item a {
      color: #ffffff;
  }

  .file_list_item a.member {
      color: #cc6666;
  }

  .file_list_item .bullet {
      color: #398FFF;
  }

  .file_list_item .icon {
      background: #969896;
      border-color: #373b41;
  }

  .file_list_item .ts_icon_comment {
      color: #398FFF;
  }

  .file_list_item .file_comment_link:hover {
      color: #ffffff;
  }

  .file_list_item .file_comment_link:hover .ts_icon_comment {
      color: #398FFF;
  }

  .file_list_item .title a {
      color: #ffffff;
  }

  .file_list_item .share_info .unshare_link {
      color: #ffffff;
  }

  .file_list_item .share_info .unshare_link:hover {
      color: #cc6666;
  }

  .file_list_item .actions a,
  .file_list_item .actions span {
      background-color: #282a2e;
      border: 1px solid #969896;
      color: #ffffff;
  }

  .file_list_item .actions a:hover {
      background-color: #282a2e !important;
      border-color: #969896;
      color: #cc6666;
  }

  .file_list_item.post .preview,
  .file_list_item.space .preview {
      color: #e0e0e0;
  }

  .file_list_item #share_dialog,
  .file_list_item.active,
  .file_list_item:active,
  .file_list_item:hover {
      background-color: #282a2e;
      border-color: #373b41;
  }

  .file_list_item #share_dialog .title a,
  .file_list_item.active .title a,
  .file_list_item:active .title a,
  .file_list_item:hover .title a {
      color: #ffffff;
  }

  .file_list_item #share_dialog .actions,
  .file_list_item.active .actions,
  .file_list_item:active .actions,
  .file_list_item:hover .actions {
      background-color: transparent;
  }

  .file_list_item #share_dialog .actions a,
  .file_list_item #share_dialog .actions span,
  .file_list_item.active .actions a,
  .file_list_item.active .actions span,
  .file_list_item:active .actions a,
  .file_list_item:active .actions span,
  .file_list_item:hover .actions a,
  .file_list_item:hover .actions span {
      background-color: #282a2e;
  }

  .unshare_link {
      color: #ffffff;
  }

  .unshare_link i::before {
      color: #398FFF;
  }

  .unshare_link i.ts_icon_minus_circle_small:hover::before {
      color: #bf360c;
  }

  .snippet_preview pre {
      color: #e0e0e0;
  }

  .file_preview_wrapper .file_preview {
      background: #282a2e;
  }

  .file_preview_wrapper .file_preview:hover {
      background: #282a2e;
  }

  .file_page_meta {
      color: #398FFF;
  }

  #file_page_preview img {
      background: #282a2e;
      border: 1px solid #1d1f21;
  }

  #file_page_preview img:hover {
      background: #282a2e;
  }

  .comment_meta {
      color: #398FFF;
  }

  .comment .special_formatting_quote .content {
      color: #e0e0e0;
  }

  .comment .member {
      color: #e0e0e0 !important;
  }

  .comment_body {
      color: #e0e0e0;
  }

  .comment_actions {
      color: #398FFF;
  }

  .comment_actions:hover {
      color: #e0e0e0;
  }

  .icon_quote {
      color: #e0e0e0;
  }

  #flex_contents .comment_form textarea,
  #flex_contents .edit_comment_form textarea {
      color: #e0e0e0;
  }

  .tab_container .star_item .message .actions .btn_icon,
  .tab_container .star_item .message .actions .star_jump,
  .tab_container .star_item ts-message .actions .btn_icon,
  .tab_container .star_item ts-message .actions .star_jump,
  .tab_container .file_list_item .actions .btn_icon,
  .tab_container .file_list_item .actions .star_jump,
  .tab_container .file_comment_item .actions .btn_icon,
  .tab_container .file_comment_item .actions .star_jump {
      background-color: #282a2e;
  }

  .tab_container .star_item .message .actions .btn::after,
  .tab_container .star_item ts-message .actions .btn::after,
  .tab_container .file_list_item .actions .btn::after,
  .tab_container .file_comment_item .actions .btn::after {
      border-color: #282a2e;
  }

  .tab_container .star_item ts-message .timestamp {
      color: #398FFF;
  }

  .tab_container .file_list_item:focus,
  .tab_container .file_list_item:hover {
      background-color: #282a2e;
      border-color: #282a2e;
  }

  .tab_container .file_list_item .star {
      color: #398FFF;
  }

  .tab_container .file_list_item .contents .file_comment_link {
      color: #ffffff;
  }

  .tab_container .file_list_item .contents .file_comment_link .ts_icon {
      color: #ffffff;
  }

  .tab_container .file_list_item .contents .file_comment_link:focus,
  .tab_container .file_list_item .contents .file_comment_link:hover {
      color: #cc6666;
  }

  .tab_container .file_list_item .contents .file_comment_link:focus .ts_icon,
  .tab_container .file_list_item .contents .file_comment_link:hover .ts_icon {
      color: #cc6666;
  }

  .tab_container .file_list_item .contents .member,
  .tab_container .file_list_item .contents .service_link,
  .tab_container .file_list_item .contents .share_info,
  .tab_container .file_list_item .contents .time {
      color: #398FFF;
  }

  .tab_container .file_list_item .filetype_image {
      background-color: #1d1f21;
  }

  .active .tab_container .file_list_item {
      background-color: #282a2e;
  }

  #user_groups_pane .mention {
      background: rgba(191, 54, 12, 0.25);
      border: 0;
      border-radius: 3px;
      padding: 2px;
  }

  #user_groups_container .info_panel {
      background: #282a2e;
      border: 1px solid #373b41;
  }

  #user_groups_container .mention {
      background-color: rgba(191, 54, 12, 0.25) !important;
  }

  #user_groups_header .user_groups_search .icon_search {
      color: #398FFF;
  }

  #user_groups_header a.icon_close {
      color: #ffffff;
  }

  #user_groups_header a.icon_close:hover {
      color: #cc6666;
  }

  .user_group_item {
      border-bottom: 1px solid #373b41;
  }

  .user_group_item a {
      color: #ffffff;
  }

  #flex_contents .user_group_item:hover {
      background-color: #282a2e;
  }

  #flex_contents .user_group_item:hover h4 {
      color: #e0e0e0;
  }

  #flex_contents .flexpane_tab_toolbar #user_group_edit {
      background-color: #282a2e;
  }

  #flex_contents .flexpane_tab_toolbar #user_group_edit.user_group_edit--flexpane .tab_action_button {
      color: #e0e0e0;
  }

  .user_group_invite_member_small .add_icon {
      color: #398FFF;
  }

  #user_group_member_invite_div .disabled .lfs_item.lfs_token {
      background-color: #969896;
      border-color: #969896;
  }

  #flex_contents .subheading#mentions_options {
      background-color: #282a2e;
      border-bottom-color: #282a2e;
      color: #e0e0e0;
  }

  .mention_day_container_div .day_divider::before {
      background: none;
      border-color: #282a2e;
  }

  #member_mentions h3 a {
      color: #ffffff;
  }

  .mention_rxn .mention_rxn_summary {
      color: #e0e0e0;
  }

  .mention_rxn .mention_rxn_summary .member_preview_link,
  .mention_rxn .mention_rxn_summary .mention_rxn_summary_members {
      color: #398FFF;
  }

  .search_message_result {
      background: #282a2e;
      border-top: 2px solid #282a2e;
      color: #e0e0e0;
  }

  .search_message_result .search_message_result_meta {
      color: #398FFF;
  }

  .search_message_result .search_message_result_meta a {
      color: #ffffff;
  }

  .search_message_result .search_message_result_meta .date_links a {
      color: #ffffff;
  }

  .search_message_result .search_message_result_text .result_msg_format a {
      color: #ffffff;
  }

  span.match {
      background: rgba(191, 54, 12, 0.25);
      border-radius: 3px;
      padding: 3px;
  }

  #search_filters a {
      background: #282a2e;
      color: #e0e0e0;
  }

  #search_filters a:hover {
      border-bottom: 4px solid #282a2e;
  }

  #search_filters.files #filter_files,
  #search_filters.messages #filter_messages {
      border-bottom: 4px solid #282a2e;
      color: #e0e0e0;
  }

  #search_file_list_toggle_users.active:hover {
      border: 2px solid #cc6666;
      color: #cc6666 !important;
  }

  .no_results {
      color: #e0e0e0;
  }

  #search_results_team .team_results_heading {
      color: #e0e0e0;
  }

  #search_results_team .team_result {
      background-color: #373b41;
      border: 1px solid #969896;
      color: #e0e0e0;
  }

  #search_results_team .team_result a {
      color: #ffffff;
  }

  #search_results_team .team_result:hover a {
      color: #cc6666;
  }

  #search_results_team .team_result a:hover {
      color: #cc6666;
  }

  #search_results_team .member_name {
      color: #e0e0e0 !important;
  }

  .suggestion {
      color: #e0e0e0;
  }

  .suggestion.active,
  .suggestion:hover {
      background: #373b41;
  }

  #paging_in_options .search_paging {
      color: #398FFF;
  }

  #search_results_items .search_paging {
      color: #e0e0e0;
  }

  .search_paging i.disabled {
      color: #398FFF;
  }

  .search_paging a {
      color: #ffffff;
  }

  .search_paging a:hover {
      color: #cc6666;
  }

  .search_sort_prefix {
      color: #e0e0e0;
  }

  .search_segmented_control {
      border: 1px solid #282a2e;
      color: #ffffff !important;
  }

  .search_segmented_control:hover {
      color: #cc6666 !important;
  }

  .search_segmented_control.active {
      background: #282a2e;
      color: #cc6666 !important;
  }

  .search_result_with_extract {
      background: #282a2e;
      border: 1px solid #373b41;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
  }

  .search_result_with_extract:hover {
      border: 1px solid #969896;
  }

  .search_result_for_context::after {
      background: rgba(40, 42, 46, 0.1);
  }

  .extract_expand_icons {
      color: #ffffff;
  }

  .search_result_with_extract:hover .extract_expand_icons {
      color: #cc6666;
  }

  .search_module_header {
      color: #e0e0e0;
  }

  .search_module_footer {
      background-color: #282a2e;
      border-bottom-color: #373b41;
      border-left-color: #373b41;
      border-right-color: #373b41;
  }

  .search_module_footer p {
      color: #e0e0e0;
  }

  .search_module_footer #see_more {
      color: #e0e0e0;
  }

  .search_module_footer #see_more a {
      color: #e0e0e0;
  }

  .search_module_footer .top_results_feedback a {
      color: #e0e0e0;
  }

  .search_module_footer ts-icon {
      color: #e0e0e0;
  }

  .top_results_search_message_result {
      background-color: #282a2e;
      border-bottom-color: #373b41;
      border-left-color: #373b41;
      border-right-color: #373b41;
  }

  .top_results_search_message_result.duplicate {
      background-color: #282a2e;
  }

  .top_results_search_message_result .timestamp {
      color: #398FFF;
  }

  .top_results_search_message_result .channel {
      color: #398FFF;
  }

  .top_results_search_message_result .channel a {
      color: #398FFF;
  }

  .top_results_search_message_result .jump {
      color: #e0e0e0;
  }

  .top_results_search_message_result:hover {
      border: 1px solid rgba(150, 152, 150, 0.6) !important;
      border-top: 2px solid #373b41 !important;
  }

  .top_results_search_message_result:first-child {
      border-top: 2px solid #373b41;
  }

  #member_preview_scroller a:not(.member_name):not(.current_status_preset_option),
  .team_list_item a:not(.member_name):not(.current_status_preset_option) {
      color: #ffffff;
  }

  #member_preview_scroller a:not(.member_name):not(.current_status_preset_option):hover,
  .team_list_item a:not(.member_name):not(.current_status_preset_option):hover {
      color: #cc6666;
  }

  #member_preview_scroller .member_data_table a,
  #team_list .member_data_table a {
      color: #ffffff;
  }

  #member_preview_scroller .member_data_table a:hover,
  #team_list .member_data_table a:hover {
      color: #cc6666;
  }

  #member_preview_scroller a.member_action_button,
  #team_list a.member_action_button {
      color: #ffffff !important;
  }

  #member_preview_scroller a.member_action_button:hover,
  #team_list a.member_action_button:hover {
      border-color: #969896 !important;
      color: #cc6666 !important;
  }

  #member_preview_scroller .member_data_table tr,
  #member_preview_web_container .member_data_table tr,
  #team_list .member_data_table tr,
  .menu_member_header .member_data_table tr {
      color: #e0e0e0;
  }

  #member_preview_scroller .member_data_table a,
  #member_preview_web_container .member_data_table a,
  #team_list .member_data_table a,
  .menu_member_header .member_data_table a {
      color: #ffffff;
  }

  #member_preview_scroller .member_data_table a:hover,
  #member_preview_web_container .member_data_table a:hover,
  #team_list .member_data_table a:hover,
  .menu_member_header .member_data_table a:hover {
      color: #cc6666;
  }

  #member_preview_scroller .member_data_table .bot_label,
  #member_preview_web_container .member_data_table .bot_label,
  #team_list .member_data_table .bot_label,
  .menu_member_header .member_data_table .bot_label {
      background: #1d1f21;
      color: #398FFF;
  }

  #member_preview_scroller,
  #member_preview_web_container {
      background-color: #282a2e;
  }

  #team_tab #member_preview_scroller,
  #team_tab #member_preview_web_container {
      background-color: #282a2e;
  }

  #member_preview_scroller .member_details .member_name_and_presence .member_name,
  #member_preview_web_container .member_details .member_name_and_presence .member_name,
  .menu_member_header .member_details .member_name_and_presence .member_name {
      color: #e0e0e0;
  }

  #member_preview_scroller .member_details .member_title,
  #member_preview_web_container .member_details .member_title,
  .menu_member_header .member_details .member_title {
      color: #e0e0e0;
  }

  #member_preview_scroller .member_details .member_restriction,
  #member_preview_scroller .member_details .member_timezone_value,
  #member_preview_web_container .member_details .member_restriction,
  #member_preview_web_container .member_details .member_timezone_value,
  .menu_member_header .member_details .member_restriction,
  .menu_member_header .member_details .member_timezone_value {
      color: #398FFF;
  }

  #member_preview_scroller .member_details .member_restriction a,
  #member_preview_scroller .member_details .member_timezone_value a,
  #member_preview_web_container .member_details .member_restriction a,
  #member_preview_web_container .member_details .member_timezone_value a,
  .menu_member_header .member_details .member_restriction a,
  .menu_member_header .member_details .member_timezone_value a {
      color: #ffffff;
  }

  #member_preview_scroller .member_details .member_restriction a:hover,
  #member_preview_scroller .member_details .member_timezone_value a:hover,
  #member_preview_web_container .member_details .member_restriction a:hover,
  #member_preview_web_container .member_details .member_timezone_value a:hover,
  .menu_member_header .member_details .member_restriction a:hover,
  .menu_member_header .member_details .member_timezone_value a:hover {
      color: #cc6666;
  }

  #member_preview_scroller .member_details .member_restriction .ts_icon_question_circle:focus,
  #member_preview_scroller .member_details .member_restriction .ts_icon_question_circle:hover,
  #member_preview_scroller .member_details .member_timezone_value .ts_icon_question_circle:focus,
  #member_preview_scroller .member_details .member_timezone_value .ts_icon_question_circle:hover,
  #member_preview_web_container .member_details .member_restriction .ts_icon_question_circle:focus,
  #member_preview_web_container .member_details .member_restriction .ts_icon_question_circle:hover,
  #member_preview_web_container .member_details .member_timezone_value .ts_icon_question_circle:focus,
  #member_preview_web_container .member_details .member_timezone_value .ts_icon_question_circle:hover,
  .menu_member_header .member_details .member_restriction .ts_icon_question_circle:focus,
  .menu_member_header .member_details .member_restriction .ts_icon_question_circle:hover,
  .menu_member_header .member_details .member_timezone_value .ts_icon_question_circle:focus,
  .menu_member_header .member_details .member_timezone_value .ts_icon_question_circle:hover {
      color: #ffffff;
  }

  #member_preview_scroller .member_details_divider,
  #member_preview_web_container .member_details_divider,
  .menu_member_header .member_details_divider {
      border-color: #282a2e;
  }

  #disabled_members_tab a {
      color: #ffffff;
  }

  #disabled_members_tab a:hover {
      background: #373b41;
      color: #cc6666;
  }

  #disabled_members_tab.active a {
      color: #ffffff;
  }

  .team_list_item {
      border-top: 1px solid #373b41;
      color: #ffffff;
  }

  .team_list_item .member_name {
      color: #e0e0e0;
  }

  #client-ui .searchable_member_list .team_list_item.expanded,
  #client-ui #team_list .team_list_item.expanded,
  #member_preview_scroller .team_list_item.expanded {
      border-color: #282a2e;
  }

  #client-ui .searchable_member_list .team_list_item:hover,
  #client-ui #team_list .team_list_item:hover,
  #member_preview_scroller .team_list_item:hover {
      border-color: #373b41;
  }

  #convo_tab #convo_tab_btns .close_flexpane:focus,
  #convo_tab #convo_tab_btns .close_flexpane:hover {
      color: #e0e0e0;
  }

  #convo_tab textarea.message_input {
      color: #e0e0e0;
  }

  #reply_container .inline_message_input_container .message_input div,
  #reply_container .inline_message_input_container textarea,
  .reply_input_container .inline_message_input_container .message_input div,
  .reply_input_container .inline_message_input_container textarea {
      border-color: #282a2e;
      color: #e0e0e0;
  }

  #reply_container .inline_message_input_container .message_input div:active,
  #reply_container .inline_message_input_container .message_input div:focus,
  #reply_container .inline_message_input_container textarea:active,
  #reply_container .inline_message_input_container textarea:focus,
  .reply_input_container .inline_message_input_container .message_input div:active,
  .reply_input_container .inline_message_input_container .message_input div:focus,
  .reply_input_container .inline_message_input_container textarea:active,
  .reply_input_container .inline_message_input_container textarea:focus {
      border-color: #1d1f21;
  }

  #reply_container .reply_broadcast_buttons_container .reply_broadcast_label_container,
  .reply_input_container .reply_broadcast_buttons_container .reply_broadcast_label_container {
      color: #e0e0e0;
  }

  #reply_container .reply_broadcast_buttons_container .reply_broadcast_label_container ts-icon.ts_icon_question_circle,
  .reply_input_container .reply_broadcast_buttons_container .reply_broadcast_label_container ts-icon.ts_icon_question_circle {
      color: #398FFF;
  }

  #reply_container .reply_limited_in_general,
  .reply_input_container .reply_limited_in_general {
      background: #282a2e;
      color: #398FFF;
  }

  #convo_container .convo_flexpane_divider {
      border-top-color: #282a2e;
      color: #398FFF;
  }

  #convo_container .convo_flexpane_divider .reply_count {
      background: #282a2e;
  }

  #convo_container ts-conversation ts-message.selected .message_content .thread_channel_link {
      color: #ffffff;
  }

  #convo_tab .message_input,
  #convo_tab textarea#msg_text {
      color: #e0e0e0;
  }

  #whats_new_tab p {
      color: #e0e0e0;
  }

  #whats_new_tab .flex_heading_controls label {
      color: #398FFF;
  }

  #whats_new_updates h3 a {
      color: #e0e0e0 !important;
  }

  #emoji_menu {
      background: #1d1f21;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
      color: #e0e0e0;
  }

  #emoji_menu #emoji_menu_items_scroller {
      background: #282a2e !important;
  }

  #emoji_menu h3 {
      background: rgba(40, 42, 46, 0.95);
  }

  #emoji_menu #emoji_preview_text {
      background: #1d1f21;
      color: #e0e0e0;
  }

  #emoji_menu #emoji_preview_deluxe {
      color: #e0e0e0;
  }

  #emoji_menu #emoji_menu_footer {
      background: #1d1f21;
      border-top: 1px solid #282a2e;
  }

  #emoji_menu #emoji_menu_content:hover #emoji_skin_button_container {
      background: #373b41;
      border: 1px solid #282a2e;
  }

  #emoji_menu #emoji_menu_header {
      background: #1d1f21;
  }

  #emoji_menu .emoji_li[data-color-index="0"]:hover,
  #emoji_menu .emoji_li[data-color-index="0"].key_selection,
  #emoji_menu[data-using-keyboard=true] .emoji_li[data-color-index="0"]:hover,
  #emoji_menu[data-using-keyboard=true] .emoji_li[data-color-index="0"].key_selection {
      background: rgba(183, 232, 135, 0.5);
  }

  #emoji_menu .emoji_li[data-color-index="1"]:hover,
  #emoji_menu .emoji_li[data-color-index="1"].key_selection,
  #emoji_menu[data-using-keyboard=true] .emoji_li[data-color-index="1"]:hover,
  #emoji_menu[data-using-keyboard=true] .emoji_li[data-color-index="1"].key_selection {
      background: rgba(181, 224, 254, 0.5);
  }

  #emoji_menu .emoji_li[data-color-index="2"]:hover,
  #emoji_menu .emoji_li[data-color-index="2"].key_selection,
  #emoji_menu[data-using-keyboard=true] .emoji_li[data-color-index="2"]:hover,
  #emoji_menu[data-using-keyboard=true] .emoji_li[data-color-index="2"].key_selection {
      background: rgba(249, 239, 103, 0.5);
  }

  #emoji_menu .emoji_li[data-color-index="3"]:hover,
  #emoji_menu .emoji_li[data-color-index="3"].key_selection,
  #emoji_menu[data-using-keyboard=true] .emoji_li[data-color-index="3"]:hover,
  #emoji_menu[data-using-keyboard=true] .emoji_li[data-color-index="3"].key_selection {
      background: rgba(243, 193, 253, 0.5);
  }

  #emoji_menu .emoji_li[data-color-index="4"]:hover,
  #emoji_menu .emoji_li[data-color-index="4"].key_selection,
  #emoji_menu[data-using-keyboard=true] .emoji_li[data-color-index="4"]:hover,
  #emoji_menu[data-using-keyboard=true] .emoji_li[data-color-index="4"].key_selection {
      background: rgba(255, 225, 174, 0.5);
  }

  #emoji_menu .emoji_li[data-color-index="5"]:hover,
  #emoji_menu .emoji_li[data-color-index="5"].key_selection,
  #emoji_menu[data-using-keyboard=true] .emoji_li[data-color-index="5"]:hover,
  #emoji_menu[data-using-keyboard=true] .emoji_li[data-color-index="5"].key_selection {
      background: rgba(224, 223, 255, 0.5);
  }

  #emoji_menu a.emoji_grouping_tab {
      color: #ffffff;
  }

  #emoji_menu a.emoji_grouping_tab:hover {
      background: #282a2e;
      color: #cc6666;
  }

  #emoji_menu a.emoji_grouping_tab.active {
      background: #373b41;
      border-bottom: 3px solid #373b41;
      color: #e0e0e0;
  }

  #emoji_menu #monkey_scroll_wrapper_for_emoji_menu_items_scroller {
      background: #282a2e;
  }

  #emoji_menu #emoji_input:focus {
      border-color: #373b41;
  }

  #emoji_menu #emoji_skin_button,
  #emoji_menu #emoji_skin_picker,
  #emoji_menu #emoji_skin_tip {
      color: #398FFF;
  }

  #emoji_menu #emoji_skin_picker {
      background: #1d1f21;
  }

  #emoji_menu #emoji_skin_picker>span[data-preferred=true] {
      background: #282a2e;
  }

  .emoji_menu_ng #emoji_input_container {
      background: #282a2e;
  }

  .emoji_li a {
      color: #ffffff !important;
      text-shadow: 0 1px rgba(0, 0, 0, 0.15);
  }

  div#emoji_tip {
      color: #e0e0e0;
  }

  div#emoji_zero_results {
      color: #398FFF;
  }

  div#emoji_tip i,
  div#emoji_zero_results i {
      color: #398FFF;
  }

  .rxn {
      background: #1d1f21;
      border: 1px solid #373b41;
  }

  .rxn.active,
  .rxn:hover {
      border-color: #373b41;
  }

  .rxn.active .emoji_rxn_count,
  .rxn:hover .emoji_rxn_count {
      color: #e0e0e0;
  }

  .rxn.user_reacted {
      background-color: rgba(55, 59, 65, 0.08);
      border-color: rgba(150, 152, 150, 0.4) !important;
  }

  .rxn.user_reacted .emoji_rxn_count {
      color: #e0e0e0;
  }

  .rxn .emoji_rxn_count {
      color: #e0e0e0;
  }

  .rxn.menu_rxn .ts_icon {
      color: rgba(224, 224, 224, 0.25);
  }

  .modal {
      background-color: #282a2e;
      border: 0;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  }

  .modal .close,
  .modal label {
      color: #e0e0e0;
  }

  .modal_input_note,
  .modal_input_note_full_width,
  .input_note_special {
      color: #398FFF;
  }

  .modal-footer {
      background: padding-box #282a2e;
      border-top: 1px solid transparent;
      box-shadow: none;
  }

  .modal-header {
      background: padding-box #1d1f21;
      border-bottom: 1px solid #282a2e;
      color: #e0e0e0;
  }

  .modal-backdrop {
      background-color: #282a2e;
  }

  .close {
      color: #e0e0e0;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
  }

  #fs_modal_bg {
      background: #282a2e;
  }

  #fs_modal {
      background: #282a2e;
  }

  #fs_modal h1,
  #fs_modal h2,
  #fs_modal h3,
  #fs_modal h4,
  #fs_modal h5,
  #fs_modal h6 {
      color: #e0e0e0;
  }

  #fs_modal #fs_modal_sidebar a {
      color: #e0e0e0;
  }

  #fs_modal #fs_modal_sidebar a:hover {
      background: #282a2e;
  }

  #fs_modal #fs_modal_sidebar a.active {
      background: #1d1f21;
      color: #e0e0e0;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  }

  #fs_modal .fs_modal_btn {
      color: rgba(224, 224, 224, 0.5);
  }

  #fs_modal .fs_modal_btn:hover {
      background: #969896;
      color: #e0e0e0;
  }

  #fs_modal .fs_modal_btn:active {
      background: #969896;
      color: #e0e0e0;
  }

  #fs_modal #fs_modal_footer {
      background-color: #282a2e;
  }

  .bot_label {
      background: #1d1f21;
      color: #398FFF;
  }

  #incoming_call {
      background-color: rgba(29, 31, 33, 0.97);
      color: #e0e0e0;
  }

  #fs_modal.channel_options_modal .channel_options_header {
      border-bottom-color: #282a2e;
  }

  #fs_modal.channel_options_modal .convert_to_shared label {
      color: #398FFF;
  }

  #fs_modal.channel_options_modal .channel_option_item {
      border-top-color: #282a2e;
  }

  #fs_modal.channel_options_modal .channel_option_item .channel_option_open {
      color: #e0e0e0;
  }

  #fs_modal.channel_options_modal .channel_option_item:hover {
      background: rgba(29, 31, 33, 0.75);
      border-color: #282a2e;
  }

  #channel_invite_container .lfs_list_container .lfs_item {
      border-top-color: #282a2e;
  }

  #channel_invite_container .lfs_list_container .lfs_item.active {
      border-color: #282a2e;
  }

  #channel_invite_container.page_needs_enterprise .channel_invite_row {
      border-top-color: #282a2e;
  }

  #channel_invite_container.page_needs_enterprise .channel_invite_row.disabled {
      color: #398FFF;
  }

  #channel_invite_modal #channel_invite_container:not(.keyboard_active).not_scrolling .channel_invite_row:hover,
  #channel_invite_modal .channel_invite_row.highlighted {
      background: #282a2e;
      border-color: #282a2e;
  }

  .channel_modal_header {
      color: #e0e0e0;
  }

  #channel_browser .channel_browser_row {
      border-top: 1px solid #282a2e;
      color: #e0e0e0;
  }

  #channel_browser .channel_browser_row_header {
      color: #e0e0e0;
  }

  #channel_browser .channel_browser_creator_name {
      color: #398FFF;
  }

  #channel_browser .channel_browser_open,
  #channel_browser .channel_browser_preview {
      color: #398FFF;
  }

  #channel_browser #channel_list_container:not(.keyboard_active).not_scrolling .channel_browser_row:hover,
  #channel_browser .channel_browser_row.highlighted {
      background: #1d1f21;
      border: 1px solid #373b41;
  }

  #channel_browser .channel_browser_divider {
      background: transparent;
      color: #398FFF;
  }

  #channel_browser .channel_browser_sort_container::after {
      color: #e0e0e0;
  }

  .channel_invite_member .add_icon,
  .channel_invite_member_small .add_icon {
      color: #ffffff;
  }

  .channel_invite_member .name_container .not_in_token,
  .channel_invite_member_small .name_container .not_in_token {
      color: #398FFF !important;
  }

  .channel_invite_member .invite_user_group_avatar,
  .channel_invite_member_small .invite_user_group_avatar {
      background-color: #1d1f21;
      color: #e0e0e0;
  }

  #invite_members_container .lfs_input_container {
      background: #373b41;
  }

  #notifications_not_working p.highlight_yellow_bg {
      border-radius: 3px;
      padding: 0 6px 6px;
  }

  #notifications_not_working p.highlight_yellow_bg a {
      color: #e0e0e0;
      text-decoration: underline;
  }

  #im_browser .im_browser_row {
      border-top: 1px solid #373b41;
  }

  #im_browser .im_browser_row.multiparty .member_image+.member_image:not(.ra):not(.ura) {
      border: 2px solid #1d1f21;
  }

  #im_browser .im_browser_row .im_unread_cnt {
      background: #bf360c;
      color: #e0e0e0;
  }

  #im_browser .im_browser_row.disabled {
      color: #398FFF;
  }

  #im_browser #im_list_container:not(.keyboard_active).not_scrolling .im_browser_row:hover,
  #im_browser .im_browser_row.highlighted {
      background: #1d1f21;
      border: 1px solid #373b41;
  }

  #im_browser_tokens {
      background: #373b41;
      border: 1px solid #969896;
  }

  #im_browser_tokens.active {
      border-color: #969896;
      box-shadow: 0 0 7px rgba(150, 152, 150, 0.15);
  }

  #im_browser_tokens .member_token {
      background: #282a2e;
      border: 1px solid #1d1f21;
      color: #e0e0e0;
  }

  #im_browser_tokens .member_token.ra {
      background: #bf360c;
  }

  .fs_modal_file_viewer_header {
      background-color: #282a2e;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
  }

  .fs_modal_file_viewer_header .btn {
      color: #e0e0e0;
  }

  .fs_modal_file_viewer_header .star {
      color: #398FFF;
  }

  .fs_modal_file_viewer_header .control_btn,
  .fs_modal_file_viewer_header a.control_btn {
      color: #e0e0e0;
  }

  .fs_modal_file_viewer_header .control_btn:link,
  .fs_modal_file_viewer_header .control_btn:visited,
  .fs_modal_file_viewer_header a.control_btn:link,
  .fs_modal_file_viewer_header a.control_btn:visited {
      color: #e0e0e0;
  }

  .fs_modal_file_viewer_header .control_btn:focus,
  .fs_modal_file_viewer_header .control_btn:hover,
  .fs_modal_file_viewer_header a.control_btn:focus,
  .fs_modal_file_viewer_header a.control_btn:hover {
      color: #398FFF;
  }

  .fs_modal_file_viewer_header .control_btn.active,
  .fs_modal_file_viewer_header .control_btn:active,
  .fs_modal_file_viewer_header a.control_btn.active,
  .fs_modal_file_viewer_header a.control_btn:active {
      background: #373b41;
  }

  .fs_modal_file_viewer_header .file_size {
      color: #398FFF;
  }

  .fs_modal_file_viewer_header .close_btn::after {
      border-right: 1px solid #373b41;
  }

  .fs_modal_file_viewer_content .viewer {
      background-color: #1d1f21;
      color: #e0e0e0 !important;
  }

  .fs_modal_file_viewer_content .viewer .next_btn ts-icon,
  .fs_modal_file_viewer_content .viewer .previous_btn ts-icon {
      background: #373b41;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);
  }

  .fs_modal_file_viewer_content .viewer .next_btn:focus:not([disabled]),
  .fs_modal_file_viewer_content .viewer .next_btn:hover:not([disabled]),
  .fs_modal_file_viewer_content .viewer .previous_btn:focus:not([disabled]),
  .fs_modal_file_viewer_content .viewer .previous_btn:hover:not([disabled]) {
      background: rgba(150, 152, 150, 0.25);
      color: #e0e0e0;
  }

  .fs_modal_file_viewer_content .viewer .next_btn[disabled]:focus,
  .fs_modal_file_viewer_content .viewer .next_btn[disabled]:hover,
  .fs_modal_file_viewer_content .viewer .previous_btn[disabled]:focus,
  .fs_modal_file_viewer_content .viewer .previous_btn[disabled]:hover {
      color: rgba(129, 162, 190, 0.8);
  }

  .fs_modal_file_viewer_content .aside_panel {
      background-color: #282a2e;
      box-shadow: -1px 0 0 rgba(0, 0, 0, 0.25);
  }

  .fs_modal_file_viewer_content .comment_header {
      background-color: transparent;
      border-bottom: 1px solid #1d1f21;
  }

  .fs_modal_file_viewer_content .no_comment {
      background-color: #282a2e;
      color: #398FFF;
  }

  .fs_modal_file_viewer_content .aside_close_btn {
      color: #e0e0e0;
  }

  .fs_modal_file_viewer_content #file_comment {
      color: #e0e0e0;
  }

  #fs_modal.help_modal #fs_modal_footer .help_modal_status #no_open_issues {
      color: #398FFF;
  }

  #fs_modal.help_modal .help_modal_divider {
      color: #398FFF;
  }

  #fs_modal.help_modal .help_modal_article_row {
      border-top: 1px solid #282a2e;
  }

  #fs_modal.help_modal .help_modal_article_row .channel_browser_open {
      color: #398FFF;
  }

  #fs_modal.help_modal #help_modal_list_container:not(.keyboard_active).not_scrolling .help_modal_article_row:hover,
  #fs_modal.help_modal .help_modal_article_row.highlighted {
      background-color: #282a2e;
      border-color: #1d1f21;
  }

  .admin_invites_account_type_option {
      border-bottom: 1px solid #282a2e;
  }

  .admin_invites_account_type_option p {
      color: #e0e0e0;
  }

  .admin_invites_account_type_option .option_arrow {
      color: #398FFF;
  }

  .admin_invites_account_type_option:hover:not(.disabled) h3 {
      color: #e0e0e0;
  }

  .admin_invites_account_type_option.disabled .account_type_disabled_hover {
      background: rgba(255, 255, 255, 0);
  }

  .admin_invites_account_type_option.disabled:hover .account_type_disabled_hover {
      background: rgba(40, 42, 46, 0.95);
  }

  .admin_invites_container:not(.experiment_guest_profiles_and_expiration) #admin_invites_add_row {
      background: #282a2e;
      border-color: #282a2e;
  }

  .admin_invite_row .delete_row,
  .admin_invite_row .hide_custom_message,
  .admin_invites_custom_message_container .delete_row,
  .admin_invites_custom_message_container .hide_custom_message {
      color: #398FFF;
  }

  .admin_invite_row .delete_row:hover,
  .admin_invite_row .hide_custom_message:hover,
  .admin_invites_custom_message_container .delete_row:hover,
  .admin_invites_custom_message_container .hide_custom_message:hover {
      color: #bf360c;
  }

  .admin_invite_row.delete_highlight,
  .admin_invites_custom_message_container.delete_highlight {
      background: rgba(191, 54, 12, 0.4);
  }

  #admin_invites_channel_picker_container {
      border-bottom: 1px solid #282a2e;
  }

  #admin_invites_add_row {
      background: #373b41;
      border: 1px solid #282a2e;
  }

  .admin_invite_row .delete_row {
      color: #398FFF;
  }

  .admin_invite_row .delete_row:hover {
      color: #bf360c;
  }

  .admin_invite_row.delete_highlight {
      background: rgba(191, 54, 12, 0.25);
  }

  #admin_invites_workflow .lazy_filter_select .lfs_input_container {
      background-color: #373b41;
  }

  #channel_invite_tokens {
      background-color: #373b41;
      border-color: #969896;
  }

  #channel_invite_tokens.active {
      border-color: #398FFF;
      box-shadow: 0 0 7px rgba(129, 162, 190, 0.15);
  }

  #channel_invite_tokens .member_token {
      background: #282a2e;
      color: #e0e0e0;
  }

  #channel_invite_tokens .member_token.ra {
      background: rgba(191, 54, 12, 0.4);
  }

  .channel_invite_member .add_icon,
  .channel_invite_member_small .add_icon,
  .channel_invite_pending_user_small .add_icon {
      color: #e0e0e0;
  }

  .channel_invite_member .invite_user_group_avatar,
  .channel_invite_member_small .invite_user_group_avatar,
  .channel_invite_pending_user_small .invite_user_group_avatar {
      background-color: #282a2e;
      color: #e0e0e0;
  }

  #shortcuts_dialog {
      background: rgba(40, 42, 46, 0.95);
      text-shadow: 0 1px 1px rgba(29, 31, 33, 0.7);
  }

  #shortcuts_dialog.modal .modal-body,
  #shortcuts_dialog.modal h1,
  #shortcuts_dialog.modal h3 {
      color: #e0e0e0;
  }

  #shortcuts_dialog.modal ul ul {
      border-left-color: #373b41;
  }

  #shortcuts_dialog.modal .info_block {
      color: #398FFF;
  }

  #shortcuts_dialog.modal .close {
      background: #373b41;
      border-color: #969896;
      box-shadow: 0 1px 2px rgba(29, 31, 33, 0.5);
      color: #e0e0e0;
  }

  #shortcuts_dialog.modal .close:hover {
      box-shadow: 0 1px 2px rgba(29, 31, 33, 0.9);
  }

  #fs_modal.prefs_modal .section_rollup {
      border-bottom: 1px solid #282a2e;
  }

  #fs_modal.prefs_modal .section_rollup:first-of-type {
      border-top: 1px solid #282a2e;
  }

  #fs_modal.prefs_modal .section_rollup:hover:not(.active) {
      background: #282a2e;
      color: #e0e0e0;
  }

  #fs_modal.prefs_modal label.sound_option:hover:not(.disabled) ts-icon {
      color: #398FFF;
  }

  #fs_modal.prefs_modal #prefs_themes .theme_thumb {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  }

  #fs_modal.prefs_modal #prefs_themes #prefs_themes_customize .custom_theme_label {
      border: 1px solid #282a2e;
  }

  #fs_modal.prefs_modal #prefs_themes #prefs_themes_customize .custom_theme_label .color_swatch {
      border: 1px solid #282a2e;
  }

  #fs_modal.prefs_modal #prefs_themes #prefs_themes_customize .colpick {
      background: #373b41;
      border: 1px solid #282a2e;
  }

  #fs_modal.prefs_modal #prefs_themes::before {
      background: #bf360c;
      border-radius: 3px;
      content: "Light sidebar themes (e.g. Hoth) will break this Stylish theme.";
      display: block;
      margin-bottom: 6px;
      padding: 2px 4px 4px;
      width: 100%;
  }

  #fs_modal.prefs_modal legend {
      color: #e0e0e0;
  }

  .sidebar_menu_list_item {
      border: 0;
      color: #e0e0e0;
  }

  .sidebar_menu_list_item.is_active {
      background-color: #1d1f21;
      color: #e0e0e0;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  }

  .sidebar_menu_list_item:not(.is_active):hover {
      background-color: #282a2e;
  }

  #edit_team_profile_container input:disabled,
  #edit_team_profile_container select:disabled {
      background: #373b41;
      border: 1px solid #1d1f21;
  }

  #edit_team_profile_container .lazy_filter_select.disabled {
      background: #373b41;
  }

  #edit_team_profile_container .lazy_filter_select.disabled input {
      background: #373b41;
  }

  #edit_team_profile_add .row,
  #edit_team_profile_list .row {
      border-top: 1px solid #282a2e;
  }

  #edit_team_profile_list .row:nth-last-child(2):hover {
      border-color: #282a2e !important;
  }

  #edit_team_profile_list .row:nth-child(n+5).active,
  #edit_team_profile_list .row:nth-child(n+5):hover {
      background: #282a2e;
      border: 1px solid #1d1f21;
  }

  #edit_team_profile_list .row:nth-child(n+5).active .edit_team_profile_list_controls i.ts_icon_cog_o {
      color: #398FFF;
  }

  #edit_team_profile_list .edit_team_profile_list_controls i {
      color: #e0e0e0;
  }

  #edit_team_profile_list .edit_team_profile_list_controls i.ts_icon_cog_o:hover {
      color: #398FFF;
  }

  #edit_team_profile_list .edit_team_profile_list_controls i.ts_icon_grabby_patty:hover {
      color: #398FFF;
  }

  #edit_team_profile_list .sortable-placeholder::before {
      border-top: 1px solid #373b41;
  }

  #edit_team_profile_add .row:last-child {
      border-bottom: 1px solid #373b41;
  }

  #edit_team_profile_add .row:not(.header_row):hover {
      background: #282a2e;
      border: 1px solid #1d1f21;
  }

  #edit_team_profile_add .row:not(.header_row):hover .col:first-child {
      color: #e0e0e0;
  }

  #edit_team_profile_add .row:not(.header_row):hover i {
      border-color: #1d1f21;
      color: #e0e0e0;
  }

  #edit_team_profile_add i {
      color: #398FFF;
  }

  #edit_team_profile_edit .profile_field_preview_protector label.select::after,
  #edit_team_profile_edit .profile_field_preview_protector label.select:hover::after {
      color: #398FFF;
  }

  #edit_team_profile_edit .row.option_row.show_remove_action i {
      border: 1px solid #1d1f21;
  }

  #edit_team_profile_edit .row.option_row.show_remove_action i:hover {
      background-color: #bf360c;
      border-color: #bf360c !important;
      color: #e0e0e0;
  }

  #edit_team_profile_edit .row i {
      border: 1px solid #1d1f21;
      color: #e0e0e0;
  }

  #edit_team_profile_custom .row .col .profile_field_preview {
      background: #282a2e;
      border: 2px solid #1d1f21;
  }

  #edit_team_profile_custom .row .col .profile_field_preview:active,
  #edit_team_profile_custom .row .col .profile_field_preview:hover {
      border-color: #282a2e;
  }

  #edit_team_profile_custom .row .col .profile_field_preview:active span,
  #edit_team_profile_custom .row .col .profile_field_preview:hover span {
      color: #398FFF;
  }

  #edit_team_profile_custom .row .col input {
      background: #373b41;
      border: 1px solid #1d1f21;
  }

  #edit_team_profile_custom .row .col[data-type=options_list] span::after {
      color: #398FFF;
  }

  #edit_team_profile_custom .row .col[data-type=options_list] input {
      border-right: 1px solid #1d1f21;
  }

  .profile_field_preview_protector .profile_field_preview {
      background: #282a2e;
      border: 1px solid #373b41;
  }

  .profile_field_preview_protector .profile_field_preview::after {
      background-color: #282a2e;
      box-shadow: 0 0.75rem 0.75rem rgba(0, 0, 0, 0.25);
  }

  .profile_field_preview_protector .profile_field_preview::before {
      background-color: #282a2e;
      box-shadow: 0 0.75rem 0.75rem rgba(0, 0, 0, 0.25);
  }

  .profile_field_preview_protector .profile_field_preview input:disabled,
  .profile_field_preview_protector .profile_field_preview select:disabled {
      background: #373b41;
      color: #398FFF;
  }

  .profile_field_preview_protector .profile_field_preview .profile_field_preview_fade_out_mask {
      background: linear-gradient(to left, #1d1f21, rgba(255, 255, 255, 0));
  }

  .profile_field_preview_protector .profile_field_preview .profile_field_preview_ribbon::before {
      border-color: transparent transparent transparent #1d1f21;
  }

  .profile_field_preview_protector .profile_field_preview .profile_field_preview_ribbon::after {
      border-color: #1d1f21 transparent transparent;
  }

  ts-jumper ts-jumper-container {
      background: #282a2e;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  }

  ts-jumper ts-jumper-help {
      color: #398FFF;
  }

  ts-jumper input[type=text] {
      border: 1px solid #1d1f21 !important;
      color: #e0e0e0;
  }

  ts-jumper input[type=text]:focus {
      border: 1px solid rgba(40, 42, 46, 0.8) !important;
      color: #e0e0e0;
  }

  ts-jumper input[type=text]::-webkit-input-placeholder,
  ts-jumper input[type=text]:focus::-webkit-input-placeholder,
  ts-jumper input[type=text]::-moz-placeholder,
  ts-jumper input[type=text]:focus::-moz-placeholder {
      color: #e0e0e0;
  }

  ts-jumper ol li {
      color: #e0e0e0;
  }

  ts-jumper ol li .channel_name,
  ts-jumper ol li .member_real_name,
  ts-jumper ol li .member_username,
  ts-jumper ol li .team_username {
      color: #398FFF;
  }

  ts-jumper ol li .channel_not_member,
  ts-jumper ol li .team_username,
  ts-jumper ol li .member_real_name+.member_username,
  ts-jumper ol li .member_username+.member_real_name,
  ts-jumper ol li ts-icon {
      color: #398FFF;
  }

  ts-jumper ol li .unread_count {
      background: #bf360c;
      color: #e0e0e0;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  }

  ts-jumper ol li.highlighted {
      background: #969896 !important;
      color: #e0e0e0 !important;
  }

  ts-jumper ol:not(.keyboard_active) li:hover {
      background: #969896 !important;
      color: #e0e0e0 !important;
  }

  ts-jumper ol li.highlighted .channel_not_member,
  ts-jumper ol li.highlighted .match_score,
  ts-jumper ol li.highlighted .member_real_name+.member_username,
  ts-jumper ol li.highlighted .member_username+.member_real_name,
  ts-jumper ol li.highlighted i.presence_icon,
  ts-jumper ol li.highlighted ts-icon,
  ts-jumper ol:not(.keyboard_active) li:hover .channel_not_member,
  ts-jumper ol:not(.keyboard_active) li:hover .match_score,
  ts-jumper ol:not(.keyboard_active) li:hover .member_real_name+.member_username,
  ts-jumper ol:not(.keyboard_active) li:hover .member_username+.member_real_name,
  ts-jumper ol:not(.keyboard_active) li:hover i.presence_icon,
  ts-jumper ol:not(.keyboard_active) li:hover ts-icon {
      color: #e0e0e0;
  }

  .basic_share_dialog .share_dialog_divider {
      border-top-color: transparent;
  }

  .share_dialog_attachment_container {
      color: #e0e0e0;
  }

  #share_dialog .file_list_item {
      border-color: #1d1f21;
  }

  #generic_dialog.basic_share_dialog .lazy_filter_select .lfs_item .ts_icon:not(.presence_icon),
  #share_dialog .lazy_filter_select .lfs_item .ts_icon:not(.presence_icon) {
      color: #398FFF;
  }

  .ts_tip .ts_tip_multiline_inner,
  .ts_tip:not(.ts_tip_multiline) .ts_tip_tip {
      background: #373b41;
  }

  .ts_tip .ts_tip_tip {
      color: #e0e0e0;
  }

  .ts_tip.ts_tip_left .ts_tip_tip::after {
      border-left-color: #373b41;
  }

  .ts_tip.ts_tip_right .ts_tip_tip::after {
      border-right-color: #373b41;
  }

  .ts_tip.ts_tip_top .ts_tip_tip::after {
      border-top-color: #373b41;
  }

  .ts_tip.ts_tip_bottom .ts_tip_tip::after {
      border-bottom-color: #373b41;
  }

  .ts_tip.success .ts_tip_tip {
      background: #969896;
  }

  .ts_tip.success.ts_tip_left .ts_tip_tip::after {
      border-left-color: #969896;
  }

  .ts_tip.success.ts_tip_right .ts_tip_tip::after {
      border-right-color: #969896;
  }

  .ts_tip.success.ts_tip_top .ts_tip_tip::after {
      border-top-color: #969896;
  }

  .ts_tip.success.ts_tip_bottom .ts_tip_tip::after {
      border-bottom-color: #969896;
  }

  #coachmark.channels_coachmark_div {
      background: #373b41;
  }

  #coachmark.channels_coachmark_div #coachmark_callout,
  #coachmark.channels_coachmark_div #coachmark_interior {
      background: #373b41;
  }

  #coachmark.calls_ss_window_coachmark_div {
      background: #373b41;
  }

  #coachmark.calls_ss_window_coachmark_div #coachmark_callout,
  #coachmark.calls_ss_window_coachmark_div #coachmark_interior {
      background: #373b41;
  }

  #coachmark.calls_video_beta_coachmark_div {
      background: #373b41;
  }

  #coachmark.calls_video_beta_coachmark_div #coachmark_callout,
  #coachmark.calls_video_beta_coachmark_div #coachmark_interior {
      background: #373b41;
  }

  #coachmark.calls_video_ga_coachmark_div {
      background: #373b41;
  }

  #coachmark.calls_video_ga_coachmark_div #coachmark_callout,
  #coachmark.calls_video_ga_coachmark_div #coachmark_interior {
      background: #373b41;
  }

  #coachmark.direct_messages_coachmark_div {
      background: #373b41;
  }

  #coachmark.direct_messages_coachmark_div #coachmark_callout,
  #coachmark.direct_messages_coachmark_div #coachmark_interior {
      background: #373b41;
  }

  #coachmark.gdrive_coachmark_div {
      background: #373b41;
  }

  #coachmark.gdrive_coachmark_div #coachmark_callout,
  #coachmark.gdrive_coachmark_div #coachmark_interior {
      background: #373b41;
  }

  #coachmark.highlights_arrows_coachmark_div {
      background: #373b41;
  }

  #coachmark.highlights_arrows_coachmark_div #coachmark_callout,
  #coachmark.highlights_arrows_coachmark_div #coachmark_interior {
      background: #373b41;
  }

  #coachmark.highlights_message_coachmark_div {
      background: #373b41;
  }

  #coachmark.highlights_message_coachmark_div #coachmark_callout,
  #coachmark.highlights_message_coachmark_div #coachmark_interior {
      background: #373b41;
  }

  #coachmark.replies_coachmark_div {
      background: #373b41;
  }

  #coachmark.replies_coachmark_div #coachmark_callout,
  #coachmark.replies_coachmark_div #coachmark_interior {
      background: #373b41;
  }

  #coachmark.starred_items_coachmark_div {
      background: #373b41;
  }

  #coachmark.starred_items_coachmark_div #coachmark_callout,
  #coachmark.starred_items_coachmark_div #coachmark_interior {
      background: #373b41;
  }

  #coachmark.unread_view_coachmark_div {
      background: #373b41;
  }

  #coachmark.unread_view_coachmark_div #coachmark_callout,
  #coachmark.unread_view_coachmark_div #coachmark_interior {
      background: #373b41;
  }

  #coachmark.invites_coachmark_div {
      background: #bf360c;
  }

  #coachmark.invites_coachmark_div #coachmark_callout,
  #coachmark.invites_coachmark_div #coachmark_interior {
      background: #bf360c;
  }

  #coachmark.recent_mentions_coachmark_div {
      background: #bf360c;
  }

  #coachmark.recent_mentions_coachmark_div #coachmark_callout,
  #coachmark.recent_mentions_coachmark_div #coachmark_interior {
      background: #bf360c;
  }

  #coachmark_footer .coachmark_got_it {
      background: rgba(150, 152, 150, 0.5) !important;
  }

  #coachmark_interior {
      color: #e0e0e0;
  }

  .menu_member_header {
      background: #1d1f21;
  }

  .menu_member_header .member_details.feature_custom_fields .member_name_and_presence {
      color: #e0e0e0;
  }

  .menu_member_header .member_details.feature_custom_fields .member_name_and_presence .member_name {
      color: #e0e0e0;
  }

  .menu_member_header .member_details.feature_custom_fields .member_name_and_presence .presence.away {
      color: #fff;
  }

  .menu_member_header .member_details.feature_custom_fields .member_title {
      color: #398FFF;
  }

  .menu_member_header .member_details.feature_custom_fields .member_restriction,
  .menu_member_header .member_details.feature_custom_fields .member_timezone_value {
      color: #398FFF;
  }

  .menu_member_header .member_details.feature_custom_fields .member_restriction a,
  .menu_member_header .member_details.feature_custom_fields .member_timezone_value a {
      color: #ffffff;
  }

  .menu_member_header .member_details.feature_custom_fields .member_restriction a:hover,
  .menu_member_header .member_details.feature_custom_fields .member_timezone_value a:hover {
      color: #cc6666;
  }

  .menu_member_header .member_details_divider {
      border-color: #373b41;
  }

  .menu_member_footer {
      background: #1d1f21;
      border-top: 1px solid #373b41;
  }

  .menu_member_footer p {
      color: #398FFF;
  }

  .member_meta {
      color: #ffffff;
  }

  .mini,
  .dull_grey,
  .flat_grey,
  .blue_link,
  .slate_blue,
  .charcoal_grey,
  .indifferent_grey,
  .ts_tip_tip .subtle_silver {
      color: #e0e0e0 !important;
  }

  .greigh,
  .sky_blue,
  .severe_grey,
  .havana_blue,
  .burnt_violet,
  .plastic_grey,
  .cloud_silver,
  .subtle_silver,
  .old_petunia_grey {
      color: #398FFF !important;
  }

  .clear_blue {
      color: #ffffff !important;
  }

  .moscow_red,
  .mustard_yellow,
  .candy_red_on_hover:hover,
  .moscow_red_on_hover:hover {
      color: #bf360c !important;
  }

  .candy_red_bg {
      background-color: #bf360c !important;
  }

  .neutral_white_bg {
      background-color: #282a2e !important;
  }

  .yolk_orange_bg,
  .burnt_violet_bg,
  .flexpane_grey_bg {
      background-color: #373b41 !important;
  }

  .sky_blue_bg,
  .clear_blue_bg,
  .seafoam_green_bg {
      background-color: #373b41 !important;
  }

  #msgs_scroller_div {
      margin-left: 4px;
  }

  .monkey_scroll_bar {
      z-index: 99;
  }

  .client_header_icon {
      -moz-filter: brightness(0.6) contrast(3) invert(1) sepia(0.5);
      -webkit-filter: brightness(0.6) contrast(3) invert(1) sepia(0.5);
      filter: brightness(0.6) contrast(3) invert(1) sepia(0.5);
  }

  nav.top.persistent {
      background: #282a2e;
  }

  nav.top.persistent .logo {
      background-position: 50% 0 !important;
  }

  .widescreen #header_team_name a i {
      margin-left: 1.5em;
  }

  .widescreen #user_menu {
      border-right: none;
  }

  header #menu_toggle {
      color: #ffffff;
  }

  header #header_team_nav {
      background: #282a2e;
      border: 1px solid #1d1f21;
  }

  header #header_team_nav li.active a {
      background: #282a2e;
      color: #e0e0e0;
  }

  header .header_btns a {
      color: #ffffff;
  }

  header .header_btns a .label {
      color: #398FFF;
  }

  header .vert_divider {
      border-left: 1px solid #1d1f21;
  }

  footer {
      background-color: #282a2e;
      border-color: #1d1f21;
      color: #e0e0e0;
  }

  footer ul a {
      color: #e0e0e0;
  }

  footer ul a:link,
  footer ul a:visited {
      color: #e0e0e0;
  }

  .plastic_row h3 {
      color: #e0e0e0;
  }

  .plastic_row h4 a {
      color: #e0e0e0;
  }

  .plastic_row .icon {
      color: #e0e0e0;
  }

  .plastic_row .chevron {
      color: #398FFF;
  }

  .plastic_row .description {
      color: #e0e0e0;
  }

  .plastic_row:active {
      background: #282a2e;
      border-color: #1d1f21;
  }

  .plastic_row:active .chevron {
      color: #e0e0e0;
  }

  html.no_touch .plastic_row:hover {
      background: #282a2e;
      border-color: #1d1f21;
  }

  html.no_touch .plastic_row:hover .chevron {
      color: #e0e0e0;
  }

  html.no_touch .pagination ul>li>a:hover {
      background-color: #1d1f21;
  }

  html.no_touch .pagination ul>.disabled>a:hover {
      background: #282a2e;
      color: #398FFF;
  }

  html.no_touch .pager li>a:hover,
  html.no_touch .pager li>a:focus {
      color: #cc6666;
  }

  .card,
  .tab_pane {
      background: #282a2e;
      border: 1px solid #1d1f21;
      color: #e0e0e0;
  }

  .card h3 a {
      color: #e0e0e0;
  }

  #page_contents .card {
      background: rgba(40, 42, 46, 0.8) !important;
  }

  #page_contents .card p {
      color: #e0e0e0;
  }

  .tab_set a.secondary {
      color: #ffffff;
  }

  .tab_set a.selected,
  .tab_set a.secondary.selected {
      background: #282a2e;
      border: 1px solid #1d1f21;
      border-bottom-color: #282a2e;
      color: #cc6666;
  }

  .tab_actions {
      background: #282a2e;
      border: 1px solid #1d1f21;
      border-color: #1d1f21;
  }

  .accordion_section {
      border-bottom-color: #282a2e;
  }

  .accordion_section h4 {
      color: #e0e0e0;
  }

  .accordion_section h4 a {
      color: #e0e0e0;
  }

  .no_touch .accordion_section h4 a:hover {
      color: #e0e0e0;
  }

  .accordion_section_fixed {
      border-bottom-color: #282a2e !important;
  }

  .pager li>a,
  .pager li>span {
      background-color: #282a2e;
      background-image: none;
      border-color: #282a2e;
      color: #ffffff;
  }

  .pager li.previous>a,
  .pager li.previous>span {
      background-position: 0;
      padding-right: 0;
      text-align: center;
  }

  .pager li.next>a,
  .pager li.next>span {
      background-position: 0;
      padding-left: 0;
      text-align: center;
  }

  .pager .disabled>a,
  .pager .disabled>span {
      color: #398FFF;
  }

  .pagination ul>li>a,
  .pagination ul>li>span {
      background: #282a2e;
      border: 1px solid #1d1f21;
      color: #e0e0e0;
  }

  .pagination ul>li>a:focus {
      background-color: #1d1f21;
  }

  .pagination ul>.active>a,
  .pagination ul>.active>span {
      background-color: #1d1f21;
  }

  .pagination ul>.disabled>span {
      background: #282a2e;
      color: #398FFF;
  }

  .pagination ul>.disabled>a {
      background: #282a2e;
      color: #ffffff;
  }

  .pagination ul>.disabled>a:focus {
      background: #282a2e;
      color: #cc6666;
  }

  .loading_hash_animation img {
      display: none;
  }

  .icon_search_close {
      color: #ffffff;
  }

  .icon_search_close:hover {
      color: #cc6666;
  }

  .help {
      border-top-color: #1d1f21;
      color: #398FFF;
  }

  .two_factor_option_app,
  .two_factor_option_sms,
  .configure-step1,
  .configure-step3 {
      display: none;
  }

  .two_factor_choice {
      background-color: #282a2e;
      border: 1px solid #373b41;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  }

  .two_factor_choice:hover {
      box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.15);
  }

  .two_factor_choice:hover .two_factor_link {
      color: #e0e0e0;
  }

  a.two_factor_choice {
      background-color: #282a2e;
      border: 1px solid #373b41;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  }

  a.two_factor_choice:link {
      background-color: #282a2e;
      border: 1px solid #373b41;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  }

  a.two_factor_choice:hover,
  a.two_factor_choice:link:hover {
      box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.15);
  }

  a.two_factor_choice:hover .two_factor_link,
  a.two_factor_choice:link:hover .two_factor_link {
      color: #e0e0e0;
  }

  .backup_codes {
      background: #1d1f21;
      border-color: #373b41;
      color: #e0e0e0;
  }

  #channel_specific_settings tr {
      border-top-color: #282a2e;
  }

  #channel_specific_settings tr.channel_override_row.muted td {
      background: rgba(40, 42, 46, 0.5);
  }

  #channel_specific_settings .extra_left_border {
      border-left-color: #282a2e;
  }

  #channel_specific_settings .extra_right_border {
      border-right-color: #282a2e;
  }

  #channel_specific_settings .revert_to_default {
      color: #398FFF;
  }

  #channel_specific_settings .revert_to_default:hover {
      color: #bf360c;
  }

  .admin_list_item {
      border-bottom-color: #282a2e;
      color: #398FFF;
  }

  .admin_list_item:hover {
      background-color: #282a2e;
  }

  .admin_list_item .admin_member_full_name,
  .admin_list_item .admin_member_real_name {
      color: #e0e0e0;
  }

  .admin_list_item .admin_member_type,
  .admin_list_item .admin_member_caret {
      color: #398FFF;
  }

  .admin_list_item .pill.group {
      background: #373b41;
  }

  .admin_list_item .two_factor_auth_badge:hover {
      background: #373b41;
  }

  .admin_list_item .inline_email:hover,
  .admin_list_item .inline_name:hover,
  .admin_list_item .inline_username:hover {
      background: none !important;
  }

  .admin_list_item.invite_item.bouncing {
      background: #969896;
  }

  .admin_list_item.invite_item.bouncing .email {
      color: #bf360c;
  }

  .admin_list_item.error,
  .admin_list_item.expanded,
  .admin_list_item.processing,
  .admin_list_item.success {
      background-color: #282a2e;
  }

  .admin_list_item.expanded .btn_outline {
      border-color: #282a2e;
      color: #e0e0e0 !important;
  }

  .admin_list_item.expanded .btn_outline:hover {
      border-color: #282a2e;
      color: #e0e0e0 !important;
  }

  .admin_list_item.expanded .sub_action {
      color: #ffffff;
  }

  .admin_list_item.expanded .sub_action:hover {
      color: #cc6666;
  }

  @ media screen and (max-width: 768px) {

      .admin_list_item.expanded .sub_action+.sub_action: hover::before,
      .admin_list_item.expanded .sub_action+.sub_action:hover::after {
          color: #ffffff;
      }
  }

  .billing_selection {
      border-color: #1d1f21;
      color: #e0e0e0 !important;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  }

  .billing_selection:hover {
      border-color: #969896;
  }

  .billing_selection.active {
      background: #373b41;
      border-color: #969896;
  }

  .billing_selection.billing_selection--refactor {
      border-color: #373b41;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  }

  .billing_selection.billing_selection--refactor:hover {
      border-color: #969896;
  }

  .billing_selection.billing_selection--refactor.active {
      background: #373b41;
      border-color: #969896;
  }

  .billing_selection .billing_selection__price {
      color: #e0e0e0;
  }

  #billing_contacts_container {
      background: #282a2e;
      border-top: 1px solid #1d1f21;
  }

  .billing_callout {
      background: none;
  }

  .billing_contact {
      border-bottom: 1px solid #282a2e;
  }

  table.billing tr:hover td {
      background: #282a2e;
  }

  .link_billing_statement {
      color: #e0e0e0 !important;
  }

  .link_invoice_id,
  .link_statement_id {
      color: #ffffff !important;
  }

  .billing_invoice tbody tbody tr {
      color: #e0e0e0 !important;
  }

  .billing_settings_label_name {
      color: #e0e0e0;
  }

  table tr {
      border-bottom-color: #282a2e;
  }

  table tr:first-child th:not(:only-of-type) {
      border-bottom-color: #1d1f21;
  }

  .slackbot_response_fieldset .delete_response {
      color: #398FFF;
  }

  .slackbot_response_fieldset .delete_response:hover {
      color: #bf360c;
  }

  .author_cell {
      color: #e0e0e0;
  }

  .message_cell.disabled {
      color: #398FFF;
  }

  #message_container #msg_limit {
      color: #e0e0e0;
  }

  .inactive {
      background-image: none;
  }

  .file_header .title a {
      color: #ffffff;
  }

  .file_header .title a:hover {
      color: #cc6666;
  }

  .file_actions_cog {
      color: #ffffff !important;
  }

  .file_actions_cog:hover {
      color: #cc6666 !important;
  }

  .file_reference .icon,
  .file_list_item .icon,
  .file_preview {
      border: 2px solid #1d1f21;
  }

  .action_cog {
      color: #ffffff;
  }

  .action_cog i {
      color: #ffffff;
  }

  html.no_touch .action_cog:hover {
      color: #cc6666;
  }

  html.no_touch .action_cog:hover i {
      color: #cc6666;
  }

  .drop_zone {
      border-color: #969896;
      color: #e0e0e0;
  }

  .drop_zone_text {
      color: #e0e0e0;
  }

  .widescreen:not(.nav_open) {
      color: #e0e0e0;
  }

  @media only screen and (min-width: 1441px) {
      .widescreen:not(.nav_open) nav#site_nav {
          background: rgba(40, 42, 46, 0.9);
      }
  }

  .widescreen:not(.nav_open) nav#site_nav h3 {
      color: #e0e0e0;
  }

  .widescreen:not(.nav_open) nav#site_nav ul a {
      color: #ffffff;
  }

  .widescreen:not(.nav_open) nav#site_nav ul a:link,
  .widescreen:not(.nav_open) nav#site_nav ul a:visited,
  .widescreen:not(.nav_open) nav#site_nav ul a:hover,
  .widescreen:not(.nav_open) nav#site_nav ul a:active {
      color: #cc6666;
  }

  .widescreen:not(.nav_open) nav#site_nav #user_menu_name {
      color: #398FFF;
  }

  nav#site_nav {
      background: #282a2e;
  }

  nav#site_nav #user_menu_contents:hover {
      background: #282a2e;
      color: #e0e0e0;
  }

  header {
      background: #282a2e;
  }

  header #header_team_nav li a {
      color: #e0e0e0;
  }

  header #header_team_nav li a:hover {
      background: #282a2e;
      color: #e0e0e0;
  }

  header #header_team_nav li a .team_icon.ts_icon_plus {
      background: #1d1f21;
      color: #398FFF;
  }

  header #header_team_nav #add_team_option {
      border-top: 1px solid #1d1f21;
  }

  html.no_touch header #header_team_nav li a {
      color: #e0e0e0;
  }

  html.no_touch header #header_team_nav li a:hover {
      background: #282a2e;
      color: #e0e0e0;
  }

  html.no_touch header #header_team_name a:hover,
  html.no_touch header #menu_toggle:hover {
      color: #cc6666;
  }

  html.no_touch header .header_btns a:hover {
      color: #cc6666;
  }

  html.no_touch header .header_btns a:hover .label {
      color: #398FFF;
  }

  nav#site_nav h3,
  #header_team_name,
  header #header_team_name a {
      color: #ffffff;
  }

  nav#site_nav #footer_nav a,
  #header_team_name:hover .fa-caret-down,
  .widescreen:not(.nav_open) nav#site_nav #footer_nav a {
      color: #cc6666;
  }

  #home_footer a {
      color: #cc6666;
  }

  .admin_pref:not(:first-of-type) {
      border-top-color: #282a2e;
  }

  .admin_pref.locked {
      background-color: rgba(191, 54, 12, 0.2);
  }

  .admin_pref .admin_pref_locked_label {
      color: #398FFF;
  }

  #stats_too_soon {
      height: 500px;
  }

  #stats_too_soon img {
      display: none;
  }

  #stats_limited {
      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #1d1f21 65%);
      bottom: 0;
      height: 480px;
      position: absolute;
      width: 100%;
  }

  #stats_disclaimer,
  #stats_too_soon_copy h3 {
      color: #ffffff;
  }

  #stats_too_soon_copy p {
      color: #e0e0e0;
  }

  #all_time,
  #third_row.column,
  #second_row.column {
      background: #282a2e;
  }

  .stats_integrations_container .icon {
      background: #282a2e;
  }

  .stats_integrations_container .icon_plus {
      border-color: #398FFF;
      color: #398FFF;
  }

  #last_day p.summary {
      color: #e0e0e0;
  }

  #last_day p.summary strong {
      color: #e0e0e0;
  }

  .tooltip-inner {
      background-color: #969896;
      color: #e0e0e0;
  }

  .tooltip.top .tooltip-arrow,
  .tooltip.top-left .tooltip-arrow {
      border-top-color: #969896;
  }

  .tooltip.right .tooltip-arrow {
      border-right-color: #969896;
  }

  .tooltip.left .tooltip-arrow {
      border-left-color: #969896;
  }

  .tooltip.bottom .tooltip-arrow {
      border-bottom-color: #969896;
  }

  .api #header_logo img {
      display: none;
  }

  body.api header .header_links a {
      color: #e0e0e0;
  }

  body.api header .header_links a.active {
      background: #373b41;
  }

  body.api pre {
      overflow-x: auto;
  }

  body.api pre code {
      color: #e0e0e0;
  }

  body.api #page_contents .card {
      background: #282a2e;
  }

  body.api .scopes_to_methods code {
      color: #e0e0e0;
  }

  body.api .scopes_to_methods .selected code {
      color: #bf360c;
  }

  body.api .scopes_to_methods li {
      color: #e0e0e0;
  }

  body.api .scopes_to_methods .selected li {
      color: #e0e0e0;
  }

  body.api .section_title {
      border-bottom: 2px solid #282a2e;
  }

  body.api .example {
      border: 1px solid #1d1f21;
  }

  body.api .example h5 {
      background-color: #1d1f21;
      color: #e0e0e0;
  }

  body.api .alert {
      background: #373b41;
  }

  body.api .hljs {
      background-image: none;
  }

  body.api .hljs-keyword,
  body.api .hljs-selector-tag,
  body.api .hljs-subst {
      color: #ce93d8;
  }

  body.api .hljs-number {
      color: #a5d6a7;
  }

  body.api .hljs-literal,
  body.api .hljs-tag .hljs-attr {
      color: #536dfe;
  }

  body.api .hljs-variable {
      color: #9fa8da;
  }

  body.api .hljs-template-variable {
      color: #c5e1a5;
  }

  body.api .hljs-comment {
      color: #ffcc80;
  }

  body.api .hljs-doctag,
  body.api .hljs-string {
      color: #ef9a9a;
  }

  body.api .hljs-section,
  body.api .hljs-selector-id,
  body.api .hljs-title {
      color: #ffab91;
  }

  body.api .hljs-meta {
      color: #eee;
  }

  body.api .hljs-class .hljs-title,
  body.api .hljs-type {
      color: #eee;
  }

  body.api .hljs-built_in,
  body.api .hljs-builtin-name {
      color: #b39ddb;
  }

  body.api .hljs-tag {
      color: #a5d6a7;
  }

  body.api .hljs-attribute,
  body.api .hljs-name {
      color: #40c4ff;
  }

  body.api .hljs-bullet,
  body.api .hljs-symbol {
      color: #9fa8da;
  }

  body.api .hljs-quote {
      color: #b0bec5;
  }

  body.api .hljs-link,
  body.api .hljs-regexp {
      color: #ffffff;
  }

  body.api span.btn {
      background-color: #282a2e;
  }

  body.api span.deprecation,
  body.api span.warning {
      background-color: #bf360c;
      border-color: #bf360c;
  }

  nav#api_nav {
      background: transparent;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  }

  #api_nav .footer_nav a {
      color: #ffffff;
  }

  #api_nav .footer_nav a:hover {
      color: #cc6666;
  }

  #api_nav .footer_nav .footer_signature {
      color: #bf360c;
  }

  .api_articles .api_articles_section {
      border-bottom-color: #282a2e;
  }

  .api_articles .article_tag_count {
      color: #398FFF;
  }

  .api.feature_related_content #api_related_content h2 {
      color: #e0e0e0;
  }

  .api.feature_related_content #api_related_content .article_link_title_wrapper {
      color: #ffffff;
  }

  .tab_menu {
      background-color: #282a2e;
  }

  .tab_menu.grey {
      background-color: #282a2e;
  }

  .tab_menu .tab {
      color: #e0e0e0;
  }

  .tab_menu .tab:hover {
      box-shadow: inset 0 -4px 0 0 rgba(191, 54, 12, 0.4);
  }

  .tab_menu .tab.active,
  .tab_menu .tab:active,
  .tab_menu .tab:focus {
      box-shadow: inset 0 -4px 0 0 #bf360c;
      color: #e0e0e0;
  }

  .tab_menu .tab:disabled {
      color: #398FFF;
  }

  .page_faq h3,
  .page_scim h3 {
      background-color: #282a2e;
  }

  .application_config aside {
      color: #398FFF;
  }

  .menu_launcher,
  .menu_launcher_large {
      background-color: #373b41;
      border: 1px solid #282a2e;
      color: #e0e0e0;
  }

  .menu_launcher_large {
      border: 1px solid #282a2e;
  }

  .menu.avatar_menu ul li:hover ts-icon {
      background: #373b41;
      color: #e0e0e0;
  }

  .menu.avatar_menu ul li a {
      color: #e0e0e0;
  }

  .menu.avatar_menu ul li a img,
  .menu.avatar_menu ul li a ts-icon {
      background-color: #373b41;
      color: #e0e0e0;
  }

  #page .media_list {
      background-color: #282a2e;
      border: 1px solid #373b41;
  }

  #page .media_list>li+li::before {
      border-top: 1px solid #373b41;
  }

  #page .media_list>li.interactive a {
      color: #e0e0e0;
  }

  #page .media_list>li.interactive a:focus,
  #page .media_list>li.interactive a:hover {
      background: #373b41;
      border-color: #969896;
  }

  #page .media_list>li .media_list_text {
      color: #e0e0e0;
  }

  #page .media_list.media_list_with_arrows a::before {
      color: #398FFF;
  }

  #page .media_list_title {
      color: #e0e0e0;
  }

  #page .media_list_subtitle {
      color: #398FFF;
  }

  #page .sidebar_menu_list_item {
      color: #e0e0e0;
  }

  #page .sidebar_menu_list_item.is_active {
      background-color: #282a2e;
      border-color: #282a2e;
      color: #e0e0e0;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
  }

  #page .sidebar_menu_list_item.is_active a {
      color: #e0e0e0;
  }

  #page .sidebar_menu_list_item:not(.is_active):hover {
      background-color: #282a2e;
      border-color: #282a2e;
  }

  #page .sidebar_menu_list_item a {
      color: #e0e0e0;
  }

  #page ul.breadcrumbs li {
      color: #398FFF;
  }

  #page ul.breadcrumbs li:not(:first-child)::before {
      color: #398FFF;
  }

  #page ul.small_arrow_list li a {
      color: #e0e0e0;
  }

  #page ul.small_arrow_list li a:hover {
      background-color: #373b41;
  }

  #page ul.small_arrow_list li a::after {
      color: #e0e0e0;
  }

  #page ul.small_arrow_list li+li a {
      border-top: 1px solid transparent;
  }

  #page .tag {
      background-color: #1d1f21;
      border: 1px solid #282a2e;
  }

  #page .tag:hover {
      background-color: #373b41 !important;
  }

  .apps_directory .app_card,
  .apps_directory .large_app_card {
      background-color: #282a2e;
      border: 1px solid #282a2e;
  }

  nav.top.persistent ul a {
      color: #e0e0e0;
  }

  nav.top.apps_nav {
      background: transparent;
  }

  nav.top.apps_nav.persistent .nav_title {
      border-color: #969896;
  }

  nav.top.apps_nav.clear_nav .nav_title a {
      color: #e0e0e0;
  }

  nav.top.apps_nav .nav_title a {
      color: #e0e0e0;
  }

  nav.top.apps_nav ul a.active {
      color: #cc6666;
  }

  .plastic_typeahead {
      background: #282a2e;
      border: 1px solid #282a2e;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  }

  .plastic_typeahead_item {
      color: #e0e0e0;
  }

  .plastic_typeahead_item+.plastic_typeahead_item {
      border-top: 1px solid #373b41;
  }

  .plastic_typeahead_item:not(.plastic_typeahead_item_no_results).is_active {
      background-color: #282a2e;
      border-top-color: #282a2e;
      color: #e0e0e0;
  }

  .plastic_typeahead_item:not(.plastic_typeahead_item_no_results).is_active ts-icon {
      color: #398FFF;
  }

  .plastic_typeahead_item:not(.plastic_typeahead_item_no_results):not(.is_active):hover {
      background: #1d1f21;
      border-color: #373b41;
  }

  .plastic_typeahead_item:not(.plastic_typeahead_item_no_results):not(.is_active):hover+.plastic_typeahead_item {
      border-color: #373b41;
  }

  a.plastic_typeahead_item {
      color: #e0e0e0;
  }

  .apps_typeahead_item_media {
      background: #1d1f21;
  }

  .search_input_container .search_input:focus~.icon_search_input {
      color: #e0e0e0;
  }

  .icon_search_input {
      color: #398FFF;
  }

  .quote_block {
      color: #e0e0e0;
  }

  .quote_block::before {
      background-color: #373b41;
  }

  .well {
      background: #1d1f21;
      border-color: #181a1c;
      color: #e0e0e0;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  }

  .service_breadcrumbs li .ts_icon,
  .service_breadcrumbs li span {
      color: #398FFF;
  }

  .downloads_header {
      background-color: #969896;
  }

  .downloads_header .welcome .meta {
      color: #e0e0e0;
  }

  .downloads_header .welcome .meta a {
      color: #e0e0e0;
  }

  .downloads_header .welcome .meta .pipe_sep {
      background-color: rgba(0, 0, 0, 0.25);
  }

  .downloads_header select[name=build_variant] {
      color: #e0e0e0;
  }

  .stay_in_sync .card {
      background-color: #282a2e;
      border-color: #1d1f21;
  }

  .stay_in_sync .card h2 {
      color: #e0e0e0;
  }

  .stay_in_sync .other_links {
      color: #398FFF;
  }

  .stay_in_sync .other_links a {
      color: #e0e0e0;
  }

  .sms_form .sms_number_container::before {
      color: #398FFF;
  }

  .sms_form input[name=sms_number] {
      color: #e0e0e0;
  }

  .sms_form input[type=submit] {
      background-color: #282a2e;
      color: #ffffff;
  }

  .sms_form .sms_select_container .lazy_filter_select {
      background-color: #373b41;
  }

  .go_button {
      background-color: #282a2e;
      color: #ffffff;
  }

  nav.top.fixed {
      display: none;
  }

  #api_nav h5 {
      color: #e0e0e0;
  }

  #api_nav #api_sections ul li a {
      border-bottom-color: #1d1f21;
      color: #398FFF;
  }

  #api_nav #api_sections ul li a:hover {
      color: #e0e0e0;
  }

  #api_nav #api_sections ul li a.active {
      background: #282a2e;
      color: #398FFF;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  }

  #api_nav #api_sections ul li a.active:hover {
      background: #282a2e;
      color: #398FFF;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  }

  .col.span_1_of_2.bordered {
      background-color: #282a2e;
  }

  body.oauth_page {
      background: #282a2e;
  }

  body.oauth_page .oauth_header {
      background: #282a2e !important;
  }

  body.oauth_page .alert {
      border-color: #772207;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  }

  body.oauth_page .alert.alert_warning {
      border-left-color: #8f2809;
  }

  body.oauth_page .alert.alert_warning .bottom_border {
      border-color: #8f2809;
  }

  body.oauth_page .alert_text {
      background: #bf360c;
      color: #e0e0e0;
  }

  body.oauth_page .alert_text i:hover {
      color: #e0e0e0 !important;
  }

  body.oauth_page .darken_hover:hover {
      color: #398FFF !important;
  }

  body.oauth_page .team:hover {
      background: #1d1f21;
      border: 1px solid #373b41 !important;
  }

  body.oauth_page .safe_scopes {
      border-top: 1px solid #282a2e;
  }

  body.oauth_page .yolk_orange,
  body.oauth_page .subtle_silver {
      color: #e0e0e0 !important;
  }

  body.oauth_page .top_border {
      border-color: #282a2e;
  }

  ts-rocket {
      color: #e0e0e0;
  }

  ts-rocket a {
      color: #ffffff;
  }

  ts-rocket a caret::before {
      background-color: #282a2e;
      border-color: #282a2e;
  }

  ts-rocket hr {
      border-color: #282a2e;
  }

  ts-rocket code,
  ts-rocket .pre.text,
  ts-rocket>div>pre {
      background-color: #1d1f21;
  }

  ts-rocket .blockquote.text::before,
  ts-rocket>div>blockquote::before {
      background-color: #1d1f21;
  }

  ts-rocket .cl.text {
      background-color: #1d1f21;
      border-bottom: 1px solid #282a2e;
  }

  ts-rocket .cl.text .checkbox.checked+li {
      color: #398FFF;
  }

  ts-rocket>div>.checklist {
      background-color: #1d1f21;
      border-bottom: 1px solid #282a2e;
  }

  ts-rocket>div>.checklist .checkbox.checked+li {
      color: #398FFF;
  }

  ts-rocket>div>.checklist li::before {
      background: #282a2e;
  }

  ts-rocket>div>.checklist li.checked {
      color: #398FFF;
  }

  ts-rocket .unfurl .unfurl-container {
      background-color: #1d1f21;
  }

  ts-rocket .unfurl .unfurl-container.unfurl-render-failed {
      background-color: rgba(191, 54, 12, 0.1);
  }

  ts-rocket .unfurl .attachment_bar {
      background-color: #282a2e !important;
  }

  ts-rocket .unfurl .unfurl-remove::before {
      color: #398FFF;
  }

  ts-rocket .unfurl .unfurl-remove:hover::before {
      color: #e0e0e0;
  }

  ts-rocket .unfurl.selected .unfurl-container {
      background-color: rgba(150, 152, 150, 0.5);
  }

  ts-rocket .unfurl.selected .unfurl-container .attachment_bar {
      background-color: rgba(150, 152, 150, 0.5) !important;
  }

  ts-rocket caret::before {
      background-color: #282a2e;
      border: 1px solid #282a2e;
  }

  ts-rocket carriage {
      background-color: rgba(150, 152, 150, 0.5);
  }

  ts-rocket selection {
      background-color: rgba(150, 152, 150, 0.5);
  }

  ts-rocket selection::after,
  ts-rocket selection::before {
      background-color: rgba(150, 152, 150, 0.5);
  }

  ts-rocket ime {
      background-color: rgba(150, 152, 150, 0.5);
  }

  ts-rocket .hr.selected hr {
      box-shadow: 0 0 0 5px rgba(150, 152, 150, 0.5);
  }

  .focusing_input_field space.inactive .unfurl.selected .unfurl-container {
      background-color: #1d1f21;
  }

  nav {
      background: #282a2e;
  }

  nav .space {
      background-color: #282a2e;
      box-shadow: 0 1px rgba(0, 0, 0, 0.25), 0 2px rgba(0, 0, 0, 0.15), 0 3px rgba(0, 0, 0, 0.15);
  }

  nav .space::after {
      border-left: 1px solid #373b41;
  }

  nav .comments {
      background-color: #282a2e;
  }

  nav .space_buttons .btn_outline {
      background-color: #373b41;
  }

  nav .space_buttons .btn_outline::after {
      border-color: #373b41;
  }

  nav .space_btn_star {
      background: none;
      border: 0;
  }

  nav .space_btn_star:hover {
      background: none !important;
  }

  nav .space_btn_edit {
      background: #373b41;
  }

  nav .space_btn_edit.editing {
      background: #969896;
  }

  nav .star_info {
      color: #398FFF;
  }

  nav #space_status {
      border-left: 1px solid #373b41;
      color: #398FFF;
  }

  nav #space_status.slightly_concerned {
      color: #bf360c;
  }

  nav #edit_status {
      color: #398FFF;
  }

  nav .comments_open.unread span.notif {
      background-color: #bf360c;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.15);
  }

  nav .comments_close {
      color: #398FFF;
  }

  nav .comments_close:hover::before {
      color: #ffffff !important;
  }

  ts-space header {
      background: transparent;
  }

  ts-space header .owner_detail .file_title_header,
  ts-space header .owner_detail .inline-edit {
      color: #e0e0e0;
  }

  ts-space header .owner_detail .inline-edit {
      background: none;
  }

  ts-space header .owner_detail .inline-edit::-webkit-input-placeholder {
      color: #e0e0e0;
  }

  ts-space header .owner_detail .inline-edit::-moz-placeholder {
      color: #e0e0e0;
  }

  ts-space header .owner_detail .inline-edit:focus::-webkit-input-placeholder {
      color: #398FFF;
  }

  ts-space header .owner_detail .inline-edit:focus::-moz-placeholder {
      color: #398FFF;
  }

  ts-space header .owner_detail ::selection,
  ts-space header .owner_detail ::-moz-selection {
      background-color: rgba(150, 152, 150, 0.5);
  }

  ts-space header .owner_detail small {
      color: #398FFF;
  }

  ts-space header .divider {
      border-top: 1px solid #373b41;
  }

  ts-space a.feedback {
      color: #e0e0e0;
      text-shadow: -1px -1px 0 #1d1f21, -1px 1px 0 #1d1f21, 1px 1px 0 #1d1f21, 1px -1px 0 #1d1f21;
  }

  ts-space a.feedback:hover {
      background-color: #282a2e;
      color: #e0e0e0;
  }

  comments {
      box-shadow: inset 1px 0 0 rgba(0, 0, 0, 0.25);
  }

  #space_alert {
      background-color: #1d1f21;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  }

  #space_alert.error {
      background-color: #bf360c;
  }

  #space_alert span#space_alert_text {
      color: #e0e0e0;
  }

  #space_alert a {
      color: #ffffff;
  }

  #space_alert button#space_alert_close::before {
      color: #398FFF;
  }

  #space_alert button#space_alert_close:hover::before {
      color: #398FFF;
  }

  #space_alert .btn_outline.btn_transparent {
      background-color: #373b41 !important;
      color: #e0e0e0 !important;
  }

  #space_alert .btn_outline.btn_transparent::after {
      border-color: #373b41;
  }

  #space_find_bar {
      background-color: #282a2e;
      border-bottom: 1px solid rgba(150, 152, 150, 0.1);
      border-left: 1px solid rgba(150, 152, 150, 0.07);
      border-right: 1px solid rgba(150, 152, 150, 0.07);
      box-shadow: 0 1px rgba(0, 0, 0, 0.15);
  }

  #space_find_bar #space_find_info.no_matches {
      color: #bf360c;
  }

  #space_find_bar #space_find_next .ts_icon {
      background-color: #373b41;
  }

  #space_find_bar #space_find_next .ts_icon::before,
  #space_find_bar #space_find_next .ts_icon:hover::before {
      color: #e0e0e0;
  }

  #space_find_bar #space_find_next:hover .ts_icon {
      background-color: #969896;
  }

  #space_find_bar #space_find_close::before {
      color: #398FFF;
  }

  #space_find_bar #space_find_close:hover::before {
      color: #398FFF;
  }

  #connected_members .connected_members_count {
      color: #e0e0e0;
      text-shadow: -1px -1px 0 #1d1f21, -1px 1px 0 #1d1f21, 1px 1px 0 #1d1f21, 1px -1px 0 #1d1f21;
  }

  #connected_members .toggle_more_members_popover {
      background: #282a2e;
      color: #398FFF;
  }

  #connected_members_overflow_popover {
      border-bottom: 1px solid #282a2e;
      border-left: 1px solid rgba(29, 31, 33, 0.11);
      border-right: 1px solid rgba(29, 31, 33, 0.11);
      border-top: 1px solid rgba(29, 31, 33, 0.11);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  #connected_members_overflow_popover .arrow::after {
      background-color: #282a2e;
  }

  #connected_members_overflow_popover .arrow_shadow::after {
      background-color: #282a2e;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5), 0 0 2px rgba(0, 0, 0, 0.5);
  }

  #connected_members_overflow_popover .monkey_scroll_wrapper {
      background: #282a2e;
  }

  #connection_status #connection_label {
      color: #e0e0e0;
      text-shadow: -1px -1px 0 #1d1f21, -1px 1px 0 #1d1f21, 1px 1px 0 #1d1f21, 1px -1px 0 #1d1f21;
  }

  #shortcuts_spaces_dialog {
      background-color: rgba(29, 31, 33, 0.8);
      text-shadow: 0 1px 1px rgba(40, 42, 46, 0.7);
  }

  #shortcuts_spaces_dialog .modal-body {
      color: #e0e0e0;
  }

  #shortcuts_spaces_dialog .col .keyboard {
      background-color: #969896;
      border-bottom: 2px solid #373b41;
      box-shadow: 0 1px 2px rgba(29, 31, 33, 0.5);
      color: #e0e0e0;
  }

  #shortcuts_spaces_dialog .close:hover {
      background-color: #969896;
  }

  #shortcuts_spaces_dialog .close .ts_icon::before {
      color: #398FFF !important;
  }

  .textstyle_menu .arrow-shadow::after {
      background-color: #282a2e;
      box-shadow: 0 0 0 1px #282a2e;
  }

  .textstyle_menu .arrow::after {
      background-color: #282a2e;
  }

  .textstyle_menu .content {
      background-color: #282a2e;
      box-shadow: 0 0 0 1px #282a2e, 0 0 1px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.25);
  }

  .textstyle_menu.link .arrow-shadow::after {
      background-color: #282a2e;
  }

  .textstyle_menu.link .arrow::after {
      background-color: #282a2e;
  }

  .textstyle_menu.link .content {
      background-color: #282a2e;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.25);
  }

  .textstyle_menu.link .content input[type=text] {
      background-color: #373b41;
  }

  .textstyle_menu.link .content>a.link {
      color: #ffffff;
  }

  .textstyle_menu.link .content ::-webkit-input-placeholder,
  .textstyle_menu.link .content ::-moz-placeholder {
      color: #398FFF;
  }

  .textstyle_menu.link .content .buttons a.item.active,
  .textstyle_menu.link .content .buttons a.item:hover {
      background-color: #282a2e;
  }

  .textstyle_menu .buttons a:hover,
  .textstyle_menu.style a:hover {
      border: 1px solid #373b41;
  }

  .textstyle_menu .buttons a.active,
  .textstyle_menu.style a.active {
      background-color: #373b41;
      border: 1px solid #969896;
  }

  .textstyle_menu.style a.deformat::before {
      border-left: 1px solid #373b41;
  }

  .textstyle_menu .buttons a.link_unfurl:not(.unfurl_pending) span::before {
      color: #398FFF;
  }

  .para_menu .insert .tip {
      color: #398FFF;
  }

  .para_menu .insert .tooltip .arrow-shadow::after {
      background-color: #282a2e;
      box-shadow: 0 0 0 1px #373b41;
  }

  .para_menu .insert .tooltip .arrow::after {
      background-color: #282a2e;
  }

  .para_menu .insert .tooltip .content {
      background-color: #282a2e;
      box-shadow: 0 0 0 1px #373b41, 0 0 1px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.25);
  }

  .para_menu .format .options .arrow-shadow::after {
      background-color: #282a2e;
      box-shadow: 0 0 0 1px #373b41;
  }

  .para_menu .format .options .arrow::after {
      background-color: #282a2e;
  }

  .para_menu .format .options .arrow-shadow.bottom::after {
      box-shadow: 1px 1px 0 0 #373b41;
  }

  .para_menu .format .options .content {
      background-color: #282a2e;
      box-shadow: 0 0 0 1px #373b41, 0 0 1px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.25);
  }

  .para_menu .format .options .content ul:first-child {
      border-bottom: 1px solid #282a2e;
  }

  .para_menu .format .options.show .tooltip>div {
      background-color: #282a2e;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
      color: #e0e0e0;
  }

  .para_menu .format .options.show .tooltip span {
      background-color: #373b41;
  }

  .para_menu .options a:hover {
      border: 1px solid #373b41;
  }

  .para_menu .options a.active {
      background-color: #373b41;
      border: 1px solid #282a2e;
  }

  body>.status .current_status {
      background: #1d1f21;
  }

  body>.section.main {
      background: #282a2e;
      box-shadow: none;
  }

  .calendar_incident {
      border-top: 1px solid #969896;
  }

  .calendar_day.future {
      background-color: #969896;
  }

  .incident_update .time {
      color: #e0e0e0;
  }

  ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply),
  ts-message.message--focus:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply),
  ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply) {
      background: transparent;
  }

  .c-member__display-name,
  .c-team__display-name,
  .c-usergroup__handle {
      color: #e0e0e0;
      font-weight: 700;
  }

  .reply_input_container .ql-container {
      background-color: #3D3C40;
      border: 1px solid #3D3C40;
      border-radius: 0 0 10px 10px;
  }

  .app_preview_link_slug.ts_tip,
  .internal_member_link.ts_tip,
  .internal_user_group_link.ts_tip,
  ts-mention.ts_tip {
      color: #0056a3;
  }

  .feature_sli_file_search #search_results_container .heading {
      background-color: #373b41;
      color: #ffffff;
  }

  .feature_sli_file_search #search_results_container #search_options {
      background-color: #373b41;
      border-top: none;
      color: #ffffff;
  }

  #flex_contents .heading_text {
      color: #ffffff;
  }

  .feature_sli_file_search #search_results.all .top_search_results .search_message_result {
      background-color: #282a2e;
      border: none !important;
  }

  .feature_sli_file_search #search_results.all .search_message_result,
  .feature_sli_file_search #search_results.messages .search_message_result {
      background-color: #282a2e;
      border: none !important;
  }

  .feature_sli_file_search #search_results.all,
  .feature_sli_file_search #search_results.messages {
      background-color: #373b41;
  }

  #search_filters .tab {
      background: #282a2e;
  }

  .feature_sli_file_search #search_filters.all #filter_all {
      color: #ffffff;
      border-bottom: 4px solid #2ea664;
  }

  .feature_sli_file_search #search_results.all .search_result_with_extract.last_extract_message_in_group,
  .feature_sli_file_search #search_results.all .search_result_with_extract.last_extract_message_in_group:hover,
  .feature_sli_file_search #search_results.messages .search_result_with_extract.last_extract_message_in_group,
  .feature_sli_file_search #search_results.messages .search_result_with_extract.last_extract_message_in_group:hover {
      border-bottom: 1px solid #373b41;
  }

  .feature_sli_file_search #search_results.all .search_result_with_extract.first_extract_message_in_group,
  .feature_sli_file_search #search_results.all .search_result_with_extract.first_extract_message_in_group:hover,
  .feature_sli_file_search #search_results.all .search_result_with_extract:first-child,
  .feature_sli_file_search #search_results.all .search_result_with_extract:first-child:hover,
  .feature_sli_file_search #search_results.messages .search_result_with_extract.first_extract_message_in_group,
  .feature_sli_file_search #search_results.messages .search_result_with_extract.first_extract_message_in_group:hover,
  .feature_sli_file_search #search_results.messages .search_result_with_extract:first-child,
  .feature_sli_file_search #search_results.messages .search_result_with_extract:first-child:hover {
      border-top: 1px solid #373b41;
  }

  .ql-container.texty_single_line_input .ql-editor {
      color: #fff;
  }

  .feature_sli_file_search #search_results_loading {
      background-color: #373b41;
  }

  .feature_sli_file_search #search_results .file_list_item {
      background-color: #282a2e;
      border: 1px solid #282a2e !important;
  }

  .search_message_limit {
      border: 1px solid #282a2e;
      background-color: #282a2e;
  }

  .feature_sli_file_search #search_results.all .team_result {
      border: 1px solid #282a2e;
      background-color: #282a2e;
  }

  a.c-tabs__tab--plastic.c-tabs__tab--active,
  a.c-tabs__tab--plastic:active,
  a.c-tabs__tab--plastic:focus {
      color: #999;
  }

  #permission_scopes_selection_table .permission_scopes_table_row {
      border-bottom: 1px solid #373B41;
  }

  .off_white_bg {
      background-color: #373B41 !important;
  }

  .lazy_filter_select.single.filter_in_list_style .lfs_list_container .lfs_item,
  .lazy_filter_select.single.filter_in_list_style .lfs_value .lfs_item {
      color: #f4f4f4;
  }

  .btn.btn_attachment {
      background-color: #373b41;
  }

  .lfs_list .lfs_item.single {
      color: #373b41 !important;
  }

  #edit_topic_inner:before {
      background: #3A3E43;
      border: 1px solid #3A3E43;
  }

  .c-message_list__day_divider__label__pill {
      background: #282a2e;
      color: #ccc;
  }

  .p-message_pane .c-message_list:not(.c-virtual_list--scrollbar):before,
  .p-message_pane .c-message_list.c-virtual_list--scrollbar>.c-scrollbar__hider:before {
      border-bottom: 1px solid #3A3E43;
      background: #282a2e;
  }

  .c-message__body {
      color: #e0e0e0;
  }

  .c-message--light .c-message__sender .c-message__sender_link {
      color: #fff;
  }

  .c-message:hover:not(.c-message--highlight):not(.c-message--standalone):not(.c-message--pinned):not(.c-message--ephemeral):not(.c-message--custom_response):not(.c-message--starred):not(.c-message--sli_highlight),
  .c-message--hover:not(.c-message--highlight):not(.c-message--standalone):not(.c-message--pinned):not(.c-message--ephemeral):not(.c-message--custom_response):not(.c-message--starred):not(.c-message--sli_highlight),
  .c-message--focus:not(.c-message--highlight):not(.c-message--standalone):not(.c-message--pinned):not(.c-message--ephemeral):not(.c-message--custom_response):not(.c-message--starred):not(.c-message--sli_highlight) {
      /* background-color: hsl(220, 7%, 16%); */
      background-color: #232425;
  }

  .c-message_attachment {
      color: #e0e0e0;
  }

  .c-message_attachment__author {
      color: #fff;
  }

  .c-snippet__code .CodeMirror {
      color: #e0e0e0;
  }

  .c-snippet__code .CodeMirror-code>div:before {
      border-right: 1px solid #3A3E43;
      background-color: #3A3E43;
  }

  .c-file_container {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .c-message__reply_bar:hover,
  .c-message__reply_bar--focus {
      background-color: transparent;
      border-color: transparent;
  }

  .c-message__reply_bar:hover .c-message__reply_bar_view_thread,
  .c-message__reply_bar--focus .c-message__reply_bar_view_thread {
      background-color: transparent;
  }

  #flex_contents .heading {
      border-bottom: .0625rem solid transparent;
  }

  .flex_pane_showing #col_flex {
      border-left: 1px solid #3A3E43;
  }

  .channel_header,
  #client_body:not(.onboarding):before {
      box-shadow: inset 1px 0 0 0 #3A3E43;
  }

  #col_messages,
  #footer {
      box-shadow: none;
  }

  .c-message_list__day_divider__line {
      border-top: 1px solid #3A3E43;
  }

  .c-reaction {
      background: transparent;
      border: 1px solid #4e5258;
  }

  .c-reaction__count {
      color: #ccc;
  }

  .c-message_attachment__border {
      background-color: #373A41;
  }

  .p-degraded_list__loading {
      color: #e0e0e0;
      background: #282a2e;
  }

  .c-message_actions__container {
      background: #1d1e20;
  }

  .c-message_actions__button:active {
      background: #1d1e20;
  }

  .c-message_actions__button:hover {
      color: #0198f2;
  }

  .c-message_actions__button {
      color: #c8c8c8;
  }

  .c-file_container--gradient::after {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0), #2C2E31);
  }

  .c-message_list__unread_divider__label {
      background: #282a2e;
  }

  .p-message_pane .p-message_pane__top_banners:not(:empty)+div .c-message_list:not(.c-virtual_list--scrollbar):before,
  .p-message_pane .p-message_pane__top_banners:not(:empty)+div .c-message_list.c-virtual_list--scrollbar>.c-scrollbar__hider:before {
      box-shadow: none;
  }

  .c-mrkdwn__mention,
  .c-mrkdwn__mention:hover,
  .c-mrkdwn__member--mention,
  .c-mrkdwn__member--mention:hover,
  .c-mrkdwn__broadcast--mention,
  .c-mrkdwn__broadcast--mention:hover,
  .c-mrkdwn__subteam--mention,
  .c-mrkdwn__subteam--mention:hover {
      background: #fff6d1;
      color: #6c6c6c;
  }

  .c-reaction--reacted .c-reaction__count {
      color: #21a6f5;
  }

  .c-message_attachment__pretext {
      color: #e0e0e0;
  }

  .c-reaction_add {
      background: transparent;
      border: 1px solid #4e5258;
  }

  .c-message_attachment__footer {
      color: #e0e0e0;
  }

  .c-message--pinned,
  .c-message--sli_highlight:not(.c-message--sli_highlight_negative),
  .c-message--starred {
      background: rgba(0, 0, 0, 0.1);
  }

  .c-message_list__unread_divider__label {
      color: #2b84d7;
  }

  .c-message_list__unread_divider__separator {
      border-color: #3A3E43;
  }

  .c-message--ephemeral {
      background: rgba(0, 0, 0, 0.1);
  }

  .p-message_pane__unread_banner__banner {
      display: none;
  }

  .c-message__bot_label {
      background: #1d1d1d;
  }

  .p-archives_banner {
      background: #282a2e;
  }

  .c-mrkdwn__member--link,
  .c-mrkdwn__subteam--link {
      background: #282a2e;
      color: #afd3e8 !important;
  }

  .c-mrkdwn__member--link:hover,
  .c-mrkdwn__subteam--link:hover {
      background: #151517;
      color: #afd3e8 !important;
      text-decoration: none;
  }

  .app_preview_link_slug,
  .internal_member_link,
  .internal_user_group_link,
  ts-mention {
      background: #151517;
      color: #afd3e8;
  }

  .app_preview_link_slug.ts_tip,
  .internal_member_link.ts_tip,
  .internal_user_group_link.ts_tip,
  ts-mention.ts_tip {
      color: #afd3e8;
  }

  #edit_topic_inner:not(.unable_to_post):before {
      background: #282a2e;
      border: 1px solid #282a2e;
  }

  ts-thread .collapse_inline_thread_container:hover,
  ts-thread .view_all_replies_container:hover {
      background-color: #151517;
  }

  .light_theme .new_reply_indicator:hover {
      background-color: #151517;
  }

  .ql-placeholder {
      color: #6c7384;
  }

  .p-message_pane__limited_history_foreword {
      color: #afd3e8;
      background: #282a2e;
  }

  .c-message_attachment__image {
      background-color: #EEe;
  }

  .c-file__title {
      color: #f0f1f6;
  }

  .c-file__slide--meta {
      background: #282a2e;
  }

  #flex_contents .subheading:not(:empty)#mentions_options {
      background: #242629;
      border-top: 0;
      border-bottom: 1px solid #242629;
  }

  .popover_menu .content {
      background-color: #1d1e20;
  }

  #autocomplete_menu.search_menu.unified .query_header,
  #chat_input_tab_ui.search_menu.unified .query_header {
      background-color: #1d1e20;
      color: #666871;
  }

  #autocomplete_menu.search_menu .results.unified .unified_autocomplete_item .text {
      color: #bdbdbd;
  }

  #autocomplete_menu.search_menu footer.unified {
      background-color: #343539;
  }

  #autocomplete_menu.search_menu .results.unified .unified_autocomplete_item .text .token {
      background-color: #34363a;
      color: #bbbec3;
  }

  #msg_input.ql-container .ql-placeholder {
      color: #a9b4d0;
  }

  .search_focused .search_form,
  .search_form:hover {
      border-color: #51565d;
  }

  .c-menu {
      background-color: #1d1e20;
  }

  .c-menu_separator__separator {
      border-bottom: 1px solid #2d2f31;
  }

  .c-menu_item__button,
  .c-menu_item__button:link,
  .c-menu_item__button:visited {
      color: #c8c8c8;
  }

  .c-scrollbar__bar {
      background: rgba(24, 24, 26, 0.75);
  }

  .menu.p-emoji_picker {
      background: #1d1e20;
  }

  .p-emoji_picker__footer {
      background: #1d1e20;
  }

  .p-emoji_picker__input_container {
      background: #282a2e;
  }

  .p-emoji_picker__group_tab--active {
      background: #1d1e20;
  }

  .p-emoji_picker__list_container {
      background: #282a2e;
  }

  .p-emoji_picker__heading {
      background: #282a2e;
      color: #666;
  }

  .p-emoji_picker__preview_text {
      background: #1d1e20;
  }

  .p-emoji_picker__content:hover .p-emoji_picker__skintone_btn_container {
      border: 1px solid #282a2e;
      background: #282a2e;
  }

  .p-emoji_picker__handy_rxns {
      border-bottom: 1px solid rgba(158, 158, 158, 0.15);
      display: none;
  }

  input[type="text"].p-emoji_picker__input:focus {
      box-shadow: none;
      border-color: #373b41;
  }

  .p-emoji_picker__input_container .no_touch input:hover {
      border-color: #373b41;
  }

  .supports_custom_scrollbar .ql-container:not(.texty_single_line_input) .ql-editor {
      color: #ddd;
  }

  .lfs_list .lfs_item.single {
      color: #acacac !important;
  }

  ts-thread ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).is_pinned,
  ts-thread ts-message.message--focus:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).is_pinned,
  ts-thread ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).is_pinned {
      background: #222325;
  }

  .c-dialog__content {
      background: #1d1e20;
  }

  .c-dialog__header {
      background: #1d1e20;
  }

  .c-dialog__footer {
      background: #1d1e20;
  }

  .c-dialog__header--overflow {
      border-bottom: 1px solid #333438;
  }

  .c-dialog__footer--overflow {
      border-top: 1px solid #333438;
  }

  .p-app_dialog__title_text {
      color: #c8c8c8;
  }

  .p-app_dialog_elements {
      color: #c8c8c8;
  }

  input[type=text],
  input[type=password],
  input[type=datetime],
  input[type=datetime-local],
  input[type=date],
  input[type=month],
  input[type=time],
  input[type=week],
  input[type=number],
  input[type=email],
  input[type=url],
  input[type=tel],
  input[type=color],
  input[type=search] {
      background-color: #373b41;
      border: 1px solid #373b41;
      color: #e0e0e0;
  }

  .c-input_select {
      border: 1px solid #373b41;
      background: #373b41;
      color: #e0e0e0;
  }

  input::placeholder {
      color: #606771 !important;
  }

  input[type="text"].c-input_text,
  input.c-input_text {
      border: 1px solid #373b41;
  }

  textarea.c-input_textarea {
      border: 1px solid #373b41;
      background: #373b41;
      color: #e0e0e0;
  }

  .c-button--outline-primary {
      background: #1d1e20;
      box-shadow: inset 0 0 0 1px #2e8e5a;
  }

  .c-button--outline-primary:hover {
      box-shadow: inset 0 0 0 1px #39ae6f;
  }

  .c-button--outline-primary:active {
      box-shadow: inset 0 0 0 1px #39ae6f;
  }

  .c-button--outline {
      background: #1d1e20;
      color: #e0e0e0;
      box-shadow: inset 0 0 0 1px #575757;
  }

  .c-button--outline:hover {
      color: #e0e0e0;
      box-shadow: inset 0 0 0 1px #828282;
  }

  .c-button--outline:active {
      background: rgba(215, 43, 63, 0.03);
      color: #e0e0e0;
      box-shadow: inset 0 0 0 1px #828282;
  }

  .c-app_label {
      color: #494f5b;
      background-color: #1d1e20;
  }

  input[type="text"].c-input_text,
  input.c-input_text {
      padding-top: 7px;
  }

  .c-button--medium {
      padding: 3px 16px 1px;
  }

  .c-button--outline-danger {
      background: #1d1e20;
      box-shadow: inset 0 0 0 1px #6b3c41;
      color: #ff7585;
  }

  .c-button--outline-danger:hover {
      box-shadow: inset 0 0 0 1px #9f5e65;
  }

  .c-button--outline-danger:active {
      box-shadow: inset 0 0 0 1px #9f5e65;
  }

  .c-button--outline:link,
  .c-button--outline:visited {
      color: #e0e0e0;
  }

  .c-message--highlight,
  .c-message--highlight_yellow_bg {
      background: transparent;
  }

  .c-message__editor__input {
      border: 1px solid #373b41;
      background-color: #373b41;
      color: #e0e0e0 !important;
  }

  .c-message__editor__input.focus {
      border: 1px solid #373b41;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);
  }

  .c-message__editor__input,
  #message_edit_container .message_input {
      border: 1px solid #373b41;
      background-color: #373b41;
      color: #e0e0e0 !important;
  }

  .c-message__editor__input.focus,
  #message_edit_container .message_input.focus {
      border: 1px solid #373b41;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);
  }

  .light_theme #message_edit_form p,
  .light_theme #message_edit_form span {
      color: #e0e0e0 !important;
  }

  ts-message.highlight:hover,
  ts-message.highlight {
      background: transparent;
  }

  ts-message .mention {
      background: #4e525a;
      border: 1px solid #4e525a;
      border-radius: 3px;
      color: #e0e0e0;
      padding: 0 3px;
  }

  .app_preview_link_slug.mention,
  .internal_member_link.mention,
  .internal_user_group_link.mention,
  ts-mention.mention {
      background: #4e525a;
  }

  .c-mrkdwn__mention,
  .c-mrkdwn__mention:hover,
  .c-mrkdwn__member--mention,
  .c-mrkdwn__member--mention:hover,
  .c-mrkdwn__broadcast--mention,
  .c-mrkdwn__broadcast--mention:hover,
  .c-mrkdwn__subteam--mention,
  .c-mrkdwn__subteam--mention:hover {
      background: #4e525a;
      color: #e4e4e4;
  }

  #file_reply_container .reply_limited,
  #reply_container .reply_limited,
  .reply_input_container .reply_limited {
      background: #3d3b40;
  }

  ts-thread .reply_input_container .collapsed_input_placeholder,
  ts-thread .reply_input_container .join_channel_from_thread_container,
  ts-thread .reply_input_container .reply_limited {
      border: 1px solid #282a2e;
  }

  .p-message_pane__foreword__notification_warning {
      background: transparent;
      color: #ffffff2b;
  }

  .p-message_pane__foreword__description,
  .p-message_pane__limited_history_alert {
      color: #e0e0e0;
  }

  .c-input_character_count:after {
      background: #373b41;
  }

  .p-message_pane .c-message_list:not(.c-virtual_list--scrollbar),
  .p-message_pane .c-message_list.c-virtual_list--scrollbar>.c-scrollbar__hider {
      background: #282a2e;
  }

  .p-message_pane__unread_banner {
      display: none;
  }

  .c-team__display-name,
  .c-unified_member__display-name,
  .c-usergroup__handle {
      color: #eaeaea;
      font-weight: 700;
  }

  .c-member_slug--link {
      background: #3b3c3f;
      color: #a5cadf !important;
  }

  .c-member_slug--link:hover {
      text-decoration: none;
      background: #414754;
      color: #c1e9ff !important;
  }

  .c-member_slug--mention,
  .c-member_slug--mention:hover {
      background: #3b3c3f;
      color: #dfa5de !important;
  }

  ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply):not(.show_broadcast_indicator),
  ts-message.message--focus:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply):not(.show_broadcast_indicator),
  ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply):not(.show_broadcast_indicator) {
      background: hsl(220, 7%, 16%);
  }

  #file_reply_container .inline_message_input_container,
  #reply_container .inline_message_input_container,
  .reply_input_container .inline_message_input_container {
      background-color: #282A2E;
  }

  ts-thread .collapse_inline_thread_container:hover,
  ts-thread .view_all_replies_container:hover {
      background-color: hsl(220, 7%, 16%);
  }

  #file_reply_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container label,
  #reply_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container label,
  .reply_input_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container label {
      color: #aaa;
  }

  ts-message.active .edited,
  ts-message.active .reply_bar .last_reply_at,
  ts-message.active .timestamp,
  ts-message.active.automated .message_body,
  ts-message.message--focus .edited,
  ts-message.message--focus .reply_bar .last_reply_at,
  ts-message.message--focus .timestamp,
  ts-message.message--focus.automated .message_body,
  ts-message .edited,
  ts-message .reply_bar .last_reply_at,
  ts-message .timestamp,
  ts-message.automated .message_body {
      color: #717274;
  }

  ts-message .action_hover_container .btn_msg_action {
      background: hsl(220, 7%, 14%);
  }

  .rxn.rxn_add_btn .c-icon--small-reaction {
      color: rgba(255, 255, 255, 0.2);
  }

  .c-search__input_box {
      background-color: #1d1e20;
  }

  .c-search__input_box .c-search__input_box__input {
      background: #1d1e20;
  }

  .c-search_modal .popover>div {
      background-color: #1d1e20;
  }

  .c-search__input_box__clear {
      color: #717274;
      border-right: 1px solid #383838;
  }

  .c-search__tabs {
      background-color: #1d1e20;
  }

  .c-message_group {
      border: 1px solid hsl(220, 7%, 14%);
      background-color: hsl(220, 7%, 14%);
  }

  .c-search {
      background-color: hsl(220, 7%, 17%);
  }

  .c-tabs__tab_menu {
      box-shadow: inset 0 -1px 0 0 #181819;
  }

  .p-search_filter__title_text {
      background-color: hsl(220, 7%, 17%);
  }

  .p-search_filter__title:before {
      border-bottom: 1px solid #3c3d3f;
  }

  .p-search_filter__dates {
      border-radius: 4px;
      background-color: #1d1e20;
      border: 1px solid #171719;
  }

  .p-search_filter__date:first-child {
      border-bottom: 1px solid #171719;
  }

  .c-search_message__body {
      color: hsl(0, 0%, 80%);
  }

  .c-tabs__tab.c-tabs__tab--active,
  .c-tabs__tab:active,
  .c-tabs__tab:focus {
      color: #e0e0e0;
  }

  .c-pillow_file_container {
      background: #1d1e20;
  }

  .c-pillow_file__title {
      color: #e0e0e0;
  }

  .c-search_autocomplete header {
      color: #977694;
      background: #1d1e20;
  }

  .c-search_autocomplete footer {
      color: hsl(206, 30%, 57%);
      background-color: #1d1e20;
  }

  .c-search_autocomplete__suggestion_content {
      color: #e0e0e0;
  }

  .c-search_autocomplete__suggestion_content .c-search_autocomplete__suggestion_text .token {
      background-color: #18191b;
  }

  .texty_legacy .ql-placeholder {
      color: #fff;
  }

  .c-search_modal {
      background-color: rgba(0, 0, 0, 0.5);
  }

  .c-react_search_input:active .icon_search_wrapper *,
  .c-react_search_input:active .search_input_wrapper *,
  .c-react_search_input:focus .icon_search_wrapper *,
  .c-react_search_input:focus .search_input_wrapper *,
  .c-react_search_input:hover .icon_search_wrapper *,
  .c-react_search_input:hover .search_input_wrapper * {
      color: #e0e0e0 !important;
  }

  #file_comment_textarea.texty_comment_input.focus,
  #file_comment_textarea.texty_comment_input:hover,
  .comment_form .texty_comment_input.focus,
  .comment_form .texty_comment_input:hover,
  .edit_comment_form .texty_comment_input.focus,
  .edit_comment_form .texty_comment_input:hover {
      border-color: #373B41;
  }

  #file_comment_textarea.texty_comment_input,
  .comment_form .texty_comment_input,
  .edit_comment_form .texty_comment_input {
      background: #373B41;
      border: 1px solid #373B41;
      color: #e0e0e0;
  }

  .c-message_group__divider_text {
      background-color: hsl(220, 7%, 14%);
  }

  .c-mrkdwn__broadcast--mention,
  .c-mrkdwn__broadcast--mention:hover,
  .c-mrkdwn__highlight,
  .c-mrkdwn__mention,
  .c-mrkdwn__mention:hover,
  .c-mrkdwn__user_group--mention,
  .c-mrkdwn__user_group--mention:hover {
      background: #4c334c;
  }

  .p-message_pane .p-message_pane__top_banners:not(:empty)+div .c-message_list.c-virtual_list--scrollbar>.c-scrollbar__hider:before,
  .p-message_pane .p-message_pane__top_banners:not(:empty)+div .c-message_list:not(.c-virtual_list--scrollbar):before {
      box-shadow: 0 32px #000;
      border-bottom: 1px solid #4c4c4c;
  }

  .c-search__input_and_close {
      border-bottom: 1px solid hsl(220, 5%, 17%);
  }

  #msg_input.focus+#primary_file_button:not(:hover):not(.active),
  #msg_input:focus+#primary_file_button:not(:hover):not(.active) {
      border-color: #373b41 !important;
  }

  #primary_file_button.active,
  #primary_file_button:hover {
      background: #398FFF;
      border-color: #373b41 !important;
      color: #398FFF;
  }

  #reply_container.upload_in_threads .inline_message_input_container {
      margin-top: 0;
      background-color: #373b41;
      border-color: #373b41;
  }

  .inline_file_upload.active,
  .inline_file_upload.focus-ring,
  .inline_file_upload:focus,
  .inline_file_upload:hover {
      border-color: transparent;
  }

  .inline_file_upload {
      border-right: 1px solid #373b41;
  }

  #primary_file_button {
      color: #919193 !important;
  }

  #threads_msgs .upload_in_threads.has_focus .inline_message_input_container,
  .upload_in_threads.has_focus .inline_message_input_container {
      border-color: #3D3C40;
  }

  #threads_msgs .inline_message_input_container.with_file_upload {
      background: #3D3C40;
  }

  #threads_msgs .inline_message_input_container.with_file_upload {
      border-color: transparent;
  }

  #threads_msgs .inline_message_input_container.with_file_upload.focus,
  #threads_msgs .inline_message_input_container.with_file_upload:active,
  #threads_msgs .inline_message_input_container.with_file_upload:hover {
      border-color: transparent;
  }

  .menu ul li a:not(.inline_menu_link) {
      color: #ccc;
  }

  #client_body:not(.onboarding):not(.feature_global_nav_layout):before {
      height: 0px;
      border-bottom: 0px solid;
  }

  .btn {
      background-color: #282a2e !important;
  }

  .p-emoji_picker__content {
      background: #232425 !important;
  }

  .c-button {
      color: #e0e0e0 !important;
  }

  nav.p-channel_sidebar,
  #col_channels {
      background: none !important;
  }

  .c-message {
      background: #282a2e;
  }

  #menu_member_dm_input {
      color: #ccc;
      background: #282a2e;
  }

  .c-menu_item__header {
      color: #ccc;
  }

  .p-emoji_picker__group_tab--active {
      border-bottom: 3px solid #398FFF;
  }

  .c-search_modal:not(.c-search_modal--primarysearch) .c-search__input_box {
      background: none !important;
  }

  .c-search_autocomplete__suggestion_item {
      color: #ccc
  }

  .channel_token {
      background: #282a2e !important;
      color: #ccc !important;
  }

  ts-jumper .p-jumper__help {
      background: none !important;
  }

  ts-jumper .p-jumper__results {
      border-top: none;
  }

  ts-jumper ol li .view_name {
      color: #e0e0e0 !important;
  }

  .search_form {
      background: #1d1f21 !important;
  }

  .channel_browser_channel_purpose {
      color: #ccc !important;
  }

  #channel_purpose_input {
    background-color: #373b41;
    border: 1px solid #373b41;
    color: #e0e0e0;
  }
`);