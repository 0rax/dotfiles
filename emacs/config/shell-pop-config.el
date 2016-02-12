;;; shell-pop-config --- Shell Pop Config
;;; Commentary:
;;;   http://www.emacswiki.org/emacs/ShellPop
;;; Code:

(require 'shell-pop)
;; (shell-pop-set-internal-mode "eshell")       ; use EShell in shell-pop
(shell-pop-set-internal-mode "ansi-term")       ; yse ansi-term in shell-pop
(shell-pop-set-internal-mode-shell "/bin/bash") ; set shell to launch
(shell-pop-set-window-height 30)                ; the number for the percentage of the selected window.
(shell-pop-set-window-position "bottom") ;shell-pop-up position. You can choose "top" or "bottom". 
(global-set-key [f12] 'shell-pop)

(provide 'shell-pop-config)
;;; shell-pop-config.el ends here
