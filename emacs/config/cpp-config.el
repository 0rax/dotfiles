;;; cpp-config --- C/C++ Config
;;; Commentary:
;;;   Inspired by : http://truongtx.me/2013/03/10/emacs-setting-up-perfect-environment-for-cc-programming/
;;; Code:

;; C Config
(add-hook 'c-mode-hook 'highlight-80+-mode)
(add-hook 'c-mode-hook 'linum-mode)
(add-hook 'c-mode-hook 'whitespace-cleanup-on-save)
(add-hook 'c-mode-hook 'fci-mode)
(add-hook 'c-mode-hook (lambda ()
                         (flycheck-select-checker 'c/c++-clang)
                         (flycheck-mode)))

;; C++ Config
(add-hook 'c++-mode-hook 'highlight-80+-mode)
(add-hook 'c++-mode-hook 'linum-mode)
(add-hook 'c++-mode-hook 'whitespace-cleanup-on-save)
(add-hook 'c++-mode-hook 'fci-mode)
(add-hook 'c++-mode-hook (lambda ()
			   (flycheck-select-checker 'c/c++-clang)
			   (flycheck-mode)))

;; Header protection snippet
(defun insert-header-guard ()
  (interactive)
  (save-excursion
    (when (buffer-file-name)
          (goto-char (point-min))
        (let*
            ((name (file-name-nondirectory buffer-file-name))
             (macro (replace-regexp-in-string
                     "\\." "_"
                     (replace-regexp-in-string
                      "-" "_"
                      (upcase name)))))
          (insert "#ifndef " macro "_\n")
          (insert "# define " macro "_\n\n")
          (goto-char (point-max))
          (insert "\n#endif /* !" macro "_ */\n")))
    )
  )

(provide 'cpp-config)
;;; cpp-config.el ends here
