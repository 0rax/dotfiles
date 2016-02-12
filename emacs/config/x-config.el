;;; x-config --- Emacs X Config
;;; Commentary:
;;;   
;;; Code:

;; Load and accept theme
(custom-set-variables
 '(custom-safe-themes
   (quote
    ("db347171bfdccadea8b58609100911c3e178fa144cb6e12b40bc80c1ce3aae84" default)))
 )
(load-theme 'MooFlat)

;; Hide some elements of the UI
(menu-bar-mode -1)		; hide menu-bar
(scroll-bar-mode -1)		; hide scroll-bar
(tool-bar-mode -1)		; hide tool-bar

;; Change linum color
(set-face-foreground 'linum "#3a6cab")

;; Powerline
;; Change mode-line style
(require 'powerline)
(powerline-default-theme)
(custom-set-faces
 '(powerline-active1 ((t (:inherit mode-line :background "#1A1A1A"))))
 '(powerline-active2 ((t (:inherit mode-line :background "#303030"))))
 '(powerline-inactive1 ((t (:inherit mode-line-inactive :background "#1A1A1A"))))
 '(powerline-inactive2 ((t (:inherit mode-line-inactive :background "#303030"))))
 '(whitespace-tab ((((class color) (background light)) (:background "blue" :foreground "lightgray"))))
 )

;; HL Line
;; Provide current line highlighting
;; Activate with `M+x `hl-line-mpde`
(require 'hl-line)
(set-face-background 'hl-line "#2A2A2A")
(global-hl-line-mode 1)

;; Change Quit binding to kill current buffer
(global-set-key (kbd "C-x C-c") 'kill-this-buffer)

;; Start Emacs server
(server-start)

(provide 'x-config)
;;; x-config.el ends here
