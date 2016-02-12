;;; python-config --- Python Emacs Config
;;; Commentary:
;;;   Inspired by : http://tech.novapost.fr/configurer-emacs-comme-un-developpeur-python.html
;;;   And	  : http://caisah.info/emacs-for-python/
;;; http://www.emacswiki.org/emacs/?action=browse;oldid=PythonMode;id=PythonProgrammingInEmacs
;;; Code:


(add-hook 'python-mode-hook (lambda ()            ; indentation configuration
                              (setq-default indent-tabs-mode nil)
                              (setq tab-width 4)))
(add-hook 'python-mode-hook 'linum-mode)	  ; show line number at left of the screen
(add-hook 'python-mode-hook 'highlight-80+-mode)  ; highlight char after 80'th collumn
(add-hook 'python-mode-hook 'fci-mode)		  ; draw a line at the 80'th collumn
(add-hook 'python-mode-hook 'trailing-whitespace-cleanup-on-save)
(add-hook 'python-mode-hook (lambda ()            ; flycheck configuration
                              (setq flycheck-checker 'python-flake8)
                              (flycheck-mode)))

;; Python interpret configuration
(setq
 python-shell-interpreter "ipython"
 python-shell-interpreter-args ""
 python-shell-prompt-regexp "In \\[[0-9]+\\]: "
 python-shell-prompt-output-regexp "Out\\[[0-9]+\\]: "
 python-shell-completion-setup-code
   "from IPython.core.completerlib import module_completion"
 python-shell-completion-module-string-code
   "';'.join(module_completion('''%s'''))\n"
 python-shell-completion-string-code
   "';'.join(get_ipython().Completer.all_completions('''%s'''))\n")

;; Jedi.el
;; https://github.com/tkf/emacs-jedi
;; http://tkf.github.io/emacs-jedi/released/
(add-hook 'python-mode-hook 'jedi:setup)
(setq jedi:setup-keys t)			  ; optional
(setq jedi:complete-on-dot t)			  ; optional

(provide 'python-config)
;;; python-config.el ends here
