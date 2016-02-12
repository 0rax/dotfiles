;;; ac-config --- AutoComplete && Yasnippet Config
;;; Commentary:
;;;    Config insipred by   : http://truongtx.me/2013/01/06/config-yasnippet-and-autocomplete-on-emacs/
;;;    Autocomplete Website : http://cx4a.org/software/auto-complete/
;;;    Yasnippet Website    : https://github.com/capitaomorte/yasnippet
;;; Code:

;; Yasnippet
(require 'yasnippet)
(yas-global-mode 1)

;; AutoComplete
(require 'auto-complete-config)
(add-to-list 'ac-dictionary-directories "~/.emacs.d/el-get/autocomplete/ac-dict")
(ac-config-default)
(global-auto-complete-mode 1)

;; set the trigger key so that it can work together with yasnippet on tab key,
;; if the word exists in yasnippet, pressing tab will cause yasnippet to
;; activate, otherwise, auto-complete will
(ac-set-trigger-key "TAB")
(ac-set-trigger-key "<tab>")

(provide 'ac-config)
;;; ac-config.el ends here
