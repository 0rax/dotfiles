;;; autopair-config --- AutoPair mode
;;; Commentary:
;;;   http://www.emacswiki.org/emacs/AutoPairs
;;;   https://github.com/capitaomorte/autopair
;;;   Provide auto closing for brackets, quotes, ...
;;; Code:

(require 'autopair)
(autopair-global-mode)
(setq autopair-autowrap t)

;; Activate triple quote autopair for Python.
(add-hook 'python-mode-hook
	  #'(lambda ()
	      (setq autopair-handle-action-fns
		    (list #'autopair-default-handle-action
			  #'autopair-python-triple-quote-action))))

(provide 'autopair-config)
;;; autopair-config.el ends here
