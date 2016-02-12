;;; init.el -- my Emacs config loader
;;; Commentary:
;;;   Setting up basic load-path and custom-set-* vars before loading everithing else
;;; Code:

(add-to-list 'load-path "~/.emacs.d/config/")
(add-to-list 'load-path "~/.emacs.d/lisp/")
(add-to-list 'load-path "~/.emacs.d/el-get/el-get/")
(add-to-list 'load-path "/usr/share/emacs24/site-lisp/")
(add-to-list 'custom-theme-load-path "~/.emacs.d/themes/")

(require 'package-config)

;; Custom configuration files
(require 'basic-conf)
(require 'epitech)
(require 'autopair-config)
(require 'ac-config)
(require 'flychek-config)
(require 'whitespace-config)
(require 'shell-pop-config)
(require 'web-config)
(require 'cpp-config)
(require 'python-config)
(require 'lolcode-config)

;; Mode with no configuration needed
(require 'fish-mode)
(require 'ps-ccrypt "ps-ccrypt.elc")

;; Load the X/NoX config file based on window-system
(if window-system
    (require 'x-config)
  )

;;; init.el ends here
