;;; basic-conf --- Emacs Basic Config
;;; Commentary:
;;;   Setting up built-in module and common config
;;; Code:

(setq inhibit-startup-screen t) ; remove startup splashscreen

;; IDO (Interactively Do Things)
;; http://www.emacswiki.org/emacs/InteractivelyDoThings
(ido-mode 1)			; set ido-mode on (buffer & file switch)

(column-number-mode t)		; show column in frame footer
(line-number-mode t)		; show line in frame footer

(global-set-key [delete] 'delete-char)
(global-set-key [M-delete] 'kill-word)

;; Show Paren Mode
;; http://www.emacswiki.org/emacs/ShowParenMode
;; Provide matching parentheses highlighting
(require 'paren)
(show-paren-mode)

;; Uniquify
;; http://www.emacswiki.org/emacs/uniquify
;; Provide bufer renaming when 2 buffers has  the same name
(require 'uniquify)
(custom-set-variables
 '(uniquify-buffer-name-style (quote forward) nil (uniquify))
 '(uniquify-strip-common-suffix nil)
 )

;; Highlight 80 +
;; http://nschum.de/src/emacs/highlight-80+/
;; Provide char highilighting after 80th collumn
;; Activate with `M+x highligh-80+-mode`
(require 'highlight-80+)

;; Linum config (built-in config)
;; http://www.emacswiki.org/LineNumbers
;; Provide collumn numbering
;; Activate with `M+x linum-mode`
(require 'linum)
(setq linum-format "%3d \u2502")
(set-face-foreground 'linum "blue")

;; Fill Collum Indicator
;; http://www.emacswiki.org/FillColumnIndicator
;; Activated in all C file (to activate it manualy M+x fci-mode)
(require 'fill-column-indicator)
(setq-default fci-rule-column 80)
(setq fci-rule-character-color "blue")
(setq fci-rule-character 124)

;; Auto indent New Line
;; http://www.emacswiki.org/emacs/AutoIndentation
(global-set-key (kbd "<RET>") 'newline-and-indent)

;; Dired Mode Config
;; http://www.emacswiki.org/emacs/DiredMode
;; http://www.emacswiki.org/emacs/DiredDetails
;; http://www.emacswiki.org/emacs/WDired
(setq dired-details-hidden-string '"")

;; Emacs Session
;; http://www.emacswiki.org/emacs/EmacsSession
;; http://emacs-session.sourceforge.net/
(require 'session)
(custom-set-variables
 '(session-use-package t nil (session))
 )

(global-set-key  [f8] 'bs-show)

;; Wind Move
;; http://www.emacswiki.org/emacs/WindMove
;; Provice M + Arrow for switching windows
(when (fboundp 'windmove-default-keybindings)
  (windmove-default-keybindings 'meta))

;; -- Note --
;; + Cua Mode
;; C-x (cut) C-c (copy) C-v (past) C-z (undo)
;; Instead of default emacs keybinding (C-w M-w M-_)
;; http://www.emacswiki.org/emacs/CuaMode

;; Directory Variables
;; http://www.emacswiki.org/emacs/DirectoryVariables
(setq enable-remote-dir-locals t)     ; accept remote .dir-locals.el

;; PSVN + Magit
;; VCS management inside emacs
(require 'psvn)
(require 'magit)
(global-set-key (kbd "C-x g") 'magit-status)

;; Eshell
;; http://www.emacswiki.org/emacs/EshellPrompt
;; Set colored prompt for eshell
(setq eshell-prompt-function (lambda nil
			       (concat
				(propertize (eshell/pwd) 'face `(:foreground "#56a2ff"))
				(propertize " $ " 'face `(:foreground "#F0F0F0")))))
(setq eshell-highlight-prompt nil)

;; Set C-c C-q to indent-region
;; It will be activated when the major-mode doesn't overwrite it
;; Like in C/C++ or Python.
(global-set-key (kbd "C-c C-q") 'indent-region)

(provide 'basic-conf)
;;; basic-conf.el ends here
