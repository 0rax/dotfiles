;;; epitech --- Epitech Config for Emacs
;;; Commentary:
;;;   Load Epitech commentary ++
;;; Code:

(if (file-exists-p "~/.emacs.d/epitech/")
   (add-to-list 'load-path "~/.emacs.d/epitech/"))
(load "std.el")
(load "std_comment.el")

(provide 'epitech)
;;; epitech.el ends here
