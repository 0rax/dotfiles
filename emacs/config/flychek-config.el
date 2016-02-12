;;; flychek-config --- Flychek mode
;;; Commentary:
;;;   http://www.emacswiki.org/emacs-en/Flycheck
;;;   https://github.com/flycheck/flycheck
;;;   http://flycheck.github.io/Introduction.html
;;;   Provide on-the-fly syntax checking and compilation
;;; Code:

;; (add-hook 'after-init-hook #'global-flycheck-mode) ; activate flycheck for all buffer
(global-set-key [f9] 'flycheck-previous-error)
(global-set-key [f10] 'flycheck-next-error)
(global-set-key (kbd "C-x à") 'flycheck-list-errors)
(global-set-key (kbd "C-x )") 'flycheck-select-checker)
(setq flycheck-clang-include-path
      '("/usr/include/python2.7/" "./include/" "../include/" "../../include/" "./" "../" "includes/" "../includes/" "../../includes/"))

(provide 'flychek-config)
;;; flychek-config.el ends here
