;;; package-config --- Package-Manager Config
;;; Commentary:
;;;   Config inspired by : http://truongtx.me/2013/01/07/emacs-package-manager/
;;;   HowTo              : http://ergoemacs.org/emacs/emacs_package_system.html
;;;   AutoInstall        : http://bytes.inso.cc/2011/08/13/auto-installing-packages-in-emacs-with-elpa-and-el-get/
;;; Code:

(require 'package)

;; ELPA
;; Set packages sources for ELPA
(dolist (source '(("gnu" . "http://elpa.gnu.org/packages/")
		  ("marmalade" . "http://marmalade-repo.org/packages/")
                  ("elpa" . "http://tromey.com/elpa/")
                  ("melpa" . "http://melpa.milkbox.net/packages/")
                  ))
  (add-to-list 'package-archives source t))
(package-initialize)

;; EL-Get
;; Auto-install if not present
(unless (require 'el-get nil 'noerror)
  (with-current-buffer
      (url-retrieve-synchronously
       "https://raw.github.com/dimitri/el-get/master/el-get-install.el")
    (let (el-get-master-branch)
      (goto-char (point-max))
      (eval-print-last-sexp))))
;; List of reqiuired packages
(setq my-el-get-packages
  (append
   '(auto-complete
     autopair
     dired-details
     dired-details+
     powerline
     yasnippet
     fill-column-indicator
     coffee-mode
     less-css-mode
     psvn
     magit
     shell-pop
     jedi
     emmet-mode
     web-mode
     session
     flycheck)
   (mapcar 'el-get-source-name el-get-sources)))

;; Sync el-get list packages at start-up
(el-get 'sync my-el-get-packages)

(provide 'package-config)
;;; package-config.el ends here
