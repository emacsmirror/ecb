const variables =
  {
    names:
      [
        'ecb-activated-window-configuration',
        'ecb-adviced-function-sets',
        'ecb-adviced-functions',
        'ecb-adviced-permanent-function-sets',
        'ecb-advices-debug-error',
        'ecb-all-options',
        'ecb-auto-expand-tag-tree-old',
        'ecb-autocontrol/sync-fcn-register',
        'ecb-autogen-subdirs',
        'ecb-autotrace-autocontrol/sync-functions',
        'ecb-before-ediff-window-config',
        'ecb-bodytrace-autocontrol/sync-functions',
        'ecb-checkedin-file',
        'ecb-common-directories-menu',
        'ecb-compilation-buffer-names-internal',
        'ecb-compilation-major-modes-internal',
        'ecb-compilation-predicates-internal',
        'ecb-compilation-update-idle-time',
        'ecb-compilation-update-menu-p',
        'ecb-compile-window',
        'ecb-compile-window-height-lines',
        'ecb-compile-window-was-selected-before-command',
        'ecb-create-layout-edit-window',
        'ecb-create-layout-frame',
        'ecb-current-input-throw-symbol',
        'ecb-current-post-processed-tag-table',
        'ecb-directories-menu',
        'ecb-directories-menu-title-creator',
        'ecb-ecb-buffer-name-selected-before-command',
        'ecb-ecb-buffer-registry',
        'ecb-edit-window',
        'ecb-error-object',
        'ecb-eshell-buffer-list',
        'ecb-eshell-pre-command-point',
        'ecb-examples-action-buffer-keymap',
        'ecb-examples-bufferinfo-last-file-buffer',
        'ecb-examples-preact-layout',
        'ecb-frame',
        'ecb-history-common-menu',
        'ecb-history-filter',
        'ecb-history-menu',
        'ecb-history-menu-title-creator',
        'ecb-images-can-be-used',
        'ecb-item-in-tree-buffer-selected',
        'ecb-last-compile-buffer-in-compile-window',
        'ecb-last-edit-window-with-point',
        'ecb-last-major-mode',
        'ecb-last-selected-layout',
        'ecb-last-source-buffer',
        'ecb-layout-default-window-sizes',
        'ecb-layout-prevent-handle-ecb-window-selection',
        'ecb-layouts-reload-needed',
        'ecb-major-mode-selected-source',
        'ecb-max-submenu-depth',
        'ecb-menu-name',
        'ecb-method-buffer-needs-rebuild',
        'ecb-method-buffer-rebuild-allowed-for-invisible-buffers',
        'ecb-method-overlay',
        'ecb-methods-root-node',
        'ecb-methods-user-filter-alist',
        'ecb-minor-mode',
        'ecb-mode-map',
        'ecb-multiframe-variables',
        'ecb-nav-current-node',
        'ecb-nav-first-node',
        'ecb-not-compatible-options',
        'ecb-old-ecb-version',
        'ecb-partial-reparse-always-full-fetch',
        'ecb-partial-reparse-debug',
        'ecb-path-selected-directory',
        'ecb-path-selected-source',
        'ecb-problem-report-mail-address',
        'ecb-selected-tag',
        'ecb-source-path-functions',
        'ecb-source-path-menu',
        'ecb-sources-menu',
        'ecb-sources-menu-title-creator',
        'ecb-special-ecb-buffers-of-current-layout',
        'ecb-speedbar-update-flag-old',
        'ecb-speedbar-verbosity-level-old',
        'ecb-stealthy-function-list',
        'ecb-stealthy-function-state-alist',
        'ecb-stealthy-update-running',
        'ecb-symboldef-last-symbol',
        'ecb-tag-tree-cache',
        'ecb-tree-buffer-callbacks',
        'ecb-tree-buffer-creators',
        'ecb-tree-do-not-leave-window-after-select--internal',
        'ecb-upgrade-check-done',
        'ecb-vc-needed-vc-package-available-p',
        'ecb-windows-hidden',
        'ecb-windows-hidden-state',
        'ecb-winman-winring-ecb-frame',
        'ecb-working-celeron-strings',
        'ecb-working-message',
        'silentcomp-environment-set',
        'silentcomp-unbound-variables',
        'tree-buffer-debug-mode',
        'tree-node-id'
    ],

    info:
      [
        {
          variable : 'ecb-activated-window-configuration',
          filename : 'ecb.el',
          docstring : '  "Window configuration used after the ECB is activated.")<br><br>;;====================================================<br>;; Customization<br>;;====================================================<br><br>(defgroup ecb nil<br>  "Emacs code browser."',
          prototype : '(defvar ecb-activated-window-configuration nil',
          lispcode : '(defvar ecb-activated-window-configuration nil'
        },
        {
          variable : 'ecb-adviced-function-sets',
          filename : 'ecb-common-browser.el',
          docstring : '  "A list of adviced-function sets defined with `defecb-advice-set".<br>Each element is a cons-cell where car is the advice-set-var and cdr is an<br>indicator if the caller of `ecb-with-original-adviced-function-set" is the<br>outmost caller.<br><br>DO NOT CHANGE THIS!")<br><br>(defvar ecb-adviced-permanent-function-sets nil<br>  "A list of symbols, each of them an advice-set which should be permanent.<br>Permanent means this advice set will not be disabled during deactivation of<br>ECB. This variable is only set by `defecb-advice-set".<br><br>DO NOT CHANGE THIS!")<br><br>(defvar ecb-adviced-functions nil<br>  "A list of all advices defined with `defecb-advice".<br>This list is the set union of the values of all function-sets of<br>`ecb-adviced-function-sets".<br><br>DO NOT CHANGE THIS!")<br><br>(defvar ecb-advices-debug-error nil<br>  "It not nil then each advice of ECB reports when it"s en/disabled or called.")<br><br>(defun ecb-advices-debug-error (advice class action &rest args)<br>  "Run ARGS through `format" and write it to the *Messages*-buffer.<br>ADVICE is the adviced-function-symbol, CLASS is the advice-class (after,<br>around or before) and ACTION is one of the symbols "calling, "enabling,<br>"disabling or "reporting.<br><br>This will build up a message string like:<br>ECB <version>: debug <ACTION> of "<CLASS>" advice ADVICE: ARGS.<br>If ARGS is nil then only the message above is reported."',
          prototype : '(defvar ecb-adviced-function-sets nil',
          lispcode : '(defvar ecb-adviced-function-sets nil'
        },
        {
          variable : 'ecb-adviced-functions',
          filename : 'ecb-common-browser.el',
          docstring : '  "A list of all advices defined with `defecb-advice".<br>This list is the set union of the values of all function-sets of<br>`ecb-adviced-function-sets".<br><br>DO NOT CHANGE THIS!")<br><br>(defvar ecb-advices-debug-error nil<br>  "It not nil then each advice of ECB reports when it"s en/disabled or called.")<br><br>(defun ecb-advices-debug-error (advice class action &rest args)<br>  "Run ARGS through `format" and write it to the *Messages*-buffer.<br>ADVICE is the adviced-function-symbol, CLASS is the advice-class (after,<br>around or before) and ACTION is one of the symbols "calling, "enabling,<br>"disabling or "reporting.<br><br>This will build up a message string like:<br>ECB <version>: debug <ACTION> of "<CLASS>" advice ADVICE: ARGS.<br>If ARGS is nil then only the message above is reported."',
          prototype : '(defvar ecb-adviced-functions nil',
          lispcode : '(defvar ecb-adviced-functions nil'
        },
        {
          variable : 'ecb-adviced-permanent-function-sets',
          filename : 'ecb-common-browser.el',
          docstring : '  "A list of symbols, each of them an advice-set which should be permanent.<br>Permanent means this advice set will not be disabled during deactivation of<br>ECB. This variable is only set by `defecb-advice-set".<br><br>DO NOT CHANGE THIS!")<br><br>(defvar ecb-adviced-functions nil<br>  "A list of all advices defined with `defecb-advice".<br>This list is the set union of the values of all function-sets of<br>`ecb-adviced-function-sets".<br><br>DO NOT CHANGE THIS!")<br><br>(defvar ecb-advices-debug-error nil<br>  "It not nil then each advice of ECB reports when it"s en/disabled or called.")<br><br>(defun ecb-advices-debug-error (advice class action &rest args)<br>  "Run ARGS through `format" and write it to the *Messages*-buffer.<br>ADVICE is the adviced-function-symbol, CLASS is the advice-class (after,<br>around or before) and ACTION is one of the symbols "calling, "enabling,<br>"disabling or "reporting.<br><br>This will build up a message string like:<br>ECB <version>: debug <ACTION> of "<CLASS>" advice ADVICE: ARGS.<br>If ARGS is nil then only the message above is reported."',
          prototype : '(defvar ecb-adviced-permanent-function-sets nil',
          lispcode : '(defvar ecb-adviced-permanent-function-sets nil'
        },
        {
          variable : 'ecb-advices-debug-error',
          filename : 'ecb-common-browser.el',
          lispcode : '(defvar ecb-advices-debug-error nil<br>  <apo>It not nil then each advice of ECB reports when it<tick>s en/disabled or called.<apo>)'
        },
        {
          variable : 'ecb-all-options',
          filename : 'ecb-upgrade.el',
          lispcode : '(defvar ecb-all-options nil)'
        },
        {
          variable : 'ecb-auto-expand-tag-tree-old',
          filename : 'ecb-method-browser.el',
          lispcode : '(defvar ecb-auto-expand-tag-tree-old <tick>expand-spec)'
        },
        {
          variable : 'ecb-autocontrol/sync-fcn-register',
          filename : 'ecb-common-browser.el',
          docstring : '  "List of autocontrol/sync-functions defined by<br>`defecb-autocontrol/sync-function". Each element is a cons where car is the<br>function symbol and cdr is either the symbol of a variable containing a<br>buffer-name of a special ECB-buffer or nil.")<br>(defvar ecb-idle-timer-alist nil<br>  "List of active idle-timers of ECB")<br>(defvar ecb-post-command-hooks nil<br>  "List of functions which have to be part of the value of `post-command-hook"")<br>(defvar ecb-pre-command-hooks nil<br>  "List of functions which have to be part of the value of `pre-command-hook"")<br><br>(defun ecb-register-autocontrol/sync-function (fcn-symbol buffer-name-symbol)<br>  (add-to-list "ecb-autocontrol/sync-fcn-register (cons fcn-symbol buffer-name-symbol)))<br><br>(defun ecb-stop-all-autocontrol/sync-functions ()<br>  (dolist (fcn-elem ecb-autocontrol/sync-fcn-register)<br>    (ecb-stop-autocontrol/sync-function (car fcn-elem))))<br><br>(defun ecb-stop-autocontrol/sync-function (fcn-symbol)<br>  (let* ((timer-elem (assoc fcn-symbol ecb-idle-timer-alist))<br>         (timer (cdr timer-elem)))<br>    (when timer-elem<br>      (ecb-cancel-timer timer)<br>      (setq ecb-idle-timer-alist (delq timer-elem ecb-idle-timer-alist)))<br>    (remove-hook "post-command-hook fcn-symbol)<br>    (remove-hook "pre-command-hook fcn-symbol)<br>    (setq ecb-post-command-hooks (delq fcn-symbol ecb-post-command-hooks))<br>    (setq ecb-pre-command-hooks (delq fcn-symbol ecb-pre-command-hooks))))<br><br><br>(defun ecb-activate-ecb-autocontrol-function (value func)<br>  "Adds function FUNC to `ecb-idle-timer-alist" and activates an idle-timer<br>with idle-time VALUE if VALUE is a number. If nil or "post the<br>FUNC is added to `post-command-hook" and `ecb-post-command-hooks"<br>and removed from the idle-list (if it has been contained). If<br>"pre the FUNC is added to `pre-command-hook" and<br>`ecb-pre-command-hooks" and removed from the idle-list (if it<br>has been contained)."',
          prototype : '(defvar ecb-autocontrol/sync-fcn-register nil',
          lispcode : '(defvar ecb-autocontrol/sync-fcn-register nil'
        },
        {
          variable : 'ecb-autogen-subdirs',
          filename : 'ecb-autogen.el',
          lispcode : '(defvar ecb-autogen-subdirs nil<br>  <apo>Sub-directories to scan for autoloads.<apo>)'
        },
        {
          variable : 'ecb-autotrace-autocontrol/sync-functions',
          filename : 'ecb-common-browser.el',
          docstring : '  "Allow autotracing the internal autocontrol/synchronisations of ECB.<br>All functions defined with `defecb-autocontrol/sync-function" can<br>be autotraced. The value of this variable is either nil (then no<br>autotracing will be performed) or t (then all functions defined with<br>`defecb-autocontrol/sync-function" will be traced) or a list of<br>function-symbols (then exactly these functions will be traced).<br><br>Auto-tracing means that each(!) time the function runs (either<br>by idle-timer or within pre- or post-command-hook) a trace-message on<br>function-entry and a trace-message on function exit is writen.")<br><br>(defvar ecb-bodytrace-autocontrol/sync-functions nil<br>  "Allows a body tracing of the internal autocontrol/synchronisations of ECB.<br>For allowed values for this variable see `ecb-autotrace-autocontrol/sync-functions"<br><br>Body-tracing means calls to `ecb-bodytrace-autocontrol/sync-fcn-error"<br>somewhere within the BODY of functions defined by<br>`defecb-autocontrol/sync-function". So by setting this variable tracing of the<br>BODY of autocontrol/sync-function can be switched on or off.")<br><br>(defun ecb-autotrace-autocontrol/sync-fcn-error (autocontrol-fcn &rest args)<br>  "Run ARGS through `format" and write it to the *Messages*-buffer.<br>Do not use this function for own traces, but use the function<br>`ecb-bodytrace-autocontrol/sync-fcn-error"!<br>Entry and exit-traces are already buildin in functions defined with<br>`defecb-autocontrol/sync-function" and can be switched on/off by<br>`ecb-autotrace-autocontrol/sync-functions"."',
          prototype : '(defvar ecb-autotrace-autocontrol/sync-functions nil',
          lispcode : '(defvar ecb-autotrace-autocontrol/sync-functions nil'
        },
        {
          variable : 'ecb-before-ediff-window-config',
          filename : 'ecb-compatibility.el',
          lispcode : '(defvar ecb-before-ediff-window-config nil)'
        },
        {
          variable : 'ecb-bodytrace-autocontrol/sync-functions',
          filename : 'ecb-common-browser.el',
          docstring : '  "Allows a body tracing of the internal autocontrol/synchronisations of ECB.<br>For allowed values for this variable see `ecb-autotrace-autocontrol/sync-functions"<br><br>Body-tracing means calls to `ecb-bodytrace-autocontrol/sync-fcn-error"<br>somewhere within the BODY of functions defined by<br>`defecb-autocontrol/sync-function". So by setting this variable tracing of the<br>BODY of autocontrol/sync-function can be switched on or off.")<br><br>(defun ecb-autotrace-autocontrol/sync-fcn-error (autocontrol-fcn &rest args)<br>  "Run ARGS through `format" and write it to the *Messages*-buffer.<br>Do not use this function for own traces, but use the function<br>`ecb-bodytrace-autocontrol/sync-fcn-error"!<br>Entry and exit-traces are already buildin in functions defined with<br>`defecb-autocontrol/sync-function" and can be switched on/off by<br>`ecb-autotrace-autocontrol/sync-functions"."',
          prototype : '(defvar ecb-bodytrace-autocontrol/sync-functions nil',
          lispcode : '(defvar ecb-bodytrace-autocontrol/sync-functions nil'
        },
        {
          variable : 'ecb-checkedin-file',
          filename : 'ecb-file-browser.el',
          docstring : '  "Stored the filename of the most recent checked-in file. Is only set by the<br>after-advice of `vc-checkin" and `ecb-vc-checkin-hook" (resets it to nil).<br>Evaluated only by `ecb-vc-checkin-hook".<br><br>This is the communication-channel between `vc-checkin" and<br>`ecb-vc-checkin-hook" so this hook-function gets the filename of the<br>checked-in file.")<br><br>(defecb-advice vc-checkin after ecb-vc-advices<br>  "Simply stores the filename of the checked-in file in `ecb-checkedin-file"<br>so it is available in the `vc-checkin-hook"."',
          prototype : '(defvar ecb-checkedin-file nil',
          lispcode : '(defvar ecb-checkedin-file nil'
        },
        {
          variable : 'ecb-common-directories-menu',
          filename : 'ecb-file-browser.el',
          lispcode : '(defvar ecb-common-directories-menu nil)<br>'
        },
        {
          variable : 'ecb-compilation-buffer-names-internal',
          filename : 'ecb-compilation.el',
          docstring : '  "This variable is for ECB internal use and can be used by ECB to add<br>buffer-names to the set specified in `ecb-compilation-buffer-names". Type is<br>the same as of option `ecb-compilation-buffer-names"")<br><br>(defun ecb-compilation-buffer-names ()<br>  "Return the set of buffer names which should be displayed in the<br>compile-window of ECB. This is a list combined of<br>`ecb-compilation-buffer-names" and `ecb-compilation-buffer-names-internal"."',
          prototype : '(defvar ecb-compilation-buffer-names-internal nil',
          lispcode : '(defvar ecb-compilation-buffer-names-internal nil'
        },
        {
          variable : 'ecb-compilation-major-modes-internal',
          filename : 'ecb-compilation.el',
          docstring : '  "This variable is for ECB internal use and can be used by ECB to add<br>major-mode symbols to the set specified in `ecb-compilation-major-modes".")<br><br>(defun ecb-compilation-major-modes ()<br>  "Return all major-mode symbols which should be displayed in the<br>compile-window. This is a list combined of `ecb-compilation-major-modes" and<br>`ecb-compilation-major-modes-internal"."',
          prototype : '(defvar ecb-compilation-major-modes-internal nil',
          lispcode : '(defvar ecb-compilation-major-modes-internal nil'
        },
        {
          variable : 'ecb-compilation-predicates-internal',
          filename : 'ecb-compilation.el',
          docstring : '  "This variable is for ECB internal use and can be used by ECB to add<br>predicates to the set defined in `ecb-compilation-predicates".")<br><br>(defun ecb-compilation-predicates ()<br>  "Return all predicates which should be used to test if a buffer should be<br>displayed in the compile-window. This is a list combined of<br>`ecb-compilation-predicates" and `ecb-compilation-predicates-internal"."',
          prototype : '(defvar ecb-compilation-predicates-internal nil',
          lispcode : '(defvar ecb-compilation-predicates-internal nil'
        },
        {
          variable : 'ecb-compilation-update-idle-time',
          filename : 'ecb-compilation.el',
          lispcode : '(defvar ecb-compilation-update-idle-time 0.25)'
        },
        {
          variable : 'ecb-compilation-update-menu-p',
          filename : 'ecb-compilation.el',
          lispcode : '(defvar ecb-compilation-update-menu-p nil)<br>(defvar ecb-compilation-buffer-list-cache nil)<br>(defvar ecb-compilation-update-idle-time 0.25)'
        },
        {
          variable : 'ecb-compile-window',
          filename : 'ecb-layout.el',
          lispcode : '(defvar ecb-compile-window nil<br>  <apo>Window to display compile-output in.<apo>)'
        },
        {
          variable : 'ecb-compile-window-height-lines',
          filename : 'ecb-layout.el',
          docstring : '  "Contains always the absolute number of lines (incl. modeline) of the<br>compile-window direct after a full redraw. Only set by<br>`ecb-redraw-layout-full" and evaluated and used by *all* mechanisms of ECB<br>which shrink back the compile-window to its specified height without doing a<br>full redraw!!")<br><br>(defvar ecb-compile-window-was-selected-before-command nil<br>  "Not nil only if the `ecb-compile-window" was selected before most recent<br>command.")<br><br>(defvar ecb-layout-default-window-sizes nil<br>  "Contains the the sizes of the ecb-windows of the current layout exactly as<br>drawn by the layout-function (see `ecb-redraw-layout-full").")<br><br>;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: remove this later - and all usages.<br>(defvar ecb-windows-hidden nil<br>  "Used with `ecb-toggle-ecb-windows". If true the ECB windows are hidden. Do<br>not change this variable!")<br><br>(defconst ecb-windows-hidden-all-value "all)<br>(defconst ecb-windows-hidden-none-value "none)<br><br>(defvar ecb-windows-hidden-state ecb-windows-hidden-none-value<br>  "Information which ECB windows are hidden.<br>The value is one of the symbols left-side, right-side, top-side,<br>none or all which indicates which ecb-windows are hidden (ie.<br>all ecb-windows on this frame-side are hidden).<br><br>"senseful" means that for a certain layout-type only certain<br>values are senseful, e.g. for a top-, left- or right-layout only<br>"none or "all is sensefull whereas for a left-right layout<br>"left-side, "right-side, "none or "all is possible and senseful.<br><br>Do not evaluate this variable - always use the functions<br>`ecb-windows-all-hidden", `ecb-windows-all-displayed" or<br>`ecb-windows-hidden-state-list"!")<br><br>;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: add assertion<br>;; for state not conflicting with current layout-type (maybe an own function<br>;; -- later)<br>(defun ecb-windows-all-hidden (&optional hidden-state)<br>  "Return not nil if all ecb-windows are hidden.<br>If HIDDEN-STATE is not nil then it must be of the same type as<br>`ecb-windows-hidden-state". If nil then the value of<br>`ecb-windows-hidden-state" is used.<br>This function has a "binary" semantic: a return value of nil<br>means that some or all ecb-windows of current layout are displayed and a<br>return value of not nil means that all ecb-windows are hidden."',
          prototype : '(defvar ecb-compile-window-height-lines nil',
          lispcode : '(defvar ecb-compile-window-height-lines nil'
        },
        {
          variable : 'ecb-compile-window-was-selected-before-command',
          filename : 'ecb-layout.el',
          docstring : '  "Not nil only if the `ecb-compile-window" was selected before most recent<br>command.")<br><br>(defvar ecb-layout-default-window-sizes nil<br>  "Contains the the sizes of the ecb-windows of the current layout exactly as<br>drawn by the layout-function (see `ecb-redraw-layout-full").")<br><br>;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: remove this later - and all usages.<br>(defvar ecb-windows-hidden nil<br>  "Used with `ecb-toggle-ecb-windows". If true the ECB windows are hidden. Do<br>not change this variable!")<br><br>(defconst ecb-windows-hidden-all-value "all)<br>(defconst ecb-windows-hidden-none-value "none)<br><br>(defvar ecb-windows-hidden-state ecb-windows-hidden-none-value<br>  "Information which ECB windows are hidden.<br>The value is one of the symbols left-side, right-side, top-side,<br>none or all which indicates which ecb-windows are hidden (ie.<br>all ecb-windows on this frame-side are hidden).<br><br>"senseful" means that for a certain layout-type only certain<br>values are senseful, e.g. for a top-, left- or right-layout only<br>"none or "all is sensefull whereas for a left-right layout<br>"left-side, "right-side, "none or "all is possible and senseful.<br><br>Do not evaluate this variable - always use the functions<br>`ecb-windows-all-hidden", `ecb-windows-all-displayed" or<br>`ecb-windows-hidden-state-list"!")<br><br>;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: add assertion<br>;; for state not conflicting with current layout-type (maybe an own function<br>;; -- later)<br>(defun ecb-windows-all-hidden (&optional hidden-state)<br>  "Return not nil if all ecb-windows are hidden.<br>If HIDDEN-STATE is not nil then it must be of the same type as<br>`ecb-windows-hidden-state". If nil then the value of<br>`ecb-windows-hidden-state" is used.<br>This function has a "binary" semantic: a return value of nil<br>means that some or all ecb-windows of current layout are displayed and a<br>return value of not nil means that all ecb-windows are hidden."',
          prototype : '(defvar ecb-compile-window-was-selected-before-command nil',
          lispcode : '(defvar ecb-compile-window-was-selected-before-command nil'
        },
        {
          variable : 'ecb-create-layout-edit-window',
          filename : 'ecb-create-layout.el',
          lispcode : '(defvar ecb-create-layout-edit-window nil)'
        },
        {
          variable : 'ecb-create-layout-frame',
          filename : 'ecb-create-layout.el',
          lispcode : '(defvar ecb-create-layout-frame nil)<br>(defvar ecb-create-layout-edit-window nil)'
        },
        {
          variable : 'ecb-current-input-throw-symbol',
          filename : 'ecb-util.el',
          lispcode : '(defvar ecb-current-input-throw-symbol nil<br>  <apo>The current throw symbol for <backtick>ecb-exit-on-input<tick>.<apo>)'
        },
        {
          variable : 'ecb-current-post-processed-tag-table',
          filename : 'ecb-method-browser.el',
          docstring : '  "This is the current tag-table of the current source-buffer returned by<br>`ecb-post-process-taglist". Do not set this variable, only the function<br>`ecb-rebuild-methods-buffer-with-tagcache" is allowed to do this.")<br>(make-variable-buffer-local "ecb-current-post-processed-tag-table)<br><br>(defun ecb-get-current-tag-table ()<br>  "Return the current tag-table of the current source-buffer returned by<br>`ecb-post-process-taglist". Use always this function if you just need the<br>current post-processed tag-table of the current buffer and you do not need or<br>want rebuilding the Methods-buffer."',
          prototype : '(defvar ecb-current-post-processed-tag-table nil',
          lispcode : '(defvar ecb-current-post-processed-tag-table nil'
        },
        {
          variable : 'ecb-directories-menu',
          filename : 'ecb-file-browser.el',
          docstring : '  "Built-in menu for the directories-buffer for directories which are not a<br>source-path of `ecb-source-path".")<br>(setq ecb-directories-menu<br>      (append<br>       ecb-common-directories-menu<br>       "((ecb-node-to-source-path "Make This a Source Path")<br>         ("---")<br>         (ecb-maximize-ecb-window-menu-wrapper "Maximize window"))))<br><br><br>(defvar ecb-directories-menu-title-creator<br>  (function (lambda (node)<br>              (let ((node-type (tree-node->type node))<br>                    (node-name (tree-node->name node)))<br>                    (cond ((= node-type ecb-directories-nodetype-directory)<br>                           (format "%s  (Directory)" node-name))<br>                          ((= node-type ecb-directories-nodetype-sourcefile)<br>                           (format "%s  (File)" node-name))<br>                          ((= node-type ecb-directories-nodetype-sourcepath)<br>                           (format "%s  (Source-path)" node-name))))))<br>  "The menu-title for the directories menu. Has to be either a string or a<br>function which is called with current node and has to return a string.")<br><br>(tree-buffer-defpopup-command ecb-open-source-in-editwin1<br>  "Open current source-file the 1. edit-window."',
          prototype : '(defvar ecb-directories-menu nil',
          lispcode : '(defvar ecb-directories-menu nil'
        },
        {
          variable : 'ecb-directories-menu-title-creator',
          filename : 'ecb-file-browser.el',
          docstring : '  "The menu-title for the directories menu. Has to be either a string or a<br>function which is called with current node and has to return a string.")<br><br>(tree-buffer-defpopup-command ecb-open-source-in-editwin1<br>  "Open current source-file the 1. edit-window."',
          prototype : '(defvar ecb-directories-menu-title-creator  (function (lambda (node)              (let ((node-type (tree-node->type node))                    (node-name (tree-node->name node)))                    (cond ((= node-type ecb-directories-nodetype-directory)                           (format "%s  (Directory)" node-name))                          ((= node-type ecb-directories-nodetype-sourcefile)                           (format "%s  (File)" node-name))                          ((= node-type ecb-directories-nodetype-sourcepath)                           (format "%s  (Source-path)" node-name))))))',
          lispcode : '(defvar ecb-directories-menu-title-creator<br>  (function (lambda (node)<br>              (let ((node-type (tree-node->type node))<br>                    (node-name (tree-node->name node)))<br>                    (cond ((= node-type ecb-directories-nodetype-directory)<br>                           (format <apo>%s  (Directory)<apo> node-name))<br>                          ((= node-type ecb-directories-nodetype-sourcefile)<br>                           (format <apo>%s  (File)<apo> node-name))<br>                          ((= node-type ecb-directories-nodetype-sourcepath)<br>                           (format <apo>%s  (Source-path)<apo> node-name))))))'
        },
        {
          variable : 'ecb-ecb-buffer-name-selected-before-command',
          filename : 'ecb-layout.el',
          docstring : '  "Not nil only if a special ecb-window was selected before most recent<br>command. If not nil it contains the buffer-name of this special ecb-buffer.")<br><br>(defvar ecb-layout-prevent-handle-ecb-window-selection nil<br>  "If not nil ECB will ignore in the post-command-hook auto. maximizing.")<br><br><br>(defun ecb-canonical-ecb-windows-list (&optional winlist)<br>  "Return a list of all visible ECB-windows.<br><br>Such a window must be dedicated to its ecb-buffer and defined for<br>the related buffer with `defecb-window-dedicator-to-ecb-buffer". The list<br>starts from the left-most top-most window in the order<br>`other-window" would walk through these windows."',
          prototype : '(defvar ecb-ecb-buffer-name-selected-before-command nil',
          lispcode : '(defvar ecb-ecb-buffer-name-selected-before-command nil'
        },
        {
          variable : 'ecb-ecb-buffer-registry',
          filename : 'ecb-common-browser.el',
          docstring : '  "The ecb-buffers registry.<br><br>Each special ecb-buffer must be registered at ECB in this registry.<br><br>Do not change this variable! This registration is done completely<br>by the macro `defecb-window-dedicator-to-ecb-buffer" and the<br>results are stored in this registry. Each item is a 4-element<br>list with the following contents:<br>1. elem: The buffer-name of the registered ecb-buffer<br>2. elem: The symbol which holds this buffer-name<br>3. elem: An indicator if the registered ecb-buffer is of type tree-buffer<br>   (i.e. this tree-buffer is created with `defecb-tree-buffer-creator"). Not<br>   nil in case of a tree-buffer otherwise nil<br>4. elem: A function which displays that buffer in current window<br>   when called and makes this window dedicated to this buffer. This is the<br>   DEDICATOR-argument of `defecb-window-dedicator-to-ecb-buffer".<br><br>The dedicator-function must do:<br>1. switch to that buffer in current window<br>2. all things necessary for this buffer - e.g. making it read-only<br><br>The setting function must ensure that the current window is still<br>current at the end and that the related ecb-buffer is displayed<br>in this window at the end. One examples of such a setting<br>function is `ecb-set-history-buffer" for the buffer with name<br>`ecb-history-buffer-name".<br><br>See `defecb-window-dedicator-to-ecb-buffer" for more details and an example.")<br><br>(defun ecb-ecb-buffer-registry-init ()<br>  (setq ecb-ecb-buffer-registry nil))<br><br>(defun ecb-ecb-buffer-registry-add (name name-symbol tree-buffer-p &optional set-fcn-symbol)<br>  (if (assoc name ecb-ecb-buffer-registry)<br>      (ecb-set-elt (assoc name ecb-ecb-buffer-registry) 3 set-fcn-symbol)<br>    (setq ecb-ecb-buffer-registry<br>          (cons (list name name-symbol tree-buffer-p set-fcn-symbol)<br>                ecb-ecb-buffer-registry))))<br><br>(defsubst ecb-ecb-buffer-registry-name-list (&optional only-tree-buffers)<br>  (delq nil (mapcar (function (lambda (e)<br>                                (and (or (not only-tree-buffers)<br>                                         (nth 2 e))<br>                                     (nth 0 e))))<br>                    ecb-ecb-buffer-registry)))<br><br>(defsubst ecb-ecb-buffer-registry-symbol-list (&optional only-tree-buffers)<br>  (delq nil (mapcar (function (lambda (e)<br>                                (and (or (not only-tree-buffers)<br>                                         (nth 2 e))<br>                                     (nth 1 e))))<br>                    ecb-ecb-buffer-registry)))<br><br>(defsubst ecb-ecb-buffer-registry-buffer-list (&optional only-tree-buffers)<br>  (delq nil (mapcar (function (lambda (e)<br>                                (and (or (not only-tree-buffers)<br>                                         (nth 2 e))<br>                                     (ecb-buffer-obj (nth 0 e)))))<br>                    ecb-ecb-buffer-registry)))<br><br>(defsubst ecb-ecb-buffer-registry-get-symbol (name)<br>  (nth 1 (assoc name ecb-ecb-buffer-registry)))<br><br>(defsubst ecb-ecb-buffer-registry-get-set-fcn (name)<br>  (nth 3 (assoc name ecb-ecb-buffer-registry)))<br><br><br>(defvar ecb-tree-buffer-callbacks "((expand . nil) (select . nil))<br>  "All callback-functions for the tree-buffers of ECB.<br>This list contains two items of the form:<br>(<callback-type> .(<buffer-callback-alist>))<br>where <callback-type> is "select and "expand and<br><buffer-callback-alist> is an alist where each item is a cons<br>like (<buffer-name-symbol> . <callback-symbol>)."',
          prototype : '(defvar ecb-ecb-buffer-registry nil',
          lispcode : '(defvar ecb-ecb-buffer-registry nil'
        },
        {
          variable : 'ecb-edit-window',
          filename : 'ecb-layout.el',
          docstring : '  "Only used internally by `ecb-redraw-layout-full". Do not refer to this<br>variable because the value is not predictable!")<br><br>(defvar ecb-last-edit-window-with-point nil<br>  "The edit-window of ECB which had the point before an emacs-command is<br>done.")<br><br>(defvar ecb-last-source-buffer nil<br>  "The source-buffer of `ecb-last-edit-window-with-point".")<br><br>(defvar ecb-last-compile-buffer-in-compile-window nil<br>  "The buffer in the compile-window before an emacs-command is done.")<br><br>(defvar ecb-compile-window nil<br>  "Window to display compile-output in.")<br><br>;; We need this absolute # of lines of the compile-window-height because if it<br>;; is specified by a fraction of the frame (e.g. 0.1) we need this information<br>;; at all places where the compile-window will be shrunken back to its<br>;; specified height and computing the height from the value of<br>;; `ecb-compile-window-height" will often be unequal to that height drawn by<br>;; `ecb-redraw-layout-full" ==> we store and use the height drawn by this<br>;; function.<br>(defvar ecb-compile-window-height-lines nil<br>  "Contains always the absolute number of lines (incl. modeline) of the<br>compile-window direct after a full redraw. Only set by<br>`ecb-redraw-layout-full" and evaluated and used by *all* mechanisms of ECB<br>which shrink back the compile-window to its specified height without doing a<br>full redraw!!")<br><br>(defvar ecb-compile-window-was-selected-before-command nil<br>  "Not nil only if the `ecb-compile-window" was selected before most recent<br>command.")<br><br>(defvar ecb-layout-default-window-sizes nil<br>  "Contains the the sizes of the ecb-windows of the current layout exactly as<br>drawn by the layout-function (see `ecb-redraw-layout-full").")<br><br>;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: remove this later - and all usages.<br>(defvar ecb-windows-hidden nil<br>  "Used with `ecb-toggle-ecb-windows". If true the ECB windows are hidden. Do<br>not change this variable!")<br><br>(defconst ecb-windows-hidden-all-value "all)<br>(defconst ecb-windows-hidden-none-value "none)<br><br>(defvar ecb-windows-hidden-state ecb-windows-hidden-none-value<br>  "Information which ECB windows are hidden.<br>The value is one of the symbols left-side, right-side, top-side,<br>none or all which indicates which ecb-windows are hidden (ie.<br>all ecb-windows on this frame-side are hidden).<br><br>"senseful" means that for a certain layout-type only certain<br>values are senseful, e.g. for a top-, left- or right-layout only<br>"none or "all is sensefull whereas for a left-right layout<br>"left-side, "right-side, "none or "all is possible and senseful.<br><br>Do not evaluate this variable - always use the functions<br>`ecb-windows-all-hidden", `ecb-windows-all-displayed" or<br>`ecb-windows-hidden-state-list"!")<br><br>;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: add assertion<br>;; for state not conflicting with current layout-type (maybe an own function<br>;; -- later)<br>(defun ecb-windows-all-hidden (&optional hidden-state)<br>  "Return not nil if all ecb-windows are hidden.<br>If HIDDEN-STATE is not nil then it must be of the same type as<br>`ecb-windows-hidden-state". If nil then the value of<br>`ecb-windows-hidden-state" is used.<br>This function has a "binary" semantic: a return value of nil<br>means that some or all ecb-windows of current layout are displayed and a<br>return value of not nil means that all ecb-windows are hidden."',
          prototype : '(defvar ecb-edit-window nil',
          lispcode : '(defvar ecb-edit-window nil'
        },
        {
          variable : 'ecb-error-object',
          filename : 'ecb.el',
          lispcode : '(defvar ecb-error-object nil<br>  <apo>Error object which contains the the error in a condition-case<apo>)'
        },
        {
          variable : 'ecb-eshell-buffer-list',
          filename : 'ecb-eshell.el',
          docstring : '  "List of eshell-buffers created until now.<br>Background: `eshell" creates new eshell-buffers with `generate-new-buffer" if<br>called with an prefix arg!")<br><br><br>(defecb-advice-set ecb-eshell-adviced-functions<br>  "These functions of eshell are adviced if ehsell is active during ECB is<br>active.")<br><br>(defecb-advice eshell around ecb-eshell-adviced-functions<br>  "Ensure that ehsell is running in the ECB-compile-window if any."',
          prototype : '(defvar ecb-eshell-buffer-list nil',
          lispcode : '(defvar ecb-eshell-buffer-list nil'
        },
        {
          variable : 'ecb-eshell-pre-command-point',
          filename : 'ecb-eshell.el',
          lispcode : '(defvar ecb-eshell-pre-command-point nil<br>  <apo>Point in the buffer we are at before we executed a command.<apo>)'
        },
        {
          variable : 'ecb-examples-action-buffer-keymap',
          filename : 'ecb-examples.el',
          lispcode : '(defvar ecb-examples-action-buffer-keymap nil)<br><br><br>'
        },
        {
          variable : 'ecb-examples-bufferinfo-last-file-buffer',
          filename : 'ecb-examples.el',
          lispcode : '(defvar ecb-examples-bufferinfo-last-file-buffer nil)<br>'
        },
        {
          variable : 'ecb-examples-preact-layout',
          filename : 'ecb-examples.el',
          lispcode : '(defvar ecb-examples-preact-layout nil)<br>(defvar ecb-examples-preact-windows-height nil)<br>(defvar ecb-examples-preact-compile-window-height nil)<br>(defun ecb-examples-preactivation-state(action)<br>  (cond ((equal action <tick>save)<br>         (setq ecb-examples-preact-layout<br>               ecb-layout-name<br>               ecb-examples-preact-windows-height<br>               ecb-windows-height<br>               ecb-examples-preact-compile-window-height<br>               ecb-compile-window-height))<br>        ((equal action <tick>restore)<br>         (setq ecb-layout-name<br>               ecb-examples-preact-layout<br>               ecb-windows-height<br>               ecb-examples-preact-windows-height<br>               ecb-compile-window-height<br>               ecb-examples-preact-compile-window-height))))<br><br><br>'
        },
        {
          variable : 'ecb-frame',
          filename : 'ecb-layout.el',
          docstring : '  "Frame where ECB runs. This frame is only set if this variable is nil or the<br>value points to a dead frame. Deactivation and activation of ECB does not set<br>this variable to nil!")<br><br>(defvar ecb-edit-window nil<br>  "Only used internally by `ecb-redraw-layout-full". Do not refer to this<br>variable because the value is not predictable!")<br><br>(defvar ecb-last-edit-window-with-point nil<br>  "The edit-window of ECB which had the point before an emacs-command is<br>done.")<br><br>(defvar ecb-last-source-buffer nil<br>  "The source-buffer of `ecb-last-edit-window-with-point".")<br><br>(defvar ecb-last-compile-buffer-in-compile-window nil<br>  "The buffer in the compile-window before an emacs-command is done.")<br><br>(defvar ecb-compile-window nil<br>  "Window to display compile-output in.")<br><br>;; We need this absolute # of lines of the compile-window-height because if it<br>;; is specified by a fraction of the frame (e.g. 0.1) we need this information<br>;; at all places where the compile-window will be shrunken back to its<br>;; specified height and computing the height from the value of<br>;; `ecb-compile-window-height" will often be unequal to that height drawn by<br>;; `ecb-redraw-layout-full" ==> we store and use the height drawn by this<br>;; function.<br>(defvar ecb-compile-window-height-lines nil<br>  "Contains always the absolute number of lines (incl. modeline) of the<br>compile-window direct after a full redraw. Only set by<br>`ecb-redraw-layout-full" and evaluated and used by *all* mechanisms of ECB<br>which shrink back the compile-window to its specified height without doing a<br>full redraw!!")<br><br>(defvar ecb-compile-window-was-selected-before-command nil<br>  "Not nil only if the `ecb-compile-window" was selected before most recent<br>command.")<br><br>(defvar ecb-layout-default-window-sizes nil<br>  "Contains the the sizes of the ecb-windows of the current layout exactly as<br>drawn by the layout-function (see `ecb-redraw-layout-full").")<br><br>;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: remove this later - and all usages.<br>(defvar ecb-windows-hidden nil<br>  "Used with `ecb-toggle-ecb-windows". If true the ECB windows are hidden. Do<br>not change this variable!")<br><br>(defconst ecb-windows-hidden-all-value "all)<br>(defconst ecb-windows-hidden-none-value "none)<br><br>(defvar ecb-windows-hidden-state ecb-windows-hidden-none-value<br>  "Information which ECB windows are hidden.<br>The value is one of the symbols left-side, right-side, top-side,<br>none or all which indicates which ecb-windows are hidden (ie.<br>all ecb-windows on this frame-side are hidden).<br><br>"senseful" means that for a certain layout-type only certain<br>values are senseful, e.g. for a top-, left- or right-layout only<br>"none or "all is sensefull whereas for a left-right layout<br>"left-side, "right-side, "none or "all is possible and senseful.<br><br>Do not evaluate this variable - always use the functions<br>`ecb-windows-all-hidden", `ecb-windows-all-displayed" or<br>`ecb-windows-hidden-state-list"!")<br><br>;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: add assertion<br>;; for state not conflicting with current layout-type (maybe an own function<br>;; -- later)<br>(defun ecb-windows-all-hidden (&optional hidden-state)<br>  "Return not nil if all ecb-windows are hidden.<br>If HIDDEN-STATE is not nil then it must be of the same type as<br>`ecb-windows-hidden-state". If nil then the value of<br>`ecb-windows-hidden-state" is used.<br>This function has a "binary" semantic: a return value of nil<br>means that some or all ecb-windows of current layout are displayed and a<br>return value of not nil means that all ecb-windows are hidden."',
          prototype : '(defvar ecb-frame nil',
          lispcode : '(defvar ecb-frame nil'
        },
        {
          variable : 'ecb-history-common-menu',
          filename : 'ecb-file-browser.el',
          docstring : '  "Common menu entries for history-nodes")<br>(setq ecb-history-common-menu<br>      "((ecb-popup-history-filter-all-existing "Exactly all living file-buffers")<br>        ("---")<br>        ("Bucketize"',
          prototype : '(defvar ecb-history-common-menu nil',
          lispcode : '(defvar ecb-history-common-menu nil<br>         (ecb-popup-history-bucketize-never <apo>No bucketizing<apo>)<br>         (ecb-popup-history-bucketize-by-dir <apo>by directory<apo>)<br>         (ecb-popup-history-bucketize-by-dir-with-sp <apo>by directory with source-path<apo>)<br>         (ecb-popup-history-bucketize-by-mode <apo>by major-mode<apo>)<br>         (ecb-popup-history-bucketize-by-ext <apo>by file-extension<apo>)<br>         (ecb-popup-history-bucketize-by-reg <apo>by reg. expr.<apo>))<br>        (<apo>---<apo>)<br>        (ecb-maximize-ecb-window-menu-wrapper <apo>Maximize window<apo>)))<br>'
        },
        {
          variable : 'ecb-history-filter',
          filename : 'ecb-file-browser.el',
          docstring : '  "A cons-cell where car is the filter-function and the cdr is a string how<br>the current active filter should be displayed in the modeline of<br>the History-buffer. The filter-function gets as arguments the<br>buffername and the filename of an existing file-buffer and has to<br>return not nil if for these data a history-entry should be<br>added.")<br><br>(defun ecb-reset-history-filter ()<br>  "Reset the `ecb-history-filter" so all file-buffers are displayed."',
          prototype : '(defvar ecb-history-filter nil',
          lispcode : '(defvar ecb-history-filter nil'
        },
        {
          variable : 'ecb-history-menu',
          filename : 'ecb-file-browser.el',
          docstring : '  "Built-in menu for the history-buffer.")<br>(setq ecb-history-menu<br>      (append<br>       "(("Grep"',
          prototype : '(defvar ecb-history-menu nil',
          lispcode : '(defvar ecb-history-menu nil<br>          (ecb-grep-directory <apo>Grep Directory<apo>)<br>          (ecb-grep-find-directory <apo>Grep Directory recursive<apo>))<br>         ;;(<apo>---<apo>)<br>         (<apo>Dired<apo><br>          (ecb-dired-directory <apo>Open Dir in Dired<apo>)<br>          (ecb-dired-directory-other-window <apo>Open Dir in Dired other window<apo>))<br>         (<apo>Filter<apo><br>          (ecb-popup-history-filter-by-ext <apo>Filter by extension<apo>)<br>          (ecb-popup-history-filter-by-regexp <apo>Filter by regexp<apo>)<br>          (ecb-popup-history-filter-all-existing <apo>No filter<apo>))<br>         (<apo>---<apo>)<br>         (ecb-history-kill-buffer <apo>Kill Buffer<apo>)<br>         (ecb-delete-source <apo>Delete Sourcefile<apo>))'
        },
        {
          variable : 'ecb-history-menu-title-creator',
          filename : 'ecb-file-browser.el',
          docstring : '  "The menu-title for the history menu. See<br>`ecb-directories-menu-title-creator".")<br><br>(defun ecb-history-menu-creator (tree-buffer-name node)<br>  "Creates the popup-menus for the history-buffer."',
          prototype : '(defvar ecb-history-menu-title-creator  (function (lambda (node)              (tree-node->name node)))',
          lispcode : '(defvar ecb-history-menu-title-creator<br>  (function (lambda (node)<br>              (tree-node->name node)))'
        },
        {
          variable : 'ecb-images-can-be-used',
          filename : 'ecb-util.el',
          docstring : '  "INTERNAL - DO NOT USE AND CHANGE!")<br>(defvar ecb-images-can-be-used-init-p nil<br>  "INTERNAL - DO NOT USE AND CHANGE!")<br><br>(defun ecb-images-can-be-used ()<br>  "Not nil if images can be used with current Emacs setup."',
          prototype : '(defvar ecb-images-can-be-used nil',
          lispcode : '(defvar ecb-images-can-be-used nil'
        },
        {
          variable : 'ecb-item-in-tree-buffer-selected',
          filename : 'ecb.el',
          docstring : '  "Only true if any item in any tree-buffer has been selected in recent<br>command.")<br><br>(defun ecb-initialize-all-internals (&optional no-caches)<br>  (ecb-ecb-buffer-registry-init)<br>  (setq ecb-major-mode-selected-source nil<br>        ecb-item-in-tree-buffer-selected nil)<br>  (ecb-file-browser-initialize no-caches)<br>  (ecb-method-browser-initialize no-caches))<br><br>;; Klaus Berndl <klaus.berndl@sdm.de>: FRAME-LOCAL<br>(defvar ecb-minor-mode nil<br>  "Do not set this variable directly. Use `ecb-activate" and<br>`ecb-deactivate" or `ecb-minor-mode".!")<br><br>(defvar ecb-activated-window-configuration nil<br>  "Window configuration used after the ECB is activated.")<br><br>;;====================================================<br>;; Customization<br>;;====================================================<br><br>(defgroup ecb nil<br>  "Emacs code browser."',
          prototype : '(defvar ecb-item-in-tree-buffer-selected nil',
          lispcode : '(defvar ecb-item-in-tree-buffer-selected nil'
        },
        {
          variable : 'ecb-last-compile-buffer-in-compile-window',
          filename : 'ecb-layout.el',
          lispcode : '(defvar ecb-last-compile-buffer-in-compile-window nil<br>  <apo>The buffer in the compile-window before an emacs-command is done.<apo>)'
        },
        {
          variable : 'ecb-last-edit-window-with-point',
          filename : 'ecb-layout.el',
          docstring : '  "The edit-window of ECB which had the point before an emacs-command is<br>done.")<br><br>(defvar ecb-last-source-buffer nil<br>  "The source-buffer of `ecb-last-edit-window-with-point".")<br><br>(defvar ecb-last-compile-buffer-in-compile-window nil<br>  "The buffer in the compile-window before an emacs-command is done.")<br><br>(defvar ecb-compile-window nil<br>  "Window to display compile-output in.")<br><br>;; We need this absolute # of lines of the compile-window-height because if it<br>;; is specified by a fraction of the frame (e.g. 0.1) we need this information<br>;; at all places where the compile-window will be shrunken back to its<br>;; specified height and computing the height from the value of<br>;; `ecb-compile-window-height" will often be unequal to that height drawn by<br>;; `ecb-redraw-layout-full" ==> we store and use the height drawn by this<br>;; function.<br>(defvar ecb-compile-window-height-lines nil<br>  "Contains always the absolute number of lines (incl. modeline) of the<br>compile-window direct after a full redraw. Only set by<br>`ecb-redraw-layout-full" and evaluated and used by *all* mechanisms of ECB<br>which shrink back the compile-window to its specified height without doing a<br>full redraw!!")<br><br>(defvar ecb-compile-window-was-selected-before-command nil<br>  "Not nil only if the `ecb-compile-window" was selected before most recent<br>command.")<br><br>(defvar ecb-layout-default-window-sizes nil<br>  "Contains the the sizes of the ecb-windows of the current layout exactly as<br>drawn by the layout-function (see `ecb-redraw-layout-full").")<br><br>;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: remove this later - and all usages.<br>(defvar ecb-windows-hidden nil<br>  "Used with `ecb-toggle-ecb-windows". If true the ECB windows are hidden. Do<br>not change this variable!")<br><br>(defconst ecb-windows-hidden-all-value "all)<br>(defconst ecb-windows-hidden-none-value "none)<br><br>(defvar ecb-windows-hidden-state ecb-windows-hidden-none-value<br>  "Information which ECB windows are hidden.<br>The value is one of the symbols left-side, right-side, top-side,<br>none or all which indicates which ecb-windows are hidden (ie.<br>all ecb-windows on this frame-side are hidden).<br><br>"senseful" means that for a certain layout-type only certain<br>values are senseful, e.g. for a top-, left- or right-layout only<br>"none or "all is sensefull whereas for a left-right layout<br>"left-side, "right-side, "none or "all is possible and senseful.<br><br>Do not evaluate this variable - always use the functions<br>`ecb-windows-all-hidden", `ecb-windows-all-displayed" or<br>`ecb-windows-hidden-state-list"!")<br><br>;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: add assertion<br>;; for state not conflicting with current layout-type (maybe an own function<br>;; -- later)<br>(defun ecb-windows-all-hidden (&optional hidden-state)<br>  "Return not nil if all ecb-windows are hidden.<br>If HIDDEN-STATE is not nil then it must be of the same type as<br>`ecb-windows-hidden-state". If nil then the value of<br>`ecb-windows-hidden-state" is used.<br>This function has a "binary" semantic: a return value of nil<br>means that some or all ecb-windows of current layout are displayed and a<br>return value of not nil means that all ecb-windows are hidden."',
          prototype : '(defvar ecb-last-edit-window-with-point nil',
          lispcode : '(defvar ecb-last-edit-window-with-point nil'
        },
        {
          variable : 'ecb-last-major-mode',
          filename : 'ecb-layout.el',
          lispcode : '(defvar ecb-last-major-mode nil)'
        },
        {
          variable : 'ecb-last-selected-layout',
          filename : 'ecb-layout.el',
          docstring : '  "Name of that layout which was current direct before switching to another<br>layout.")<br><br>;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: UPDATE the layout-list in the docstring...<br>(defcustom ecb-layout-name "left8"',
          prototype : '(defvar ecb-last-selected-layout nil',
          lispcode : '(defvar ecb-last-selected-layout nil'
        },
        {
          variable : 'ecb-last-source-buffer',
          filename : 'ecb-layout.el',
          lispcode : '(defvar ecb-last-source-buffer nil<br>  <apo>The source-buffer of <backtick>ecb-last-edit-window-with-point<tick>.<apo>)'
        },
        {
          variable : 'ecb-layout-default-window-sizes',
          filename : 'ecb-layout.el',
          docstring : '  "Contains the the sizes of the ecb-windows of the current layout exactly as<br>drawn by the layout-function (see `ecb-redraw-layout-full").")<br><br>;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: remove this later - and all usages.<br>(defvar ecb-windows-hidden nil<br>  "Used with `ecb-toggle-ecb-windows". If true the ECB windows are hidden. Do<br>not change this variable!")<br><br>(defconst ecb-windows-hidden-all-value "all)<br>(defconst ecb-windows-hidden-none-value "none)<br><br>(defvar ecb-windows-hidden-state ecb-windows-hidden-none-value<br>  "Information which ECB windows are hidden.<br>The value is one of the symbols left-side, right-side, top-side,<br>none or all which indicates which ecb-windows are hidden (ie.<br>all ecb-windows on this frame-side are hidden).<br><br>"senseful" means that for a certain layout-type only certain<br>values are senseful, e.g. for a top-, left- or right-layout only<br>"none or "all is sensefull whereas for a left-right layout<br>"left-side, "right-side, "none or "all is possible and senseful.<br><br>Do not evaluate this variable - always use the functions<br>`ecb-windows-all-hidden", `ecb-windows-all-displayed" or<br>`ecb-windows-hidden-state-list"!")<br><br>;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: add assertion<br>;; for state not conflicting with current layout-type (maybe an own function<br>;; -- later)<br>(defun ecb-windows-all-hidden (&optional hidden-state)<br>  "Return not nil if all ecb-windows are hidden.<br>If HIDDEN-STATE is not nil then it must be of the same type as<br>`ecb-windows-hidden-state". If nil then the value of<br>`ecb-windows-hidden-state" is used.<br>This function has a "binary" semantic: a return value of nil<br>means that some or all ecb-windows of current layout are displayed and a<br>return value of not nil means that all ecb-windows are hidden."',
          prototype : '(defvar ecb-layout-default-window-sizes nil',
          lispcode : '(defvar ecb-layout-default-window-sizes nil'
        },
        {
          variable : 'ecb-layout-prevent-handle-ecb-window-selection',
          filename : 'ecb-layout.el',
          docstring : '  "If not nil ECB will ignore in the post-command-hook auto. maximizing.")<br><br><br>(defun ecb-canonical-ecb-windows-list (&optional winlist)<br>  "Return a list of all visible ECB-windows.<br><br>Such a window must be dedicated to its ecb-buffer and defined for<br>the related buffer with `defecb-window-dedicator-to-ecb-buffer". The list<br>starts from the left-most top-most window in the order<br>`other-window" would walk through these windows."',
          prototype : '(defvar ecb-layout-prevent-handle-ecb-window-selection nil',
          lispcode : '(defvar ecb-layout-prevent-handle-ecb-window-selection nil'
        },
        {
          variable : 'ecb-layouts-reload-needed',
          filename : 'ecb-layout.el',
          docstring : '  "Load all defined layouts"',
          prototype : '(defvar ecb-layouts-reload-needed t)(defun ecb-load-layouts ()',
          lispcode : '(defvar ecb-layouts-reload-needed t)<br>(defun ecb-load-layouts ()<br>  (when ecb-layouts-reload-needed<br>    (require <tick>ecb-layout-defs)<br>    (if (file-readable-p ecb-create-layout-file)<br>        (load-file ecb-create-layout-file))<br>    (setq ecb-layouts-reload-needed nil)))'
        },
        {
          variable : 'ecb-major-mode-selected-source',
          filename : 'ecb.el',
          lispcode : '(defvar ecb-major-mode-selected-source nil<br>  <apo>Major-mode of currently selected source.<apo>)'
        },
        {
          variable : 'ecb-max-submenu-depth',
          filename : 'ecb-util.el',
          lispcode : '(defvar ecb-max-submenu-depth 4<br>  <apo>The maximum depth of nesting submenus for the tree-buffers.<apo>)'
        },
        {
          variable : 'ecb-menu-name',
          filename : 'ecb.el',
          docstring : '   "-"',
          prototype : '(defvar ecb-menu-name "ECB")(defvar ecb-menu-bar  (list   ecb-menu-name    [ "Select ECB frame"      ecb-select-ecb-frame      :active (and ecb-minor-mode                   (not (equal (selected-frame) ecb-frame)))      :help "Select the ECB-frame."      ]    [ "Synchronize ECB windows"      (ecb-window-sync)      :active (and (equal (selected-frame) ecb-frame)                   (ecb-point-in-edit-window-number))      :help "Synchronize the ECB windows with the current edit-window."      ]    [ "Update directories buffer"      ecb-update-directories-buffer      :active (equal (selected-frame) ecb-frame)      :help "Updates the directories buffer with current disk-state"      ]    [ "Add all buffers to history"      ecb-add-all-buffers-to-history      :active (and (equal (selected-frame) ecb-frame)                   (ecb-window-live-p ecb-history-buffer-name))      :help "Add all current file-buffers to history"      ]',
          lispcode : '(defvar ecb-menu-name <apo>ECB<apo>)<br>(defvar ecb-menu-bar<br>  (list<br>   ecb-menu-name<br>    [ <apo>Select ECB frame<apo><br>      ecb-select-ecb-frame<br>      :active (and ecb-minor-mode<br>                   (not (equal (selected-frame) ecb-frame)))<br>      :help <apo>Select the ECB-frame.<apo><br>      ]<br>    [ <apo>Synchronize ECB windows<apo><br>      (ecb-window-sync)<br>      :active (and (equal (selected-frame) ecb-frame)<br>                   (ecb-point-in-edit-window-number))<br>      :help <apo>Synchronize the ECB windows with the current edit-window.<apo><br>      ]<br>    [ <apo>Update directories buffer<apo><br>      ecb-update-directories-buffer<br>      :active (equal (selected-frame) ecb-frame)<br>      :help <apo>Updates the directories buffer with current disk-state<apo><br>      ]<br>    [ <apo>Add all buffers to history<apo><br>      ecb-add-all-buffers-to-history<br>      :active (and (equal (selected-frame) ecb-frame)<br>                   (ecb-window-live-p ecb-history-buffer-name))<br>      :help <apo>Add all current file-buffers to history<apo><br>      ]<br>    [ <apo>Rebuild methods buffer<apo><br>      ecb-rebuild-methods-buffer<br>      :active (equal (selected-frame) ecb-frame)<br>      :help <apo>Rebuild the methods buffer completely<apo><br>      ]<br>    [ <apo>Expand methods buffer<apo><br>      ecb-expand-methods-nodes<br>      :active (equal (selected-frame) ecb-frame)<br>      :help <apo>Expand all nodes of a certain indent-level<apo><br>      ]<br>    [ <apo>Toggle auto. expanding of the method buffer<apo><br>      ecb-toggle-auto-expand-tag-tree<br>      :active (equal (selected-frame) ecb-frame)<br>      :help <apo>Toggle auto. expanding of the method buffer<apo><br>      ]<br>   <apo>-<apo><br>    [ <apo>Change layout<apo><br>      ecb-change-layout<br>      :active (equal (selected-frame) ecb-frame)<br>      :help <apo>Change the layout.<apo><br>      ]<br>    [ <apo>Redraw layout<apo><br>      ecb-redraw-layout<br>      :active (equal (selected-frame) ecb-frame)<br>      :help <apo>Redraw the current layout.<apo><br>      ]<br>    [ <apo>Toggle layout<apo><br>      ecb-toggle-layout<br>      :active (and (equal (selected-frame) ecb-frame)<br>                   (> (length ecb-toggle-layout-sequence) 1))<br>      :help <apo>Toggle between several layouts<apo><br>      ]<br>    [ <apo>Toggle visibility of ECB windows<apo><br>      ecb-toggle-ecb-windows<br>      :active (equal (selected-frame) ecb-frame)<br>      :help <apo>Toggle the visibility of all ECB windows.<apo><br>      ]<br>   (list<br>    <apo>Layout administration<apo><br>     [ <apo>Store current window-sizes<apo><br>       ecb-store-window-sizes<br>       :active (equal (selected-frame) ecb-frame)<br>       :help <apo>Store current sizes of the ecb-windows in current layout.<apo><br>       ]<br>     [ <apo>Restore sizes of the ecb-windows<apo><br>       ecb-restore-window-sizes<br>       :active (equal (selected-frame) ecb-frame)<br>       :help <apo>Restore the sizes of the ecb-windows in current layout.<apo><br>       ]<br>     [ <apo>Restore default-sizes of the ecb-windows<apo><br>       ecb-restore-default-window-sizes<br>       :active (equal (selected-frame) ecb-frame)<br>       :help <apo>Restore the default-sizes of the ecb-windows in current layout.<apo><br>       ]<br>    <apo>-<apo><br>     [ <apo>Create new layout<apo><br>       ecb-create-new-layout<br>       :active (equal (selected-frame) ecb-frame)<br>       :help <apo>Create a new ECB-layout.<apo><br>       ]<br>     [ <apo>Delete new layout<apo><br>       ecb-delete-new-layout<br>       :active (equal (selected-frame) ecb-frame)<br>       :help <apo>Delete an user-created ECB-layout.<apo><br>       ]<br>    <apo>-<apo><br>     [ <apo>Show help for a layout<apo><br>       ecb-show-layout-help<br>       :active t<br>       :help <apo>Show the documentation for a layout.<apo><br>       ])<br>   <apo>-<apo><br>    [ <apo>Toggle compile window<apo><br>      ecb-toggle-compile-window<br>      :active (equal (selected-frame) ecb-frame)<br>      :help <apo>Toggle visibility of compile window.<apo><br>      ]<br>    [ <apo>Toggle enlarged compile window<apo><br>      ecb-toggle-compile-window-height<br>      :active (and (equal (selected-frame) ecb-frame)<br>                   ecb-compile-window<br>                   (ecb-compile-window-live-p))<br>      :help <apo>Toggle enlarged compile window.<apo><br>      ]<br>   <apo>-<apo><br>   (list<br>    <apo>Navigate<apo><br>     [<apo>Previous \(back)<apo><br>      ecb-nav-goto-previous<br>      :active t<br>      :help <apo>Go to the previous navigation point<apo><br>      ]<br>     [<apo>Next \(forward)<apo><br>      ecb-nav-goto-next<br>      :active t<br>      :help <apo>Go to the next navigation point<apo><br>      ])<br>   (list<br>    <apo>Goto window<apo><br>     [<apo>Last selected edit-window<apo><br>      ecb-goto-window-edit-last<br>      :active t<br>      :help <apo>Go to the last selected edit-window<apo><br>      ]<br>     [<apo>Edit-window 1<apo><br>      ecb-goto-window-edit1<br>      :active t<br>      :help <apo>Go to the first edit-window<apo><br>      ]<br>     [<apo>Edit-window 2<apo><br>      ecb-goto-window-edit2<br>      :active (ecb-edit-window-splitted)<br>      :help <apo>Go to the second edit-window \(if splitted\)<apo><br>      ]<br>     [<apo>Directories<apo><br>      ecb-goto-window-directories<br>      :active (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-directories-buffer-name)<br>      :help <apo>Go to the directories window<apo><br>      ]<br>     [<apo>Sources<apo><br>      ecb-goto-window-sources<br>      :active (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-sources-buffer-name)<br>      :help <apo>Go to the sources window<apo><br>      ]<br>     [<apo>Methods and Variables<apo><br>      ecb-goto-window-methods<br>      :active (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-methods-buffer-name)<br>      :help <apo>Go to the methods/variables window<apo><br>      ]<br>     [<apo>History<apo><br>      ecb-goto-window-history<br>      :active (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-history-buffer-name)<br>      :help <apo>Go to the history window<apo><br>      ]<br>     [<apo>Analyse<apo><br>      ecb-goto-window-analyse<br>      :active (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-analyse-buffer-name)<br>      :help <apo>Go to the analyse window<apo><br>      ]<br>     [<apo>Speedbar<apo><br>      ecb-goto-window-speedbar<br>      :active (and ecb-use-speedbar-instead-native-tree-buffer<br>                   (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-speedbar-buffer-name))<br>      :help <apo>Go to the integrated speedbar window<apo><br>      ]<br>     [<apo>Compilation<apo><br>      ecb-goto-window-compilation<br>      :active (equal <tick>visible (ecb-compile-window-state))<br>      :help <apo>Go to the history window<apo><br>      ]<br>    )<br>   (list<br>    <apo>Display window maximized<apo><br>     [<apo>Directories<apo><br>      ecb-maximize-window-directories<br>      :active (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-directories-buffer-name)<br>      :help <apo>Maximize the directories window - even if currently not visible<apo><br>      ]<br>     [<apo>Sources<apo><br>      ecb-maximize-window-sources<br>      :active (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-sources-buffer-name)<br>      :help <apo>Maximize the sources window - even if currently not visible<apo><br>      ]<br>     [<apo>Methods and Variables<apo><br>      ecb-maximize-window-methods<br>      :active (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-methods-buffer-name)<br>      :help <apo>Maximize the methods/variables window - even if currently not visible<apo><br>      ]<br>     [<apo>History<apo><br>      ecb-maximize-window-history<br>      :active (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-history-buffer-name)<br>      :help <apo>Maximize the history window - even if currently not visible<apo><br>      ]<br>     [<apo>Analyse<apo><br>      ecb-maximize-window-analyse<br>      :active (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-analyse-buffer-name)<br>      :help <apo>Maximize the analyse window - even if currently not visible<apo><br>      ]<br>     [<apo>Speedbar<apo><br>      ecb-maximize-window-speedbar<br>      :active (and ecb-use-speedbar-instead-native-tree-buffer<br>                   (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-speedbar-buffer-name))<br>      :help <apo>Maximize the integrated speedbar window - even if not visible<apo><br>      ]<br>    )<br>   <apo>-<apo><br>   (list<br>    <apo>Preferences<apo><br>     [<apo>Most important...<apo><br>      (customize-group <apo>ecb-most-important<apo>)<br>      :active t<br>      :help <apo>Customize the most important options<apo><br>      ]<br>     [<apo>All...<apo><br>      (ecb-customize)<br>      :active t<br>      :help <apo>Display all available option-groups...<apo><br>      ]<br>    <apo>-<apo><br>     [<apo>General...<apo><br>      (customize-group <apo>ecb-general<apo>)<br>      :active t<br>      :help <apo>Customize general ECB options<apo><br>      ]<br>     [<apo>Directories...<apo><br>      (customize-group <apo>ecb-directories<apo>)<br>      :active t<br>      :help <apo>Customize ECB directories<apo><br>      ]<br>     [<apo>Sources...<apo><br>      (customize-group <apo>ecb-sources<apo>)<br>      :active t<br>      :help <apo>Customize ECB sources<apo><br>      ]<br>     [<apo>Methods...<apo><br>      (customize-group <apo>ecb-methods<apo>)<br>      :active t<br>      :help <apo>Customize ECB method display<apo><br>      ]<br>     [<apo>History...<apo><br>      (customize-group <apo>ecb-history<apo>)<br>      :active t<br>      :help <apo>Customize ECB history<apo><br>      ]<br>     [<apo>Analyse...<apo><br>      (customize-group <apo>ecb-analyse<apo>)<br>      :active t<br>      :help <apo>Customize ECB analyse ingeractor<apo><br>      ]<br>     [<apo>Version control...<apo><br>      (customize-group <apo>ecb-version-control<apo>)<br>      :active t<br>      :help <apo>Customize the version-control-support<apo><br>      ]<br>     [<apo>Layout...<apo><br>      (customize-group <apo>ecb-layout<apo>)<br>      :active t<br>      :help <apo>Customize ECB layout<apo><br>      ]<br>     [<apo>Tree-buffer style and handling...<apo><br>      (customize-group <apo>ecb-tree-buffer<apo>)<br>      :active t<br>      :help <apo>Customize the tree-buffers of ECB<apo><br>      ]<br>     [<apo>Face options...<apo><br>      (customize-group <apo>ecb-face-options<apo>)<br>      :active t<br>      :help <apo>Customize ECB faces<apo><br>      ]<br>     [<apo>Help options...<apo><br>      (customize-group <apo>ecb-help<apo>)<br>      :active t<br>      :help <apo>Customize options for the online help of ECB<apo><br>      ]<br>     [<apo>ECB/eshell options...<apo><br>      (customize-group <apo>ecb-eshell<apo>)<br>      :active t<br>      :help <apo>Customize options for the eshell integration of ECB<apo><br>      ]<br>     [<apo>Supporting non-semantic-sources...<apo><br>      (customize-group <apo>ecb-non-semantic<apo>)<br>      :active t<br>      :help <apo>Customize options for parsing non-semantic-sources<apo><br>      ]<br>     [<apo>Supporting window-managers...<apo><br>      (customize-group <apo>ecb-winman-support<apo>)<br>      :active t<br>      :help <apo>Customize options for the window-manager-support<apo><br>      ]<br>    )<br>   (list<br>    <apo>Upgrade ECB<apo><br>     [ <apo>Upgrade ECB-options to current ECB-version<apo><br>       ecb-upgrade-options<br>       :active (equal (selected-frame) ecb-frame)<br>       :help <apo>Try to upgrade ECB-options to current ECB-version if necessary.<apo><br>       ]<br>    )<br>   (list<br>    <apo>Help<apo><br>     [ <apo>Show Online Help<apo><br>       ecb-show-help<br>       :active t<br>       :help <apo>Show the online help of ECB.<apo><br>       ]<br>     [ <apo>ECB NEWS<apo><br>       (ecb-display-news-for-upgrade t)<br>       :active t<br>       :help <apo>Displays the NEWS-file of ECB.<apo><br>       ]<br>     [ <apo>List of most important options<apo><br>       (let ((ecb-show-help-format <tick>info))<br>         (ecb-show-help)<br>         (Info-goto-node <apo>Most important options<apo>))<br>       :active t<br>       :help <apo>Displays a a list of options which you should know.<apo><br>       ]<br>     [ <apo>List of all options<apo><br>       (let ((ecb-show-help-format <tick>info))<br>         (ecb-show-help)<br>         (Info-goto-node <apo>Option Index<apo>))<br>       :active t<br>       :help <apo>Displays an index of all user-options in the online-help.<apo><br>       ]<br>     [ <apo>List of all commands<apo><br>       (let ((ecb-show-help-format <tick>info))<br>         (ecb-show-help)<br>         (Info-goto-node <apo>Command Index<apo>))<br>       :active t<br>       :help <apo>Displays an index of all commands in the online-help.<apo><br>       ]<br>     [ <apo>FAQ<apo><br>       (let ((ecb-show-help-format <tick>info))<br>         (ecb-show-help)<br>         (Info-goto-node <apo>FAQ<apo>))<br>       :active t<br>       :help <apo>Show the FAQ of ECB.<apo><br>       ]<br>     [ <apo>Conflicts with other packages<apo><br>       (let ((ecb-show-help-format <tick>info))<br>         (ecb-show-help)<br>         (Info-goto-node <apo>Conflicts and bugs<apo>))<br>       :active t<br>       :help <apo>What to do for conflicts with other packages.<apo><br>       ]<br>     [ <apo>Submit problem report<apo><br>       ecb-submit-problem-report<br>       :active t<br>       :help <apo>Submit a problem report to the ECB mailing list.<apo><br>       ]<br>     [ <apo>ECB Debug mode<apo><br>       (setq ecb-debug-mode (not ecb-debug-mode))<br>       :active t<br>       :style toggle<br>       :selected ecb-debug-mode<br>       :help <apo>Print debug-informations about parsing files in the message buffer.<apo><br>       ]<br>     [ <apo>ECB Layout Debug mode<apo><br>       (setq ecb-layout-debug-mode (not ecb-layout-debug-mode))<br>       :active t<br>       :style toggle<br>       :selected ecb-layout-debug-mode<br>       :help <apo>Print debug-informations about window-operations in the message buffer.<apo><br>       ]<br>    <apo>-<apo><br>     [<apo>Help preferences...<apo><br>      (customize-group <apo>ecb-help<apo>)<br>      :active t<br>      :help <apo>Customize options for the online help of ECB<apo><br>      ]<br>    <apo>-<apo><br>    (concat <apo>ECB <apo> ecb-version)<br>    )<br>   <apo>-<apo><br>    [ <apo>Deactivate ECB<apo><br>      ecb-deactivate<br>      :active t<br>      :help <apo>Deactivate ECB.<apo><br>      ]<br>   )<br>  <apo>Menu for ECB minor mode.<apo>)'
        },
        {
          variable : 'ecb-method-buffer-needs-rebuild',
          filename : 'ecb-method-browser.el',
          docstring : '  "This variable is only set and evaluated by the functions<br>`ecb-update-methods-buffer--internal" and<br>`ecb-rebuild-methods-buffer-with-tagcache"!")<br><br>(defvar ecb-method-buffer-rebuild-allowed-for-invisible-buffers nil<br>  "This variable is only set and evaluated by the functions<br>`ecb-update-methods-buffer--internal" and<br>`ecb-rebuild-methods-buffer-with-tagcache"!")<br><br><br>(defun ecb-update-methods-buffer--internal (&optional scroll-to-top<br>                                                      rebuild-non-semantic<br>                                                      full-semantic<br>                                                      invisible-sourcebuffer-allowed)<br>  "Updates the methods buffer with the current buffer. The only thing what<br>must be done is to start the toplevel parsing of semantic, because the rest is<br>done by `ecb-rebuild-methods-buffer-with-tagcache" because this function is in<br>the `semantic-after-toplevel-cache-change-hook".<br>If optional argument SCROLL-TO-TOP is non nil then the method-buffer is<br>displayed with window-start and point at beginning of buffer.<br><br>If second optional argument REBUILD-NON-SEMANTIC is not nil then non-semantic<br>sources are forced to be rescanned and reparsed by<br>`ecb-rebuild-methods-buffer-with-tagcache". The function<br>`ecb-rebuild-methods-buffer-for-non-semantic" is the only one settings this<br>argument to not nil!<br><br>If third optional arg FULL-SEMANTIC is not nil then for semantic-sources an<br>immediate parse-run is triggered - not an idle one! Has no effect for<br>non-semantic-sources.<br><br>If fourth optional argument INVISIBLE-SOURCEBUFFER-ALLOWED is not NIL then we<br>drive `ecb-rebuild-methods-buffer-with-tagcache" so it does not prevent<br>rebuilding a not visible source-buffer."',
          prototype : '(defvar ecb-method-buffer-needs-rebuild t',
          lispcode : '(defvar ecb-method-buffer-needs-rebuild t'
        },
        {
          variable : 'ecb-method-buffer-rebuild-allowed-for-invisible-buffers',
          filename : 'ecb-method-browser.el',
          docstring : '  "This variable is only set and evaluated by the functions<br>`ecb-update-methods-buffer--internal" and<br>`ecb-rebuild-methods-buffer-with-tagcache"!")<br><br><br>(defun ecb-update-methods-buffer--internal (&optional scroll-to-top<br>                                                      rebuild-non-semantic<br>                                                      full-semantic<br>                                                      invisible-sourcebuffer-allowed)<br>  "Updates the methods buffer with the current buffer. The only thing what<br>must be done is to start the toplevel parsing of semantic, because the rest is<br>done by `ecb-rebuild-methods-buffer-with-tagcache" because this function is in<br>the `semantic-after-toplevel-cache-change-hook".<br>If optional argument SCROLL-TO-TOP is non nil then the method-buffer is<br>displayed with window-start and point at beginning of buffer.<br><br>If second optional argument REBUILD-NON-SEMANTIC is not nil then non-semantic<br>sources are forced to be rescanned and reparsed by<br>`ecb-rebuild-methods-buffer-with-tagcache". The function<br>`ecb-rebuild-methods-buffer-for-non-semantic" is the only one settings this<br>argument to not nil!<br><br>If third optional arg FULL-SEMANTIC is not nil then for semantic-sources an<br>immediate parse-run is triggered - not an idle one! Has no effect for<br>non-semantic-sources.<br><br>If fourth optional argument INVISIBLE-SOURCEBUFFER-ALLOWED is not NIL then we<br>drive `ecb-rebuild-methods-buffer-with-tagcache" so it does not prevent<br>rebuilding a not visible source-buffer."',
          prototype : '(defvar ecb-method-buffer-rebuild-allowed-for-invisible-buffers nil',
          lispcode : '(defvar ecb-method-buffer-rebuild-allowed-for-invisible-buffers nil'
        },
        {
          variable : 'ecb-method-overlay',
          filename : 'ecb-method-browser.el',
          docstring : '  "Internal overlay used for the first line of a method.")<br>(ecb-overlay-put ecb-method-overlay "face ecb-tag-header-face)<br><br><br>(defcustom ecb-tag-visit-post-actions "((default . (ecb-tag-visit-smart-tag-start<br>                                                    ecb-tag-visit-highlight-tag-header))<br>                                        (java-mode . (ecb-tag-visit-goto-doc-start))<br>                                        (jde-mode . (ecb-tag-visit-goto-doc-start)))<br>  "*Actions to perform after visiting a tag from the Method-buffer.<br>With this option actions can be added which will be performed after visiting<br>the start of the tag in the source-buffer.<br><br>This functionality is set on a `major-mode" base, i.e. for every `major-mode" a<br>different setting can be used. The value of this option is a list of<br>cons-cells:<br>- The car is either a `major-mode" symbol or the special symbol "default.<br>- The cdr is a list of action-functions or nil.<br><br>ECB first performs all actions defined for the special symbol "default (if<br>any) and then all actions defined for current `major-mode" (if any).<br><br>ECB offers some predefined senseful action-functions. Currently there are:<br>- `ecb-tag-visit-highlight-tag-header"<br>- `ecb-tag-visit-smart-tag-start"<br>- `ecb-tag-visit-recenter"<br>- `ecb-tag-visit-recenter-top"<br>- `ecb-tag-visit-goto-doc-start"<br>- `ecb-tag-visit-narrow-tag"<br>See the documentation of these function for details what they do.<br><br>But you can add any arbitrary function if the following conditions are<br>fulfilled:<br>- The function gets the semantic tag as argument and<br>- the function returns the (new) point after finishing its job.<br>- The function must not put the point outside the tag-boundaries of the<br>  tag-argument."',
          prototype : '(defvar ecb-method-overlay (ecb-make-overlay 1 1)',
          lispcode : '(defvar ecb-method-overlay (ecb-make-overlay 1 1)'
        },
        {
          variable : 'ecb-methods-root-node',
          filename : 'ecb-method-browser.el',
          lispcode : '(defvar ecb-methods-root-node nil<br>  <apo>Path to currently selected source.<apo>)'
        },
        {
          variable : 'ecb-methods-user-filter-alist',
          filename : 'ecb-method-browser.el',
          docstring : '  "The filter currently applied to the methods-buffer by the user. This cache<br>is an alist where the key is the buffer-object of that buffer the filter<br>belongs and the value is the applied filter to that buffer.<br><br>Filters which can work onto single tags are applied by<br>`ecb-apply-user-filter-to-tags" whereas tag-filters which have to be applied<br>onto the whole tag-table are performed by `ecb-apply-tag-table-filters".")<br><br><br>(defun ecb-methods-filter-by-prot (inverse source-buffer &optional prot)<br>  "Filter the Methods-buffer by protection."',
          prototype : '(defvar ecb-methods-user-filter-alist nil',
          lispcode : '(defvar ecb-methods-user-filter-alist nil'
        },
        {
          variable : 'ecb-minor-mode',
          filename : 'ecb.el',
          docstring : '  "Do not set this variable directly. Use `ecb-activate" and<br>`ecb-deactivate" or `ecb-minor-mode".!")<br><br>(defvar ecb-activated-window-configuration nil<br>  "Window configuration used after the ECB is activated.")<br><br>;;====================================================<br>;; Customization<br>;;====================================================<br><br>(defgroup ecb nil<br>  "Emacs code browser."',
          prototype : '(defvar ecb-minor-mode nil',
          lispcode : '(defvar ecb-minor-mode nil'
        },
        {
          variable : 'ecb-mode-map',
          filename : 'ecb.el',
          lispcode : '(defvar ecb-mode-map nil<br>  <apo>Internal key-map for ECB minor mode.<apo>)'
        },
        {
          variable : 'ecb-multiframe-variables',
          filename : 'ecb-multiframe.el',
          lispcode : '(defvar ecb-multiframe-variables (list <tick>ecb-last-edit-window-with-point<br>                                       <tick>ecb-edit-window<br>                                       <tick>ecb-compile-window<br>                                       <tick>ecb-frame<br>                                       <tick>ecb-windows-hidden<br>                                       <tick>ecb-toggle-layout-state<br>                                       <tick>ecb-minor-mode<br>                                       <tick>ecb-activated-window-configuration)<br>  <apo>List of ecb variables that are required to be nil in new frames and frame local.<apo>)'
        },
        {
          variable : 'ecb-nav-current-node',
          filename : 'ecb-navigate.el',
          lispcode : '(defvar ecb-nav-current-node nil)<br>(setq ecb-nav-current-node ecb-nav-first-node)<br>'
        },
        {
          variable : 'ecb-nav-first-node',
          filename : 'ecb-navigate.el',
          lispcode : '(defvar ecb-nav-first-node nil)<br>(setq ecb-nav-first-node (ecb-dlist-node-new (ecb-nav-history-item :pos <apo>First item<apo>)))'
        },
        {
          variable : 'ecb-not-compatible-options',
          filename : 'ecb-upgrade.el',
          docstring : '  "This variable is only set by `ecb-check-not-compatible-options"! It is an<br>alist with car is the symbol of an incompatible option and the cdr is the not<br>compatible value of this option.<br>This option is evaluated by `ecb-upgrade-not-compatible-options" and<br>`ecb-display-upgraded-options".")<br><br><br>(defvar ecb-all-options nil)<br><br>(defun ecb-get-all-ecb-options ()<br>  (or ecb-all-options<br>      (mapatoms<br>       (lambda (symbol)<br>         (when (and (save-match-data (string-match "ecb-" (symbol-name symbol)))<br>                    (get symbol "custom-type))<br>           (setq ecb-all-options (cons symbol ecb-all-options)))))))<br><br>(defun ecb-check-not-compatible-options ()<br>  "Check for all ECB-options if their current value is compatible to the<br>defined type. If not store it in `ecb-not-compatible-options"."',
          prototype : '(defvar ecb-not-compatible-options nil',
          lispcode : '(defvar ecb-not-compatible-options nil'
        },
        {
          variable : 'ecb-old-ecb-version',
          filename : 'ecb-upgrade.el',
          docstring : '  "Only not nil if ECB has upgraded the options to a newer options-version<br>after an ECB-upgrade.")<br><br>(defun ecb-options-version=ecb-version-p ()<br>  "Return not nil if the saved value of `ecb-options-version" is equal to<br>`ecb-version"."',
          prototype : '(defvar ecb-old-ecb-version nil',
          lispcode : '(defvar ecb-old-ecb-version nil'
        },
        {
          variable : 'ecb-partial-reparse-always-full-fetch',
          filename : 'ecb-method-browser.el',
          docstring : '  "Always perform a full tag fetching when a partial reparse occur.<br><br>This is only a fallback if partial reparsing support of ECB is too buggy. In<br>this case set it to not nil.")<br><br>(defvar ecb-partial-reparse-debug nil<br>  "If not nil the partial reparse support of ECB outputs to message buffer.")<br><br>(defun ecb-partial-reparse-debug (&rest args)<br>  "Run ARGS through `format" and write it to the *Messages*-buffer.<br>Does nothing if `ecb-partial-reparse-debug" is nil."',
          prototype : '(defvar ecb-partial-reparse-always-full-fetch nil',
          lispcode : '(defvar ecb-partial-reparse-always-full-fetch nil'
        },
        {
          variable : 'ecb-partial-reparse-debug',
          filename : 'ecb-method-browser.el',
          lispcode : '(defvar ecb-partial-reparse-debug nil<br>  <apo>If not nil the partial reparse support of ECB outputs to message buffer.<apo>)'
        },
        {
          variable : 'ecb-path-selected-directory',
          filename : 'ecb-common-browser.el',
          lispcode : '(defvar ecb-path-selected-directory nil<br>  <apo>Path to currently selected directory.<apo>)'
        },
        {
          variable : 'ecb-path-selected-source',
          filename : 'ecb-common-browser.el',
          docstring : '  "Path to currently selected source.<br><br>It is a cons where the cdr is a buffer-object of the current selected source<br>The name of this file is the car of the cons:<br>(<filename> . <indirect-buffer-object>).<br><br>This variable is only set by `ecb-path-selected-source-set" and evaluated by<br>the function `ecb-path-selected-source".<br><br>Do not use it directly! Use always one of the mentioned functions!")<br><br>(defun ecb-path-selected-source-set (filename buffer)<br>  "Set `ecb-path-selected-source" to FILENAME and BUFFER.<br>Returns in the new value. FILENAME and BUFFER must not be nil.<br>For a description of FILENAME and BUFFER see `ecb-source-make"."',
          prototype : '(defvar ecb-path-selected-source nil',
          lispcode : '(defvar ecb-path-selected-source nil'
        },
        {
          variable : 'ecb-problem-report-mail-address',
          filename : 'ecb-help.el',
          lispcode : '(defvar ecb-problem-report-mail-address <apo>ecb-list@lists.sourceforge.net<apo> )'
        },
        {
          variable : 'ecb-selected-tag',
          filename : 'ecb-method-browser.el',
          docstring : '  "The currently selected Semantic tag.")<br>(make-variable-buffer-local "ecb-selected-tag)<br><br>(defvar ecb-methods-root-node nil<br>  "Path to currently selected source.")<br><br>(defconst ecb-methods-nodetype-tag 0)<br>(defconst ecb-methods-nodetype-bucket 1)<br>(defconst ecb-methods-nodetype-externtag 2)<br><br>(defun ecb-method-browser-initialize-caches ()<br>  "Initialize the caches of the method-browser of ECB."',
          prototype : '(defvar ecb-selected-tag nil',
          lispcode : '(defvar ecb-selected-tag nil'
        },
        {
          variable : 'ecb-source-path-functions',
          filename : 'ecb-file-browser.el',
          docstring : '  "List of functions to call for finding sources.<br>Each time the function `ecb-update-directories-buffer" is called, the<br>functions in this variable will be evaluated. Such a function must return<br>either nil or a list of strings where each string is a path.")<br><br><br>(defcustom ecb-display-default-dir-after-start t<br>  "*Automatically display current default-directory after activating ECB.<br>If a file-buffer is displayed in the edit-window then ECB synchronizes its<br>tree-buffers to this file-buffer - at least if the option `ecb-basic-buffer-sync" it<br>not nil. So for this situation `ecb-display-default-dir-after-start" takes no<br>effect but this option is for the case if no file-buffer is displayed in the<br>edit-window after startup:<br><br>If true then ECB selects autom. the current default-directory after activation<br>even if no file-buffer is displayed in the edit-window. This is useful if ECB<br>is autom. activated after startup of Emacs and Emacs is started without a<br>file-argument. So the directory from which the startup has performed is auto.<br>selected in the ECB-directories buffer and the ECB-sources buffer displays the<br>contents of this directory."',
          prototype : '(defvar ecb-source-path-functions nil',
          lispcode : '(defvar ecb-source-path-functions nil'
        },
        {
          variable : 'ecb-source-path-menu',
          filename : 'ecb-file-browser.el',
          docstring : '  "Built-in menu for the directories-buffer for directories which are elements of<br>`ecb-source-path".")<br>(setq ecb-source-path-menu<br>      (append<br>       ecb-common-directories-menu<br>       "((ecb-delete-source-path "Delete Source Path")<br>         ("---")<br>         (ecb-maximize-ecb-window-menu-wrapper "Maximize window"))))<br><br><br>(tree-buffer-defpopup-command ecb-delete-source<br>  "Deletes current sourcefile."',
          prototype : '(defvar ecb-source-path-menu nil',
          lispcode : '(defvar ecb-source-path-menu nil'
        },
        {
          variable : 'ecb-sources-menu',
          filename : 'ecb-file-browser.el',
          lispcode : '(defvar ecb-sources-menu nil<br>  <apo>Built-in menu for the sources-buffer.<apo>)'
        },
        {
          variable : 'ecb-sources-menu-title-creator',
          filename : 'ecb-file-browser.el',
          docstring : '  "The menu-title for the sources menu. See<br>`ecb-directories-menu-title-creator".")<br><br>(defun ecb-sources-menu-creator (tree-buffer-name node)<br>  "Creates the popup-menus for the sources-buffer."',
          prototype : '(defvar ecb-sources-menu-title-creator  (function (lambda (node)              (ecb-file-name-nondirectory (tree-node->data node))))',
          lispcode : '(defvar ecb-sources-menu-title-creator<br>  (function (lambda (node)<br>              (ecb-file-name-nondirectory (tree-node->data node))))'
        },
        {
          variable : 'ecb-special-ecb-buffers-of-current-layout',
          filename : 'ecb-layout.el',
          docstring : '  "The list of special ecb-buffers of current-layout.<br>This variable is only set by `ecb-redraw-layout-full"!")<br><br>(defvar ecb-ecb-buffer-name-selected-before-command nil<br>  "Not nil only if a special ecb-window was selected before most recent<br>command. If not nil it contains the buffer-name of this special ecb-buffer.")<br><br>(defvar ecb-layout-prevent-handle-ecb-window-selection nil<br>  "If not nil ECB will ignore in the post-command-hook auto. maximizing.")<br><br><br>(defun ecb-canonical-ecb-windows-list (&optional winlist)<br>  "Return a list of all visible ECB-windows.<br><br>Such a window must be dedicated to its ecb-buffer and defined for<br>the related buffer with `defecb-window-dedicator-to-ecb-buffer". The list<br>starts from the left-most top-most window in the order<br>`other-window" would walk through these windows."',
          prototype : '(defvar ecb-special-ecb-buffers-of-current-layout nil',
          lispcode : '(defvar ecb-special-ecb-buffers-of-current-layout nil'
        },
        {
          variable : 'ecb-speedbar-update-flag-old',
          filename : 'ecb-speedbar.el',
          lispcode : '(defvar ecb-speedbar-update-flag-old -1)'
        },
        {
          variable : 'ecb-speedbar-verbosity-level-old',
          filename : 'ecb-speedbar.el',
          lispcode : '(defvar ecb-speedbar-verbosity-level-old nil)<br>(defvar ecb-speedbar-select-frame-method-old nil)<br>(defvar ecb-speedbar-update-flag-old -1)'
        },
        {
          variable : 'ecb-stealthy-function-list',
          filename : 'ecb-common-browser.el',
          docstring : '  "List of functions which ECB runs stealthy. Do not modify this variable!<br>This variable is autom. set by the macro `defecb-stealthy"!")<br><br>(defvar ecb-stealthy-function-state-alist nil<br>  "Alist which stores the state of each function of<br>`ecb-stealthy-function-list". Do not add new items to this variable because<br>this is autom. done by the macro `defecb-stealthy"!")<br><br>(defun ecb-stealthy-function-list-add (fcn)<br>  (add-to-list "ecb-stealthy-function-list fcn))<br><br>(defun ecb-stealthy-function-state-alist-add (fcn)<br>  (add-to-list "ecb-stealthy-function-state-alist<br>               (cons fcn "done)))<br><br>(defun ecb-stealthy-function-state-get (fcn)<br>  "Getter for `ecb-stealthy-function-state-alist". Return state for the<br>stealthy function FCN."',
          prototype : '(defvar ecb-stealthy-function-list nil',
          lispcode : '(defvar ecb-stealthy-function-list nil'
        },
        {
          variable : 'ecb-stealthy-function-state-alist',
          filename : 'ecb-common-browser.el',
          docstring : '  "Alist which stores the state of each function of<br>`ecb-stealthy-function-list". Do not add new items to this variable because<br>this is autom. done by the macro `defecb-stealthy"!")<br><br>(defun ecb-stealthy-function-list-add (fcn)<br>  (add-to-list "ecb-stealthy-function-list fcn))<br><br>(defun ecb-stealthy-function-state-alist-add (fcn)<br>  (add-to-list "ecb-stealthy-function-state-alist<br>               (cons fcn "done)))<br><br>(defun ecb-stealthy-function-state-get (fcn)<br>  "Getter for `ecb-stealthy-function-state-alist". Return state for the<br>stealthy function FCN."',
          prototype : '(defvar ecb-stealthy-function-state-alist nil',
          lispcode : '(defvar ecb-stealthy-function-state-alist nil'
        },
        {
          variable : 'ecb-stealthy-update-running',
          filename : 'ecb-common-browser.el',
          lispcode : '(defvar ecb-stealthy-update-running nil<br>  <apo>Recursion avoidance variable for stealthy performance.<apo>)'
        },
        {
          variable : 'ecb-symboldef-last-symbol',
          filename : 'ecb-symboldef.el',
          lispcode : '(defvar ecb-symboldef-last-symbol nil<br>  <apo>Holds the previous symbol under cursor<apo>)'
        },
        {
          variable : 'ecb-tag-tree-cache',
          filename : 'ecb-method-browser.el',
          docstring : '  "This is the tag-tree-cache for already opened file-buffers. The cache is<br>a list of cons-cells where the car is the name of the source and the cdr is<br>the current tag-tree for this source. The cache contains exactly one element<br>for a certain source.")<br>(setq ecb-tag-tree-cache nil)<br><br>(defun ecb-clear-tag-tree-cache (&optional source-name)<br>  "Clears either the whole tag-tree-cache (SOURCE-NAME is nil) or<br>removes only the tag-tree for SOURCE-NAME from the cache."',
          prototype : '(defvar ecb-tag-tree-cache nil',
          lispcode : '(defvar ecb-tag-tree-cache nil'
        },
        {
          variable : 'ecb-tree-buffer-callbacks',
          filename : 'ecb-common-browser.el',
          docstring : '  "All callback-functions for the tree-buffers of ECB.<br>This list contains two items of the form:<br>(<callback-type> .(<buffer-callback-alist>))<br>where <callback-type> is "select and "expand and<br><buffer-callback-alist> is an alist where each item is a cons<br>like (<buffer-name-symbol> . <callback-symbol>)."',
          prototype : '(defvar ecb-tree-buffer-callbacks "((expand . nil) (select . nil))',
          lispcode : '(defvar ecb-tree-buffer-callbacks <tick>((expand . nil) (select . nil))<br>  )<br>'
        },
        {
          variable : 'ecb-tree-buffer-creators',
          filename : 'ecb-common-browser.el',
          docstring : '  "The tree-buffer creators of ECB.<br>An alist where each element is a cons where the car is a symbol which contains<br>the name of a tree-buffer (e.g. `ecb-sources-buffer-name") and the cdr is the<br>associated function-symbol which creates the tree-buffer with that name.")<br><br>(defun ecb-tree-buffer-creators-init ()<br>  "Initialize `ecb-tree-buffer-creators".<br>Removes all creators and set it to nil."',
          prototype : '(defvar ecb-tree-buffer-creators nil',
          lispcode : '(defvar ecb-tree-buffer-creators nil'
        },
        {
          variable : 'ecb-tree-do-not-leave-window-after-select--internal',
          filename : 'ecb-common-browser.el',
          docstring : '  "Only set by customizing `ecb-tree-do-not-leave-window-after-select" or<br>calling `ecb-toggle-do-not-leave-window-after-select"! Do not set this<br>variable directly, it is only for internal uses!")<br><br>(defcustom ecb-tree-do-not-leave-window-after-select nil<br>  "*Tree-buffers which stay selected after a key- or mouse-selection.<br>If a buffer (either its name or the variable-symbol which holds the name) is<br>contained in this list then selecting a tree-node either by RET or by a<br>mouse-click doesn"t leave that tree-buffer after the node-selection but<br>performes only the appropriate action (opening a new source, selecting a<br>method etc.) but point stays in the tree-buffer. In tree-buffers not contained<br>in this option normaly a node-selection selects as "last" action the right<br>edit-window or maximizes the next senseful tree-buffer in case of a currently<br>maximized tree-buffer (see `ecb-maximize-next-after-maximized-select").<br><br>The buffer-name can either be defined as plain string or with a symbol which<br>contains the buffer-name as value. The latter one is recommended for the<br>builtin ECB-tree-buffers because then simply the related option-symbol can be<br>used.<br><br>A special remark for the `ecb-directories-buffer-name": Of course here the<br>value of this option is only relevant if the name of the current layout is<br>contained in `ecb-show-sources-in-directories-buffer" or if the value of<br>`ecb-show-sources-in-directories-buffer" is "always and the clicked ot hitted<br>node represents a sourcefile (otherwise this would not make any sense)!<br><br>The setting in this option is only the default for each tree-buffer. With the<br>command `ecb-toggle-do-not-leave-window-after-select" the behavior of a<br>node-selection can be changed fast and easy in a tree-buffer without<br>customizing this option, but of course not for future Emacs sessions!"',
          prototype : '(defvar ecb-tree-do-not-leave-window-after-select--internal nil',
          lispcode : '(defvar ecb-tree-do-not-leave-window-after-select--internal nil'
        },
        {
          variable : 'ecb-upgrade-check-done',
          filename : 'ecb.el',
          lispcode : '(defvar ecb-upgrade-check-done nil)'
        },
        {
          variable : 'ecb-vc-needed-vc-package-available-p',
          filename : 'ecb-file-browser.el',
          docstring : '  "Not nil if that vc-package is installed needed by ECB to enable vc-support.<br>If this variable is nil all other vc related options of ECB have no effect!")<br><br>(defcustom ecb-vc-enable-support (and ecb-vc-needed-vc-package-available-p<br>                                      "unless-remote)<br>  "*Enable support for version-control (VC) systems.<br>If on then in the directories-buffer (if the value of the option<br>`ecb-show-sources-in-directories-buffer" is on for current layout), the<br>sources-buffer and the history-buffer all file-items are displayed with an<br>appropriate icon in front of the item-name to indicate the VC-state of this<br>item. If off then no version-control-state checking is done.<br><br>Because this check can be take some time if files are managed by a not local<br>Version-control-server ECB performs this check stealthy (see<br>`ecb-stealthy-tasks-delay") so normally there should no performance-decrease<br>or additional waiting-time for the user. But to get sure this option offers<br>three choices: t, "unless-remote and nil. See the option<br>`ecb-prescan-directories-for-emptyness" for an explanation for these three<br>choices.<br><br>The option `ecb-vc-directory-exclude-regexps" offers are more fine granularity<br>to exclude the sources of certain directories from the VC-state-check.<br><br>See `ecb-vc-supported-backends" how to customize the VC-support itself."',
          prototype : '(defvar ecb-vc-needed-vc-package-available-p  (if (locate-library "vc-svn") t nil)',
          lispcode : '(defvar ecb-vc-needed-vc-package-available-p<br>  (if (locate-library <apo>vc-svn<apo>) t nil)'
        },
        {
          variable : 'ecb-windows-hidden',
          filename : 'ecb-layout.el',
          docstring : '  "Used with `ecb-toggle-ecb-windows". If true the ECB windows are hidden. Do<br>not change this variable!")<br><br>(defconst ecb-windows-hidden-all-value "all)<br>(defconst ecb-windows-hidden-none-value "none)<br><br>(defvar ecb-windows-hidden-state ecb-windows-hidden-none-value<br>  "Information which ECB windows are hidden.<br>The value is one of the symbols left-side, right-side, top-side,<br>none or all which indicates which ecb-windows are hidden (ie.<br>all ecb-windows on this frame-side are hidden).<br><br>"senseful" means that for a certain layout-type only certain<br>values are senseful, e.g. for a top-, left- or right-layout only<br>"none or "all is sensefull whereas for a left-right layout<br>"left-side, "right-side, "none or "all is possible and senseful.<br><br>Do not evaluate this variable - always use the functions<br>`ecb-windows-all-hidden", `ecb-windows-all-displayed" or<br>`ecb-windows-hidden-state-list"!")<br><br>;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: add assertion<br>;; for state not conflicting with current layout-type (maybe an own function<br>;; -- later)<br>(defun ecb-windows-all-hidden (&optional hidden-state)<br>  "Return not nil if all ecb-windows are hidden.<br>If HIDDEN-STATE is not nil then it must be of the same type as<br>`ecb-windows-hidden-state". If nil then the value of<br>`ecb-windows-hidden-state" is used.<br>This function has a "binary" semantic: a return value of nil<br>means that some or all ecb-windows of current layout are displayed and a<br>return value of not nil means that all ecb-windows are hidden."',
          prototype : '(defvar ecb-windows-hidden nil',
          lispcode : '(defvar ecb-windows-hidden nil'
        },
        {
          variable : 'ecb-windows-hidden-state',
          filename : 'ecb-layout.el',
          docstring : '  "Information which ECB windows are hidden.<br>The value is one of the symbols left-side, right-side, top-side,<br>none or all which indicates which ecb-windows are hidden (ie.<br>all ecb-windows on this frame-side are hidden).<br><br>"senseful" means that for a certain layout-type only certain<br>values are senseful, e.g. for a top-, left- or right-layout only<br>"none or "all is sensefull whereas for a left-right layout<br>"left-side, "right-side, "none or "all is possible and senseful.<br><br>Do not evaluate this variable - always use the functions<br>`ecb-windows-all-hidden", `ecb-windows-all-displayed" or<br>`ecb-windows-hidden-state-list"!")<br><br>;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: add assertion<br>;; for state not conflicting with current layout-type (maybe an own function<br>;; -- later)<br>(defun ecb-windows-all-hidden (&optional hidden-state)<br>  "Return not nil if all ecb-windows are hidden.<br>If HIDDEN-STATE is not nil then it must be of the same type as<br>`ecb-windows-hidden-state". If nil then the value of<br>`ecb-windows-hidden-state" is used.<br>This function has a "binary" semantic: a return value of nil<br>means that some or all ecb-windows of current layout are displayed and a<br>return value of not nil means that all ecb-windows are hidden."',
          prototype : '(defvar ecb-windows-hidden-state ecb-windows-hidden-none-value',
          lispcode : '(defvar ecb-windows-hidden-state ecb-windows-hidden-none-value'
        },
        {
          variable : 'ecb-winman-winring-ecb-frame',
          filename : 'ecb-winman-support.el',
          lispcode : '(defvar ecb-winman-winring-ecb-frame nil<br>  <apo>Frame for which the ECB-window-configuration was set first time.<apo>)'
        },
        {
          variable : 'ecb-working-celeron-strings',
          filename : 'ecb-util.el',
          docstring : '    "[    -O]" "[     O]" "[    Oo]" "[   Oo-]"  "[  Oo- ]" "[ Oo-  ]"',
          prototype : '(defvar ecb-working-celeron-strings  [ "[O     ]" "[oO    ]" "[-oO   ]" "[ -oO  ]" "[  -oO ]" "[   -oO]"',
          lispcode : '(defvar ecb-working-celeron-strings<br>  [ <apo>[O     ]<apo> <apo>[oO    ]<apo> <apo>[-oO   ]<apo> <apo>[ -oO  ]<apo> <apo>[  -oO ]<apo> <apo>[   -oO]<apo><br>    <apo>[Oo-   ]<apo> <apo>[O-    ]<apo>]<br>  <apo>Strings representing a silly celeron.<apo>)'
        },
        {
          variable : 'ecb-working-message',
          filename : 'ecb-util.el',
          docstring : '  "Message stored when in a status loop.")<br>(defvar ecb-working-donestring nil<br>  "Done string stored when in a status loop.")<br>(defvar ecb-working-ref1 nil<br>  "A reference number used in a status loop.")<br>(defvar ecb-working-last-percent 0<br>  "A reference number used in a status loop.")<br><br>(defun ecb-working-frame-animation-display (length number frames)<br>  "Manage a simple frame-based animation for working functions.<br>LENGTH is the number of characters left.  NUMBER is a passed in<br>number (which happens to be ignored.).  While coders pass t into<br>NUMBER, functions using this should convert NUMBER into a vector<br>describing how to render the done message.<br>Argument FRAMES are the frames used in the animation."',
          prototype : '(defvar ecb-working-message nil',
          lispcode : '(defvar ecb-working-message nil'
        },
        {
          variable : 'silentcomp-environment-set',
          filename : 'silentcomp.el',
          lispcode : '(defvar silentcomp-environment-set nil)'
        },
        {
          variable : 'silentcomp-unbound-variables',
          filename : 'silentcomp.el',
          lispcode : '(defvar silentcomp-unbound-variables nil)<br>(defvar silentcomp-original-functions nil)<br>(defvar silentcomp-environment-set nil)'
        },
        {
          variable : 'tree-buffer-debug-mode',
          filename : 'tree-buffer.el',
          docstring : '  "If not nil then all functions of tree-buffer which are debug-able write<br>debug-messages to the message-log of Emacs. Ensure that this variable is opnlx<br>not nil if you want find or report an error!")<br><br>(defun tree-buffer-debug-error (&rest args)<br>  "Run ARGS through `format" and write it to the *Messages*-buffer.<br>Do nothing if `tree-buffer-debug-mode" is nil!"',
          prototype : '(defvar tree-buffer-debug-mode nil',
          lispcode : '(defvar tree-buffer-debug-mode nil'
        },
        {
          variable : 'tree-node-id',
          filename : 'tree-buffer.el',
          lispcode : '(defvar tree-node-id nil)'
        }
    ]
  }