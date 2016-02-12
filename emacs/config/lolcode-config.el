;;; lolcode-config --- LOLCODE Emacs Config
;;; Commentary:
;;;   Configuratin for LOLCODE programing language
;;;   http://lolcode.org/
;;; Code:

(require 'lolcode-mode)
(defvar ac-source-lolcode
  '((candidates . lolcode-lang-all)))
(add-to-list 'ac-modes 'lolcode-mode)
(add-hook 'lolcode-mode-hook
	  (lambda ()
	    (setq default-tab-width 2)
	    (add-to-list 'ac-sources 'ac-source-lolcode)
	    (add-to-list 'ac-sources 'ac-source-yasnippet)))

(provide 'lolcode-config)
;;; lolcode-config.el ends here
