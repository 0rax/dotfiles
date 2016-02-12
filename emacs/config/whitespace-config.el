;;; whitespace-config ---  WhiteSpace-Mode Config
;;; Commentary:
;;;   WhiteSpace EmacsWiki : http://emacswiki.org/emacs/WhiteSpace
;;;   HowTo                : http://ergoemacs.org/emacs/whitespace-mode.html
;;;   Clean Up all whitespace errors with M+x whitespace-cleanup
;;;   It will do it automaticaly at each save
;;;   Remove the add-hook line to desactivate this auto cleanup
;;;   Activate it with M+x whitespace-mode
;;;   Or with Keyboard Shortcut : Ctrl+Alt+Y (by default);
;;; Code:

(require 'whitespace)

(defun whitespace-cleanup* ()
  """delete trailing whitespaces + replace group of spaces by tabs"""
  (let* ((modified-before-p (buffer-modified-p)))
    (whitespace-cleanup)
    (if (not modified-before-p)
	(not-modified))))

(defun whitespace-cleanup-on-save ()
  (add-hook 'write-contents-hooks #'whitespace-cleanup*))
(defun trailing-whitespace-cleanup-on-save()            ;; bug sur certaines sources en python
  (add-hook 'write-contents-hooks 'delete-trailing-whitespace))

;; set CTRL+ALT+Y as key shortcut to show whitespaces
(global-set-key (kbd "C-M-y") 'whitespace-mode)

(provide 'whitespace-config)
;;; whitespace-config.el ends here
