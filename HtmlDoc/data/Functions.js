const functions =
  {
    names:
      [
        'ecb-access-order',
        'ecb-activate',
        'ecb-activate--impl',
        'ecb-activate-ecb-autocontrol-function',
        'ecb-activate-ediff-compatibility',
        'ecb-activate-internal',
        'ecb-add-all-buffers-to-history',
        'ecb-add-assoc',
        'ecb-add-buffers-to-history-new',
        'ecb-add-source-path',
        'ecb-add-tag-bucket',
        'ecb-add-tag-buckets',
        'ecb-add-tags',
        'ecb-add-to-minor-modes',
        'ecb-advice-test-defun-1',
        'ecb-advice-test-defun-2',
        'ecb-advice-test-defun-3',
        'ecb-advice-test-defun-4',
        'ecb-advices-debug-error',
        'ecb-aggregate-alist',
        'ecb-analyse-add-nodes',
        'ecb-analyse-compare-node-data',
        'ecb-analyse-create-menu',
        'ecb-analyse-gen-menu-title-creator',
        'ecb-analyse-gen-tag-info',
        'ecb-analyse-menu-creator',
        'ecb-analyse-node-mouse-highlighted-p',
        'ecb-analyse-show-scope',
        'ecb-analyse-show-tag-info-in-temp-buffer',
        'ecb-apply-default-tag-filter',
        'ecb-apply-filter-to-sources-buffer',
        'ecb-apply-tag-table-filters',
        'ecb-apply-user-filter-to-tags',
        'ecb-auto-activate-hook',
        'ecb-autogen-update-header',
        'ecb-autotrace-autocontrol/sync-fcn-error',
        'ecb-available-layouts-add',
        'ecb-available-layouts-member-p',
        'ecb-available-layouts-of-type',
        'ecb-available-layouts-remove',
        'ecb-batch-update-autoloads',
        'ecb-bodytrace-autocontrol/sync-fcn-error',
        'ecb-browse-html-file',
        'ecb-buffer-file-name',
        'ecb-buffer-is-dedicated-special-buffer-p',
        'ecb-buffer-is-ecb-buffer-of-current-layout-p',
        'ecb-buffer-is-maximized-p',
        'ecb-buffer-is-the-only-visible-ecb-buffer-p',
        'ecb-buffer-is-visible-ecb-buffer-p',
        'ecb-buffer-local-value',
        'ecb-buffer-name',
        'ecb-buffer-obj',
        'ecb-buffer-or-file-readable-p',
        'ecb-buffer-substring',
        'ecb-buffertab-make-menuname',
        'ecb-buffertab-popup-menu',
        'ecb-buffertab-setup-header',
        'ecb-byte-compile',
        'ecb-call-tag-visit-function',
        'ecb-canonical-ecb-windows-list',
        'ecb-canonical-edit-windows-list',
        'ecb-canonical-residual-windows-list',
        'ecb-canonical-windows-list',
        'ecb-cedet-missing-libs',
        'ecb-cedet-require',
        'ecb-change-layout',
        'ecb-check-cedet-load',
        'ecb-check-directory-for-caching',
        'ecb-check-directory-for-cvsignore-exclude',
        'ecb-check-directory-for-source-regexps',
        'ecb-check-emptyness-of-dir',
        'ecb-check-for-same-window-buffer',
        'ecb-check-for-special-buffer',
        'ecb-check-not-compatible-options',
        'ecb-check-requirements',
        'ecb-check-semantic-load',
        'ecb-children-tags',
        'ecb-choose-layout-name',
        'ecb-clean-up-after-activation-failure',
        'ecb-clear-tag-tree-cache',
        'ecb-combine-ecb-button/edit-win-nr',
        'ecb-common-after-tree-buffer-create-actions',
        'ecb-common-tree-buffer-modeline-menu-creator',
        'ecb-compare-methods-buffer-node-data',
        'ecb-compilation-buffer-list-init',
        'ecb-compilation-buffer-names',
        'ecb-compilation-get-buffers',
        'ecb-compilation-major-modes',
        'ecb-compilation-predicates',
        'ecb-compilation-registered-buffer-p',
        'ecb-compilation-update-menu',
        'ecb-compile-file-if-necessary',
        'ecb-compile-window-live-p',
        'ecb-compile-window-state',
        'ecb-concatenate',
        'ecb-confirm',
        'ecb-copy-list',
        'ecb-create-directory',
        'ecb-create-layout-add-to-buf-types',
        'ecb-create-layout-buffer-factor',
        'ecb-create-layout-buffer-type',
        'ecb-create-layout-cancel',
        'ecb-create-layout-clear-all',
        'ecb-create-layout-debug',
        'ecb-create-layout-delete-window',
        'ecb-create-layout-forward-char',
        'ecb-create-layout-frame-ok',
        'ecb-create-layout-gen-lisp',
        'ecb-create-layout-gen-lisp-for-buffer-type',
        'ecb-create-layout-init-layout',
        'ecb-create-layout-initilize',
        'ecb-create-layout-insert-file-header',
        'ecb-create-layout-make-frame',
        'ecb-create-layout-mode',
        'ecb-create-layout-new-buffer',
        'ecb-create-layout-next-window',
        'ecb-create-layout-previous-window',
        'ecb-create-layout-ready-for-save-p',
        'ecb-create-layout-remove-from-buf-type',
        'ecb-create-layout-save-and-quit',
        'ecb-create-layout-save-layout',
        'ecb-create-layout-select-edit-window',
        'ecb-create-layout-set-buffer-factor',
        'ecb-create-layout-set-buffer-to-type',
        'ecb-create-layout-set-buffer-type',
        'ecb-create-layout-split',
        'ecb-create-layout-split-hor',
        'ecb-create-layout-split-ver',
        'ecb-create-menu-user-ext-type',
        'ecb-create-new-layout',
        'ecb-create-node',
        'ecb-create-non-semantic-tree',
        'ecb-current-buffer-archive-extract-p',
        'ecb-current-window-configuration',
        'ecb-custom-file',
        'ecb-custom-file-writeable-p',
        'ecb-customize',
        'ecb-customize-most-important',
        'ecb-customize-save-variable',
        'ecb-customize-set-variable',
        'ecb-cycle-maximized-ecb-buffers',
        'ecb-cycle-set-compilation-bufferindex',
        'ecb-cycle-through-compilation-buffers&optional',
        'ecb-deactivate',
        'ecb-deactivate-ediff-compatibility',
        'ecb-deactivate-internal',
        'ecb-dedicated-special-buffers',
        'ecb-default-tag-filter-for-current-source',
        'ecb-delete-all-occurences-from-list',
        'ecb-delete-duplicates',
        'ecb-delete-ecb-windows',
        'ecb-delete-file',
        'ecb-delete-first-occurence-from-list',
        'ecb-delete-s',
        'ecb-delete-window-ecb-windows-left',
        'ecb-delete-window-ecb-windows-right',
        'ecb-delete-window-ecb-windows-top',
        'ecb-dir-run-cvs-op',
        'ecb-dir/source/hist-menu-editwin-entries',
        'ecb-directories-menu-creator',
        'ecb-directory-empty-cache-add',
        'ecb-directory-empty-cache-clear',
        'ecb-directory-empty-cache-dump',
        'ecb-directory-empty-cache-get',
        'ecb-directory-empty-cache-remove',
        'ecb-directory-empty-cache-remove-all',
        'ecb-directory-files',
        'ecb-directory-update-speedbar',
        'ecb-dired-directory-internal',
        'ecb-disable-advices',
        'ecb-display-news-for-upgrade',
        'ecb-display-source',
        'ecb-display-tag',
        'ecb-display-upgraded-options',
        'ecb-displayed-tag-name',
        'ecb-dlist-node-new',
        'ecb-draw-compile-window',
        'ecb-dump-semantic-tags-internal',
        'ecb-dump-semantic-toplevel',
        'ecb-ecb-buffer-registry-add',
        'ecb-ecb-buffer-registry-init',
        'ecb-ediff-before-setup-hook',
        'ecb-ediff-quit-hook',
        'ecb-edit-area-creators-number-of-edit-windows',
        'ecb-edit-window-live-p',
        'ecb-edit-window-splitted',
        'ecb-enable-advices',
        'ecb-enable-ecb-advice',
        'ecb-enable-temp-buffer-shrink-to-fit',
        'ecb-enlarge-window',
        'ecb-enter-debugger',
        'ecb-error',
        'ecb-eshell-activate-integration',
        'ecb-eshell-auto-activate-hook',
        'ecb-eshell-deactivate-integration',
        'ecb-eshell-fit-window-to-output',
        'ecb-eshell-precommand-hook',
        'ecb-eshell-recenter&optional',
        'ecb-eshell-window-size-changeframe',
        'ecb-event-to-key',
        'ecb-examples-action-buffer-create',
        'ecb-examples-activate',
        'ecb-examples-deactivate',
        'ecb-examples-insert-text-in-action-buffer',
        'ecb-examples-preactivation-stateaction',
        'ecb-examples-print-file-attributes',
        'ecb-examples-print-non-filebuffer',
        'ecb-excessive-trim',
        'ecb-expand-directory-nodes',
        'ecb-expand-directory-tree',
        'ecb-expand-file-name',
        'ecb-expand-methods-node-internal',
        'ecb-expand-methods-nodes',
        'ecb-fetch-semantic-tags',
        'ecb-file-browser-initialize',
        'ecb-file-browser-initialize-caches',
        'ecb-file-content-as-string',
        'ecb-filename-cache-init',
        'ecb-files-and-subdirs-cache-add',
        'ecb-files-and-subdirs-cache-clear',
        'ecb-files-and-subdirs-cache-dump',
        'ecb-files-and-subdirs-cache-get',
        'ecb-files-and-subdirs-cache-remove',
        'ecb-files-from-cvsignore',
        'ecb-filter',
        'ecb-filter-c-prototype-tags',
        'ecb-find-add-tag-bucket',
        'ecb-find-assoc',
        'ecb-find-assoc-value',
        'ecb-find-file-hook',
        'ecb-first',
        'ecb-fit-str-to-width',
        'ecb-fit-window-to-buffer',
        'ecb-fix-filename',
        'ecb-fixed-filename-cache-dump',
        'ecb-format-bucket-name',
        'ecb-full-trim',
        'ecb-function-at-point',
        'ecb-generate-node-name',
        'ecb-get-all-ecb-options',
        'ecb-get-best-matching-source-path',
        'ecb-get-compile-window-buffer',
        'ecb-get-current-tag-table',
        'ecb-get-current-visible-ecb-buffers',
        'ecb-get-definition-list-by-semanticdb',
        'ecb-get-ecb-window-by-number',
        'ecb-get-ecb-window-location',
        'ecb-get-ecb-window-sizes',
        'ecb-get-edit-area-size',
        'ecb-get-edit-window',
        'ecb-get-edit-window-by-number',
        'ecb-get-face-for-type-tag',
        'ecb-get-file-info-text',
        'ecb-get-files-and-subdirs',
        'ecb-get-layout-type',
        'ecb-get-other-window',
        'ecb-get-other-window-minibuf-active',
        'ecb-get-other-window-smart',
        'ecb-get-real-curr-tag',
        'ecb-get-remove-specifier-flag-for-type-tag',
        'ecb-get-show-tags-list',
        'ecb-get-source-buffer-for-tag-filter',
        'ecb-get-source-name',
        'ecb-get-source-paths-from-functions',
        'ecb-get-sourcename-of-nodename',
        'ecb-get-sources-sort-function',
        'ecb-get-tag-display-function',
        'ecb-get-tag-name',
        'ecb-get-tag-parent-names',
        'ecb-get-tag-parents',
        'ecb-get-tag-type-display',
        'ecb-get-tags-for-non-semantic-files',
        'ecb-get-type-name-hierarchy-of-current-node',
        'ecb-get-type-name-hierarchy-of-current-tag',
        'ecb-get-type-node-of-node',
        'ecb-get-type-specifier',
        'ecb-get-type-tag-of-tag',
        'ecb-get-window-by-number',
        'ecb-get-window-fix-type',
        'ecb-get-window-size',
        'ecb-goto-action-window',
        'ecb-goto-bufferinfo-window',
        'ecb-goto-ecb-window',
        'ecb-goto-line',
        'ecb-goto-window-analyse',
        'ecb-goto-window-by-smart-selection--internal',
        'ecb-goto-window-compilation',
        'ecb-goto-window-directories',
        'ecb-goto-window-ecb-by-smart-selection',
        'ecb-goto-window-edit-by-smart-selection',
        'ecb-goto-window-edit-last',
        'ecb-goto-window-edit1',
        'ecb-goto-window-edit2',
        'ecb-goto-window-history',
        'ecb-goto-window-methods',
        'ecb-goto-window-sources',
        'ecb-goto-window-speedbar',
        'ecb-goto-window-symboldef',
        'ecb-grep-directory-internal',
        'ecb-group-function-tags-with-parents',
        'ecb-hide-ecb-windows',
        'ecb-hide-ecb-windows-internal',
        'ecb-history-content-all-dead-buffers-alist',
        'ecb-history-filter',
        'ecb-history-filter-by-ext',
        'ecb-history-filter-by-regexp',
        'ecb-history-filter-modeline-prefix',
        'ecb-history-filter-reset-p',
        'ecb-history-kill-buffer-clear',
        'ecb-history-menu-creator',
        'ecb-host-accessible-cache-add',
        'ecb-host-accessible-cache-dump',
        'ecb-host-accessible-cache-get',
        'ecb-host-accessible-p',
        'ecb-images-can-be-used',
        'ecb-indirect-buffers-of-buffer',
        'ecb-info',
        'ecb-info-message',
        'ecb-initialize-all-internals',
        'ecb-initialize-layout',
        'ecb-interpret-mouse-click',
        'ecb-is-byte-compiling',
        'ecb-jde-display-class-at-point',
        'ecb-jde-gen-class-buffer',
        'ecb-jde-get-source-path',
        'ecb-jde-show-class-source',
        'ecb-jde-update-ecb-source-paths',
        'ecb-kill-buffer-hook',
        'ecb-last',
        'ecb-layout-debug-error',
        'ecb-layout-left-p',
        'ecb-layout-leftright-p',
        'ecb-layout-right-p',
        'ecb-layout-switch',
        'ecb-layout-top-p',
        'ecb-layout-type-p',
        'ecb-layout-undefine',
        'ecb-layout-window-sync',
        'ecb-left-trim',
        'ecb-load-in-progress-p',
        'ecb-load-layouts',
        'ecb-make-windows-not-dedicated',
        'ecb-matching-source-paths',
        'ecb-maximize-action-window',
        'ecb-maximize-bufferinfo-window',
        'ecb-maximize-ecb-buffer',
        'ecb-maximize-ecb-buffer-new',
        'ecb-maximize-window-analyse',
        'ecb-maximize-window-directories',
        'ecb-maximize-window-history',
        'ecb-maximize-window-methods',
        'ecb-maximize-window-sources',
        'ecb-maximize-window-speedbar',
        'ecb-maximize-window-symboldef',
        'ecb-maximized-ecb-buffer-name',
        'ecb-member',
        'ecb-member-of-symbol/value-list',
        'ecb-menu-item',
        'ecb-merge-face',
        'ecb-merge-face-into-text',
        'ecb-message-box',
        'ecb-method-browser-initialize',
        'ecb-method-browser-initialize-caches',
        'ecb-methods-filter',
        'ecb-methods-filter-apply',
        'ecb-methods-filter-by-current-type',
        'ecb-methods-filter-by-function',
        'ecb-methods-filter-by-prot',
        'ecb-methods-filter-by-regexp',
        'ecb-methods-filter-by-tag-class',
        'ecb-methods-filter-current-type',
        'ecb-methods-filter-delete-last',
        'ecb-methods-filter-function',
        'ecb-methods-filter-internal',
        'ecb-methods-filter-inverse',
        'ecb-methods-filter-modeline-prefix',
        'ecb-methods-filter-nofilter',
        'ecb-methods-filter-perform-current-type',
        'ecb-methods-filter-protection',
        'ecb-methods-filter-regexp',
        'ecb-methods-filter-tagclass',
        'ecb-methods-get-data-store',
        'ecb-methods-menu-activate-hs',
        'ecb-methods-menu-creator',
        'ecb-methods-menu-editwin-entries',
        'ecb-methods-menu-tagfilter-entries',
        'ecb-methods-node-get-semantic-type',
        'ecb-methods-node-mouse-highlighted-p',
        'ecb-minor-mode',
        'ecb-mode-line-format',
        'ecb-mode-line-make-modeline-str',
        'ecb-mode-line-set',
        'ecb-mode-line-update-buffer',
        'ecb-modify-emacs-variable',
        'ecb-mouse-over-analyse-node',
        'ecb-mouse-over-directory-node',
        'ecb-mouse-over-history-node',
        'ecb-mouse-over-method-node',
        'ecb-mouse-over-source-node',
        'ecb-multicache-add-empty-key',
        'ecb-multicache-apply-to-value',
        'ecb-multicache-clear',
        'ecb-multicache-clear-subcache',
        'ecb-multicache-clear-value',
        'ecb-multicache-get-subcache',
        'ecb-multicache-get-value',
        'ecb-multicache-get-values',
        'ecb-multicache-mapsubcache',
        'ecb-multicache-p',
        'ecb-multicache-print-subcache',
        'ecb-multicache-put-value',
        'ecb-multicache-remove',
        'ecb-multiframe-activate-hook',
        'ecb-multiframe-make-frame-hookframe',
        'ecb-multiframe-setup-buffer-namevariable',
        'ecb-nav-add-item',
        'ecb-nav-dump-history',
        'ecb-nav-dump-history--internal',
        'ecb-nav-file-history-item-new',
        'ecb-nav-goto--internal',
        'ecb-nav-goto-next',
        'ecb-nav-goto-previous',
        'ecb-nav-initialize',
        'ecb-nav-jump-to-file',
        'ecb-nav-jump-to-tag',
        'ecb-nav-remove-current-node',
        'ecb-nav-remove-invalid-nodes',
        'ecb-nav-remove-node',
        'ecb-nav-save-current',
        'ecb-nav-tag-history-item-new',
        'ecb-new-child',
        'ecb-next-listelem',
        'ecb-next-tag-parent-node',
        'ecb-nolog-message',
        'ecb-normalize-expand-spec',
        'ecb-normalize-number',
        'ecb-normed-source-paths',
        'ecb-not-compatible-or-renamed-options-detected',
        'ecb-offer-choices',
        'ecb-option-compatible-p',
        'ecb-option-get-value',
        'ecb-option-set-default',
        'ecb-option-upgrade',
        'ecb-options-version=ecb-version-p',
        'ecb-package-version-list2str',
        'ecb-package-version-list<',
        'ecb-package-version-str2list',
        'ecb-package-version-string<',
        'ecb-partial-reparse-debug',
        'ecb-path-selected-source',
        'ecb-path-selected-source-set',
        'ecb-point-in-compile-window',
        'ecb-point-in-dedicated-special-buffer',
        'ecb-point-in-ecb-tree-buffer',
        'ecb-point-in-ecb-window-number',
        'ecb-point-in-edit-window-number',
        'ecb-position',
        'ecb-post-process-taglist',
        'ecb-problem-report-list-all-variables',
        'ecb-problem-report-post-hook',
        'ecb-query-string',
        'ecb-read-number',
        'ecb-rebuild-methods-buffer',
        'ecb-rebuild-methods-buffer-for-non-semantic',
        'ecb-rebuild-methods-buffer-for-semantic',
        'ecb-rebuild-methods-buffer-fully',
        'ecb-rebuild-methods-buffer-with-tagcache',
        'ecb-redraw-layout',
        'ecb-redraw-layout-full',
        'ecb-redraw-layout-preserving-compwin-state',
        'ecb-redraw-layout-quickly',
        'ecb-register-autocontrol/sync-function',
        'ecb-remote-path',
        'ecb-remote-path-cache-add',
        'ecb-remote-path-cache-dump',
        'ecb-remote-path-cache-get',
        'ecb-remove-assoc',
        'ecb-remove-dir-from-caches',
        'ecb-remove-elt',
        'ecb-replace-all-occurences',
        'ecb-replace-first-occurence',
        'ecb-reset-compile-window-specified-height-config',
        'ecb-reset-history-filter',
        'ecb-restore-default-window-sizes',
        'ecb-restore-edit-area',
        'ecb-restore-window-sizes',
        'ecb-right-trim',
        'ecb-ring-elements',
        'ecb-rotate',
        'ecb-save-without-auto-update-methods',
        'ecb-scroll-window',
        'ecb-search-tag-by-semantic-analyzer',
        'ecb-search-tag-by-semanticdb',
        'ecb-search-type-tag-by-semantic-analyzer',
        'ecb-search-type-tag-by-semanticdb',
        'ecb-seconds-to-time',
        'ecb-select-ecb-frame',
        'ecb-select-edit-window',
        'ecb-select-source',
        'ecb-semantic-active-for-file',
        'ecb-semantic-assert-valid-tag',
        'ecb-semantic-current-nonterminal',
        'ecb-semantic-tag-buffer',
        'ecb-semantic-tag-end',
        'ecb-semantic-tag-start',
        'ecb-semanticdb-find-result-nth-with-file',
        'ecb-set-compile-window-height',
        'ecb-set-current-tag-table',
        'ecb-set-difference',
        'ecb-set-ecb-window-sizes',
        'ecb-set-elt',
        'ecb-set-minor-mode-text',
        'ecb-set-selected-directory',
        'ecb-set-selected-source',
        'ecb-set-window-configuration',
        'ecb-set-window-size',
        'ecb-set-window-size-fixed',
        'ecb-set-windows-dedicated-state',
        'ecb-show-any-node-info-by-mouse-moving-p',
        'ecb-show-ecb-windows',
        'ecb-show-help',
        'ecb-show-layout-help',
        'ecb-show-minibuffer-info',
        'ecb-show-sources-in-directories-buffer-p',
        'ecb-show-tip-of-the-day',
        'ecb-some',
        'ecb-sort-tags',
        'ecb-source-get-buffer',
        'ecb-source-get-buffername',
        'ecb-source-get-filename',
        'ecb-source-item-clicked',
        'ecb-source-make',
        'ecb-sources-cache-add-filtered',
        'ecb-sources-cache-add-full',
        'ecb-sources-cache-clear',
        'ecb-sources-cache-dump',
        'ecb-sources-cache-get-filtered',
        'ecb-sources-cache-get-full',
        'ecb-sources-cache-remove',
        'ecb-sources-filter',
        'ecb-sources-filter-by-ext',
        'ecb-sources-filter-by-regexp',
        'ecb-sources-filter-modeline-prefix',
        'ecb-sources-menu-creator',
        'ecb-speedbar-activate',
        'ecb-speedbar-active-p',
        'ecb-speedbar-buffer-selected',
        'ecb-speedbar-decorate-tag',
        'ecb-speedbar-dframe-select-attached-window',
        'ecb-speedbar-sb-tag-p',
        'ecb-speedbar-select-speedbar-window',
        'ecb-speedbar-update-contents',
        'ecb-split-hor',
        'ecb-split-hor-abs',
        'ecb-split-ver',
        'ecb-split-ver-abs',
        'ecb-start-of-tag-doc',
        'ecb-stealth-tasks-after-directories-update',
        'ecb-stealth-tasks-after-history-update',
        'ecb-stealth-tasks-after-sources-update',
        'ecb-stealthy-function-list-add',
        'ecb-stealthy-function-p',
        'ecb-stealthy-function-state-alist-add',
        'ecb-stealthy-function-state-get',
        'ecb-stealthy-function-state-init',
        'ecb-stealthy-function-state-set',
        'ecb-stealthy-read-only-check--internal',
        'ecb-stealthy-vc-check--dir/history',
        'ecb-stealthy-vc-check--sources',
        'ecb-stop-all-autocontrol/sync-functions',
        'ecb-stop-autocontrol/sync-function',
        'ecb-store-compile-window-specified-height-config',
        'ecb-store-current-options-version',
        'ecb-store-window-sizes',
        'ecb-string-make-singular',
        'ecb-submit-problem-report',
        'ecb-subseq',
        'ecb-subtract-time',
        'ecb-symboldef-find-definition',
        'ecb-symboldef-find-lisp-doc',
        'ecb-symboldef-find-null',
        'ecb-symboldef-find-tag-by-etags',
        'ecb-symboldef-find-tag-by-semanticdb',
        'ecb-symboldef-get-doc-for-fsymbol',
        'ecb-symboldef-get-doc-for-vsymbol',
        'ecb-symboldef-get-find-function',
        'ecb-tag-generate-node-name',
        'ecb-tag-visit-display-doc-start',
        'ecb-tag-visit-function-member-p',
        'ecb-tag-visit-highlight-tag-header',
        'ecb-tag-visit-narrow-tag',
        'ecb-tag-visit-recenter',
        'ecb-tag-visit-recenter-top',
        'ecb-tag-visit-smart-tag-start',
        'ecb-temp-buffer-show-function',
        'ecb-test-fit-window-to-buffer',
        'ecb-test-throw-on-input',
        'ecb-test-with-original-advice-set',
        'ecb-time-diff',
        'ecb-time-less-p',
        'ecb-time-to-seconds',
        'ecb-tod-move-cursor',
        'ecb-toggle-auto-expand-tag-tree',
        'ecb-toggle-compile-window',
        'ecb-toggle-compile-window-height',
        'ecb-toggle-do-not-leave-window-after-select',
        'ecb-toggle-ecb-windows',
        'ecb-toggle-ecb-windows-new',
        'ecb-toggle-layout',
        'ecb-toggle-maximize-ecb-window',
        'ecb-toggle-maximize-ecb-window-with-mouse',
        'ecb-toggle-scroll-other-window-scrolls-compile',
        'ecb-tree-buffer-callbacks-add',
        'ecb-tree-buffer-callbacks-alist-of-type',
        'ecb-tree-buffer-creators-init',
        'ecb-tree-buffer-creators-register',
        'ecb-tree-buffer-creators-run',
        'ecb-tree-buffer-node-collapsed-callback',
        'ecb-tree-buffer-node-expand-callback',
        'ecb-tree-buffer-node-select-callback',
        'ecb-tree-node-add-files',
        'ecb-trim',
        'ecb-try-highlight-tag',
        'ecb-type-tag-expansion',
        'ecb-undo-maximize-ecb-buffer',
        'ecb-unhighlight-tag-header',
        'ecb-update-after-partial-reparse',
        'ecb-update-autoloads',
        'ecb-update-directories-buffer',
        'ecb-update-directory-node',
        'ecb-update-methods-after-saving',
        'ecb-update-methods-buffer--internal',
        'ecb-update-sources-buffer',
        'ecb-update-tag-node',
        'ecb-upgrade-alway-operate-in-edit-window',
        'ecb-upgrade-auto-expand-tag-tree-collapse-other',
        'ecb-upgrade-cache-directory-contents',
        'ecb-upgrade-compile-window-temporally-enlarge',
        'ecb-upgrade-directories-menu-ext',
        'ecb-upgrade-exclude-parents-regexp',
        'ecb-upgrade-excluded-directories-regexp',
        'ecb-upgrade-history-menu-ext',
        'ecb-upgrade-layout-nr',
        'ecb-upgrade-layout-nr2name',
        'ecb-upgrade-layout-window-sizes',
        'ecb-upgrade-major-modes-activate',
        'ecb-upgrade-make-copy-of-custom-file',
        'ecb-upgrade-menu-extension',
        'ecb-upgrade-methods-menu-ext',
        'ecb-upgrade-mode-line-data',
        'ecb-upgrade-mode-line-prefixes',
        'ecb-upgrade-not-compatible-options',
        'ecb-upgrade-options',
        'ecb-upgrade-other-window-jump-behavior',
        'ecb-upgrade-post-process-semantic-taglist',
        'ecb-upgrade-post-process-semantic-tokenlist',
        'ecb-upgrade-prescan-directories-for-emptyness',
        'ecb-upgrade-renamed-options',
        'ecb-upgrade-show-tags',
        'ecb-upgrade-sort-history-items',
        'ecb-upgrade-source-file-regexps',
        'ecb-upgrade-sources-menu-ext',
        'ecb-upgrade-sources-perform-read-only-check',
        'ecb-upgrade-split-edit-window',
        'ecb-upgrade-toggle-layout-sequence',
        'ecb-upgrade-token-display-function',
        'ecb-upgrade-token-header-face',
        'ecb-upgrade-token-visit-post-actions',
        'ecb-upgrade-tree-RET-selects-edit-window',
        'ecb-upgrade-tree-image-icons-directories',
        'ecb-upgrade-truncate-lines',
        'ecb-upgrade-type-token-display',
        'ecb-upgrade-use-speedbar-for-directories',
        'ecb-upgrade-vc-enable-support',
        'ecb-upgrade-window-sync',
        'ecb-values-of-symbol/value-list',
        'ecb-vc-after-revert-hook',
        'ecb-vc-cache-add-dir',
        'ecb-vc-cache-add-file',
        'ecb-vc-cache-clear',
        'ecb-vc-cache-dump',
        'ecb-vc-cache-get',
        'ecb-vc-cache-remove',
        'ecb-vc-cache-remove-files-of-dir',
        'ecb-vc-check-CC-state',
        'ecb-vc-check-state',
        'ecb-vc-checkin-hook',
        'ecb-vc-dir-managed-by-BZR',
        'ecb-vc-dir-managed-by-CC',
        'ecb-vc-dir-managed-by-CVS',
        'ecb-vc-dir-managed-by-GIT',
        'ecb-vc-dir-managed-by-HG',
        'ecb-vc-dir-managed-by-RCS',
        'ecb-vc-dir-managed-by-SCCS',
        'ecb-vc-dir-managed-by-SVN',
        'ecb-vc-enable-internals',
        'ecb-vc-generate-node-name',
        'ecb-vc-get-state-fcn-for-dir',
        'ecb-vc-reset-vc-stealthy-checks',
        'ecb-vc-state',
        'ecb-vc-update-sources-cache',
        'ecb-warning',
        'ecb-where-is-point',
        'ecb-window-config-cache-add',
        'ecb-window-config-cache-clear',
        'ecb-window-config-cache-get',
        'ecb-window-config-cache-get-latest',
        'ecb-window-config-cache-init',
        'ecb-window-configuration-data',
        'ecb-window-configuration-invalidp',
        'ecb-window-in-window-list-number',
        'ecb-window-live-p',
        'ecb-window-safely-shrinkable-p',
        'ecb-window-select',
        'ecb-window-sync',
        'ecb-windows-all-displayed',
        'ecb-windows-all-hidden',
        'ecb-windows-hidden-state-list',
        'ecb-windows-toggled-hidden-state',
        'ecb-winman-escreen-disable-support',
        'ecb-winman-escreen-enable-support',
        'ecb-winman-escreen-goto-escreen-hook',
        'ecb-winman-winring-disable-support',
        'ecb-winman-winring-enable-support',
        'ecb-working-celeron-display',
        'ecb-working-dynamic-status',
        'ecb-working-frame-animation-display',
        'ecb-working-status-call-process',
        'silentcomp-is-compiling',
        'silentcomp-restore-environment',
        'tree-buffer-add-image-icon-maybe',
        'tree-buffer-add-node',
        'tree-buffer-arrow-pressed',
        'tree-buffer-build-tree-buffer-display',
        'tree-buffer-clear-tree',
        'tree-buffer-copy-list',
        'tree-buffer-count-subnodes-to-display',
        'tree-buffer-create-menu',
        'tree-buffer-create-menu-emacs',
        'tree-buffer-create-menu-xemacs',
        'tree-buffer-create-menus',
        'tree-buffer-create-mouse-key',
        'tree-buffer-debug-error',
        'tree-buffer-destroy',
        'tree-buffer-display-in-general-face',
        'tree-buffer-displayed-node-linenr',
        'tree-buffer-displayed-node-nr',
        'tree-buffer-displayed-nodes-replace-node',
        'tree-buffer-empty-p',
        'tree-buffer-event-buffer',
        'tree-buffer-event-point',
        'tree-buffer-event-to-key',
        'tree-buffer-event-window',
        'tree-buffer-expand-node',
        'tree-buffer-expand-node-internal',
        'tree-buffer-find-common-substring',
        'tree-buffer-find-displayed-node-by-data/name',
        'tree-buffer-find-image',
        'tree-buffer-first',
        'tree-buffer-gen-guide-strings',
        'tree-buffer-gen-searchpattern-indent-prefix',
        'tree-buffer-get-event-column',
        'tree-buffer-get-node-at-point',
        'tree-buffer-get-node-facer',
        'tree-buffer-get-node-name-end-point',
        'tree-buffer-get-node-name-start-column',
        'tree-buffer-get-node-name-start-point',
        'tree-buffer-get-root',
        'tree-buffer-goto-line',
        'tree-buffer-goto-sticky-node',
        'tree-buffer-help-echo-fn',
        'tree-buffer-highlight-node-by-data/name',
        'tree-buffer-highlighted-node-matches-data/name-p',
        'tree-buffer-hscroll',
        'tree-buffer-images-can-be-used',
        'tree-buffer-incremental-node-search',
        'tree-buffer-insert-node-display',
        'tree-buffer-insert-text',
        'tree-buffer-last',
        'tree-buffer-member',
        'tree-buffer-merge-face',
        'tree-buffer-mouse-hscroll',
        'tree-buffer-node-data-equal-p',
        'tree-buffer-node-display-name',
        'tree-buffer-nolog-message',
        'tree-buffer-point-at-expand-symbol-p',
        'tree-buffer-point-at-node-name-p',
        'tree-buffer-popup-menu',
        'tree-buffer-pos-hor-visible-p',
        'tree-buffer-position',
        'tree-buffer-real-style',
        'tree-buffer-recenter',
        'tree-buffer-remove-elt',
        'tree-buffer-remove-highlight',
        'tree-buffer-remove-node',
        'tree-buffer-run-after-update-hook',
        'tree-buffer-scroll-window',
        'tree-buffer-search-displayed-node-list',
        'tree-buffer-select',
        'tree-buffer-set-elt',
        'tree-buffer-set-root',
        'tree-buffer-show-modeline-menu',
        'tree-buffer-show-node-menu',
        'tree-buffer-show-node-menu-keyboard',
        'tree-buffer-sticky-default-indent-string',
        'tree-buffer-stickynode-fetch-stickyline',
        'tree-buffer-stickynode-header-line-format',
        'tree-buffer-tab-pressed',
        'tree-buffer-update',
        'tree-buffer-update-node',
        'tree-node-add-children',
        'tree-node-find-child-by-data/name',
        'tree-node-find-child-by-name',
        'tree-node-id-init',
        'tree-node-indent-level',
        'tree-node-map-subtree',
        'tree-node-new',
        'tree-node-new-root',
        'tree-node-remove-child-by-data/name',
        'tree-node-search-subtree-by-data',
        'tree-node-search-subtree-by-id',
        'tree-node-update'
    ],

    info:
      [
        {
          function : 'ecb-access-order',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Map ACCESS to a integer-value.<br>"public     --> 0<br>"protected  --> 1<br>"private    --> 3<br><all other> --> 2"',
          prototype : '(defun ecb-access-order (access)',
          parameter : 'access',
          lispcode : '(defun ecb-access-order (access)<br>  (cond<br>   ((eq <tick>public access) 0)<br>   ((eq <tick>protected access) 1)<br>   ((eq <tick>private access) 3)<br>   (t  2)))<br>'
        },
        {
          function : 'ecb-activate',
          filename : 'ecb/ecb.el',
          docstring : '  "Activates ECB and creates the special buffers for the choosen layout.<br>For the layout see `ecb-layout-name". This function raises always the<br>ECB-frame if called from another frame. This is the same as calling<br>`ecb-minor-mode" with a positive argument."',
          prototype : '(defun ecb-activate ()',
          parameter : '',
          lispcode : '(defun ecb-activate ()<br>  (interactive)<br>  (ecb-minor-mode 1))'
        },
        {
          function : 'ecb-activate--impl',
          filename : 'ecb/ecb.el',
          docstring : '  "See `ecb-activate".  This is the implementation of ECB activation."',
          prototype : '(defun ecb-activate--impl ()',
          parameter : '',
          lispcode : '(defun ecb-activate--impl ()<br>  (when (or (null ecb-frame) (not (frame-live-p ecb-frame)))<br>    (setq ecb-frame (selected-frame)))<br><br>  (if ecb-minor-mode<br>      (when (and (not (equal (selected-frame) ecb-frame))<br>                 (or (equal ecb-activation-selects-ecb-frame-if-already-active t)<br>                     (and (equal ecb-activation-selects-ecb-frame-if-already-active <tick>ask)<br>                          (y-or-n-p <apo>ECB is already active in another frame. Select it? <apo>))))<br>        (ecb-select-ecb-frame)<br>        (ecb-update-directories-buffer))<br><br>    (let ((debug-on-error debug-on-error))<br>      ;; we activate only if all before-hooks return non nil<br>      (when (run-hook-with-args-until-failure <tick>ecb-before-activate-hook)<br><br>        ;; checking if there are cedet or semantic-load problems<br>        (ecb-check-cedet-load)<br>        (ecb-check-semantic-load)<br><br>        ;; checking the requirements<br>        (ecb-check-requirements)<br><br>        (condition-case ecb-error-object<br>            (progn<br><br>              ;; initialize the navigate-library<br>              (ecb-nav-initialize)<br><br>              ;; enable basic advices (we need the custom-save-all advice<br>              ;; already here! Maybe it would be better to remove this advice<br>              ;; from the basic-advices and add it to upgrade-advices.....)<br>              ;;(ecb-enable-advices <tick>ecb-layout-basic-adviced-functions)<br><br>              ;; we need the custom-all advice here!<br>              (ecb-enable-advices <tick>ecb-methods-browser-advices)<br><br>              ;; maybe we must upgrade some not anymore compatible or even renamed<br>              ;; options<br>              (when (and ecb-auto-compatibility-check<br>                         (not ecb-upgrade-check-done))<br>                (ecb-check-not-compatible-options)<br>                (ecb-upgrade-not-compatible-options)<br>                (ecb-upgrade-renamed-options)<br>                (setq ecb-upgrade-check-done t))<br><br>              ;; first initialize the whole layout-engine<br>              (ecb-initialize-layout)<br><br>              ;; initialize internals<br>              (ecb-initialize-all-internals (not ecb-clear-caches-before-activate))<br><br>              ;; enable permanent advices - these advices will never being<br>              ;; deactivated after first activation of ECB unless<br>              ;; <backtick>ecb-split-edit-window-after-start<tick> is not <tick>before-activation<br>              ;; (see <backtick>ecb-deactivate-internal<tick>)<br>              (ecb-enable-advices <tick>ecb-permanent-adviced-layout-functions)<br><br>              ;; enable advices for not supported window-managers<br>              (ecb-enable-advices <tick>ecb-winman-not-supported-function-advices)<br><br>              ;; enable advices for the compatibility with other packages<br>              (ecb-enable-advices <tick>ecb-compatibility-advices)<br><br>              ;; set the ecb-frame<br>              (let ((old-ecb-frame ecb-frame))<br>                (if ecb-new-ecb-frame<br>                    (progn<br>                      (run-hooks <tick>ecb-activate-before-new-frame-created-hook)<br>                      (setq ecb-frame (make-frame))<br>                      (put <tick>ecb-frame <tick>ecb-new-frame-created t))<br>                  (setq ecb-frame (selected-frame))<br>                  (put <tick>ecb-frame <tick>ecb-new-frame-created nil))<br>                ;; If ECB is acivated in a frame unequal to that frame which was<br>                ;; the ecb-frame at last deactivation then we initialize the<br>                ;; <backtick>ecb-edit-area-creators<tick>.<br>                (if (not (equal ecb-frame old-ecb-frame))<br>                    (ecb-edit-area-creators-init)))<br>              (raise-frame ecb-frame)<br>              (select-frame ecb-frame)<br><br>              ;; now we can activate ECB<br><br>              ;; first we run all tree-buffer-creators<br>              (ecb-tree-buffer-creators-run)<br><br>              ;; activate the eshell-integration - does not load eshell but<br>              ;; prepares ECB to run eshell right - if loaded and activated<br>              (ecb-eshell-activate-integration)<br><br>              ;; we need some hooks<br>              (add-hook (ecb--semantic-after-partial-cache-change-hook)<br>                        <tick>ecb-update-after-partial-reparse t)<br>              (add-hook (ecb--semantic-after-toplevel-cache-change-hook)<br>                        <tick>ecb-rebuild-methods-buffer-with-tagcache t)<br>;;               (add-hook (ecb--semantic--before-fetch-tags-hook)<br>;;                         <tick>ecb-prevent-from-parsing-if-exceeding-threshold)<br>              (ecb-activate-ecb-autocontrol-function ecb-highlight-tag-with-point-delay<br>                                                     <tick>ecb-tag-sync)<br>              (ecb-activate-ecb-autocontrol-function ecb-basic-buffer-sync-delay<br>                                                     <tick>ecb-basic-buffer-sync)<br>              (ecb-activate-ecb-autocontrol-function ecb-compilation-update-idle-time<br>                                                     <tick>ecb-compilation-buffer-list-changed-p)<br>              (ecb-activate-ecb-autocontrol-function <tick>post<br>                                                     <tick>ecb-layout-post-command-hook)<br>              (ecb-activate-ecb-autocontrol-function <tick>pre<br>                                                     <tick>ecb-layout-pre-command-hook)<br>              (ecb-activate-ecb-autocontrol-function 0.5<br>                                                     <tick>ecb-repair-only-ecb-window-layout)<br>              (ecb-activate-ecb-autocontrol-function <tick>post<br>                                                     <tick>ecb-handle-major-mode-visibilty)<br>              (add-hook <tick>after-save-hook <tick>ecb-update-methods-after-saving)<br>              (add-hook <tick>kill-buffer-hook <tick>ecb-kill-buffer-hook)<br><br>              (add-hook <tick>find-file-hook <tick>ecb-find-file-hook)<br><br>              ;; after adding all idle-timers and post- and pre-command-hooks we<br>              ;; activate the monitoring<br>              (ecb-activate-ecb-autocontrol-function 1 <tick>ecb-monitor-autocontrol-functions)<br><br>              ;; We activate the stealthy update mechanism<br>              (ecb-stealthy-function-state-init)<br>              (ecb-activate-ecb-autocontrol-function ecb-stealthy-tasks-delay<br>                                                      <tick>ecb-stealthy-updates)<br><br>              ;; running the compilation-buffer update first time<br>              (ecb-compilation-buffer-list-init)<br><br>              ;; ediff-stuff; we operate here only with symbols to avoid bytecompiler<br>              ;; warnings<br>              (ecb-activate-ediff-compatibility)<br><br>              ;; enabling the VC-support<br>              (ecb-vc-enable-internals 1)<br><br>              (add-hook <tick>menu-bar-update-hook <tick>ecb-compilation-update-menu)<br>              )<br>          (error<br>           ;;          (backtrace)<br>           (ecb-clean-up-after-activation-failure<br>            <apo>Errors during the basic setup of ECB.<apo> ecb-error-object)))<br><br>        (condition-case ecb-error-object<br>            ;; run personal hooks before drawing the layout<br>            (run-hooks <tick>ecb-activate-before-layout-draw-hook)<br>          (error<br>           (ecb-clean-up-after-activation-failure<br>            <apo>Errors during the hooks of ecb-activate-before-layout-draw-hook.<apo><br>            ecb-error-object)))<br><br>        (setq ecb-minor-mode t)<br><br>        ;; now we draw the screen-layout of ECB.<br>        (condition-case ecb-error-object<br>            ;; now we draw the layout chosen in <backtick>ecb-layout<tick>. This function<br>            ;; activates at its end also the adviced functions if necessary!<br>            ;; Here the directories- and history-buffer will be updated.<br>            (let ((ecb-redraw-layout-quickly nil)<br>                  (use-last-win-conf (and ecb-last-window-config-before-deactivation<br>                                          (equal ecb-split-edit-window-after-start<br>                                                 <tick>before-deactivation)<br>                                          (not (ecb-window-configuration-invalidp<br>                                                ecb-last-window-config-before-deactivation)))))<br>              (ecb-enable-temp-buffer-shrink-to-fit ecb-compile-window-height)<br>              (if use-last-win-conf<br>                  (setq ecb-edit-area-creators<br>                        (nth 4 ecb-last-window-config-before-deactivation)))<br><br>              (ecb-redraw-layout-full <tick>no-buffer-sync<br>                                      nil<br>                                      (and use-last-win-conf<br>                                           (nth 6 ecb-last-window-config-before-deactivation))<br>                                      (and use-last-win-conf<br>                                           (nth 5 ecb-last-window-config-before-deactivation)))<br><br>              ;; if there was no compile-window before deactivation then we have<br>              ;; to hide the compile-window after activation<br>              (if (and use-last-win-conf<br>                       (null (nth 2 ecb-last-window-config-before-deactivation)))<br>                  (ecb-toggle-compile-window -1))<br><br>              (when (member ecb-split-edit-window-after-start<br>                            <tick>(vertical horizontal nil))<br>                (delete-other-windows)<br>                (cl-case ecb-split-edit-window-after-start<br>                  (horizontal (split-window-horizontally))<br>                  (vertical (split-window-vertically))))<br><br>              ;; now we synchronize all ECB-windows<br>              (ecb-window-sync)<br><br>              ;; now update all the ECB-buffer-modelines<br>              (ecb-mode-line-format)<br>              )<br>          (error<br>           (ecb-clean-up-after-activation-failure<br>            <apo>Errors during the layout setup of ECB.<apo> ecb-error-object))<br>          )<br><br>        (condition-case ecb-error-object<br>            (let ((edit-window (car (ecb-canonical-edit-windows-list))))<br>              (when (and ecb-display-default-dir-after-start<br>                         (null (ecb-buffer-file-name'
        },
        {
          function : 'ecb-activate-ecb-autocontrol-function',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Adds function FUNC to `ecb-idle-timer-alist" and activates an idle-timer<br>with idle-time VALUE if VALUE is a number. If nil or "post the<br>FUNC is added to `post-command-hook" and `ecb-post-command-hooks"<br>and removed from the idle-list (if it has been contained). If<br>"pre the FUNC is added to `pre-command-hook" and<br>`ecb-pre-command-hooks" and removed from the idle-list (if it<br>has been contained)."',
          prototype : '(defun ecb-activate-ecb-autocontrol-function (value func)',
          parameter : 'value func',
          lispcode : '(defun ecb-activate-ecb-autocontrol-function (value func)<br>  (unless (assoc func ecb-autocontrol/sync-fcn-register)<br>    (error <apo>ECB %s: Try to activate unregistered %s as autocontrol/sync-function<apo><br>           ecb-version func))<br>  ;; <backtick>ecb-basic-buffer-sync-delay<tick> can never have the value <tick>basic so this<br>  ;; recursion is save<br>  (if (equal <tick>basic value)<br>      (ecb-activate-ecb-autocontrol-function ecb-basic-buffer-sync-delay func)<br>    (ecb-stop-autocontrol/sync-function func)<br>    (cl-case value<br>      ((nil post)<br>       (add-hook <tick>post-command-hook func)<br>       (add-to-list <tick>ecb-post-command-hooks func))<br>      (pre<br>       (add-hook <tick>pre-command-hook func)<br>       (add-to-list <tick>ecb-pre-command-hooks func))<br>      (otherwise<br>       (add-to-list <tick>ecb-idle-timer-alist'
        },
        {
          function : 'ecb-activate-ediff-compatibility',
          filename : 'ecb/ecb-compatibility.el',
          parameter : '',
          lispcode : '(defun ecb-activate-ediff-compatibility ()<br>  (if (boundp <tick>ediff-quit-hook)<br>      (put <tick>ediff-quit-hook <tick>ecb-ediff-quit-hook-value<br>           ediff-quit-hook))<br>  (add-hook <tick>ediff-quit-hook <tick>ediff-cleanup-mess)<br>  (add-hook <tick>ediff-quit-hook <tick>ecb-ediff-quit-hook t)<br>  ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: suspending ediff and<br>  ;; especially reactivating does currently not really work well...'
        },
        {
          function : 'ecb-activate-internal',
          filename : 'ecb/ecb.el',
          docstring : '  "Activates the ECB and creates all the buffers and draws the ECB-screen<br>with the actually chosen layout (see `ecb-layout-name"). This function raises<br>always the ECB-frame if called from another frame."',
          prototype : '(defun ecb-activate-internal ()',
          parameter : '',
          lispcode : '(defun ecb-activate-internal ()<br><br>  (if ecb-use-recursive-edit<br>      (if ecb-minor-mode<br>	  (progn<br>	    (message <apo>ECB already activated. Drawing layout.<apo>)<br>	    (ecb-redraw-layout))<br>	(catch <tick>exit<br>	  (progn<br>	    (ecb-activate--impl)<br>	    (recursive-edit))<br>	  (ecb-deactivate-internal)))<br>    (ecb-activate--impl))<br>  ecb-minor-mode)<br>'
        },
        {
          function : 'ecb-add-all-buffers-to-history',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Add all current file-buffers to the history-buffer of ECB.<br>Dependend on the values of `ecb-history-make-buckets" and<br>`ecb-history-sort-method" afterwards the history is bucketized or<br>not and sorted either by name or by extension (if bucketized<br>then the sorting is only within each bucket). If<br>`ecb-history-sort-method" is nil the most recently used buffers<br>are on the top of the history and the seldom used buffers at the<br>bottom (again: when bucketized then this holds only within each<br>bucket)."',
          prototype : '(defun ecb-add-all-buffers-to-history ()',
          parameter : '',
          lispcode : '(defun ecb-add-all-buffers-to-history ()<br>  (interactive)<br>  (ecb-reset-history-filter)<br>  (ecb-add-buffers-to-history-new <tick>no-dead-buffers))'
        },
        {
          function : 'ecb-add-assoc',
          filename : 'ecb/ecb-util.el',
          parameter : 'key-value list',
          lispcode : '(defun ecb-add-assoc (key-value list)<br>  (cons key-value list))'
        },
        {
          function : 'ecb-add-buffers-to-history-new',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Update contents of the history-buffer.<br>This means a history-item is added to the history-buffer if an existing buffer:<br>- is a file-buffer or is based on a file-buffer (e.g. indirect-file-buffers)<br>- is not excluded by `ecb-check-filename-for-history-exclude"<br>- is not filtered out by the current history-filter<br>In addition dead-buffer items of the history-content before are added again<br>unless optional argument NO-DEAD-BUFFERS is not nil.<br><br>If second optional argument IGNORE-BUFFERNAME-LIST is not nil, then it must be a<br>list of buffer-names which should be ignored for the history-rebuild.<br><br>It takes into account the values of the options `ecb-history-make-buckets" and<br>`ecb-history-stick-indirect-buffers-to-basebuffer".<br><br>It calls at the end `ecb-mode-line-format".<br><br>If the current history-filter leads to an empty history-buffer it will not be<br>applied but an unfiltered history will be build.<br><br>Returns t if the current history filter has been applied otherwise nil."',
          prototype : '(defun ecb-add-buffers-to-history-new (&optional no-dead-buffers ignore-buffername-list)',
          parameter : '&optional no-dead-buffers ignore-buffername-list',
          lispcode : '(defun ecb-add-buffers-to-history-new (&optional no-dead-buffers ignore-buffername-list)<br>  (let* ((never-bucket-string <apo>No_hist_bucketizing<apo>)<br>         (aggr-sort-fcn (function<br>                         (lambda (l r)<br>                           ;; l and r are conses like:<br>                           ;; (<bucket-string> . (<buffername> . <filename>))<br>                           (if (ecb-string= (car l) (car r) ecb-history-sort-ignore-case)<br>                               (cl-case ecb-history-sort-method<br>                                 (extension<br>                                  (let ((ext-l (file-name-extension (cdr (cdr l)) t))<br>                                        (ext-r (file-name-extension (cdr (cdr r)) t)))<br>                                    (if (ecb-string= ext-l ext-r ecb-history-sort-ignore-case)<br>                                        (ecb-string< (car (cdr l)) (car (cdr r))<br>                                                     ecb-history-sort-ignore-case)<br>                                      (ecb-string< ext-l ext-r ecb-history-sort-ignore-case))))<br>                                 (name<br>                                  (ecb-string< (car (cdr l)) (car (cdr r))<br>                                               ecb-history-sort-ignore-case))<br>                                 (otherwise nil))<br>                             (ecb-string< (car l) (car r) ecb-history-sort-ignore-case)))))<br>         (aggr-same-fcn (function<br>                         (lambda (l r)<br>                           ;; l and r are strings (= the car of an item of base-alist)<br>                           (ecb-string= l r ecb-history-sort-ignore-case))))<br>         (indirect-buffer-base nil)<br>         ;; lets build an alist where each item is a cons like<br>         ;; (<buffer-name> . <filename>) and only items are contained which are:<br>         ;; - based on file-buffers (indirect-file-buffers too)<br>         ;; - not excluded by <backtick>ecb-check-filename-for-history-exclude<tick><br>         ;; - not filtered out by the current history-filter<br>         ;; if indirect-buffers should be sticked to the base-buffer then we<br>         ;; are sorting out them here and add them all to indirect-buffer-base<br>         (buf-file-alist<br>          (delq nil<br>                (mapcar (function<br>                         (lambda (buf)<br>                           (let ((file-name (ecb-fix-filename<br>                                             (ecb-buffer-file-name buf)))<br>                                 (base-buf (buffer-base-buffer buf)))<br>                             (if (and file-name<br>                                      ;; needed for revision-files temporally<br>                                      ;; checked out (e.g. by ediff-revision)<br>                                      ;; these not longer existing files<br>                                      ;; would pollute the history - we do not<br>                                      ;; want entries which could not loaded<br>                                      ;; into a buffer<br>                                      (ecb-buffer-or-file-readable-p file-name)<br>                                      (not (member (buffer-name buf)<br>                                                   ignore-buffername-list))<br>                                      (not (ecb-check-filename-for-history-exclude file-name))<br>                                      (funcall (car ecb-history-filter)<br>                                               (buffer-name buf)<br>                                               file-name))<br>                                 (if (and ecb-history-stick-indirect-buffers-to-basebuffer<br>                                          base-buf)<br>                                     ;; if indirect-buffers should be sticked<br>                                     ;; to the base-buffer then we are sorting<br>                                     ;; out them here and add them all to<br>                                     ;; indirect-buffer-base<br>                                     (progn<br>                                       (push (cons (buffer-name base-buf)<br>                                                   (cons (buffer-name buf) file-name))<br>                                             indirect-buffer-base)<br>                                       nil)<br>                                   (cons (buffer-name buf) file-name))))))<br>                        ;; we call reverse to get the most recently used<br>                        ;; buffers first; usefull when no sorting takes place<br>                        (reverse (buffer-list)))))<br>         (additonal-dead-history-buffer-alist<br>          (if no-dead-buffers<br>              nil<br>            ;; we need these entries of the history-buffer which are marked as<br>            ;; dead. If all is working fine the set-difference would not be<br>            ;; necessary because dead-items are dead because no buffer exists<br>            ;; for them - so both lists should be disjunct - but who knows, to<br>            ;; get sure we make the difference so we have no duplicates.<br>            (ecb-set-difference (ecb-history-content-all-dead-buffers-alist)<br>                                buf-file-alist<br>                                <tick>member)))<br>         (base-alist (mapcar (function<br>                              (lambda (elem)<br>                                ;; an elem is a cons (<buffername> . <filename>)<br>                                (cons (cl-case ecb-history-make-buckets<br>                                        (never never-bucket-string)<br>                                        ((directory directory-with-source-path)<br>                                         (ecb-substring-no-properties<br>                                          (ecb-fix-filename<br>                                           (ecb-file-name-directory<br>                                            (cdr elem)))))<br>                                        (mode (symbol-name<br>                                               (if (ecb-buffer-obj (car elem))<br>                                                   (with-current-buffer (ecb-buffer-obj (car elem))<br>                                                     major-mode)<br>                                                 ;; for dead buffers of the<br>                                                 ;; history we use auto-mode-alist<br>                                                 (or (ecb-match-regexp-list (car elem)<br>                                                                            auto-mode-alist<br>                                                                            <tick>car <tick>cdr)<br>                                                     <tick>no-major-mode-avail))))<br>                                        (extension (file-name-extension (cdr elem) t))<br>                                        (otherwise (or (ecb-match-regexp-list<br>                                                        (car elem)<br>                                                        ecb-history-make-buckets)<br>                                                       <apo>No matchings<apo>)))<br>                                      elem)))<br>                             (append buf-file-alist<br>                                     additonal-dead-history-buffer-alist)))<br>         (aggregated-alist-with-buckets (ecb-aggregate-alist base-alist<br>                                                             aggr-same-fcn<br>                                                             aggr-sort-fcn))<br>         (aggregated-indirect-buffers-alist (ecb-aggregate-alist indirect-buffer-base<br>                                                                 <tick>string=<br>                                                                 (function<br>                                                                  (lambda (l r)<br>                                                                    (string< (car l)<br>                                                                             (car r))))))<br>         ;; an alist with items like (<bucket-name> . <expand-state>) for each<br>         ;; toplevel bucket of the history-buffer. This is the state before<br>         ;; rebuilding the history!<br>         (curr-bucket-expand-status-alist<br>          (with-current-buffer ecb-history-buffer-name<br>            (delq nil (mapcar (function<br>                               (lambda (node)<br>                                 (when (= (tree-node->type node)<br>                                          ecb-history-nodetype-bucket)<br>                                   (cons (tree-node->name node)<br>                                         (and (tree-node->expandable node)<br>                                              (tree-node->expanded node))))))<br>                              (tree-node->children (tree-buffer-get-root))))))<br>         )<br>;; just for debugging:<br>;;     (list buf-file-alist<br>;;           aggregated-alist-with-buckets<br>;;           additonal-dead-history-buffer-alist<br>;;           indirect-buffer-base<br>;;           aggregated-indirect-buffers-alist)<br>    (with-current-buffer ecb-history-buffer-name<br>      (tree-buffer-clear-tree)<br>      (dolist (bucket-elem aggregated-alist-with-buckets)<br>        (let* ((best-matching-sp (if (eq ecb-history-make-buckets <tick>directory-with-source-path)<br>                                    (ecb-get-best-matching-source-path (car bucket-elem))))<br>               ;; we use concat to get a new string to avoid side-effect in<br>               ;; facing source-paths in the directory-buffer<br>               (best-matching-path (concat (car best-matching-sp)))<br>               (best-matching-alias (concat (cdr best-matching-sp)))<br>               (bucket-name-formated nil)<br>               (bucket-name-formated-shrink-start-pos (length (nth 0 ecb-bucket-node-display)))<br>               (bucket-node nil))<br>          (if (or (null best-matching-sp)<br>                  ;; if the alias is not smaller then the path<br>                  ;; itself we use the path<br>                  ;; with this condition we adress also the case that the alias<br>                  ;; isn<tick>t an alias but only the duplicated path...<br>                  (>= (length best-matching-alias)<br>                      (length best-matching-path)))<br>              (setq bucket-name-formated<br>                    (ecb-format-bucket-name<br>                     ;; we use concat only to get a new string-object<br>                     (ecb-merge-face-into-text (concat (car bucket-elem))<br>                                               ecb-history-bucket-node-face)<br>                     nil <tick>only-name))<br>            (setq bucket-name-formated<br>                  (ecb-format-bucket-name<br>                   (concat (ecb-merge-face-into-text<br>                            (ecb-merge-face-into-text<br>                             best-matching-alias ecb-history-bucket-node-face)<br>                            ecb-history-bucket-node-dir-soure-path-face)<br>                           (unless (string= best-matching-path<br>                                            (car bucket-elem))<br>                             (ecb-merge-face-into-text<br>                              (ecb-substring-no-properties<br>                               (car bucket-elem)<br>                               (length best-matching-path))<br>                              ecb-history-bucket-node-face)))<br>                   nil <tick>only-name))<br>            ;; now we add the length of the source-path-alias as start-position<br>            ;; for name shrinking<br>            (setq bucket-name-formated-shrink-start-pos<br>                  (+ bucket-name-formated-shrink-start-pos<br>                     (length best-matching-alias)))<br>            )<br>          (setq bucket-node (if (string= never-bucket-string (car bucket-elem))<br>                                (tree-buffer-get-root)<br>                              (tree-node-new bucket-name-formated<br>                                             ecb-history-nodetype-bucket<br>                                             (car bucket-elem)<br>                                             nil<br>                                             (tree-buffer-get-root)<br>                                             <tick>beginning<br>                                             (list bucket-name-formated-shrink-start-pos<br>                                                   nil<br>                                                   5))))<br>          (unless (string= never-bucket-string (car bucket-elem))<br>            ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: maybe we can make<br>            ;; this even smarter...depending if now a bucket contains more<br>            ;; items than before - for this we have to store not onlxy the<br>            ;; expand-state but also the number of children of a bucket<br>            (setf (tree-node->expanded bucket-node)<br>                  (if (assoc bucket-name-formated<br>                             curr-bucket-expand-status-alist)<br>                      (cdr (assoc bucket-name-formated<br>                                  curr-bucket-expand-status-alist))<br>                    t)))<br>          (dolist (elem (cdr bucket-elem))<br>            (let* ((buf-name (car elem))<br>                   ;; can only be not nil if the option<br>                   ;; <backtick>ecb-history-stick-indirect-buffers-to-basebuffer<tick> is not<br>                   ;; nil --> see above the mechanism how indirect-buffer-base<br>                   ;; is build<br>                   (indirect-buffer-p (buffer-base-buffer (ecb-buffer-obj buf-name)))<br>                   ;; Note: indirect-buffer elems can not be dead-buffer<br>                   ;; elems, because indirect-buffer-items are *always*<br>                   ;; removed immediately from the history-buffer when such a<br>                   ;; buffer is killed!<br>                   (buf-name-formatted (cond (indirect-buffer-p<br>                                              (ecb-merge-face-into-text<br>                                               buf-name'
        },
        {
          function : 'ecb-add-source-path',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Add a directory to the `ecb-source-path"."',
          prototype : '(defun ecb-add-source-path (&optional dir alias no-prompt-for-future-session)',
          parameter : '&optional dir alias no-prompt-for-future-session',
          lispcode : '(defun ecb-add-source-path (&optional dir alias no-prompt-for-future-session)<br>  (interactive)<br>  ;; we must manually cut a filename because we must not add filenames to<br>  ;; <backtick>ecb-source-path<tick>!<br>  (let* ((use-dialog-box nil)<br>         (my-dir (ecb-fix-filename<br>                  (or dir<br>                      (ecb-file-name-directory (read-file-name <apo>Add source path: <apo>)))<br>                  nil t))<br>         (my-alias (or alias<br>                       (read-string (format <apo>Alias for \<apo>%s\<apo> (empty = no alias): <apo><br>                                            my-dir)))))<br>    (setq ecb-source-path (append ecb-source-path<br>                                  (list (if (> (length my-alias) 0)<br>                                            (list my-dir my-alias) my-dir))))<br>    (ecb-update-directories-buffer)<br>    (if (and (not no-prompt-for-future-session)<br>             (y-or-n-p <apo>Add the new source-path also for future-sessions? <apo>))'
        },
        {
          function : 'ecb-add-tag-bucket',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Adds a tag bucket to a node unless DISPLAY equals "hidden.<br>This function MUST be called with the source-buffer as current buffer!"',
          prototype : '(defun ecb-add-tag-bucket (node bucket display sort-method                                &optional parent-tag no-bucketize)',
          parameter : 'node bucket display sort-method &optional parent-tag no-bucketize',
          lispcode : '(defun ecb-add-tag-bucket (node bucket display sort-method<br>                                &optional parent-tag no-bucketize)<br>  (when bucket<br>    (let* ((name-bucket (ecb-format-bucket-name (car bucket)))<br>           (image-name (format <apo>%s-bucket<apo> (ecb--semantic-tag-class (cadr bucket))))<br>           (name (ecb-tag-generate-node-name name-bucket -1 image-name))<br>           ;;(type (ecb--semantic-tag-class (cadr bucket)))<br>           (bucket-node node)<br>           (new-tag-node nil)<br>           (new-tag-overlay nil))<br>      (unless (eq <tick>hidden display)<br>        (ecb-apply-user-filter-to-tags (cdr bucket))<br>	(unless (or (eq <tick>flattened display)<br>                    ;; we must not create a bucket-node when each tag in the<br>                    ;; bucket is forbidden to be displayed<br>                    (not (ecb-show-at-least-one-tag-p (cdr bucket))))<br>	  (setq bucket-node<br>                (tree-node-new name ecb-methods-nodetype-bucket<br>                               (list <tick>ecb-bucket-node<br>                                     (car bucket)<br>                                     (ecb--semantic-tag-class (car (cdr bucket))))<br>                               nil node<br>                               (if ecb-truncate-long-names <tick>end)))<br>	  (setf (tree-node->expanded bucket-node) (eq <tick>expanded display)))<br>        (dolist (tag (ecb-sort-tags sort-method (cdr bucket)))<br>          ;; we create only a new node for a tag of the bucket when the tag is<br>          ;; not forbidden to be displayed.<br>          (unless (ecb-tag-forbidden-display-p tag)<br>            (setq new-tag-node (tree-node-new <apo><apo> ecb-methods-nodetype-tag<br>                                              tag t bucket-node<br>                                              (if ecb-truncate-long-names <tick>end)))<br>            (ecb-update-tag-node tag<br>                                 new-tag-node<br>                                 parent-tag no-bucketize)<br>            (setq new-tag-overlay (ecb--semantic-tag-overlay tag))<br>            ;; for partial reparsing/updating each semantic-tag with an<br>            ;; overlay needs the id of that tree-node which holds as data that<br>            ;; tag.'
        },
        {
          function : 'ecb-add-tag-buckets',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Creates and adds tag nodes to the given node.<br>The PARENT-TAG is propagated to the functions `ecb-add-tag-bucket" and<br>`ecb-find-add-tag-bucket".<br>This function MUST be called with the source-buffer as current buffer!"',
          prototype : '(defun ecb-add-tag-buckets (node parent-tag buckets &optional no-bucketize)',
          parameter : 'node parent-tag buckets &optional no-bucketize',
          lispcode : '(defun ecb-add-tag-buckets (node parent-tag buckets &optional no-bucketize)<br>  (setq buckets (cons nil buckets))<br>  (dolist (tag-display (ecb-get-show-tags-list))<br>    (let* ((type (car tag-display))<br>           (display (cadr tag-display))<br>           (sort-method (caddr tag-display)))<br>      (cond<br>       ((eq <tick>parent type)<br> 	(when (and parent-tag<br> 		   (eq <tick>type (ecb--semantic-tag-class parent-tag)))<br> 	  (let ((parents (ecb-get-tag-parents parent-tag)))<br>	    (when parents<br>	      (let* ((name-bucket (ecb-format-bucket-name <apo>Parents<apo>))<br>                     (name (ecb-tag-generate-node-name name-bucket -1<br>                                                       <apo>parent-bucket<apo>))<br>                     (parent-node nil))<br>                (setq parent-node (ecb-create-node node display<br>                                                   name<br>                                                   (list <tick>ecb-bucket-node<br>                                                         <apo>Parents<apo><br>                                                         <tick>parent)<br>                                                   ecb-methods-nodetype-bucket))<br>                (when node<br>		  (dolist (parent (if sort-method<br>				      (sort parents <tick>ecb-string<) parents))<br>                    (let* ((plain-parent-name<br>                            (if (ecb-font-lock-tags)<br>                                (ecb--semantic--format-colorize-text parent <tick>type)<br>                              parent))<br>                           ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: When<br>                           ;; the next version of the semantic-parsers offer<br>                           ;; the protection of the inheritance (like possible<br>                           ;; in C++) then we have to adjust this code and<br>                           ;; compute the correct icon-name.<br>                           (parent-name (ecb-tag-generate-node-name plain-parent-name<br>                                                                    -1<br>                                                                    <apo>parent-unknown<apo>)))<br>                      (tree-node-new parent-name<br>                                     ecb-methods-nodetype-externtag<br>                                     parent t parent-node<br>                                     (if ecb-truncate-long-names <tick>end))))))))))<br>       (t (ecb-find-add-tag-bucket node type display sort-method buckets'
        },
        {
          function : 'ecb-add-tags',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Add TAGS to the node NODE.<br>If NO-BUCKETIZE is not nil then TAGS will not bucketized by<br>`ecb--semantic-bucketize" but must already been bucketized! If not nil<br>PARENT-TAG is the parent of TAGS.<br>This function MUST be called with the source-buffer as current buffer!"',
          prototype : '(defun ecb-add-tags (node tags &optional parent-tag no-bucketize)',
          parameter : 'node tags &optional parent-tag no-bucketize',
          lispcode : '(defun ecb-add-tags (node tags &optional parent-tag no-bucketize)<br>  (ecb-add-tag-buckets<br>   node parent-tag<br>   (if no-bucketize<br>       tags<br>     (ecb--semantic-bucketize tags<br>                              (and parent-tag<br>                                   (ecb--semantic-symbol->name-assoc-list-for-type-parts)<br>                                   (equal (ecb--semantic-tag-class parent-tag)<br>                                          <tick>type))))<br>   no-bucketize))<br>'
        },
        {
          function : 'ecb-add-to-minor-modes',
          filename : 'ecb/ecb.el',
          docstring : '  "Does all necessary to add ECB as a minor mode with current values of<br>`ecb-mode-map" and `ecb-minor-mode-text"."',
          prototype : '(defun ecb-add-to-minor-modes ()',
          parameter : '',
          lispcode : '(defun ecb-add-to-minor-modes ()<br>  ;; ECB minor mode doesn<tick>t work w/ Desktop restore.<br>  ;; This line will disable this minor mode from being restored<br>  ;; by Desktop.<br>  (when (boundp <tick>desktop-minor-mode-handlers)<br>    (add-to-list <tick>desktop-minor-mode-handlers'
        },
        {
          function : 'ecb-advice-test-defun-1',
          filename : 'ecb/ecb-advice-test.el',
          parameter : '',
          lispcode : '(defun ecb-advice-test-defun-1 ()<br>  (message <apo>I<tick>m the ORIGINAL function ecb-advice-test-defun-1<apo>))'
        },
        {
          function : 'ecb-advice-test-defun-2',
          filename : 'ecb/ecb-advice-test.el',
          parameter : '',
          lispcode : '(defun ecb-advice-test-defun-2 ()<br>  (message <apo>I<tick>m the ORIGINAL function ecb-advice-test-defun-2<apo>))'
        },
        {
          function : 'ecb-advice-test-defun-3',
          filename : 'ecb/ecb-advice-test.el',
          parameter : '',
          lispcode : '(defun ecb-advice-test-defun-3 ()<br>  (message <apo>I<tick>m the ORIGINAL function ecb-advice-test-defun-3<apo>))'
        },
        {
          function : 'ecb-advice-test-defun-4',
          filename : 'ecb/ecb-advice-test.el',
          parameter : '',
          lispcode : '(defun ecb-advice-test-defun-4 ()<br>  (message <apo>I<tick>m the ORIGINAL function ecb-advice-test-defun-4<apo>))'
        },
        {
          function : 'ecb-advices-debug-error',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Run ARGS through `format" and write it to the *Messages*-buffer.<br>ADVICE is the adviced-function-symbol, CLASS is the advice-class (after,<br>around or before) and ACTION is one of the symbols "calling, "enabling,<br>"disabling or "reporting.<br><br>This will build up a message string like:<br>ECB <version>: debug <ACTION> of "<CLASS>" advice ADVICE: ARGS.<br>If ARGS is nil then only the message above is reported."',
          prototype : '(defun ecb-advices-debug-error (advice class action &rest args)',
          parameter : 'advice class action &rest args',
          lispcode : '(defun ecb-advices-debug-error (advice class action &rest args)<br>  (when ecb-advices-debug-error<br>    (message (concat (format <apo>ECB %s: debug %s of <tick>%s<tick> advice %s <apo><br>                             ecb-version<br>                             action<br>                             class<br>                             advice)<br>                     (if args<br>                         (apply <tick>format args))))))'
        },
        {
          function : 'ecb-aggregate-alist',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return ALIST as a sorted, aggregated alist.<br><br>In the result all items with the same car element (according to<br>SAME-PREDICATE) are aggregated together.  The alist is first sorted by<br>SORT-PREDICATE which is called with two items of the alist and has to return<br>not nil if item1 should be precede item2.<br><br>Please note: SAME-PREDICATE gets the car of an item as argument, whereas<br>SORT-PREDICATE gets two complete items as arguments!<br><br>Example:<br>(ecb-aggregate-alist<br> "((a . a1) (a . a2) (b . b1) (c . c3) (a . a4) (a . a3) (b . b3) (b . b2))<br> (function string=)<br> (lambda (item1 item2)<br>   (string< (symbol-name (car item1)) (symbol-name (car item2)))))<br>results in<br>((a a1 a2 a4 a3) (b b1 b3 b2) (c c3))"',
          prototype : '(defun ecb-aggregate-alist (alist same-predicate sort-predicate)',
          parameter : 'alist same-predicate sort-predicate',
          lispcode : '(defun ecb-aggregate-alist (alist same-predicate sort-predicate)<br>  (when (not (null alist))<br>    (let (same<br>	  tmp-old-car<br>	  tmp-same<br>	  (first-time-p t)<br>	  old-car)<br>      (nconc<br>       (apply #<tick>nconc<br>	      (mapcar<br>	       (lambda (item)<br>		 (cond<br>		  (first-time-p<br>		   (push (cdr item) same)<br>		   (setq first-time-p nil)<br>		   (setq old-car (car item))<br>		   nil)<br>		  ((funcall same-predicate (car item) old-car)<br>		   (push (cdr item) same)<br>		   nil)<br>		  (t<br>		   (setq tmp-same same<br>			 tmp-old-car old-car)<br>		   (setq same (list (cdr item))<br>			 old-car (car item))<br>		   (list (cons tmp-old-car (nreverse tmp-same))))))<br>	       (sort alist (lambda (item1 item2)<br>			     (funcall sort-predicate<br>                                      item1 item2)))))<br>       (list (cons old-car (nreverse same)))))))<br>'
        },
        {
          function : 'ecb-analyse-add-nodes',
          filename : 'ecb/ecb-analyse.el',
          docstring : '  "Create ecb-nodes from LIST. BUCKET is one of the categories/buckets<br>mentioned in `ecb-analyse-collapsed-buckets". BUCKET-NAME is the name a bucket<br>should be displayed with. LIST is a list of tags for this bucket. NODETYPE is<br>an integer which will be added as type to the nodes created for the elements<br>of LIST."',
          prototype : '(defun ecb-analyse-add-nodes (bucket bucket-name list nodetype)',
          parameter : 'bucket bucket-name list nodetype',
          lispcode : '(defun ecb-analyse-add-nodes (bucket bucket-name list nodetype)<br>  (when list<br>    (with-current-buffer ecb-analyse-buffer-name<br>      (let* ((bucket-name-formatted<br>              (ecb-merge-face-into-text (ecb-format-bucket-name bucket-name)<br>                                        ecb-analyse-bucket-node-face))<br>             (bucket-node (tree-node-new bucket-name-formatted<br>                                         ecb-analyse-nodetype-bucket<br>                                         (list <tick>ecb-bucket-node<br>                                               ecb-analyse-nodetype-bucket)<br>                                         nil<br>                                         (tree-buffer-get-root))))<br>        (setf (tree-node->expanded bucket-node)<br>              (not (member bucket ecb-analyse-collapsed-buckets)))<br>        (ecb-exit-on-input <tick>ecb-analyse<br>          (dolist (elem list)<br>            (ecb-throw-on-input <tick>ecb-analyse-tree-buffer-build)<br>            (let* ((fontify-tags (member bucket ecb-analyse-fontified-buckets))<br>                   (string-1 (cl-typecase elem<br>                               (string elem)<br>                               (ecb--semantic-tag<br>                                (if fontify-tags<br>                                    (ecb-displayed-tag-name elem)<br>                                  (ecb--semantic-format-tag-uml-concise-prototype elem)))<br>                               (otherwise <apo>foo<apo>)))<br>                   (string (concat string-1)))<br>              (unless fontify-tags<br>                (ecb-merge-face-into-text string ecb-analyse-bucket-element-face))<br>              (if (ecb--semantic-tag-p elem)<br>                  (tree-node-new string nodetype<br>                                 (list elem<br>                                       (if (ecb--semantic-tag-with-position-p elem)<br>                                           ecb-analyse-nodedata-tag-with-pos<br>                                         ecb-analyse-nodedata-tag-without-pos)<br>                                       nodetype)<br>                                 t bucket-node nil)<br>                (tree-node-new string nodetype<br>                               (list elem ecb-analyse-nodedata-no-tag nodetype)<br>                               t bucket-node nil)))))))))'
        },
        {
          function : 'ecb-analyse-compare-node-data',
          filename : 'ecb/ecb-analyse.el',
          docstring : '  "Return not nil when LEFT and RIGHT are identical node-datas."',
          prototype : '(defun ecb-analyse-compare-node-data (left right)',
          parameter : 'left right',
          lispcode : '(defun ecb-analyse-compare-node-data (left right)<br>  (and (equal (nth 2 left) (nth 2 right))<br>       (ecb-compare-methods-buffer-node-data (car left) (car right))))'
        },
        {
          function : 'ecb-analyse-create-menu',
          filename : 'ecb/ecb-analyse.el',
          docstring : '  "Return a popup-menu suitable for NODE."',
          prototype : '(defun ecb-analyse-create-menu (node)',
          parameter : 'node',
          lispcode : '(defun ecb-analyse-create-menu (node)<br>  (let* ((data (tree-node->data node))<br>         (tag-p (not (equal (nth 1 data) ecb-analyse-nodedata-no-tag)))<br>         (tag-with-pos-p (equal (nth 1 data) ecb-analyse-nodedata-tag-with-pos))<br>         (nodetype (nth 2 data)))<br>    (delq nil (list (if (member nodetype (list<br>                                          ecb-analyse-nodetype-completions<br>                                          ecb-analyse-nodetype-localvars))<br>                        <tick>(ecb-analyse-complete/insert <apo>Complete/insert<apo>))<br>                    (if tag-p<br>                        <tick>(ecb-analyse-show-tag-info <apo>Show tag info<apo>))<br>                    (if tag-with-pos-p<br>                        <tick>(ecb-analyse-jump-to-tag <apo>Jump to tag<apo>))))))'
        },
        {
          function : 'ecb-analyse-gen-menu-title-creator',
          filename : 'ecb/ecb-analyse.el',
          docstring : '  "Returns a menu-title-create-function for the nodetypes of the<br>analyse-buffer."',
          prototype : '(defun ecb-analyse-gen-menu-title-creator ()',
          parameter : '',
          lispcode : '(defun ecb-analyse-gen-menu-title-creator ()<br>  (mapcar (function (lambda (nodetype)<br>                      (cons nodetype<br>                            (function (lambda (node)<br>                                        (tree-node->name node))))))<br>          <backtick>(,ecb-analyse-nodetype-context<br>            ,ecb-analyse-nodetype-arguments<br>            ,ecb-analyse-nodetype-completions<br>            ,ecb-analyse-nodetype-localvars<br>            ,ecb-analyse-nodetype-prefix<br>            ,ecb-analyse-nodetype-assignee<br>            ,ecb-analyse-nodetype-function<br>            ,ecb-analyse-nodetype-function-arg)))<br>'
        },
        {
          function : 'ecb-analyse-gen-tag-info',
          filename : 'ecb/ecb-analyse.el',
          docstring : '  "Return the info-string for TAG."',
          prototype : '(defun ecb-analyse-gen-tag-info (tag)',
          parameter : 'tag',
          lispcode : '(defun ecb-analyse-gen-tag-info (tag)<br>  (or (and (functionp ecb-analyse-gen-tag-info-fn)<br>           (or (funcall ecb-analyse-gen-tag-info-fn tag)<br>               (format <apo>No info generated by <backtick>%s<tick>.<apo> ecb-analyse-gen-tag-info-fn)))<br>      (concat (ecb-displayed-tag-name tag)<br>              <apo>\n<apo><br>              (let ((typetag<br>                     (condition-case nil<br>                         (save-excursion<br>                           (ecb--semantic-analyze-tag-type tag))<br>                       (error nil))))<br>                (if typetag<br>                    (ecb-displayed-tag-name typetag)<br>                  ;; No type found by the analyzer The below used<br>                  ;; to try and select the buffer from the last<br>                  ;; analysis, but since we are already in the<br>                  ;; correct buffer, I don<tick>t think that is needed.<br>                  (when (fboundp <tick>semantic-lex-keyword-p)<br>                    (let ((type (ecb--semantic-tag-type tag)))<br>                      (cl-typecase type<br>                        (ecb--semantic-tag<br>                         (setq type (ecb--semantic-tag-name type)))<br>                        (list<br>                         (setq type (car type))))<br>                      (if (semantic-lex-keyword-p type)<br>                          (setq typetag<br>                                (semantic-lex-keyword-get type <tick>summary))))'
        },
        {
          function : 'ecb-analyse-menu-creator',
          filename : 'ecb/ecb-analyse.el',
          docstring : '  "Creates the popup-menus for the analyse-buffer."',
          prototype : '(defun ecb-analyse-menu-creator (tree-buffer-name node)',
          parameter : 'tree-buffer-name node',
          lispcode : '(defun ecb-analyse-menu-creator (tree-buffer-name node)<br>  (setq ecb-layout-prevent-handle-ecb-window-selection t)<br>  (let ((nodetype (tree-node->type node)))<br>    (unless (equal nodetype ecb-analyse-nodetype-bucket)<br>      (mapcar (function (lambda (type)<br>                          (cons type (ecb-analyse-create-menu node))))<br>              <backtick>(,ecb-analyse-nodetype-context<br>                ,ecb-analyse-nodetype-arguments<br>                ,ecb-analyse-nodetype-completions<br>                ,ecb-analyse-nodetype-localvars<br>                ,ecb-analyse-nodetype-prefix<br>                ,ecb-analyse-nodetype-assignee<br>                ,ecb-analyse-nodetype-function<br>                ,ecb-analyse-nodetype-function-arg)))))<br>'
        },
        {
          function : 'ecb-analyse-node-mouse-highlighted-p',
          filename : 'ecb/ecb-analyse.el',
          docstring : '  "Return not nil when NODE has a positioned tag as data or belongs to the<br>completions. This means that this node should be highlighted when mouse is<br>moved over it."',
          prototype : '(defun ecb-analyse-node-mouse-highlighted-p (node)',
          parameter : 'node',
          lispcode : '(defun ecb-analyse-node-mouse-highlighted-p (node)<br>  (or (equal ecb-analyse-nodedata-tag-with-pos<br>             (nth 1 (tree-node->data node)))<br>      (member (tree-node->type node)<br>              (list ecb-analyse-nodetype-completions<br>                    ecb-analyse-nodetype-localvars))))'
        },
        {
          function : 'ecb-analyse-show-scope',
          filename : 'ecb/ecb-analyse.el',
          docstring : '  "Show SCOPE information."',
          prototype : '(defun ecb-analyse-show-scope (scope)',
          parameter : 'scope',
          lispcode : '(defun ecb-analyse-show-scope (scope)<br>  (let ((localvars (when scope<br>		     (oref scope localvar))))<br>    (when localvars<br>      (ecb-analyse-add-nodes <apo>Local Variables<apo> <apo>Local Variables<apo> localvars<br>                             ecb-analyse-nodetype-localvars))))'
        },
        {
          function : 'ecb-analyse-show-tag-info-in-temp-buffer',
          filename : 'ecb/ecb-analyse.el',
          docstring : '  "Display INFO-STRING in a temp-buffer in the edit-area."',
          prototype : '(defun ecb-analyse-show-tag-info-in-temp-buffer (info-string)',
          parameter : 'info-string',
          lispcode : '(defun ecb-analyse-show-tag-info-in-temp-buffer (info-string)<br>  (with-output-to-temp-buffer <apo>*Tag Information*<apo><br>    (with-current-buffer <apo>*Tag Information*<apo><br>      (insert info-string)))<br>  ;; Make it small<br>  (shrink-window-if-larger-than-buffer<br>   (get-buffer-window <apo>*Tag Information*<apo>)))'
        },
        {
          function : 'ecb-apply-default-tag-filter',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Applies all default-tag-filters specified in `ecb-default-tag-filter" for<br>the current file."',
          prototype : '(defun ecb-apply-default-tag-filter ()',
          parameter : '',
          lispcode : '(defun ecb-apply-default-tag-filter ()<br>  (remove-hook <tick>post-command-hook <tick>ecb-apply-default-tag-filter)<br>  (ignore-errors<br>    (let ((tag-filter-list (ecb-default-tag-filter-for-current-source)))<br>      (dolist (filter-spec tag-filter-list)<br>        (let ((filter-apply-fcn<br>               (cl-case (nth 0 filter-spec)<br>                 (protection <tick>ecb-methods-filter-by-prot)<br>                 (tag-class  <tick>ecb-methods-filter-by-tag-class)<br>                 (regexp <tick>ecb-methods-filter-by-regexp)<br>                 (function <tick>ecb-methods-filter-by-function)))<br>              (filter<br>               (cl-case (nth 0 filter-spec)<br>                 (protection<br>                  (cl-typecase (nth 1 filter-spec)<br>                    (symbol (symbol-name (nth 1 filter-spec)))<br>                    (string (nth 1 filter-spec))<br>                    (otherwise<br>                     (ecb-error <apo>Not a valid tag-filter: %s<apo> (nth 1 filter-spec)))))<br>                 (tag-class<br>                  (cl-typecase (nth 1 filter-spec)<br>                    (symbol (symbol-name (nth 1 filter-spec)))<br>                    (string (nth 1 filter-spec))<br>                    (otherwise<br>                     (ecb-error <apo>Not a valid tag-filter: %s<apo> (nth 1 filter-spec)))))<br>                 (regexp<br>                  (cl-typecase (nth 1 filter-spec)<br>                    (string (nth 1 filter-spec))<br>                    (otherwise<br>                     (ecb-error <apo>Not a valid tag-filter: %s<apo> (nth 1 filter-spec)))))<br>                 (function<br>                  (cl-typecase (nth 1 filter-spec)<br>                    (symbol (symbol-name (nth 1 filter-spec)))<br>                    (string (nth 1 filter-spec))<br>                    (otherwise<br>                     (ecb-error <apo>Not a valid tag-filter: %s<apo> (nth 1 filter-spec))))))))<br>          (funcall filter-apply-fcn<br>                   (nth 2 filter-spec) (current-buffer) filter))))))'
        },
        {
          function : 'ecb-apply-filter-to-sources-buffer',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Apply the regular expression FILTER-REGEXP to the files of<br>`ecb-path-selected-directory" and display only the filtered files in the<br>Sources-buffer. If FILTER-REGEXP is nil then any applied filter is removed and<br>all files are displayed. Returns t if the filter has been applied otherwise<br>nil. Returns "window-not-visible if the ECB-sources-buffer is not visible."',
          prototype : '(defun ecb-apply-filter-to-sources-buffer (filter-regexp &optional filter-display)',
          parameter : 'filter-regexp &optional filter-display',
          lispcode : '(defun ecb-apply-filter-to-sources-buffer (filter-regexp &optional filter-display)<br>  (prog1<br>      (ecb-exec-in-window ecb-sources-buffer-name<br>        (if (or (null filter-regexp) (= (length filter-regexp) 0))<br>            ;; no filtering<br>            (progn<br>              ;; remove the filtered cache by setting it to nil<br>              (ecb-sources-cache-add-filtered ecb-path-selected-directory nil)<br>              ;; update the sources buffer - because the filtered cache is nil<br>              ;; the full sources are displayed.<br>              (ecb-update-sources-buffer ecb-path-selected-directory)<br>              (tree-buffer-highlight-node-by-data/name (ecb-path-selected-source <tick>file))<br>              nil)<br>          ;; apply the filter-regexp<br>          (let ((new-tree (tree-node-new-root))<br>                (old-children (tree-node->children (tree-buffer-get-root)))<br>                (all-files (car (ecb-get-files-and-subdirs ecb-path-selected-directory)))<br>                (filtered-files nil))<br>            (save-match-data<br>              (dolist (file all-files)<br>                (if (string-match filter-regexp file)<br>                    (setq filtered-files<br>                          (cons file filtered-files)))))<br>            (if (null filtered-files)<br>                (progn<br>                  (ecb-apply-filter-to-sources-buffer nil)<br>                  (message <apo>ECB has not applied this filter because it would filter out all files!<apo>)<br>                  nil)<br>              ;; building up the new files-tree<br>              (ecb-tree-node-add-files<br>               new-tree<br>               ecb-path-selected-directory<br>               (nreverse filtered-files)<br>               ecb-sources-nodetype-sourcefile<br>               ecb-show-source-file-extension old-children t)<br><br>              ;; updating the buffer itself<br>              (tree-buffer-set-root new-tree)<br>              (tree-buffer-update)<br>              (ecb-scroll-window (point-min) (point-min))<br>              (tree-buffer-highlight-node-by-data/name (ecb-path-selected-source <tick>file))<br><br>              ;; add the new filter to the cache, so the next call to<br>              ;; <backtick>ecb-update-sources-buffer<tick> displays the filtered sources.<br>              (ecb-sources-cache-add-filtered ecb-path-selected-directory<br>                                              (list (tree-buffer-get-root)<br>                                                    (tree-buffer-displayed-nodes-copy)'
        },
        {
          function : 'ecb-apply-tag-table-filters',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Perform all tag-filters which must be applied to the whole tag-table."',
          prototype : '(defun ecb-apply-tag-table-filters (taglist)',
          parameter : 'taglist',
          lispcode : '(defun ecb-apply-tag-table-filters (taglist)<br>  (let ((filters (cdr (assoc (current-buffer) ecb-methods-user-filter-alist)))<br>        (filter nil))<br>    (dolist (filter-type <tick>(current-type))<br>      (setq filter (car (cdr (assoc filter-type filters))))<br>      (if filter<br>          (setq taglist (funcall (cdr filter) (car filter) taglist)))))<br>  taglist)<br>'
        },
        {
          function : 'ecb-apply-user-filter-to-tags',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Applies to the tags of TAGLIST the related filter of<br>`ecb-methods-user-filter-alist" - if there is any."',
          prototype : '(defun ecb-apply-user-filter-to-tags (taglist)',
          parameter : 'taglist',
          lispcode : '(defun ecb-apply-user-filter-to-tags (taglist)<br>  (save-match-data<br>    (let ((filters (cdr (assoc (current-buffer) ecb-methods-user-filter-alist)))<br>          (filter-type nil)<br>          (filter nil)<br>          (inverse nil))<br>      (when filters<br>        (dolist (tag taglist)<br>          (dolist (filter-spec filters)<br>            (setq filter-type (nth 0 filter-spec))<br>            (setq filter (car (nth 1 filter-spec))) ;; ignore the attached fcn<br>            (setq inverse (nth 2 filter-spec))<br>            ;; we forbid some tags to be displayed when they do not match the<br>            ;; filter. Currently we do not apply a filter to tags of class <tick>type<br>            (unless (equal (ecb--semantic-tag-class tag) <tick>type)<br>              (cond ((equal filter-type <tick>regexp)<br>                     (if (funcall inverse<br>                                  (not (string-match filter<br>                                                     (ecb--semantic-tag-name tag))))<br>                         (ecb-forbid-tag-display tag)))<br>                    ((and (member filter <tick>(private protected public))<br>                          (equal filter-type <tick>protection))<br>                     (if (funcall inverse<br>                                  (not (or (null (ecb--semantic-tag-protection tag))<br>                                           (equal (ecb--semantic-tag-protection tag)<br>                                                  filter))))<br>                         (ecb-forbid-tag-display tag)))<br>                    ((and (symbolp filter)<br>                          (equal filter-type <tick>tag-class))<br>                     (if (funcall inverse<br>                                  (not (equal (ecb--semantic-tag-class tag) filter)))<br>                         (ecb-forbid-tag-display tag)))<br>                    ((and (functionp filter)<br>                          (equal filter-type <tick>function))<br>                     (if (funcall inverse<br>                                  (not (funcall filter tag (current-buffer))))<br>                         (ecb-forbid-tag-display tag)))'
        },
        {
          function : 'ecb-auto-activate-hook',
          filename : 'ecb/ecb.el',
          docstring : '  "If necessary, run `ecb-activate" when Emacs is started."',
          prototype : '(defun ecb-auto-activate-hook()',
          parameter : '',
          lispcode : '(defun ecb-auto-activate-hook()<br>  (when ecb-auto-activate<br>    (ecb-activate)))'
        },
        {
          function : 'ecb-autogen-update-header',
          filename : 'ecb/ecb-autogen.el',
          docstring : '  "Update header of the auto-generated autoloads file.<br>Run as `write-contents-hooks"."',
          prototype : '(defun ecb-autogen-update-header ()',
          parameter : '',
          lispcode : '(defun ecb-autogen-update-header ()<br>  (when (ecb-string= generated-autoload-file (buffer-file-name))<br>    (let ((tag (format <apo>;;; %s ---<apo> (file-name-nondirectory<br>                                     (buffer-file-name)))))<br>      (message <apo>Updating header...<apo>)<br>      (goto-char (point-min))<br>      (cond<br>       ;; Replace existing header line<br>       ((re-search-forward (concat <apo>^<apo> (regexp-quote tag)) nil t)<br>        (beginning-of-line)<br>        (kill-line 1)<br>        )<br>       ;; Insert header before first ^L encountered (XEmacs)<br>       ((re-search-forward <apo>^<apo> nil t)<br>        (beginning-of-line)<br>        ))<br>      (insert tag <apo> <apo> ecb-autogen-header)<br>      (newline)<br>      (message <apo>Updating header...done<apo>)'
        },
        {
          function : 'ecb-autotrace-autocontrol/sync-fcn-error',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Run ARGS through `format" and write it to the *Messages*-buffer.<br>Do not use this function for own traces, but use the function<br>`ecb-bodytrace-autocontrol/sync-fcn-error"!<br>Entry and exit-traces are already buildin in functions defined with<br>`defecb-autocontrol/sync-function" and can be switched on/off by<br>`ecb-autotrace-autocontrol/sync-functions"."',
          prototype : '(defun ecb-autotrace-autocontrol/sync-fcn-error (autocontrol-fcn &rest args)',
          parameter : 'autocontrol-fcn &rest args',
          lispcode : '(defun ecb-autotrace-autocontrol/sync-fcn-error (autocontrol-fcn &rest args)<br>  (when (or (eq ecb-autotrace-autocontrol/sync-functions t)<br>            (member autocontrol-fcn ecb-autotrace-autocontrol/sync-functions))<br>    (message (concat (format <apo>ECB %s autocontrol-fcn %s autotrace [%s] <apo><br>                             ecb-version autocontrol-fcn<br>                             (format-time-string <apo>%H:%M:%S<apo>))<br>                     (apply <tick>format args)))))'
        },
        {
          function : 'ecb-available-layouts-add',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Add layout with NAME and TYPE to `ecb-available-layouts". NAME is a string<br>and TYPE must be an element of `ecb-layout-types"."',
          prototype : '(defun ecb-available-layouts-add (name type)',
          parameter : 'name type',
          lispcode : '(defun ecb-available-layouts-add (name type)<br>  (add-to-list <tick>ecb-available-layouts (cons name type))<br>  (setq ecb-available-layouts<br>        (sort ecb-available-layouts<br>              (function (lambda (l r)<br>                          (ecb-string< (car l) (car r)))))))'
        },
        {
          function : 'ecb-available-layouts-member-p',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return a non nil value iff LAYOUT-NAME is the name of a layout of<br>`ecb-available-layouts"."',
          prototype : '(defun ecb-available-layouts-member-p (layout-name)',
          parameter : 'layout-name',
          lispcode : '(defun ecb-available-layouts-member-p (layout-name)<br>  (member layout-name (ecb-available-layouts-of-type nil)))'
        },
        {
          function : 'ecb-available-layouts-of-type',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return a list of all layout-names for given type TYPE. Type must be an<br>element of `ecb-layout-types" or nil (then return all layout-names<br>regardless of the type)."',
          prototype : '(defun ecb-available-layouts-of-type (type)',
          parameter : 'type',
          lispcode : '(defun ecb-available-layouts-of-type (type)<br>  (if type (ecb-layout-type-p type t))<br>  (delete nil (mapcar (function (lambda (elem)<br>                                  (if (or (not type)<br>                                          (equal (cdr elem) type))<br>                                      (car elem))))<br>                      ecb-available-layouts)))'
        },
        {
          function : 'ecb-available-layouts-remove',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Remove layout with NAME from `ecb-available-layouts"."',
          prototype : '(defun ecb-available-layouts-remove (name)',
          parameter : 'name',
          lispcode : '(defun ecb-available-layouts-remove (name)<br>  (let ((elem (assoc name ecb-available-layouts)))<br>    (when elem<br>      (setq ecb-available-layouts<br>            (sort (delete elem ecb-available-layouts)<br>                  (function (lambda (l r)<br>                              (ecb-string< (car l) (car r)))))))))'
        },
        {
          function : 'ecb-batch-update-autoloads',
          filename : 'ecb/ecb-autogen.el',
          parameter : '',
          lispcode : '(defun ecb-batch-update-autoloads ()<br>  (let ((old-val (symbol-value (if (boundp <tick>write-contents-functions)<br>                                   <tick>write-contents-functions<br>                                 <tick>write-contents-hooks))))<br>    (unwind-protect<br>        (progn<br>          (set (if (boundp <tick>write-contents-functions)<br>                   <tick>write-contents-functions<br>                 <tick>write-contents-hooks)<br>               <tick>(ecb-autogen-update-header))<br>          (loaddefs-generate-batch)<br>          ; (batch-update-autoloads)<br>          ; (update-autoloads-from-directories my-lisp-dir)<br>          )<br>      (set (if (boundp <tick>write-contents-functions)<br>               <tick>write-contents-functions'
        },
        {
          function : 'ecb-bodytrace-autocontrol/sync-fcn-error',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Run ARGS through `format" and write it to the *Messages*-buffer.<br><br>Use this function only for traces used within the BODY of a function defined<br>with `defecb-autocontrol/sync-function" and not for entry and exit-traces<br>because these ones are already buildin in functions defined with<br>`defecb-autocontrol/sync-function" and can be switched on/off by<br>`ecb-autotrace-autocontrol/sync-functions".<br><br>Body-tracing can be switched on/off with<br>`ecb-bodytrace-autocontrol/sync-function"."',
          prototype : '(defun ecb-bodytrace-autocontrol/sync-fcn-error (autocontrol-fcn &rest args)',
          parameter : 'autocontrol-fcn &rest args',
          lispcode : '(defun ecb-bodytrace-autocontrol/sync-fcn-error (autocontrol-fcn &rest args)<br>  (when (or (eq ecb-bodytrace-autocontrol/sync-functions t)<br>            (member autocontrol-fcn ecb-bodytrace-autocontrol/sync-functions))<br>    (message (concat (format <apo>ECB %s autocontrol-fcn %s bodytrace [%s] <apo><br>                             ecb-version autocontrol-fcn<br>                             (format-time-string <apo>%H:%M:%S<apo>))<br>                     (apply <tick>format args)))))'
        },
        {
          function : 'ecb-browse-html-file',
          filename : 'ecb/ecb-help.el',
          docstring : '  "Opens HTML-FILE in the standard-webbrowser with `browse-url". If INFO-FILE<br>does not exists then nil is returned otherwise true. If NO-FILE-NOT-EXIST-ERR<br>is not nil then just nil is returned if HTML-FILE does not exist otherwise an<br>error is reported."',
          prototype : '(defun ecb-browse-html-file (html-file &optional no-file-not-exist-err)',
          parameter : 'html-file &optional no-file-not-exist-err',
          lispcode : '(defun ecb-browse-html-file (html-file &optional no-file-not-exist-err)<br>  (if (file-exists-p html-file)<br>      (prog1 t<br>        (if (and (locate-library <apo>browse-url<apo>)<br>                 (require <tick>browse-url)<br>                 (fboundp <tick>browse-url))<br>            (browse-url (concat <apo>file://<apo> html-file)<br>                        (if (boundp <tick>browse-url-new-window-flag)<br>                            browse-url-new-window-flag<br>                          browse-url-new-window-p))<br>          (ecb-error <apo>Function <tick>browse-url needed for displaying HTML!<apo>)))<br>    (unless no-file-not-exist-err<br>      (ecb-error <apo>HTML file %s does not exists!<apo> html-file))<br>    nil))'
        },
        {
          function : 'ecb-buffer-file-name',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return filename of file represented by BUFFER.<br>BUFFER can also be an indirect buffer - if its base buffer points to a file<br>then this filename is returned.<br>BUFFER can be a buffer-object or a buffer-name.<br>If BUFFER is nil then current buffer is used.<br>If NO-INDIRECT-BUFFERS is not nil then for indirect buffers always nil is<br>returned."',
          prototype : '(defun ecb-buffer-file-name (&optional buffer no-indirect-buffers)',
          parameter : '&optional buffer no-indirect-buffers',
          lispcode : '(defun ecb-buffer-file-name (&optional buffer no-indirect-buffers)<br>  (or (buffer-file-name buffer)<br>      (and (not no-indirect-buffers)<br>           (buffer-base-buffer buffer)<br>           (buffer-file-name (buffer-base-buffer buffer)))))<br>'
        },
        {
          function : 'ecb-buffer-is-dedicated-special-buffer-p',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return not nil if BUFFER-OR-NAME is a member of<br>`ecb-dedicated-special-buffers". BUFFER-OR-NAME ca be either a<br>buffer-object or a buffer-name."',
          prototype : '(defun ecb-buffer-is-dedicated-special-buffer-p (buffer-or-name)',
          parameter : 'buffer-or-name',
          lispcode : '(defun ecb-buffer-is-dedicated-special-buffer-p (buffer-or-name)<br>  (let ((buffer (ecb-buffer-obj buffer-or-name)))<br>    (member buffer (ecb-dedicated-special-buffers))))<br>'
        },
        {
          function : 'ecb-buffer-is-ecb-buffer-of-current-layout-p',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return not nil if BUFFER-OR-NAME is a member of<br>`ecb-special-ecb-buffers-of-current-layout", means BUFFER-OR-NAME is one of<br>that buffers which build up the current-layout as it is defined.<br>BUFFER-OR-NAME ca be either a buffer-object or a buffer-name."',
          prototype : '(defun ecb-buffer-is-ecb-buffer-of-current-layout-p (buffer-or-name)',
          parameter : 'buffer-or-name',
          lispcode : '(defun ecb-buffer-is-ecb-buffer-of-current-layout-p (buffer-or-name)<br>  (let ((buff-name (ecb-buffer-name buffer-or-name)))<br>    (member buff-name ecb-special-ecb-buffers-of-current-layout)))'
        },
        {
          function : 'ecb-buffer-is-maximized-p',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Not nil if ECB-BUFFER-NAME is currently maximized.<br>If ECB-BUFFER-NAME is not nil and not part of the current layout then nil is<br>returned. If ECB-BUFFER-NAME is nil then not nil is returned if any special<br>buffer of current layout is maximized otherwise nil."',
          prototype : '(defun ecb-buffer-is-maximized-p (&optional ecb-buffer-name)',
          parameter : '&optional ecb-buffer-name',
          lispcode : '(defun ecb-buffer-is-maximized-p (&optional ecb-buffer-name)<br>  (if ecb-buffer-name<br>      (and (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-buffer-name)<br>           (equal ecb-buffer-name<br>                  (ecb-maximized-ecb-buffer-name)))<br>    (ecb-maximized-ecb-buffer-name)))<br>'
        },
        {
          function : 'ecb-buffer-is-the-only-visible-ecb-buffer-p',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return not nil if BUFFER-OR-NAME is currently the only visible ecb-buffer."',
          prototype : '(defun ecb-buffer-is-the-only-visible-ecb-buffer-p (buffer-or-name)',
          parameter : 'buffer-or-name',
          lispcode : '(defun ecb-buffer-is-the-only-visible-ecb-buffer-p (buffer-or-name)<br>  (let ((buffer (ecb-buffer-obj buffer-or-name))<br>        (current-ecb-buffers (ecb-get-current-visible-ecb-buffers)))<br>    (and (= (length current-ecb-buffers) 1)<br>         (equal buffer (car current-ecb-buffers)))))'
        },
        {
          function : 'ecb-buffer-is-visible-ecb-buffer-p',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return not nil if BUFFER-OR-NAME is a member of<br>`ecb-get-current-visible-ecb-buffers". BUFFER-OR-NAME ca be either a<br>buffer-object or a buffer-name."',
          prototype : '(defun ecb-buffer-is-visible-ecb-buffer-p (buffer-or-name)',
          parameter : 'buffer-or-name',
          lispcode : '(defun ecb-buffer-is-visible-ecb-buffer-p (buffer-or-name)<br>  (let ((buffer (ecb-buffer-obj buffer-or-name)))<br>    (member buffer (ecb-get-current-visible-ecb-buffers))))'
        },
        {
          function : 'ecb-buffer-local-value',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Get the buffer-local value of variable SYM in BUFFER. If there is no<br>buffer-local value in BUFFER then the global value of SYM is used."',
          prototype : '(defun ecb-buffer-local-value (sym buffer)',
          parameter : 'sym buffer',
          lispcode : '(defun ecb-buffer-local-value (sym buffer)<br>  (if (fboundp <tick>buffer-local-value)<br>      (buffer-local-value sym buffer)))'
        },
        {
          function : 'ecb-buffer-name',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return the buffer-name of BUFFER-OR-WINDOW.<br>BUFFER-OR-WINDOW can be a buffer-name, a buffer or a window. If a<br>window then the name of the buffer curently displayed in this<br>window is returned."',
          prototype : '(defun ecb-buffer-name (buffer-or-window)',
          parameter : 'buffer-or-window',
          lispcode : '(defun ecb-buffer-name (buffer-or-window)<br>  (cl-typecase buffer-or-window<br>    (string buffer-or-window)<br>    (buffer (buffer-name buffer-or-window))<br>    (window (buffer-name (window-buffer buffer-or-window)))<br>    (otherwise nil)))'
        },
        {
          function : 'ecb-buffer-obj',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return the buffer-object of BUFFER-OR-WINDOW.<br>BUFFER-OR-WINDOW can be a buffer-name, a buffer or a window.<br>If a window then the buffer curently displayed in this window is returned."',
          prototype : '(defun ecb-buffer-obj (buffer-or-window)',
          parameter : 'buffer-or-window',
          lispcode : '(defun ecb-buffer-obj (buffer-or-window)<br>  (cl-typecase buffer-or-window<br>    (string (get-buffer buffer-or-window))<br>    (buffer buffer-or-window)<br>    (window (window-buffer buffer-or-window))<br>    (otherwise nil)))'
        },
        {
          function : 'ecb-buffer-or-file-readable-p',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Checks if a buffer or a file is a readable file in the sense of ECB which<br>means either a real physical file or an auto-extracted file from an archive.<br>See `ecb-current-buffer-archive-extract-p". FILENAME is either a filename or<br>nil whereas in the latter case the current-buffer is assumed."',
          prototype : '(defun ecb-buffer-or-file-readable-p (&optional filename)',
          parameter : '&optional filename',
          lispcode : '(defun ecb-buffer-or-file-readable-p (&optional filename)<br>  (let* ((file (or filename (ecb-buffer-file-name (current-buffer)))))<br>    (or (and file (file-readable-p file))<br>             (if filename<br>                 (with-current-buffer (find-file-noselect filename)<br>                   (ecb-current-buffer-archive-extract-p))<br>           (ecb-current-buffer-archive-extract-p)))))<br>'
        },
        {
          function : 'ecb-buffer-substring',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return the contents of part of BUFFER as a string.<br>If BUFFER is nil then the current-buffer is used. BUFFER can be a buffer-name<br>or a buffer-object."',
          prototype : '(defun ecb-buffer-substring (minpoint maxpoint &optional buffer)',
          parameter : 'minpoint maxpoint &optional buffer',
          lispcode : '(defun ecb-buffer-substring (minpoint maxpoint &optional buffer)<br>  (with-current-buffer (or buffer (current-buffer))<br>    (buffer-substring minpoint maxpoint)))'
        },
        {
          function : 'ecb-buffertab-make-menuname',
          filename : 'ecb/ecb-buffertab.el',
          docstring : '  "Make a menu for use on the buffertab."',
          prototype : '(defun ecb-buffertab-make-menu(name)',
          parameter : '',
          lispcode : '(defun ecb-buffertab-make-menu(name)<br><br>  (let((menu (list <tick>keymap name)))<br><br>    (dolist(entry (ecb-compilation-get-buffers))<br><br>      (add-to-list <tick>menu (cons (list (car entry) (car entry))<br>                               <tick>switch-to-buffer)) t)<br><br>    (pp menu)<br>    <br>    menu))'
        },
        {
          function : 'ecb-buffertab-popup-menu',
          filename : 'ecb/ecb-buffertab.el',
          docstring : '  "Popup a menu for selecting an ECB buffer."',
          prototype : '(defun ecb-buffertab-popup-menu()',
          parameter : '',
          lispcode : '(defun ecb-buffertab-popup-menu()<br>  (interactive)<br><br>  (let((menu (ecb-buffertab-make-menu <apo>Compilation Buffers<apo>)))<br><br>    (popup-menu menu)))'
        },
        {
          function : 'ecb-buffertab-setup-header',
          filename : 'ecb/ecb-buffertab.el',
          docstring : '  ""',
          prototype : '(defun ecb-buffertab-setup-header()',
          parameter : '',
          lispcode : '(defun ecb-buffertab-setup-header()<br>  (interactive)<br><br>  (with-no-warnings<br>    (let ((ecb-prefix <apo>   ECB: <apo> ))<br>      (with-current-buffer (get-buffer ecb-speedbar-buffer-name)<br>	;;FIXME: figure out what modeline tab to use<br>	(setq header-line-format (concat ecb-prefix <apo>/ <apo> (buffer-name)<apo> <apo>))<br><br>	(add-text-properties 0 (length ecb-prefix)<br>			     (list <tick>face <tick>ecb-buffertab-primary-face)<br>			     header-line-format)<br><br>	(add-text-properties (1+ (length ecb-prefix)) (length header-line-format)<br>			     (list <tick>face <tick>ecb-buffertab-secondary-face<br>				   <tick>mouse-face <tick>ecb-buffertab-secondary-mouse-face<br>				   <tick>local-map <tick>ecb-buffertab-map)'
        },
        {
          function : 'ecb-byte-compile',
          filename : 'ecb/ecb.el',
          docstring : '  "Byte-compiles the ECB package.<br>This is done for all lisp-files of ECB if FORCE-ALL is not nil or for each<br>lisp-file FILE.el which is either newer than FILE.elc or if FILE.elc doesn"t<br>exist."',
          prototype : '(defun ecb-byte-compile (&optional force-all)',
          parameter : '&optional force-all',
          lispcode : '(defun ecb-byte-compile (&optional force-all)<br>  (interactive <apo>P<apo>)<br>  (ecb-check-requirements)<br>  (let ((files (ecb-directory-files (ecb-file-name-directory (locate-library <apo>ecb<apo>))<br>                                    t)))<br>    (save-excursion<br>      (dolist (file files)<br>	(if (save-match-data<br>              (and (string-match <apo>\\(silentcomp\\|tree-buffer\\|ecb.*\\)\\.el$<apo> file)<br>                   (not (string-match <apo>ecb-autoloads<apo> file))))<br>            (ecb-compile-file-if-necessary file force-all))))))'
        },
        {
          function : 'ecb-call-tag-visit-function',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Call FCN with TAG as argument and check if the resulting point is between<br>the tag-boundaries of TAG. If yes, then go to this point if no point stays at<br>the location before calling FCN."',
          prototype : '(defun ecb-call-tag-visit-function (tag fcn)',
          parameter : 'tag fcn',
          lispcode : '(defun ecb-call-tag-visit-function (tag fcn)<br>  (when (fboundp fcn)<br>    (let* ((start (ecb--semantic-tag-start tag))<br>           (end (ecb--semantic-tag-end tag))<br>           (result-point (save-excursion<br>                           (funcall fcn tag))))<br>      (if (and (>= result-point start)<br>               (<= result-point end))<br>          (goto-char result-point)<br>        (ecb-warning <apo>The tag-visit-function <backtick>%s<tick> moves point outside of tag - ignored!<apo><br>                     fcn)))))'
        },
        {
          function : 'ecb-canonical-ecb-windows-list',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return a list of all visible ECB-windows.<br><br>Such a window must be dedicated to its ecb-buffer and defined for<br>the related buffer with `defecb-window-dedicator-to-ecb-buffer". The list<br>starts from the left-most top-most window in the order<br>`other-window" would walk through these windows."',
          prototype : '(defun ecb-canonical-ecb-windows-list (&optional winlist)',
          parameter : '&optional winlist',
          lispcode : '(defun ecb-canonical-ecb-windows-list (&optional winlist)<br>  (let ((windows-list (or winlist (ecb-canonical-windows-list)))<br>        (registered-ecb-buffers (ecb-dedicated-special-buffers))<br>        )<br>    (delq nil (mapcar (function (lambda (elem)<br>                                  (if (and (not (memq elem<br>                                                      ecb-layout-temporary-dedicated-windows))<br>                                           (window-dedicated-p elem)<br>                                           (memq (window-buffer elem) registered-ecb-buffers)<br>                                           )<br>                                      elem)))<br>                      windows-list))))'
        },
        {
          function : 'ecb-canonical-edit-windows-list',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return a list of all current edit-windows (starting from the left-most<br>top-most window) in the order `other-window" would walk through these windows.<br>These are all windows in the `ecb-frame" which are not identical to the<br>compile-window and not identical to one of the visible ECB-windows and which<br>are not dedicated."',
          prototype : '(defun ecb-canonical-edit-windows-list (&optional winlist)',
          parameter : '&optional winlist',
          lispcode : '(defun ecb-canonical-edit-windows-list (&optional winlist)<br>  (let ((comp-win-state (ecb-compile-window-state))<br>        (windows-list (or winlist (ecb-canonical-windows-list))))<br>    (delq nil (mapcar (function (lambda (elem)<br>                                  (if (and (or (member elem<br>                                                       ecb-layout-temporary-dedicated-windows)<br>                                               (not (window-dedicated-p elem)))<br>                                           (or (not (equal comp-win-state <tick>visible))<br>                                               (not (equal elem ecb-compile-window))))<br>                                      elem)))<br>                      windows-list))))'
        },
        {
          function : 'ecb-canonical-residual-windows-list',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return a list of all current residual windows (starting from the left-most<br>top-most window) in the order `other-window" would walk through these windows.<br>These are all windows in the `ecb-frame" which are not identical to the<br>compile-window and not identical to one of the visible ECB-windows.<br><br>Note the difference to `ecb-canonical-edit-windows-list": That function checks<br>additionaly if a window is not dedicated."',
          prototype : '(defun ecb-canonical-residual-windows-list (&optional winlist)',
          parameter : '&optional winlist',
          lispcode : '(defun ecb-canonical-residual-windows-list (&optional winlist)<br>  (let ((comp-win-state (ecb-compile-window-state))<br>        (windows-list (or winlist (ecb-canonical-windows-list)))<br>        (registered-ecb-buffers (ecb-dedicated-special-buffers)))<br>    (delq nil (mapcar (function (lambda (elem)<br>                                  (if (and (not (memq (window-buffer elem) registered-ecb-buffers))<br>                                           (or (not (eq comp-win-state <tick>visible))<br>                                               (not (eq elem ecb-compile-window))))<br>                                      elem)))<br>                      windows-list))))<br><br>'
        },
        {
          function : 'ecb-canonical-windows-list',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return a list of all current visible windows in the `ecb-frame" (starting<br>from the left-most top-most window) in the order `next-window" would walk<br>through these windows."',
          prototype : '(defun ecb-canonical-windows-list ()',
          parameter : '',
          lispcode : '(defun ecb-canonical-windows-list ()<br>  (window-list ecb-frame 0 (frame-first-window ecb-frame)))'
        },
        {
          function : 'ecb-cedet-missing-libs',
          filename : 'ecb/ecb-cedet-wrapper.el',
          docstring : '  "Return a list of names of missing cedet-libs.<br>If no cedet libs are missing nil is returned."',
          prototype : '(defun ecb-cedet-missing-libs ()',
          parameter : '',
          lispcode : '(defun ecb-cedet-missing-libs ()<br>  (let ((missing-libs-list nil)<br>        (lib nil))<br>    (dolist (l-elem ecb-cedet-lib-registry)<br>      (setq lib (symbol-name (if ecb-cedet-old-sourcetree-structure-detected-p<br>                                 (car l-elem)<br>                               (cdr l-elem))))<br>      (when (not (locate-library lib))<br>        (push lib missing-libs-list)))<br>    missing-libs-list))'
        },
        {
          function : 'ecb-cedet-require',
          filename : 'ecb/ecb-cedet-wrapper.el',
          docstring : '  "Loads a cedet-library CVS-LIB into Emacs.<br>OLD-STYLE-LIB is the symbol-name of the cedet-library as in the cvs-version of<br>cedet in feb 2010 (ie. there is a lib semantic-ctxt instead of semantic/ctxt).<br>All cedet libaryies needed by ECB must be loaded with this function! Do not<br>use `require" for looading a cedet-library into Emacs!"',
          prototype : '(defun ecb-cedet-require (old-style-lib)',
          parameter : 'old-style-lib',
          lispcode : '(defun ecb-cedet-require (old-style-lib)<br>  (require (if ecb-cedet-old-sourcetree-structure-detected-p<br>               old-style-lib<br>             (cdr (assoc old-style-lib ecb-cedet-lib-registry)))))'
        },
        {
          function : 'ecb-change-layout',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Change to one of current available layouts.<br>For this TAB-completion is offered. If optional argument PRESELECT-TYPE is not<br>nil then you can preselect a layout-type (TAB-completion is offered too) and<br>then will be asked only for layouts of that preselected type.<br><br>Note: Do not use this function from within elisp-programs; use<br>`ecb-layout-switch"!"',
          prototype : '(defun ecb-change-layout (&optional preselect-type)',
          parameter : '&optional preselect-type',
          lispcode : '(defun ecb-change-layout (&optional preselect-type)<br>  (interactive <apo>P<apo>)<br>  (when (and ecb-minor-mode<br>             (equal (selected-frame) ecb-frame))<br>    (let ((type (if preselect-type<br>                    (intern (ecb-query-string<br>                             <apo>Insert a layout type:<apo><br>                             (mapcar (function (lambda (elem)<br>                                                 (symbol-name elem)))<br>                                     ecb-layout-types))))))<br>      (ecb-layout-switch (ecb-choose-layout-name<br>                          (ecb-available-layouts-of-type type) t)))))'
        },
        {
          function : 'ecb-check-cedet-load',
          filename : 'ecb/ecb-cedet-wrapper.el',
          docstring : '  "Checks if cedet is correctly loaded if semantic 2.X is used and if the same<br>semantic-version has been used for byte-compiling ECB and loading into Emacs.<br>If ECB detects a problem it is reported and then an error is thrown."',
          prototype : '(defun ecb-check-cedet-load ()',
          parameter : '',
          lispcode : '(defun ecb-check-cedet-load ()<br>  (when (boundp <tick>cedet-version)<br>    (let ((err-msg<br>           (cond ;; cedet was not compiled into ECB<br>            ((null ecb-compiled-in-cedet-version)<br>             (concat (format <apo>Currently CEDET %s is loaded but ECB has been byte-compiled without\n<apo><br>                             cedet-version)<br>                     <apo>any CEDET. Please either use ECB un-byte-compiled \(remove all *.elc\n<apo><br>                     <apo>files from the ECB-directory) or byte-compile ECB correctly with CEDET!\n<apo><br>                     <apo>In the later case it is recommended to start ECB first-time not byte-compiled\n<apo><br>                     <apo>and then call the command <backtick>ecb-byte-compile<tick>. This ensures you byte-compile ECB\n<apo><br>                     <apo>with the same CEDET-library-version as you load into Emacs.\n<apo><br>                     <apo>If you use the Makefile check the variable CEDET before compiling!\n<apo><br>                     ))<br>            ;; Different cedet-version used for byte-compiling ECB and<br>            ;; loading into Emacs.<br>            ((not (string= cedet-version ecb-compiled-in-cedet-version))<br>             (concat <apo>ECB has been byte-compiled with another cedet-version than currently\n<apo><br>                     <apo>loaded into Emacs:\n<apo><br>                     (format <apo>  + CECET used for byte-compiling ECB: %s\n<apo><br>                             ecb-compiled-in-cedet-version)<br>                     (format <apo>  + CEDET currently loaded into Emacs: %s\n<apo><br>                             cedet-version)<br>                     <apo>Please ensure that ECB is byte-compiled with the same cedet-version as you\n<apo><br>                     <apo>you load into your Emacs.\n\n<apo><br>                     <apo>In general it is recommended to start ECB first-time not byte-compiled\n<apo><br>                     <apo>and then call the command <backtick>ecb-byte-compile<tick>. This ensures you byte-compile ECB\n<apo><br>                     <apo>with the same CEDET-library-version as you load into Emacs.\n<apo><br>                     <apo>If you use the Makefile check the variable CEDET before compiling!\n<apo>))<br>            (t <apo><apo>))))<br>      (unless (= 0 (length err-msg))<br>        (with-output-to-temp-buffer <apo>*ECB cedet-load problems*<apo><br>          (princ <apo>Currently ECB can not be activated cause of the following reason:\n\n<apo>)<br>          (princ err-msg)<br>          (princ <apo>\n\nPlease fix the reported problem and restart Emacs\n<apo>))'
        },
        {
          function : 'ecb-check-directory-for-caching',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return not nil if DIR matches not any regexp of the option<br>`ecb-cache-directory-contents-not" but matches at least one regexp in<br>`ecb-cache-directory-contents" and NUMBER-OF-CONTENTS is greater then the<br>related threshold."',
          prototype : '(defun ecb-check-directory-for-caching (dir number-of-contents)',
          parameter : 'dir number-of-contents',
          lispcode : '(defun ecb-check-directory-for-caching (dir number-of-contents)<br>  (and (not (catch <tick>exit<br>              (dolist (elem ecb-cache-directory-contents-not)<br>                (let ((case-fold-search t))<br>                  (save-match-data<br>                    (if (string-match (car elem) dir)<br>                        (throw <tick>exit (car elem))))<br>                  nil))))<br>       (catch <tick>exit<br>         (dolist (elem ecb-cache-directory-contents)<br>           (let ((case-fold-search t))<br>             (save-match-data<br>               (if (and (string-match (car elem) dir)<br>                        (> number-of-contents (cdr elem)))<br>                   (throw <tick>exit (car elem))))<br>             nil)))))<br>'
        },
        {
          function : 'ecb-check-directory-for-cvsignore-exclude',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return not nil if DIR matches a regexp in `ecb-sources-exclude-cvsignore"."',
          prototype : '(defun ecb-check-directory-for-cvsignore-exclude (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-check-directory-for-cvsignore-exclude (dir)<br>  (ecb-match-regexp-list dir ecb-sources-exclude-cvsignore))'
        },
        {
          function : 'ecb-check-directory-for-source-regexps',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return the related source-exclude-include-regexps of<br>`ecb-source-file-regexps" if DIR matches any directory-regexp in<br>`ecb-source-file-regexps"."',
          prototype : '(defun ecb-check-directory-for-source-regexps (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-check-directory-for-source-regexps (dir)<br>  (ecb-match-regexp-list dir ecb-source-file-regexps <tick>car <tick>cdr))<br>'
        },
        {
          function : 'ecb-check-emptyness-of-dir',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Checks if DIR is an empty directory. If empty return not nil otherwise nil."',
          prototype : '(defun ecb-check-emptyness-of-dir (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-check-emptyness-of-dir (dir)<br>  (let ((cache-value (ecb-directory-empty-cache-get dir))<br>        (show-sources (ecb-show-sources-in-directories-buffer-p)))<br>    (if (and cache-value<br>             (equal (cdr cache-value) show-sources))<br>        (car cache-value)<br>      (ecb-directory-empty-cache-remove dir)<br>      (let ((entries (and (ecb-file-accessible-directory-p dir)<br>                          (ecb-directory-files dir nil nil t)))<br>            (just-files-means-empty (not show-sources))<br>            (full-file-name nil)<br>            (empty-p nil))<br>        (setq empty-p<br>              (catch <tick>found<br>                (dolist (e entries)<br>                  (when (not (member e <tick>(<apo>.<apo> <apo>..<apo> <apo>CVS<apo>)))<br>                    (setq full-file-name (ecb-fix-filename dir e))<br>                    (if (ecb-file-directory-p full-file-name)<br>                        (throw <tick>found <tick>nil)<br>                      (if (not just-files-means-empty)<br>                          (throw <tick>found <tick>nil)))))<br>                t))<br>        ;; now we add this value to the cache<br>        (ecb-directory-empty-cache-add (ecb-fix-filename dir)<br>                                       (cons empty-p show-sources))<br>        empty-p))))'
        },
        {
          function : 'ecb-check-for-same-window-buffer',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return not nil if BUFFER-OR-NAME is contained or matches<br>`same-window-buffer-names" or `same-window-regexps"."',
          prototype : '(defun ecb-check-for-same-window-buffer (buffer-or-name)',
          parameter : 'buffer-or-name',
          lispcode : '(defun ecb-check-for-same-window-buffer (buffer-or-name)<br>  (let ((result<br>          (catch <tick>done<br>            (let ((buf-name (ecb-buffer-name buffer-or-name)))<br>              (when buf-name<br>                (if (or (member buf-name same-window-buffer-names)<br>                        (assoc buf-name same-window-buffer-names))<br>                    (throw <tick>done t))<br>                (let ((tem same-window-regexps))<br>                  (while tem<br>                    (let ((car (car tem)))<br>                      (if (or<br>                           (and (stringp car)<br>                                (save-match-data (string-match car buf-name)))<br>                           (and (consp car) (stringp (car car))<br>                                (save-match-data (string-match (car car) buf-name))))<br>                          (throw <tick>done t)))<br>                    (setq tem (cdr tem)))))))))<br>     (ecb-layout-debug-error <apo>ecb-check-for-same-window-buffer for %s: %s<apo><br>                             buffer-or-name result)<br>     result))<br>'
        },
        {
          function : 'ecb-check-for-special-buffer',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return  not nil if and only if `display-buffer-alist" is not nil and<br>BUFFER-OR-NAME is contained or matches `display-buffer-alist" or<br>`display-buffer-alist"."',
          prototype : '(defun ecb-check-for-special-buffer (buffer-or-name)',
          parameter : 'buffer-or-name',
          lispcode : '(defun ecb-check-for-special-buffer (buffer-or-name)<br>  (let ((result<br>         (if (ecb-ignore-special-display)<br>             nil<br>           (catch <tick>done<br>             (let ((buf-name (ecb-buffer-name buffer-or-name)))<br>               (when (and buf-name display-buffer-alist)<br>                 (if (member buf-name<br>                             display-buffer-alist)<br>                     (throw <tick>done t))<br><br>                 (let ((tem (assoc buf-name<br>                                   display-buffer-alist)))<br>                   (if tem<br>                       (throw <tick>done t)))<br><br>                 (let ((tem display-buffer-alist))<br>                   (while tem<br>                     (let ((car (car tem)))<br>                       (if (and (stringp car)<br>                                (save-match-data (string-match car buf-name)))<br>                           (throw <tick>done t))<br>                       (if (and (consp car)<br>                                (stringp (car car))<br>                                (save-match-data (string-match (car car) buf-name)))<br>                           (throw <tick>done t)))<br>                     (setq tem (cdr tem))))))))))<br>    (ecb-layout-debug-error <apo>ecb-check-for-special-buffer for %s: %s<apo><br>                            buffer-or-name result)<br>    result))'
        },
        {
          function : 'ecb-check-not-compatible-options',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Check for all ECB-options if their current value is compatible to the<br>defined type. If not store it in `ecb-not-compatible-options"."',
          prototype : '(defun ecb-check-not-compatible-options ()',
          parameter : '',
          lispcode : '(defun ecb-check-not-compatible-options ()<br>  (setq ecb-not-compatible-options nil)<br><br>  ;; get all options of ECB<br>  (ecb-get-all-ecb-options)<br><br>  ;; check if all current values of ECB options match their types. Add not<br>  ;; matching options to <backtick>ecb-not-compatible-options<tick>.<br>  (dolist (option ecb-all-options)<br>    (require <tick>cus-edit)<br>    (unless (ecb-option-compatible-p option)<br>      (setq ecb-not-compatible-options'
        },
        {
          function : 'ecb-check-requirements',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Ensure that if all requirements of ECB are fulfilled.<br><br>Currently this is a check if the right `cedet-version is loaded."',
          prototype : '(defun ecb-check-requirements ()',
          parameter : '',
          lispcode : '(defun ecb-check-requirements ()<br><br>  (when ecb-cedet-missing-libraries<br>    (ecb-error <apo>ECB is missing the libs %s of CEDET - check the CEDET-installation/setup!<apo><br>               ecb-cedet-missing-libraries))<br><br>  (when (and (or (not (boundp <tick>ecb-version-check)) ecb-version-check)<br>             (not ecb-all-requirements-available))<br>    (let ((cedet-required-version-str-min (ecb-package-version-list2str<br>                                           ecb-cedet-required-version-min))<br>          (version-error nil))<br>      ;; check if cedet-version is correct<br>      ;; And no longer check against a Maximum version<br>      (when (or (not (boundp <tick>cedet-version))<br>                (ecb-package-version-list<<br>                 (ecb-package-version-str2list emacs-version)<br>                 ecb-cedet-required-version-min))<br>        (setq version-error (concat <apo>cedet [<apo><br>                                    cedet-required-version-str-min<br>                                    <apo>]<apo>)))<br>      (if (null version-error)<br>          ;; this is the only place where this variable is set<br>          (setq ecb-all-requirements-available t)<br>        (ecb-error <apo>ECB can only be used with %s! Please install it and restart Emacs!<apo><br>                   version-error))))'
        },
        {
          function : 'ecb-check-semantic-load',
          filename : 'ecb/ecb-cedet-wrapper.el',
          docstring : '  "Checks if cedet is correctly loaded if semantic 2.X is used and if the same<br>semantic-version has been used for byte-compiling ECB and loading into Emacs.<br>If ECB detects a problem it is reported and then an error is thrown."',
          prototype : '(defun ecb-check-semantic-load ()',
          parameter : '',
          lispcode : '(defun ecb-check-semantic-load ()<br>  (when (boundp <tick>semantic-version)<br>    (let ((err-msg<br>           (cond ;; Different semantic-version used for byte-compiling ECB and<br>            ;; loading into Emacs.<br>            ((not (string= semantic-version ecb-compiled-in-semantic-version))<br>             (concat <apo>ECB has been byte-compiled with another semantic-version than currently\n<apo><br>                     <apo>loaded into Emacs:\n<apo><br>                     (format <apo>  + Semantic used for byte-compiling ECB: %s\n<apo><br>                             ecb-compiled-in-semantic-version)<br>                     (format <apo>  + Semantic currently loaded into Emacs: %s\n<apo><br>                             semantic-version)<br>                     <apo>Please ensure that ECB is byte-compiled with the same semantic-version as you\n<apo><br>                     <apo>you load into your Emacs. Check if you have byte-compiled ECB with the cedet-\n<apo><br>                     <apo>suite but loaded old semantic 1.X into Emacs or vice versa.\n\n<apo><br>                     <apo>In general it is recommended to start ECB first-time not byte-compiled\n<apo><br>                     <apo>and then call the command <backtick>ecb-byte-compile<tick>. This ensures you byte-compile ECB\n<apo><br>                     <apo>with the same library-versions \(semantic etc.) as you load into Emacs.\n<apo><br>                     <apo>If you use the Makefile check the variables CEDET before compiling!\n<apo><br>                     ))<br>            (t <apo><apo>))))<br>      (unless (= 0 (length err-msg))<br>        (with-output-to-temp-buffer <apo>*ECB semantic-load problems*<apo><br>          (princ <apo>Currently ECB can not be activated cause of the following reason:\n\n<apo>)<br>          (princ err-msg)<br>          (princ <apo>\n\nPlease fix the reported problem and restart Emacs\n<apo>))'
        },
        {
          function : 'ecb-children-tags',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Return a list of children-tags of PARENT-TAG. If a child is not a<br>semantic-tag (but a plain string) then it will be converted to a positionless<br>tag of class "variable."',
          prototype : '(defun ecb-children-tags (parent-tag)',
          parameter : 'parent-tag',
          lispcode : '(defun ecb-children-tags (parent-tag)<br>  (mapcar (function (lambda (c)<br>                      (cl-typecase c<br>                        (ecb--semantic-tag<br>                         c)<br>                        (string<br>                         (ecb--semantic-tag-new-variable c nil nil nil))<br>                        (otherwise<br>                         (ecb-error <apo>Tag with name %s contains invalid childrens<apo><br>                                    (ecb--semantic-tag-name parent-tag))))))<br>          (ecb--semantic-tag-children-compatibility<br>           parent-tag ecb-show-only-positioned-tags)))<br>'
        },
        {
          function : 'ecb-choose-layout-name',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Calls `completing-read" for LAYOUT-LIST which is a list of layout-names.<br>For REQUIRE-MATCH see documentation of `completing-read". For a null input the<br>first element of LAYOUT-LIST is returned."',
          prototype : '(defun ecb-choose-layout-name (layout-list require-match)',
          parameter : 'layout-list require-match',
          lispcode : '(defun ecb-choose-layout-name (layout-list require-match)<br>  (let ((result (completing-read <apo>Insert a layout name: <apo><br>                                 (mapcar (function (lambda (x) (list x t)))<br>                                         layout-list)<br>                                 nil require-match)))<br>    (if (= (length result) 0)<br>        (car layout-list)<br>      result)))'
        },
        {
          function : 'ecb-clean-up-after-activation-failure',
          filename : 'ecb/ecb.el',
          docstring : '  "Complete cleanup of all ECB-setups and report an error with message MSG."',
          prototype : '(defun ecb-clean-up-after-activation-failure (msg err)',
          parameter : 'msg err',
          lispcode : '(defun ecb-clean-up-after-activation-failure (msg err)<br>  (let ((ecb-minor-mode t))<br>    (ecb-deactivate-internal t))<br>  (setq ecb-minor-mode nil)<br>  (force-mode-line-update t)<br>  (error <apo>ECB %s: %s (error-type: %S, error-data: %S)<apo> ecb-version msg<br>         (car err) (cdr err)))'
        },
        {
          function : 'ecb-clear-tag-tree-cache',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Clears either the whole tag-tree-cache (SOURCE-NAME is nil) or<br>removes only the tag-tree for SOURCE-NAME from the cache."',
          prototype : '(defun ecb-clear-tag-tree-cache (&optional source-name)',
          parameter : '&optional source-name',
          lispcode : '(defun ecb-clear-tag-tree-cache (&optional source-name)<br>  (if (not source-name)<br>      (setq ecb-tag-tree-cache nil)<br>    (setq ecb-tag-tree-cache<br>          (delq (assoc source-name ecb-tag-tree-cache) ecb-tag-tree-cache))))'
        },
        {
          function : 'ecb-combine-ecb-button/edit-win-nr',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Depending on ECB-BUTTON and EDIT-WINDOW-NR return one value:<br>- nil if ECB-BUTTON is 1.<br>- t if ECB-BUTTON is 2 and the edit-area of ECB is splitted.<br>- EDIT-WINDOW-NR if ECB-BUTTON is 3."',
          prototype : '(defun ecb-combine-ecb-button/edit-win-nr (ecb-button edit-window-nr)',
          parameter : 'ecb-button edit-window-nr',
          lispcode : '(defun ecb-combine-ecb-button/edit-win-nr (ecb-button edit-window-nr)<br>  (cl-case ecb-button<br>    (1 nil)<br>    (2 (ecb-edit-window-splitted))<br>    (3 edit-window-nr)))'
        },
        {
          function : 'ecb-common-after-tree-buffer-create-actions',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Things which should be performed after creating a tree-buffer.<br>The tree-buffer is the current buffer."',
          prototype : '(defun ecb-common-after-tree-buffer-create-actions ()',
          parameter : '',
          lispcode : '(defun ecb-common-after-tree-buffer-create-actions ()<br>  (local-set-key (kbd <apo>C-t<apo>) <tick>ecb-toggle-do-not-leave-window-after-select)<br>  (local-set-key [mode-line mouse-2] <tick>ecb-toggle-maximize-ecb-window-with-mouse))<br><br>'
        },
        {
          function : 'ecb-common-tree-buffer-modeline-menu-creator',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Return a menu for the modeline of all ECB-tree-buffers."',
          prototype : '(defun ecb-common-tree-buffer-modeline-menu-creator (buf-name)',
          parameter : 'buf-name',
          lispcode : '(defun ecb-common-tree-buffer-modeline-menu-creator (buf-name)<br>  <tick>((delete-other-windows <apo>Maximize Window Above<apo>)<br>    (ecb-redraw-layout-preserving-compwin-state <apo>Display All ECB-windows<apo>)))'
        },
        {
          function : 'ecb-compare-methods-buffer-node-data',
          filename : 'ecb/ecb-method-browser.el',
          parameter : 'l r',
          lispcode : '(defun ecb-compare-methods-buffer-node-data (l r)<br>  (cond ((or (stringp l) (stringp r))<br>         (equal l r))<br>        ((or (equal <tick>ecb-bucket-node (car l))<br>             (equal <tick>ecb-bucket-node (car r)))<br>         (equal l r))<br>        (t ;; tags<br>         (condition-case nil<br>             (ecb--semantic-equivalent-tag-p l r)<br>           (error (eq l r))))))'
        },
        {
          function : 'ecb-compilation-buffer-list-init',
          filename : 'ecb/ecb-compilation.el',
          docstring : '  "Initialize the compilation buffer list cache."',
          prototype : '(defun ecb-compilation-buffer-list-init ()',
          parameter : '',
          lispcode : '(defun ecb-compilation-buffer-list-init ()<br>  (setq ecb-compilation-update-menu-p nil)<br>  (setq ecb-compilation-buffer-list-cache nil)<br>  (ecb-compilation-buffer-list-changed-p))'
        },
        {
          function : 'ecb-compilation-buffer-names',
          filename : 'ecb/ecb-compilation.el',
          docstring : '  "Return the set of buffer names which should be displayed in the<br>compile-window of ECB. This is a list combined of<br>`ecb-compilation-buffer-names" and `ecb-compilation-buffer-names-internal"."',
          prototype : '(defun ecb-compilation-buffer-names ()',
          parameter : '',
          lispcode : '(defun ecb-compilation-buffer-names ()<br>  (append ecb-compilation-buffer-names<br>          ecb-compilation-buffer-names-internal))'
        },
        {
          function : 'ecb-compilation-get-buffers',
          filename : 'ecb/ecb-compilation.el',
          docstring : '  "Get all known compilation buffer names.  See `ecb-compilation-buffer-p"."',
          prototype : '(defun ecb-compilation-get-buffers()',
          parameter : '',
          lispcode : '(defun ecb-compilation-get-buffers()<br><br>  (let((buffer-names <tick>())<br>       (buffer-list (buffer-list ecb-frame))<br>       (index 0))<br><br>    (setq buffer-list (sort buffer-list (lambda(first second)<br>                                          (ecb-string< (buffer-name first)<br>                                                       (buffer-name second)))))<br>    (dolist(buffer buffer-list)<br>      (when (ecb-compilation-buffer-p buffer)<br>        (setq buffer-names<br>              (append buffer-names<br>                      (list (cons (buffer-name buffer) index))))<br>        (setq index (1+ index))))<br><br>    buffer-names))<br><br><br>(defun ecb-compilation-buffer-p (buffer-or-name)<br>  <apo>Test if the given buffer BUFFER-OR-NAME should be treated as a compilation<br>buffer. Note that in this case we define \<apo>compilation buffer\<apo> as a buffer<br>that should ideally be displayed in the compile-window of ECB \(see<br><backtick>ecb-compile-window-height<tick>). This means that in some situations this might<br>not be the result of a real <backtick>compile-internal<tick>. A good example would be the<br>*Help* buffer.<br><br>BUFFER-OR-NAME can be the name of a living\(!) buffer or a buffer-object.<br><br>This function returns the buffer-object of BUFFER-OR-NAME - i.e.<br>BUFFER-OR-NAME will be treated as compilation-buffer - if:<br><br>- The name of the buffer is contained in the list returned by the function<br>  <backtick>ecb-compilation-buffer-names<tick> or<br>- the <backtick>major-mode<tick> of the buffer is contained in the list returned by the<br>  function <backtick>ecb-compilation-major-modes<tick> or<br>- if <backtick>compilation-buffer-p<tick> returns true or<br>- one of the predicates returned by <backtick>ecb-compilation-predicates<tick> returns not<br>  nil for the buffer.<br><br>Otherwise nil is returned.<br><br>Summary for ECB-end-users: A buffer will be treated as compilation-buffer if<br>either<br>- <backtick>compilation-buffer-p<tick> returns not nil, i.e. if a real compilation-buffer or<br>- if at least one of the options <backtick>ecb-compilation-buffer-names<tick>,<br>  <backtick>ecb-compilation-major-modes<tick> or <backtick>ecb-compilation-predicates<tick> define the<br>  buffer as compilation-buffer.<apo><br>  ;;determine the best valid for the buffer.<br>  (let ((buffer (ecb-buffer-obj buffer-or-name))<br>        (ecb-comp-predicates (ecb-compilation-predicates)))<br>    (when buffer<br>      ;;test if this is a valid buffer by name.<br>      (if (ecb-compilation-registered-buffer-p (buffer-name buffer))<br>        buffer<br>        ;;else test if this is a valid buffer by mode<br>        (if (with-current-buffer buffer<br>              (member major-mode (ecb-compilation-major-modes)))<br>          buffer<br>          ;;else test if this is a regular compilation buffer<br>          (if (compilation-buffer-p buffer)<br>            buffer<br>            ;; we do not use run-hook-with-args-until-success because we have<br>            ;; to check if the functions are bound!!'
        },
        {
          function : 'ecb-compilation-major-modes',
          filename : 'ecb/ecb-compilation.el',
          docstring : '  "Return all major-mode symbols which should be displayed in the<br>compile-window. This is a list combined of `ecb-compilation-major-modes" and<br>`ecb-compilation-major-modes-internal"."',
          prototype : '(defun ecb-compilation-major-modes ()',
          parameter : '',
          lispcode : '(defun ecb-compilation-major-modes ()<br>  (append ecb-compilation-major-modes<br>          ecb-compilation-major-modes-internal))<br>'
        },
        {
          function : 'ecb-compilation-predicates',
          filename : 'ecb/ecb-compilation.el',
          docstring : '  "Return all predicates which should be used to test if a buffer should be<br>displayed in the compile-window. This is a list combined of<br>`ecb-compilation-predicates" and `ecb-compilation-predicates-internal"."',
          prototype : '(defun ecb-compilation-predicates ()',
          parameter : '',
          lispcode : '(defun ecb-compilation-predicates ()<br>  (append ecb-compilation-predicates<br>          ecb-compilation-predicates-internal))<br><br>'
        },
        {
          function : 'ecb-compilation-registered-buffer-p',
          filename : 'ecb/ecb-compilation.el',
          docstring : '  "Check if name belongs to the set of buffers returned by<br>`ecb-compilation-buffer-names". If yes returns NAME."',
          prototype : '(defun ecb-compilation-registered-buffer-p (name)',
          parameter : 'name',
          lispcode : '(defun ecb-compilation-registered-buffer-p (name)<br>  (catch <tick>exit<br>    (dolist (b (ecb-compilation-buffer-names))<br>      (if (null (cdr b))<br>          (if (ecb-string= name (car b))<br>              (throw <tick>exit name))<br>        (save-match-data<br>          (if (string-match (car b) name)<br>              (throw <tick>exit name))))<br>      nil)))'
        },
        {
          function : 'ecb-compilation-update-menu',
          filename : 'ecb/ecb-compilation.el',
          docstring : '  "Create and install a menu that allows the user to navigate buffers that are<br>valid ECB compilation buffers. This is only done if<br>`ecb-compilation-update-menu-p" is not nil; see<br>`ecb-compilation-buffer-list-changed-p". For more information about<br>compilation buffers see `ecb-compilation-buffer-p"."',
          prototype : '(defun ecb-compilation-update-menu ()',
          parameter : '',
          lispcode : '(defun ecb-compilation-update-menu ()<br><br>  ;; it calls switch-to-buffer-other-window, this is ok for all situations<br>  ;; because if there is no compile-window then it uses another edit-window<br>  ;; otherwise it uses the compile-window.<br><br>  (when ecb-compilation-update-menu-p<br>    (let ((submenu nil)<br>          (buffers (ecb-compilation-get-buffers)))<br>      (condition-case nil<br>        (progn<br>          (setq ecb-compilation-update-menu-p nil)<br>          (dolist ( buffer buffers )<br>            (setq submenu<br>              (append submenu<br>                (list (vector (car buffer)<br>                      <backtick>(funcall <tick>switch-to-buffer-other-window ,(car buffer))<br>                      :active t)))))<br><br>          (easy-menu-change (list ecb-menu-name)<br>                            <apo>Compilation Buffers<apo><br>                            submenu<br>                            <apo>Navigate<apo>)'
        },
        {
          function : 'ecb-compile-file-if-necessary',
          filename : 'ecb/ecb.el',
          docstring : '  "Compile the ECB-file FILE if necessary. This is done if FORCE is not nil or<br>FILE.el is newer than FILE.elc or if FILE.elc doesn"t exist."',
          prototype : '(defun ecb-compile-file-if-necessary (file &optional force)',
          parameter : 'file &optional force',
          lispcode : '(defun ecb-compile-file-if-necessary (file &optional force)<br>  (let ((elc-file (concat (ecb-file-name-sans-extension file) <apo>.elc<apo>)))<br>    (if (or force<br>	    (not (ecb-file-exists-p elc-file))<br>	    (file-newer-than-file-p file elc-file))<br>        (byte-compile-file file))))'
        },
        {
          function : 'ecb-compile-window-live-p',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return not nil when a compile-window is live and visible.<br>If optional arg DISPLAY-MSG is not nil then an informational message for the<br>user is displayed in the echo-area if no compile-window is visible."',
          prototype : '(defun ecb-compile-window-live-p (&optional display-msg)',
          parameter : '&optional display-msg',
          lispcode : '(defun ecb-compile-window-live-p (&optional display-msg)<br>  (if (and ecb-compile-window-height<br>           ecb-compile-window<br>           (window-live-p ecb-compile-window))<br>      t<br>    (if display-msg<br>        (message <apo>No compile-window visible in current ECB-layout!<apo>))<br>    nil))'
        },
        {
          function : 'ecb-compile-window-state',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Returns the state of the compile-window:<br>- "no: No persistent compile-window, i.e. `ecb-compile-window-height" is nil.<br>- "visible: The compile-window is visible.<br>- "hidden: A persistent compile-window is set but it is currently hidden."',
          prototype : '(defun ecb-compile-window-state ()',
          parameter : '',
          lispcode : '(defun ecb-compile-window-state ()<br>  (if (null ecb-compile-window-height)<br>      <tick>no<br>    (if (ecb-compile-window-live-p)<br>        <tick>visible<br>      <tick>hidden)))'
        },
        {
          function : 'ecb-concatenate',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Concatenate, into a sequence of type TYPE, the argument SEQUENCES.<br>TYPE can be "string, "vector or "list."',
          prototype : '(defun ecb-concatenate (type &rest seqs)',
          parameter : 'type &rest seqs',
          lispcode : '(defun ecb-concatenate (type &rest seqs)<br>  (cl-case type<br>    (vector (apply <tick>vconcat seqs))<br>    (string (apply <tick>concat seqs))<br>    (list (apply <tick>append (append seqs <tick>(nil))))<br>    (otherwise (ecb-error <apo>Not a sequence type name: %s<apo> type))))'
        },
        {
          function : 'ecb-confirm',
          filename : 'ecb/ecb-util.el',
          parameter : 'text',
          lispcode : '(defun ecb-confirm (text)<br>  (yes-or-no-p text))'
        },
        {
          function : 'ecb-copy-list',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return a copy of a LIST, which may be a dotted list.<br>The elements of the list are not copied, just the list structure itself."',
          prototype : '(defun ecb-copy-list (list)',
          parameter : 'list',
          lispcode : '(defun ecb-copy-list (list)<br>  (if (fboundp <tick>copy-sequence)<br>      (copy-sequence list)<br>    (if (consp list)<br>        (let ((res nil))<br>          (while (consp list) (push (pop list) res))<br>          (prog1 (nreverse res) (setcdr res list)))<br>      (car list))))<br>'
        },
        {
          function : 'ecb-create-directory',
          filename : 'ecb/ecb-file-browser.el',
          parameter : 'parent-node',
          lispcode : '(defun ecb-create-directory (parent-node)<br>  (make-directory (concat (tree-node->data parent-node) <apo>/<apo><br>                          (read-from-minibuffer <apo>Directory name: <apo>)))<br>  (ecb-update-directory-node parent-node)<br>  (tree-buffer-update))<br>'
        },
        {
          function : 'ecb-create-layout-add-to-buf-types',
          filename : 'ecb/ecb-create-layout.el',
          parameter : 'type',
          lispcode : '(defun ecb-create-layout-add-to-buf-types (type)<br>  (when (and (stringp type)<br>             (member type ecb-create-layout-all-buf-types))<br>    (add-to-list <tick>ecb-create-layout-buf-types type)<br>    (setq ecb-create-layout-buf-types<br>          (sort ecb-create-layout-buf-types <tick>ecb-string<))))'
        },
        {
          function : 'ecb-create-layout-buffer-factor',
          filename : 'ecb/ecb-create-layout.el',
          parameter : '',
          lispcode : '(defun ecb-create-layout-buffer-factor ()<br>  (get-text-property (point-min) <tick>ecb-create-layout-factor))'
        },
        {
          function : 'ecb-create-layout-buffer-type',
          filename : 'ecb/ecb-create-layout.el',
          parameter : '',
          lispcode : '(defun ecb-create-layout-buffer-type ()<br>  (get-text-property (point-min) <tick>ecb-create-layout-type))'
        },
        {
          function : 'ecb-create-layout-cancel',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Cancel layout-creation without saving the layout."',
          prototype : '(defun ecb-create-layout-cancel (&rest ignore)',
          parameter : '&rest ignore',
          lispcode : '(defun ecb-create-layout-cancel (&rest ignore)<br>  (interactive)<br>  (when (ecb-create-layout-frame-ok)<br>    (ecb-create-layout-clear-all (called-interactively-p <tick>interactive))<br>    (message <apo>ECB Layout Creation canceled - the layout is not saved!<apo>)<br>    (and (called-interactively-p <tick>interactive) (ecb-activate))))'
        },
        {
          function : 'ecb-create-layout-clear-all',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Resets all stuff to state before `ecb-create-new-layout" was called. If<br>DELETE-FRAME is not nil then the new created frame will be deleted and the<br>`ecb-create-layout-old-frame" will be selected."',
          prototype : '(defun ecb-create-layout-clear-all (&optional delete-frame)',
          parameter : '&optional delete-frame',
          lispcode : '(defun ecb-create-layout-clear-all (&optional delete-frame)<br>  ;; disabling the advice<br>  (ad-disable-advice <tick>delete-frame <tick>before <tick>ecb-create-layout)<br>  (ad-activate <tick>delete-frame)<br>  ;; killing all white-space-filled layout-buffers<br>  (save-match-data<br>    (dolist (b (buffer-list ecb-create-layout-frame))<br>      (if (string-match <apo>^ \\*ECB-LC-<apo> (buffer-name b))<br>          (kill-buffer b))))<br>  ;; restore the global-map<br>  (if (keymapp ecb-create-layout-old-global-map)<br>      (use-global-map ecb-create-layout-old-global-map))<br>  ;; restore the minor-mode-maps<br>  (if ecb-create-layout-old-minor-mode-map-alist<br>      (setq minor-mode-map-alist<br>            ecb-create-layout-old-minor-mode-map-alist))<br>  ;; restore horiz. scrolling<br>  (setq auto-hscroll-mode ecb-create-layout-old-hscroll)<br><br>  ;; before and after making frame stuff<br>  (setq before-make-frame-hook ecb-create-layout-old-before-frame-h)<br>  (setq after-make-frame-functions ecb-create-layout-old-after-frame-h)<br><br>  ;; restore old debug-on-error<br>  (setq debug-on-error ecb-create-layout-old-debug-on-error)<br>  ;; delete the layout-frame and select the ecb-create-layout-old-frame<br>  (when delete-frame<br>    (when (and ecb-create-layout-old-frame'
        },
        {
          function : 'ecb-create-layout-debug',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Debugging command for the ECB-developers."',
          prototype : '(defun ecb-create-layout-debug ()',
          parameter : '',
          lispcode : '(defun ecb-create-layout-debug ()<br>  (interactive)<br>  (message <apo>Layout-Debug: Type: %s, Factor: %s<apo><br>           (ecb-create-layout-buffer-type)<br>           (ecb-create-layout-buffer-factor)))'
        },
        {
          function : 'ecb-create-layout-delete-window',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Delete current window."',
          prototype : '(defun ecb-create-layout-delete-window ()',
          parameter : '',
          lispcode : '(defun ecb-create-layout-delete-window ()<br>  (interactive)<br>  (when (ecb-create-layout-frame-ok)<br>    (unless (or (equal (selected-window) ecb-create-layout-edit-window)<br>                (= (length (window-list nil 0))<br>                   (if (equal ecb-create-layout-type <tick>left-right) 3 2)))<br>      (if (and (member ecb-create-layout-type <tick>(right left-right))<br>               (equal (previous-window (selected-window) 0)<br>                      ecb-create-layout-edit-window)<br>               (> (nth 0 (ecb-window-edges (next-window))) (nth 0 (ecb-window-edges)))<br>               (= (nth 3 (ecb-window-edges ecb-create-layout-edit-window))<br>                  (nth 3 (ecb-window-edges))))<br>          ;; In exactly this window context we can not delete the current<br>          ;; window because otherwise the edit-window would enlarge and the<br>          ;; wrong window would be deleted!<br>          (ecb-error <apo>This window can not be deleted! Delete another one.<apo>)<br>        ;; add the buffer type of the deleted window to the available-list<br>        (ecb-create-layout-add-to-buf-types (ecb-create-layout-buffer-type))<br>        (kill-buffer (current-buffer))<br>        (delete-window)<br>        (ecb-create-layout-gen-lisp <tick>(delete-window))<br>        (if (equal (selected-window) ecb-create-layout-edit-window)'
        },
        {
          function : 'ecb-create-layout-forward-char',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Move one character forward."',
          prototype : '(defun ecb-create-layout-forward-char ()',
          parameter : '',
          lispcode : '(defun ecb-create-layout-forward-char ()<br>  (interactive)<br>  (when (ecb-create-layout-frame-ok)<br>    (unless (> (- (point) (ecb-line-beginning-pos)) (- (window-width) 2))<br>      (call-interactively <tick>forward-char))))'
        },
        {
          function : 'ecb-create-layout-frame-ok',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Return not nil if current frame is the `ecb-create-layout-frame""',
          prototype : '(defun ecb-create-layout-frame-ok ()',
          parameter : '',
          lispcode : '(defun ecb-create-layout-frame-ok ()<br>  (and ecb-create-layout-frame<br>       (frame-live-p ecb-create-layout-frame)<br>       (equal (selected-frame) ecb-create-layout-frame)))'
        },
        {
          function : 'ecb-create-layout-gen-lisp',
          filename : 'ecb/ecb-create-layout.el',
          parameter : 'lisp-statement',
          lispcode : '(defun ecb-create-layout-gen-lisp (lisp-statement)<br>  (setq ecb-create-layout-generated-lisp<br>        (cons lisp-statement ecb-create-layout-generated-lisp)))'
        },
        {
          function : 'ecb-create-layout-gen-lisp-for-buffer-type',
          filename : 'ecb/ecb-create-layout.el',
          parameter : 'type',
          lispcode : '(defun ecb-create-layout-gen-lisp-for-buffer-type (type)<br>  (let ((func-sym (intern (format <apo>ecb-set-%s-buffer<apo> type))))<br>    (ecb-create-layout-gen-lisp<br>     <backtick>(if (fboundp (quote ,func-sym))<br>          (,func-sym)<br>        (ecb-set-default-ecb-buffer)))))<br>'
        },
        {
          function : 'ecb-create-layout-init-layout',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '                                          "Location of the the ECB-tree-windows:"',
          prototype : '(defun ecb-create-layout-init-layout (&optional new)  (delete-other-windows)  (ecb-create-layout-new-buffer)  (when new    (setq ecb-create-layout-type (intern (ecb-query-string',
          parameter : '&optional new',
          lispcode : '(defun ecb-create-layout-init-layout (&optional new)<br>  (delete-other-windows)<br>  (ecb-create-layout-new-buffer)<br>  (when new<br>    (setq ecb-create-layout-type (intern (ecb-query-string<br>                                          <tick>(<apo>left<apo> <apo>right<apo> <apo>top<apo> <apo>left-right<apo>)))))<br>  (cl-case ecb-create-layout-type<br>    (left<br>     (ecb-split-hor ecb-windows-width))<br>    (right<br>     (ecb-split-hor (- ecb-windows-width) t))<br>    (top<br>     (ecb-split-ver ecb-windows-height))<br>    (otherwise<br>     (ecb-split-hor (- (* 0.667 ecb-windows-width)) t)<br>     (ecb-split-hor (* 0.667 ecb-windows-width) nil t)))<br>  ;; we set the buffer in the big edit-window<br>  (ecb-create-layout-new-buffer t)<br>  ;; now we insert the help in the edit-window<br>  (let ((buffer-read-only nil))<br>    (insert (if (equal ecb-create-layout-type <tick>top)<br>                ecb-create-layout-help-text-top<br>              ecb-create-layout-help-text-left-right)))<br>  (setq ecb-create-layout-edit-window (selected-window))<br>  (ecb-mode-line-set (buffer-name (current-buffer))<br>                     (selected-frame) <apo>   ECB edit-window<apo> nil t)<br>  ;; The edit window must not be dedicated<br>  (set-window-dedicated-p (selected-window) nil)<br>  ;; we set the buffer for the (currently unsplitted) ECB-window<br>  (other-window 1)<br>  (ecb-create-layout-new-buffer)'
        },
        {
          function : 'ecb-create-layout-initilize',
          filename : 'ecb/ecb-create-layout.el',
          parameter : '',
          lispcode : '(defun ecb-create-layout-initilize ()<br>  (setq ecb-create-layout-buf-types<br>        (ecb-copy-list ecb-create-layout-all-buf-types))<br>  (setq ecb-create-layout-frame nil)<br>  (setq ecb-create-layout-edit-window nil)<br>  (setq ecb-create-layout-old-global-map nil)<br>  (setq ecb-create-layout-old-minor-mode-map-alist nil)<br>  (setq ecb-create-layout-old-hscroll nil)<br>  (setq ecb-create-layout-old-frame nil)<br>  (setq ecb-create-layout-old-after-frame-h nil)<br>  (setq ecb-create-layout-old-before-frame-h nil)<br>  (setq ecb-create-layout-generated-lisp nil)<br>  (setq ecb-create-layout-gen-counter 0))'
        },
        {
          function : 'ecb-create-layout-insert-file-header',
          filename : 'ecb/ecb-create-layout.el',
          parameter : '',
          lispcode : '(defun ecb-create-layout-insert-file-header ()<br>  (insert (format <apo>;;; %s --- user defined ECB-layouts<apo> ;;<br>                  (ecb-file-name-nondirectory ecb-create-layout-file)))<br>  (insert ecb-create-layout-file-header))'
        },
        {
          function : 'ecb-create-layout-make-frame',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Create a new frame for the layout creation process and return it."',
          prototype : '(defun ecb-create-layout-make-frame ()',
          parameter : '',
          lispcode : '(defun ecb-create-layout-make-frame ()<br>  (make-frame <backtick>((name . ,ecb-create-layout-frame-name)<br>                (minibuffer . t)<br>                (user-position . t)<br>                (width . ,ecb-create-layout-frame-width)<br>                (height . ,ecb-create-layout-frame-height)<br>                (vertical-scroll-bars . nil)<br>                (horizontal-scroll-bars . nil)<br>                (tool-bar-lines . 0)<br>                (menu-bar-lines . 0))))<br>'
        },
        {
          function : 'ecb-create-layout-mode',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Major mode for creating new ECB-layouts."',
          prototype : '(defun ecb-create-layout-mode ()',
          parameter : '',
          lispcode : '(defun ecb-create-layout-mode ()<br>  (setq major-mode <tick>ecb-create-layout-mode)<br>  (setq mode-name <apo>ECB Create-Layout<apo>)<br>  (use-local-map ecb-create-layout-mode-map)<br>  (make-local-variable <tick>buffer-read-only)<br>  (ecb-mode-line-set (buffer-name (current-buffer))<br>                     (selected-frame) <apo><apo> nil t)<br>  (setq buffer-read-only t))'
        },
        {
          function : 'ecb-create-layout-new-buffer',
          filename : 'ecb/ecb-create-layout.el',
          parameter : '&optional do-not-fill',
          lispcode : '(defun ecb-create-layout-new-buffer (&optional do-not-fill)<br>  (set-window-dedicated-p (selected-window) nil)<br>  (switch-to-buffer (generate-new-buffer ecb-create-layout-buf-prefix))<br>  (erase-buffer)<br>  (unless do-not-fill<br>    (dotimes (i (ecb-window-full-height))<br>      (insert<br>       (format <apo>%s\n<apo><br>               (make-string (- (window-width) 1) ?\ )))))<br>  (goto-char (point-min))<br>  (ecb-create-layout-mode)<br>  (set-window-dedicated-p (selected-window) t))'
        },
        {
          function : 'ecb-create-layout-next-window',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Go to the next window.<br>This command always goes to the next special ECB-window, i.e. it never selects<br>the edit-window."',
          prototype : '(defun ecb-create-layout-next-window ()',
          parameter : '',
          lispcode : '(defun ecb-create-layout-next-window ()<br>  (interactive)<br>  (when (ecb-create-layout-frame-ok)<br>    (let ((steps (if (equal (next-window) ecb-create-layout-edit-window) 2 1)))<br>      (other-window steps)<br>      (ecb-create-layout-gen-lisp <backtick>(dotimes (i ,steps)<br>                                     (other-window 1)<br>                                     (if (equal (selected-window)<br>                                                ecb-compile-window)<br>                                         (other-window 1)))))))'
        },
        {
          function : 'ecb-create-layout-previous-window',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Go to the previous window.<br>This command always goes to the ECB-window preceding current window, i.e. it<br>never selects the edit-window."',
          prototype : '(defun ecb-create-layout-previous-window ()',
          parameter : '',
          lispcode : '(defun ecb-create-layout-previous-window ()<br>  (interactive)<br>  (when (ecb-create-layout-frame-ok)<br>    (let ((steps (if (equal (previous-window (selected-window) 0)<br>                            ecb-create-layout-edit-window)<br>                     -2 -1)))<br>      (other-window steps)<br>      (ecb-create-layout-gen-lisp <backtick>(dotimes (i ,(abs steps))<br>                                     (other-window -1)<br>                                     (if (equal (selected-window)<br>                                                ecb-compile-window)<br>                                         (other-window -1)))))))'
        },
        {
          function : 'ecb-create-layout-ready-for-save-p',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Returns only not nil if all windows in current layout have a type."',
          prototype : '(defun ecb-create-layout-ready-for-save-p ()',
          parameter : '',
          lispcode : '(defun ecb-create-layout-ready-for-save-p ()<br>  (let ((save-p t))<br>    (save-excursion<br>      (dolist (win (window-list (selected-frame) 0))<br>        (unless (equal win ecb-create-layout-edit-window)<br>          (set-buffer (window-buffer win))<br>          (setq save-p (ecb-create-layout-buffer-type)))))<br>    save-p))<br>'
        },
        {
          function : 'ecb-create-layout-remove-from-buf-type',
          filename : 'ecb/ecb-create-layout.el',
          parameter : 'type',
          lispcode : '(defun ecb-create-layout-remove-from-buf-type (type)<br>  (when (stringp type)<br>    (setq ecb-create-layout-buf-types<br>          (sort (delete type ecb-create-layout-buf-types) <tick>ecb-string<))))'
        },
        {
          function : 'ecb-create-layout-save-and-quit',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Quit the ECB Layout creation and save the defined layout."',
          prototype : '(defun ecb-create-layout-save-and-quit (&rest ignore)',
          parameter : '&rest ignore',
          lispcode : '(defun ecb-create-layout-save-and-quit (&rest ignore)<br>  (interactive)<br>  (when (ecb-create-layout-frame-ok)<br>    (if (ecb-create-layout-ready-for-save-p)<br>        (let ((delete-frame (called-interactively-p <tick>interactive)))<br>          ;; if an error occurs during <backtick>ecb-create-layout-save-layout<tick> or the<br>          ;; user hits C-q we must clean the layout creation stuff!<br>          (unwind-protect<br>              (ecb-create-layout-save-layout)<br>            ;; clean the layout creation stuff<br>            (ecb-create-layout-clear-all delete-frame)<br>            (message <apo>ECB Layout Creation finished.<apo>)'
        },
        {
          function : 'ecb-create-layout-save-layout',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Saves current layout in `ecb-create-layout-file"."',
          prototype : '(defun ecb-create-layout-save-layout ()',
          parameter : '',
          lispcode : '(defun ecb-create-layout-save-layout ()<br>  ;; make edit-window the current selected window<br>  (ecb-create-layout-select-edit-window)<br>  ;; we need the reversed sequence of the generated code<br>  (setq ecb-create-layout-generated-lisp<br>        (nreverse ecb-create-layout-generated-lisp))<br>  ;; ensure we have load all layouts defined until now<br>  (ecb-load-layouts)<br>  ;; now we have the create-code in the right sequence so we can save the new<br>  ;; layout in the user-layout file<br>  (let ((layout-name <apo><apo>))<br>    ;; a repeat...until-loop<br>    (while (progn<br>             ;;the while body<br>             (setq layout-name<br>                   (ecb-choose-layout-name (ecb-available-layouts-of-type nil)<br>                                           nil))<br>             ;; the while condition<br>             (ecb-available-layouts-member-p layout-name)))<br>    (with-temp-file (expand-file-name ecb-create-layout-file)<br>      (erase-buffer)<br>      (if (file-readable-p (expand-file-name ecb-create-layout-file))<br>          (insert-file-contents (expand-file-name ecb-create-layout-file))<br>        (ecb-create-layout-insert-file-header))<br>      (goto-char (point-max))<br>      ;; insert header of the layout-define macro<br>      (ecb-create-layout-insert-line<br>       (format <apo>(ecb-layout-define \<apo>%s\<apo> %s nil<apo>'
        },
        {
          function : 'ecb-create-layout-select-edit-window',
          filename : 'ecb/ecb-create-layout.el',
          parameter : '',
          lispcode : '(defun ecb-create-layout-select-edit-window ()<br>  (let ((counter 0))<br>    (while (not (equal (selected-window) ecb-create-layout-edit-window))<br>      (other-window 1)<br>      (setq counter (1+ counter)))<br>    (ecb-create-layout-gen-lisp <backtick>(dotimes (i ,counter)<br>                                   (other-window 1)<br>                                   (if (equal (selected-window)<br>                                              ecb-compile-window)<br>                                       (other-window 1))))))'
        },
        {
          function : 'ecb-create-layout-set-buffer-factor',
          filename : 'ecb/ecb-create-layout.el',
          parameter : 'factor',
          lispcode : '(defun ecb-create-layout-set-buffer-factor (factor)<br>  (let ((buffer-read-only nil))<br>    (put-text-property (point-min) (1+ (point-min)) <tick>ecb-create-layout-factor<br>                       factor)))<br>'
        },
        {
          function : 'ecb-create-layout-set-buffer-to-type',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Give current ECB-buffer a type."',
          prototype : '(defun ecb-create-layout-set-buffer-to-type (&optional type)',
          parameter : '&optional type',
          lispcode : '(defun ecb-create-layout-set-buffer-to-type (&optional type)<br>  (interactive)<br>  (when (ecb-create-layout-frame-ok)<br>    ;; adding the old buffer type to the available-list<br>    (ecb-create-layout-add-to-buf-types (or type<br>                                            (ecb-create-layout-buffer-type)))<br>    (let ((new-type (or (and (stringp type) type)<br>                        (ecb-query-string <apo>Type of current ECB-tree-buffer:<apo><br>                                          ecb-create-layout-buf-types<br>                                          <apo>Insert the buffer type<apo>))))<br>      ;; removing the new buffer type from the available-list<br>      (ecb-create-layout-remove-from-buf-type new-type)<br>      (ecb-mode-line-set (buffer-name (current-buffer))<br>                         (selected-frame)<br>                         (concat <apo>ECB <apo> new-type) nil t)<br>      ;; setting the new buffer type in the buffer itself<br>      (ecb-create-layout-set-buffer-type new-type)<br>      (when (called-interactively-p <tick>interactive)'
        },
        {
          function : 'ecb-create-layout-set-buffer-type',
          filename : 'ecb/ecb-create-layout.el',
          parameter : 'type',
          lispcode : '(defun ecb-create-layout-set-buffer-type (type)<br>  (let ((buffer-read-only nil))<br>    (put-text-property (point-min) (1+ (point-min)) <tick>ecb-create-layout-type<br>                       type)))'
        },
        {
          function : 'ecb-create-layout-split',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Split current window."',
          prototype : '(defun ecb-create-layout-split ()',
          parameter : '',
          lispcode : '(defun ecb-create-layout-split ()<br>  (interactive)<br>  (when (ecb-create-layout-frame-ok)<br>    ;; splitting<br>    (let* ((old-buf-type (ecb-create-layout-buffer-type))<br>           (split-choices (if (equal ecb-create-layout-type <tick>top)<br>                              <tick>(<apo>horizontal<apo> <apo>vertical<apo>)<br>                            <tick>(<apo>vertical<apo> <apo>horizontal<apo>)))<br>           (split-type (ecb-query-string <apo>Split type:<apo> split-choices))<br>           (split-method<br>            (ecb-query-string <apo>Split method:<apo><br>                              <tick>(<apo>at-point<apo> <apo>half<apo>)<br>                              <apo>Insert a fraction between 0.1 and 0.9<apo>))<br>           (fraction (cond ((ecb-string= split-method <apo>at-point<apo>)<br>                            nil)<br>                           ((ecb-string= split-method <apo>half<apo>)<br>                            0.5)<br>                           ((floatp (string-to-number split-method))<br>                            (string-to-number split-method))<br>                           (t 0.5)))<br>           (real-split-factor<br>            (if (ecb-string= split-type <apo>horizontal<apo>)<br>                (ecb-create-layout-split-hor fraction)<br>              (ecb-create-layout-split-ver fraction))))<br>      ;; creating new fitting buffers<br>      (ecb-create-layout-new-buffer)<br>       (save-excursion<br>         (save-selected-window<br>           (select-window (next-window))<br>           (ecb-create-layout-new-buffer)))<br>      ;; asking for the buffer type<br>      (ecb-create-layout-set-buffer-factor real-split-factor)'
        },
        {
          function : 'ecb-create-layout-split-hor',
          filename : 'ecb/ecb-create-layout.el',
          parameter : '&optional fraction',
          lispcode : '(defun ecb-create-layout-split-hor (&optional fraction)<br>  (let ((factor (or fraction<br>                    (/ (float (- (point) (ecb-line-beginning-pos)))<br>                       (float (- (window-width) 3))))))<br>    (ecb-split-hor factor t)<br>    (ecb-create-layout-gen-lisp <backtick>(ecb-split-hor ,factor t))<br>    (beginning-of-line)<br>    factor))'
        },
        {
          function : 'ecb-create-layout-split-ver',
          filename : 'ecb/ecb-create-layout.el',
          parameter : '&optional fraction',
          lispcode : '(defun ecb-create-layout-split-ver (&optional fraction)<br>  (let ((factor (or fraction<br>                    (/ (float (count-lines (window-start) (point)))<br>                       (float (- (ecb-window-full-height) 2))))))<br>    (ecb-split-ver factor t)<br>    (ecb-create-layout-gen-lisp <backtick>(ecb-split-ver ,factor t))<br>    factor))'
        },
        {
          function : 'ecb-create-menu-user-ext-type',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Creates the :type-definition for the *-menu-user-extension options.<br>This allows nested submenus for the popup-menus of the tree-buffers up to a<br>maximum level of MAX-LEVEL. CURR-LEVEL must be 1 when used in a<br>defcustom-clause and has to be <= MAX-LEVEL."',
          prototype : '(defun ecb-create-menu-user-ext-type (curr-level max-level)',
          parameter : 'curr-level max-level',
          lispcode : '(defun ecb-create-menu-user-ext-type (curr-level max-level)<br>  (list <tick>repeat (delq nil<br>                      (list <tick>choice <tick>:tag <apo>Menu-entry<apo> <tick>:menu-tag <apo>Menu-entry<apo><br>                            <tick>:value <tick>(ignore <apo><apo>)<br>                            (list <tick>const <tick>:tag <apo>Separator<apo> <tick>:value <tick>(<apo>---<apo>))<br>                            (list <tick>list <tick>:tag <apo>Menu-command<apo><br>                                  (list <tick>function <tick>:tag <apo>Function<apo> <tick>:value <tick>ignore)<br>                                  (list <tick>string <tick>:tag <apo>Entry-name<apo>))<br>                            (if (= curr-level max-level)<br>                                nil<br>                              (list <tick>cons <tick>:tag <apo>Submenu<apo><br>                                    (list <tick>string <tick>:tag <apo>Submenu-title<apo>)<br>                                    (ecb-create-menu-user-ext-type (1+ curr-level)<br>                                                                   max-level)))))))<br>'
        },
        {
          function : 'ecb-create-new-layout',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Start interactively layout creating."',
          prototype : '(defun ecb-create-new-layout ()',
          parameter : '',
          lispcode : '(defun ecb-create-new-layout ()<br>  (interactive)<br><br>  (ecb-deactivate)<br>  (ecb-create-layout-initilize)<br><br>  ;; before- and after make frame stuff<br>  (setq ecb-create-layout-old-after-frame-h after-make-frame-functions)<br>  (setq after-make-frame-functions nil)<br>  (setq ecb-create-layout-old-before-frame-h before-make-frame-hook)<br>  (setq before-make-frame-hook nil)<br><br>  ;; saving old frame<br>  (setq ecb-create-layout-old-frame (selected-frame))<br><br>  ;; creating new frame<br>  (setq ecb-create-layout-frame (ecb-create-layout-make-frame))<br>  (raise-frame ecb-create-layout-frame)<br>  (select-frame ecb-create-layout-frame)<br>  (ad-enable-advice <tick>delete-frame <tick>before <tick>ecb-create-layout)<br>  (ad-enable-advice <tick>delete-frame <tick>after <tick>ecb-create-layout)<br>  (ad-activate <tick>delete-frame)<br><br>  ;; global map<br>  (setq ecb-create-layout-old-global-map (current-global-map))<br>  (use-global-map ecb-create-layout-mode-map)<br><br>  ;; minor-modes map<br>  (setq ecb-create-layout-old-minor-mode-map-alist minor-mode-map-alist)<br>  (setq minor-mode-map-alist nil)<br><br>  ;; horiz. scrolling<br>  (setq ecb-create-layout-old-hscroll auto-hscroll-mode)<br>  (setq auto-hscroll-mode nil)<br><br>  ;; debug on error<br>  (setq ecb-create-layout-old-debug-on-error debug-on-error)<br>  (setq debug-on-error nil)<br><br>  (ecb-create-layout-init-layout t))<br><br><br>(defun ecb-delete-new-layout ()<br>  <apo>Select a layout-name and delete this layout.<br>This means the layout-definition is removed from the file<br><backtick>ecb-create-layout-file<tick> and the layout-function and associated aliases are<br>unbound.<apo><br>  (interactive)<br>  ;; ensure we have load all layouts defined until now<br>  (ecb-load-layouts)<br>  (let ((new-layout-list<br>         (sort (ecb-set-difference (ecb-available-layouts-of-type nil)<br>                                   (mapcar (function (lambda (elem)<br>                                                       (car elem)))<br>                                           ecb-buildin-layouts)<br>                                   <tick>member)<br>               <tick>ecb-string<))<br>        (layout-name nil))<br>    (if (= (length new-layout-list) 0)<br>        (ecb-error <apo>There are no layouts to delete!<apo>)<br>      (setq layout-name (ecb-choose-layout-name new-layout-list t)))<br>    (with-temp-file (expand-file-name ecb-create-layout-file)<br>      (erase-buffer)<br>      (if (file-readable-p (expand-file-name ecb-create-layout-file))<br>          (insert-file-contents (expand-file-name ecb-create-layout-file))<br>        (ecb-error <apo>This layout is not defined in %s!<apo> ecb-create-layout-file))<br>      (goto-char (point-min))<br>      (if (re-search-forward (concat <apo>^(ecb-layout-define +<apo><br>                                     <apo>\<apo><apo> layout-name <apo>\<apo>.+$<apo>)<br>                             nil t)<br>          (progn'
        },
        {
          function : 'ecb-create-node',
          filename : 'ecb/ecb-method-browser.el',
          parameter : 'parent-node display name data type',
          lispcode : '(defun ecb-create-node (parent-node display name data type)<br>  (if (eq <tick>hidden display)<br>      nil<br>    (if (eq <tick>flattened display)<br>	parent-node<br>      (let ((node (tree-node-new name type data nil parent-node<br>				 (if ecb-truncate-long-names <tick>end))))<br>	(when (eq <tick>expanded display)<br>	  (setf (tree-node->expanded node) t))<br>        node))))<br>'
        },
        {
          function : 'ecb-create-non-semantic-tree',
          filename : 'ecb/ecb-speedbar.el',
          docstring : '  "Add all tags of TAG-LIST with side-effects as children to NODE. TAG-LIST is<br>a list generated by `ecb-get-tags-for-non-semantic-files". TAG-LIST is of the<br>form:<br>( ("name" . marker-or-number) <-- one tag at this level<br>  ("name" ("name" . mon) ("name" . mon) )  <-- one group of tags<br>  ("name" mon ("name" . mon) )             <-- group w/ a pos. and tags<br><br>Groups can contain tags which are groups again...therefore this function is<br>called recursive for the elements of a group.<br><br>Return NODE."',
          prototype : '(defun ecb-create-non-semantic-tree (node tag-list)',
          parameter : 'node tag-list',
          lispcode : '(defun ecb-create-non-semantic-tree (node tag-list)<br>  (let ((new-node nil)<br>        (new-tag nil))<br>    (dolist (tag tag-list)<br>      (cl-typecase tag<br>        (null nil) ;; this would be a separator<br>        (speedbar-generic-list-tag<br>         ;; the semantic tag for this tag<br>         (setq new-tag (ecb--semantic-tag (car tag)<br>                                          (intern (car tag))))<br>         (ecb--semantic--tag-set-overlay new-tag (make-vector 2 (cdr tag)))<br>         (ecb--semantic--tag-put-property new-tag <tick>ecb-speedbar-tag t)<br>         (ecb-apply-user-filter-to-tags (list new-tag))<br>         (when (not (ecb-tag-forbidden-display-p new-tag))<br>           (tree-node-new (ecb-speedbar-decorate-tag tag ecb-method-non-semantic-face)<br>                          0<br>                          new-tag<br>                          t<br>                          node)))<br>        (speedbar-generic-list-positioned-group<br>         ;; the semantic tag for this tag<br>         (setq new-tag (ecb--semantic-tag (car tag)<br>                                          (intern (car tag))))<br>         (ecb--semantic--tag-set-overlay new-tag<br>                                         (make-vector 2 (car (cdr tag))))<br>         (ecb--semantic--tag-put-property new-tag <tick>ecb-speedbar-tag t)<br>         (ecb-apply-user-filter-to-tags (list new-tag))<br>         (when (not (ecb-tag-forbidden-display-p new-tag))<br>           (ecb-create-non-semantic-tree<br>            (setq new-node<br>                  (tree-node-new (ecb-speedbar-decorate-tag tag ecb-method-non-semantic-face)<br>                                 0<br>                                 new-tag<br>                                 nil node))<br>            (cdr (cdr tag)))<br>           (setf (tree-node->expanded new-node)<br>                 (member major-mode<br>                         ecb-non-semantic-methods-initial-expand))))<br>        (speedbar-generic-list-group<br>         (ecb-create-non-semantic-tree<br>          (setq new-node<br>                (tree-node-new (ecb-speedbar-decorate-tag tag ecb-method-non-semantic-face)<br>                               1<br>                               nil nil node))<br>          (cdr tag))<br>         (setf (tree-node->expanded new-node)<br>               (member major-mode<br>                       ecb-non-semantic-methods-initial-expand)))<br>        (otherwise<br>         (ecb-error <apo>ecb-create-non-semantic-tree: malformed tag-list!<apo>)'
        },
        {
          function : 'ecb-current-buffer-archive-extract-p',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return not nil if current buffer was extracted of an archive which is in<br>`tar-mode" or `archive-mode". For this the current buffer has either to be in<br>minor-mode `tar-subfile-mode" or `archive-subfile-mode"."',
          prototype : '(defun ecb-current-buffer-archive-extract-p ()',
          parameter : '',
          lispcode : '(defun ecb-current-buffer-archive-extract-p ()<br>  (or (and (boundp <tick>tar-subfile-mode)<br>           tar-subfile-mode)<br>      (and (boundp <tick>archive-subfile-mode)<br>           archive-subfile-mode)))'
        },
        {
          function : 'ecb-current-window-configuration',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return the current ecb-window-configuration"',
          prototype : '(defun ecb-current-window-configuration ()',
          parameter : '',
          lispcode : '(defun ecb-current-window-configuration ()<br>  (progn<br>    (current-window-configuration)<br>    (ecb-window-config-cache-get-latest)))'
        },
        {
          function : 'ecb-custom-file',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Filename of that file which is used by Emacs to store the<br>customize-options. If no custom-file can be computed or if Emacs reports an<br>error (e.g. GNU Emacs complains when calling `custom-file" and Emacs has been<br>started with -q) nil is returned."',
          prototype : '(defun ecb-custom-file ()',
          parameter : '',
          lispcode : '(defun ecb-custom-file ()<br>  (require <tick>cus-edit)<br>  (ignore-errors (custom-file)))'
        },
        {
          function : 'ecb-custom-file-writeable-p',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Returns not nil if and only if the custom-file is writable for ECB, which<br>means it is neither a bytecompiled-file nor a read-only-file."',
          prototype : '(defun ecb-custom-file-writeable-p ()',
          parameter : '',
          lispcode : '(defun ecb-custom-file-writeable-p ()<br>  (let ((file (ecb-custom-file)))<br>    (and file<br>         (not (equal (file-name-extension file) <apo>elc<apo>))<br>         (file-writable-p file))))'
        },
        {
          function : 'ecb-customize',
          filename : 'ecb/ecb.el',
          docstring : '  "Open a customize-buffer for all customize-groups of ECB."',
          prototype : '(defun ecb-customize ()',
          parameter : '',
          lispcode : '(defun ecb-customize ()<br>  (interactive)<br>  (ecb-select-edit-window)<br>  (customize-group <apo>ecb<apo>))'
        },
        {
          function : 'ecb-customize-most-important',
          filename : 'ecb/ecb.el',
          docstring : '  "Open a customize-buffer for the most important options of ECB."',
          prototype : '(defun ecb-customize-most-important ()',
          parameter : '',
          lispcode : '(defun ecb-customize-most-important ()<br>  (interactive)<br>  (ecb-select-edit-window)<br>  (customize-group <apo>ecb-most-important<apo>))<br><br>'
        },
        {
          function : 'ecb-customize-save-variable',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'option value',
          lispcode : '(defun ecb-customize-save-variable (option value)<br>  ;; because the adviced version of <backtick>custom-save-all<tick> do only all the special<br>  ;; needed things if <backtick>ecb-minor-mode<tick> is on we must temporally set here this<br>  ;; variable to not nil because at that time this function is called this<br>  ;; variable is maybe still nil.'
        },
        {
          function : 'ecb-customize-set-variable',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'option value',
          lispcode : '(defun ecb-customize-set-variable (option value)<br>  (customize-set-variable option value))'
        },
        {
          function : 'ecb-cycle-maximized-ecb-buffers',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Cycles through all ecb-buffers by maximizing one at each step."',
          prototype : '(defun ecb-cycle-maximized-ecb-buffers ()',
          parameter : '',
          lispcode : '(defun ecb-cycle-maximized-ecb-buffers ()<br>  (interactive)<br>  (when (null ecb-cycle-ecb-buffer-state)<br>    ;; we have redrawn the complete layout and therefore the cycle-state<br>    ;; has been reset. If we start the cycling with an already maximized<br>    ;; ecb-window we have first redraw fully so we get a correct<br>    ;; initialization!<br>    (ecb-redraw-layout-full)<br>    (setq ecb-cycle-ecb-buffer-state<br>          (cons (mapcar (function (lambda (w)<br>                                    (buffer-name (window-buffer w))))<br>                        (ecb-canonical-ecb-windows-list))<br>                0)))<br>  ;; now we have a valid cycle-state so we can display the next ecb-buffer<br>  (ecb-maximize-ecb-buffer (nth (cdr ecb-cycle-ecb-buffer-state)<br>                                (car ecb-cycle-ecb-buffer-state))<br>                              t)<br>  ;; now we have to move forward the cycle-state'
        },
        {
          function : 'ecb-cycle-set-compilation-bufferindex',
          filename : 'ecb/ecb-cycle.el',
          docstring : '  "Set the buffer in the compilation window."',
          prototype : '(defun ecb-cycle-set-compilation-buffer(index compilation-buffers)',
          parameter : 'compilation-buffers',
          lispcode : '(defun ecb-cycle-set-compilation-buffer(index compilation-buffers)<br><br>  (let ((buffer-name (car (nth index compilation-buffers))))<br>    (switch-to-buffer buffer-name)))<br>'
        },
        {
          function : 'ecb-cycle-through-compilation-buffers&optional',
          filename : 'ecb/ecb-cycle.el',
          docstring : '  "Cycle through all compilation buffers currently open.<br>The choosen compilation buffer is displayed within the compilation window<br>`ecb-compile-window" (if this window doesn"t exist then an error is<br>displayed). If the currently opened buffer within the compilation window is<br>not a compilation buffer, we jump to the first compilation buffer. If not we<br>try to loop through all compilation buffers. If we hit the end we go back to<br>the beginning.<br><br>If CHOOSE-BUFFER is not nil then the user will be prompted for the<br>compilation-buffer to switch to.<br><br>Afterwards always the compile-window of ECB is selected."',
          prototype : '(defun ecb-cycle-through-compilation-buffers(&optional choose-buffer)',
          parameter : 'choose-buffer',
          lispcode : '(defun ecb-cycle-through-compilation-buffers(&optional choose-buffer)<br><br>  (interactive <apo>P<apo>)<br>  (if (not (numberp ecb-compile-window-height))<br>      (ecb-error <apo>This command needs a persistent compile window!<apo>)<br>    (if choose-buffer<br>        (switch-to-buffer (completing-read <apo>ECB compilation buffer: <apo><br>                                           (ecb-compilation-get-buffers)))<br>      <br>      (let* ((compilation-buffers (ecb-compilation-get-buffers))<br>             ;; This works even if ecb-compile-window is nil or not alive<br>             ;; (means temporally hidden) --> then current-buffer is the<br>             ;; buffer of the currently selected window!<br>             (current-buffer (or (and (ecb-compile-window-live-p)<br>                                      (window-buffer ecb-compile-window))<br>                                 (current-buffer)))<br>             (current-buffer-name (buffer-name current-buffer))<br>             (current nil)<br>             (index nil))<br>        (when (null compilation-buffers)<br>          (ecb-error <apo>No compilation buffers available.<apo>))<br>        <br>        (if (not (ecb-compilation-buffer-p current-buffer))<br>            ;;if the current buffer is not a compilation buffer, goto the first<br>            ;;compilation buffer.<br>            <br>            (ecb-cycle-set-compilation-buffer 0 compilation-buffers)<br>          <br>          ;;else... we need to determine what buffer to display.<br>          <br>          (setq current (assoc current-buffer-name compilation-buffers))<br>          <br>          (setq index (cdr current))'
        },
        {
          function : 'ecb-deactivate',
          filename : 'ecb/ecb.el',
          docstring : '  "Deactivates the ECB and kills all ECB buffers and windows."',
          prototype : '(defun ecb-deactivate ()',
          parameter : '',
          lispcode : '(defun ecb-deactivate ()<br>  (interactive)<br>  (ecb-minor-mode 0))'
        },
        {
          function : 'ecb-deactivate-ediff-compatibility',
          filename : 'ecb/ecb-compatibility.el',
          parameter : '',
          lispcode : '(defun ecb-deactivate-ediff-compatibility ()<br>  (if (get <tick>ediff-quit-hook <tick>ecb-ediff-quit-hook-value)<br>      (setq ediff-quit-hook (get <tick>ediff-quit-hook<br>                                 <tick>ecb-ediff-quit-hook-value))<br>    (remove-hook <tick>ediff-quit-hook <tick>ecb-ediff-quit-hook))<br>  (remove-hook <tick>ediff-before-setup-hook<br>               <tick>ecb-ediff-before-setup-hook))<br><br><br>;; view-stuff --------------------------------------------------------------------<br>'
        },
        {
          function : 'ecb-deactivate-internal',
          filename : 'ecb/ecb.el',
          docstring : '  "Deactivates the ECB and kills all ECB buffers and windows."',
          prototype : '(defun ecb-deactivate-internal (&optional run-no-hooks)',
          parameter : '&optional run-no-hooks',
          lispcode : '(defun ecb-deactivate-internal (&optional run-no-hooks)<br>  (unless (not ecb-minor-mode)<br>    (when (or run-no-hooks<br>              (run-hook-with-args-until-failure <tick>ecb-before-deactivate-hook))<br><br>      (setq ecb-last-window-config-before-deactivation<br>            (ecb-current-window-configuration))<br><br>      ;; deactivating the adviced functions<br>      (dolist (adviced-set-elem ecb-adviced-function-sets)<br>        ;; Note: as permanent defined advices-sets are not disabled here!<br>        (ecb-disable-advices (car adviced-set-elem)))<br><br>      (ecb-enable-temp-buffer-shrink-to-fit nil)<br><br>      ;; deactivate and reset the speedbar stuff<br>      (ignore-errors (ecb-speedbar-deactivate))<br><br>      ;; deactivates the eshell-integration; this disables also the<br>      ;; eshell-advices!<br>      (ecb-eshell-deactivate-integration)<br><br>      ;; remove the hooks<br>      (remove-hook (ecb--semantic-after-partial-cache-change-hook)<br>                   <tick>ecb-update-after-partial-reparse)<br>      (remove-hook (ecb--semantic-after-toplevel-cache-change-hook)<br>                   <tick>ecb-rebuild-methods-buffer-with-tagcache)<br>;;       (remove-hook (ecb--semantic--before-fetch-tags-hook)<br>;;                 <tick>ecb-prevent-from-parsing-if-exceeding-threshold)<br>      (ecb-stop-all-autocontrol/sync-functions)<br>      (remove-hook <tick>after-save-hook <tick>ecb-update-methods-after-saving)<br>      (remove-hook <tick>kill-buffer-hook <tick>ecb-kill-buffer-hook)<br><br>      (remove-hook <tick>find-file-hook <tick>ecb-find-file-hook)<br><br>      ;; ediff-stuff<br>      (ecb-deactivate-ediff-compatibility)<br><br>      ;; disabling the VC-support<br>      (ecb-vc-enable-internals -1)<br><br>      (remove-hook <tick>menu-bar-update-hook<br>                   <tick>ecb-compilation-update-menu)<br><br>      ;; run any personal hooks<br>      (unless run-no-hooks<br>        (run-hooks <tick>ecb-deactivate-hook))<br><br>      ;; clear the ecb-frame. Here we try to preserve the split-state after<br>      ;; deleting the ECB-screen-layout.<br>      (when (frame-live-p ecb-frame)<br>        (raise-frame ecb-frame)<br>        (select-frame ecb-frame)<br>        (condition-case oops<br>            (let* ((config (ecb-window-configuration-data))<br>                   (window-before-redraw (nth 0 config))<br>                   (pos-before-redraw (nth 1 config))<br>                   (edit-win-data-before-redraw (nth 2 config))<br>                   (edit-win-list-after-redraw nil))<br>              ;; first we make all windows of the ECB-frame not dedicated and<br>              ;; then we delete all ECB-windows<br>              (ecb-select-edit-window)<br>              (ecb-make-windows-not-dedicated ecb-frame)<br><br>              ;; deletion of all windows. (All other advices are already<br>              ;; disabled!)<br>              (ecb-with-original-permanent-layout-functions<br>               (delete-other-windows))<br><br>              ;; some paranoia....<br>              (set-window-dedicated-p (selected-window) nil)<br><br>              ;; now we restore the edit-windows as before the deactivation<br>              ;; (All other advices are already disabled!)<br>              (if (= (length edit-win-data-before-redraw)<br>                     (ecb-edit-area-creators-number-of-edit-windows))<br>                  (ecb-with-original-permanent-layout-functions<br>                   (ecb-restore-edit-area))<br>                (ecb-edit-area-creators-init))<br><br>              (setq edit-win-list-after-redraw (ecb-canonical-edit-windows-list))<br><br>              ;; a safety-check if we have now at least as many windows as<br>              ;; edit-windows before deactivation. If yes we restore all<br>              ;; window-data as before deactivation.<br>              (when (= (length edit-win-list-after-redraw)<br>                       (length edit-win-data-before-redraw))<br>                (dotimes (i (length edit-win-data-before-redraw))<br>                  (let ((win (nth i edit-win-list-after-redraw))<br>                        (data (nth i edit-win-data-before-redraw)))<br>                    (set-window-buffer win (nth 0 data))<br>                    (set-window-start win (nth 1 data))<br>                    (set-window-point win (nth 2 data))<br>                    (if (> (length edit-win-list-after-redraw) 1)<br>                        (ecb-set-window-size win (nth 3 data)))<br>                    )))<br><br>              ;; at the end we always stay in that window as before the<br>              ;; deactivation.<br>              (when (integerp window-before-redraw)<br>                (ecb-select-edit-window window-before-redraw))<br>              ;; if we were in an edit-window before deactivation let us go to<br>              ;; the old place<br>              (when pos-before-redraw<br>                (goto-char pos-before-redraw)))<br>          (error<br>           ;; in case of an error we make all windows not dedicated and delete<br>           ;; at least all other windows<br>           (ecb-warning <apo>ecb-deactivate-internal (error-type: %S, error-data: %S)<apo>'
        },
        {
          function : 'ecb-dedicated-special-buffers',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return a list of all registered ecb-buffers.<br><br>This are all buffers which are registrated via the macro<br>`defecb-window-dedicator-to-ecb-buffer" (these are mainly the<br>standard tree-buffers of ECB plus the integrated speedbar-buffer<br>and the symboldef-buffer, but in general it can be more if there<br>are additional buffers registrated, e.g. by other applications).<br>The value returned is independend from the currently *visible*<br>special ecb-buffers and therefore also from the current layout.<br>If the currently visible ECB-buffers are needed then use the<br>function `ecb-get-current-visible-ecb-buffers". "',
          prototype : '(defun ecb-dedicated-special-buffers ()',
          parameter : '',
          lispcode : '(defun ecb-dedicated-special-buffers ()<br>  (delq nil (mapcar (function (lambda (e)<br>                                (and (nth 3 e)<br>                                     (ecb-buffer-obj (nth 0 e)))))<br>                    ecb-ecb-buffer-registry)))'
        },
        {
          function : 'ecb-default-tag-filter-for-current-source',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Check if for the file of the current buffer a default-tag-filter should be<br>applied. If yes, then the filters-list of `ecb-default-tag-filter" is returned<br>otherwise nil."',
          prototype : '(defun ecb-default-tag-filter-for-current-source ()',
          parameter : '',
          lispcode : '(defun ecb-default-tag-filter-for-current-source ()<br>  (catch <tick>found<br>    (dolist (spec ecb-default-tag-filter)<br>      (let ((m-mode (caar spec))<br>            (regexp (cdar spec)))<br>        (if (and (equal major-mode m-mode)<br>                 (save-match-data<br>                   (string-match regexp (ecb-buffer-file-name (current-buffer)))))<br>            (throw <tick>found (cdr spec)))))<br>    nil))'
        },
        {
          function : 'ecb-delete-all-occurences-from-list',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Replace all occurences of ELEM from LIST. Comparison is done by `equal".<br>This is desctructive function. LIST is returned."',
          prototype : '(defun ecb-delete-all-occurences-from-list (list elem)',
          parameter : 'list elem',
          lispcode : '(defun ecb-delete-all-occurences-from-list (list elem)<br>  (delq <tick>ecb-util-remove-marker<br>        (progn<br>          (while (ecb-position elem list)<br>            (setq list (ecb-replace-first-occurence list elem<br>                                                    <tick>ecb-util-remove-marker)))<br>          list)))'
        },
        {
          function : 'ecb-delete-duplicates',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Deletes duplicate elements from CL-SEQ.<br>Comparison is done with `equal" unless CL-TEST-FCN is not nil: In<br>this case TEST-FCN will be used to compare CL-ITEM with the<br>elements of CL-SEQ. Specifically, if two elements from the<br>sequence match according to the test-function (s.a.) only the<br>rightmost one is retained. If CL-FROM-END is true, the leftmost<br>one is retained instead. If CL-START or CL-END is specified, only<br>elements within that subsequence are examined or removed. If<br>CL-COPY is nil then it destructively modifies CL-SEQ otherwise a<br>copy of CL-SEQ with removed duplicates is returned."',
          prototype : '(defun ecb-delete-duplicates (cl-seq &optional                                     cl-test-fcn cl-start cl-end cl-from-end cl-copy)',
          parameter : 'cl-seq &optional cl-test-fcn cl-start cl-end cl-from-end cl-copy',
          lispcode : '(defun ecb-delete-duplicates (cl-seq &optional<br>                                     cl-test-fcn cl-start cl-end cl-from-end cl-copy)<br>  (if (listp cl-seq)<br>      (let ((cl-start (or cl-start 0)))<br>        (if cl-from-end<br>            (let ((cl-p (nthcdr cl-start cl-seq))<br>                  cl-i)<br>              (setq cl-end (- (or cl-end (length cl-seq)) cl-start))<br>              (while (> cl-end 1)<br>                (setq cl-i 0)<br>                (while (setq cl-i (ecb-position (car cl-p)<br>                                                (cdr cl-p)<br>                                                cl-test-fcn<br>                                                cl-i<br>                                                (1- cl-end)))<br>                  (if cl-copy (setq cl-seq (ecb-copy-list cl-seq)<br>                                    cl-p (nthcdr cl-start cl-seq) cl-copy nil))<br>                  (let ((cl-tail (nthcdr cl-i cl-p)))<br>                    (setcdr cl-tail (cdr (cdr cl-tail))))<br>                  (setq cl-end (1- cl-end)))<br>                (setq cl-p (cdr cl-p) cl-end (1- cl-end)<br>                      cl-start (1+ cl-start)))<br>              cl-seq)<br>          (setq cl-end (- (or cl-end (length cl-seq)) cl-start))<br>          (while (and (cdr cl-seq) (= cl-start 0) (> cl-end 1)<br>                      (ecb-position (car cl-seq)<br>                                    (cdr cl-seq)<br>                                    cl-test-fcn<br>                                    0<br>                                    (1- cl-end)))<br>            (setq cl-seq (cdr cl-seq) cl-end (1- cl-end)))<br>          (let ((cl-p (if (> cl-start 0) (nthcdr (1- cl-start) cl-seq)<br>                        (setq cl-end (1- cl-end) cl-start 1) cl-seq)))<br>            (while (and (cdr (cdr cl-p)) (> cl-end 1))<br>              (if (ecb-position (car (cdr cl-p))<br>                                (cdr (cdr cl-p))<br>                                cl-test-fcn<br>                                0<br>                                (1- cl-end))<br>                  (progn<br>                    (if cl-copy (setq cl-seq (ecb-copy-list cl-seq)<br>                                      cl-p (nthcdr (1- cl-start) cl-seq)<br>                                      cl-copy nil))<br>                    (setcdr cl-p (cdr (cdr cl-p))))<br>                (setq cl-p (cdr cl-p)))<br>              (setq cl-end (1- cl-end) cl-start (1+ cl-start)))<br>            cl-seq)))<br>    (let ((cl-res (ecb-delete-duplicates (append cl-seq nil)<br>                                         cl-test-fcn<br>                                         cl-start<br>                                         cl-end<br>                                         cl-from-end<br>                                         nil)))<br>      (if (stringp cl-seq) (concat cl-res) (vconcat cl-res)))))<br><br>;; (ecb-delete-duplicates (vector <tick>a <tick>b <tick>c <tick>d <tick>A <tick>a <tick>c <tick>e) nil nil nil t t)<br>'
        },
        {
          function : 'ecb-delete-ecb-windows',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Delete all ecb-windows of SIDE.<br>SIDE must be one of "left-side, "right-side or "top-side and must<br>not conflict with the current layout-type (e.g. left-side<br>conflicts with a top-layout) otherwise an error is reported.<br><br>If except-ecb-window-or-buffer is nil all ecb-windows on SIDE will be deleted.<br>This argument can be either an ecb-window, an ecb-buffer object or the<br>buffer-name of an ecb-buffer: In this case all ecb-windows except this window<br>will be deleted on SIDE or with other words: In this case this window will be<br>maximized.<br><br>If RESIDUAL-WINDOW is not nil it must be one of the windows<br>`ecb-canonical-residual-windows-list" would compute. If nil then<br>it will be computed."',
          prototype : '(defun ecb-delete-ecb-windows (side &optional residual-window except-ecb-window-or-buffer)',
          parameter : 'side &optional residual-window except-ecb-window-or-buffer',
          lispcode : '(defun ecb-delete-ecb-windows (side &optional residual-window except-ecb-window-or-buffer)<br>  (message <apo>Klausi - del ecb-windows: side: %s<apo> side)<br>  (let ((err-p (or (not (memq side <tick>(left-side right-side top-side)))<br>                   (cl-case (ecb-get-layout-type)<br>                     (left-right (not (memq side <tick>(left-side right-side))))<br>                     (right (not (eq side <tick>right-side)))<br>                     (left (not (eq side <tick>left-side)))<br>                     (top (not (eq side <tick>top-side)))))))<br>    (when err-p<br>      (error <apo>ECB %s: ecb-delete-ecb-window called with layout-type %s and SIDE: %s<apo><br>             ecb-version (ecb-get-layout-type) side)))<br>  (let* ((ecb-window-not-to-delete (and except-ecb-window-or-buffer<br>                                        (cl-typecase except-ecb-window-or-buffer<br>                                          (window except-ecb-window-or-buffer)<br>                                          (buffer (get-buffer-window<br>                                                   except-ecb-window-or-buffer ecb-frame))<br>                                          (string (get-buffer-window<br>                                                   (get-buffer except-ecb-window-or-buffer))))))<br>         (win-list-to-del (delq nil (mapcar (function<br>                                             (lambda (w)<br>                                               (when (eq (ecb-get-ecb-window-location<br>                                                          w residual-window)<br>                                                         side)<br>                                                 w)))<br>                                            (ecb-canonical-ecb-windows-list)))))<br>    (ecb-with-original-basic-functions<br>     (mapc (function (lambda (w)<br>                       (unless (eq ecb-window-not-to-delete w)<br>                         (ecb-layout-debug-error <apo>Deleting ecb-window: %s<apo> w)<br>                         (delete-window w))))<br>           win-list-to-del))<br>    ))'
        },
        {
          function : 'ecb-delete-file',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Delete FILE if it eexists."',
          prototype : '(defun ecb-delete-file (file)',
          parameter : 'file',
          lispcode : '(defun ecb-delete-file (file)<br>  (let ((exp-file (expand-file-name file)))<br>    (if (file-exists-p exp-file)<br>        (delete-file exp-file))))'
        },
        {
          function : 'ecb-delete-first-occurence-from-list',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Replace first occurence of ELEM from LIST. Comparison is done by `equal".<br>This is desctructive function. LIST is returned."',
          prototype : '(defun ecb-delete-first-occurence-from-list (list elem)',
          parameter : 'list elem',
          lispcode : '(defun ecb-delete-first-occurence-from-list (list elem)<br>  (delq <tick>ecb-util-remove-marker<br>        (ecb-replace-first-occurence list elem <tick>ecb-util-remove-marker)))'
        },
        {
          function : 'ecb-delete-s',
          filename : 'ecb/ecb-file-browser.el',
          parameter : 'child children sources',
          lispcode : '(defun ecb-delete-s (child children sources)<br>  (when children<br>    (if (eq child (car children))<br>	(cdr sources)<br>      (cons (car sources) (ecb-delete-s child (cdr children) (cdr sources))))))<br>'
        },
        {
          function : 'ecb-delete-window-ecb-windows-left',
          filename : 'ecb/ecb-layout.el',
          parameter : 'window edit-win-list',
          lispcode : '(defun ecb-delete-window-ecb-windows-left (window edit-win-list)<br>  (let ((ecb-win-width-before (window-width (frame-first-window ecb-frame)))<br>        (curr-edit-win-width (ecb-window-full-width window)))<br>    (delete-window window)<br>    (when (/= (window-width (frame-first-window ecb-frame))<br>              ecb-win-width-before)<br>      ;; We have to select here the <apo>next<apo> edit-window explicitly because if<br>      ;; WINDOW is not the selected-window <backtick>delete-window<tick> does not select the<br>      ;; next window!'
        },
        {
          function : 'ecb-delete-window-ecb-windows-right',
          filename : 'ecb/ecb-layout.el',
          parameter : 'window edit-win-list',
          lispcode : '(defun ecb-delete-window-ecb-windows-right (window edit-win-list)<br>  (delete-window window))<br>'
        },
        {
          function : 'ecb-delete-window-ecb-windows-top',
          filename : 'ecb/ecb-layout.el',
          parameter : 'window edit-win-list',
          lispcode : '(defun ecb-delete-window-ecb-windows-top (window edit-win-list)<br>  (let ((ecb-win-height-before (ecb-window-full-height (frame-first-window ecb-frame)))<br>        (curr-edit-win-height (ecb-window-full-height window)))<br>    (delete-window window)<br>    (when (/= (ecb-window-full-height (frame-first-window ecb-frame))<br>              ecb-win-height-before)<br>      (save-selected-window<br>        (select-window (ecb-next-listelem edit-win-list window))<br>        (enlarge-window curr-edit-win-height)))))<br>'
        },
        {
          function : 'ecb-dir-run-cvs-op',
          filename : 'ecb/ecb-file-browser.el',
          parameter : 'node op op-arg-list',
          lispcode : '(defun ecb-dir-run-cvs-op (node op op-arg-list)<br>  (let ((dir (tree-node->data node)))<br>    (funcall op dir op-arg-list)))<br>'
        },
        {
          function : 'ecb-dir/source/hist-menu-editwin-entries',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Generate popup-menu-entries for each edit-window if there are at least 2<br>edit-windows. Otherwise return nil."',
          prototype : '(defun ecb-dir/source/hist-menu-editwin-entries ()',
          parameter : '',
          lispcode : '(defun ecb-dir/source/hist-menu-editwin-entries ()<br>  (let ((edit-win-list (ecb-canonical-edit-windows-list))<br>        (result nil))<br>    (when (> (length edit-win-list) 1)<br>      (dotimes (i (min 8 (length edit-win-list)))<br>        (setq result<br>              (append result<br>                      (list (list (intern (format <apo>ecb-open-source-in-editwin%d<apo> (1+ i)))<br>                                  (format <apo>edit-window %d<apo> (1+ i)))))))<br>      (append (list (list <apo>---<apo>)) ;; we want a separator<br>              (list (append (list <apo>Open source-file in ...<apo>)<br>                            result))))))<br>'
        },
        {
          function : 'ecb-directories-menu-creator',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Creates the popup-menus for the directories-buffer."',
          prototype : '(defun ecb-directories-menu-creator (tree-buffer-name node)',
          parameter : 'tree-buffer-name node',
          lispcode : '(defun ecb-directories-menu-creator (tree-buffer-name node)<br>  (setq ecb-layout-prevent-handle-ecb-window-selection t)<br>  (let ((dyn-user-extension<br>         (and (functionp ecb-directories-menu-user-extension-function)<br>              (funcall ecb-directories-menu-user-extension-function<br>                       tree-buffer-name node)))<br>        (dyn-builtin-extension (ecb-dir/source/hist-menu-editwin-entries)))<br>    (list (cons ecb-directories-nodetype-directory<br>                (funcall (or ecb-directories-menu-sorter<br>                             <tick>identity)<br>                         (append dyn-user-extension<br>                                 ecb-directories-menu-user-extension<br>                                 ecb-directories-menu)))<br>          (cons ecb-directories-nodetype-sourcefile<br>                (funcall (or ecb-sources-menu-sorter<br>                             <tick>identity)<br>                         (append dyn-user-extension<br>                                 ecb-sources-menu-user-extension<br>                                 ecb-sources-menu<br>                                 dyn-builtin-extension)))<br>          (cons ecb-directories-nodetype-sourcepath<br>                (funcall (or ecb-directories-menu-sorter<br>                             <tick>identity)<br>                         (append dyn-user-extension<br>                                 ecb-directories-menu-user-extension<br>                                 ecb-source-path-menu))))))<br>'
        },
        {
          function : 'ecb-directory-empty-cache-add',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Add information if DIR is empty or not to the cache."',
          prototype : '(defun ecb-directory-empty-cache-add (dir cached-value)',
          parameter : 'dir cached-value',
          lispcode : '(defun ecb-directory-empty-cache-add (dir cached-value)<br>  (ecb-multicache-put-value <tick>ecb-filename-cache dir <tick>EMPTY-DIR-P<br>                             cached-value))'
        },
        {
          function : 'ecb-directory-empty-cache-clear',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Clear the whole EMPTY-DIR-P-cache."',
          prototype : '(defun ecb-directory-empty-cache-clear ()',
          parameter : '',
          lispcode : '(defun ecb-directory-empty-cache-clear ()<br>  (ecb-multicache-clear-subcache <tick>ecb-filename-cache <tick>EMPTY-DIR-P))'
        },
        {
          function : 'ecb-directory-empty-cache-dump',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Dump the whole EMPTY-DIR-P-cache. If NO-NIL-VALUE is not nil then these<br>cache-entries are not dumped. This command is not intended for end-users of<br>ECB."',
          prototype : '(defun ecb-directory-empty-cache-dump (&optional no-nil-value)',
          parameter : '&optional no-nil-value',
          lispcode : '(defun ecb-directory-empty-cache-dump (&optional no-nil-value)<br>  (interactive <apo>P<apo>)<br>  (ecb-multicache-print-subcache <tick>ecb-filename-cache<br>                                 <tick>EMPTY-DIR-P no-nil-value))<br><br>'
        },
        {
          function : 'ecb-directory-empty-cache-get',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "get information if DIR is empty or not from the cache."',
          prototype : '(defun ecb-directory-empty-cache-get (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-directory-empty-cache-get (dir)<br>  (ecb-multicache-get-value <tick>ecb-filename-cache dir <tick>EMPTY-DIR-P))'
        },
        {
          function : 'ecb-directory-empty-cache-remove',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Remove DIR from the EMPTY-DIR-P-cache."',
          prototype : '(defun ecb-directory-empty-cache-remove (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-directory-empty-cache-remove (dir)<br>  (ecb-multicache-clear-value <tick>ecb-filename-cache dir <tick>EMPTY-DIR-P))'
        },
        {
          function : 'ecb-directory-empty-cache-remove-all',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Remove DIR and all its suddirs from the EMPTY-DIR-P-cache."',
          prototype : '(defun ecb-directory-empty-cache-remove-all (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-directory-empty-cache-remove-all (dir)<br>  (ecb-directory-empty-cache-remove dir)<br>  ;; now we remove the subdirs<br>  (save-match-data<br>    (ecb-multicache-mapsubcache<br>     <tick>ecb-filename-cache <tick>EMPTY-DIR-P<br>     (function (lambda (key old-value)<br>                 (if (string-match (concat <apo>^<apo><br>                                           (regexp-quote dir)<br>                                           <apo>.+<apo>)<br>                                   key)<br>                     ;; the directory-key matches DIR so its a cache'
        },
        {
          function : 'ecb-directory-files',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Wrapper for directory-files that fixes the file name & catch file errors"',
          prototype : '(defun ecb-directory-files (dir &rest args)',
          parameter : 'dir &rest args',
          lispcode : '(defun ecb-directory-files (dir &rest args)<br>  (condition-case nil<br>      (apply <tick>directory-files dir args)<br>    (error nil)))'
        },
        {
          function : 'ecb-directory-update-speedbar',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Update the integrated speedbar if necessary."',
          prototype : '(defun ecb-directory-update-speedbar (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-directory-update-speedbar (dir)<br>  (and (ecb-speedbar-active-p)<br>       ;; depending on the value of <backtick>ecb-directory-update-speedbar<tick> we have to<br>       ;; check if it is senseful to update the speedbar.<br>       (or (equal ecb-directories-update-speedbar t)<br>           (and (equal ecb-directories-update-speedbar <tick>auto)<br>                (not (or (get-buffer-window ecb-sources-buffer-name ecb-frame)<br>                         (member ecb-layout-name<br>                                 ecb-show-sources-in-directories-buffer))))<br>           (and (not (equal ecb-directories-update-speedbar <tick>auto))<br>                (functionp ecb-directories-update-speedbar)'
        },
        {
          function : 'ecb-dired-directory-internal',
          filename : 'ecb/ecb-file-browser.el',
          parameter : 'node &optional other',
          lispcode : '(defun ecb-dired-directory-internal (node &optional other)<br>  (ecb-select-edit-window)<br>  (let* ((node-data-file (ecb-source-get-filename (tree-node->data node)))<br>         (dir (ecb-fix-filename<br>               (funcall (if (ecb-file-directory-p node-data-file)<br>                            <tick>identity<br>                          <tick>ecb-file-name-directory)<br>                        node-data-file))))<br>    (funcall (if other<br>                 <tick>dired-other-window<br>               <tick>dired)<br>             dir)))<br>'
        },
        {
          function : 'ecb-disable-advices',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Disable all advices of ADVICED-FUNCTION-SET-VAR, which must be defined by<br>`defecb-advice-set"<br><br>This function tests if ADVICED-FUNCTION-SET-VAR has been defined as permanent<br>by `defecb-advice-set".<br><br>Calling `ecb-disable-advices" for an advice set defined with<br>permanent t will take no effect unless the optional argument<br>FORCE-PERMANENT is set to not nil. If the advice set is defined as permanent<br>with a permanent-disable-function then this function is called with<br>ADVICED-FUNCTION-SET-VAR as argument; if this function returns not nil then<br>the adviced will be treated as permanent and will not being disabled.<br><br>If optional FORCE-PERMANENT is not nil then ADVICED-FUNCTION-SET-VAR will<br>be disabled regardless if permanent or not."',
          prototype : '(defun ecb-disable-advices (adviced-function-set-var &optional force-permanent)',
          parameter : 'adviced-function-set-var &optional force-permanent',
          lispcode : '(defun ecb-disable-advices (adviced-function-set-var &optional force-permanent)<br>  (if ecb-advices-debug-error<br>      (message <apo>ECB %s: debug disabling the advice-set: %s<apo><br>               ecb-version adviced-function-set-var))<br>  (if (not (assq adviced-function-set-var ecb-adviced-function-sets))<br>      (error <apo>The adviced function set %s is not defined by defecb-advice-set!<apo><br>             (symbol-name adviced-function-set-var)))<br>  (let ((permanent (if force-permanent<br>                       nil<br>                     (cdr (assq adviced-function-set-var<br>                                ecb-adviced-permanent-function-sets)))))<br>    (unless (or (eq permanent t)<br>                (and (functionp permanent)<br>                     (funcall permanent adviced-function-set-var)))<br>      (dolist (elem (symbol-value adviced-function-set-var))<br>        (ecb-enable-ecb-advice (car elem) (cdr elem) -1)))))'
        },
        {
          function : 'ecb-display-news-for-upgrade',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Display the most important NEWS after an ECB-upgrade.<br>If you call this function but no ECB-upgrade has been performed before<br>starting ECB then nothing is display unless FULL-NEWS is not nil.<br><br>If FULL-NEWS is not nil then the NEWS-file is displayed in another window."',
          prototype : '(defun ecb-display-news-for-upgrade (&optional full-news)',
          parameter : '&optional full-news',
          lispcode : '(defun ecb-display-news-for-upgrade (&optional full-news)<br>  (interactive <apo>P<apo>)<br>  (if full-news<br>      (find-file-other-window (concat ecb-ecb-dir <apo>NEWS<apo>))<br>    (if (and ecb-old-ecb-version<br>             (or (not (get <tick>ecb-display-news-for-upgrade<br>                           <tick>ecb-news-for-upgrade-displayed))<br>                 (called-interactively-p <tick>interactive)))<br>        (progn<br>          (with-output-to-temp-buffer <apo>*News for the new ECB-version*<apo><br>            (princ (format <apo>You have upgraded ECB from version %s to %s.\n\n<apo><br>                           ecb-old-ecb-version ecb-version))<br>            (princ <apo>Here are the most important NEWS:\n\n<apo>)<br>            (mapc (function (lambda (version)<br>                              (if (ecb-package-version-list<<br>                                   (ecb-package-version-str2list ecb-old-ecb-version)<br>                                   (ecb-package-version-str2list (car version)))<br>                                  (dolist (news (cdr version))<br>                                    (princ (concat <apo>* <apo> news <apo>\n<apo>))))))<br>                  ecb-upgrade-news)<br>            (princ <apo>\nFor more details see the attached NEWS-file.<apo>))<br>          ;; We want this being displayed only once<br>          (put <tick>ecb-display-news-for-upgrade <tick>ecb-news-for-upgrade-displayed t))<br>      (message <apo>There are no NEWS to display.<apo>))))'
        },
        {
          function : 'ecb-display-source',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Display SOURCE in the correct edit-window.<br>What the correct window is depends on the setting in<br>`ecb-mouse-click-destination" and the value of OTHER-EDIT-WINDOW<br>(for this see `ecb-combine-ecb-button/edit-win-nr").<br><br>SOURCE is either a string, then it is a filename or a cons, then the car is<br>the filename and the cdr is the buffer-name, whereas the latter one can be the<br>name of an indirect-buffer."',
          prototype : '(defun ecb-display-source (source other-edit-window)',
          parameter : 'source other-edit-window',
          lispcode : '(defun ecb-display-source (source other-edit-window)<br>  (select-window (ecb-get-edit-window other-edit-window))<br>  (ecb-nav-save-current)<br>  (switch-to-buffer (ecb-source-get-buffer source))<br>  (ecb-nav-add-item (ecb-nav-file-history-item-new)))'
        },
        {
          function : 'ecb-display-tag',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Display SOURCE and go to TAG.<br>SOURCE is a source in the sense of `ecb-source-make". TAG is either nil (then<br>just the SOURCE is displayed) or a semantic-tag. If it is a positioned tag<br>then this function goes to this TAG in SOURCE.<br>If optional arg WINDOW is nil then the current window is used otherwise the<br>window-object WINDOW contains.<br><br>If NO-TAG-VISIT-POST-ACTIONS is not nil then the functions of<br>`ecb-tag-visit-post-actions" are not performed. If<br>ADDITIONAL-POST-ACTION-LIST is a list of function-symbols then these functions<br>are performed after these ones of `ecb-tag-visit-post-actions". So if<br>NO-TAG-VISIT-POST-ACTIONS is not nil then only the functions of<br>ADDITIONAL-POST-ACTION-LIST are performed. If ADDITIONAL-POST-ACTION-LIST is<br>nil too then no post-actions are performed."',
          prototype : '(defun ecb-display-tag (source tag &optional window                               no-tag-visit-post-actions                               additional-post-action-list)',
          parameter : 'source tag &optional window no-tag-visit-post-actions additional-post-action-list',
          lispcode : '(defun ecb-display-tag (source tag &optional window<br>                               no-tag-visit-post-actions<br>                               additional-post-action-list)<br>  (unless window<br>    (setq window (selected-window)))<br>  (select-window window)<br>  (ecb-nav-save-current)<br>  ;; first display the right buffer<br>  (switch-to-buffer (ecb-source-get-buffer source))<br>  (if (null tag)<br>      ;; there is no tag to display - we are already fine<br>      (ecb-nav-add-item (ecb-nav-file-history-item-new))<br>    ;; in the following we display the TAG<br>    (when (ecb--semantic-tag-with-position-p tag)<br>      (ecb-semantic-assert-valid-tag tag)<br>      ;; let us set the mark so the user can easily jump back.<br>      (if ecb-tag-jump-sets-mark<br>          (push-mark nil t))<br>      (widen)<br>      (goto-char (ecb-semantic-tag-start tag))<br>      ;; the following 2 lines prevent the autom. tag-sync-mechanism from<br>      ;; starting.<br>      (setq ecb-tag-sync-do-nothing t)<br>      ;; Klaus Berndl <klaus.berndl@sdm.de>: See the comment in<br>      ;; <backtick>ecb-tag-sync<tick> for an explanation why this is now commented out.<br>      ;; (setq ecb-selected-tag tag)<br>      ;; process post action<br>      (unless no-tag-visit-post-actions<br>        ;; first the default post actions<br>        (dolist (f (cdr (assoc <tick>default ecb-tag-visit-post-actions)))<br>          (ecb-call-tag-visit-function tag f))<br>        ;; now the mode specific actions<br>        (dolist (f (cdr (assoc major-mode ecb-tag-visit-post-actions)))<br>          (ecb-call-tag-visit-function tag f)))<br>      ;; now we perform the additional-post-action-list<br>      (dolist (f additional-post-action-list)<br>        (ecb-call-tag-visit-function tag f))<br>      ;; Klaus Berndl <klaus.berndl@sdm.de>: Now we use a different'
        },
        {
          function : 'ecb-display-upgraded-options',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Display a information-buffer which options have been upgraded or reset.<br>Offers two buttons where the user can decide if the upgraded options should<br>also being saved by ECB for future settings or if the buffer should be<br>killed.<br><br>If saving is possible this command display where the options would be saved.<br>It is that file Emacs uses to save customize-settings. This file is<br>"computed" from the settings in `custom-file" and `user-init-file" (see the<br>documentation of these variables).<br><br>ECB automatically makes a backup-file of that file which will be modified by<br>storing the upgraded rsp. renamed ECB-options. This backup file gets a unique<br>name by adding a suffix ".before_ecb_<version>" to the name of the modified<br>file. If such a file already exists ECB adds a unique number to the end of the<br>filename to make the filename unique. This is a safety mechanism if something<br>fails during storing the upgraded options, so you never lose the contents of<br>your customization-file!"',
          prototype : '(defun ecb-display-upgraded-options ()',
          parameter : '',
          lispcode : '(defun ecb-display-upgraded-options ()<br>  (interactive)<br>  (if (ecb-not-compatible-or-renamed-options-detected)<br>      (progn<br>        (with-current-buffer (get-buffer-create <apo>*ECB upgraded options*<apo>)<br>          (switch-to-buffer (current-buffer))<br>          (kill-all-local-variables)<br>          (let ((inhibit-read-only t))<br>            (erase-buffer))<br>          (if (not (ecb-custom-file-writeable-p))<br>              (progn<br>                (widget-insert <apo>Emacs can not save the upgraded incompatible options (s.b.) because that file\n<apo>)<br>                (widget-insert <apo>specified for storing all customizations (see documentation of the option\n<apo>)<br>                (widget-insert <apo><backtick>custom-file<tick>) because the file<apo>)<br>                (widget-insert (if (ecb-custom-file)<br>                                   (concat (ecb-custom-file) <apo> is not writeable by Emacs!<apo>)<br>                                 <apo> does either not exist or Emacs has been\nstarted with -q (in the latter case Emacs prevents from writing in the\ncustomizations-file)!\n<apo>))<br>                (widget-insert <apo>\nPlease restart Emacs with a writeable custom- or init-file or without -q\nso the new option-values can be stored!\n\n<apo>))<br>            (when (not (get <tick>ecb-display-upgraded-options<br>                            <tick>ecb-upgrades-saved))<br>              (widget-insert (format <apo>Click on [Save] to save all changed options (s.b.) into %s.\n<apo><br>                                     (ecb-custom-file)))<br>              (widget-insert (format <apo>This makes a backup of this file uniquely named with a suffix .before_ecb_%s.\n\n<apo><br>                                     ecb-version))))<br>          (widget-insert <apo>Click on [Close] to kill this buffer (do this also after clicking [Save]).\n\n<apo>)<br>          (when ecb-not-compatible-options<br>            (widget-insert <apo>The values of the following options are incompatible with current type.\nECB has tried to transform the old-value to the new type. In cases where\nthis was not possible ECB has reset to the current default-value.<apo>)<br>            (widget-insert <apo>\n\n<apo>))<br>          (dolist (option ecb-not-compatible-options)<br>            (let ((option-name (symbol-name (car option)))<br>                  (old-value (cdr option))<br>                  (new-value (symbol-value (car option))))<br>              (widget-insert (concat <apo>+ Option:   <apo> option-name))<br>              (widget-insert <apo>\n<apo>)<br>              (widget-insert (concat <apo>  Old value: <apo><br>                                     (if (and (not (equal old-value nil))<br>                                              (not (equal old-value t))<br>                                              (or (symbolp old-value)<br>                                                  (listp old-value)))<br>                                         <apo><tick><apo>)<br>                                     (prin1-to-string old-value)))<br>              (widget-insert <apo>\n<apo>)<br>              (widget-insert (concat <apo>  New value: <apo><br>                                     (if (and (not (equal new-value nil))<br>                                              (not (equal new-value t))<br>                                              (or (symbolp new-value)<br>                                                  (listp new-value)))<br>                                         <apo><tick><apo>)<br>                                     (prin1-to-string new-value)))<br>              (widget-insert <apo>\n\n<apo>)))<br>          (when ecb-renamed-options<br>            (widget-insert <apo>The following options are not longer valid and have now new names. ECB has\ntried to transform the old value to the new option. In cases where this\nwas not possible the current default value is active!<apo>)<br>            (widget-insert <apo>\n\n<apo>))<br>          (dolist (option ecb-renamed-options)<br>            (let ((old-option-name (symbol-name (nth 0 option)))<br>                  (old-value (nth 1 option))<br>                  (new-option-name (symbol-name (nth 2 option)))<br>                  (new-value (nth 3 option)))<br>              (widget-insert (concat <apo>+ Old option: <apo> old-option-name))<br>              (widget-insert <apo>\n<apo>)<br>              (widget-insert (concat <apo>  Old value:  <apo><br>                                     (if (and (not (equal old-value nil))<br>                                              (not (equal old-value t))<br>                                              (or (symbolp old-value)<br>                                                  (listp old-value)))<br>                                         <apo><tick><apo>)<br>                                     (prin1-to-string old-value)))<br>              (widget-insert <apo>\n<apo>)<br>              (widget-insert (concat <apo>  New option: <apo> new-option-name))<br>              (widget-insert <apo>\n<apo>)<br>              (widget-insert (concat <apo>  New value:  <apo><br>                                     (if (equal new-value <tick>ecb-no-upgrade-conversion)<br>                                         ;; we print the new default value.<br>                                         (prin1-to-string (symbol-value (nth 2 option)))<br>                                       (concat (if (and (not (equal new-value nil))<br>                                                        (not (equal new-value t))<br>                                                        (or (symbolp new-value)<br>                                                            (listp new-value)))<br>                                                   <apo><tick><apo>)<br>                                               (prin1-to-string new-value)))))<br>              (if (equal new-value <tick>ecb-no-upgrade-conversion)<br>                  (widget-insert <apo>\n  (The old value couldn<tick>t be transformed - this is the current default!)<apo>))<br>              (widget-insert <apo>\n\n<apo>)))<br>          (widget-insert <apo>If the new values are not what you want please re-customize!<apo>)<br>          (widget-insert <apo>\n\n<apo>)<br>          (widget-insert <apo>For a list of the most important NEWS call <backtick>ecb-display-news-for-upgrade<tick>!\n\n<apo>)<br>          (widget-insert <apo>\n<apo>)<br>          (when (ecb-custom-file-writeable-p)<br>            (when (not (get <tick>ecb-display-upgraded-options<br>                            <tick>ecb-upgrades-saved))<br>              ;; Insert the Save button<br>              (widget-create <tick>push-button<br>                             :button-keymap ecb-upgrade-button-keymap ; XEmacs<br>                             :keymap ecb-upgrade-button-keymap ; Emacs<br>                             :notify (lambda (&rest ignore)<br>                                       (if (get <tick>ecb-display-upgraded-options<br>                                                <tick>ecb-upgrades-saved)<br>                                           (ecb-info-message <apo>Upgraded options are already saved!<apo>)<br>                                         (ecb-upgrade-make-copy-of-custom-file)<br>                                         (dolist (option ecb-not-compatible-options)<br>                                           (ecb-customize-save-variable<br>                                            (car option) (symbol-value (car option))))<br>                                         (dolist (option ecb-renamed-options)<br>                                           (ecb-customize-save-variable<br>                                            (nth 2 option)<br>                                            (symbol-value (nth 2 option))))<br>                                         ;; store the information that the<br>                                         ;; upgradings have already been saved now<br>                                         (put <tick>ecb-display-upgraded-options<br>                                              <tick>ecb-upgrades-saved t)<br>                                         (ecb-store-current-options-version)<br>                                         (ecb-info-message <apo>Upgraded options saved!<apo>)))<br>                             <apo>Save<apo>)<br>              (widget-insert <apo> <apo>)))<br>          ;; Insert the Cancel button<br>          (widget-create <tick>push-button<br>                         :button-keymap ecb-upgrade-button-keymap ; XEmacs<br>                         :keymap ecb-upgrade-button-keymap ; Emacs<br>                         :notify (lambda (&rest ignore)<br>                                   (kill-buffer (current-buffer)))<br>                         <apo>Close<apo>)<br>          (widget-setup)<br>          (goto-char (point-min)))<br>        t)<br>    ;; now we display only the choice to save the ecb-options-version but only<br>    ;; if ecb-options-version != ecb-version and (either the command is called<br>    ;; interactively or first-time called by program)<br>    (when (and (or (called-interactively-p <tick>interactive)<br>                   (not (get <tick>ecb-display-upgraded-options<br>                         <tick>ecb-options-version-save-displayed)))<br>               (not (ecb-options-version=ecb-version-p)))<br>      (put <tick>ecb-display-upgraded-options <tick>ecb-options-version-save-displayed t)<br>      (with-current-buffer (get-buffer-create <apo>*ECB upgraded options*<apo>)<br>        (switch-to-buffer (current-buffer))<br>        (kill-all-local-variables)<br>        (let ((inhibit-read-only t))<br>          (erase-buffer))<br>        (widget-insert <apo>There are no incompatible or renamed options. Your settings are correct.\n<apo>)<br>        (widget-insert (format <apo>But ECB must store that the ecb-settings are uptodate with %s.\n\n<apo><br>                               ecb-version))<br>        (if (not (ecb-custom-file-writeable-p))<br>            (progn<br>              (widget-insert (format <apo>Emacs can not save the value of <backtick>ecb-options-version<tick> (%s) in that file\n<apo> ecb-options-version))<br>              (widget-insert <apo>specified for storing all customizations (see documentation of the option\n<apo>)<br>              (widget-insert <apo><backtick>custom-file<tick>) because the file<apo>)<br>              (widget-insert (if (ecb-custom-file)<br>                                 (concat (ecb-custom-file) <apo> is not writeable by Emacs!<apo>)<br>                               <apo> does either not exist or Emacs has been\nstarted with -q (in the latter case Emacs prevents from writing in the\ncustomizations-file)!\n<apo>))<br>              (widget-insert <apo>\nPlease restart Emacs with a writeable custom- or init-file or without -q\nso the value of <backtick>ecb-options-version<tick> (s.a.) can be stored!\n\n<apo>))<br>          (widget-insert (format <apo>Click on [Save] to save <backtick>ecb-options-version<tick> (%s) into %s.\n<apo><br>                                 ecb-options-version (ecb-custom-file)))<br>          (widget-insert (format <apo>This makes a backup of this file unique named with a suffix .before_ecb_%s.\n\n<apo><br>                                 ecb-version)))<br>        (widget-insert <apo>Click on [Close] to kill this buffer (do this also after clicking [Save]).\n\n<apo>)<br>        (widget-insert <apo>For a list of the most important NEWS call <backtick>ecb-display-news-for-upgrade<tick>!\n\n<apo>)<br>        (widget-insert <apo>\n<apo>)<br>        (when (ecb-custom-file-writeable-p)<br>          ;; Insert the Save button<br>          (widget-create <tick>push-button<br>                         :button-keymap ecb-upgrade-button-keymap ; XEmacs<br>                         :keymap ecb-upgrade-button-keymap ; Emacs<br>                         :notify (lambda (&rest ignore)<br>                                   (ecb-upgrade-make-copy-of-custom-file)<br>                                   (ecb-store-current-options-version)<br>                                   (ecb-info-message <apo>ecb-options-version saved!<apo>))<br>                         <apo>Save<apo>)<br>          (widget-insert <apo> <apo>))'
        },
        {
          function : 'ecb-displayed-tag-name',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Return the tag-name of TAG as it will be displayed in the methods-buffer.<br>This function MUST be called with the source-buffer as current buffer!"',
          prototype : '(defun ecb-displayed-tag-name (tag &optional parent-tag)',
          parameter : 'tag &optional parent-tag',
          lispcode : '(defun ecb-displayed-tag-name (tag &optional parent-tag)<br>  (let* ((plain-tag-name (ecb-get-tag-name tag parent-tag))<br>         (has-protection (if (= 0 (length plain-tag-name))<br>                             nil<br>                           (member (ecb-first plain-tag-name)<br>                                   <tick>(?- ?# ?+))))<br>         (icon-name (ecb-get-icon-for-tag<br>                     (if (ecb--semantic-tag-abstract-p tag parent-tag)<br>                         <tick>abstract<br>                       <tick>not-abstract)<br>                     (if (ecb--semantic-tag-static-p tag parent-tag)<br>                         <tick>static<br>                       <tick>not-static)<br>                     (or (and (equal (ecb--semantic-tag-class tag)<br>                                     <tick>type)<br>                              (intern (ecb--semantic-tag-type tag)))<br>                         (and (ecb--semantic-tag-function-constructor-p tag)<br>                              <tick>constructor)<br>                         (ecb--semantic-tag-class tag))<br>                     (or (and (ecb--semantic--tag-get-property tag <tick>adopted)<br>                              <tick>unknown)<br>                         (and (not (member (ecb--semantic-tag-class tag)<br>                                           <tick>(type function variable)))<br>                              <tick>unknown)<br>                         (ecb--semantic-tag-protection tag parent-tag)))))<br>    (ecb-tag-generate-node-name plain-tag-name<br>                                (if has-protection 1 -1)<br>                                icon-name)))<br>'
        },
        {
          function : 'ecb-dlist-node-new',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'data',
          lispcode : '(defun ecb-dlist-node-new (data)<br>  (ecb-dlist-node :data data))'
        },
        {
          function : 'ecb-draw-compile-window',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Draws the compile-window during `ecb-redraw-layout-full". This function<br>does not change the selected window! It sets `ecb-compile-window" and<br>`ecb-compile-window-height-lines". If HEIGHT is not nil then the<br>compile-window will drawn with height HEIGHT otherwise<br>`ecb-compile-window-height" is used."',
          prototype : '(defun ecb-draw-compile-window (&optional height)',
          parameter : '&optional height',
          lispcode : '(defun ecb-draw-compile-window (&optional height)<br>  (ecb-split-ver (- ecb-compile-window-height) t t)<br>  (setq ecb-compile-window (next-window))<br>  ;; now we store the absolut height of the compile-window - if there is<br>  ;; any - we need this height to always have the absolut height in<br>  ;; lines when we want shrink back the compile-window to its<br>  ;; specified height.<br>  (setq ecb-compile-window-height-lines<br>        (ecb-window-full-height ecb-compile-window))<br>  ;; now we change the height of the compile-window if'
        },
        {
          function : 'ecb-dump-semantic-tags-internal',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '                    ", tag-class: "',
          prototype : '(defun ecb-dump-semantic-tags-internal (table parent source-buffer indent)  (dolist (tag table)    ;; we ca not use format here because XEmacs-format removes all    ;; text-properties!    (insert (concat (make-string indent ? )                    (with-current-buffer source-buffer                      (ecb--semantic-format-tag-uml-prototype tag parent t))',
          parameter : 'table parent source-buffer indent',
          lispcode : '(defun ecb-dump-semantic-tags-internal (table parent source-buffer indent)<br>  (dolist (tag table)<br>    ;; we ca not use format here because XEmacs-format removes all<br>    ;; text-properties!<br>    (insert (concat (make-string indent ? )<br>                    (with-current-buffer source-buffer<br>                      (ecb--semantic-format-tag-uml-prototype tag parent t))<br>                    (format <apo>%s<apo> (ecb--semantic-tag-class tag))<br>                    <apo>\n<apo>))<br>    (unless (equal (ecb--semantic-tag-class tag) <tick>function)<br>      (ecb-dump-semantic-tags-internal (ecb-children-tags tag)<br>                                       (if (equal (ecb--semantic-tag-class tag)<br>                                                  <tick>type)<br>                                           tag)'
        },
        {
          function : 'ecb-dump-semantic-toplevel',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Dump the current semantic-tags in special buffer and display them."',
          prototype : '(defun ecb-dump-semantic-toplevel ()',
          parameter : '',
          lispcode : '(defun ecb-dump-semantic-toplevel ()<br>  (interactive)<br>  (let ((tags (ecb-fetch-semantic-tags t))<br>        (source-buf (current-buffer)))<br>    (save-selected-window<br>      (set-buffer (get-buffer-create <apo>*ecb-tag-dump*<apo>))<br>      (erase-buffer)<br>      (ecb-dump-semantic-tags-internal tags nil source-buf 1)<br>      (switch-to-buffer-other-window (get-buffer-create <apo>*ecb-tag-dump*<apo>))<br>      (goto-char (point-min)))))'
        },
        {
          function : 'ecb-ecb-buffer-registry-add',
          filename : 'ecb/ecb-common-browser.el',
          parameter : 'name name-symbol tree-buffer-p &optional set-fcn-symbol',
          lispcode : '(defun ecb-ecb-buffer-registry-add (name name-symbol tree-buffer-p &optional set-fcn-symbol)<br>  (if (assoc name ecb-ecb-buffer-registry)<br>      (ecb-set-elt (assoc name ecb-ecb-buffer-registry) 3 set-fcn-symbol)<br>    (setq ecb-ecb-buffer-registry<br>          (cons (list name name-symbol tree-buffer-p set-fcn-symbol)<br>                ecb-ecb-buffer-registry))))'
        },
        {
          function : 'ecb-ecb-buffer-registry-init',
          filename : 'ecb/ecb-common-browser.el',
          parameter : '',
          lispcode : '(defun ecb-ecb-buffer-registry-init ()<br>  (setq ecb-ecb-buffer-registry nil))'
        },
        {
          function : 'ecb-ediff-before-setup-hook',
          filename : 'ecb/ecb-compatibility.el',
          docstring : '  "Special ecb-setup before starting ediff."',
          prototype : '(defun ecb-ediff-before-setup-hook ()',
          parameter : '',
          lispcode : '(defun ecb-ediff-before-setup-hook ()<br>  (if (and ecb-minor-mode<br>           (equal (selected-frame) ecb-frame))<br>      (progn<br>        (setq ecb-before-ediff-window-config (ecb-current-window-configuration))<br>        (if ecb-run-ediff-in-ecb-frame<br>            ;; !!!! we must delete all ECB-windows and the compile-window so<br>            ;; ediff can manage the whole ecb-frame concerning its windows!<br>            ;; This is the reason why we can advice <backtick>ediff-setup-windows<tick> so<br>            ;; it runs with all original layout basic functions (especially<br>            ;; delete-other-window is necessary!)<br>            (progn'
        },
        {
          function : 'ecb-ediff-quit-hook',
          filename : 'ecb/ecb-compatibility.el',
          docstring : '  "Added to the end of `ediff-quit-hook" during ECB is activated. It<br>does all necessary after finishing ediff."',
          prototype : '(defun ecb-ediff-quit-hook ()',
          parameter : '',
          lispcode : '(defun ecb-ediff-quit-hook ()<br>  (when ecb-minor-mode<br>    (if (and (not (equal (selected-frame) ecb-frame))<br>             (y-or-n-p<br>              <apo>Ediff finished. Do you want to delete the extra ediff-frame? <apo>))<br>        (delete-frame (selected-frame) t))<br>    (select-frame ecb-frame)<br>    (when ecb-before-ediff-window-config<br>      (ecb-set-window-configuration ecb-before-ediff-window-config)<br>      (setq ecb-before-ediff-window-config nil))))'
        },
        {
          function : 'ecb-edit-area-creators-number-of-edit-windows',
          filename : 'ecb/ecb-layout.el',
          parameter : '',
          lispcode : '(defun ecb-edit-area-creators-number-of-edit-windows ()<br>  (let ((dels (length (delq nil (mapcar (function (lambda (e)<br>                                                    (if (equal (cdr e)<br>                                                               <tick>delete-window)<br>                                                        e<br>                                                      nil)))<br>                                        ecb-edit-area-creators)))))<br>    (- (1+ (- (length ecb-edit-area-creators) dels))<br>       dels)))<br>'
        },
        {
          function : 'ecb-edit-window-live-p',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "At least one edit-window is always alive."',
          prototype : '(defun ecb-edit-window-live-p ()',
          parameter : '',
          lispcode : '(defun ecb-edit-window-live-p ()<br>  t)<br>'
        },
        {
          function : 'ecb-edit-window-splitted',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Returns either nil if the ECB edit-window is not splitted or "vertical or<br>"horizontal when splitted in two windows (depending on the splitting) or<br>"splitted if splitted in more than two windows. If EDIT-WINDOWS-LIST is not<br>nil then it must be a current list of edit-windows (got by<br>`ecb-canonical-edit-windows-list"). If EDIT-WINDOWS-LIST is nil then a new<br>edit-window-list is computed via `ecb-canonical-edit-windows-list"."',
          prototype : '(defun ecb-edit-window-splitted (&optional edit-windows-list)',
          parameter : '&optional edit-windows-list',
          lispcode : '(defun ecb-edit-window-splitted (&optional edit-windows-list)<br>  (let ((edit-win-list (or edit-windows-list (ecb-canonical-edit-windows-list))))<br>    (cond ((null edit-win-list)<br>           (ecb-error <apo>Internal error - redraw the layout!<apo>))<br>          ((= (length edit-win-list) 1)<br>           nil)<br>          ((= (length edit-win-list) 2)<br>           (if (= (car (ecb-window-edges (car edit-win-list)))<br>                  (car (ecb-window-edges (cadr edit-win-list))))<br>               <tick>vertical<br>             <tick>horizontal))<br>          (t <tick>splitted))))'
        },
        {
          function : 'ecb-enable-advices',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Enable all advices of ADVICED-FUNCTION-SET-VAR, which must be defined by<br>`defecb-advice-set"."',
          prototype : '(defun ecb-enable-advices (adviced-function-set-var)',
          parameter : 'adviced-function-set-var',
          lispcode : '(defun ecb-enable-advices (adviced-function-set-var)<br>  (if ecb-advices-debug-error<br>      (message <apo>ECB %s: debug enabling the advice-set: %s<apo><br>               ecb-version adviced-function-set-var))<br>  (if (eq adviced-function-set-var <tick>ecb-always-disabled-advices)<br>      (error <apo>The advice-set ecb-always-disabled-advices must not be enabled!<apo>))<br>  (if (not (assq adviced-function-set-var ecb-adviced-function-sets))<br>      (error <apo>The adviced function set %s is not defined by defecb-advice-set!<apo><br>             (symbol-name adviced-function-set-var)))<br>  (dolist (elem (symbol-value adviced-function-set-var))<br>    (ecb-enable-ecb-advice (car elem) (cdr elem) 1)))'
        },
        {
          function : 'ecb-enable-ecb-advice',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "If ARG is greater or equal zero then enable the adviced version of<br>FUNCTION-SYMBOL. Otherwise disable the adviced version. The advice must be<br>defined with class ADVICE-CLASS by `defecb-advice".<br><br>IMPORTANT: Do not use the function directly. Always use `ecb-enable-advices",<br>`ecb-disable-advices" or `ecb-with-original-adviced-function-set"!."',
          prototype : '(defun ecb-enable-ecb-advice (function-symbol advice-class arg)',
          parameter : 'function-symbol advice-class arg',
          lispcode : '(defun ecb-enable-ecb-advice (function-symbol advice-class arg)<br>  (if (< arg 0)<br>      (progn<br>        (ad-disable-advice function-symbol advice-class <tick>ecb)<br>        (ad-activate function-symbol)<br>        (ecb-advices-debug-error function-symbol advice-class <tick>disabling))<br>    (ad-enable-advice function-symbol advice-class <tick>ecb)<br>    (ad-activate function-symbol)<br>    (ecb-advices-debug-error function-symbol advice-class <tick>enabling)))<br>'
        },
        {
          function : 'ecb-enable-temp-buffer-shrink-to-fit',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Enables `temp-buffer-resize-mode" (GNU Emacs) when a comile-window is used.<br>When the compile-window is disabled or when ECB is deactivated then the old<br>state of these modes/variables is restored."',
          prototype : '(defun ecb-enable-temp-buffer-shrink-to-fit (arg)',
          parameter : 'arg',
          lispcode : '(defun ecb-enable-temp-buffer-shrink-to-fit (arg)<br>  (if arg<br>      (progn<br>        ;; store old value if not already done<br>        (or (get <tick>ecb-enable-temp-buffer-shrink-to-fit<br>                 <tick>ecb-old-temp-buffer-shrink-to-fit)<br>            (put <tick>ecb-enable-temp-buffer-shrink-to-fit<br>                 <tick>ecb-old-temp-buffer-shrink-to-fit<br>                 (cons <tick>stored temp-buffer-resize-mode)))<br>        ;; now we activate temp-buffer-shrinking<br>        (temp-buffer-resize-mode 1)<br>      )<br>    ;; reset to the original value<br>    (and (get <tick>ecb-enable-temp-buffer-shrink-to-fit<br>              <tick>ecb-old-temp-buffer-shrink-to-fit)<br>         (temp-buffer-resize-mode<br>            (if (cdr (get <tick>ecb-enable-temp-buffer-shrink-to-fit<br>                          <tick>ecb-old-temp-buffer-shrink-to-fit))<br>               1<br>              -1)<br>          )<br>         )'
        },
        {
          function : 'ecb-enlarge-window',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Enlarge the given window.<br>If VAL is nil then WINDOW is enlarged so that it is 1/2 of the current frame.<br>If VAL is a positive integer then WINDOW is enlarged so that its new height is<br>VAL lines. If VAL is > 0 and < 1 then WINDOW is enlarged so that its new<br>height is that fraction of the frame."',
          prototype : '(defun ecb-enlarge-window (window &optional val)',
          parameter : 'window &optional val',
          lispcode : '(defun ecb-enlarge-window (window &optional val)<br>  (if (and window (window-live-p window))<br>      (let* ((norm-val (if val<br>                           (ecb-normalize-number val (1- (frame-height)))<br>                         (/ (1- (frame-height)) 2)))<br>             (enlargement (- norm-val (ecb-window-full-height window))))<br>        (save-selected-window<br>          (select-window window)<br>          (if (> enlargement 0)<br>              (enlarge-window enlargement))))<br>    (error <apo>Window is not alive!<apo>)))'
        },
        {
          function : 'ecb-enter-debugger',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "If `ecb-debug-mode" is not nil then enter the Emacs-debugger and signal an<br>error with ERROR-ARGS."',
          prototype : '(defun ecb-enter-debugger (&rest error-args)',
          parameter : '&rest error-args',
          lispcode : '(defun ecb-enter-debugger (&rest error-args)<br>  (when ecb-debug-mode<br>    (let ((debug-on-error t))<br>      (apply <tick>error error-args))))<br>'
        },
        {
          function : 'ecb-error',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Signals an error but prevents it from entering the debugger. This is<br>useful if an error-message should be signaled to the user and evaluating<br>should stopped but no debugging is senseful."',
          prototype : '(defun ecb-error (&rest args)',
          parameter : '&rest args',
          lispcode : '(defun ecb-error (&rest args)<br>  (let ((debug-on-error nil))<br>    (error (concat <apo>ECB <apo> ecb-version <apo> - Error: <apo><br>                   (apply <tick>format args)))))'
        },
        {
          function : 'ecb-eshell-activate-integration',
          filename : 'ecb/ecb-eshell.el',
          docstring : '  "Does all necessary to activate the eshell-integration. But this doesn not<br>load or activate eshell - it just prepares ECB to work perfectly with eshell."',
          prototype : '(defun ecb-eshell-activate-integration ()',
          parameter : '',
          lispcode : '(defun ecb-eshell-activate-integration ()<br>  (ecb-enable-advices <tick>ecb-eshell-adviced-functions))'
        },
        {
          function : 'ecb-eshell-auto-activate-hook',
          filename : 'ecb/ecb-eshell.el',
          docstring : '  "Activate the eshell when ECB is activated. See `ecb-eshell-auto-activate"."',
          prototype : '(defun ecb-eshell-auto-activate-hook()',
          parameter : '',
          lispcode : '(defun ecb-eshell-auto-activate-hook()<br>  (when ecb-eshell-auto-activate<br>    (ignore-errors (eshell))))'
        },
        {
          function : 'ecb-eshell-deactivate-integration',
          filename : 'ecb/ecb-eshell.el',
          parameter : '',
          lispcode : '(defun ecb-eshell-deactivate-integration ()<br>  (ecb-disable-advices <tick>ecb-eshell-adviced-functions)<br>  (ecb-stop-autocontrol/sync-function <tick>ecb-eshell-buffer-sync)<br>  (remove-hook <tick>eshell-post-command-hook <tick>ecb-eshell-recenter)<br>  (remove-hook <tick>eshell-post-command-hook <tick>ecb-eshell-fit-window-to-output)<br>  (remove-hook <tick>eshell-pre-command-hook <tick>ecb-eshell-precommand-hook)<br>  (remove-hook <tick>window-size-change-functions <tick>ecb-eshell-window-size-change))'
        },
        {
          function : 'ecb-eshell-fit-window-to-output',
          filename : 'ecb/ecb-eshell.el',
          docstring : '  "Fit window of eshell to the output of last command. This function is added<br>to `eshell-post-command-hook" and only called there. This function tries to<br>fit the height of the compile-window best to the last command-output. The<br>algorithm fit the window to the height of the last command-output but do not<br>enlarge the compile-window over half of the frame-height and also not below<br>`ecb-compile-window-height" (in lines)."',
          prototype : '(defun ecb-eshell-fit-window-to-output()',
          parameter : '',
          lispcode : '(defun ecb-eshell-fit-window-to-output()<br>  (when (and (equal (selected-frame) ecb-frame)<br>             (ecb-compile-window-live-p)<br>             ;; the buffer in the ecb-compile-window is a living eshell-buffer<br>             (member (window-buffer ecb-compile-window)<br>                     ecb-eshell-buffer-list))<br><br>    ;; fit the window to the height of the last command-output but do not<br>    ;; enlarge the compile-window over half of the frame-height and also not<br>    ;; below <backtick>ecb-compile-window-height<tick> (in lines).<br>    (when (and ecb-eshell-fit-window-to-command-output<br>               (integer-or-marker-p ecb-eshell-pre-command-point))<br>      (let* ((compile-window-height-lines<br>              (ecb-normalize-number ecb-compile-window-height<br>                                    (1- (frame-height))))<br>             (ecb-enlarged-compilation-window-max-height<br>              (max (min (with-current-buffer (window-buffer ecb-compile-window)<br>                          ;; we want to see the old command line too and 2<br>                          ;; must be added because we have a modeline and one<br>                          ;; empty line cause of the (recenter -2) in<br>                          ;; <backtick>ecb-eshell-recenter<tick>.<br>                          (+ 3 (count-lines ecb-eshell-pre-command-point (point)))<br>                          )<br>                        (/ (1- (frame-height)) 2))<br>                   compile-window-height-lines)))<br>        (ecb-toggle-compile-window-height 1)<br>        (ecb-eshell-recenter))'
        },
        {
          function : 'ecb-eshell-precommand-hook',
          filename : 'ecb/ecb-eshell.el',
          parameter : '',
          lispcode : '(defun ecb-eshell-precommand-hook ()<br>  ;;use the eshell-pre-command-hook to set the point.<br>  (setq ecb-eshell-pre-command-point (point)))'
        },
        {
          function : 'ecb-eshell-recenter&optional',
          filename : 'ecb/ecb-eshell.el',
          docstring : '  "Recenter the eshell window so that the prompt is at the buffer-end."',
          prototype : '(defun ecb-eshell-recenter(&optional display-errors)',
          parameter : 'display-errors',
          lispcode : '(defun ecb-eshell-recenter(&optional display-errors)<br>  (interactive (list t))<br><br>  (if (and (equal (selected-frame) ecb-frame)<br>           (ecb-compile-window-live-p)<br>           ;; the buffer in the ecb-compile-window is a living eshell-buffer<br>           (member (window-buffer ecb-compile-window)<br>                   ecb-eshell-buffer-list))<br>      (save-selected-window<br>        (select-window ecb-compile-window)<br>        (goto-char (point-max))<br>        (recenter -2))<br>    (when display-errors'
        },
        {
          function : 'ecb-eshell-window-size-changeframe',
          filename : 'ecb/ecb-eshell.el',
          docstring : '  "Called when we change window sizes so that the eshell can resize."',
          prototype : '(defun ecb-eshell-window-size-change(frame)',
          parameter : '',
          lispcode : '(defun ecb-eshell-window-size-change(frame)<br>  (when (and ecb-minor-mode<br>             (equal frame ecb-frame))<br>    (ignore-errors (ecb-eshell-recenter))))<br>'
        },
        {
          function : 'ecb-event-to-key',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return non-nil if running non-interactively, i.e. in batch mode."',
          prototype : '(defun ecb-event-to-key (event)  (let ((type (event-basic-type event)))    (cl-case type      ((mouse-1 mouse-2 mouse-3) "mouse-release)      ((down-mouse-1 down-mouse-2 down-mouse-3) "mouse-press)      (otherwise (event-basic-type event)))))(defalias "ecb-facep "facep)(defun ecb-noninteractive ()',
          parameter : 'event',
          lispcode : '(defun ecb-event-to-key (event)<br>  (let ((type (event-basic-type event)))<br>    (cl-case type<br>      ((mouse-1 mouse-2 mouse-3) <tick>mouse-release)<br>      ((down-mouse-1 down-mouse-2 down-mouse-3) <tick>mouse-press)<br>      (otherwise (event-basic-type event)))))<br>(defalias <tick>ecb-facep <tick>facep)<br>(defun ecb-noninteractive ()<br>  noninteractive)<br>(defalias <tick>ecb-subst-char-in-string <tick>subst-char-in-string)<br>(defalias <tick>ecb-substring-no-properties <tick>substring-no-properties)<br>(defalias <tick>ecb-derived-mode-p <tick>derived-mode-p)<br>(defsubst ecb-count-screen-lines (&optional beg end)<br>  (count-screen-lines beg end))<br>(defalias <tick>ecb-frame-parameter <tick>frame-parameter)<br>(defalias <tick>ecb-line-beginning-pos <tick>line-beginning-position)<br>(defalias <tick>ecb-line-end-pos <tick>line-end-position)<br>(defalias <tick>ecb-bolp <tick>bolp)<br>(defalias <tick>ecb-eolp <tick>eolp)<br>(defalias <tick>ecb-bobp <tick>bobp)<br>(defalias <tick>ecb-eobp <tick>eobp)<br>(defun ecb-event-window (event)<br>  (posn-window (event-start event)))<br>(defun ecb-event-point (event)<br>  (posn-point (event-start event)))<br>(defun ecb-event-buffer (event)<br>  (window-buffer (ecb-event-window event)))<br>(defun ecb-window-full-width (&optional window)<br>  (let ((edges (window-edges window)))<br>    (- (nth 2 edges) (nth 0 edges))))<br>(defalias <tick>ecb-window-display-height <tick>window-text-height)<br>(defalias <tick>ecb-window-full-height <tick>window-height)<br>(defalias <tick>ecb-frame-char-width <tick>frame-char-width)<br>(defalias <tick>ecb-frame-char-height <tick>frame-char-height)<br>(defalias <tick>ecb-window-edges <tick>window-edges)'
        },
        {
          function : 'ecb-examples-action-buffer-create',
          filename : 'ecb/ecb-examples.el',
          docstring : '  "Return the action-buffer with name `ecb-examples-action-buffer-name" If<br>the buffer does not exist it will be created. The buffer is read only,<br>contains two buttons [prior] and [next] and mouse-2 calls<br>`ecb-examples-action-buffer-clicked"."',
          prototype : '(defun ecb-examples-action-buffer-create ()',
          parameter : '',
          lispcode : '(defun ecb-examples-action-buffer-create ()<br>  (save-excursion<br>    (if (get-buffer ecb-examples-action-buffer-name)<br>        (get-buffer ecb-examples-action-buffer-name)<br>      (let ((nop (function (lambda() (interactive)))))<br>        (set-buffer (get-buffer-create ecb-examples-action-buffer-name))<br><br>        ;; we setup a local key-map<br><br>        (make-local-variable <tick>ecb-examples-action-buffer-keymap)<br>        (setq ecb-examples-action-buffer-keymap (make-sparse-keymap))<br><br>        ;; define mouse-2 with <backtick>ecb-examples-action-buffer-clicked<tick><br>        (define-key ecb-examples-action-buffer-keymap [down-mouse-2]<br>                                <tick>ecb-examples-action-buffer-clicked)<br><br>        ;; nop operations for the other mouse-2 operations with Emacs<br>        (define-key ecb-examples-action-buffer-keymap [mouse-2] nop)<br>        (define-key ecb-examples-action-buffer-keymap [double-mouse-2] nop)<br>        (define-key ecb-examples-action-buffer-keymap [triple-mouse-2] nop)<br><br>        (use-local-map ecb-examples-action-buffer-keymap)<br><br>        ;; insert the action buttons [prior] and [next] and make it read-only<br><br>        (ecb-with-readonly-buffer (current-buffer)<br>         (erase-buffer)<br>         (ecb-examples-insert-text-in-action-buffer <apo>[prior]<apo>)<br>         (insert <apo>\n<apo>)<br>         (ecb-examples-insert-text-in-action-buffer <apo>[next]<apo>)<br>         (insert <apo>\n<apo>))<br><br>        (current-buffer)))))<br><br><br><br>;; The function which performs the actions in the action-buffer<br><br>(defun ecb-examples-action-buffer-clicked (e)<br>  <apo>Perform the right action for the mouse-click.<br>If the user clicks onto \[prior] the buffer in the edit-window is scrolled up,<br>if clicks onto \[next] the buffer in the edit-window is scrolled down.<br>Otherwise nothing will be done.<apo><br>  (interactive <apo>e<apo>)<br>  (mouse-set-point e)<br>  (let ((line (ecb-buffer-substring (ecb-line-beginning-pos) (ecb-line-end-pos))))<br>    (save-match-data<br>      (cond ((string-match <apo>prior<apo> line)<br>             (ecb-select-edit-window)<br>             (call-interactively <tick>scroll-down))<br>            ((string-match <apo>next<apo> line)'
        },
        {
          function : 'ecb-examples-activate',
          filename : 'ecb/ecb-examples.el',
          docstring : '  "Activate the new layout "example-layout1".<br>Set `ecb-compile-window-height" to 5 and `ecb-windows-height" to 6. The<br>preactivation-state is saved and will be restored by<br>`ecb-examples-deactivate"."',
          prototype : '(defun ecb-examples-activate ()',
          parameter : '',
          lispcode : '(defun ecb-examples-activate ()<br>  (interactive)<br><br>  (cl-assert (featurep <tick>ecb) nil<br>          <apo>ECB must be loaded!<apo>)<br>  (cl-assert ecb-minor-mode nil<br>          <apo>ECB must be activated!<apo>)<br>  (cl-assert (equal (selected-frame) ecb-frame) nil<br>          <apo>The ECB-frame must be selected!<apo>)<br>  (cl-assert (not (ecb-string= ecb-layout-name <apo>example-layout1<apo>)) nil<br>          <apo>The examples-layout1 is already active!<apo>)<br><br>  ;; saving the state<br>  (ecb-examples-preactivation-state <tick>save)<br><br>  ;; switch to our prefered layout<br>  (setq ecb-windows-height 6)<br>  (setq ecb-compile-window-height 8)<br>  (let ((ecb-change-layout-preserves-compwin-state nil))<br>    ;; activating the synchronization of the bufferinfo-window is done in the'
        },
        {
          function : 'ecb-examples-deactivate',
          filename : 'ecb/ecb-examples.el',
          docstring : '  "Deactivate the new layout "example-layout1".<br>Stops `ecb-examples-bufferinfo-buffer-sync" and restore the state<br>as before activation."',
          prototype : '(defun ecb-examples-deactivate ()',
          parameter : '',
          lispcode : '(defun ecb-examples-deactivate ()<br>  (interactive)<br><br>  (cl-assert (featurep <tick>ecb) nil<br>          <apo>ECB must be loaded!<apo>)<br>  (cl-assert ecb-minor-mode nil<br>          <apo>ECB must be activated!<apo>)<br>  (cl-assert (equal (selected-frame) ecb-frame) nil<br>          <apo>The ECB-frame must be selected!<apo>)<br>  (cl-assert (ecb-string= ecb-layout-name <apo>example-layout1<apo>) nil<br>          <apo>The example-layout1 is not active!<apo>)<br><br>  (ecb-stop-autocontrol/sync-function <tick>ecb-examples-bufferinfo-buffer-sync)<br><br>  (ecb-examples-preactivation-state <tick>restore)<br><br>  (ecb-layout-switch ecb-layout-name))<br><br><br>;; ---------------------------------------------------------------------------<br>;; --- Providing the examples ------------------------------------------------<br>;; ---------------------------------------------------------------------------<br><br>(provide <tick>ecb-examples)<br><br>;; ecb-examples.el ends here'
        },
        {
          function : 'ecb-examples-insert-text-in-action-buffer',
          filename : 'ecb/ecb-examples.el',
          docstring : '  "Insert TEXT at point and make it highlight-able for mouse-movement over the<br>text."',
          prototype : '(defun ecb-examples-insert-text-in-action-buffer (text)',
          parameter : 'text',
          lispcode : '(defun ecb-examples-insert-text-in-action-buffer (text)<br>  (let ((p (point)))<br>    (insert text)<br>    (put-text-property p (+ p (length text)) <tick>mouse-face <tick>highlight)))'
        },
        {
          function : 'ecb-examples-preactivation-stateaction',
          filename : 'ecb/ecb-examples.el',
          parameter : '',
          lispcode : '(defun ecb-examples-preactivation-state(action)<br>  (cond ((equal action <tick>save)<br>         (setq ecb-examples-preact-layout<br>               ecb-layout-name<br>               ecb-examples-preact-windows-height<br>               ecb-windows-height<br>               ecb-examples-preact-compile-window-height<br>               ecb-compile-window-height))<br>        ((equal action <tick>restore)<br>         (setq ecb-layout-name<br>               ecb-examples-preact-layout<br>               ecb-windows-height<br>               ecb-examples-preact-windows-height<br>               ecb-compile-window-height<br>               ecb-examples-preact-compile-window-height))))<br><br><br>'
        },
        {
          function : 'ecb-examples-print-file-attributes',
          filename : 'ecb/ecb-examples.el',
          docstring : '  "Insert in buffer BUFFER some file-information about FILENAME."',
          prototype : '(defun ecb-examples-print-file-attributes (buffer filename)',
          parameter : 'buffer filename',
          lispcode : '(defun ecb-examples-print-file-attributes (buffer filename)<br>  (ecb-with-readonly-buffer buffer<br>    (erase-buffer)<br>    (insert (format <apo>Bufferinfo for %s:\n\n<apo> filename))<br>    (let* ((attributes (file-attributes filename))<br>           (type (format <apo>Type: %s\n<apo> (cond ((null (nth 0 attributes))<br>                                             <apo>File<apo>)<br>                                            ((equal (nth 0 attributes) t)<br>                                             <apo>Directory<apo>)<br>                                            ((stringp (nth 0 attributes))<br>                                             (concat <apo>Link to <apo><br>                                                     (nth 0 attributes))))))<br>           (size (format <apo>Size: %d\n<apo> (nth 7 attributes)))<br>           (modes (format <apo>Modes: %s\n<apo> (nth 8 attributes))))<br>      (insert type size modes))))<br>'
        },
        {
          function : 'ecb-examples-print-non-filebuffer',
          filename : 'ecb/ecb-examples.el',
          docstring : '  "Insert in buffer BUFFER a small message for buffer with name BUFFER-NAME."',
          prototype : '(defun ecb-examples-print-non-filebuffer (buffer buffer-name)',
          parameter : 'buffer buffer-name',
          lispcode : '(defun ecb-examples-print-non-filebuffer (buffer buffer-name)<br>  (ecb-with-readonly-buffer buffer<br>    (erase-buffer)<br>    (insert (format <apo>Bufferinfo for buffer %s\n\n<apo> buffer-name))<br>    (insert <apo>This is a not a filebuffer, so there are no\n<apo>)<br>    (insert <apo>informations available.<apo>)))<br>'
        },
        {
          function : 'ecb-excessive-trim',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return a string where all double-and-more whitespaces in STR are replaced<br>with a single space-character."',
          prototype : '(defun ecb-excessive-trim (str)',
          parameter : 'str',
          lispcode : '(defun ecb-excessive-trim (str)<br>  (let ((s str))<br>    (save-match-data<br>      (while (string-match <apo>[ \t][ \t]+<apo> s)<br>        (setq s (concat (substring s 0 (match-beginning 0))<br>                        <apo> <apo><br>                        (substring s (match-end 0))))))<br>    s))'
        },
        {
          function : 'ecb-expand-directory-nodes',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Set the expand level of the nodes in the ECB-directories-buffer.<br>For argument LEVEL see `ecb-expand-methods-nodes".<br><br>Be aware that for deep structured paths and a lot of source-paths this command<br>can last a long time - depending of machine- and disk-performance."',
          prototype : '(defun ecb-expand-directory-nodes (level)',
          parameter : 'level',
          lispcode : '(defun ecb-expand-directory-nodes (level)<br>  (interactive <apo>nLevel: <apo>)<br>  (ecb-exec-in-window ecb-directories-buffer-name<br>    (dolist (node (tree-node->children (tree-buffer-get-root)))<br>      (tree-buffer-expand-node node level))<br>    (tree-buffer-update))<br>  (ecb-basic-buffer-sync <tick>force))<br>'
        },
        {
          function : 'ecb-expand-directory-tree',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Expands the directory part so the node representing PATH is visible.<br>Start with the childrens of NODE. Return not nil when an expansion has been<br>done (so normally the tree-buffer must be rebuild). Return nil if the<br>expansion-state of the tree can show without any further expansion the node<br>representing PATH."',
          prototype : '(defun ecb-expand-directory-tree (path node)',
          parameter : 'path node',
          lispcode : '(defun ecb-expand-directory-tree (path node)<br>  (catch <tick>exit<br>    (dolist (child (tree-node->children node))<br>      (let ((data (tree-node->data child)))<br>        (when (and (>= (length path) (length data))<br>                   (ecb-string= (substring path 0 (length data)) data)<br>                   (or (= (length path) (length data))<br>                       (eq (elt path (length data))<br>                           (ecb-directory-sep-char path))))<br>          (let ((was-expanded (or (not (tree-node->expandable child))<br>                                  (tree-node->expanded child))))<br>            (setf (tree-node->expanded child) t)<br>            (ecb-update-directory-node child)<br>            (throw <tick>exit<br>                   (or (when (> (length path) (length data))<br>                         (ecb-expand-directory-tree path child))<br>                       (not was-expanded)))))))))<br>'
        },
        {
          function : 'ecb-expand-file-name',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Delegate all args to `expand-file-name""',
          prototype : '(defun ecb-expand-file-name (name &optional default-dir)',
          parameter : 'name &optional default-dir',
          lispcode : '(defun ecb-expand-file-name (name &optional default-dir)<br>  (expand-file-name name default-dir))<br><br>;;; ----- Canonical filenames ------------------------------'
        },
        {
          function : 'ecb-expand-methods-node-internal',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Set the expand level of NODE and its subnodes in the ECB-methods-buffer.<br><br>If NODE is equal to the root-node of the methods-tree-buffer then this<br>function will be called for each of the root-children. Otherwise it will only<br>expand/collaps NODE.<br><br>For a description of LEVEL see `tree-buffer-expand-node" and for a description<br>of FORCE-ALL see `ecb-expand-methods-nodes".<br><br>If RESYNC-TAG is not nil then after expanding/collapsing the methods-buffer<br>is resynced to the current tag of the edit-window.<br><br>If UPDATE-TREE-BUFFER is not nil then the methods-tree-buffer will be updated<br>after the expansion.<br><br>Note: All this is only valid for file-types parsed by semantic. For other file<br>types which are parsed by imenu or etags (see<br>`ecb-process-non-semantic-files") FORCE-ALL is always true!"',
          prototype : '(defun ecb-expand-methods-node-internal (node level                                               &optional force-all                                               resync-tag update-tree-buffer)',
          parameter : 'node level &optional force-all resync-tag update-tree-buffer',
          lispcode : '(defun ecb-expand-methods-node-internal (node level<br>                                               &optional force-all<br>                                               resync-tag update-tree-buffer)<br>  ;; for buffers which are not parsed by semantic we always set force-all to<br>  ;; t! We <apo>misuse<apo> (ecb-methods-get-data-store<br>  ;; <tick>semantic-symbol->name-assoc-list) to decide if a buffer is parsed by<br>  ;; semantic or not because only semantic-parsed buffers can have a value<br>  ;; not nil!<br>  (setq force-all<br>        (if (not (ecb-methods-get-data-store <tick>semantic-symbol->name-assoc-list))<br>            t<br>          force-all))<br>  (ecb-exec-in-window ecb-methods-buffer-name<br>    (let ( ;; normalizing the elements of <backtick>ecb-methods-nodes-expand-spec<tick><br>          ;; and <backtick>ecb-methods-nodes-collapse-spec<tick>.<br>          (norm-expand-types (ecb-normalize-expand-spec<br>                              ecb-methods-nodes-expand-spec))<br>          (norm-collapse-types (ecb-normalize-expand-spec<br>                                ecb-methods-nodes-collapse-spec))<br>          (node-list (if (equal node (tree-buffer-get-root))<br>                         (tree-node->children (tree-buffer-get-root))<br>                       (list node))))<br>      (dolist (node node-list)<br>        (tree-buffer-expand-node<br>         node<br>         level<br>         (and (not force-all)<br>              (function (lambda (node current-level)<br>                          (or (equal norm-expand-types <tick>all)<br>                              (member (ecb-methods-node-get-semantic-type node)<br>                                      norm-expand-types)))))<br>         (and (not force-all)<br>              (function (lambda (node current-level)<br>                          (or (equal norm-collapse-types <tick>all)<br>                              (member (ecb-methods-node-get-semantic-type node)<br>                                      norm-collapse-types)))))))<br>      (if update-tree-buffer<br>          (tree-buffer-update)<br>        (ecb-scroll-window (point-min) (point-min)))))<br><br>  ;; we want resync the new method-buffer to the current tag in the<br>  ;; edit-window.<br>  (if resync-tag (ecb-tag-sync <tick>force)))<br><br><br><br>(defun ecb-normalize-expand-spec (spec)'
        },
        {
          function : 'ecb-expand-methods-nodes',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Set the expand level of the nodes in the ECB-methods-buffer.<br>This command asks in the minibuffer for an indentation level LEVEL. With this<br>LEVEL you can precisely specify which level of nodes should be expanded. LEVEL<br>means the indentation-level of the nodes.<br><br>A LEVEL value X means that all nodes with an indentation-level <= X are<br>expanded and all other are collapsed. A negative LEVEL value means all visible<br>nodes are collapsed.<br><br>Nodes which are not indented have indentation-level 0!<br><br>Which node-types are expanded (rsp. collapsed) by this command depends on<br>the options `ecb-methods-nodes-expand-spec" and<br>`ecb-methods-nodes-collapse-spec"! With optional argument FORCE-ALL all tags<br>will be expanded/collapsed regardless of the values of these options.<br><br>Examples:<br>- LEVEL = 0 expands only nodes which have no indentation itself.<br>- LEVEL = 2 expands nodes which are either not indented or indented once or<br>  twice<br>- LEVEL ~ 10 should normally expand all nodes unless there are nodes which<br>  are indented deeper than 10.<br><br>Note 1: This command switches off auto. expanding of the method-buffer if<br>`ecb-expand-methods-switch-off-auto-expand" is not nil. But it can be switched<br>on again quickly with `ecb-toggle-auto-expand-tag-tree" or [C-c . a].<br><br>Note 2: All this is only valid for file-types parsed by semantic. For other<br>file types which are parsed by imenu or etags (see<br>`ecb-process-non-semantic-files") FORCE-ALL is always true!"',
          prototype : '(defun ecb-expand-methods-nodes (&optional force-all)',
          parameter : '&optional force-all',
          lispcode : '(defun ecb-expand-methods-nodes (&optional force-all)<br>  (interactive <apo>P<apo>)<br>  (let* ((first-node (save-excursion<br>                       (goto-char (point-min))<br>                       (tree-buffer-get-node-at-point)))<br>         (level (ecb-read-number<br>                 <apo>Expand indentation-level: <apo><br>                 (if (and first-node<br>                          (tree-node->expandable first-node)<br>                          (tree-node->expanded first-node))<br>                     -1<br>                   10))))<br>    ;; here we should switch off autom. expanding tag-tree because otherwise<br>    ;; our expanding to a certain level takes no effect because if the current<br>    ;; tag in the edit-buffer would be invisible afterwards (after the<br>    ;; expanding/collapsing) then immediately the tag would be autom.<br>    ;; expanded to max level...'
        },
        {
          function : 'ecb-fetch-semantic-tags',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Get a taglist for current buffer.<br>If optional arg FULL is not nil or if the `semantic-idle-scheduler-mode" is<br>not enabled for current source-buffer and the option<br>`ecb-force-reparse-when-semantic-idle-scheduler-off" is not nil then use<br>`ecb--semantic-fetch-tags" otherwise use `ecb--semantic-fetch-available-tags".<br>The latter always returns just the currently available tags in the<br>semantic-cache (reparsing is done completely by the idle-scheduler of<br>semantic if necessary). The former one triggers immediate parsing if<br>necessary!"',
          prototype : '(defun ecb-fetch-semantic-tags (&optional full)',
          parameter : '&optional full',
          lispcode : '(defun ecb-fetch-semantic-tags (&optional full)<br>  (if (or full<br>          (and (or (not (boundp <tick>semantic-idle-scheduler-mode))<br>                   (not semantic-idle-scheduler-mode))<br>               ecb-force-reparse-when-semantic-idle-scheduler-off)<br>          )<br>      (ecb--semantic-fetch-tags)<br>    (ecb--semantic-fetch-available-tags)))<br>'
        },
        {
          function : 'ecb-file-browser-initialize',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Initialize the file-browser of ECB. If optional arg NO-CACHES is not nil<br>then the caches used by the file-browser will not be initialized."',
          prototype : '(defun ecb-file-browser-initialize (&optional no-caches)',
          parameter : '&optional no-caches',
          lispcode : '(defun ecb-file-browser-initialize (&optional no-caches)<br>  (setq ecb-path-selected-directory nil<br>        ecb-path-selected-source nil)<br>  (unless no-caches<br>    (ecb-file-browser-initialize-caches)))'
        },
        {
          function : 'ecb-file-browser-initialize-caches',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Initialize the caches of the file-browser of ECB."',
          prototype : '(defun ecb-file-browser-initialize-caches ()',
          parameter : '',
          lispcode : '(defun ecb-file-browser-initialize-caches ()<br>  (ecb-reset-history-filter)<br>  (ecb-filename-cache-init))'
        },
        {
          function : 'ecb-file-content-as-string',
          filename : 'ecb/ecb-util.el',
          docstring : '  "If FILE exists and is readable returns the contents as a string otherwise<br>return nil.<br>Note: No major/minor-mode is activated and no local variables are evaluated<br>for FILE, but proper EOL-conversion and character interpretation is done!"',
          prototype : '(defun ecb-file-content-as-string (file)',
          parameter : 'file',
          lispcode : '(defun ecb-file-content-as-string (file)<br>  (let ((exp-filename (expand-file-name file)))<br>    (if (and (file-exists-p exp-filename)<br>             (file-readable-p exp-filename))<br>        (with-temp-buffer<br>          (insert-file-contents exp-filename)<br>          (buffer-string)))))'
        },
        {
          function : 'ecb-filename-cache-init',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Initialize the whole cache for file- and directory-names"',
          prototype : '(defun ecb-filename-cache-init ()',
          parameter : '',
          lispcode : '(defun ecb-filename-cache-init ()<br>  (if (ecb-multicache-p <tick>ecb-filename-cache)<br>      (ecb-multicache-clear <tick>ecb-filename-cache)))<br>'
        },
        {
          function : 'ecb-files-and-subdirs-cache-add',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Add the files and subdirs of DIR to the cache."',
          prototype : '(defun ecb-files-and-subdirs-cache-add (dir cached-value)',
          parameter : 'dir cached-value',
          lispcode : '(defun ecb-files-and-subdirs-cache-add (dir cached-value)<br>  (ecb-multicache-put-value <tick>ecb-filename-cache dir <tick>FILES-AND-SUBDIRS<br>                             cached-value))'
        },
        {
          function : 'ecb-files-and-subdirs-cache-clear',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Clear the whole FILES-AND-SUBDIRS-cache."',
          prototype : '(defun ecb-files-and-subdirs-cache-clear ()',
          parameter : '',
          lispcode : '(defun ecb-files-and-subdirs-cache-clear ()<br>  (ecb-multicache-clear-subcache <tick>ecb-filename-cache <tick>FILES-AND-SUBDIRS))'
        },
        {
          function : 'ecb-files-and-subdirs-cache-dump',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Dump the whole FILES-AND-SUBDIRS-cache in another window. If NO-NIL-VALUE<br>is not nil then these cache-entries are not dumped. This command is not<br>intended for end-users of ECB."',
          prototype : '(defun ecb-files-and-subdirs-cache-dump (&optional no-nil-value)',
          parameter : '&optional no-nil-value',
          lispcode : '(defun ecb-files-and-subdirs-cache-dump (&optional no-nil-value)<br>  (interactive <apo>P<apo>)<br>  (ecb-multicache-print-subcache <tick>ecb-filename-cache<br>                                 <tick>FILES-AND-SUBDIRS<br>                                 no-nil-value))<br>'
        },
        {
          function : 'ecb-files-and-subdirs-cache-get',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Get the files and subdirs of DIR from the cache. Nil if not cached."',
          prototype : '(defun ecb-files-and-subdirs-cache-get (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-files-and-subdirs-cache-get (dir)<br>  (ecb-multicache-get-value <tick>ecb-filename-cache dir <tick>FILES-AND-SUBDIRS))'
        },
        {
          function : 'ecb-files-and-subdirs-cache-remove',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Remove DIR from the cache."',
          prototype : '(defun ecb-files-and-subdirs-cache-remove (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-files-and-subdirs-cache-remove (dir)<br>  (ecb-multicache-clear-value <tick>ecb-filename-cache dir <tick>FILES-AND-SUBDIRS))'
        },
        {
          function : 'ecb-files-from-cvsignore',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return an expanded list of filenames which are excluded by the .cvsignore<br>file in current directory."',
          prototype : '(defun ecb-files-from-cvsignore (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-files-from-cvsignore (dir)<br>  (let ((cvsignore-content (ecb-file-content-as-string<br>                            (ecb-expand-file-name <apo>.cvsignore<apo> dir)))<br>        (files nil))<br>    (when cvsignore-content<br>      (dolist (f (split-string cvsignore-content))<br>        (setq files (append (ecb-directory-files dir nil<br>                                                 (wildcard-to-regexp f) t)<br>                            files)))<br>      files)))<br>'
        },
        {
          function : 'ecb-filter',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Filter out those elements of SEQUENCE for which PREDICATE returns nil."',
          prototype : '(defun ecb-filter (seq pred)',
          parameter : 'seq pred',
          lispcode : '(defun ecb-filter (seq pred)<br>  (let ((res))<br>    (dolist (elem seq)<br>      (if (if pred (funcall pred elem) elem)<br>          (setq res (append res (list elem)))))<br>    res))'
        },
        {
          function : 'ecb-filter-c-prototype-tags',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Filter out all prototypes.<br>Beginning with version 2.24 of ECB this function does nothing when<br>`ecb-methods-separate-prototypes" is set to not nil (default).<br><br>For example this is useful for editing C files which have the function<br>prototypes defined at the top of the file and the implementations at the<br>bottom. This means that everything appears twice in the methods buffer, but<br>probably nobody wants to jump to the prototypes, they are only wasting space<br>in the methods buffer.<br>For C-header-files prototypes are never filtered out!"',
          prototype : '(defun ecb-filter-c-prototype-tags (taglist)',
          parameter : 'taglist',
          lispcode : '(defun ecb-filter-c-prototype-tags (taglist)<br>;;   ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: Is there a better way to<br>;;   ;; recognize a C-Header-file?<br>  (if ecb-methods-separate-prototypes<br>      taglist<br>    (let ((header-extensions <tick>(<apo>\\.h\\<tick><apo> <apo>\\.H\\<tick><apo> <apo>\\.HH\\<tick><apo> <apo>\\.hxx\\<tick><apo> <apo>\\.hh\\<tick><apo>)))<br>      (or (and (catch <tick>found<br>                 (dolist (ext header-extensions)<br>                   (if (save-match-data<br>                         (string-match ext (ecb-buffer-file-name (current-buffer))))<br>                       (throw <tick>found t)))<br>                 nil)<br>               taglist)<br>          (ecb-filter taglist<br>                      (function (lambda (x)'
        },
        {
          function : 'ecb-find-add-tag-bucket',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Finds a bucket containing tags of the given TYPE, creates nodes for them<br>and adds them to the given NODE. The bucket is removed from the BUCKETS list.<br>PARENT-TAG is only propagated to `ecb-add-tag-bucket".<br>This function MUST be called with the source-buffer as current buffer!"',
          prototype : '(defun ecb-find-add-tag-bucket (node type display sort-method buckets                                       &optional parent-tag no-bucketize)',
          parameter : 'node type display sort-method buckets &optional parent-tag no-bucketize',
          lispcode : '(defun ecb-find-add-tag-bucket (node type display sort-method buckets<br>                                       &optional parent-tag no-bucketize)<br>  (when (cdr buckets)<br>    (let ((bucket (cadr buckets)))<br>      (if (eq type (ecb--semantic-tag-class (cadr bucket)))<br>	  (progn<br>	    (ecb-add-tag-bucket node bucket display sort-method parent-tag<br>                                  no-bucketize)<br>	    (setcdr buckets (cddr buckets)))<br>	(ecb-find-add-tag-bucket node type display sort-method<br>                                 (cdr buckets) parent-tag no-bucketize)))))'
        },
        {
          function : 'ecb-find-assoc',
          filename : 'ecb/ecb-util.el',
          parameter : 'key list',
          lispcode : '(defun ecb-find-assoc (key list)<br>  (assoc key list))<br><br>;;; ----- Some function from cl ----------------------------'
        },
        {
          function : 'ecb-find-assoc-value',
          filename : 'ecb/ecb-util.el',
          parameter : 'key list',
          lispcode : '(defun ecb-find-assoc-value (key list)<br>  (cdr (assoc key list)))'
        },
        {
          function : 'ecb-find-file-hook',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Adds `ecb-apply-default-tag-filter" to `post-command-hook". This function<br>removes itself from the `post-command-hook"."',
          prototype : '(defun ecb-find-file-hook ()',
          parameter : '',
          lispcode : '(defun ecb-find-file-hook ()<br>  (add-hook <tick>post-command-hook <tick>ecb-apply-default-tag-filter))<br>'
        },
        {
          function : 'ecb-first',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return the first elem of the sequence SEQ."',
          prototype : '(defun ecb-first (seq)',
          parameter : 'seq',
          lispcode : '(defun ecb-first (seq)<br>  (if (listp seq)<br>      (car seq)<br>    (if (> (length seq) 0)<br>        (aref seq 0)<br>      nil)))<br>'
        },
        {
          function : 'ecb-fit-str-to-width',
          filename : 'ecb/ecb-util.el',
          docstring : '  "If STR is longer than WIDTH then fit it to WIDTH by stripping from left or<br>right (depends on FROM which can be "left or "right) and prepend (rsp.<br>append) "..." to signalize that the string is stripped. If WIDTH >= length<br>of STR the always STR is returned. If either WIDTH or length of STR is < 5<br>then an empty string is returned because stripping makes no sense here."',
          prototype : '(defun ecb-fit-str-to-width (str width from)',
          parameter : 'str width from',
          lispcode : '(defun ecb-fit-str-to-width (str width from)<br>  (let ((len-str (length str)))<br>    (if (>= width len-str)<br>        str<br>      (if (or (< len-str 5) ;; we want at least two characters visible of str<br>              (< width 5))<br>          <apo><apo><br>        (if (equal from <tick>left)<br>            (concat <apo>...<apo> (substring str (* -1 (- width 3))))<br>          (concat (substring str 0 (- width 3)) <apo>...<apo>))))))<br>'
        },
        {
          function : 'ecb-fit-window-to-buffer',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Make WINDOW the right height to display its contents exactly.<br>If WINDOW is omitted or nil, it defaults to the selected window.<br>If the optional argument MAX-HEIGHT is supplied, it is the maximum height<br>  the window is allowed to be, defaulting to the frame height.<br>If the optional argument MIN-HEIGHT is supplied, it is the minimum<br>  height the window is allowed to be, defaulting to `window-min-height".<br><br>MAX-HEIGHT and MIN-HEIGHT can be also afraction between 0 and 1: then this is<br>interpreted as that fraction of the frame-height of WINDOW (or the selected<br>window if WINDOW is nil).<br><br>The heights in MAX-HEIGHT and MIN-HEIGHT include the mode-line and/or<br>header-line."',
          prototype : '(defun ecb-fit-window-to-buffer (&optional window max-height min-height)',
          parameter : '&optional window max-height min-height',
          lispcode : '(defun ecb-fit-window-to-buffer (&optional window max-height min-height)<br>  (interactive)<br><br>  (when (null window)<br>    (setq window (selected-window)))<br>  (when (null max-height)<br>    (setq max-height (frame-height (window-frame window))))<br><br>  (let* ((buf<br>	  ;; Buffer that is displayed in WINDOW<br>	  (window-buffer window))<br>	 (window-height<br>	  ;; The current height of WINDOW<br>	  (ecb-window-full-height window)) ;; KB: was window-height<br>         (max-height-norm (ecb-normalize-number max-height<br>                                                (frame-height (window-frame window))))<br>         (min-height-norm (and min-height<br>                               (ecb-normalize-number min-height<br>                                                     (frame-height (window-frame window)))))<br>	 (desired-height<br>	  ;; The height necessary to show the buffer displayed by WINDOW<br>	  ;; (<backtick>count-screen-lines<tick> always works on the current buffer).<br>	  (with-current-buffer buf<br>	    (+ (ecb-count-screen-lines)<br>	       ;; If the buffer is empty, (count-screen-lines) is<br>	       ;; zero.  But, even in that case, we need one text line<br>	       ;; for cursor.<br>	       (if (= (point-min) (point-max))<br>		   1 0)<br>	       ;; For non-minibuffers, count the mode-line, if any<br>	       (if (and (not (window-minibuffer-p window))<br>			mode-line-format)<br>		   1 0)<br>	       ;; Count the header-line, if any<br>               (if header-line-format 1 0))))<br>	 (delta<br>	  ;; Calculate how much the window height has to change to show<br>	  ;; desired-height lines, constrained by MIN-HEIGHT and MAX-HEIGHT.<br>	  (- (max (min desired-height max-height-norm)<br>		  (or min-height-norm window-min-height))<br>	     window-height))<br>	 ;; We do our own height checking, so avoid any restrictions due to<br>	 ;; window-min-height.<br>	 (window-min-height 1))<br><br>    ;; Don<tick>t try to redisplay with the cursor at the end<br>    ;; on its own line--that would force a scroll and spoil things.<br>    (when (with-current-buffer buf<br>	    (and (ecb-eobp) (ecb-bolp) (not (ecb-bobp))))<br>      (set-window-point window (1- (window-point window))))<br><br>    (save-selected-window<br>      (select-window window)<br><br>      ;; Adjust WINDOW to the nominally correct size (which may actually<br>      ;; be slightly off because of variable height text, etc).'
        },
        {
          function : 'ecb-fix-filename',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Normalizes path- and filenames for ECB. If FILENAME is not nil its pure<br>filename (i.e. without directory part) will be concatenated to PATH. The<br>result will never end with the directory-separator! If SUBSTITUTE-ENV-VARS is<br>not nil then in both PATH and FILENAME env-var substitution is done. If the<br>`system-type" is "cygwin32 then the path is converted to win32-path-style!"',
          prototype : '(defun ecb-fix-filename (path &optional filename substitute-env-vars)',
          parameter : 'path &optional filename substitute-env-vars',
          lispcode : '(defun ecb-fix-filename (path &optional filename substitute-env-vars)<br>  (when (stringp path)<br>    (or (ecb-fixed-filename-cache-get path filename)<br>        (let ((remote-path (ecb-remote-path path))<br>              (norm-path nil)<br>              (result nil))<br>          (if (or (not remote-path)<br>                  (ecb-host-accessible-p (nth 1 remote-path)))<br>              (progn<br>                (setq norm-path (expand-file-name path))<br>                ;; substitute environment-variables<br>                (setq norm-path (expand-file-name (if substitute-env-vars<br>                                                      (substitute-in-file-name norm-path)<br>                                                    norm-path))))<br>            (setq norm-path path))<br>          ;; For windows systems we normalize drive-letters to downcase<br>          (setq norm-path (if (and (member system-type <tick>(windows-nt cygwin32))<br>                                   (> (length norm-path) 1)<br>                                   (equal (aref norm-path 1) ?:))<br>                              (concat (downcase (substring norm-path 0 2))<br>                                      (substring norm-path 2))<br>                            norm-path))<br>          ;; delete a trailing directory-separator if there is any<br>          (setq norm-path (if (and (> (length norm-path) 1)<br>                                   (= (aref norm-path (1- (length norm-path)))<br>                                      (ecb-directory-sep-char path)))<br>                              (substring norm-path 0 (1- (length norm-path)))<br>                            norm-path))<br>          (setq result<br>                (concat norm-path<br>                        (if (stringp filename)<br>                            (concat (when (> (length norm-path) 1)<br>                                      ;; currently all protocols like tramp,<br>                                      ;; ange-ftp or efs support only not<br>                                      ;; windows-remote-hosts ==> we must not<br>                                      ;; add a backslash here (would be done<br>                                      ;; in case of a native Windows-XEmacs)'
        },
        {
          function : 'ecb-fixed-filename-cache-dump',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Dump the whole FIXED-FILENAMES-cache. If NO-NIL-VALUE is not nil then these<br>cache-entries are not dumped. This command is not intended for end-users of ECB."',
          prototype : '(defun ecb-fixed-filename-cache-dump (&optional no-nil-value)',
          parameter : '&optional no-nil-value',
          lispcode : '(defun ecb-fixed-filename-cache-dump (&optional no-nil-value)<br>  (interactive <apo>P<apo>)<br>  (ecb-multicache-print-subcache <tick>ecb-filename-cache<br>                                 <tick>FIXED-FILENAMES<br>                                 no-nil-value))<br>'
        },
        {
          function : 'ecb-format-bucket-name',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Format NAME as a bucket-name according to `ecb-bucket-node-display".<br>If optional arg IGNORE-PREFIX-SUFFIX is not nil then<br>these settings of `ecb-bucket-node-display" are ignored. If IGNORE-BUCKET-FACE<br>it t then the face of `ecb-bucket-node-display" is completely ignored, if it<br>is "only-name then the face of `ecb-bucket-node-display" is only ignored for<br>NAME but not for a prefix or suffix of `ecb-bucket-node-display" (if any)."',
          prototype : '(defun ecb-format-bucket-name (name &optional ignore-prefix-suffix ignore-bucket-face)',
          parameter : 'name &optional ignore-prefix-suffix ignore-bucket-face',
          lispcode : '(defun ecb-format-bucket-name (name &optional ignore-prefix-suffix ignore-bucket-face)<br>  (let ((formated-prefix (unless ignore-prefix-suffix<br>                           (if (eq ignore-bucket-face t)<br>                               (nth 0 ecb-bucket-node-display)<br>                             (ecb-merge-face-into-text<br>                              (nth 0 ecb-bucket-node-display)<br>                              (nth 2 ecb-bucket-node-display)))))<br>        (formated-suffix (unless ignore-prefix-suffix<br>                           (if (eq ignore-bucket-face t)<br>                               (nth 1 ecb-bucket-node-display)<br>                             (ecb-merge-face-into-text<br>                              (nth 1 ecb-bucket-node-display)<br>                              (nth 2 ecb-bucket-node-display)))))<br>        (formatted-name (if ignore-bucket-face<br>                            name<br>                          (ecb-merge-face-into-text name (nth 2 ecb-bucket-node-display)))))<br>    (concat formated-prefix formatted-name formated-suffix)))'
        },
        {
          function : 'ecb-full-trim',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Applies `ecb-trim" and `ecb-middle-trim" to STR."',
          prototype : '(defun ecb-full-trim (str)',
          parameter : 'str',
          lispcode : '(defun ecb-full-trim (str)<br>  (ecb-excessive-trim (ecb-trim str)))'
        },
        {
          function : 'ecb-function-at-point',
          filename : 'ecb/ecb-symboldef.el',
          docstring : '  "Return the function whose name is around point.<br>If that gives no function, return the function which is called by the<br>list containing point.  If that doesn"t give a function, return nil."',
          prototype : '(defun ecb-function-at-point ()',
          parameter : '',
          lispcode : '(defun ecb-function-at-point ()<br>  (or (ignore-errors<br>	(with-syntax-table emacs-lisp-mode-syntax-table<br>	  (save-excursion<br>	    (or (not (zerop (skip-syntax-backward <apo>_w<apo>)))<br>		(eq (char-syntax (char-after (point))) ?w)<br>		(eq (char-syntax (char-after (point))) ?_)<br>		(forward-sexp -1))<br>	    (skip-chars-forward <apo><backtick><tick><apo>)<br>	    (let ((obj (read (current-buffer))))<br>	      (and (symbolp obj) (fboundp obj) obj)))))<br>      (ignore-errors<br>	(save-excursion<br>	  (save-restriction<br>	    (narrow-to-region (max (point-min) (- (point) 1000))<br>			      (point-max))<br>	    (backward-up-list 1)<br>	    (forward-char 1)<br>	    (let (obj)<br>	      (setq obj (read (current-buffer)))<br>	      (and (symbolp obj) (fboundp obj) obj)))))))'
        },
        {
          function : 'ecb-generate-node-name',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Generate a new name from TEXT-NAME by adding an appropriate image according<br>to ICON-NAME to the first FIRST-CHARS of TEXT-NAME. If FIRST-CHARS is < 0 then<br>a string with length abs(FIRST-CHARS) is created, the image is applied to<br>this new string and this "image"-string is added to the front of TEXT-NAME.<br>If no image can be found for ICON-NAME then the original TEXT-NAME is<br>returned. NAME-OF-BUFFER is the name of the tree-buffer where the resulting<br>node-name will be displayed.<br><br>If an image is added then two text-properties are added to the FIRST-CHARS of<br>the returned string: "tree-buffer-image-start which holds 0 as value and<br>"tree-buffer-image-length which holds the absolute value of FIRST-CHARS<br>value."',
          prototype : '(defun ecb-generate-node-name (text-name first-chars icon-name name-of-buffer)',
          parameter : 'text-name first-chars icon-name name-of-buffer',
          lispcode : '(defun ecb-generate-node-name (text-name first-chars icon-name name-of-buffer)<br>  (let ((image nil)<br>        (ret nil))<br>    (with-current-buffer name-of-buffer<br>      (setq image (and icon-name (tree-buffer-find-image icon-name)))<br>      (setq ret<br>            (if image<br>                (if (> first-chars 0)<br>                    (tree-buffer-add-image-icon-maybe<br>                     0 first-chars text-name image)<br>                  (concat (tree-buffer-add-image-icon-maybe<br>                           0 (- first-chars)<br>                           (make-string (- first-chars) ? ) image)<br>                          text-name))<br>              text-name)))<br>    ret))<br>'
        },
        {
          function : 'ecb-get-all-ecb-options',
          filename : 'ecb/ecb-upgrade.el',
          parameter : '',
          lispcode : '(defun ecb-get-all-ecb-options ()<br>  (or ecb-all-options<br>      (mapatoms<br>       (lambda (symbol)<br>         (when (and (save-match-data (string-match <apo>ecb-<apo> (symbol-name symbol)))<br>                    (get symbol <tick>custom-type))<br>           (setq ecb-all-options (cons symbol ecb-all-options)))))))'
        },
        {
          function : 'ecb-get-best-matching-source-path',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return the best-matching source-path for PATH.<br>It"s either nil if no source-path matches or a cons in the sense of<br>`ecb-normed-source-paths"."',
          prototype : '(defun ecb-get-best-matching-source-path (path)',
          parameter : 'path',
          lispcode : '(defun ecb-get-best-matching-source-path (path)<br>  (car (ecb-matching-source-paths path t)))'
        },
        {
          function : 'ecb-get-compile-window-buffer',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return the buffer currently displayed in the compile-window or nil if there<br>is no compile-window displayed."',
          prototype : '(defun ecb-get-compile-window-buffer ()',
          parameter : '',
          lispcode : '(defun ecb-get-compile-window-buffer ()<br>  (if (ecb-compile-window-live-p)<br>      (window-buffer ecb-compile-window)))'
        },
        {
          function : 'ecb-get-current-tag-table',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Return the current tag-table of the current source-buffer returned by<br>`ecb-post-process-taglist". Use always this function if you just need the<br>current post-processed tag-table of the current buffer and you do not need or<br>want rebuilding the Methods-buffer."',
          prototype : '(defun ecb-get-current-tag-table ()',
          parameter : '',
          lispcode : '(defun ecb-get-current-tag-table ()<br>  ecb-current-post-processed-tag-table)'
        },
        {
          function : 'ecb-get-current-visible-ecb-buffers',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return a list of all buffer-objects displayed in a currently visible and<br>dedicated special ecb-window. The superset of all possible (because<br>registered) special ecb-buffers are available by<br>`ecb-dedicated-special-buffers".<br>If window-list is not nil then this list is used otherwise it will be<br>computed by `ecb-canonical-ecb-windows-list"."',
          prototype : '(defun ecb-get-current-visible-ecb-buffers (&optional window-list)',
          parameter : '&optional window-list',
          lispcode : '(defun ecb-get-current-visible-ecb-buffers (&optional window-list)<br>  (mapcar (function (lambda (window)<br>                      (window-buffer window)))<br>          (or window-list (ecb-canonical-ecb-windows-list))))'
        },
        {
          function : 'ecb-get-definition-list-by-semanticdb',
          filename : 'ecb/ecb-semantic.el',
          docstring : '  "Search for the definitions of the tag with TAG-NAME and TAG-CLASS.<br>The search is performed via semanticdb.<br>`semanticdb-search-system-databases" is taken into account.<br>Return-value is either nil (if no positioned tag can be found<br>for TAG-NAME and TAG-CLASS) or a positioned semantic-tag for the<br>type-definition of TAG-NAME.<br><br>If TAG-CLASS is nil then tags regardless of their class are returned as long<br>as they match with TAG-NAME."',
          prototype : '(defun ecb-get-definition-list-by-semanticdb (tag-name &optional tag-class)',
          parameter : 'tag-name &optional tag-class',
          lispcode : '(defun ecb-get-definition-list-by-semanticdb (tag-name &optional tag-class)<br>  (when (and (featurep <tick>semanticdb) (ecb--semanticdb-minor-mode-p))<br>    ;; With semantic 2.X we do a full featured database-search.<br>    (let* ((search-result (ecb--semanticdb-find-tags-by-name tag-name))<br>           (result-tags (and search-result<br>                             (ecb--semanticdb-strip-find-results search-result)))<br>           (tag-numbers nil))<br>      (when (and result-tags<br>                 ;; some paranoia<br>                 (= (length result-tags)<br>                    (ecb--semanticdb-find-result-length search-result)))<br>        ;; First we check which tags in the stripped search-result<br>        ;; (result-tags) are of the right tag-class and with positions (means<br>        ;; associated with a file) and collect their sequence-positions in<br>        ;; tag-numbers.<br>        (dotimes (i (length result-tags))<br>          (if (and (or (null tag-class) ;; we are interested in any tags regardless of class<br>                       (equal (ecb--semantic-tag-class (nth i result-tags)) tag-class))<br>                   (ecb--semantic-tag-with-position-p (nth i result-tags)))<br>              (setq tag-numbers (cons i tag-numbers))))<br>        (setq tag-numbers (nreverse tag-numbers))<br>        ;; Now we get for each element in tag-numbers the related<br>        ;; filename (where the tag is defined) and collect them in an alist<br>        ;; where each element is a cons-cell where car is the filename and'
        },
        {
          function : 'ecb-get-ecb-window-by-number',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return that ecb-window with number ECB-WIN-NR. If ECB-WIN-LIST is set<br>then get it from that list otherwise from `ecb-canonical-ecb-windows-list".<br>ECB-WIN-NR must be an integer between 1 and length of ECB-WIN-LIST (rsp.<br>`ecb-canonical-ecb-windows-list")."',
          prototype : '(defun ecb-get-ecb-window-by-number (ecb-win-nr &optional ecb-win-list)',
          parameter : 'ecb-win-nr &optional ecb-win-list',
          lispcode : '(defun ecb-get-ecb-window-by-number (ecb-win-nr &optional ecb-win-list)<br>  (nth (1- ecb-win-nr) (or ecb-win-list (ecb-canonical-ecb-windows-list))))'
        },
        {
          function : 'ecb-get-ecb-window-location',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return the location an ecb-window reside in the ecb-frame.<br>The location is one of "left-side, "right-side or "top-side, depending on the<br>current layout-type only a subset is possible.<br>If ECB-WINDOW is nil then the location of the selected window is returned<br>otherwise the location of ECB-WINDOW. If RESIDUAL-WINDOW is not nil it must be<br>one of the windows `ecb-canonical-residual-windows-list" would compute. If nil<br>then it will be computed.<br><br>Caution: This function does not check if ECB-WINDOW (rsp. the selected<br>window) is an ecb-window! But only in this case the returned value is reliable!"',
          prototype : '(defun ecb-get-ecb-window-location (&optional ecb-window residual-window)',
          parameter : '&optional ecb-window residual-window',
          lispcode : '(defun ecb-get-ecb-window-location (&optional ecb-window residual-window)<br>  (let* ((ecb-win (or ecb-window (selected-window)))<br>         (layout-type (ecb-get-layout-type))<br>         (res-win (or residual-window<br>                      (car (ecb-canonical-residual-windows-list)))))<br>    (if (and (windowp ecb-win)<br>             (equal ecb-frame (window-frame ecb-win))<br>             (windowp res-win))<br>        (cl-case layout-type<br>          (left <tick>left-side)<br>          (right <tick>right-side)<br>          (top <tick>top-side)<br>          (left-right (if (> (nth 0 (ecb-window-edges res-win))<br>                             (nth 0 (ecb-window-edges ecb-win)))<br>                          <tick>left-side<br>                        <tick>right-side)))<br>      (error <apo>ECB %s: Serious window layout error for layout-type %s, ecb-win:%s,first-rest-win:%s<apo><br>             ecb-version layout-type ecb-win res-win))))'
        },
        {
          function : 'ecb-get-ecb-window-sizes',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Get all window-sizes of current visible ecb-windows. If FIX is not nil then<br>fixed sizes are used otherwise fractions of current frame-width rsp. -height.<br>If a permanent compile-window is visible then window-heights will be computed<br>as fractions of current (frame-height minus current visible<br>compile-window-height)!<br>Uses ECB-WIN-LIST or - if nil - computes it with the function<br>`ecb-canonical-ecb-windows-list".<br><br>Result is a list with an element for each visible ecb-window whereas each<br>element is a cons where the car is the variable-symbol which holds the<br>buffer-name a window displays currently. The cdr is a cons where car is the<br>width and the cdr is the height of the window."',
          prototype : '(defun ecb-get-ecb-window-sizes (&optional fix ecb-win-list)',
          parameter : '&optional fix ecb-win-list',
          lispcode : '(defun ecb-get-ecb-window-sizes (&optional fix ecb-win-list)<br>  (let ((ref-height (if (ecb-compile-window-live-p)<br>                        (- (frame-height ecb-frame)<br>                           (ecb-window-full-height ecb-compile-window))<br>                      (frame-height ecb-frame)))<br>        (ref-width (frame-width ecb-frame)))<br>    (mapcar (function<br>             (lambda (window)<br>               ;; here we always store buffer-name-symbols!<br>               (cons (ecb-ecb-buffer-registry-get-symbol (buffer-name (window-buffer window)))<br>                     (ecb-get-window-size window<br>                                          fix<br>                                          (cons ref-width ref-height)))))'
        },
        {
          function : 'ecb-get-edit-area-size',
          filename : 'ecb/ecb-layout.el',
          parameter : '&optional win-list',
          lispcode : '(defun ecb-get-edit-area-size (&optional win-list)<br>  (let ((layout-type (ecb-get-layout-type ecb-layout-name))<br>        (ecb-win-list (ecb-canonical-ecb-windows-list win-list))<br>        (comp-win-height (if (equal (ecb-compile-window-state) <tick>visible)<br>                             (ecb-window-full-height ecb-compile-window)<br>                           0)))<br>    (if (null ecb-win-list)<br>        (cons (frame-width ecb-frame)<br>              (- (frame-height ecb-frame) comp-win-height))<br>      (cl-case layout-type<br>        (top<br>         (cons (frame-width ecb-frame)<br>               (- (frame-height ecb-frame)<br>                  (ecb-window-full-height (ecb-first ecb-win-list))<br>                  comp-win-height)))<br>        (left-right<br>         (cons (- (frame-width ecb-frame)<br>                  (ecb-window-full-width (ecb-first ecb-win-list))<br>                  (ecb-window-full-width (ecb-last ecb-win-list)))<br>               (- (frame-height ecb-frame)<br>                  comp-win-height)))<br>        (otherwise<br>         (cons (- (frame-width ecb-frame)<br>                  (ecb-window-full-width (ecb-first ecb-win-list)))<br>               (- (frame-height ecb-frame)<br>                  comp-win-height)))))))<br><br>'
        },
        {
          function : 'ecb-get-edit-window',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Get the correct edit-window. Which one is the correct one depends on the<br>value of OTHER-EDIT-WINDOW (which is a value returned by<br>`ecb-combine-ecb-button/edit-win-nr") and `ecb-mouse-click-destination".<br>- OTHER-EDIT-WINDOW is nil: Get the edit-window according to the option<br>  `ecb-mouse-click-destination".<br>- OTHER-EDIT-WINDOW is t: Get the next edit-window in the cyclic list of<br>  current edit-windows starting either from the left-top-most one or from the<br>  last edit-window with point (depends on<br>  `ecb-mouse-click-destination").<br>- OTHER-EDIT-WINDOW is an integer: Get exactly the edit-window with that<br>  number > 0."',
          prototype : '(defun ecb-get-edit-window (other-edit-window)',
          parameter : 'other-edit-window',
          lispcode : '(defun ecb-get-edit-window (other-edit-window)<br>  (let ((edit-win-list (ecb-canonical-edit-windows-list)))<br>    (cl-typecase other-edit-window<br>      (null<br>       (if (eq ecb-mouse-click-destination <tick>left-top)<br>           (car edit-win-list)<br>         ecb-last-edit-window-with-point))<br>      (integer<br>       (ecb-get-edit-window-by-number other-edit-window edit-win-list))<br>      (otherwise<br>       (ecb-next-listelem edit-win-list<br>                          (if (eq ecb-mouse-click-destination <tick>left-top)<br>                              (car edit-win-list)<br>                            ecb-last-edit-window-with-point))))))<br>'
        },
        {
          function : 'ecb-get-edit-window-by-number',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return that edit-window with number EDIT-WIN-NR. If EDIT-WIN-LIST is set<br>then get it from that list otherwise from `ecb-canonical-edit-windows-list".<br>EDIT-WIN-NR must be an integer between 1 and length of EDIT-WIN-LIST (rsp.<br>`ecb-canonical-edit-windows-list")."',
          prototype : '(defun ecb-get-edit-window-by-number (edit-win-nr &optional edit-win-list)',
          parameter : 'edit-win-nr &optional edit-win-list',
          lispcode : '(defun ecb-get-edit-window-by-number (edit-win-nr &optional edit-win-list)<br>  (nth (1- edit-win-nr) (or edit-win-list (ecb-canonical-edit-windows-list))))'
        },
        {
          function : 'ecb-get-face-for-type-tag',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Return the face set in `ecb-type-tag-display" for current major-mode and<br>TYPE-SPECIFIER or nil."',
          prototype : '(defun ecb-get-face-for-type-tag (type-specifier)',
          parameter : 'type-specifier',
          lispcode : '(defun ecb-get-face-for-type-tag (type-specifier)<br>  (let ((mode-display (cdr (assoc major-mode ecb-type-tag-display)))<br>        (default-display (cdr (assoc <tick>default ecb-type-tag-display))))<br>    (or (nth 2 (assoc type-specifier mode-display))<br>        (and (null mode-display)<br>             (nth 2 (assoc type-specifier default-display))))))<br>'
        },
        {
          function : 'ecb-get-file-info-text',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return a file-info string for a file in the ECB sources buffer"',
          prototype : '(defun ecb-get-file-info-text (file)',
          parameter : 'file',
          lispcode : '(defun ecb-get-file-info-text (file)<br>  (let ((attrs (ecb-file-attributes file)))<br>    (format <apo>%s %8s %4d %10d %s %s<apo><br>	    (nth 8 attrs)<br>	    (user-login-name (nth 2 attrs))<br>	    (nth 3 attrs)<br>	    (nth 7 attrs)<br>	    (format-time-string <apo>%Y/%m/%d %H:%M<apo> (nth 5 attrs))<br>            (if (equal (cdr ecb-sources-show-node-info) <tick>file-info-full)<br>                file<br>              (ecb-file-name-nondirectory file)))<br>    ))<br>'
        },
        {
          function : 'ecb-get-files-and-subdirs',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return a cons cell where car is a list of all files to display in DIR and<br>cdr is a list of all subdirs to display in DIR. Both lists are sorted<br>according to `ecb-sources-sort-method"."',
          prototype : '(defun ecb-get-files-and-subdirs (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-get-files-and-subdirs (dir)<br>  (when (file-accessible-directory-p dir)<br>      (or (ecb-files-and-subdirs-cache-get dir)<br>	  ;; dir is not cached<br>	  (let ((files (ecb-directory-files dir nil nil t))<br>		(source-regexps (or (ecb-check-directory-for-source-regexps<br>				     (ecb-fix-filename dir))<br>				    <tick>((<apo><apo>) (<apo><apo>))))<br>		(cvsignore-files (if (ecb-check-directory-for-cvsignore-exclude dir)<br>				     (ecb-files-from-cvsignore dir)))<br>		sorted-files source-files subdirs cached-value)<br>	    ;; if necessary sort FILES<br>	    (setq sorted-files<br>		  (if ecb-sources-sort-method<br>		      (sort files (ecb-get-sources-sort-function<br>				   ecb-sources-sort-method))<br>		    files))<br>	    ;; divide real files and subdirs. For really large directories (~ >=<br>	    ;; 2000 entries) this is the performance-bottleneck in the<br>	    ;; file-browser of ECB.<br>	    (dolist (file sorted-files)<br>	      (if (ecb-file-directory-p (ecb-fix-filename dir file))<br>		  (when (not (ecb-check-dir-exclude file))<br>;;                 (when (not (ecb-file-accessible-directory-p file))<br>;;                   (ecb-merge-face-into-text file<br>;;                                             ecb-directory-not-accessible-face))<br>		    (setq subdirs (append subdirs (list file))))<br>		(when (and (not (member file cvsignore-files))<br>			   (or (ecb-match-regexp-list file (cadr source-regexps))'
        },
        {
          function : 'ecb-get-layout-type',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return the type of current layout or of layout NAME."',
          prototype : '(defun ecb-get-layout-type (&optional name)',
          parameter : '&optional name',
          lispcode : '(defun ecb-get-layout-type (&optional name)<br>  (let ((n (or name ecb-layout-name)))<br>    (cdr (assoc n ecb-available-layouts))))'
        },
        {
          function : 'ecb-get-other-window',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return the "other window" according to `ecb-other-window-behavior".<br>Returns the window NTH-WINDOW steps away from the current window. If<br>NTH-WINDOW is nil then it is treated as 1."',
          prototype : '(defun ecb-get-other-window (nth-window)',
          parameter : 'nth-window',
          lispcode : '(defun ecb-get-other-window (nth-window)<br>  (let* ((nth-win (or nth-window 1))<br>         (windows-list (ecb-canonical-windows-list))<br>         (edit-win-list (ecb-canonical-edit-windows-list windows-list))<br>         (ecb-win-list (ecb-canonical-ecb-windows-list windows-list))<br>         (point-loc (ecb-where-is-point windows-list))<br>         (compwin-state (ecb-compile-window-state))<br>         (minibuf-win (if (> (minibuffer-depth) 0)<br>                          (minibuffer-window ecb-frame))))<br>    (if (functionp ecb-other-window-behavior)<br>        (let ((other-win (funcall ecb-other-window-behavior<br>                                  windows-list<br>                                  edit-win-list<br>                                  ecb-win-list<br>                                  (if (equal compwin-state <tick>visible)<br>                                      ecb-compile-window)<br>                                  minibuf-win<br>                                  point-loc<br>                                  nth-window)))<br>          (if (and other-win (window-live-p other-win))<br>              other-win<br>            (ecb-next-listelem (append windows-list (list minibuf-win))<br>                               (selected-window) nth-win)))<br>      (if minibuf-win<br>          (ecb-get-other-window-minibuf-active windows-list<br>                                               edit-win-list<br>                                               ecb-win-list<br>                                               (if (equal compwin-state <tick>visible)<br>                                                   ecb-compile-window)<br>                                               minibuf-win<br>                                               point-loc<br>                                               nth-window)<br>        ;; in the following there is no minibuffer active...<br>        (cl-case ecb-other-window-behavior<br>          (all<br>           (ecb-next-listelem windows-list<br>                              (selected-window) nth-win))<br>          (only-edit<br>           (if (not (equal <tick>edit (car point-loc))) ;; point not in an edit-window<br>               (if (= nth-win 1)<br>                   (or (and ecb-last-edit-window-with-point<br>                            (window-live-p ecb-last-edit-window-with-point)<br>                            ecb-last-edit-window-with-point)<br>                       (car edit-win-list))<br>                 (ecb-next-listelem windows-list<br>                                    (selected-window) nth-win))<br>             (ecb-next-listelem edit-win-list<br>                                (selected-window) nth-win)))<br>          (edit-and-compile<br>           (if (member (car point-loc) <tick>(ecb other-dedicated))<br>               (ecb-next-listelem windows-list<br>                                  (selected-window) nth-win)<br>             ;; point stays either in edit- or compile-window<br>             (ecb-next-listelem (append edit-win-list<br>                                        (if (equal compwin-state <tick>visible)<br>                                            (list ecb-compile-window)))<br>                                (selected-window)<br>                                nth-win)))<br>          (otherwise ;; = <tick>smart<br>           (ecb-get-other-window-smart windows-list<br>                                       edit-win-list<br>                                       ecb-win-list<br>                                       (if (equal compwin-state <tick>visible)<br>                                           ecb-compile-window)<br>                                       minibuf-win<br>                                       point-loc<br>                                       nth-window)))))))'
        },
        {
          function : 'ecb-get-other-window-minibuf-active',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Implements the situation of an active minibuffer, see<br>`ecb-other-window-behavior"."',
          prototype : '(defun ecb-get-other-window-minibuf-active (win-list                                            edit-win-list                                            ecb-win-list                                            comp-win                                            minibuf-win                                            point-loc                                            nth-window)',
          parameter : 'win-list edit-win-list ecb-win-list comp-win minibuf-win point-loc nth-window',
          lispcode : '(defun ecb-get-other-window-minibuf-active (win-list<br>                                            edit-win-list<br>                                            ecb-win-list<br>                                            comp-win<br>                                            minibuf-win<br>                                            point-loc<br>                                            nth-window)<br>  (let ((nth-win (or nth-window 1)))<br>    (if (equal (car point-loc) <tick>minibuf)<br>        (if (= nth-win 1)<br>            (or (if (and minibuffer-scroll-window<br>                         (window-live-p minibuffer-scroll-window)<br>                         (equal (window-frame minibuffer-scroll-window)<br>                                ecb-frame))<br>                    minibuffer-scroll-window)<br>                comp-win<br>                ecb-last-edit-window-with-point)<br>          (ecb-next-listelem (append edit-win-list<br>                                     (if comp-win<br>                                         (list comp-win))<br>                                     (if minibuf-win<br>                                         (list minibuf-win)))<br>                             (selected-window) nth-win))<br>      (ecb-next-listelem (append win-list (if minibuf-win (list minibuf-win)))<br>                         (selected-window) nth-win))))<br><br>'
        },
        {
          function : 'ecb-get-other-window-smart',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Implements the smart-setting of `ecb-other-window-behavior"."',
          prototype : '(defun ecb-get-other-window-smart (win-list                                   edit-win-list                                   ecb-win-list                                   comp-win                                   minibuf-win                                   point-loc                                   nth-window)',
          parameter : 'win-list edit-win-list ecb-win-list comp-win minibuf-win point-loc nth-window',
          lispcode : '(defun ecb-get-other-window-smart (win-list<br>                                   edit-win-list<br>                                   ecb-win-list<br>                                   comp-win<br>                                   minibuf-win<br>                                   point-loc<br>                                   nth-window)<br>  (if minibuf-win<br>      ;; if we have an active mini-buffer we delegate this to<br>      ;; <backtick>ecb-get-other-window-minibuf-active<tick><br>      (ecb-get-other-window-minibuf-active win-list<br>                                           edit-win-list<br>                                           ecb-win-list<br>                                           comp-win<br>                                           minibuf-win<br>                                           point-loc<br>                                           nth-window)<br>    ;; here we have no active minibuffer!<br>    (let ((nth-win (or nth-window 1)))<br>      (cl-case (car point-loc)<br>        (ecb<br>         (ecb-next-listelem (if (and ecb-win-list<br>                                     (= 1 (length ecb-win-list)))<br>                                (append ecb-win-list edit-win-list)<br>                              ecb-win-list)<br>                            (selected-window) nth-win))<br>        (compile<br>         (if (= nth-win 1)<br>             (or (and ecb-last-edit-window-with-point<br>                      (window-live-p ecb-last-edit-window-with-point)<br>                      ecb-last-edit-window-with-point)<br>                 (car edit-win-list))<br>           (ecb-next-listelem (append edit-win-list<br>                                      (list (selected-window)))<br>                              (selected-window)<br>                              nth-win)))<br>        (other-dedicated<br>         (ecb-next-listelem win-list<br>                            (selected-window)<br>                            nth-win))<br>        (otherwise ;; must be an edit-window<br>         (ecb-next-listelem (append edit-win-list<br>                                    (if (and comp-win<br>                                             (= (length edit-win-list)<br>                                                1))'
        },
        {
          function : 'ecb-get-real-curr-tag',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Get the "real" current tag. This will be in most cases the tag returned<br>by `ecb--semantic-current-tag" but there are exceptions:<br><br>- If the current-tag is an argument-tag of a function-tag then we are not<br>  interested in this argument-tag but in its parent-tag which is the<br>  function-tag the argument belongs.<br>- If the current-tag is a label-tag then we are interested in the type-tag<br>  which contains this label (e.g. usefull in c++ and the labels public,<br>  protected and private)."',
          prototype : '(defun ecb-get-real-curr-tag ()',
          parameter : '',
          lispcode : '(defun ecb-get-real-curr-tag ()<br>  (let* ((tagstack (reverse (ecb--semantic-find-tag-by-overlay)))<br>         (curr-tag (car tagstack))<br>         (next-tag (car (cdr tagstack)))<br>         )<br>    (if (or (and (equal (ecb--semantic-tag-class curr-tag) <tick>variable)<br>                 (equal (ecb--semantic-tag-class next-tag) <tick>function)<br>                 (member curr-tag<br>                         (ecb--semantic-tag-function-arguments next-tag)))<br>            (equal (ecb--semantic-tag-class curr-tag) <tick>label))<br>        (setq curr-tag next-tag))<br>    curr-tag))<br>'
        },
        {
          function : 'ecb-get-remove-specifier-flag-for-type-tag',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Return the remove-specifier-flag set in `ecb-type-tag-display" for<br>current major-mode and TYPE-SPECIFIER or nil."',
          prototype : '(defun ecb-get-remove-specifier-flag-for-type-tag (type-specifier)',
          parameter : 'type-specifier',
          lispcode : '(defun ecb-get-remove-specifier-flag-for-type-tag (type-specifier)<br>  (let ((mode-display (cdr (assoc major-mode ecb-type-tag-display)))<br>        (default-display (cdr (assoc <tick>default ecb-type-tag-display))))<br>    (or (nth 1 (assoc type-specifier mode-display))<br>        (and (null mode-display)<br>             (nth 1 (assoc type-specifier default-display))))))'
        },
        {
          function : 'ecb-get-show-tags-list',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Return the show-tags-list of `ecb-show-tags" for current major-mode."',
          prototype : '(defun ecb-get-show-tags-list ()',
          parameter : '',
          lispcode : '(defun ecb-get-show-tags-list ()<br>  (let ((mode-show-tag-list (cdr (assoc major-mode ecb-show-tags)))<br>        (default-show-tag-list (cdr (assoc <tick>default ecb-show-tags))))<br>    (or mode-show-tag-list<br>        (and (null mode-show-tag-list)<br>             default-show-tag-list))))'
        },
        {
          function : 'ecb-get-source-buffer-for-tag-filter',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Return the source-buffer of the tag-list which should be filtered."',
          prototype : '(defun ecb-get-source-buffer-for-tag-filter ()',
          parameter : '',
          lispcode : '(defun ecb-get-source-buffer-for-tag-filter ()<br>  (cond ((ecb-point-in-edit-window-number)<br>         (current-buffer))<br>        ((equal (current-buffer)<br>                (ecb-buffer-obj ecb-methods-buffer-name))<br>         (ecb-methods-get-data-store <tick>source-buffer))<br>        (t (or (and ecb-last-source-buffer<br>                    (buffer-live-p ecb-last-source-buffer)<br>                    ecb-last-source-buffer)<br>               (ecb-error <apo>There is no source-file to filter!<apo>)))))'
        },
        {
          function : 'ecb-get-source-name',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Returns the source name of a file."',
          prototype : '(defun ecb-get-source-name (filename)',
          parameter : 'filename',
          lispcode : '(defun ecb-get-source-name (filename)<br>  (let ((f (ecb-file-name-nondirectory filename)))<br>    (if ecb-show-source-file-extension<br>        f<br>      (ecb-file-name-sans-extension f))))'
        },
        {
          function : 'ecb-get-source-paths-from-functions',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return a list of paths found by querying `ecb-source-path-functions"."',
          prototype : '(defun ecb-get-source-paths-from-functions ()',
          parameter : '',
          lispcode : '(defun ecb-get-source-paths-from-functions ()<br>  (let ((func ecb-source-path-functions)<br>	(paths nil)<br>	(rpaths nil))<br>    (while func<br>      (setq paths (append paths (funcall (car func)))<br>	    func (cdr func)))<br>    (while paths<br>      (setq rpaths (cons (ecb-fix-filename (car paths)) rpaths)<br>	    paths (cdr paths)))<br>    rpaths))<br>'
        },
        {
          function : 'ecb-get-sourcename-of-nodename',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Extract the name of the source from the node-name NODENAME.<br>This is for nodenames generated by `ecb-vc-generate-node-name" or<br>`ecb-generate-node-name" and it return exactly this part of NODENAME without<br>all the preceding stuff added by one of these functions."',
          prototype : '(defun ecb-get-sourcename-of-nodename (nodename)',
          parameter : 'nodename',
          lispcode : '(defun ecb-get-sourcename-of-nodename (nodename)<br>  (let* ((vc-ascii-icon-length (get-text-property<br>                                0<br>                                <tick>ecb-vc-ascii-icon-length<br>                                nodename))<br>         (prefix-length (or vc-ascii-icon-length<br>                            (or (get-text-property<br>                                 0<br>                                 <tick>tree-buffer-image-length<br>                                 nodename)<br>                                0))))<br>    (substring nodename prefix-length)))'
        },
        {
          function : 'ecb-get-sources-sort-function',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "According to SORT-METHOD (which can either be "name, "extension or nil)<br>and IGNORE-CASE return a function which can be used as argument for `sort"."',
          prototype : '(defun ecb-get-sources-sort-function (sort-method &optional ignore-case)',
          parameter : 'sort-method &optional ignore-case',
          lispcode : '(defun ecb-get-sources-sort-function (sort-method &optional ignore-case)<br>  (cl-case sort-method<br>    (name<br>     (function (lambda (a b)<br>                 (ecb-string< a b ecb-sources-sort-ignore-case))))<br>    (extension<br>     (function<br>      (lambda(a b)<br>        (let ((ext-a (ecb-file-name-extension a t))<br>              (ext-b (ecb-file-name-extension b t)))<br>          (if (ecb-string= ext-a ext-b ecb-sources-sort-ignore-case)<br>              (ecb-string< a b ecb-sources-sort-ignore-case)<br>            (ecb-string< ext-a ext-b ecb-sources-sort-ignore-case))))))<br>    (otherwise<br>     (function (lambda (a b)<br>                 nil)))))<br>'
        },
        {
          function : 'ecb-get-tag-display-function',
          filename : 'ecb/ecb-method-browser.el',
          parameter : '',
          lispcode : '(defun ecb-get-tag-display-function ()<br>  (let ((mode-display-fkt (cdr (assoc major-mode ecb-tag-display-function)))<br>        (default-fkt (cdr (assoc <tick>default ecb-tag-display-function))))<br>    (or (and (fboundp mode-display-fkt) mode-display-fkt)<br>        (and (fboundp default-fkt) default-fkt)<br>        <tick>ecb--semantic-format-tag-prototype)))<br>'
        },
        {
          function : 'ecb-get-tag-name',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Get the name of TAG with the appropriate fcn from<br>`ecb-tag-display-function".<br>This function MUST be called with the source-buffer as current buffer!"',
          prototype : '(defun ecb-get-tag-name (tag &optional parent-tag)',
          parameter : 'tag &optional parent-tag',
          lispcode : '(defun ecb-get-tag-name (tag &optional parent-tag)<br>  (condition-case nil<br>      (funcall (ecb-get-tag-display-function)<br>               tag parent-tag (ecb-font-lock-tags))<br>    (error (ecb--semantic-format-tag-prototype tag parent-tag<br>                                               (ecb-font-lock-tags)))))<br>'
        },
        {
          function : 'ecb-get-tag-parent-names',
          filename : 'ecb/ecb-method-browser.el',
          parameter : 'parents',
          lispcode : '(defun ecb-get-tag-parent-names (parents)<br>  (when parents<br>    (let* ((parent (car parents))<br>	   (name (cond<br>		  ((ecb--semantic-tag-p parent)<br>		   (ecb--semantic-format-tag-name parent nil (ecb-font-lock-tags)))<br>		  ((stringp parent)<br>		   (ecb--semantic--format-colorize-text parent <tick>type)))))<br>      (if name<br>	  (if (ecb-check-parent-for-exclude name)<br>	      (ecb-get-tag-parent-names (cdr parents))<br>	    (cons name (ecb-get-tag-parent-names (cdr parents))))<br>	(if (listp parent)<br>	    (append (ecb-get-tag-parent-names parent)<br>		    (ecb-get-tag-parent-names (cdr parents))))))))'
        },
        {
          function : 'ecb-get-tag-parents',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Return a list of parent-names already colorized by semantic. Currently<br>there is no distinction between superclasses and interfaces."',
          prototype : '(defun ecb-get-tag-parents (tag)',
          parameter : 'tag',
          lispcode : '(defun ecb-get-tag-parents (tag)<br>  (ecb-get-tag-parent-names<br>   (append (ecb--semantic-tag-type-superclasses tag)<br>           (ecb--semantic-tag-type-interfaces tag))))<br>;;    (ecb--semantic-tag-type-parent tag)))'
        },
        {
          function : 'ecb-get-tag-type-display',
          filename : 'ecb/ecb-method-browser.el',
          parameter : 'tag-type',
          lispcode : '(defun ecb-get-tag-type-display (tag-type)<br>  (let* ((show-tags-list (ecb-get-show-tags-list))<br>         (display (ecb-find-assoc tag-type show-tags-list)))<br>    (if display<br>	display<br>      (setq display (ecb-find-assoc t show-tags-list))<br>      (if display<br>	  display<br>	<tick>(t hidden nil)))))<br>'
        },
        {
          function : 'ecb-get-tags-for-non-semantic-files',
          filename : 'ecb/ecb-speedbar.el',
          docstring : '  "Get a tag-list for current source-file. This is done via the<br>`speedbar-fetch-dynamic-tags" mechanism which supports imenu and etags."',
          prototype : '(defun ecb-get-tags-for-non-semantic-files ()',
          parameter : '',
          lispcode : '(defun ecb-get-tags-for-non-semantic-files ()<br>  (require <tick>imenu)<br>  (if (member major-mode ecb-non-semantic-exclude-modes)<br>      nil<br>    (let* ((lst (let ((speedbar-dynamic-tags-function-list<br>                       (if (not (assoc major-mode<br>                                       ecb-non-semantic-parsing-function))<br>                           (list (cons <tick>speedbar-fetch-dynamic-imenu <tick>identity)<br>                                 (cons <tick>speedbar-fetch-dynamic-etags <tick>identity))<br>                         (list (cons (cdr (assoc major-mode<br>                                                 ecb-non-semantic-parsing-function))<br>                                     <tick>identity)))))<br>                  (speedbar-fetch-dynamic-tags (ecb-buffer-file-name<br>                                                (current-buffer)))))<br>           (tag-list (cdr lst))<br>           (methods speedbar-tag-hierarchy-method))<br><br>      ;; removing the imenu-Rescan-item<br>      (if (ecb-string= (car (car tag-list)) (car imenu--rescan-item))<br>          (setq tag-list (cdr tag-list)))<br>      ;; If imenu or etags returns already groups (etags will do this probably<br>      ;; not, but imenu will do this sometimes - e.g. with cperl) then we do not<br>      ;; regrouping with the speedbar-methods of<br>      ;; <backtick>speedbar-tag-hierarchy-method<tick>!<br>      (when (dolist (tag tag-list t)<br>              (if (or (speedbar-generic-list-positioned-group-p tag)<br>                      (speedbar-generic-list-group-p tag))<br>                  (cl-return nil)))'
        },
        {
          function : 'ecb-get-type-name-hierarchy-of-current-node',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Return the type-name-hierarchy of current node in form of a list whereas the<br>first element is the name of the tag of the current node itself, the second<br>element is the name of the type the current node belongs to, the third element<br>is the name of the parent-type of that type and so on. The last element in<br>this list is the topmost type-parent of the tag of the current node. If the<br>current node has no tag as data then nil is returned. If the tag of the<br>current node does not belong to a type-tag (e.g. a toplevel function) then<br>the returned list contains just the name of the tag of the current node."',
          prototype : '(defun ecb-get-type-name-hierarchy-of-current-node ()',
          parameter : '',
          lispcode : '(defun ecb-get-type-name-hierarchy-of-current-node ()<br>  (let ((type-hierarchy nil)<br>        (curr-node (tree-buffer-get-node-at-point)))<br>    (when (and curr-node<br>               (= (tree-node->type curr-node) ecb-methods-nodetype-tag))<br>      (while (progn<br>               (setq type-hierarchy (cons (ecb--semantic-tag-name<br>                                           (tree-node->data curr-node))<br>                                          type-hierarchy))<br>               (setq curr-node (ecb-get-type-node-of-node curr-node)))))<br>    (nreverse type-hierarchy)))<br>'
        },
        {
          function : 'ecb-get-type-name-hierarchy-of-current-tag',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Return the type-name-hierarchy of TAG in form of a list whereas the<br>first element is the name of the TAG itself, the second element is the name of<br>the type the TAG belongs to, the third element is the name of the parent-type<br>of that type and so on. The last element in this list is the topmost<br>type-parent of the TAG. If the TAG does not belong to a type-tag (e.g. a<br>toplevel function) then the returned list contains just the name of the<br>TAG. If TAG is nil then the current tag returned by `ecb-get-real-curr-tag" is<br>used; if point does not stay on a tag then nil is returned."',
          prototype : '(defun ecb-get-type-name-hierarchy-of-current-tag (&optional tag)',
          parameter : '&optional tag',
          lispcode : '(defun ecb-get-type-name-hierarchy-of-current-tag (&optional tag)<br>  (let ((type-hierarchy nil)<br>        (curr-tag (or tag (ecb-get-real-curr-tag))))<br>    (when curr-tag<br>      (while (progn<br>               (setq type-hierarchy (cons (ecb--semantic-tag-name curr-tag)<br>                                          type-hierarchy))<br>               (setq curr-tag (ecb-get-type-tag-of-tag curr-tag nil t)))))<br>    (nreverse type-hierarchy)))'
        },
        {
          function : 'ecb-get-type-node-of-node',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Returns that node which data-tag is of class "type the tag of the node NODE<br>of the Methods-buffer belongs to. If the tag of NODE do not belong to a type<br>then nil is returned."',
          prototype : '(defun ecb-get-type-node-of-node (node)',
          parameter : 'node',
          lispcode : '(defun ecb-get-type-node-of-node (node)<br>  (let ((parent (tree-node->parent node)))<br>    (catch <tick>found<br>      (while (not (eq (tree-buffer-get-root) parent))<br>        (if (equal (and (= (tree-node->type parent) ecb-methods-nodetype-tag)<br>                        (ecb--semantic-tag-class (tree-node->data parent)))<br>                   <tick>type)<br>            (throw <tick>found parent)<br>          (setq parent (tree-node->parent parent))))<br>      nil)))<br>'
        },
        {
          function : 'ecb-get-type-specifier',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '      "group"',
          prototype : '(defun ecb-get-type-specifier (tag)  (if (ecb--semantic-tag-faux-p tag)',
          parameter : 'tag',
          lispcode : '(defun ecb-get-type-specifier (tag)<br>  (if (ecb--semantic-tag-faux-p tag)<br>    (ecb--semantic-tag-type tag)))<br>'
        },
        {
          function : 'ecb-get-type-tag-of-tag',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Returns that tag of class "type the tag TAG belongs to. If TAG does not<br>belong to a type then nil is returned. If TAG is already of class "type then<br>the behavior depends on the optional argument ALWAYS-PARENT-TYPE: If nil then<br>the current tag is returned otherwise the next parent-tag of class "type is<br>returned.<br><br>If TAG is nil the tag returned by `ecb-get-real-curr-tag" is used. If TABLE is<br>nil then the tag-table of the current buffer is used; otherwise the tag-table<br>TABLE is used."',
          prototype : '(defun ecb-get-type-tag-of-tag (&optional tag table always-parent-type)',
          parameter : '&optional tag table always-parent-type',
          lispcode : '(defun ecb-get-type-tag-of-tag (&optional tag table always-parent-type)<br>  (let* ((table (or table (ecb-get-current-tag-table)))<br>         (curr-tag (or tag (ecb-get-real-curr-tag)))<br>         (function-parent (ecb--semantic-tag-function-parent curr-tag)))<br>    (cond ((ecb--semantic-tag-faux-p curr-tag)<br>           (and (not always-parent-type) curr-tag))<br>          ((and (not always-parent-type)<br>                (equal (ecb--semantic-tag-class curr-tag) <tick>type))<br>           curr-tag)<br>          (t (if function-parent<br>                 ;; we have an external member and we search the type this<br>                 ;; external member belongs to. This can either be a type-tag<br>                 ;; in the current file (which is then contained in table) or<br>                 ;; a faux-tag (created by semantic-adopt-external-members)<br>                 ;; when the parent-type of this external member is defined<br>                 ;; outside the current source - but this faux-type is<br>                 ;; contained in table too.<br>                 (catch <tick>found<br>                   (dolist (tag (ecb--semantic-flatten-tags-table table))<br>                     (if (and (equal (ecb--semantic-tag-class tag) <tick>type)<br>                              (ecb-string= (ecb--semantic-tag-name tag)<br>                                           function-parent)<br>                              (delq nil<br>                                    (mapcar (lambda (child)<br>                                              (if (ecb--semantic-equivalent-tag-p<br>                                                   child curr-tag)<br>                                                  curr-tag))<br>                                            (ecb-children-tags tag))))<br>                         (throw <tick>found tag)))<br>                   nil)<br>               ;; we are already inside the parent-type - if there is any, so<br>               ;; we simply search the nearest tag of class <tick>type in the'
        },
        {
          function : 'ecb-get-window-by-number',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return that window with number WIN-NR. If WIN-LIST is set<br>then get it from that list otherwise from `ecb-canonical-windows-list".<br>WIN-NR must be an integer between 1 and length of WIN-LIST (rsp.<br>`ecb-canonical-windows-list")."',
          prototype : '(defun ecb-get-window-by-number (win-nr &optional win-list)',
          parameter : 'win-nr &optional win-list',
          lispcode : '(defun ecb-get-window-by-number (win-nr &optional win-list)<br>  (nth (1- win-nr) (or win-list (ecb-canonical-windows-list))))'
        },
        {
          function : 'ecb-get-window-fix-type',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Determine which value of `window-size-fixed" we must set in all ecb-buffers<br>of layout LAYOUT-NAME."',
          prototype : '(defun ecb-get-window-fix-type (layout-name)',
          parameter : 'layout-name',
          lispcode : '(defun ecb-get-window-fix-type (layout-name)<br>  (if (symbolp ecb-fix-window-size)<br>      (if (equal ecb-fix-window-size <tick>auto)<br>          (if (equal (ecb-get-layout-type ecb-layout-name) <tick>top)<br>              <tick>height<br>            <tick>width)<br>        ecb-fix-window-size)<br>    (cdr (assoc layout-name ecb-fix-window-size))))'
        },
        {
          function : 'ecb-get-window-size',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return the sizes of WINDOW as a cons where the car is the width and the cdr<br>is the height. Per default both values are fractions of the frame-width (rsp.<br>height) of the `ecb-frame" unless FIX is not nil. Optional third argument<br>REF-SIZE is a cons where car is the referencial width and the cdr is the<br>referencial height when the sizes should be computed as fractionals of the<br>REF-SIZE; then the resulting sizes are floating-point-numbers) (if FIX is<br>nil). Default referencial width rsp. height are `frame-width" rsp.<br>`frame-height" of the `ecb-frame"."',
          prototype : '(defun ecb-get-window-size (window &optional fix ref-size)',
          parameter : 'window &optional fix ref-size',
          lispcode : '(defun ecb-get-window-size (window &optional fix ref-size)<br>  (when window<br>    (let ((ref-width (or (car ref-size) (frame-width ecb-frame)))<br>          (ref-height (or (cdr ref-size) (frame-height ecb-frame))))<br>      (cons (/ (ecb-window-full-width window)<br>               (if fix<br>                   1<br>                 (* 1.0 ref-width)))<br>            (/ (ecb-window-full-height window)<br>               (if fix<br>                   1<br>                 (* 1.0 ref-height)))))))<br>'
        },
        {
          function : 'ecb-goto-action-window',
          filename : 'ecb/ecb-examples.el',
          docstring : '  "Make the action-window the current window."',
          prototype : '(defun ecb-goto-action-window ()',
          parameter : '',
          lispcode : '(defun ecb-goto-action-window ()<br>  (interactive)<br>  (ecb-goto-ecb-window ecb-examples-action-buffer-name))<br><br>'
        },
        {
          function : 'ecb-goto-bufferinfo-window',
          filename : 'ecb/ecb-examples.el',
          docstring : '  "Make the bufferinfo-window the current window."',
          prototype : '(defun ecb-goto-bufferinfo-window ()',
          parameter : '',
          lispcode : '(defun ecb-goto-bufferinfo-window ()<br>  (interactive)<br>  (ecb-goto-ecb-window ecb-examples-bufferinfo-buffer-name))<br><br>'
        },
        {
          function : 'ecb-goto-ecb-window',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Select that ecb-window displaying the special ecb-buffer ECB-BUFFER-NAME.<br>Only buffer-names defined for the current layout (see function<br>`ecb-buffer-is-ecb-buffer-of-current-layout-p") or the buffer-name of the<br>integrated speedbar are accepted. If such a window can not be selected then<br>probably because another ecb-window of current layout is currently maximized;<br>therefore in such a case the layout has been redrawn and then tried to select<br>the window again. This function does nothing if NAME fulfills not the<br>described conditions or if the ecb-windows are hidden or ECB is not active. If<br>necessary the `ecb-frame" will be first raised."',
          prototype : '(defun ecb-goto-ecb-window (ecb-buffer-name)',
          parameter : 'ecb-buffer-name',
          lispcode : '(defun ecb-goto-ecb-window (ecb-buffer-name)<br>  (when (and ecb-minor-mode<br>             (not (ecb-windows-all-hidden))<br>             (or (equal ecb-buffer-name ecb-speedbar-buffer-name)<br>                 (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-buffer-name)))<br>    (raise-frame ecb-frame)<br>    (select-frame ecb-frame)<br>    (or (ecb-window-select ecb-buffer-name)<br>        ;; the window is not visible because another one is maximized;<br>        ;; therefore we first redraw the layout<br>        (progn'
        },
        {
          function : 'ecb-goto-line',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Goto LINE, counting from line 1 at beginning of buffer.<br><br>This function doesn"t set the mark."',
          prototype : '(defun ecb-goto-line (line)',
          parameter : 'line',
          lispcode : '(defun ecb-goto-line (line)<br>  ;; Move to the specified line number in that buffer.<br>  (save-restriction<br>    (widen)<br>    (goto-char 1)<br>    (if (eq selective-display t)<br>        (re-search-forward <apo>[\n\C-m]<apo> nil <tick>end (1- line))'
        },
        {
          function : 'ecb-goto-window-analyse',
          filename : 'ecb/ecb-analyse.el',
          docstring : '  "Make the ECB-analyse window the current window."',
          prototype : '(defun ecb-goto-window-analyse ()',
          parameter : '',
          lispcode : '(defun ecb-goto-window-analyse ()<br>  (interactive)<br>  (ecb-goto-ecb-window ecb-analyse-buffer-name))'
        },
        {
          function : 'ecb-goto-window-by-smart-selection--internal',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Perform smart window-selection depending on WIN-LIST.<br>Possible window-destinations are offered by the buffer-name displayed in a<br>window. Selecting the buffer-name will make the displaying window the<br>selected-window. Which windows are offered depends on the currently selected<br>window at call-time: If not a window contained in WIN-LIST is currently the<br>selected-window then all windows of WIN-LIST are offered in canonical order<br>(means from top-left to button-right). If a window contained in WIN-LIST is<br>currently the selected-window then all other(!) windows of WIN-LIST are<br>offered, beginning with the next edit-window to the currently selected window<br>(the following windows also in canonical order). If there is only one<br>senseful destination-window then this window is immediately selected, without<br>confirmation (e.g. if WIN-LIST is the list of all edit-windows: There are two<br>edit-windows and point stays in one of them. Or there is only one edit-window<br>and point stays either in one of the special ecb-windows or in the<br>compile-window).<br><br>If optional argument USE-IMMEDIATE-COMPLETION is nil then all possible<br>destination-windows are displayed in the message-area and only hitting TAB<br>offers completion. If USE-IMMEDIATE-COMPLETION is not nil then all<br>possible destinations are immediately shown in a completion-buffer."',
          prototype : '(defun ecb-goto-window-by-smart-selection--internal (win-list &optional use-immediate-completion)',
          parameter : 'win-list &optional use-immediate-completion',
          lispcode : '(defun ecb-goto-window-by-smart-selection--internal (win-list &optional use-immediate-completion)<br>  (when ecb-minor-mode<br>    (raise-frame ecb-frame)<br>    (select-frame ecb-frame)<br>    (let* ((destination-list (if (member (selected-window) win-list)<br>                                 ;; point already in a window of the win-list ==> all<br>                                 ;; windows of this list but the current one<br>                                 (cdr (ecb-rotate win-list (selected-window)))<br>                               ;; point elsewhere ==> all windows of the list in<br>                               ;; canonical order<br>                               win-list))<br>           ;; build an alist with car is a left-trimmed buffer-name (usefull<br>           ;; for the special ECB-buffers which all start with a blank) and<br>           ;; cdr ist the real buffer-name (used for selecting the buffer)<br>           (choices-buffer-name-alist<br>            (mapcar (function (lambda (w)<br>                                (cons (ecb-left-trim (buffer-name (window-buffer w)))<br>                                      (buffer-name (window-buffer w)))))<br>                    destination-list)))<br>      (when choices-buffer-name-alist<br>        (if (= (length choices-buffer-name-alist) 1)<br>            ;; no user-interaction necessary because only one senseful destination<br>            (ecb-window-select (cdar choices-buffer-name-alist))<br>          ;; we ask the user which window/buffer should be selected. For conveniance'
        },
        {
          function : 'ecb-goto-window-compilation',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Goto the ecb compilation window `ecb-compile-window"."',
          prototype : '(defun ecb-goto-window-compilation ()',
          parameter : '',
          lispcode : '(defun ecb-goto-window-compilation ()<br>  (interactive)<br>  (when (and ecb-minor-mode<br>             (equal <tick>visible (ecb-compile-window-state)))<br>    (raise-frame ecb-frame)<br>    (select-frame ecb-frame)<br>    (select-window ecb-compile-window)))<br>'
        },
        {
          function : 'ecb-goto-window-directories',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Make the ECB-directories window the current window.<br>If `ecb-use-speedbar-instead-native-tree-buffer" is "dir then goto to the<br>speedbar-window."',
          prototype : '(defun ecb-goto-window-directories ()',
          parameter : '',
          lispcode : '(defun ecb-goto-window-directories ()<br>  (interactive)<br>  (or (ecb-goto-ecb-window ecb-directories-buffer-name)<br>      (and (equal ecb-use-speedbar-instead-native-tree-buffer <tick>dir)<br>           (ecb-goto-window-speedbar))))'
        },
        {
          function : 'ecb-goto-window-ecb-by-smart-selection',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Selects a special ecb-browsing-window by smart selection.<br>The command offers a list of all special ecb-windows by buffer-name. Selecting<br>the buffer-name will select the displaying window. Which special ecb-windows<br>are offered depends on the currently selected window: If not a special<br>ecb-window is the currently selected-window then all edit-windows are offered<br>in canonical order (means from top-left to button-right). If an ecb-window is<br>the currently selected-window then all other(!) special ecb-windows are<br>offered, beginning with the next special ecb-window to the current ecb-window<br>(the following special ecb-windows also in canonical order). If there is only<br>one senseful destination-ecb-window then this window is immediately selected,<br>without confirmation (e.g.: There are two special ecb-windows and point stays<br>in one of them. Or there is only one ecb-window and point stays either in one<br>of the edit-windows or in the compile-window).<br><br>If optional argument USE-IMMEDIATE-COMPLETION is nil then all possible<br>destination-windows are displayed in the message-area and only hitting TAB<br>offers completion. If USE-IMMEDIATE-COMPLETION is not nil then all possible<br>destinations are immediately shown in a completion-buffer."',
          prototype : '(defun ecb-goto-window-ecb-by-smart-selection (&optional use-immediate-completion)',
          parameter : '&optional use-immediate-completion',
          lispcode : '(defun ecb-goto-window-ecb-by-smart-selection (&optional use-immediate-completion)<br>  (interactive <apo>P<apo>)<br>  (ecb-goto-window-by-smart-selection--internal<br>   (ecb-canonical-ecb-windows-list)<br>   use-immediate-completion))'
        },
        {
          function : 'ecb-goto-window-edit-by-smart-selection',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Selects an edit-window by smart selection.<br>The command offers a list of all edit-windows by buffer-name. Selecting the<br>buffer-name will select the displaying window. Which edit-windows are offered<br>depends on the currently selected window: If not an edit-window is the<br>currently selected-window then all edit-windows are offered in canonical order<br>(means from top-left to button-right). If an edit-window is the currently<br>selected-window then all other(!) edit-windows are offered, beginning with<br>the next edit-window to the current edit-window (the following edit-windows<br>also in canonical order). If there is only one senseful<br>destination-edit-window then this window is immediately selected, without<br>confirmation (e.g.: There are two edit-windows and point stays in one of<br>them. Or there is only one edit-window and point stays either in one of the<br>special ecb-windows or in the compile-window).<br><br>If optional argument USE-IMMEDIATE-COMPLETION is nil then all possible<br>destination-windows are displayed in the message-area and only hitting TAB<br>offers completion. If USE-IMMEDIATE-COMPLETION is not nil then all possible<br>destinations are immediately shown in a completion-buffer."',
          prototype : '(defun ecb-goto-window-edit-by-smart-selection (&optional use-immediate-completion)',
          parameter : '&optional use-immediate-completion',
          lispcode : '(defun ecb-goto-window-edit-by-smart-selection (&optional use-immediate-completion)<br>  (interactive <apo>P<apo>)<br>  (ecb-goto-window-by-smart-selection--internal<br>   (ecb-canonical-edit-windows-list)<br>   use-immediate-completion))'
        },
        {
          function : 'ecb-goto-window-edit-last',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Make the last selected edit-window window the current window. This is the<br>same as if `ecb-mouse-click-destination" is set to "last-point."',
          prototype : '(defun ecb-goto-window-edit-last ()',
          parameter : '',
          lispcode : '(defun ecb-goto-window-edit-last ()<br>  (interactive)<br>  (when ecb-minor-mode<br>    (raise-frame ecb-frame)<br>    (select-frame ecb-frame)<br>    (let ((ecb-mouse-click-destination <tick>last-point))<br>      (ecb-select-edit-window))))'
        },
        {
          function : 'ecb-goto-window-edit1',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Make the (first) edit-window window the current window."',
          prototype : '(defun ecb-goto-window-edit1 ()',
          parameter : '',
          lispcode : '(defun ecb-goto-window-edit1 ()<br>  (interactive)<br>  (when ecb-minor-mode<br>    (raise-frame ecb-frame)<br>    (select-frame ecb-frame)<br>    (ecb-select-edit-window 1)))'
        },
        {
          function : 'ecb-goto-window-edit2',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Make the second edit-window (if available) window the current window."',
          prototype : '(defun ecb-goto-window-edit2 ()',
          parameter : '',
          lispcode : '(defun ecb-goto-window-edit2 ()<br>  (interactive)<br>  (when ecb-minor-mode<br>    (raise-frame ecb-frame)<br>    (select-frame ecb-frame)<br>    (ecb-select-edit-window t)))'
        },
        {
          function : 'ecb-goto-window-history',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Make the ECB-history window the current window."',
          prototype : '(defun ecb-goto-window-history ()',
          parameter : '',
          lispcode : '(defun ecb-goto-window-history ()<br>  (interactive)<br>  (ecb-goto-ecb-window ecb-history-buffer-name))'
        },
        {
          function : 'ecb-goto-window-methods',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Make the ECB-methods window the current window.<br>If `ecb-use-speedbar-instead-native-tree-buffer" is "method then goto to the<br>speedbar-window."',
          prototype : '(defun ecb-goto-window-methods ()',
          parameter : '',
          lispcode : '(defun ecb-goto-window-methods ()<br>  (interactive)<br>  (or (ecb-goto-ecb-window ecb-methods-buffer-name)<br>      (and (equal ecb-use-speedbar-instead-native-tree-buffer <tick>method)<br>           (ecb-goto-window-speedbar))))'
        },
        {
          function : 'ecb-goto-window-sources',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Make the ECB-sources window the current window.<br>If `ecb-use-speedbar-instead-native-tree-buffer" is "source then goto to the<br>speedbar-window."',
          prototype : '(defun ecb-goto-window-sources ()',
          parameter : '',
          lispcode : '(defun ecb-goto-window-sources ()<br>  (interactive)<br>  (or (ecb-goto-ecb-window ecb-sources-buffer-name)<br>      (and (equal ecb-use-speedbar-instead-native-tree-buffer <tick>source)<br>           (ecb-goto-window-speedbar))))'
        },
        {
          function : 'ecb-goto-window-speedbar',
          filename : 'ecb/ecb-speedbar.el',
          docstring : '  "Make the ECB-speedbar window the current window.<br>This command does nothing if no integrated speedbar is visible in the<br>ECB-frame."',
          prototype : '(defun ecb-goto-window-speedbar ()',
          parameter : '',
          lispcode : '(defun ecb-goto-window-speedbar ()<br>  (interactive)<br>  (ecb-goto-ecb-window ecb-speedbar-buffer-name))'
        },
        {
          function : 'ecb-goto-window-symboldef',
          filename : 'ecb/ecb-symboldef.el',
          docstring : '  "Make the ECB-symbol-definition window the current window."',
          prototype : '(defun ecb-goto-window-symboldef ()',
          parameter : '',
          lispcode : '(defun ecb-goto-window-symboldef ()<br>  (interactive)<br>  (ecb-goto-ecb-window ecb-symboldef-buffer-name))'
        },
        {
          function : 'ecb-grep-directory-internal',
          filename : 'ecb/ecb-file-browser.el',
          parameter : 'node find',
          lispcode : '(defun ecb-grep-directory-internal (node find)<br>  (ecb-select-edit-window)<br>  (let* ((node-data-file (ecb-source-get-filename (tree-node->data node)))<br>         (default-directory (concat (ecb-fix-filename<br>                                     (if (ecb-file-directory-p node-data-file)<br>                                         node-data-file<br>                                       (ecb-file-name-directory node-data-file)))<br>                                    (ecb-directory-sep-string node-data-file))))<br>    (call-interactively (if find<br>                            (or (and (fboundp ecb-grep-recursive-function)<br>                                     ecb-grep-recursive-function)<br>                                <tick>grep-find)<br>                          (or (and (fboundp ecb-grep-function)<br>                                   ecb-grep-function)<br>                              <tick>grep)))))<br>'
        },
        {
          function : 'ecb-group-function-tags-with-parents',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Return a new taglist based on TAGLIST where all function-tags in<br>TAGLIST having a parent tag are grouped together under a new faux tag<br>for this parent-tag. The new taglist contains first all parent-less tags<br>and then all grouped tags.<br><br>This is useful for oo-programming languages where the methods of a class can<br>be defined outside the class-definition, e.g. C++, Eieio."',
          prototype : '(defun ecb-group-function-tags-with-parents (taglist)',
          parameter : 'taglist',
          lispcode : '(defun ecb-group-function-tags-with-parents (taglist)<br>  (ecb--semantic-adopt-external-members taglist))'
        },
        {
          function : 'ecb-hide-ecb-windows',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Hide the ECB windows if not already hidden."',
          prototype : '(defun ecb-hide-ecb-windows ()',
          parameter : '',
          lispcode : '(defun ecb-hide-ecb-windows ()<br>  (interactive)<br>  (ecb-toggle-ecb-windows 0))'
        },
        {
          function : 'ecb-hide-ecb-windows-internal',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Make ECB-windows visible or invisible.<br>NEW-STATE must be one of the symbols none, all, left-side or right-side."',
          prototype : '(defun ecb-hide-ecb-windows-internal (new-state)',
          parameter : 'new-state',
          lispcode : '(defun ecb-hide-ecb-windows-internal (new-state)<br>  ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: make safe against wrong values<br>  ;; of NEW-STATE.<br>  (unless (or (not ecb-minor-mode)<br>              (not (equal (selected-frame) ecb-frame)))<br><br>    (let ((old-state ecb-windows-hidden-state)<br>          (compwin-hidden (equal <tick>hidden<br>                                 (ecb-compile-window-state))))<br>      (unless (equal old-state new-state)<br>        (when (equal old-state ecb-windows-hidden-all-value)<br>          ;; before all ecb-windows were hidden, now we display at least some<br>          ;; ecb-windows<br>          (run-hooks <tick>ecb-show-ecb-windows-before-hook))<br><br>        (when (equal new-state ecb-windows-hidden-all-value)<br>          ;; before at least some ecb-windows were displayed, now we hide all<br>          (run-hooks <tick>ecb-hide-ecb-windows-before-hook))<br>; leo only used for xemacs : (tree-buffer-deactivate-follow-mouse))<br>        (ecb-redraw-layout-full nil nil nil new-state)<br>        ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: we must deal with'
        },
        {
          function : 'ecb-history-content-all-dead-buffers-alist',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return alist with items (<buffer-name> . <file-name>) for dead buffers<br>entries of the history-buffer."',
          prototype : '(defun ecb-history-content-all-dead-buffers-alist ()',
          parameter : '',
          lispcode : '(defun ecb-history-content-all-dead-buffers-alist ()<br>  (with-current-buffer ecb-history-buffer-name<br>    (delq nil (tree-node-map-subtree<br>               (tree-buffer-get-root)<br>               (function<br>                (lambda (node)<br>                  (let ((data (tree-node->data node)))<br>                    (unless (or (= (tree-node->type node) ecb-history-nodetype-bucket)<br>                                (get-buffer (ecb-source-get-buffername data)))<br>                      (cons (ecb-source-get-buffername data)<br>                            (ecb-source-get-filename data))))))))))'
        },
        {
          function : 'ecb-history-filter',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Apply a filter to the history-buffer to reduce the number of entries.<br>So you get a better overlooking. There are three choices:<br>- Filter by extension: Just insert the extension you want the History-buffer<br>  being filtered. Insert the extension without leading dot!<br>- Filter by regexp: Insert the filter as regular expression.<br>- No filter: This means to display an entry for all currently living<br>  file-buffers."',
          prototype : '(defun ecb-history-filter ()',
          parameter : '',
          lispcode : '(defun ecb-history-filter ()<br>  (interactive)<br>  (let ((choice (ecb-query-string <apo>Filter history by:<apo><br>                                  <tick>(<apo>extension<apo> <apo>regexp<apo> <apo>no filter<apo>))))<br>    (cond ((ecb-string= choice <apo>extension<apo>)<br>           (ecb-history-filter-by-ext<br>            (read-string <apo>Insert the filter-extension without leading dot: <apo>)))<br>          ((ecb-string= choice <apo>regexp<apo>)<br>           (ecb-history-filter-by-regexp))<br>          (t (ecb-add-all-buffers-to-history)))))'
        },
        {
          function : 'ecb-history-filter-by-ext',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Filter history entries by extension. Returns t if the filter has been<br>applied otherwise nil."',
          prototype : '(defun ecb-history-filter-by-ext (ext-str)',
          parameter : 'ext-str',
          lispcode : '(defun ecb-history-filter-by-ext (ext-str)<br>  (if (= (length ext-str) 0)<br>      (setq ecb-history-filter<br>            (cons <backtick>(lambda (buffername filename)<br>                     ;; for extention-filter we only use the filename-arg<br>                     (save-match-data<br>                       (string-match <apo>^[^.]+$<apo> filename)))<br>                  <apo>No ext.<apo>))<br>    (setq ecb-history-filter<br>          (cons <backtick>(lambda (buffername filename)<br>                   ;; for extention-filter we only use the filename-arg<br>                   (save-match-data<br>                     (string-match ,(format <apo>\\.%s\\<tick><apo> ext-str)<br>                                   filename)))'
        },
        {
          function : 'ecb-history-filter-by-regexp',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Filter history entries by REGEXP. If the first optional argument REGEXP is<br>nil then it asks for a regexp. If second argument FILTER-DISPLAY is not nil<br>then it is displayed in the modeline of the history-buffer for current<br>regexp-filter. Otherwise the regexp itself. Returns t if the filter has been<br>applied otherwise nil."',
          prototype : '(defun ecb-history-filter-by-regexp (&optional regexp filter-display)',
          parameter : '&optional regexp filter-display',
          lispcode : '(defun ecb-history-filter-by-regexp (&optional regexp filter-display)<br>  (let ((regexp-str (or regexp (read-string <apo>Insert the filter-regexp: <apo>))))<br>    (if (> (length regexp-str) 0)<br>        (setq ecb-history-filter<br>              (cons <backtick>(lambda (buffername filename)<br>                       ;; for regexp-filter we only use the buffername-arg<br>                       (save-match-data<br>                         (string-match ,regexp-str buffername)))<br>                    (or filter-display regexp-str)))))'
        },
        {
          function : 'ecb-history-filter-modeline-prefix',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Compute a mode-line prefix for the History-buffer so the current filter<br>applied to the history-entries is displayed. This function is only for using<br>by the option `ecb-mode-line-prefixes"."',
          prototype : '(defun ecb-history-filter-modeline-prefix (buffer-name sel-dir sel-source)',
          parameter : 'buffer-name sel-dir sel-source',
          lispcode : '(defun ecb-history-filter-modeline-prefix (buffer-name sel-dir sel-source)<br>  (and (cdr ecb-history-filter)<br>       (format <apo>[Filter: %s]<apo> (cdr ecb-history-filter))))<br>'
        },
        {
          function : 'ecb-history-filter-reset-p',
          filename : 'ecb/ecb-file-browser.el',
          parameter : '',
          lispcode : '(defun ecb-history-filter-reset-p ()<br>  (null (cdr ecb-history-filter)))'
        },
        {
          function : 'ecb-history-kill-buffer-clear',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Does all necessary clearence when CURR-BUF is killed."',
          prototype : '(defun ecb-history-kill-buffer-clear (curr-buf)',
          parameter : 'curr-buf',
          lispcode : '(defun ecb-history-kill-buffer-clear (curr-buf)<br>  (let* ((buffer-file (ecb-fix-filename (ecb-buffer-file-name curr-buf)))<br>         (node (if buffer-file<br>                   (ecb-exec-in-window ecb-history-buffer-name<br>                     (tree-buffer-find-displayed-node-by-data/name<br>                      (ecb-source-make buffer-file curr-buf)))))<br>         (buffer-name-to-ignore-list-for-rebuild nil))<br>    (when (tree-node-p node)<br>      (when (or (buffer-base-buffer curr-buf) ; indirect-buffers always!<br>                (equal ecb-kill-buffer-clears-history <tick>auto)<br>                (and (equal ecb-kill-buffer-clears-history <tick>ask)<br>                     (y-or-n-p <apo>Remove history entry for this buffer?<apo>)))<br>        ;; we must do this even when the history is not visible!!<br>        ;; the history should be always up-to-date<br>        (with-current-buffer ecb-history-buffer-name<br>          (tree-buffer-remove-node node))'
        },
        {
          function : 'ecb-history-menu-creator',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Creates the popup-menus for the history-buffer."',
          prototype : '(defun ecb-history-menu-creator (tree-buffer-name node)',
          parameter : 'tree-buffer-name node',
          lispcode : '(defun ecb-history-menu-creator (tree-buffer-name node)<br>  (setq ecb-layout-prevent-handle-ecb-window-selection t)<br>  (let ((dyn-user-extension<br>         (and (functionp ecb-history-menu-user-extension-function)<br>              (funcall ecb-history-menu-user-extension-function<br>                       tree-buffer-name node)))<br>        (dyn-builtin-extension (ecb-dir/source/hist-menu-editwin-entries)))<br>    (list (cons ecb-history-nodetype-filebuffer<br>                (funcall (or ecb-history-menu-sorter <tick>identity)<br>                         (append dyn-user-extension<br>                                 ecb-history-menu-user-extension<br>                                 ecb-history-menu<br>                                 dyn-builtin-extension)))<br>          (cons ecb-history-nodetype-bucket<br>                (funcall (or ecb-history-menu-sorter <tick>identity)<br>                         (append dyn-user-extension<br>                                 ecb-history-common-menu)))<br>          (cons ecb-history-nodetype-indirect-filebuffer<br>                (funcall (or ecb-history-menu-sorter <tick>identity)<br>                         (append dyn-user-extension<br>                                 ecb-history-menu-user-extension<br>                                 ecb-history-menu<br>                                 dyn-builtin-extension))))))<br>'
        },
        {
          function : 'ecb-host-accessible-cache-add',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Add the value of ACCESSIBLE-P to the HOST-ACCESSIBLE-cache with key HOST."',
          prototype : '(defun ecb-host-accessible-cache-add (host accessible-p)',
          parameter : 'host accessible-p',
          lispcode : '(defun ecb-host-accessible-cache-add (host accessible-p)<br>  (ecb-multicache-put-value <tick>ecb-filename-cache host <tick>HOST-ACCESSIBLE<br>                            (cons (current-time) accessible-p)))'
        },
        {
          function : 'ecb-host-accessible-cache-dump',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Dump the whole HOST-ACCESSIBLE-cache. If NO-NIL-VALUE is not nil then these<br>cache-entries are not dumped. This command is not intended for end-users of<br>ECB."',
          prototype : '(defun ecb-host-accessible-cache-dump (&optional no-nil-value)',
          parameter : '&optional no-nil-value',
          lispcode : '(defun ecb-host-accessible-cache-dump (&optional no-nil-value)<br>  (interactive <apo>P<apo>)<br>  (ecb-multicache-print-subcache <tick>ecb-filename-cache <tick>HOST-ACCESSIBLE no-nil-value))<br><br>'
        },
        {
          function : 'ecb-host-accessible-cache-get',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Get the accessible-p value from the HOST-ACCESSIBLE-cache. If the cache<br>entry is older then VALID-TIME (in seconds) then it is discarded."',
          prototype : '(defun ecb-host-accessible-cache-get (host valid-time)',
          parameter : 'host valid-time',
          lispcode : '(defun ecb-host-accessible-cache-get (host valid-time)<br>  (let ((value (ecb-multicache-get-value <tick>ecb-filename-cache host<br>                                         <tick>HOST-ACCESSIBLE)))<br>    (if (or (null value)<br>            (> (ecb-time-diff (current-time) (car value) t) valid-time))<br>        ;; either not yet cached or outdated<br>        nil'
        },
        {
          function : 'ecb-host-accessible-p',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return not nil if HOST is accessible."',
          prototype : '(defun ecb-host-accessible-p (host)',
          parameter : 'host',
          lispcode : '(defun ecb-host-accessible-p (host)<br>  (let ((value (ecb-host-accessible-cache-get<br>                host (ecb-host-accessible-valid-time host))))<br>    (cl-case value<br>      (NOT-ACCESSIBLE nil)<br>      ((nil) ;; not cached or outdated<br>       (let* ((options (ecb-replace-all-occurences (ecb-copy-list ecb-ping-options)<br>                                                   <apo>HOST<apo> host))<br>              (result (equal 0 (apply <tick>call-process<br>                                      ecb-ping-program<br>                                      nil nil nil<br>                                      options))))<br>         (ecb-host-accessible-cache-add host (or result <tick>NOT-ACCESSIBLE))<br>         result))<br>      (otherwise value))))<br><br>'
        },
        {
          function : 'ecb-images-can-be-used',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Not nil if images can be used with current Emacs setup."',
          prototype : '(defun ecb-images-can-be-used ()',
          parameter : '',
          lispcode : '(defun ecb-images-can-be-used ()<br>  (if ecb-images-can-be-used-init-p<br>      ecb-images-can-be-used<br>    (setq ecb-images-can-be-used-init-p t)<br>    (setq ecb-images-can-be-used<br>          (and (or (fboundp <tick>defimage)<br>                   (fboundp <tick>make-image-specifier))<br>               (if (fboundp <tick>display-images-p)<br>                   (display-images-p)<br>                 window-system)))))<br><br>'
        },
        {
          function : 'ecb-indirect-buffers-of-buffer',
          filename : 'ecb/ecb-file-browser.el',
          parameter : '&optional buffer-or-name',
          lispcode : '(defun ecb-indirect-buffers-of-buffer (&optional buffer-or-name)<br>  (let ((buffer (if (null buffer-or-name)<br>                    (current-buffer)<br>                  (if (and (bufferp buffer-or-name)<br>                           (buffer-live-p buffer-or-name))<br>                      buffer-or-name<br>                    (if (stringp buffer-or-name)<br>                        (get-buffer buffer-or-name))))))<br>    (delq nil (mapcar (function<br>                       (lambda (buf)<br>                         (if (equal buffer (buffer-base-buffer buf))<br>                             buf)))<br>                      (buffer-list)))))'
        },
        {
          function : 'ecb-info',
          filename : 'ecb/ecb-help.el',
          docstring : '  "Starts `info" with INFO-FILE. If INFO-FILE does not exists then nil is<br>returned otherwise true. If NO-FILE-NOT-EXIST-ERR is not nil then just nil is<br>returned if INFO-FILE does not exist otherwise an error is reported."',
          prototype : '(defun ecb-info (info-file &optional no-file-not-exist-err)',
          parameter : 'info-file &optional no-file-not-exist-err',
          lispcode : '(defun ecb-info (info-file &optional no-file-not-exist-err)<br>  (if (file-exists-p info-file)<br>      (prog1 t<br>        (info info-file))<br>    (unless no-file-not-exist-err<br>      (ecb-error <apo>Info file %s does not exists!<apo> info-file))<br>    nil))'
        },
        {
          function : 'ecb-info-message',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Displays an information."',
          prototype : '(defun ecb-info-message (&rest args)',
          parameter : '&rest args',
          lispcode : '(defun ecb-info-message (&rest args)<br>  (message (concat <apo>ECB <apo> ecb-version <apo> - Info: <apo> (apply <tick>format args))))<br>'
        },
        {
          function : 'ecb-initialize-all-internals',
          filename : 'ecb/ecb.el',
          parameter : '&optional no-caches',
          lispcode : '(defun ecb-initialize-all-internals (&optional no-caches)<br>  (ecb-ecb-buffer-registry-init)<br>  (setq ecb-major-mode-selected-source nil<br>        ecb-item-in-tree-buffer-selected nil)<br>  (ecb-file-browser-initialize no-caches)<br>  (ecb-method-browser-initialize no-caches))'
        },
        {
          function : 'ecb-initialize-layout',
          filename : 'ecb/ecb-layout.el',
          parameter : '',
          lispcode : '(defun ecb-initialize-layout ()<br>  ;; We do not initialize the <backtick>ecb-frame<tick>!<br>  (setq ecb-edit-window nil<br>        ecb-last-edit-window-with-point nil<br>        ecb-last-source-buffer nil<br>        ecb-last-compile-buffer-in-compile-window nil<br>        ecb-current-maximized-ecb-buffer-name nil<br>        ecb-cycle-ecb-buffer-state nil<br>        ecb-special-ecb-buffers-of-current-layout nil<br>        ecb-windows-hidden-state ecb-windows-hidden-none-value<br>        ecb-compile-window nil<br>        ecb-layout-prevent-handle-compile-window-selection nil<br>        ecb-layout-prevent-handle-ecb-window-selection nil<br>        ecb-ecb-buffer-name-selected-before-command nil<br>        ecb-compile-window-was-selected-before-command nil<br>        ecb-compile-window-height-lines nil)'
        },
        {
          function : 'ecb-interpret-mouse-click',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Converts the physically pressed MOUSE-BUTTON (1 = mouse-1, 2 = mouse-2, 0 =<br>no mouse-button but the keys RET or TAB) to ECB-mouse-buttons: either primary<br>or secondary mouse-button depending on the value of CONTROL-PRESSED and the<br>setting in `ecb-primary-secondary-mouse-buttons". Returns a list<br>"(<ECB-button> <shift-mode> <meta-mode> <device>) where <ECB-button> is<br>either 1 (= primary) or 2 (= secondary) and <shift-mode> and <meta-mode> are<br>non nil if SHIFT-PRESSED rsp. META-PRESSED is non nil. <device> is either<br>"mouse or "keyboard dependent if the uses has used the mouse rsp. the keyboard<br>in the tree-buffer. For an invalid and not accepted click combination nil is<br>returned.<br><br>Note: If MOUSE-BUTTON is 0 (means no mouse-button but a key like RET or TAB<br>was hitted) then CONTROL-PRESSED is interpreted as ECB-button 2.<br><br>Currently the fourth argument TREE-BUFFER-NAME is not used here."',
          prototype : '(defun ecb-interpret-mouse-click (mouse-button                                  shift-pressed                                  control-pressed                                  meta-pressed                                  tree-buffer-name)',
          parameter : 'mouse-button shift-pressed control-pressed meta-pressed tree-buffer-name',
          lispcode : '(defun ecb-interpret-mouse-click (mouse-button<br>                                  shift-pressed<br>                                  control-pressed<br>                                  meta-pressed<br>                                  tree-buffer-name)<br>  (if (eq mouse-button 0)<br>      (list (if control-pressed 2 1) shift-pressed meta-pressed <tick>keyboard)<br>    (if (and (not (eq mouse-button 1)) (not (eq mouse-button 2)))<br>	nil<br>      (cl-case ecb-primary-secondary-mouse-buttons<br>        (mouse-1--mouse-2<br>         (if control-pressed<br>             nil<br>           (list mouse-button shift-pressed meta-pressed <tick>mouse)))<br>        (mouse-1--C-mouse-1<br>         (if (not (eq mouse-button 1))<br>             nil<br>           (list (if control-pressed 2 1) shift-pressed meta-pressed <tick>mouse)))<br>        (mouse-2--C-mouse-2<br>         (if (not (eq mouse-button 2))<br>             nil<br>           (list (if control-pressed 2 1) shift-pressed meta-pressed <tick>mouse)))<br>        (otherwise nil)))))'
        },
        {
          function : 'ecb-is-byte-compiling',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return non-nil if eval"ed during compilation.  Don"t use outside<br>`eval-when-compile"."',
          prototype : '(defun ecb-is-byte-compiling ()',
          parameter : '',
          lispcode : '(defun ecb-is-byte-compiling ()<br>  (and (boundp <tick>byte-compile-dest-file)<br>       (stringp byte-compile-dest-file)))'
        },
        {
          function : 'ecb-jde-display-class-at-point',
          filename : 'ecb/ecb-jde.el',
          docstring : '  "Displays in the ECB-methods-buffer contents of class under point.<br>This means displays the contents (methods, attributes etc...) of the class<br>which contains the definition of the "thing" under point (this can be a<br>variablename, classname, methodname, attributename). This function needs the<br>same requirements to work as the method-completion feature of JDE (see<br>`jde-complete-at-point")!. The source-file is searched first in<br>`jde-sourcepath", then in `jde-global-classpath", then in $CLASSPATH, then in<br>current-directory.<br><br>Works only for classes where the source-code (i.e. the *.java-file) is<br>available."',
          prototype : '(defun ecb-jde-display-class-at-point ()',
          parameter : '',
          lispcode : '(defun ecb-jde-display-class-at-point ()<br>  (interactive)<br>  (when (and ecb-minor-mode<br>             (ecb-point-in-edit-window-number)<br>             (equal major-mode <tick>jde-mode))<br>    (if (jde-open-functions-exist)<br>        (let* (<br>               (thing-of-interest (ecb-thing-at-point <tick>symbol))<br>               (pair (save-excursion (ecb-end-of-thing <tick>symbol)<br>                                     (jde-parse-java-variable-at-point)))<br>               (class-to-open (jde-open-get-class-to-open<br>                               pair thing-of-interest))<br>               (source-path-prefix-list (jde-open-get-path-prefix-list))<br>               (java-file-name nil)<br>               )<br>          (if (and class-to-open (stringp class-to-open))<br>              (progn<br>                (setq java-file-name (jde-open-find-java-file-name<br>                                      class-to-open source-path-prefix-list))<br>                (if (not java-file-name)<br>                    (ecb-error <apo>Can not find the sourcecode-file for \<apo>%s\<apo><apo><br>                               thing-of-interest)<br><br>                  ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>:<br>                  ;; The following two lines of code are the only difference<br>                  ;; between this function and <backtick>jde-open-class-at-point<tick>.<br>                  ;; Therefore it would be nice if the whole stuff necessary<br>                  ;; for finding the source-file of <backtick>thing-of-interest<tick> would<br>                  ;; be extracted in an own function of JDE.<br>'
        },
        {
          function : 'ecb-jde-gen-class-buffer',
          filename : 'ecb/ecb-jde.el',
          docstring : '  "Calls `jde-gen-class-buffer" for the file FILENAME in DIR. If this function<br>is not available then `find-file" is called."',
          prototype : '(defun ecb-jde-gen-class-buffer (dir filename)',
          parameter : 'dir filename',
          lispcode : '(defun ecb-jde-gen-class-buffer (dir filename)<br>  (let ((file (concat dir <apo>/<apo> filename)))<br>    (if (fboundp <tick>jde-gen-class-buffer)<br>        (jde-gen-class-buffer file)<br>      (find-file file))))<br>'
        },
        {
          function : 'ecb-jde-get-source-path',
          filename : 'ecb/ecb-jde.el',
          parameter : '',
          lispcode : '(defun ecb-jde-get-source-path ()<br>  (mapcar <tick>jde-normalize-path jde-sourcepath))'
        },
        {
          function : 'ecb-jde-show-class-source',
          filename : 'ecb/ecb-jde.el',
          docstring : '  "Calls `jde-show-class-source" for th tag-name of EXTERNAL-TAG.<br>Returns t if the tag is found and no error occurs otherwise nil.<br><br>This function is for usage with `ecb-find-external-tag-functions"."',
          prototype : '(defun ecb-jde-show-class-source (external-tag)',
          parameter : 'external-tag',
          lispcode : '(defun ecb-jde-show-class-source (external-tag)<br>  (when (eq major-mode <tick>jde-mode)<br>    (condition-case nil<br>        (progn<br>          (jde-show-class-source (ecb--semantic-tag-name external-tag))<br>          t)<br>      (error nil))))'
        },
        {
          function : 'ecb-jde-update-ecb-source-paths',
          filename : 'ecb/ecb-jde.el',
          parameter : '',
          lispcode : '(defun ecb-jde-update-ecb-source-paths ()<br>  (interactive)<br>  (cl-case ecb-jde-set-directories-buffer-to-jde-sourcepath<br>    (add<br>     (add-hook <tick>ecb-source-path-functions<br>               <tick>ecb-jde-get-source-path))<br>    (replace<br>     (setq ecb-source-path (ecb-jde-get-source-path)))<br>    (otherwise<br>     (remove-hook <tick>ecb-source-path-functions<br>                  <tick>ecb-jde-get-source-path)))<br>  (ecb-update-directories-buffer))<br>'
        },
        {
          function : 'ecb-kill-buffer-hook',
          filename : 'ecb/ecb.el',
          docstring : '  "Function added to the `kill-buffer-hook" during ECB activation.<br>  It does several tasks:<br>- Depending on the value in `ecb-kill-buffer-clears-history" the corresponding<br>  entry in the history-buffer is removed.<br>- Clearing the method buffer if a file-buffer has been killed.<br>- The entry of the removed file-buffer is removed from `ecb-tag-tree-cache"."',
          prototype : '(defun ecb-kill-buffer-hook ()',
          parameter : '',
          lispcode : '(defun ecb-kill-buffer-hook ()<br>  (let* ((curr-buf (current-buffer))<br>         (buffer-file (ecb-fix-filename (ecb-buffer-file-name curr-buf))))<br>    ;; this prevents automatically from killing one of the ecb-buffers because<br>    ;; these ones are never releated to file!<br>    (when buffer-file<br>      ;; 1. clearing the history if necessary<br>      (ecb-history-kill-buffer-clear curr-buf)<br><br>      ;; 2. clearing the method buffer if a file-buffer is killed<br>      (ecb-rebuild-methods-buffer-with-tagcache nil nil t)<br>'
        },
        {
          function : 'ecb-last',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return the last elem of the sequence SEQ."',
          prototype : '(defun ecb-last (seq)',
          parameter : 'seq',
          lispcode : '(defun ecb-last (seq)<br>  (if (listp seq)<br>      (car (last seq))<br>    (if (> (length seq) 0)<br>        (aref seq (1- (length seq)))<br>      nil)))'
        },
        {
          function : 'ecb-layout-debug-error',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Run ARGS through `format" and write it to the *Messages*-buffer."',
          prototype : '(defun ecb-layout-debug-error (&rest args)',
          parameter : '&rest args',
          lispcode : '(defun ecb-layout-debug-error (&rest args)<br>  (when (and ecb-layout-debug-mode args)<br>    (message (concat (format <apo>ECB %s layout debug [%s] <apo> ecb-version<br>                             (format-time-string <apo>%H:%M:%S<apo>))<br>                     (apply <tick>format args)))))<br>'
        },
        {
          function : 'ecb-layout-left-p',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return not nil if current layout or layout NAME is of type left."',
          prototype : '(defun ecb-layout-left-p (&optional name)',
          parameter : '&optional name',
          lispcode : '(defun ecb-layout-left-p (&optional name)<br>  (equal <tick>left (ecb-get-layout-type name)))'
        },
        {
          function : 'ecb-layout-leftright-p',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return not nil if current layout or layout NAME is of type left-right."',
          prototype : '(defun ecb-layout-leftright-p (&optional name)',
          parameter : '&optional name',
          lispcode : '(defun ecb-layout-leftright-p (&optional name)<br>  (equal <tick>left-right (ecb-get-layout-type name)))'
        },
        {
          function : 'ecb-layout-right-p',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return not nil if current layout or layout NAME is of type right."',
          prototype : '(defun ecb-layout-right-p (&optional name)',
          parameter : '&optional name',
          lispcode : '(defun ecb-layout-right-p (&optional name)<br>  (equal <tick>right (ecb-get-layout-type name)))'
        },
        {
          function : 'ecb-layout-switch',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Switch to layout with layout-name NAME."',
          prototype : '(defun ecb-layout-switch (name)',
          parameter : 'name',
          lispcode : '(defun ecb-layout-switch (name)<br>  (let ((comp-win-state (ecb-compile-window-state)))<br>    (customize-set-variable <tick>ecb-layout-name name)<br>    (if (and ecb-change-layout-preserves-compwin-state<br>             (equal comp-win-state <tick>hidden))<br>        (ecb-toggle-compile-window -1))))'
        },
        {
          function : 'ecb-layout-top-p',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return not nil if current layout or layout NAME is of type top."',
          prototype : '(defun ecb-layout-top-p (&optional name)',
          parameter : '&optional name',
          lispcode : '(defun ecb-layout-top-p (&optional name)<br>  (equal <tick>top (ecb-get-layout-type name)))'
        },
        {
          function : 'ecb-layout-type-p',
          filename : 'ecb/ecb-layout.el',
          parameter : 'type &optional err',
          lispcode : '(defun ecb-layout-type-p (type &optional err)<br>  (if (not (member type ecb-layout-types))<br>      (if err<br>          (error <apo>Only left, right, top and left-right are allowed as types!<apo>)<br>        nil)<br>    t))'
        },
        {
          function : 'ecb-layout-undefine',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Unbind ecb-layout-function-<NAME>, ecb-delete-window-ecb-windows-<NAME>,<br>ecb-delete-other-windows-ecb-windows-<NAME> and remove NAME from<br>`ecb-available-layouts"."',
          prototype : '(defun ecb-layout-undefine (name)',
          parameter : 'name',
          lispcode : '(defun ecb-layout-undefine (name)<br>  (fmakunbound (intern (format <apo>ecb-layout-function-%s<apo> name)))<br>  (fmakunbound (intern (format <apo>ecb-delete-window-ecb-windows-%s<apo> name)))<br>  (ecb-available-layouts-remove name))'
        },
        {
          function : 'ecb-layout-window-sync',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Synchronizes all special ECB-buffers with current buffer.<br>Depending on the contents of current buffer this function performs different<br>synchronizing tasks but only if ECB is active and point stays in an<br>edit-window.<br><br>Runs all functions registered in `ecb-autocontrol/sync-fcn-register".<br>Functions registered with a ecb-buffer run only if that buffer is currently<br>displayed in an ecb-window.<br><br>If WINDOWS-LIST is not nil then this list of ecb-windows is used otherwise<br>it will be computed."',
          prototype : '(defun ecb-layout-window-sync (&optional window-list)',
          parameter : '&optional window-list',
          lispcode : '(defun ecb-layout-window-sync (&optional window-list)<br>  (when (and ecb-minor-mode<br>             (not (ecb-windows-all-hidden))<br>             (ecb-point-in-edit-window-number))<br>    ;; look in the sync-register and call all sync-function without a<br>    ;; buffer-name and all registered with a buffer-name if that buffer is<br>    ;; contained in the list of buffers returned by<br>    ;; ecb-get-current-visible-ecb-buffers.<br>    (let ((visible-ecb-buffers (ecb-get-current-visible-ecb-buffers window-list)))<br>      (dolist (elem ecb-autocontrol/sync-fcn-register)'
        },
        {
          function : 'ecb-left-trim',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return a string stripped of all leading whitespaces of STR."',
          prototype : '(defun ecb-left-trim (str)',
          parameter : 'str',
          lispcode : '(defun ecb-left-trim (str)<br>  (let ((split-result (split-string str <apo>^[\n\t ]*<apo>)))<br>    (or (or (and (cdr split-result) ;; GNU Emacs > 21.3<br>                 (car (cdr split-result)))<br>            (car split-result))<br>        <apo><apo>)))'
        },
        {
          function : 'ecb-load-in-progress-p',
          filename : 'ecb/ecb-util.el',
          parameter : '',
          lispcode : '(defun ecb-load-in-progress-p ()<br>  load-in-progress)<br><br>;;; ----- User Interrupt handling -------------------------'
        },
        {
          function : 'ecb-load-layouts',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Load all defined layouts"',
          prototype : '(defun ecb-load-layouts ()',
          parameter : '',
          lispcode : '(defun ecb-load-layouts ()<br>  (when ecb-layouts-reload-needed<br>    (require <tick>ecb-layout-defs)<br>    (if (file-readable-p ecb-create-layout-file)<br>        (load-file ecb-create-layout-file))<br>    (setq ecb-layouts-reload-needed nil)))'
        },
        {
          function : 'ecb-make-windows-not-dedicated',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Make all windows of FRAME not dedicated."',
          prototype : '(defun ecb-make-windows-not-dedicated (&optional frame)',
          parameter : '&optional frame',
          lispcode : '(defun ecb-make-windows-not-dedicated (&optional frame)<br>  (mapc (function (lambda (w)<br>                    (set-window-dedicated-p w nil)))<br>        (window-list (or frame (selected-frame)))))'
        },
        {
          function : 'ecb-matching-source-paths',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return all source-paths of `ecb-source-path" which match PATH-TO-MATCH. If<br>SORTED is not nil then the paths are sorted by descending length, means the<br>longest path (which is the best matching) is the first elem and the shortest<br>path the last elem. Otherwise the matching paths are returned in that sequence<br>they occur in `ecb-source-path".<br>Each matching path is a cons in the sense of `ecb-normed-source-paths"."',
          prototype : '(defun ecb-matching-source-paths (path-to-match &optional sorted)',
          parameter : 'path-to-match &optional sorted',
          lispcode : '(defun ecb-matching-source-paths (path-to-match &optional sorted)<br>  (let* ((p-t-m (ecb-fix-filename path-to-match))<br>         (normed-current-source-paths (ecb-normed-source-paths))<br>         (matching-paths<br>          (delq nil<br>                (mapcar (lambda (elem)<br>                          (save-match-data<br>                            (if (string-match (concat <apo>^<apo> (regexp-quote (car elem)))<br>                                              p-t-m)<br>                                elem)))<br>                        normed-current-source-paths))))<br>    (if (not sorted)<br>        matching-paths<br>      (sort matching-paths<br>            (function (lambda (lhs rhs)<br>                        (> (length (car lhs)) (length (car rhs)))))))))'
        },
        {
          function : 'ecb-maximize-action-window',
          filename : 'ecb/ecb-examples.el',
          docstring : '  "Maximize the action-window.<br>I.e. delete all other ECB-windows, so only one ECB-window and the<br>edit-window(s) are visible (and maybe a compile-window). Works<br>also if the ECB-analyse-window is not visible in current layout."',
          prototype : '(defun ecb-maximize-action-window ()',
          parameter : '',
          lispcode : '(defun ecb-maximize-action-window ()<br>  (interactive)<br>  (ecb-maximize-ecb-buffer ecb-examples-action-buffer-name t))'
        },
        {
          function : 'ecb-maximize-bufferinfo-window',
          filename : 'ecb/ecb-examples.el',
          docstring : '  "Maximize the bufferinfo-window.<br>I.e. delete all other ECB-windows, so only one ECB-window and the<br>edit-window(s) are visible (and maybe a compile-window). Works<br>also if the ECB-analyse-window is not visible in current layout."',
          prototype : '(defun ecb-maximize-bufferinfo-window ()',
          parameter : '',
          lispcode : '(defun ecb-maximize-bufferinfo-window ()<br>  (interactive)<br>  (ecb-maximize-ecb-buffer ecb-examples-bufferinfo-buffer-name t))'
        },
        {
          function : 'ecb-maximize-ecb-buffer',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Maximize that window which displays the special ECB-buffer ECB-BUFFER-NAME.<br>Afterwards ECB-BUFFER-NAME is the only visible special ECB-buffer. If optional<br>arg PRESERVE-SELECTED-WINDOW is nil then after maximizing always the current<br>edit-window is selected and if not nil then the currently selected window-type<br>does not change which means: If any ecb-window was selected before maximizing<br>then after maximizing the maximized ecb-window is selected (regardless if its<br>the same as before the maximizing). If the compile window was selected before<br>then it will be selected also after. If an edit-window was selected before it<br>will be selected also after."',
          prototype : '(defun ecb-maximize-ecb-buffer (ecb-buffer-name &optional preserve-selected-window)',
          parameter : 'ecb-buffer-name &optional preserve-selected-window',
          lispcode : '(defun ecb-maximize-ecb-buffer (ecb-buffer-name &optional preserve-selected-window)<br>  (when (equal (selected-frame) ecb-frame)<br>    (let ((curr-point (ecb-where-is-point))<br>          (compwin-hidden (equal <tick>hidden (ecb-compile-window-state))))<br>      ;; maximize the window if ECB-BUFFER-NAME is one of the special<br>      ;; ecb-buffers of current layout<br>      (when (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-buffer-name)<br>        (ecb-redraw-layout-full<br>         t ;; no buffer synchronisation!<br>         (ecb-ecb-buffer-registry-get-set-fcn ecb-buffer-name))<br>        (if compwin-hidden (ecb-toggle-compile-window -1))<br>        (setq ecb-current-maximized-ecb-buffer-name ecb-buffer-name)<br>        ;; point is now in the edit-buffer so maybe we have to move point to the<br>        ;; buffer where it was before.<br>        (when preserve-selected-window<br>          (cl-case (car curr-point)'
        },
        {
          function : 'ecb-maximize-ecb-buffer-new',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Maximize that window which displays the special ECB-buffer ECB-BUFFER-NAME.<br>Afterwards ECB-BUFFER-NAME is the only visible special ECB-buffer. If optional<br>arg PRESERVE-SELECTED-WINDOW is nil then after maximizing always the current<br>edit-window is selected and if not nil then the currently selected window-type<br>does not change which means: If any ecb-window was selected before maximizing<br>then after maximizing the maximized ecb-window is selected (regardless if its<br>the same as before the maximizing). If the compile window was selected before<br>then it will be selected also after. If an edit-window was selected before it<br>will be selected also after."',
          prototype : '(defun ecb-maximize-ecb-buffer-new (ecb-buffer-name &optional preserve-selected-window)',
          parameter : 'ecb-buffer-name &optional preserve-selected-window',
          lispcode : '(defun ecb-maximize-ecb-buffer-new (ecb-buffer-name &optional preserve-selected-window)<br>  (when (equal (selected-frame) ecb-frame)<br>    (let ((curr-point (ecb-where-is-point))<br>          (compwin-hidden (equal <tick>hidden (ecb-compile-window-state))))<br>      ;; maximize the window if ECB-BUFFER-NAME is one of the special<br>      ;; ecb-buffers of current layout<br>      (when (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-buffer-name)<br>        ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>:<br>        ;; - we have to check if ecb-buffer-name ist currently visible. If yes<br>        ;;   we have no problem, if no we have to do:<br>        ;;   1. redrawing full layout to make ecb-buffer-name visible but<br>        ;;      preserving current maximizing state (of an eventually other<br>        ;;      maximizied ecb-window which is possible in left-right-layouts)<br>        ;;   2. maximizing ecb-buffer-name<br>        ;;   3. to make it not too easy we have to deal with hidden windows<br>        ;;      but maybe this is done with step 1....think about it'
        },
        {
          function : 'ecb-maximize-window-analyse',
          filename : 'ecb/ecb-analyse.el',
          docstring : '  "Maximize the ECB-analyse-window.<br>I.e. delete all other ECB-windows, so only one ECB-window and the<br>edit-window(s) are visible (and maybe a compile-window). Works also if the<br>ECB-analyse-window is not visible in current layout."',
          prototype : '(defun ecb-maximize-window-analyse ()',
          parameter : '',
          lispcode : '(defun ecb-maximize-window-analyse ()<br>  (interactive)<br>  (ecb-maximize-ecb-buffer ecb-analyse-buffer-name t))'
        },
        {
          function : 'ecb-maximize-window-directories',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Maximize the ECB-directories-window.<br>I.e. delete all other ECB-windows, so only one ECB-window and the<br>edit-window(s) are visible (and maybe a compile-window). Works also if the<br>ECB-directories-window is not visible in current layout."',
          prototype : '(defun ecb-maximize-window-directories ()',
          parameter : '',
          lispcode : '(defun ecb-maximize-window-directories ()<br>  (interactive)<br>  (if (equal ecb-use-speedbar-instead-native-tree-buffer <tick>dir)<br>      (ecb-maximize-window-speedbar)<br>    (ecb-maximize-ecb-buffer ecb-directories-buffer-name t)))'
        },
        {
          function : 'ecb-maximize-window-history',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Maximize the ECB-history-window.<br>I.e. delete all other ECB-windows, so only one ECB-window and the<br>edit-window(s) are visible (and maybe a compile-window). Works also if the<br>ECB-history-window is not visible in current layout."',
          prototype : '(defun ecb-maximize-window-history ()',
          parameter : '',
          lispcode : '(defun ecb-maximize-window-history ()<br>  (interactive)<br>  (ecb-maximize-ecb-buffer ecb-history-buffer-name t))'
        },
        {
          function : 'ecb-maximize-window-methods',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Maximize the ECB-methods-window.<br>I.e. delete all other ECB-windows, so only one ECB-window and the<br>edit-window(s) are visible (and maybe a compile-window). Works also if the<br>ECB-methods-window is not visible in current layout."',
          prototype : '(defun ecb-maximize-window-methods ()',
          parameter : '',
          lispcode : '(defun ecb-maximize-window-methods ()<br>  (interactive)<br>  (if (equal ecb-use-speedbar-instead-native-tree-buffer <tick>method)<br>      (ecb-maximize-window-speedbar)<br>    (ecb-maximize-ecb-buffer ecb-methods-buffer-name t)))'
        },
        {
          function : 'ecb-maximize-window-sources',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Maximize the ECB-sources-window.<br>I.e. delete all other ECB-windows, so only one ECB-window and the<br>edit-window(s) are visible (and maybe a compile-window). Works also if the<br>ECB-sources-window is not visible in current layout."',
          prototype : '(defun ecb-maximize-window-sources ()',
          parameter : '',
          lispcode : '(defun ecb-maximize-window-sources ()<br>  (interactive)<br>  (if (equal ecb-use-speedbar-instead-native-tree-buffer <tick>source)<br>      (ecb-maximize-window-speedbar)<br>    (ecb-maximize-ecb-buffer ecb-sources-buffer-name t)))'
        },
        {
          function : 'ecb-maximize-window-speedbar',
          filename : 'ecb/ecb-speedbar.el',
          docstring : '  "Maximize the ECB-speedbar-window.<br>I.e. delete all other ECB-windows, so only one ECB-window and the<br>edit-window(s) are visible (and maybe a compile-window). Does nothing if the<br>speedbar-window is not visible within the ECB-frame."',
          prototype : '(defun ecb-maximize-window-speedbar ()',
          parameter : '',
          lispcode : '(defun ecb-maximize-window-speedbar ()<br>  (interactive)<br>  (ecb-maximize-ecb-buffer ecb-speedbar-buffer-name t))<br><br>'
        },
        {
          function : 'ecb-maximize-window-symboldef',
          filename : 'ecb/ecb-symboldef.el',
          docstring : '  "Maximize the ECB-symbol-defnition window.<br>I.e. delete all other ECB-windows, so only one ECB-window and the<br>edit-window(s) are visible (and maybe a compile-window). Works also if the<br>ECB-symboldefinition-window is not visible in current layout."',
          prototype : '(defun ecb-maximize-window-symboldef ()',
          parameter : '',
          lispcode : '(defun ecb-maximize-window-symboldef ()<br>  (interactive)<br>  (ecb-maximize-ecb-buffer ecb-symboldef-buffer-name t))'
        },
        {
          function : 'ecb-maximized-ecb-buffer-name',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return the currently maximized special ecb-buffer-name or nil if there is none."',
          prototype : '(defun ecb-maximized-ecb-buffer-name ()',
          parameter : '',
          lispcode : '(defun ecb-maximized-ecb-buffer-name ()<br>  ecb-current-maximized-ecb-buffer-name)'
        },
        {
          function : 'ecb-member',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Find the first occurrence of ITEM in LIST.<br>Return the sublist of LIST whose car is ITEM. Comparison is done via `equal"<br>unless TEST-FCN is not nil: In this case TEST-FCN will be used to compare ITEM<br>with the elements of LIST. If TEST-FCN is `eq" then `memq" is called for<br>optimization."',
          prototype : '(defun ecb-member (item list &optional test-fcn)',
          parameter : 'item list &optional test-fcn',
          lispcode : '(defun ecb-member (item list &optional test-fcn)<br>  (if test-fcn<br>      (if (eq test-fcn <tick>eq)<br>          ;; some optimization<br>          (memq item list)<br>        (progn<br>          (while (and list (not (funcall test-fcn item (car list))))<br>            (setq list (cdr list)))<br>          list))'
        },
        {
          function : 'ecb-member-of-symbol/value-list',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Returns not nil when VALUE is a member of that list which is build from<br>LIST by using the symbol-value if a list-member is a symbol and otherwise the<br>list-member itself. If a member then the matching elem of LIST is returned.<br><br>Per default comparison between VALUE and such a list-elem is done by `equal"<br>unless third optional argument COMPARE-FCN is not nil: Then this function is<br>used.<br><br>If ELEM-ACCESSOR is a function then it is used to get that part of an elem<br>of LIST for which the rule above should be applied. If RETURN-ACCESSOR is a<br>function then it is used to get that part of that list-elem which is equal<br>according to the rules above."',
          prototype : '(defun ecb-member-of-symbol/value-list (value list &optional elem-accessor                                              return-accessor compare-fcn)',
          parameter : 'value list &optional elem-accessor return-accessor compare-fcn',
          lispcode : '(defun ecb-member-of-symbol/value-list (value list &optional elem-accessor<br>                                              return-accessor compare-fcn)<br>  (let ((elem-acc (or elem-accessor <tick>identity))<br>        (return-acc (or return-accessor <tick>identity))<br>        (cmp-fcn (or compare-fcn <tick>equal)))<br>    (catch <tick>exit<br>      (dolist (elem list)<br>        (let ((case-fold-search t)<br>              (e (funcall elem-acc elem)))<br>          (if (funcall cmp-fcn value (if (symbolp e)<br>                                         (symbol-value e)<br>                                       e))<br>              (throw <tick>exit (funcall return-acc elem)))<br>          nil)))))<br><br>;; tests<br><br>;; (ecb-member-of-symbol/value-list ecb-directories-buffer-name'
        },
        {
          function : 'ecb-menu-item',
          filename : 'ecb/ecb.el',
          docstring : '  "Removed XEmacs compatible menu item"',
          prototype : '(defun ecb-menu-item (item)',
          parameter : 'item',
          lispcode : '(defun ecb-menu-item (item)<br>    item)'
        },
        {
          function : 'ecb-merge-face',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Merge FACE either to a buffer-part or to TEXT.<br>In both cases START and END define the region which should be<br>faced. The FACE is merged, i.e. the values of all face-attributes<br>of FACE take effect and the values of all face-attributes of the<br>buffer-part or TEXT which are not set by FACE are preserved.<br><br>If always returns TEXT (if not nil then modified with FACE)."',
          prototype : '(defun ecb-merge-face (face start end &optional text)',
          parameter : 'face start end &optional text',
          lispcode : '(defun ecb-merge-face (face start end &optional text)<br>  (if (null face)<br>    text)<br>  text)'
        },
        {
          function : 'ecb-merge-face-into-text',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Merge FACE to the already precolored TEXT so the values of all<br>face-attributes of FACE take effect and but the values of all face-attributes<br>of TEXT which are not set by FACE are preserved.<br>If FACE or TEXT is nil then simply original TEXT is returned."',
          prototype : '(defun ecb-merge-face-into-text (text face)',
          parameter : 'text face',
          lispcode : '(defun ecb-merge-face-into-text (text face)<br>  (if (or (null face) (null text))<br>      text<br>    (ecb-merge-face face 0 (length text) text)))'
        },
        {
          function : 'ecb-message-box',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Display a message-box with message MESSAGE-STR and title TITLE-TEXT if<br>TITLE-TEXT is not nil - otherwise "Message-box" is used as title. The title<br>gets always the prefix "ECB - ". Second optional argument BUTTON-TEXT<br>specifies the text of the message-box button; if nil then "OK" is used.<br><br>With GNU Emacs the message itself is the button because GNU Emacs currently<br> does not support dialog-boxes very well.<br><br>If `window-system" is nil then a simple message is displayed in the echo-area."',
          prototype : '(defun ecb-message-box (message-str &optional title-text button-text)',
          parameter : 'message-str &optional title-text button-text',
          lispcode : '(defun ecb-message-box (message-str &optional title-text button-text)<br>  (let ((button (if (stringp button-text)<br>                    button-text<br>                  <apo>OK<apo>))<br>        (title (concat <apo>ECB<apo><br>                       (if (stringp title-text)<br>                           (concat <apo> - <apo> title-text)<br>                         <apo> Message<apo>))))<br>    (if (not window-system)<br>      (message (concat title <apo> <apo> message-str)))))<br>'
        },
        {
          function : 'ecb-method-browser-initialize',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Initialize the method-browser of ECB. If optional arg NO-CACHES is not nil<br>then the caches used by the method-browser will not be initialized."',
          prototype : '(defun ecb-method-browser-initialize (&optional no-caches)',
          parameter : '&optional no-caches',
          lispcode : '(defun ecb-method-browser-initialize (&optional no-caches)<br>  (setq ecb-selected-tag nil)<br>  (setq ecb-methods-root-node nil)<br>  (setq ecb-methods-user-filter-alist nil)<br>  (setq ecb-current-post-processed-tag-table nil)<br>  (unless no-caches<br>    (ecb-method-browser-initialize-caches)))<br>'
        },
        {
          function : 'ecb-method-browser-initialize-caches',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Initialize the caches of the method-browser of ECB."',
          prototype : '(defun ecb-method-browser-initialize-caches ()',
          parameter : '',
          lispcode : '(defun ecb-method-browser-initialize-caches ()<br>  (ecb-clear-tag-tree-cache))'
        },
        {
          function : 'ecb-methods-filter',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Apply a filter to the Methods-buffer to reduce the number of entries.<br>So you get a better overlooking. There are six choices:<br>- Filter by protection: Just insert the protection you want the Methods-buffer<br>  being filtered: private, protected or public!<br>- Filter by regexp: Insert the filter as regular expression.<br>- Filter by tag-class: You can filter by the tag-classes of current<br>  major-mode. The available tag-classes come from the variable<br>  `semantic--symbol->name-assoc-list". The are normally methods, variables<br>  etc.<br>- Filter by current type: In languages which have types like Java or C++ this<br>  filter displays only the current type and all its members (e.g. attributes<br>  and methods). If ECB can not identify the current type in the source-buffer<br>  or in the methods-window then nothing will be done.<br>- Filter by a filter-function: Such a function gets two arguments: a tag and<br>  the source-buffer of this tag. If the tag should be displayed (i.e. not<br>  being filtered out) then the function has to return not nil otherwise nil.<br>- No special filter: This means to display all tags specified with the option<br>  `ecb-show-tokens". If currently some of the above filters are applied they<br>  will be all removed.<br>- Delete the last added: This removes only the topmost filter-layer, means<br>  that filter added last.<br><br>The protection-, the current-type and the tag-class-filter are only available<br>for semantic-supported sources.<br><br>Be aware that the tag-list specified by the option `ecb-show-tags" is the<br>basis of all filters, i.e. tags which are excluded by that option will never<br>be shown regardless of the filter type here!<br><br>All tags which match the applied filter(s) will be displayed in the<br>Methods-buffer.<br><br>If called with a prefix-argument or when optional arg INVERSE is not nil then<br>an inverse filter is applied to the Methods-buffer, i.e. all tags which<br>do NOT match the choosen filter will be displayed in the Methods-buffer!<br><br>Per default the choosen filter will be applied on top of already existing<br>filters. This means that filters applied before are combined with the new<br>filter. This behavior can changed via the option<br>`ecb-methods-filter-replace-existing". But regardless of the setting in<br>`ecb-methods-filter-replace-existing" applying one of the not-inverse filters<br>protection, tag-class or current-type always replaces exactly already existing<br>filters of that type. On the other hand applying more than one inverse<br>tag-class- or protection-filter can make sense.<br><br>Such a filter is only applied to the current source-buffer, i.e. each<br>source-buffer can have its own tag-filters.<br><br>The current active filter will be displayed in the modeline of the<br>Methods-buffer [regexp, prot (= protection), tag-class, function (=<br>filter-function)]. If an inverse filter has been applied then this is<br>signalized by a preceding caret ^. If currently more than 1 filter is applied<br>then always the top-most filter is displayed in the modeline but the fact of<br>more than 1 filter is visualized by the number of the filters - included in<br>parens. You can see all currently applied filters by moving the mouse over the<br>filter-string in modeline of the Methods-buffer: They will displayed as<br>help-echo.<br><br>See the option `ecb-default-tag-filter" if you search for automatically<br>applied default-tag-filters."',
          prototype : '(defun ecb-methods-filter (&optional inverse)',
          parameter : '&optional inverse',
          lispcode : '(defun ecb-methods-filter (&optional inverse)<br>  (interactive <apo>P<apo>)<br>  (ecb-methods-filter-internal inverse))'
        },
        {
          function : 'ecb-methods-filter-apply',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Apply the FILTER of type FILTERTYPE to the buffer SOURCEBUFFER. If INVERSE<br>is not nil then this filter will be applied inverse. FILTER-TYPE-DISPLAY and<br>FILTER-DISPLAY are strings and specify how the FILTER of type FILTERTYPE<br>should be displayed in the modeline of the methods-buffer. If REMOVE-LAST is<br>not nil then the topmost filter will be removed and all other arguments unless<br>SOURCE-BUFFER arguments are ignored. Returns t if the filter has been applied<br>otherwise nil."',
          prototype : '(defun ecb-methods-filter-apply (filtertype filter inverse filter-type-display                                            filter-display                                            source-buffer &optional remove-last)',
          parameter : 'filtertype filter inverse filter-type-display filter-display source-buffer &optional remove-last',
          lispcode : '(defun ecb-methods-filter-apply (filtertype filter inverse filter-type-display<br>                                            filter-display<br>                                            source-buffer &optional remove-last)<br>  (with-current-buffer source-buffer<br>    (if (and (not remove-last)<br>             (member filtertype <tick>(protection tag-class curr-type))<br>             (not (ecb--semantic-active-p)))<br>        (ecb-error <apo>A %s-filter <tick>%s<tick> can only applied to semantic-supported sources!<apo><br>                   filtertype filter)))<br>  (let* ((filter-elem (assoc source-buffer ecb-methods-user-filter-alist))<br>         (new-filter-spec (and filtertype<br>                               (list filtertype filter (if inverse <tick>not <tick>identity)<br>                                     filter-type-display filter-display)))<br>         (replace-all (and (not remove-last)<br>                           (not (equal ecb-methods-filter-replace-existing <tick>never))<br>                           (or (equal ecb-methods-filter-replace-existing <tick>always)<br>                               (y-or-n-p <apo>Should the new filter replace existing ones? <apo>))))<br>         (replace-filter-type (and (not inverse)<br>                                   (not replace-all)<br>                                   (not remove-last)<br>                                   (assoc filtertype (cdr filter-elem))<br>                                   (member filtertype <tick>(protection tag-class current-type))))<br>         (filters (or (and replace-filter-type<br>                           (progn<br>                             (setcdr filter-elem<br>                                     (ecb-remove-assoc filtertype (cdr filter-elem)))<br>                             (append (cdr filter-elem) (list new-filter-spec))))<br>                      (and remove-last<br>                           (nreverse (cdr (reverse (cdr filter-elem)))))<br>                      (and new-filter-spec ;; if nil there should be no filter anymore<br>                           (if replace-all<br>                               new-filter-spec ;; just the new filter-spec<br>                             (append (cdr filter-elem) (list new-filter-spec)))))))<br>    (if filter-elem<br>        (setcdr filter-elem filters)<br>      (if filters<br>          (setq ecb-methods-user-filter-alist<br>                (cons (cons source-buffer filters) ecb-methods-user-filter-alist)))))<br>  (when (buffer-live-p source-buffer)<br>    (with-current-buffer source-buffer<br>      (if (ecb--semantic-active-p)<br>          ;; For semantic-sources we do not use <backtick>ecb-rebuild-methods-buffer)<tick><br>          ;; because this would always reparse the source-buffer even if not<br>          ;; necessary.<br>          (save-restriction<br>            (widen)<br>            (ecb-rebuild-methods-buffer-with-tagcache<br>             (ecb-fetch-semantic-tags)))<br>        (ecb-rebuild-methods-buffer-fully)))<br>    (if (with-current-buffer ecb-methods-buffer-name<br>          (tree-buffer-empty-p))<br>        (progn<br>          (ecb-methods-filter-apply nil nil nil <apo><apo> <apo><apo> source-buffer t)<br>          (message <apo>ECB has not applied this filter because it would filter out all nodes!<apo>)'
        },
        {
          function : 'ecb-methods-filter-by-current-type',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Display only the current-type and its contents in the methods-buffer. The<br>argument INVERSE is ignored here."',
          prototype : '(defun ecb-methods-filter-by-current-type (inverse source-buffer &optional                                                   tag)',
          parameter : 'inverse source-buffer &optional tag',
          lispcode : '(defun ecb-methods-filter-by-current-type (inverse source-buffer &optional<br>                                                   tag)<br>  (let* ((curr-type-tag (or (and (ecb--semantic-tag-p tag)<br>                                 (with-current-buffer source-buffer<br>                                   (ecb-get-type-tag-of-tag tag)))<br>                            (cond ((ecb-point-in-edit-window-number)<br>                                   (if (ecb--semantic-active-p)<br>                                       (with-current-buffer source-buffer<br>                                         (ecb-get-type-tag-of-tag (ecb-get-real-curr-tag)))))<br>                                  ((equal (current-buffer)<br>                                          (ecb-buffer-obj ecb-methods-buffer-name))<br>                                   (let ((node (tree-buffer-get-node-at-point)))<br>                                     (and node<br>                                          (tree-node->data (ecb-get-type-node-of-node node)))))<br>                                  (t (ecb-error <apo>ECB can not identify the current-type-tag!<apo>)))))<br>         (curr-tag-type-name-hierachy (and curr-type-tag<br>                                           (with-current-buffer source-buffer<br>                                             (ecb-get-type-name-hierarchy-of-current-tag<br>                                              curr-type-tag)))))<br>    (if (and curr-type-tag curr-tag-type-name-hierachy)<br>        (ecb-methods-filter-apply <tick>current-type<br>                                  (cons curr-tag-type-name-hierachy<br>                                        <tick>ecb-methods-filter-perform-current-type)<br>                                  nil<br>                                  <apo>Type<apo><br>                                  (ecb--semantic-tag-name curr-type-tag)<br>                                  source-buffer)<br>      (ecb-error <apo>ECB can not identify the current-type!<apo>))))'
        },
        {
          function : 'ecb-methods-filter-by-function',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Filter the Methods-buffer by a filter-function."',
          prototype : '(defun ecb-methods-filter-by-function (inverse source-buffer &optional fcn-name)',
          parameter : 'inverse source-buffer &optional fcn-name',
          lispcode : '(defun ecb-methods-filter-by-function (inverse source-buffer &optional fcn-name)<br>  (let ((filter-fcn-name (or fcn-name<br>                             (completing-read <apo>Tag-filter-function: <apo><br>                                              obarray <tick>fboundp t))))<br>    (ecb-methods-filter-apply <tick>function<br>                              (cons (intern filter-fcn-name)<br>                                    nil)<br>                              inverse<br>                              (concat (and inverse <apo>^<apo>) <apo>Function<apo>)<br>                              filter-fcn-name<br>                              source-buffer)))'
        },
        {
          function : 'ecb-methods-filter-by-prot',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Filter the Methods-buffer by protection."',
          prototype : '(defun ecb-methods-filter-by-prot (inverse source-buffer &optional prot)',
          parameter : 'inverse source-buffer &optional prot',
          lispcode : '(defun ecb-methods-filter-by-prot (inverse source-buffer &optional prot)<br>  (let ((choice (or prot<br>                    (ecb-query-string <apo>Protection filter:<apo><br>                                      <tick>(<apo>private<apo> <apo>protected<apo> <apo>public<apo>)))))<br>    (ecb-methods-filter-apply <tick>protection<br>                              (cons (intern choice) nil)<br>                              inverse<br>                              (concat (and inverse <apo>^<apo>) <apo>Prot<apo>)<br>                              choice<br>                              source-buffer)))'
        },
        {
          function : 'ecb-methods-filter-by-regexp',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Filter the Methods-buffer by a regular expression."',
          prototype : '(defun ecb-methods-filter-by-regexp (inverse source-buffer &optional regexp)',
          parameter : 'inverse source-buffer &optional regexp',
          lispcode : '(defun ecb-methods-filter-by-regexp (inverse source-buffer &optional regexp)<br>  (let ((regexp-str (or regexp (read-string <apo>Filter-regexp: <apo>))))<br>    (ecb-methods-filter-apply <tick>regexp<br>                              (if (> (length regexp-str) 0)<br>                                  (cons regexp-str nil)<br>                                nil)<br>                              inverse<br>                              (concat (and inverse <apo>^<apo>) <apo>Regexp<apo>)<br>                              (if (> (length regexp-str) 0) regexp-str nil)<br>                              source-buffer)))'
        },
        {
          function : 'ecb-methods-filter-by-tag-class',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Filter the Methods-buffer by a tag-class."',
          prototype : '(defun ecb-methods-filter-by-tag-class (inverse source-buffer                                                &optional tag-class)',
          parameter : 'inverse source-buffer &optional tag-class',
          lispcode : '(defun ecb-methods-filter-by-tag-class (inverse source-buffer<br>                                                &optional tag-class)<br>  (let* ((curr-semantic-symbol->name-assoc-list<br>          (with-current-buffer source-buffer<br>            (ecb--semantic-symbol->name-assoc-list)))<br>         (choice (or tag-class<br>                     (ecb-query-string <apo>Tag-class filter:<apo><br>                                       (mapcar <tick>cdr<br>                                               curr-semantic-symbol->name-assoc-list))))<br>         (class (or tag-class<br>                    (symbol-name<br>                     (car (delq nil (mapcar (function (lambda (e)<br>                                                        (if (ecb-string= (cdr e) choice)<br>                                                            (car e))))<br>                                            curr-semantic-symbol->name-assoc-list)))))))<br>    (ecb-methods-filter-apply <tick>tag-class<br>                              (cons (intern class) nil)<br>                              inverse<br>                              (concat (and inverse <apo>^<apo>) <apo>Tagclass<apo>)<br>                              (cdr (assoc (intern class)<br>                                          curr-semantic-symbol->name-assoc-list))<br>                              source-buffer)))<br><br>'
        },
        {
          function : 'ecb-methods-filter-current-type',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Display in the Methods-buffer only the current type and its members. For<br>further details see `ecb-methods-filter"."',
          prototype : '(defun ecb-methods-filter-current-type ()',
          parameter : '',
          lispcode : '(defun ecb-methods-filter-current-type ()<br>  (interactive)<br>  (ecb-methods-filter-internal nil <tick>curr-type))'
        },
        {
          function : 'ecb-methods-filter-delete-last',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Remove the most recent filter from the Methods-buffer. For further details see<br>`ecb-methods-filter"."',
          prototype : '(defun ecb-methods-filter-delete-last ()',
          parameter : '',
          lispcode : '(defun ecb-methods-filter-delete-last ()<br>  (interactive)<br>  (ecb-methods-filter-internal nil <tick>delete-last))'
        },
        {
          function : 'ecb-methods-filter-function',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Filter the methods-buffer by a function. If INVERSE is not nil (called<br>with a prefix arg) then an inverse filter is applied. For further details see<br>`ecb-methods-filter"."',
          prototype : '(defun ecb-methods-filter-function (&optional inverse)',
          parameter : '&optional inverse',
          lispcode : '(defun ecb-methods-filter-function (&optional inverse)<br>  (interactive <apo>P<apo>)<br>  (ecb-methods-filter-internal inverse <tick>function))'
        },
        {
          function : 'ecb-methods-filter-internal',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "FILTER-TYPE has to be one of the symbols "regexp, "protection,<br>"tag-class, "curr-type, "function, "no-filter or "delete-last."',
          prototype : '(defun ecb-methods-filter-internal (inverse &optional filter-type)',
          parameter : 'inverse &optional filter-type',
          lispcode : '(defun ecb-methods-filter-internal (inverse &optional filter-type)<br>  (if (with-current-buffer ecb-methods-buffer-name<br>        (tree-buffer-empty-p))<br>      (message <apo>There is nothing to filter in an empty Methods-buffer!<apo>)<br>    (let* ((source-buffer (ecb-get-source-buffer-for-tag-filter))<br>           (semantic-source-p (with-current-buffer source-buffer<br>                                (ecb--semantic-active-p)))<br>           (choice (or filter-type<br>                       (intern (ecb-query-string<br>                                (format <apo>Apply %sfilter:<apo><br>                                        (if inverse <apo>inverse <apo> <apo><apo>))<br>                                (delq nil (list <apo>regexp<apo><br>                                                (if semantic-source-p <apo>protection<apo>)<br>                                                (if semantic-source-p <apo>tag-class<apo>)<br>                                                (if semantic-source-p <apo>curr-type<apo>)<br>                                                <apo>function<apo> <apo>no-filter<apo> <apo>delete-last<apo>))))<br>                       <tick>no-filter-specified)))<br>      (cl-case choice<br>        (protection<br>         (ecb-methods-filter-by-prot inverse source-buffer))<br>        (tag-class<br>         (ecb-methods-filter-by-tag-class inverse source-buffer))<br>        (regexp<br>         (ecb-methods-filter-by-regexp inverse source-buffer))<br>        (curr-type<br>         (ecb-methods-filter-by-current-type inverse source-buffer))<br>        (function<br>         (ecb-methods-filter-by-function inverse source-buffer))<br>        (delete-last<br>         (ecb-methods-filter-apply nil nil nil <apo><apo> <apo><apo> source-buffer t))<br>        (no-filter<br>         (ecb-methods-filter-apply nil nil nil <apo><apo> <apo><apo> source-buffer))<br>        (otherwise<br>         (ecb-methods-filter-apply nil nil nil <apo><apo> <apo><apo> source-buffer))))))'
        },
        {
          function : 'ecb-methods-filter-inverse',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Apply an inverse filter to the Methods-buffer. This is the same as calling<br>`ecb-methods-filter" with a prefix arg."',
          prototype : '(defun ecb-methods-filter-inverse ()',
          parameter : '',
          lispcode : '(defun ecb-methods-filter-inverse ()<br>  (interactive)<br>  (ecb-methods-filter-internal t))'
        },
        {
          function : 'ecb-methods-filter-modeline-prefix',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Compute a mode-line prefix for the Methods-buffer so the current filter<br>applied to the displayed tags is displayed. This function is only for using by<br>the option `ecb-mode-line-prefixes"."',
          prototype : '(defun ecb-methods-filter-modeline-prefix (buffer-name sel-dir sel-source)',
          parameter : 'buffer-name sel-dir sel-source',
          lispcode : '(defun ecb-methods-filter-modeline-prefix (buffer-name sel-dir sel-source)<br>  (let* ((filters (and sel-source<br>                       (cdr (assoc (ecb-buffer-obj (cdr sel-source))<br>                                   ecb-methods-user-filter-alist))))<br>         (top-filter-spec (ecb-last filters))<br>         (filter-type-str (nth 3 top-filter-spec))<br>         (filter-str (nth 4 top-filter-spec)))<br>    (if (null top-filter-spec)<br>        nil ;; no prefix if no filter<br>      (let ((str (format <apo>[%s%s: %s]<apo><br>                         filter-type-str<br>                         (if (> (length filters) 1)<br>                             (format <apo>(%d)<apo> (length filters))<br>                           <apo><apo>)<br>                         filter-str)))<br>        (put-text-property<br>         0 (length str) <tick>help-echo<br>         (concat <apo>Filter-Stack: <apo><br>                 (mapconcat <tick>identity<br>                            (cl-loop for f-elem being the elements of filters using (index f-elem-index)<br>                                  collect (let ((f-type-str (nth 3 f-elem) )<br>                                                (f-str (nth 4 f-elem)))<br>                                            (format <apo>%d. [%s: %s]<apo> (1+ f-elem-index) f-type-str f-str)))<br>                            <apo>, <apo>))<br>         str)<br>        str))))'
        },
        {
          function : 'ecb-methods-filter-nofilter',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Remove any filter from the Methods-buffer. For further details see<br>`ecb-methods-filter"."',
          prototype : '(defun ecb-methods-filter-nofilter ()',
          parameter : '',
          lispcode : '(defun ecb-methods-filter-nofilter ()<br>  (interactive)<br>  (ecb-methods-filter-internal nil <tick>no-filter))'
        },
        {
          function : 'ecb-methods-filter-perform-current-type',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Perform a current-type filter on TAGLIST. FILTER is a type-name-hierarchy<br>for a certain type. If this hierarchy can be found in TAGLIST a new tag-list<br>is returned which contains only the leaf-type in the hierarchy."',
          prototype : '(defun ecb-methods-filter-perform-current-type (filter taglist)',
          parameter : 'filter taglist',
          lispcode : '(defun ecb-methods-filter-perform-current-type (filter taglist)<br>  (let ((curr-type-filter (reverse filter))<br>        (new-tag-list taglist)<br>        (found-type-tag nil))<br>    (if (null curr-type-filter)<br>        taglist<br>      (catch <tick>not-found<br>        (dolist (type-name curr-type-filter)<br>          (setq found-type-tag<br>                (car (ecb--semantic-find-tags-by-name<br>                      type-name<br>                      (ecb--semantic-find-tags-by-class <tick>type new-tag-list))))<br>          (if (null found-type-tag)<br>              (progn<br>                ;; remove here the filters for current source because the<br>                ;; current-type filter is no longer useable! TODO: Klaus<br>                ;; Berndl <klaus.berndl@sdm.de>: Maybe we should be smarter<br>                ;; and only remove the current-type-filter instead of all<br>                ;; filters. This could be done with<br>                ;; <backtick>ecb-replace-first-occurence<tick> (replace the curr filter with'
        },
        {
          function : 'ecb-methods-filter-protection',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Filter the methods-buffer by protection. If INVERSE is not nil (called<br>with a prefix arg) then an inverse filter is applied. For further details see<br>`ecb-methods-filter"."',
          prototype : '(defun ecb-methods-filter-protection (&optional inverse)',
          parameter : '&optional inverse',
          lispcode : '(defun ecb-methods-filter-protection (&optional inverse)<br>  (interactive <apo>P<apo>)<br>  (ecb-methods-filter-internal inverse <tick>protection))'
        },
        {
          function : 'ecb-methods-filter-regexp',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Filter the methods-buffer by a regexp. If INVERSE is not nil (called<br>with a prefix arg) then an inverse filter is applied. For further details see<br>`ecb-methods-filter"."',
          prototype : '(defun ecb-methods-filter-regexp (&optional inverse)',
          parameter : '&optional inverse',
          lispcode : '(defun ecb-methods-filter-regexp (&optional inverse)<br>  (interactive <apo>P<apo>)<br>  (ecb-methods-filter-internal inverse <tick>regexp))'
        },
        {
          function : 'ecb-methods-filter-tagclass',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Filter the methods-buffer by tag-class. If INVERSE is not nil (called<br>with a prefix arg) then an inverse filter is applied. For further details see<br>`ecb-methods-filter"."',
          prototype : '(defun ecb-methods-filter-tagclass (&optional inverse)',
          parameter : '&optional inverse',
          lispcode : '(defun ecb-methods-filter-tagclass (&optional inverse)<br>  (interactive <apo>P<apo>)<br>  (ecb-methods-filter-internal inverse <tick>tag-class))'
        },
        {
          function : 'ecb-methods-get-data-store',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Get the value for KEY from the tree-buffer-data-store of the Methods-buffer."',
          prototype : '(defun ecb-methods-get-data-store (key)',
          parameter : 'key',
          lispcode : '(defun ecb-methods-get-data-store (key)<br>  (with-current-buffer ecb-methods-buffer-name<br>    (cdr (assoc key (tree-buffer-get-data-store)))))'
        },
        {
          function : 'ecb-methods-menu-activate-hs',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Activates `hs-minor-mode" in the buffer of `ecb-path-selected-source". If<br>this fails then nil is returned otherwise t."',
          prototype : '(defun ecb-methods-menu-activate-hs ()',
          parameter : '',
          lispcode : '(defun ecb-methods-menu-activate-hs ()<br>  (with-current-buffer (get-file-buffer (ecb-path-selected-source <tick>file))<br>    (if (or (not (boundp <tick>hs-minor-mode))<br>            (not hs-minor-mode))<br>        (if (fboundp <tick>hs-minor-mode)<br>            (progn<br>              (hs-minor-mode 1)<br>              t)<br>          nil)<br>      t)))<br>'
        },
        {
          function : 'ecb-methods-menu-creator',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Creates the popup-menus for the methods-buffer."',
          prototype : '(defun ecb-methods-menu-creator (tree-buffer-name node)',
          parameter : 'tree-buffer-name node',
          lispcode : '(defun ecb-methods-menu-creator (tree-buffer-name node)<br>  (setq ecb-layout-prevent-handle-ecb-window-selection t)<br>  (let ((dyn-user-extension<br>         (and (functionp ecb-methods-menu-user-extension-function)<br>              (funcall ecb-methods-menu-user-extension-function<br>                       tree-buffer-name node)))<br>        (dyn-builtin-extension-edit-win (ecb-methods-menu-editwin-entries))<br>        (dyn-builtin-extension-tagfilter (ecb-methods-menu-tagfilter-entries)))<br>    (list (cons ecb-methods-nodetype-tag<br>                (funcall (or ecb-methods-menu-sorter<br>                             <tick>identity)<br>                         (append dyn-user-extension<br>                                 ecb-methods-menu-user-extension<br>                                 dyn-builtin-extension-tagfilter<br>                                 ecb-methods-tag-menu<br>                                 dyn-builtin-extension-edit-win)))<br>          (cons ecb-methods-nodetype-bucket<br>                (funcall (or ecb-methods-menu-sorter<br>                             <tick>identity)<br>                         (append dyn-user-extension<br>                                 ecb-methods-menu-user-extension<br>                                 dyn-builtin-extension-tagfilter<br>                                 ecb-common-methods-menu)))<br>          (cons ecb-methods-nodetype-externtag<br>                (funcall (or ecb-methods-menu-sorter<br>                             <tick>identity)<br>                         (append dyn-user-extension<br>                                 ecb-methods-menu-user-extension<br>                                 dyn-builtin-extension-tagfilter<br>                                 ecb-common-methods-menu))))))'
        },
        {
          function : 'ecb-methods-menu-editwin-entries',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Generate popup-menu-entries for each edit-window if there are at least 2<br>edit-windows. Otherwise return nil."',
          prototype : '(defun ecb-methods-menu-editwin-entries ()',
          parameter : '',
          lispcode : '(defun ecb-methods-menu-editwin-entries ()<br>  (let ((edit-win-list (ecb-canonical-edit-windows-list))<br>        (result nil))<br>    (when (> (length edit-win-list) 1)<br>      (dotimes (i (min 8 (length edit-win-list)))<br>        (setq result<br>              (append result<br>                      (list (list (intern (format <apo>ecb-jump-to-tag-in-editwin%d<apo> (1+ i)))<br>                                  (format <apo>edit-window %d<apo> (1+ i)))))))<br>      (append (list (list <apo>---<apo>)) ;; we want a separator<br>              (list (append (list <apo>Jump to tag in ...<apo>)<br>                            result))))))<br>'
        },
        {
          function : 'ecb-methods-menu-tagfilter-entries',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Generate popup-menu-entries for the tag-filtering"',
          prototype : '(defun ecb-methods-menu-tagfilter-entries ()',
          parameter : '',
          lispcode : '(defun ecb-methods-menu-tagfilter-entries ()<br>  (let* ((curr-semantic-symbol->name-assoc-list<br>          ;; we must not use here (ecb-methods-get-data-store<br>          ;; <tick>semantic-symbol->name-assoc-list) because we do not want the<br>          ;; function-prototypes...<br>          (with-current-buffer (ecb-methods-get-data-store <tick>source-buffer)<br>            (ecb--semantic-symbol->name-assoc-list)))<br>         (prot-list <tick>(<apo>private<apo> <apo>protected<apo> <apo>public<apo>))<br>         (prot-menu-elems nil)<br>         (prot-menu-elems-inverse nil)<br>         (prot-menu-entries nil)<br>         (prot-menu-entries-inverse)<br>         (tag-menu-class-elems nil)<br>         (tag-menu-class-elems-inverse nil)<br>         (tag-menu-class-entries nil)<br>         (tag-menu-class-entries-inverse nil))<br>    ;; First we have to define all the needed tree-buffer-commands for<br>    ;; protection- and tagclass-filtering. But this is only done for<br>    ;; semantic-sources and also the first time.<br>    (when curr-semantic-symbol->name-assoc-list<br>      (dolist (tag-class curr-semantic-symbol->name-assoc-list)<br>        (let ((fcn-sym (intern (format <apo>ecb-methods-filter-by-%s-tagclass<apo><br>                                       (car tag-class)))))<br>          (setq tag-menu-class-elems (cons (cons fcn-sym (cdr tag-class))<br>                                           tag-menu-class-elems))<br>          (when (not (fboundp fcn-sym))<br>            (eval <backtick>(tree-buffer-defpopup-command ,fcn-sym<br>                     ,(format <apo>Filter all tags with tag-class <tick>%s.<apo> (car tag-class))<br>                     (ecb-methods-filter-by-tag-class nil<br>                                                      (ecb-methods-get-data-store <tick>source-buffer)<br>                                                      ,(symbol-name (car tag-class))))))))<br>      (dolist (tag-class curr-semantic-symbol->name-assoc-list)<br>        (let ((fcn-sym (intern (format <apo>ecb-methods-filter-by-%s-tagclass-inverse<apo><br>                                       (car tag-class)))))<br>          (setq tag-menu-class-elems-inverse<br>                (cons (cons fcn-sym (concat <apo>not <apo> (cdr tag-class)))<br>                      tag-menu-class-elems-inverse))<br>          (when (not (fboundp fcn-sym))<br>            (eval <backtick>(tree-buffer-defpopup-command ,fcn-sym<br>                     ,(format <apo>Filter all tags with tag-class unequal <tick>%s.<apo><br>                              (car tag-class))<br>                     (ecb-methods-filter-by-tag-class t<br>                                                      (ecb-methods-get-data-store <tick>source-buffer)<br>                                                      ,(symbol-name (car tag-class))))))))<br>      (dolist (prot prot-list)<br>        (let ((fcn-sym (intern (format <apo>ecb-methods-filter-by-%s-prot<apo> prot))))<br>          (setq prot-menu-elems (cons (cons fcn-sym prot)<br>                                      prot-menu-elems))<br>          (when (not (fboundp fcn-sym))<br>            (eval <backtick>(tree-buffer-defpopup-command ,fcn-sym<br>                     ,(format <apo>Filter all tags with %s protection.<apo> prot)<br>                     (ecb-methods-filter-by-prot nil<br>                                                 (ecb-methods-get-data-store <tick>source-buffer)<br>                                                 ,prot))))))<br>      (dolist (prot prot-list)<br>        (let ((fcn-sym (intern (format <apo>ecb-methods-filter-by-%s-prot-inverse<apo> prot))))<br>          (setq prot-menu-elems-inverse<br>                (cons (cons fcn-sym (concat <apo>not <apo> prot))<br>                      prot-menu-elems-inverse))<br>          (when (not (fboundp fcn-sym))<br>            (eval <backtick>(tree-buffer-defpopup-command ,fcn-sym<br>                     ,(format <apo>Filter all tags with not %s protection.<apo> prot)<br>                     (ecb-methods-filter-by-prot t<br>                                                 (ecb-methods-get-data-store <tick>source-buffer)<br>                                                 ,prot)))))))<br>    ;; building the menu-entries-list for tag-classes and protections.<br>    (dolist (elem tag-menu-class-elems)<br>      (setq tag-menu-class-entries<br>            (append tag-menu-class-entries<br>                    (list (list (car elem) (cdr elem))))))<br>    (dolist (elem tag-menu-class-elems-inverse)<br>      (setq tag-menu-class-entries-inverse<br>            (append tag-menu-class-entries-inverse<br>                    (list (list (car elem) (cdr elem))))))<br>    (dolist (elem prot-menu-elems)<br>      (setq prot-menu-entries<br>            (append prot-menu-entries<br>                    (list (list (car elem) (cdr elem))))))<br>    (dolist (elem prot-menu-elems-inverse)<br>      (setq prot-menu-entries-inverse<br>            (append prot-menu-entries-inverse<br>                    (list (list (car elem) (cdr elem))))))<br>    ;; building the complete filter-menu<br>    (append nil ;; (list (list <apo>---<apo>)) ;; we want a separator<br>            (list (append (list <apo>Filter tags<apo>)<br>                          (list <tick>(ecb-methods-filter-by-nothing-popup<br>                                  <apo>No tag filter<apo>)<br>                                <tick>(ecb-methods-filter-delete-last-popup<br>                                  <apo>Remove last added<apo>)<br>                                <tick>(<apo>---<apo>)<br>                                <tick>(ecb-methods-filter-by-regexp-popup<br>                                  <apo>By regexp<apo>))<br>                          (when prot-menu-entries<br>                            (list (append (list <apo>By protection<apo>)<br>                                          prot-menu-entries)))<br>                          (when tag-menu-class-entries<br>                            (list (append (list <apo>By tag-class<apo>)<br>                                          tag-menu-class-entries)))<br>                          (when curr-semantic-symbol->name-assoc-list<br>                            (list <tick>(ecb-methods-filter-by-current-type-popup<br>                                    <apo>By current type<apo>)))<br>                          (list <tick>(ecb-methods-filter-by-function-popup<br>                                  <apo>By a filter-function<apo>)<br>                                <tick>(<apo>---<apo>)<br>                                <tick>(ecb-methods-filter-by-regexp-popup-inverse<br>                                  <apo>By inverse regexp<apo>))'
        },
        {
          function : 'ecb-methods-node-get-semantic-type',
          filename : 'ecb/ecb-method-browser.el',
          parameter : 'node',
          lispcode : '(defun ecb-methods-node-get-semantic-type (node)<br>  (cond ((= ecb-methods-nodetype-bucket (tree-node->type node))<br>         (nth 2 (tree-node->data node)))<br>        ((= ecb-methods-nodetype-tag (tree-node->type node))<br>         (ignore-errors (ecb--semantic-tag-class (tree-node->data node))))<br>        (t nil)))<br>'
        },
        {
          function : 'ecb-methods-node-mouse-highlighted-p',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Return not nil when NODE has a positioned tag as data or belongs to the<br>completions. This means that this node should be highlighted when mouse is<br>moved over it."',
          prototype : '(defun ecb-methods-node-mouse-highlighted-p (node)',
          parameter : 'node',
          lispcode : '(defun ecb-methods-node-mouse-highlighted-p (node)<br>  (or (not (equal (tree-node->type node) ecb-methods-nodetype-tag))<br>      (ecb--semantic-tag-with-position-p (tree-node->data node))<br>      (ecb--semantic-tag-faux-p (tree-node->data node))))'
        },
        {
          function : 'ecb-minor-mode',
          filename : 'ecb/ecb.el',
          docstring : '  "Toggle ECB minor mode.<br>With prefix argument ARG, turn on if positive, otherwise off. Return non-nil<br>if the minor mode is enabled.<br><br>{ecb-mode-map}"',
          prototype : '(defun ecb-minor-mode (&optional arg)',
          parameter : '&optional arg',
          lispcode : '(defun ecb-minor-mode (&optional arg)<br>  (interactive <apo>P<apo>)<br>  (let ((new-state (if (null arg)<br>                       (not ecb-minor-mode)<br>                     (> (prefix-numeric-value arg) 0))))<br>    (if new-state<br>        (ecb-activate-internal)<br>      (ecb-deactivate-internal)))<br><br>    (force-mode-line-update t)<br><br>  ecb-minor-mode)<br><br>'
        },
        {
          function : 'ecb-mode-line-format',
          filename : 'ecb/ecb-mode-line.el',
          docstring : '  "Update all of the modelines of each ecb buffer."',
          prototype : '(defun ecb-mode-line-format ()',
          parameter : '',
          lispcode : '(defun ecb-mode-line-format ()<br>  (save-excursion<br>    ;; update the modeline for each visible(!!) ECB-buffer<br>    (mapc (function<br>           (lambda (buffer)<br>             (let* ((prefix-elem (ecb-some (function<br>                                            (lambda (p)<br>                                              (cond ((stringp (car p))<br>                                                     (if (ecb-string= (car p)<br>                                                                      (buffer-name buffer))<br>                                                         (cdr p)<br>                                                       nil))<br>                                                    ((and (symbolp (car p))<br>                                                          (boundp (car p))<br>                                                          (stringp (symbol-value (car p))))<br>                                                     (if (ecb-string= (symbol-value (car p))<br>                                                                      (buffer-name buffer))<br>                                                         (cdr p)<br>                                                       nil))<br>                                                    (t (ecb-error <apo>ecb-mode-line-format: Can not get prefix-elem: %s<apo> p)))))<br>                                           ecb-mode-line-prefixes))<br>                    (prefix-str (cl-typecase prefix-elem<br>                                  (null nil)<br>                                  (string prefix-elem)<br>                                  (function (funcall prefix-elem<br>                                                     (buffer-name buffer)<br>                                                     ecb-path-selected-directory<br>                                                     (ecb-path-selected-source)))))<br>                    (data-elem (ecb-some (function<br>                                          (lambda (p)<br>                                            (cond ((stringp (car p))<br>                                                   (if (ecb-string= (car p)<br>                                                                    (buffer-name buffer))<br>                                                       (cdr p)<br>                                                     nil))<br>                                                  ((and (symbolp (car p))<br>                                                        (boundp (car p))<br>                                                        (stringp (symbol-value (car p))))<br>                                                   (if (ecb-string= (symbol-value (car p))<br>                                                                    (buffer-name buffer))<br>                                                       (cdr p)<br>                                                     nil))<br>                                                  (t (ecb-error <apo>ecb-mode-line-format: Can not get data-elem: %s<apo> p)))))<br>                                         ecb-mode-line-data))<br>                    (data-str (cond ((equal data-elem <tick>sel-dir)<br>                                     ecb-path-selected-directory)<br>                                    ((equal data-elem <tick>sel-source)<br>                                     (and ecb-path-selected-source<br>                                          (ecb-path-selected-source <tick>buffername)))<br>                                    ((stringp data-elem)<br>                                     data-elem)<br>                                    ((null data-elem)<br>                                     nil)<br>                                    ((functionp data-elem)<br>                                     (funcall data-elem<br>                                              (buffer-name buffer)<br>                                              ecb-path-selected-directory<br>                                              (ecb-path-selected-source))))))<br>               ;; Display a default help-echo but only if the modeline-data is<br>               ;; not computed by a user-function.<br>               (when (and (not (functionp data-elem))<br>                          (stringp data-str))<br>                 (put-text-property 0 (length data-str) <tick>help-echo<br>                                    <apo>Mouse-2 toggles maximizing, mouse-3 displays a popup-menu<apo><br>                                    data-str))<br>               ;; Now set the modeline<br>               (ecb-mode-line-set (buffer-name buffer)<br>                                  ecb-frame'
        },
        {
          function : 'ecb-mode-line-make-modeline-str',
          filename : 'ecb/ecb-mode-line.el',
          docstring : '  "Applies FACE to the STR. In additon it applies a help-echo to STR if STR<br>contains a text-property "help-echo."',
          prototype : '(defun ecb-mode-line-make-modeline-str (str face)',
          parameter : 'str face',
          lispcode : '(defun ecb-mode-line-make-modeline-str (str face)<br>  (let ((strcp (copy-sequence str)))<br>    (list (propertize strcp <tick>face face))))'
        },
        {
          function : 'ecb-mode-line-set',
          filename : 'ecb/ecb-mode-line.el',
          docstring : '  "Sets the mode line for a buffer. The mode line has the scheme:<br>"[WIN-NR ][PREFIX[: ]][TEXT]". WIN-NR is the number of the window which<br>displays BUFFER-NAME and is only displayed if the option<br>`ecb-mode-line-display-window-number" is not nil and if NO-WIN-NR is nil. See<br>this option for a description of the window-number. WIN-NR will be displayed<br>as "W-<number>"."',
          prototype : '(defun ecb-mode-line-set (buffer-name frame prefix &optional text no-win-nr)',
          parameter : 'buffer-name frame prefix &optional text no-win-nr',
          lispcode : '(defun ecb-mode-line-set (buffer-name frame prefix &optional text no-win-nr)<br>  (when (get-buffer-window buffer-name frame)<br>    (let ((shown-prefix (if (stringp prefix)<br>                            (concat <apo> <apo> prefix (if (stringp text) <apo>: <apo> <apo><apo>))<br>                          (if (stringp text) <apo> <apo> <apo><apo>)))<br>          (win-width (window-width (get-buffer-window buffer-name)))<br>          (available-text-width nil))<br>      (setq shown-prefix (ecb-fit-str-to-width shown-prefix (1- win-width) <tick>right))<br>      (setq available-text-width (- win-width<br>                                   (+ (length shown-prefix)<br>                                      (if (and ecb-mode-line-display-window-number<br>                                               (not no-win-nr))<br>                                          4 0))))<br>      (ecb-mode-line-update-buffer<br>       buffer-name<br>       (list (if (and ecb-mode-line-display-window-number<br>                      (not no-win-nr))<br>                 ;; With :eval we must not use a list<br>                 <tick>(:eval (car (ecb-mode-line-make-modeline-str<br>                               (format <apo> W-%d<apo><br>                                       (1- (ecb-window-in-window-list-number (ecb-canonical-windows-list))))<br>                               ecb-mode-line-win-nr-face)))<br>               <apo><apo>)<br>             (ecb-mode-line-make-modeline-str shown-prefix<br>                                              ecb-mode-line-prefix-face)<br>             (ecb-mode-line-make-modeline-str<br>              (concat (if (stringp text)<br>                          (ecb-fit-str-to-width text<br>                                                available-text-width<br>                                                <tick>left)))<br>              ecb-mode-line-data-face))))))'
        },
        {
          function : 'ecb-mode-line-update-buffer',
          filename : 'ecb/ecb-mode-line.el',
          docstring : '  "Update the given buffer...."',
          prototype : '(defun ecb-mode-line-update-buffer (buffer-name new-mode-line-format)',
          parameter : 'buffer-name new-mode-line-format',
          lispcode : '(defun ecb-mode-line-update-buffer (buffer-name new-mode-line-format)<br>  (if (ecb-buffer-obj buffer-name)<br>      (with-current-buffer buffer-name<br>        (setq mode-line-format new-mode-line-format)<br>	  (force-mode-line-update))<br>    (message <apo>This buffer isn<tick>t available: %s<apo>  buffer-name)))'
        },
        {
          function : 'ecb-modify-emacs-variable',
          filename : 'ecb/ecb.el',
          docstring : '  "Stores or restores the old value of the Emacs-variable symbol VAR.<br>VAR has to be a bound symbol for a variable. ACTION is either "store or<br>"restore. The optional arg NEW-VALUE is only used when ACTION is "store and is<br>that value VAR should be set to. After calling with ACTION is "restore the<br>value of VAR is as before storing a NEW-VALUE for variable-symbol VAR."',
          prototype : '(defun ecb-modify-emacs-variable (var action &optional new-value)',
          parameter : 'var action &optional new-value',
          lispcode : '(defun ecb-modify-emacs-variable (var action &optional new-value)<br>  (cl-case action<br>    (store<br>     (or (ecb-find-assoc var ecb-temporary-changed-emacs-variables-alist)<br>         (progn<br>           (setq ecb-temporary-changed-emacs-variables-alist<br>                 (ecb-add-assoc (cons var (symbol-value var))<br>                                ecb-temporary-changed-emacs-variables-alist))<br>           (set var new-value))))<br>    (restore<br>     (let ((elem (ecb-find-assoc var ecb-temporary-changed-emacs-variables-alist)))<br>       (when elem<br>         (set var (cdr elem))<br>         (setq ecb-temporary-changed-emacs-variables-alist<br>               (ecb-remove-assoc var ecb-temporary-changed-emacs-variables-alist)))))))<br>'
        },
        {
          function : 'ecb-mouse-over-analyse-node',
          filename : 'ecb/ecb-analyse.el',
          docstring : '  "Displays help text if mouse moves over a node in the analyse buffer or if<br>CLICK-FORCE is not nil and always with regards to the settings in<br>`ecb-analyse-show-node-info". NODE is the node for which help text should be<br>displayed, WINDOW is the related window, NO-MESSAGE defines if the help-text<br>should be printed here."',
          prototype : '(defun ecb-mouse-over-analyse-node (node &optional window no-message click-force)',
          parameter : 'node &optional window no-message click-force',
          lispcode : '(defun ecb-mouse-over-analyse-node (node &optional window no-message click-force)<br>  (let ((str (when (or click-force<br>                       (ecb-show-minibuffer-info node window<br>                                                 (car<br>                                                 ecb-analyse-show-node-info)))<br>               (if (equal (cdr ecb-analyse-show-node-info) <tick>full-info)<br>                   (ecb-analyse-gen-tag-info (car (tree-node->data node)))<br>                 (tree-node->name node)))))<br>    (prog1 str<br>      (unless no-message<br>        (ecb-nolog-message str)))))'
        },
        {
          function : 'ecb-mouse-over-directory-node',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Displays help text if mouse moves over a node in the directory buffer or if<br>CLICK-FORCE is not nil and always with regards to the settings in<br>`ecb-directories-show-node-info". NODE is the node for which help text should<br>be displayed, WINDOW is the related window, NO-MESSAGE defines if the<br>help-text should be printed here."',
          prototype : '(defun ecb-mouse-over-directory-node (node &optional window no-message click-force)',
          parameter : 'node &optional window no-message click-force',
          lispcode : '(defun ecb-mouse-over-directory-node (node &optional window no-message click-force)<br>  (if (= (tree-node->type node) ecb-directories-nodetype-sourcefile)<br>      (ecb-mouse-over-source-node node window no-message click-force)<br>    (if (not (= (tree-node->type node) 3))<br>        (let ((str (when (or click-force<br>                             (ecb-show-minibuffer-info node window<br>                                                       (car ecb-directories-show-node-info))<br>                             (and (not (equal (car ecb-directories-show-node-info)<br>                                              <tick>never))<br>                                  (not (ecb-string= (tree-node->data node)<br>                                                    (tree-node->name node)))<br>                                  (eq (tree-node->parent node)<br>                                      (tree-buffer-get-root))))<br>                     (if (equal (cdr ecb-directories-show-node-info) <tick>name)<br>                         (tree-node->name node)<br>                       (tree-node->data node)))))<br>          (prog1 str<br>            (unless no-message<br>              (ecb-nolog-message str)))))))<br>'
        },
        {
          function : 'ecb-mouse-over-history-node',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Displays help text if mouse moves over a node in the history buffer or if<br>CLICK-FORCE is not nil and always with regards to the settings in<br>`ecb-history-show-node-info". NODE is the node for which help<br>text should be displayed, WINDOW is the related window, NO-MESSAGE defines if<br>the help-text should be printed here."',
          prototype : '(defun ecb-mouse-over-history-node (node &optional window no-message click-force)',
          parameter : 'node &optional window no-message click-force',
          lispcode : '(defun ecb-mouse-over-history-node (node &optional window no-message click-force)<br>  (let ((str (ignore-errors ;; For buffers that hasn<tick>t been saved yet<br>               (when (or click-force<br>                         (ecb-show-minibuffer-info node window<br>                                                   (car ecb-history-show-node-info)))<br>                 (if (= (tree-node->type node) ecb-history-nodetype-bucket)<br>                     (tree-node->data node)<br>                   (cl-case (cdr ecb-history-show-node-info)<br>                     (name (tree-node->name node))<br>                     (path (ecb-source-get-filename (tree-node->data node)))<br>                     (name-path (format <apo>%s (%s)<apo> (tree-node->name node)<br>                                        (ecb-source-get-filename (tree-node->data node))))))))))<br>    (prog1 str<br>      (unless no-message<br>        (ecb-nolog-message str)))))<br>'
        },
        {
          function : 'ecb-mouse-over-method-node',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Displays help text if mouse moves over a node in the method buffer or if<br>CLICK-FORCE is not nil and always with regards to the settings in<br>`ecb-methods-show-node-info". NODE is the node for which help text should be<br>displayed, WINDOW is the related window, NO-MESSAGE defines if the help-text<br>should be printed here."',
          prototype : '(defun ecb-mouse-over-method-node (node &optional window no-message click-force)',
          parameter : 'node &optional window no-message click-force',
          lispcode : '(defun ecb-mouse-over-method-node (node &optional window no-message click-force)<br>  (let ((str (when (or click-force<br>                       (ecb-show-minibuffer-info node window<br>                                                 (car ecb-methods-show-node-info)))<br>               (concat<br>                (tree-node->name node)<br>                (if (and (= ecb-methods-nodetype-tag<br>                            (tree-node->type node))<br>                         (tree-node->data node)<br>                         (equal (cdr ecb-methods-show-node-info) <tick>name+type))<br>                    (concat <apo>, <apo><br>                            (symbol-name (ecb--semantic-tag-class<br>                                          (tree-node->data node))))<br>                  <apo><apo>)))))<br>    (prog1 str<br>      (unless no-message<br>        (ecb-nolog-message str)))))<br>'
        },
        {
          function : 'ecb-mouse-over-source-node',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Displays help text if mouse moves over a node in the sources buffer or if<br>CLICK-FORCE is not nil and always with regards to the settings in<br>`ecb-sources-show-node-info". NODE is the node for which help<br>text should be displayed, WINDOW is the related window, NO-MESSAGE defines if<br>the help-text should be printed here."',
          prototype : '(defun ecb-mouse-over-source-node (node &optional window no-message click-force)',
          parameter : 'node &optional window no-message click-force',
          lispcode : '(defun ecb-mouse-over-source-node (node &optional window no-message click-force)<br>  (let ((str (ignore-errors ;; For buffers that hasn<tick>t been saved yet<br>               (when (or click-force<br>                         (ecb-show-minibuffer-info node window<br>                                                   (car ecb-sources-show-node-info)))<br>                 (if (equal (cdr ecb-sources-show-node-info) <tick>name)<br>                     (tree-node->name node)<br>                   (ecb-get-file-info-text (tree-node->data node)))))))<br>    (prog1 str<br>      (unless no-message<br>        (ecb-nolog-message str)))))<br>'
        },
        {
          function : 'ecb-multicache-add-empty-key',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Checks if KEY is already cached in the cache of CACHE-VAR. If yes nothing<br>is done otherwise a new cache-element with empty subcaches is added to the<br>cache. All subcaches defined via `defecb-multicache" are created with a<br>value nil. CACHE-VAR has to be a symbol for which an assoc cache has been<br>defined with `defecb-multicache"!"',
          prototype : '(defun ecb-multicache-add-empty-key (cache-var key)',
          parameter : 'cache-var key',
          lispcode : '(defun ecb-multicache-add-empty-key (cache-var key)<br>  (ecb-multicache-init cache-var)<br>  (or (gethash key (symbol-value cache-var))<br>      ;; now we add as value an assoc-list with an element for each registered<br>      ;; subcache-element<br>      (puthash key (mapcar (function (lambda (sc)<br>                                       (cons sc nil)))<br>                           (get cache-var'
        },
        {
          function : 'ecb-multicache-apply-to-value',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Apply the function APPLY-FCN to the old SUBCACHE-value of the cached item<br>with key KEY. APPLY-FCN is called with the old SUBCACHE-value as argument and<br>should return the new value which is then set as new SUBCACHE-value of the<br>cached-item. If optional argument ONLY-IF-KEY-EXIST is not nil then nothing<br>will be done if no cached item with key KEY exists. Otherwise a new item with<br>KEY will be added to the cache and APPLY-FCN will be called with nil.<br>CACHE-VAR has to be a symbol for which an assoc cache has been defined with<br>`defecb-multicache"!<br><br>With this function an already cached SUBCACHE-value for KEY can be evaluated<br>and then modified with only one cache-lookup because APPLY-FCN gets the<br>old-value as argument and has to return the new value which is then set as new<br>SUBCACHE-value of the cached item. This is more efficient than a call-sequence<br>of `ecb-multicache-get-value" (to get the old-value) and then<br>`ecb-multicache-put-value" to set a new value.<br><br>It is recommended that APPLY-FCN doesn"t return nil (unless the SUBCACHE for<br>KEY should be cleared within APPLY-FCN) because then this will be set as new<br>value and then the returned value of next call to `ecb-multicache-get-value"<br>can have an ambiguous semantic - see documentation of<br>`ecb-multicache-get-value". nil should be reserved to indicate that either no<br>item with KEY is cached or that no value has been put for SUBCACHE."',
          prototype : '(defun ecb-multicache-apply-to-value (cache-var key subcache apply-fcn                                                &optional only-if-key-exist)',
          parameter : 'cache-var key subcache apply-fcn &optional only-if-key-exist',
          lispcode : '(defun ecb-multicache-apply-to-value (cache-var key subcache apply-fcn<br>                                                &optional only-if-key-exist)<br>  (let ((subcache-conscell<br>         (or (ecb-multicache-get-subcache cache-var key subcache)<br>             ;; key is currently not cached<br>             (unless only-if-key-exist<br>               (ecb-multicache-add-empty-key cache-var key)<br>               (ecb-multicache-get-subcache cache-var key subcache)))))<br>    (when subcache-conscell<br>      (setcdr subcache-conscell'
        },
        {
          function : 'ecb-multicache-clear',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Clears the whole cache of CACHE-VAR, i.e. remove all items. CACHE-VAR has<br>to be a symbol for which an assoc cache has been defined with<br>`defecb-multicache"!"',
          prototype : '(defun ecb-multicache-clear (cache-var)',
          parameter : 'cache-var',
          lispcode : '(defun ecb-multicache-clear (cache-var)<br>  (ecb-multicache-init cache-var)<br>  (clrhash (symbol-value cache-var)))'
        },
        {
          function : 'ecb-multicache-clear-subcache',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Put nil as SUBCACHE-value for each cached item. This clears in fact the<br>whole SUBCACHE. CACHE-VAR has to be a symbol for which an assoc cache has been<br>defined with `defecb-multicache"!"',
          prototype : '(defun ecb-multicache-clear-subcache (cache-var subcache)',
          parameter : 'cache-var subcache',
          lispcode : '(defun ecb-multicache-clear-subcache (cache-var subcache)<br>  (ecb-multicache-mapsubcache cache-var subcache<br>                              (function (lambda (key value)<br>                                          nil))))'
        },
        {
          function : 'ecb-multicache-clear-value',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Put nil as value of the cached item with key KEY under the subcache<br>SUBCACHE. This clears in fact the subcache SUBCACHE for a cached item with key<br>KEY. CACHE-VAR has to be a symbol for which an assoc cache has been defined<br>with `defecb-multicache"!"',
          prototype : '(defun ecb-multicache-clear-value (cache-var key subcache)',
          parameter : 'cache-var key subcache',
          lispcode : '(defun ecb-multicache-clear-value (cache-var key subcache)<br>  (ecb-multicache-put-value cache-var key subcache nil))'
        },
        {
          function : 'ecb-multicache-get-subcache',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return that cons-cell which is associated with KEY in the cache of<br>CACHE-VAR and which has the symbol SUBCACHE as its car. The cdr of this<br>cons-cell is the currently stored SUBCACHE-value for KEY. If KEY is not cached<br>then nil is returned."',
          prototype : '(defun ecb-multicache-get-subcache (cache-var key subcache)',
          parameter : 'cache-var key subcache',
          lispcode : '(defun ecb-multicache-get-subcache (cache-var key subcache)<br>  (ecb-multicache-init cache-var)<br>  (let ((hash-val (gethash key (symbol-value cache-var))))<br>    (and hash-val<br>         (assoc subcache hash-val))))<br>'
        },
        {
          function : 'ecb-multicache-get-value',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return the currently associated value for KEY in the subcache SUBCACHE of<br>the cache of CACHE-VAR. CACHE-VAR has to be a symbol for which an assoc cache<br>has been defined with `defecb-multicache"!<br><br>Be aware that the semantic of nil is not unique because nil can have the<br>following meanings:<br>- There is no cached item with KEY at all<br>- There is an item with KEY in the cache but there is no assigned value for<br>  SUBCACHE.<br>- nil has been set as value for KEY and SUBCACHE (via<br>  `ecb-multicache-put-value" or `ecb-multicache-apply-to-value") - but this<br>  is not recommended, see `ecb-multicache-apply-to-value"."',
          prototype : '(defun ecb-multicache-get-value (cache-var key subcache)',
          parameter : 'cache-var key subcache',
          lispcode : '(defun ecb-multicache-get-value (cache-var key subcache)<br>  (cdr (ecb-multicache-get-subcache cache-var key subcache)))'
        },
        {
          function : 'ecb-multicache-get-values',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return an assoc-list with the subcaches listed in SUBCACHE-LIST. If<br>SUBCACHE-LIST is nil then all currently registered subcaches of CACHE-VAR are<br>returned. The result is an assoc-list where each element is a cons-cell:<br>- car: subcache-symbol.<br>- cdr: The currenty cached value for the subcache in the car.<br><br>So apply `assoc" and `cdr" to the result of this function.to get the value of<br>a certain subcache.<br><br>This function is useful when the values of more than one subcache for a key are<br>needed at the same time, i.e. with one cache-lookup."',
          prototype : '(defun ecb-multicache-get-values (cache-var key &optional subcache-list)',
          parameter : 'cache-var key &optional subcache-list',
          lispcode : '(defun ecb-multicache-get-values (cache-var key &optional subcache-list)<br>  (ecb-multicache-init cache-var)<br>  (let ((cache-val (gethash key (symbol-value cache-var))))<br>    (when cache-val<br>      (if (null subcache-list)<br>          cache-val<br>        (mapcar (function (lambda (s)<br>                            (assoc s cache-val)))<br>                subcache-list)))))'
        },
        {
          function : 'ecb-multicache-mapsubcache',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Iterate over all item of the cache of CACHE-VAR and call the function<br>MAPFCN for each item for the subcache SUBCACHE. MAPFCN is called with two<br>arguments, the key and the SUBCACHE-value of the currently processed<br>cache-item. The SUBCACHE-value of this cache-item will be set to the<br>return-value of MAPFCN. So if MAPFCN is not intended to change the<br>SUBCACHE-value it should return the value of its second argument! CACHE-VAR<br>has to be a symbol for which an assoc cache has been defined with<br>`defecb-multicache"!"',
          prototype : '(defun ecb-multicache-mapsubcache (cache-var subcache mapfcn)',
          parameter : 'cache-var subcache mapfcn',
          lispcode : '(defun ecb-multicache-mapsubcache (cache-var subcache mapfcn)<br>  (ecb-multicache-init cache-var)<br>  (maphash (function (lambda (key value)<br>                       (let ((cache (assoc subcache value)))<br>                         (and cache<br>                              (setcdr cache<br>                                      (funcall mapfcn<br>                                               key (cdr cache)))))))<br>           (symbol-value cache-var)))'
        },
        {
          function : 'ecb-multicache-p',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return not nil if the value of CACHE-VAR is a cache defined with<br>`defecb-multicache"."',
          prototype : '(defun ecb-multicache-p (cache-var)',
          parameter : 'cache-var',
          lispcode : '(defun ecb-multicache-p (cache-var)<br>  (and (hash-table-p (symbol-value cache-var))<br>       (get cache-var <tick>ecb-multicache-p)))'
        },
        {
          function : 'ecb-multicache-print-subcache',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Print the contents of SUBCACHE of the cache of CACHE-VAR in another window<br>in a special buffer. This is mostly for debugging the cache-contents.<br>CACHE-VAR has to be a symbol for which an assoc cache has been defined with<br>`defecb-multicache"!<br><br>The output has the following form:<br><br>Key: <the key of a cached element><br>     Value: <the associated value in the subcache SUBCACHE><br>Key: <the key of a cached element><br>     Value: <the associated value in the subcache SUBCACHE><br>...<br>Key: <the key of a cached element><br>     Value: <the associated value in the subcache SUBCACHE><br><br>If NO-NIL-VALUE is not nil then Keys with a SUBCACHE-value nil will be<br>excluded from the output."',
          prototype : '(defun ecb-multicache-print-subcache (cache-var subcache &optional no-nil-value)',
          parameter : 'cache-var subcache &optional no-nil-value',
          lispcode : '(defun ecb-multicache-print-subcache (cache-var subcache &optional no-nil-value)<br>  (let ((dump-buffer-name (format <apo>*ecb-multicache - subcache: %s*<apo><br>                                  subcache))<br>        (key-str <apo>Key:<apo>)<br>        (value-str <apo>Value:<apo>)<br>        ;; Because XEmacs is not able to get a face-attributes-plist as value<br>        ;; for the special property <tick>face we have to create two temporary<br>        ;; faces here :-(<br>	(key-face (copy-face <tick>default <tick>ecb-multicache-print-key-face))<br>	(value-str-face (copy-face <tick>italic<br>                                   <tick>ecb-multicache-print-value-str-face)))<br>    (set-face-foreground key-face <apo>blue<apo>)<br>    (set-face-foreground value-str-face <apo>forest green<apo>)<br>    (put-text-property 0 (length key-str) <tick>face <tick>bold key-str)<br>    (put-text-property 0 (length value-str) <tick>face value-str-face value-str)<br>    (save-selected-window<br>      (set-buffer (get-buffer-create dump-buffer-name))<br>      (erase-buffer)<br>      (ecb-multicache-mapsubcache<br>       cache-var subcache<br>       (function (lambda (key value)<br>                   ;; if key is a string we colorize it blue but we must du<br>                   ;; this with a copy of key because otherwise we would<br>                   ;; colorize the key-object itself which maybe is not what<br>                   ;; we want if key is displayed somewhere else (e.g. in a<br>                   ;; tree-buffer).<br>                   (let ((key-cp (and (stringp key)<br>                                      (concat key))))<br>                     (and key-cp (put-text-property 0 (length key-cp)<br>                                                    <tick>face key-face key-cp))<br>                     (unless (and no-nil-value (null value))<br>                       (insert (concat key-str <apo> <apo><br>                                       (if key-cp<br>                                           key-cp<br>                                         (format <apo>%s<apo> key))<br>                                       <apo>\n     <apo>'
        },
        {
          function : 'ecb-multicache-put-value',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Put VALUE as SUBCACHE-value of the cached item with key KEY. If there is<br>already a value for this subcache and key then it will be replaced with VALUE.<br>CACHE-VAR has to be a symbol for which an assoc cache has been defined with<br>`defecb-multicache"!<br><br>Return VALUE.<br><br>It is recommended not to put nil as value - see<br>`ecb-multicache-apply-to-value" for an explanation. If the SUBCACHE for KEY<br>should be cleared use `ecb-multicache-clear-value"."',
          prototype : '(defun ecb-multicache-put-value (cache-var key subcache value)',
          parameter : 'cache-var key subcache value',
          lispcode : '(defun ecb-multicache-put-value (cache-var key subcache value)<br>  (ecb-multicache-apply-to-value cache-var key subcache<br>                                 (function (lambda (old-val)<br>                                             value))))'
        },
        {
          function : 'ecb-multicache-remove',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Remove the cache item with key KEY from the cache of CACHE-VAR. CACHE-VAR<br>has to be a symbol for which an assoc cache has been defined with<br>`defecb-multicache"!"',
          prototype : '(defun ecb-multicache-remove (cache-var key)',
          parameter : 'cache-var key',
          lispcode : '(defun ecb-multicache-remove (cache-var key)<br>  (ecb-multicache-init cache-var)<br>  (remhash key (symbol-value cache-var)))'
        },
        {
          function : 'ecb-multiframe-activate-hook',
          filename : 'ecb/ecb-multiframe.el',
          docstring : '  "Hook to run to initialize multiframe support"',
          prototype : '(defun ecb-multiframe-activate-hook()',
          parameter : '',
          lispcode : '(defun ecb-multiframe-activate-hook()<br><br>  ;;disable ECB frame management for this frame<br>  (ad-deactivate <tick>delete-frame)<br><br>  ;;now make sure that the buffer being displayed in the edit window isn<tick>t a<br>  ;;compilation buffer.  (NOTE: I actually think this should be a standard part<br>  ;;of the ECB)<br>  (ecb-multiframe-edit-window-non-compilation-buffer))<br><br>(defun ecb-multiframe-edit-window-non-compilation-buffer()<br>  <apo>Go through the buffer list making the edit window a non compilation buffer.<apo><br>  (interactive)<br>  <br>  (let((buffer-list (buffer-list))<br>       (index 0))<br><br>    (while (and (or (ecb-compilation-buffer-p (window-buffer ecb-edit-window))<br>                    (null (buffer-file-name (window-buffer ecb-edit-window))))<br>                (< index (length buffer-list)))'
        },
        {
          function : 'ecb-multiframe-make-frame-hookframe',
          filename : 'ecb/ecb-multiframe.el',
          docstring : '  "Create a hook so that we can enable the default variables within new frames."',
          prototype : '(defun ecb-multiframe-make-frame-hook(frame)',
          parameter : '',
          lispcode : '(defun ecb-multiframe-make-frame-hook(frame)<br>  (interactive<br>   (list<br>    (selected-frame)))<br><br>  ;;make variables frame local in this frame.<br><br>  ;;reset everything to the default value?<br>  <br>  (dolist(variable ecb-multiframe-variables)<br>    (set-frame-parameter nil frame (list (cons variable nil)))<br>    (modify-frame-parameters frame (list (cons variable nil))))<br><br>  ;;ecb-eshell-buffer-name ?<br>  ;;ecb-speedbar-buffer-name ?<br><br>  ;;set ECB special buffer names<br><br>  (ecb-multiframe-setup-buffer-name <tick>ecb-methods-buffer-name <apo> *ECB Methods <%s>*<apo>)<br>  (ecb-multiframe-setup-buffer-name <tick>ecb-history-buffer-name <apo> *ECB History <%s>*<apo>)<br>  (ecb-multiframe-setup-buffer-name <tick>ecb-sources-buffer-name <apo> *ECB Sources <%s>*<apo>)<br>  (ecb-multiframe-setup-buffer-name <tick>ecb-directories-buffer-name <apo> *ECB Directories <%s>*<apo>)<br><br>  ;;eshell support<br>  (when (and (featurep <tick>eshell)<br>             (featurep <tick>ecb-eshell))<br>    <br>    (ecb-multiframe-setup-buffer-name <tick>ecb-eshell-buffer-name <apo> *eshell <%s>*<apo>)<br>    (ecb-multiframe-setup-buffer-name <tick>eshell-buffer-name <apo> *eshell <%s>*<apo>))<br><br>  ;;speedbar support<br>  (when (and (featurep <tick>speedbar)<br>             (featurep <tick>ecb-speedbar))<br>    <br>    ;;fix speedbar by binding the given speedbar frame value with the current frame<br>      <br>    (mapc (lambda(sframe)<br>	    (when (boundp sframe)<br>                (set-frame-parameter nil frame (list (cons sframe frame))))<br>                (modify-frame-parameters frame (list (cons sframe frame))))<br>            <tick>(speedbar-frame speedbar-attached-frame dframe-attached-frame))<br>      <br>    ;;setup speedbar with a new buffer'
        },
        {
          function : 'ecb-multiframe-setup-buffer-namevariable',
          filename : 'ecb/ecb-multiframe.el',
          docstring : '  "Given a variable name such as "ecb-methods-buffer-name and a format such as<br>"*ECB Methods <%s>*" we will register a new buffer mapping with the current<br>frame.  When complete return the new buffer name."',
          prototype : '(defun ecb-multiframe-setup-buffer-name(variable buffer-format-name)',
          parameter : 'buffer-format-name',
          lispcode : '(defun ecb-multiframe-setup-buffer-name(variable buffer-format-name)<br><br>  (let((new-buffer-name (format buffer-format-name<br>                                (format-time-string <apo>%s<apo>))))<br>    (with-no-warnings<br>      (set-frame-parameter nil frame (list (cons variable new-buffer-name))))<br>  <br>    (with-no-warnings<br>      (modify-frame-parameters frame (list (cons variable new-buffer-name))))<br><br>    new-buffer-name))<br><br>(with-no-warnings<br>  (defun ecb-deactivate-internal ()<br>    <apo>Deactivates the ECB and kills all ECB buffers and windows.<apo><br>    (unless (not ecb-minor-mode)<br>      <br>      (setq ecb-minor-mode nil))<br>    (message <apo>The ECB is now deactivated.<apo>)<br>    ecb-minor-mode))'
        },
        {
          function : 'ecb-nav-add-item',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item',
          lispcode : '(defun ecb-nav-add-item (item)<br>  (let ((node (ecb-dlist-node-new item)))<br>    (ecb-set-next node (ecb-get-next ecb-nav-current-node))<br>    (ecb-set-next ecb-nav-current-node node)<br>    (setq ecb-nav-current-node node)))'
        },
        {
          function : 'ecb-nav-dump-history',
          filename : 'ecb/ecb-navigate.el',
          parameter : '',
          lispcode : '(defun ecb-nav-dump-history ()<br>  (interactive)<br>  (ecb-nav-remove-invalid-nodes)<br>  (ecb-nav-dump-history--internal ecb-nav-first-node))'
        },
        {
          function : 'ecb-nav-dump-history--internal',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'node',
          lispcode : '(defun ecb-nav-dump-history--internal (node)<br>  (when node<br>    (insert (ecb-nav-to-string (ecb-get-data node)) <apo>\n<apo>)<br>    (ecb-nav-dump-history--internal (ecb-get-next node))))'
        },
        {
          function : 'ecb-nav-file-history-item-new',
          filename : 'ecb/ecb-navigate.el',
          parameter : '',
          lispcode : '(defun ecb-nav-file-history-item-new ()<br>  (let* ((file (ecb-buffer-file-name))<br>         (ind-buffer-name (and file<br>                               (buffer-base-buffer)<br>                               (buffer-name)))<br>         (item (ecb-nav-file-history-item (buffer-name)<br>                                          :file file<br>                                          :indirect-buffer-name ind-buffer-name)))<br>    (ecb-nav-set-pos item (point))<br>    (ecb-nav-set-window-start item<br>                              (window-start (get-buffer-window (current-buffer))))<br>    item))'
        },
        {
          function : 'ecb-nav-goto--internal',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'node',
          lispcode : '(defun ecb-nav-goto--internal (node)<br>  (if (or (not node) (eq ecb-nav-first-node node))<br>      (message <apo>No more valid history items!<apo>)<br>    ;; before doing something we have to clear the history from now invalid<br>    ;; nodes means removing nodes which does not point into a live buffer<br>    (ecb-nav-remove-invalid-nodes)<br>    (ecb-nav-save-current)<br>    (setq ecb-nav-current-node node)'
        },
        {
          function : 'ecb-nav-goto-next',
          filename : 'ecb/ecb-navigate.el',
          docstring : '  "Go forward in the navigation history list."',
          prototype : '(defun ecb-nav-goto-next ()',
          parameter : '',
          lispcode : '(defun ecb-nav-goto-next ()<br>  (interactive)<br>  (ecb-nav-goto--internal (ecb-get-next ecb-nav-current-node)))'
        },
        {
          function : 'ecb-nav-goto-previous',
          filename : 'ecb/ecb-navigate.el',
          docstring : '  "Go back in the navigation history list."',
          prototype : '(defun ecb-nav-goto-previous ()',
          parameter : '',
          lispcode : '(defun ecb-nav-goto-previous ()<br>  (interactive)<br>  (ecb-nav-goto--internal (ecb-get-previous ecb-nav-current-node)))'
        },
        {
          function : 'ecb-nav-initialize',
          filename : 'ecb/ecb-navigate.el',
          parameter : '',
          lispcode : '(defun ecb-nav-initialize ()<br>  (setq ecb-nav-first-node<br>        (ecb-dlist-node-new (ecb-nav-history-item :pos <apo>First item<apo>)))<br>  (setq ecb-nav-current-node ecb-nav-first-node))<br>'
        },
        {
          function : 'ecb-nav-jump-to-file',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'file',
          lispcode : '(defun ecb-nav-jump-to-file (file)<br>  (ecb-nav-save-current)<br>  (find-file file)<br>  (ecb-nav-add-item (ecb-nav-file-history-item file)))'
        },
        {
          function : 'ecb-nav-jump-to-tag',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'file tag &optional narrow',
          lispcode : '(defun ecb-nav-jump-to-tag (file tag &optional narrow)<br>  (ecb-nav-save-current)<br>  (find-file file)<br>  (ecb-nav-add-item (ecb-nav-tag-history-item tag narrow)))'
        },
        {
          function : 'ecb-nav-remove-current-node',
          filename : 'ecb/ecb-navigate.el',
          parameter : '',
          lispcode : '(defun ecb-nav-remove-current-node ()<br>  (ecb-nav-remove-node ecb-nav-current-node))'
        },
        {
          function : 'ecb-nav-remove-invalid-nodes',
          filename : 'ecb/ecb-navigate.el',
          parameter : '',
          lispcode : '(defun ecb-nav-remove-invalid-nodes ()<br>  (let ((node ecb-nav-first-node)<br>        (next-node nil))<br>    (while node<br>      (setq next-node (ecb-get-next node))<br>      (if (not (ecb-nav-is-valid (ecb-get-data node)))<br>          (ecb-nav-remove-node node))<br>      (setq node next-node))))'
        },
        {
          function : 'ecb-nav-remove-node',
          filename : 'ecb/ecb-navigate.el',
          docstring : '  "Remove NODE and set `ecb-nav-first-node" and `ecb-nav-current-node" if<br>necessary."',
          prototype : '(defun ecb-nav-remove-node (node)',
          parameter : 'node',
          lispcode : '(defun ecb-nav-remove-node (node)<br>  (let ((prev (ecb-get-previous node))<br>        (next (ecb-get-next node)))<br>    (if prev<br>        (ecb-set-next prev (ecb-get-next node)))<br>    (if next<br>        (ecb-set-previous next (ecb-get-previous node)))<br>    (if (eq node ecb-nav-current-node)<br>        (setq ecb-nav-current-node (or prev<br>                                       next<br>                                       ecb-nav-first-node)))<br>    (if (eq node ecb-nav-first-node)<br>        (if next<br>            (setq ecb-nav-first-node next)<br>        (ecb-nav-initialize)))))'
        },
        {
          function : 'ecb-nav-save-current',
          filename : 'ecb/ecb-navigate.el',
          parameter : '',
          lispcode : '(defun ecb-nav-save-current ()<br>  (while (not (ecb-nav-save (ecb-get-data ecb-nav-current-node)))<br>    (ecb-nav-remove-current-node)))'
        },
        {
          function : 'ecb-nav-tag-history-item-new',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'tag-name tag-buffer tag-start tag-end &optional narrow',
          lispcode : '(defun ecb-nav-tag-history-item-new (tag-name tag-buffer tag-start<br>                                                  tag-end &optional narrow)<br>  (ecb-nav-tag-history-item tag-name<br>                              :tag-buffer tag-buffer<br>                              :tag-start tag-start<br>                              :tag-end tag-end<br>                              :tag-name tag-name<br>                              :narrow narrow))'
        },
        {
          function : 'ecb-new-child',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return a node with type = TYPE, data = DATA and name = NAME. Tries to find<br>a node with matching TYPE and DATA in OLD-CHILDREN. If found no new node is<br>created but only the fields of this node will be updated. Otherwise a new node<br>is created."',
          prototype : '(defun ecb-new-child (old-children name type data    &optional not-expandable shrink-name)',
          parameter : 'old-children name type data &optional not-expandable shrink-name',
          lispcode : '(defun ecb-new-child (old-children name type data<br>    &optional not-expandable shrink-name)<br>  (catch <tick>exit<br>    (dolist (child old-children)<br>      (when (and (equal (tree-node->data child) data)<br>                 (= (tree-node->type child) type))<br>        (setf (tree-node->name child) name)<br>        (if not-expandable<br>            (setf (tree-node->expandable child) nil))<br>        (throw <tick>exit child)))<br>    (tree-node-new name type data not-expandable nil shrink-name)))'
        },
        {
          function : 'ecb-next-listelem',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return that element of LIST which follows directly ELEM when ELEM is an<br>element of LIST. If ELEM is the last element of LIST then return the first<br>element of LIST. If ELEM is not an element of LIST nil is returned. Elements<br>are compared with `equal".<br><br>If NTH-NEXT is an integer then the NTH-NEXT element of LIST in the meaning<br>described above is returned, i.e. the algorithm above is applied NTH-NEXT<br>times. Example: Suppose LIST = "(a b c d), ELEM is "c and NTH-NEXT = 3 then<br>"b is returned - same result for NTH-NEXT = 7, 11... It works also for<br>negative integers, so when NTH-NEXT is -1 in the example above then "b is<br>returned."',
          prototype : '(defun ecb-next-listelem (list elem &optional nth-next)',
          parameter : 'list elem &optional nth-next',
          lispcode : '(defun ecb-next-listelem (list elem &optional nth-next)<br>  (let ((elem-pos (ecb-position elem list))<br>        (next (or nth-next 1)))<br>    (and elem-pos<br>         (nth (mod (+ elem-pos next)<br>                   (length list))<br>              list))))'
        },
        {
          function : 'ecb-next-tag-parent-node',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Go upward in the parent-hierarchy of NODE and return next node holding a tag."',
          prototype : '(defun ecb-next-tag-parent-node (node)',
          parameter : 'node',
          lispcode : '(defun ecb-next-tag-parent-node (node)<br>  (let ((parent-node (tree-node->parent node)))<br>    (cond ((null parent-node) nil)<br>          ((= (tree-node->type parent-node) ecb-methods-nodetype-tag)<br>           parent-node)<br>          (t (ecb-next-tag-parent-node parent-node)))))<br>'
        },
        {
          function : 'ecb-nolog-message',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Works exactly like `message" but does not log the message"',
          prototype : '(defun ecb-nolog-message (&rest args)',
          parameter : '&rest args',
          lispcode : '(defun ecb-nolog-message (&rest args)<br>  (let ((msg (cond ((or (null args)<br>                        (null (car args)))<br>                    nil)<br>                   ((null (cdr args))<br>                    (car args))<br>                   (t<br>                    (apply <tick>format args)))))<br>    ;; Now message is either nil or the formated string.'
        },
        {
          function : 'ecb-normalize-expand-spec',
          filename : 'ecb/ecb-method-browser.el',
          parameter : 'spec',
          lispcode : '(defun ecb-normalize-expand-spec (spec)<br>  (if (equal <tick>all spec)<br>      <tick>all<br>    (mapcar (function (lambda (elem)<br>                        (intern<br>                         (downcase (ecb-string-make-singular<br>                                    (symbol-name elem))))))<br>            spec)))<br>'
        },
        {
          function : 'ecb-normalize-number',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Normalize VALUE in the following manner and return:<br>* VALUE > -1.0 and < +1.0 and REF-VALUE a number: `floor" of VALUE * REF-VALUE<br>* all other cases: `floor" of VALUE"',
          prototype : '(defun ecb-normalize-number (value &optional ref-value)',
          parameter : 'value &optional ref-value',
          lispcode : '(defun ecb-normalize-number (value &optional ref-value)<br>  (floor (if (and (< value 1.0)<br>                  (> value -1.0)<br>                  (numberp ref-value))<br>             (* ref-value value)<br>           value)))<br><br><br>;;; ----- Working-display ----------------------------------<br>'
        },
        {
          function : 'ecb-normed-source-paths',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return a normalized list of all source-paths.<br><br>This is a list created from all elements of `ecb-source-path" and all<br>source-paths created by `ecb-source-path-functions".<br><br>Each element is a cons whereas car is the normed and expanded pathname (done by<br>`ecb-fix-filename") and cdr is either the alias defined for this path (see<br>`ecb-source-path") or - if there is no alias defined - the path itself (in<br>this case car and cdr are equal).<br><br>If NO-DUPLICATES is not nil then all duplicates in the paths-list are removed.<br>An element is a duplicate if the car (i.e. the normed and expaneded path)<br>matches exactly the car of another element."',
          prototype : '(defun ecb-normed-source-paths (&optional no-duplicates)',
          parameter : '&optional no-duplicates',
          lispcode : '(defun ecb-normed-source-paths (&optional no-duplicates)<br>  (let ((res (mapcar (function (lambda (elem)<br>                                 (let* ((path (ecb-fix-filename (if (listp elem) (nth 0 elem) elem)))<br>                                        (alias (if (listp elem) (nth 1 elem) path)))<br>                                   (cons path alias))))<br>                     (append ecb-source-path<br>                             (ecb-get-source-paths-from-functions)<br>                             ))))<br>    (if no-duplicates<br>        (ecb-delete-duplicates<br>         res<br>         (function (lambda (l r)<br>                     (ecb-string= (if (consp l) (car l) l)<br>                                  (if (consp r) (car r) r))<br>                     ))<br>         nil nil t t)<br>      res)))'
        },
        {
          function : 'ecb-not-compatible-or-renamed-options-detected',
          filename : 'ecb/ecb-upgrade.el',
          parameter : '',
          lispcode : '(defun ecb-not-compatible-or-renamed-options-detected ()<br>  (or ecb-not-compatible-options ecb-renamed-options))'
        },
        {
          function : 'ecb-offer-choices',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Prints PROMPT and returns a string which must be one of CHOICES.<br>CHOICES is a list of strings whereas the first choice is the default. All<br>choices are immediately displayed as if completion does it so a selection can<br>be made either with the mouse or with the keyboard."',
          prototype : '(defun ecb-offer-choices (prompt choices)',
          parameter : 'prompt choices',
          lispcode : '(defun ecb-offer-choices (prompt choices)<br>  (let* ((minibuffer-setup-hook<br>          (append minibuffer-setup-hook<br>                  (list (lambda ()<br>                          (with-output-to-temp-buffer <apo>*Completions*<apo><br>                            (display-completion-list (all-completions <apo><apo> minibuffer-completion-table)))))))<br>         (completion-list (mapcar (function (lambda (x) (list x t)))<br>                                  choices))<br>         (answer (completing-read prompt<br>                                  completion-list<br>                                  nil t<br>                                  (try-completion <apo><apo> completion-list))))<br>    (if (ecb-string= answer <apo><apo>)<br>        (car choices)<br>      answer)))<br><br><br>;; ecb-offer-choices-1 and ecb-offer-choices-2 are two other approaches for'
        },
        {
          function : 'ecb-option-compatible-p',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Return not nil only if the type of the value of OPTION is compatible with<br>its current defcustom-definition."',
          prototype : '(defun ecb-option-compatible-p (option)',
          parameter : 'option',
          lispcode : '(defun ecb-option-compatible-p (option)<br>  (require <tick>cus-edit)<br>  (widget-apply (widget-convert (get option <tick>custom-type))<br>                :match (symbol-value option)))'
        },
        {
          function : 'ecb-option-get-value',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return the value of a customizable ECB-option OPTION with TYPE, where TYPE<br>can either be "standard-value (the default-value of the defcustom) or<br>"saved-value (the value stored persistent by the user via customize) or<br>"customized-value (the value set but not saved in the customize buffer).<br>If TYPE is nil then the most recent set value is returned, means it<br>tries the customized-value, then the saved-value and then the standard-value<br>in exactly this sequence."',
          prototype : '(defun ecb-option-get-value (option &optional type)',
          parameter : 'option &optional type',
          lispcode : '(defun ecb-option-get-value (option &optional type)<br>  (let ((val (car (if type<br>                      (get option type)<br>                    (or (get option <tick>customized-value)<br>                        (get option <tick>saved-value)<br>                        (get option <tick>standard-value))))))<br>    (cond ((not (listp val)) val)<br>          ((equal <tick>quote (car val)) (car (cdr val)))<br>;;          (t (car val)))))<br>          (t (eval val)))))'
        },
        {
          function : 'ecb-option-set-default',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Save the ECB-option OPTION with current default value."',
          prototype : '(defun ecb-option-set-default (option)',
          parameter : 'option',
          lispcode : '(defun ecb-option-set-default (option)<br>  (ecb-customize-set-variable option<br>                              (ecb-option-get-value option <tick>standard-value)))'
        },
        {
          function : 'ecb-option-upgrade',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Upgrade the old ECB-option OLD-OPTION if the following conditions are ALL<br>true:<br>1. OLD-OPTION is the key of an element of `ecb-upgradable-option-alist"<br>2. "saved-value of OLD-OPTION is not nil<br>3. Either<br>   + the new-option from `ecb-upgradable-option-alist" has the same name<br>     as OLD-OPTION and<br>   + the type of the value of OLD-OPTION is not compatible with the current<br>     type of OLD-OPTION (this prevents from doing an upgrade twice!)<br>   or<br>   + OLD-OPTION is not a valid option in current ECB and<br>   + The related new-option `ecb-upgradable-option-alist" is not already<br>     customized, i.e. the "saved-value of new-option is nil.<br><br>If all conditions are true then the value of OLD-OPTION is transformed by the<br>transforming-function of the related element of `ecb-upgradable-option-alist"<br>to the correct new type and then the related new option is saved with this new<br>value.<br><br>Return nil if no upgrade is necessary because at least one of the conditions<br>above is not true. Returns the transformed value of OLD-OPTION or<br>"ecb-no-upgrade-conversion in form of a list, to distinguish a transformed<br>value nil from the nil-result which indicates that no upgrade was necessary<br>(see above). This means the "real" new value is the car of this<br>result-list!"',
          prototype : '(defun ecb-option-upgrade (old-option)',
          parameter : 'old-option',
          lispcode : '(defun ecb-option-upgrade (old-option)<br>  (let ((upgrade-elem (cdr (assoc old-option ecb-upgradable-option-alist)))<br>        new-value)<br>    ;; check if an upgrade is necessary or allowed<br>    (when (and upgrade-elem<br>               (or (and (equal old-option (nth 0 upgrade-elem))<br>                        (not (ecb-option-compatible-p old-option)))<br>                   (and (not (member old-option ecb-all-options))<br>                        (null (get (nth 0 upgrade-elem) <tick>saved-value))))<br>               (get old-option <tick>saved-value))<br>      ;; try to transform the old-value in the new type.<br>      (setq new-value<br>            (condition-case nil<br>                (funcall (nth 1 upgrade-elem)<br>                         (ecb-option-get-value old-option <tick>saved-value))<br>              (error <tick>ecb-no-upgrade-conversion)))<br>      (when (not (equal new-value <tick>ecb-no-upgrade-conversion))'
        },
        {
          function : 'ecb-options-version=ecb-version-p',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Return not nil if the saved value of `ecb-options-version" is equal to<br>`ecb-version"."',
          prototype : '(defun ecb-options-version=ecb-version-p ()',
          parameter : '',
          lispcode : '(defun ecb-options-version=ecb-version-p ()<br>  (equal (ecb-option-get-value <tick>ecb-options-version <tick>saved-value)<br>         ecb-version))'
        },
        {
          function : 'ecb-package-version-list2str',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Complementary function to `ecb-package-version-str2list"."',
          prototype : '(defun ecb-package-version-list2str (ver)',
          parameter : 'ver',
          lispcode : '(defun ecb-package-version-list2str (ver)<br>  (concat (number-to-string (nth 0 ver))<br>          <apo>.<apo><br>          (number-to-string (nth 1 ver))<br>          (cl-case (nth 2 ver)<br>            (0 <apo>alpha<apo>)<br>            (1 <apo>beta<apo>)<br>            (2 <apo>pre<apo>)<br>            (4 <apo>.<apo>)<br>            (otherwise <apo><apo>))<br>          (if (and (not (= (nth 2 ver) 3))<br>                   (not (= (nth 3 ver) 0)))<br>              (number-to-string (nth 3 ver))<br>            <apo><apo>)))<br>'
        },
        {
          function : 'ecb-package-version-list<',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Return non-nil if VER1 is less than VER2."',
          prototype : '(defun ecb-package-version-list< (ver1 ver2)',
          parameter : 'ver1 ver2',
          lispcode : '(defun ecb-package-version-list< (ver1 ver2)<br>  (let ((v1-0 (nth 0 ver1))<br>	(v1-1 (nth 1 ver1))<br>	(v1-2 (nth 2 ver1))<br>	(v1-3 (nth 3 ver1))<br>	(v2-0 (nth 0 ver2))<br>	(v2-1 (nth 1 ver2))<br>	(v2-2 (nth 2 ver2))<br>	(v2-3 (nth 3 ver2)))<br>    (or (< v1-0 v2-0)<br>        (and (= v1-0 v2-0)<br>             (< v1-1 v2-1))<br>        (and (= v1-0 v2-0)<br>             (= v1-1 v2-1)<br>             (< v1-2 v2-2))<br>        (and (= v1-0 v2-0)<br>             (= v1-1 v2-1)<br>             (= v1-2 v2-2)<br>             (< v1-3 v2-3)))))'
        },
        {
          function : 'ecb-package-version-str2list',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Convert the version-str VER-STR to the internal version-list format with<br>the following elements of the version-list:<br>1. Major-version<br>2. Minor-version<br>3. 0 = alpha, 1 = beta, 2 = pre, 3 = nothing (e.g. "1.4"), 4 = . (e.g. "1.4.3"<br>4. Subversion after the alpha, beta, pre or .<br><br>Return nil if ver-str has not the required syntax:<br><major>.<minor>[.|pre|beta|alpha][<sub-stable/pre/beta/alpha-version>]"',
          prototype : '(defun ecb-package-version-str2list (ver-str)',
          parameter : 'ver-str',
          lispcode : '(defun ecb-package-version-str2list (ver-str)<br>  (let ((str ver-str))<br>    (save-match-data<br>      (if (string-match <apo>^\\([0-9]+\\)\\.\\([0-9]+\\)\\(pre\\|beta\\|alpha\\|\\.\\)?\\([0-9]+\\)?$<apo> str)<br>          (list (string-to-number (match-string 1 str))<br>                (string-to-number (match-string 2 str))<br>                (if (ecb-string= (match-string 3 str) <apo>alpha<apo>)<br>                    0<br>                  (if (ecb-string= (match-string 3 str) <apo>beta<apo>)<br>                      1<br>                    (if (ecb-string= (match-string 3 str) <apo>pre<apo>)<br>                        2<br>                      (if (ecb-string= (match-string 3 str) <apo>.<apo>)<br>                          4<br>                        3))))<br>                (if (match-string 4 str)<br>                    (string-to-number (match-string 4 str))<br>                  0))))))<br>'
        },
        {
          function : 'ecb-package-version-string<',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Return non nil if VER-STR1 is logically less then VER-STR2."',
          prototype : '(defun ecb-package-version-string< (ver1-str ver2-str)',
          parameter : 'ver1-str ver2-str',
          lispcode : '(defun ecb-package-version-string< (ver1-str ver2-str)<br>  (let ((ver1 (ecb-package-version-str2list ver1-str))<br>        (ver2 (ecb-package-version-str2list ver2-str)))<br>    (ecb-package-version-list< ver1 ver2)))'
        },
        {
          function : 'ecb-partial-reparse-debug',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Run ARGS through `format" and write it to the *Messages*-buffer.<br>Does nothing if `ecb-partial-reparse-debug" is nil."',
          prototype : '(defun ecb-partial-reparse-debug (&rest args)',
          parameter : '&rest args',
          lispcode : '(defun ecb-partial-reparse-debug (&rest args)<br>  (when (and ecb-partial-reparse-debug args)<br>    (message (concat (format <apo>ECB %s partial-reparse debug: <apo> ecb-version)<br>                     (apply <tick>format args)))))'
        },
        {
          function : 'ecb-path-selected-source',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Get the value of the internal variable `ecb-path-selected-source".<br>If optional arg TYPE is the symbol "file then the filename-part<br>is returned as string, if it is the symbol "buffername then the<br>stored buffername is returned if there is any and and if it is the<br>symbol "buffer then the buffer-object of the stored buffername is<br>returned if there is any or nil.<br><br>In all other cases of TYPE always that value is returned<br>`ecb-path-selected-source" has been set by most recent<br>`ecb-path-selected-source-set"."',
          prototype : '(defun ecb-path-selected-source (&optional type)',
          parameter : '&optional type',
          lispcode : '(defun ecb-path-selected-source (&optional type)<br>  (cl-case type<br>    (file (ecb-source-get-filename ecb-path-selected-source))<br>    (buffername (ecb-source-get-buffername ecb-path-selected-source))<br>    (buffer (ecb-source-get-buffer ecb-path-selected-source))<br>    (otherwise ecb-path-selected-source)))<br><br>'
        },
        {
          function : 'ecb-path-selected-source-set',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Set `ecb-path-selected-source" to FILENAME and BUFFER.<br>Returns in the new value. FILENAME and BUFFER must not be nil.<br>For a description of FILENAME and BUFFER see `ecb-source-make"."',
          prototype : '(defun ecb-path-selected-source-set (filename buffer)',
          parameter : 'filename buffer',
          lispcode : '(defun ecb-path-selected-source-set (filename buffer)<br>  (unless (and filename buffer)<br>    (error <apo>ECB %s: Invalid setting of <backtick>ecb-path-selected-source with file %s, buffer %s<apo><br>           ecb-version filename buffer))<br>  (setq ecb-path-selected-source (ecb-source-make filename buffer)))'
        },
        {
          function : 'ecb-point-in-compile-window',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return not nil iff point is in the compile-window of ECB"',
          prototype : '(defun ecb-point-in-compile-window ()',
          parameter : '',
          lispcode : '(defun ecb-point-in-compile-window ()<br>  (and (equal (selected-frame) ecb-frame)<br>       (ecb-compile-window-live-p)<br>       (equal (selected-window) ecb-compile-window)))'
        },
        {
          function : 'ecb-point-in-dedicated-special-buffer',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return not nil if point is in any of the special dedicated buffers which<br>are registrated via the macro `defecb-window-dedicator-to-ecb-buffer" (see<br>`ecb-dedicated-special-buffers") and if the current buffer is displayed in the<br>currently selected window."',
          prototype : '(defun ecb-point-in-dedicated-special-buffer ()',
          parameter : '',
          lispcode : '(defun ecb-point-in-dedicated-special-buffer ()<br>  (when (equal (selected-frame) ecb-frame)<br>    (if (and (member (current-buffer) (ecb-dedicated-special-buffers))<br>             (eq (selected-window) (get-buffer-window (current-buffer) ecb-frame)))<br>        (current-buffer))))'
        },
        {
          function : 'ecb-point-in-ecb-tree-buffer',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return not nil if point is in any of the standard tree-buffers (see<br>function `ecb-ecb-buffer-registry-name-list") of ECB and if the<br>current buffer is displayed in the currently selected window."',
          prototype : '(defun ecb-point-in-ecb-tree-buffer ()',
          parameter : '',
          lispcode : '(defun ecb-point-in-ecb-tree-buffer ()<br>  (when (and (equal (selected-frame) ecb-frame)<br>             (member (buffer-name (current-buffer))<br>                     (ecb-ecb-buffer-registry-name-list <tick>only-tree-buffers))<br>             (eq (selected-window) (get-buffer-window (current-buffer)<br>                                                      ecb-frame)))<br>    (current-buffer)))'
        },
        {
          function : 'ecb-point-in-ecb-window-number',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return nil if point stays not in an special ecb-window otherwise return 1<br>if point is in the left/topmost ecb-window or 2 if in the next ecb-window and<br>so on. Return the number of the ecb-windows (if point is in an ecb-window) in<br>the order `walk-windows" would go through the ecb-windows. If WINDOWS-LIST<br>is not nil then it must be a current list of ecb-windows (got by<br>`ecb-canonical-ecb-windows-list"). If WINDOWS-LIST is nil then a new<br>ecb-window-list is computed via `ecb-canonical-ecb-windows-list"."',
          prototype : '(defun ecb-point-in-ecb-window-number (&optional windows-list)',
          parameter : '&optional windows-list',
          lispcode : '(defun ecb-point-in-ecb-window-number (&optional windows-list)<br>  (when (equal (selected-frame) ecb-frame)<br>    (ignore-errors (ecb-window-in-window-list-number<br>                    (or windows-list (ecb-canonical-ecb-windows-list))))))<br>'
        },
        {
          function : 'ecb-point-in-edit-window-number',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return nil if point stays not in an edit-window otherwise return 1 if point<br>is in the left/topmost edit-window or 2 if in the next edit-window and so on.<br>Return the number of the edit-window (if point is in an edit-window) in the<br>order `walk-windows" would go through the edit-windows. If EDIT-WINDOWS-LIST<br>is not nil then it must be a current list of edit-windows (got by<br>`ecb-canonical-edit-windows-list"). If EDIT-WINDOWS-LIST is nil then a new<br>edit-window-list is computed via `ecb-canonical-edit-windows-list"."',
          prototype : '(defun ecb-point-in-edit-window-number (&optional edit-windows-list)',
          parameter : '&optional edit-windows-list',
          lispcode : '(defun ecb-point-in-edit-window-number (&optional edit-windows-list)<br>  (when (equal (selected-frame) ecb-frame)<br>    (ignore-errors (ecb-window-in-window-list-number<br>                    (or edit-windows-list (ecb-canonical-edit-windows-list))))))'
        },
        {
          function : 'ecb-position',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return the position of first occurence of CL-ITEM in CL-SEQ.<br>Comparison is done with `equal" unless CL-TEST-FCN is not nil: In<br>this case TEST-FCN will be used to compare CL-ITEM with the elements<br>of CL-SEQ.<br>Return the 0-based index of the matching item, or nil if not found."',
          prototype : '(defun ecb-position (cl-item cl-seq &optional cl-test-fcn cl-start cl-end cl-from-end)',
          parameter : 'cl-item cl-seq &optional cl-test-fcn cl-start cl-end cl-from-end',
          lispcode : '(defun ecb-position (cl-item cl-seq &optional cl-test-fcn cl-start cl-end cl-from-end)<br>  (let ((cl-test (or cl-test-fcn <tick>equal)))<br>    (or cl-start (setq cl-start 0))<br>    (if (listp cl-seq)<br>        (let ((cl-p (nthcdr cl-start cl-seq)))<br>          (or cl-end (setq cl-end 8000000))<br>          (let ((cl-res nil))<br>            (while (and cl-p (< cl-start cl-end) (or (not cl-res) cl-from-end))<br>              (if (funcall cl-test cl-item (car cl-p))<br>                  (setq cl-res cl-start))<br>              (setq cl-p (cdr cl-p) cl-start (1+ cl-start)))<br>            cl-res))<br>      (or cl-end (setq cl-end (length cl-seq)))<br>      (if cl-from-end<br>          (progn<br>            (while (and (>= (setq cl-end (1- cl-end)) cl-start)<br>                        (not (funcall cl-test cl-item (aref cl-seq cl-end)))))<br>            (and (>= cl-end cl-start) cl-end))<br>        (while (and (< cl-start cl-end)<br>                    (not (funcall cl-test cl-item (aref cl-seq cl-start))))<br>          (setq cl-start (1+ cl-start)))<br>        (and (< cl-start cl-end) cl-start)))))<br><br>;; (ecb-position <apo>v<apo> <tick>(<apo>a<apo> <apo>b<apo> <apo>c<apo> <apo>d<apo> <apo>A<apo> (<apo>a<apo> . 0) <apo>w<apo> <apo>a<apo> (<apo>c<apo> . <apo>ewfwrew<apo>) <apo>e<apo>)'
        },
        {
          function : 'ecb-post-process-taglist',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "If for current major-mode post-process functions are found in<br>`ecb-post-process-semantic-taglist" then these functions are called with<br>TAGLIST otherwise TAGLIST is returned.<br>This function MUST be called with the source-buffer as current buffer!"',
          prototype : '(defun ecb-post-process-taglist (taglist)',
          parameter : 'taglist',
          lispcode : '(defun ecb-post-process-taglist (taglist)<br>  (let ((fcn-list (cdr (assoc major-mode ecb-post-process-semantic-taglist))))<br>    (dolist (fcn fcn-list)<br>      (if (fboundp fcn)<br>          (setq taglist (funcall fcn taglist)))))<br>  (ecb-set-current-tag-table taglist)<br>  ;; now we apply that tag-filters which must operate onto the whole'
        },
        {
          function : 'ecb-problem-report-list-all-variables',
          filename : 'ecb/ecb-help.el',
          docstring : '  "List all variables starting with `ecb-" and some other variables which<br>could be interesting for support."',
          prototype : '(defun ecb-problem-report-list-all-variables()',
          parameter : '',
          lispcode : '(defun ecb-problem-report-list-all-variables()<br>  (let ((emacs-vars (sort (delete nil<br>                                  <backtick>(pre-command-hook<br>                                    post-command-hook<br>                                    after-save-hook<br>                                    help-mode-hook<br>                                    compilation-mode-hook<br>                                    truncate-partial-width-windows<br>                                    truncate-lines<br>                                    ,(if (boundp <tick>compilation-window-height)<br>                                         <tick>compilation-window-height)<br>                                    ,(if (boundp <tick>temp-buffer-max-height)<br>                                         <tick>temp-buffer-max-height)<br>                                    auto-mode-alist<br>                                    ,(if (boundp <tick>c-mode-hook)<br>                                         <tick>c-mode-hook)<br>                                    ,(if (boundp <tick>c++-mode-hook)<br>                                         <tick>c++-mode-hook)<br>                                    ,(if (boundp <tick>c-mode-common-hook)<br>                                         <tick>c-mode-common-hook)<br>                                    ,(if (boundp <tick>java-mode-hook)<br>                                         <tick>java-mode-hook)<br>                                    ,(if (boundp <tick>jde-mode-hook)<br>                                         <tick>jde-mode-hook)<br>                                    system-type<br>                                    window-system<br>                                    max-specpdl-size<br>                                    max-lisp-eval-depth<br>                                    ,(if (boundp <tick>ediff-quit-hook)<br>                                         <tick>ediff-quit-hook)))<br>                          (function (lambda (l r)<br>                                      (ecb-string< (symbol-name l)<br>                                                   (symbol-name r))))))<br>        (semantic-vars (sort (delete nil<br>                                     <backtick>(semantic-after-toplevel-cache-change-hook<br>                                       semantic-after-partial-cache-change-hook<br>                                       semantic-format-face-alist<br>                                       semantic-uml-colon-string<br>                                       semantic-orphaned-member-metaparent-type))<br>                             (function (lambda (l r)<br>                                         (ecb-string< (symbol-name l)<br>                                                      (symbol-name r))))))<br>        (speedbar-vars (sort <tick>(speedbar-dynamic-tags-function-list<br>                               speedbar-tag-hierarchy-method<br>                               speedbar-tag-group-name-minimum-length<br>                               speedbar-tag-split-minimum-length<br>                               speedbar-tag-regroup-maximum-length<br>                               speedbar-fetch-etags-command<br>                               speedbar-fetch-etags-arguments<br>                               speedbar-fetch-etags-parse-list)<br>                             (function (lambda (l r)<br>                                         (ecb-string< (symbol-name l)<br>                                                      (symbol-name r))))))<br>        (ecb-options (mapcar<br>                      <tick>intern<br>                      (sort<br>                       (let (completion-ignore-case)<br>                         (all-completions <apo>ecb-<apo> obarray <tick>user-variable-p))<br>                       <tick>ecb-string<)))<br>        (ecb-internal-vars (sort <tick>(ecb-path-selected-directory<br>                                   ecb-path-selected-source<br>                                   ecb-use-semantic-grouping<br>                                   ecb-autocontrol/sync-fcn-register<br>                                   ecb-idle-timer-alist<br>                                   ecb-post-command-hooks<br>                                   ecb-pre-command-hooks<br>                                   ecb-max-specpdl-size-old<br>                                   ecb-max-lisp-eval-depth-old<br>                                   ecb-minor-mode<br>                                   ecb-adviced-function-sets<br>                                   ecb-adviced-functions<br>                                   ecb-last-window-config-before-deactivation<br>                                   ecb-edit-area-creators<br>                                   ecb-partial-reparse-always-full-fetch<br>                                   ecb-stealthy-function-list<br>                                   ecb-stealthy-function-state-alist<br>                                   ecb-windows-hidden-state<br>                                   ecb-toggle-layout-state<br>                                   ecb-tree-buffer-creators<br>                                   ecb-ecb-buffer-registry<br>                                   ecb-current-maximized-ecb-buffer-name<br>                                   ecb-special-ecb-buffers-of-current-layout)<br>                                 (function (lambda (l r)<br>                                             (ecb-string< (symbol-name l)<br>                                                          (symbol-name r)))))))<br>    (append emacs-vars semantic-vars speedbar-vars<br>            ecb-internal-vars ecb-options)))<br>'
        },
        {
          function : 'ecb-problem-report-post-hook',
          filename : 'ecb/ecb-help.el',
          docstring : '  "Function run the reporter package done its work. It looks for a message- and<br>a backtrace-buffer and inserts the contents of that."',
          prototype : '(defun ecb-problem-report-post-hook()',
          parameter : '',
          lispcode : '(defun ecb-problem-report-post-hook()<br>  (save-excursion<br>    (goto-char (point-min))<br>    ;; if the mail-packages has already inserted a signature we must not go to<br>    ;; the buffer-end but just before the signature<br>    (if (re-search-forward <apo>^--[ \t]*$<apo> nil t)<br>        (progn<br>          (beginning-of-line)<br>          (insert <apo>\n\n\n<apo>)<br>          (forward-line -2))<br>      (goto-char (point-max))<br>      (insert <apo>\n\n<apo>))<br>    ;; ecb-faces<br>    (let ((ecb-face-list (delq nil (mapcar (function<br>                                            (lambda (f)<br>                                              (if (save-match-data<br>                                                    (string-match <apo>^ecb-<apo><br>                                                                  (symbol-name f)))<br>                                                  f<br>                                                nil)))<br>                                           (face-list)))))<br>      (insert <apo>\n\n-----------------------------------------------------\n<apo>)<br>      (insert <apo>The attributes of the ECB-faces are:\n\n<apo>)<br>      (dolist (f ecb-face-list)<br>        (when f<br>          (insert (format <apo>%s: %s\n<apo><br>                          (symbol-name f)<br>                          (funcall <tick>custom-face-attributes-get<br>                                   f ecb-frame)))))<br>      (insert <apo>\n-----------------------------------------------------\n\n<apo>))<br>    (let* ((messages-buffer (get-buffer <apo>*Messages*<apo>))<br>	   (backtrace-buffer (ecb-buffer-obj <apo>*Backtrace*<apo>))<br>           (tag-dump-buffer (ecb-buffer-obj <apo>*ecb-tag-dump*<apo>)))<br><br>      ;;insert the contents of the tag-dump buffer if it is there.<br>      (insert <apo>\n\n-----------------------------------------------------\n<apo>)<br>      (if tag-dump-buffer<br>          (progn<br>            (insert <apo>The contents of the *ecb-tag-dump* buffer were\n\n<apo>)<br>	    (insert-buffer-substring tag-dump-buffer)<br>            ;; we must force the mark<br>	    ;;(goto-char (mark t))<br>            (insert <apo>\nEnd Insert *ecb-tag-dump* buffer<apo> ))<br>        (insert <apo>There was no *ecb-tag-dump* buffer<apo> ))<br>      (insert <apo>\n-----------------------------------------------------\n\n<apo>)<br><br>      ;;insert the contents of the trace-output buffer if it is there.<br>;;       (insert <apo>\n\n-----------------------------------------------------\n<apo>)<br>;;       (if tag-dump-buffer<br>;;           (progn<br>;;             (insert <apo>The contents of the *ecb-tag-dump* buffer were\n\n<apo>)<br>;; 	    (insert-buffer-substring tag-dump-buffer)<br>;;             ;; we must force the mark<br>;; 	    (goto-char (mark t))<br>;;             (insert <apo>\nEnd Insert *ecb-tag-dump* buffer<apo> ))<br>;;         (insert <apo>There was no *ecb-tag-dump* buffer<apo> ))<br>;;       (insert <apo>\n-----------------------------------------------------\n\n<apo>)<br><br>      ;;insert the contents of the backtrace buffer if it is there.'
        },
        {
          function : 'ecb-query-string',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Prints PROMPT and returns a string which must be one of CHOICES.<br>CHOICES is either a list of strings whereas the first choice is the default<br>(which is returned if the user simply types RET) or nil (then only a simple<br>RET quits the query and returns nil). If OTHER-PROMPT is not nil and a string<br>then the choice "other" is added to CHOICES and after selecting this choice<br>the user is prompted with OTHER-PROMPT to insert any arbitrary string."',
          prototype : '(defun ecb-query-string (prompt choices &optional other-prompt)',
          parameter : 'prompt choices &optional other-prompt',
          lispcode : '(defun ecb-query-string (prompt choices &optional other-prompt)<br>  (let* ((new-choices (if other-prompt<br>                          ;; Emacs 20.X add-to-list can not append at the end<br>                          (append choices (list <apo>other<apo>))<br>                        choices))<br>         (default (car new-choices))<br>         answer)<br>    (setq prompt (concat prompt<br>                         <apo> [<apo><br>                         (if new-choices<br>                             (mapconcat (function (lambda (x) x))<br>                                        new-choices <apo>, <apo>)<br>                           <apo>RET<apo>)<br>                         <apo>] <apo>))<br>    (setq new-choices (nconc (mapcar (function (lambda (x) (list x t)))<br>                                     new-choices)<br>                             <tick>(<tick>(<apo><apo> t))))<br>    (setq answer (completing-read prompt new-choices nil t))<br>    (cond ((ecb-string= answer <apo><apo>)<br>           (setq answer default))<br>          ((ecb-string= answer <apo>other<apo>)<br>           (setq answer (read-string (concat other-prompt <apo>: <apo>)))))'
        },
        {
          function : 'ecb-read-number',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Ask in the minibuffer for a number with prompt-string PROMPT. Optional<br>INIT-VALUE can be either a number or a string-representation of a number."',
          prototype : '(defun ecb-read-number (prompt &optional init-value)',
          parameter : 'prompt &optional init-value',
          lispcode : '(defun ecb-read-number (prompt &optional init-value)<br>  (let ((init (cl-typecase init-value<br>                (number (number-to-string init-value))<br>                (string<br>                 (if (ecb-string= init-value <apo>0<apo>)<br>                     init-value<br>                   (if (not (= 0 (string-to-number init-value)))<br>                       init-value<br>                     (ecb-error <apo>ecb-read-number: init-value not a valid number!<apo>))))<br>                (otherwise nil)))<br>        result)<br>    (while (progn<br>             (setq result (read-string prompt init))<br>             (not (or (ecb-string= <apo>0<apo> result)<br>                      (not (= 0 (string-to-number result)))))))<br>    (string-to-number result)))'
        },
        {
          function : 'ecb-rebuild-methods-buffer',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Updates the methods buffer with the current source-buffer.<br>This means ECB asks the parsing-engine for tags for the current<br>source-buffer and rebuilds its methods-buffer with the tag-set<br>returned by the parsing-engine (semantic for semantic-sources<br>and imenu rsp. etags for non-semantic-sources). For<br>semantic-sources this command ignores the<br>`semantic-idle-scheduler-mode" and therefore also all settings in<br>`semantic-idle-scheduler-max-buffer-size" so be aware that this<br>command will also parse huge files!<br><br>If called with a prefix-arg (ie. if optional arg CLEAR-CACHE is not nil) the<br>complete previous parser-information is deleted before, means no<br>semantic-cache is used! This argument takes only effect for semantic-sources.<br><br>Point must stay in an edit-window otherwise nothing is done. This method is<br>merely needed in the following situations:<br><br>+ To force parsing huge files with slow parsers when such files are excluded<br>  from parsing via `semantic-idle-scheduler-max-buffer-size" - see above.<br><br>+ If an elisp-file is parsed which contains in the middle a defun X where the<br>  closing ) is missing then semantic parses only until this defun X is reached<br>  and you will get an incomplete ECB-method buffer. In such a case you must<br>  complete the defun X and then call this function to completely reparse the<br>  elisp-file and rebuild the ECB method buffer!<br><br>+ For not semantic supported buffers which can be parsed by imenu or etags<br>  (see `ecb-process-non-semantic-files") because for these buffers there is<br>  no built-in auto-rebuild mechanism. For these buffers this command calls<br>  `ecb-rebuild-methods-buffer-for-non-semantic".<br><br>For non-semantic-sources supported by etags the option<br>`ecb-auto-save-before-etags-methods-rebuild" is checked before rescanning the<br>source-buffer and rebuilding the methods-buffer.<br><br>If point is in one of the ecb-windows or in the compile-window then this<br>command rebuids the methods-buffer with the contents of the source-buffer the<br>last selected edit-window."',
          prototype : '(defun ecb-rebuild-methods-buffer (&optional clear-cache)',
          parameter : '&optional clear-cache',
          lispcode : '(defun ecb-rebuild-methods-buffer (&optional clear-cache)<br>  (interactive <apo>P<apo>)<br>  (save-selected-window<br>    (when (not (ecb-point-in-edit-window-number))<br>      (let ((ecb-mouse-click-destination <tick>last-point))<br>        (ecb-select-edit-window)))<br>    (ecb-rebuild-methods-buffer-fully clear-cache)))'
        },
        {
          function : 'ecb-rebuild-methods-buffer-for-non-semantic',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Rebuild the ECB-method-buffer for current source-file of the edit-window.<br>This function does nothing if point stays not in an edit-window of the<br>ECB-frame or if current source-file is supported by semantic!<br><br>Before rebuilding the Methods-buffer the hook<br>`ecb-rebuild-non-semantic-methods-before-hook" is called. The Method-buffer is<br>only rebuild if either the hook contains no function (the default) or if no<br>function of this hook returns nil! See `run-hook-with-args-until-failure" for<br>description how these function are pressed.<br><br>The option `ecb-auto-save-before-etags-methods-rebuild" is checked before<br>rescanning the source-buffer and rebuilding the methods-buffer.<br><br>This function is called by the command `ecb-rebuild-methods-buffer"."',
          prototype : '(defun ecb-rebuild-methods-buffer-for-non-semantic ()',
          parameter : '',
          lispcode : '(defun ecb-rebuild-methods-buffer-for-non-semantic ()<br>  (when (and ecb-minor-mode<br>             (equal (selected-frame) ecb-frame)<br>             (not (ecb--semantic-active-p))<br>             (not (member major-mode ecb-non-semantic-exclude-modes))<br>             (ecb-point-in-edit-window-number))<br>    (when (run-hook-with-args-until-failure<br>           <tick>ecb-rebuild-non-semantic-methods-before-hook<br>           (ecb-buffer-file-name))<br>      ;; For etags supported non-semantic-sources we maybe have to save the<br>      ;; buffer first.<br>      (when (and (buffer-modified-p)<br>                 (not (and (boundp <tick>imenu--index-alist)<br>                           imenu--index-alist))<br>                 (or (equal ecb-auto-save-before-etags-methods-rebuild t)<br>                     (member major-mode<br>                             ecb-auto-save-before-etags-methods-rebuild)))<br>        ;; to prevent files from being parsed too often we need to temp.'
        },
        {
          function : 'ecb-rebuild-methods-buffer-for-semantic',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Rebuild the ECB-method-buffer for current source-file of the edit-window.<br>This function does nothing if point stays not in an edit-window of the<br>ECB-frame or if current source-file is not supported by semantic!<br><br>If optional arg CLEAR-CACHE is not nil the semantic-cache is cleared before<br>reparsing."',
          prototype : '(defun ecb-rebuild-methods-buffer-for-semantic (&optional clear-cache)',
          parameter : '&optional clear-cache',
          lispcode : '(defun ecb-rebuild-methods-buffer-for-semantic (&optional clear-cache)<br>  (when (and ecb-minor-mode<br>             (equal (selected-frame) ecb-frame)<br>             (ecb--semantic-active-p)<br>             (ecb-point-in-edit-window-number))<br>    (and clear-cache (ecb--semantic-clear-toplevel-cache))<br>    (ecb-update-methods-buffer--internal nil nil t)))<br>'
        },
        {
          function : 'ecb-rebuild-methods-buffer-fully',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Rebuilds the methods buffer with current content of the source-buffer.<br>This can cause a full reparse! No idle-parsing but immediate parsing because<br>the tags are fetched by `ecb--semantic-fetch-tags" for semantic-sources!<br><br>If called with a prefix-arg (ie. if optional arg CLEAR-CACHE is not nil) the<br>complete previous parser-information is deleted before parsing, means no<br>semantic-cache is used! This argument takes only effect for semantic-sources.<br><br>Point must stay in an edit-window otherwise nothing is done."',
          prototype : '(defun ecb-rebuild-methods-buffer-fully (&optional clear-cache)',
          parameter : '&optional clear-cache',
          lispcode : '(defun ecb-rebuild-methods-buffer-fully (&optional clear-cache)<br>  (when (ecb-point-in-edit-window-number)<br>    (if (ecb--semantic-active-p)<br>        (let ((semantic-idle-scheduler-max-buffer-size 0))<br>          (ecb-rebuild-methods-buffer-for-semantic clear-cache))<br>      (ecb-rebuild-methods-buffer-for-non-semantic))))'
        },
        {
          function : 'ecb-rebuild-methods-buffer-with-tagcache',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Rebuilds the ECB-method buffer after toplevel-parsing by semantic. This<br>function is added to the hook `semantic-after-toplevel-cache-change-hook".<br><br>If NO-UPDATE-SEMANTIC is not nil then the tags of the ECB-methods-buffer are<br>not updated with UPDATED-CACHE but the method-buffer is rebuild with these<br>tags ECB has already cached in it `ecb-tag-tree-cache". Only relevant for<br>semantic-parsed sources!<br><br>If FORCE-NIL-CACHE is not nil then the method-buffer is even rebuild if<br>UPDATED-CACHE is nil. Normally a nil cache is ignored if it belongs to a<br>buffer witch is setup for semantic-parsing; only nil caches for non-semantic<br>buffers (like plain text-buffers) are used for updating the method-buffers.<br>With FORCE-NIL-CACHE the method-buffer is updated with a nil cache too, i.e.<br>it is cleared.<br><br>IF NON-SEMANTIC-REBUILD is not nil then current non-semantic-source is forced<br>to be rescanned/reparsed and therefore the Method-buffer will be rebuild too."',
          prototype : '(defun ecb-rebuild-methods-buffer-with-tagcache (updated-cache                                                 &optional no-update-semantic                                                 force-nil-cache                                                 non-semantic-rebuild)',
          parameter : 'updated-cache &optional no-update-semantic force-nil-cache non-semantic-rebuild',
          lispcode : '(defun ecb-rebuild-methods-buffer-with-tagcache (updated-cache<br>                                                 &optional no-update-semantic<br>                                                 force-nil-cache<br>                                                 non-semantic-rebuild)<br>  ;; The most important function for (re)building the Method-buffer<br>  (when (and ecb-minor-mode ;; ECB must be active - just for saveness<br>             ;; ECB-frame must be active<br>             (equal (selected-frame) ecb-frame)<br>             ;; if there is a methods-buffer in current layout<br>             ;; I think there is no need that the methods buffer is visible<br>             ;; because we should also update if currently hidden<br>             (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-methods-buffer-name)<br>             ;; current buffer must have a filename.<br>             (ecb-buffer-file-name (current-buffer))<br>             ;; the parsed buffer must be displayed in a window within the<br>             ;; ECB-frame: This prevents the methods-buffer being confused by<br>             ;; the background-parsing of other files by semantic-idle-timer<br>             (or ecb-method-buffer-rebuild-allowed-for-invisible-buffers<br>                 (get-buffer-window (current-buffer) ecb-frame))<br>             ;; The functions of the hook<br>             ;; <backtick>semantic-after-toplevel-cache-change-hook<tick> are also called<br>             ;; after clearing the cache to set the cache to nil if a buffer<br>             ;; is parsed which has no tags. But buffers with no tags are<br>             ;; really seldom so cause of better performance here we do not<br>             ;; want rebuilding the method-buffer if the cache is nil but the<br>             ;; current buffer is set up for semantic-parsing, because the<br>             ;; real rebuild should be done after the cache is filled again.<br>             ;; If this hook is called <apo>manually<apo> by<br>             ;; <backtick>ecb-update-methods-buffer--internal<tick> then we do an update<br>             ;; also for a nil cache if the buffer is not setup for semantic<br>             ;; (like text-buffers or non-semantic-sources) so we can either<br>             ;; clear out the method-buffer or fill it with parsing<br>             ;; information of non-semantic-sources!<br>             (or updated-cache<br>                 (not (ecb--semantic-active-p))<br>                 force-nil-cache))<br><br>    ;; no-update-semantic has to be nil for non-semantic-sources!<br>    (if (not (ecb--semantic-active-p)) (setq no-update-semantic nil))<br><br>    ;; the following cache-mechanism MUST use the (buffer-name) instead of<br>    ;; ecb-path-selected-source because in case of opening a buffer not via<br>    ;; directory-window but via the standard-mechanism of Emacs this function<br>    ;; is called via hook BEFORE ecb-path-selected-source is set currently by<br>    ;; the synchronize-mechanism of ECB. Also if we create a new cache-element<br>    ;; for the tag-tree we MUST look if in the cache is already an element<br>    ;; with this key and if we MUST update this cache-element instead of<br>    ;; always adding a new one to the cache. Otherwise we would get more than<br>    ;; one cache-element for the same source!.<br><br>    ;; with buffer-name we can also handle indirect-buffers<br>    (let* ((cache-key (buffer-name))<br>           (cache (assoc cache-key ecb-tag-tree-cache))<br>           (curr-buff (current-buffer))<br>           (tag-sync-necessary nil)<br>           (curr-major-mode major-mode)<br>           (ezimage-use-images (if (ecb-use-images-for-semantic-tags)<br>                                   nil<br>                                 (ecb--ezimage-use-images)))<br>           (semantic-format-use-images-flag (if (ecb-use-images-for-semantic-tags)<br>                                                nil<br>                                              (ecb--semantic-format-use-images-flag)))<br>           (my-format-face-alist (if (ecb-use-images-for-semantic-tags)<br>                                     (ecb-remove-assoc <tick>abstract<br>                                                       (ecb-remove-assoc <tick>static<br>                                                                         (ecb--semantic-format-face-alist)))<br>                                   (ecb--semantic-format-face-alist)))<br>           (semantic-format-face-alist my-format-face-alist)<br>           (semantic-bucketize-tag-class<br>            (if ecb-methods-separate-prototypes<br>                (function (lambda (tag)<br>                            (if (ecb--semantic-tag-prototype-p tag)<br>                                <tick>prototype<br>                              (ecb--semantic-tag-class tag))))<br>              semantic-bucketize-tag-class))<br>           (semantic-symbol->name-assoc-list-for-type-parts<br>            (and (ecb--semantic-active-p)<br>                 (ecb--semantic-symbol->name-assoc-list-for-type-parts)<br>                 (or (and (null (cdr (assoc <tick>function<br>                                            (ecb--semantic-symbol->name-assoc-list-for-type-parts))))<br>                          (ecb--semantic-symbol->name-assoc-list-for-type-parts))<br>                     (append (ecb--semantic-symbol->name-assoc-list-for-type-parts)<br>                             (list (cons <tick>prototype<br>                                         (format <apo>%s-prototypes<apo><br>                                                 (ecb-string-make-singular<br>                                                  (cdr (assoc <tick>function<br>                                                              (ecb--semantic-symbol->name-assoc-list-for-type-parts)))))))))))<br>           (semantic-symbol->name-assoc-list<br>            (and (ecb--semantic-active-p)<br>                 (ecb--semantic-symbol->name-assoc-list)<br>                 (or (and (null (cdr (assoc <tick>function<br>                                            (ecb--semantic-symbol->name-assoc-list))))<br>                          (ecb--semantic-symbol->name-assoc-list))<br>                     (append (ecb--semantic-symbol->name-assoc-list)<br>                             (list (cons <tick>prototype<br>                                         (format <apo>%s-prototypes<apo><br>                                                 (ecb-string-make-singular<br>                                                  (cdr (assoc <tick>function<br>                                                              (ecb--semantic-symbol->name-assoc-list)))))))))))<br>           (curr-semantic-symbol->name-assoc-list semantic-symbol->name-assoc-list)<br>           new-tree non-semantic-handling)<br><br>      (if ecb-debug-mode<br>          (dolist (a-tag updated-cache)<br>            (ecb-semantic-assert-valid-tag a-tag)))<br><br>      ;; here we process non-semantic buffers if the user wants this. But only<br>      ;; if either non-semantic-rebuild is true or no cache exists.<br>      ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: Here we could evaluate an<br>      ;; option which would define which modes should be parsed by which<br>      ;; parser (so a user could also parse semantic-enabled-files with<br>      ;; etags/imenu)<br>      (when (and ecb-process-non-semantic-files<br>                 (null updated-cache)<br>                 (not (ecb--semantic-active-p))<br>                 (ecb-buffer-file-name (current-buffer))<br>                 (or non-semantic-rebuild (null cache)))<br>        (setq updated-cache (ignore-errors<br>                              (ecb-get-tags-for-non-semantic-files)))<br>        (setq non-semantic-handling'
        },
        {
          function : 'ecb-redraw-layout',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Redraw the ECB screen.<br><br>Do not call this command from elisp-program but only interactively!<br><br>Called without a prefix-argument the state of the ECB-frame-layout will<br>preserved. This means:<br>- The state of compile-window (hidden or visible) will be preserved but if<br>  visible then the height will be as specified in `ecb-compile-window-height".<br>- The state of the ECB-windows will be preserved (hidden or visible) but if<br>  visible then the sizes will be as specified in the layout (and with the<br>  options `ecb-windows-width" and `ecb-windows-height") or as stored with<br>  `ecb-store-window-sizes".<br><br>If called with ONE prefix-argument ([C-u]) then the layout will be drawn<br>with all ECB-windows and also with a visible compile-window (when<br>`ecb-compile-window-height" is not nil). The splitting-state of the edit-area<br>will be preserved.<br><br>If called with TWO prefix-arguments (i.e. hitting [C-u] twice: [C-u]<br>[C-u]) then an emergency-redraw will be performed. This means the same as if<br>called with one prefix-argument (s.a.) but the splitting-state of the<br>edit-area will NOT be preserved but all edit-windows besides the current one<br>will be deleted. Use this only if there are some anomalies after standard<br>redraws!<br><br>If the variable `ecb-redraw-layout-quickly" is not nil then the redraw is done<br>by the `ecb-redraw-layout-quickly" function, otherwise by<br>`ecb-redraw-layout-full".<br><br>Please note: It"s strongly recommended to use the quick redraw only if you have<br>really slow machines where a full redraw takes several seconds because the<br>quick redraw is not really safe and has some annoying drawbacks! On normal<br>machines the full redraw should be done in << 1s so there should be no need<br>for the quick version!"',
          prototype : '(defun ecb-redraw-layout (&optional arg)',
          parameter : '&optional arg',
          lispcode : '(defun ecb-redraw-layout (&optional arg)<br>  (interactive <apo>P<apo>)<br><br>  (when (and ecb-minor-mode<br>             (equal (selected-frame) ecb-frame))<br>    (let ((compwin-hidden (equal (ecb-compile-window-state) <tick>hidden)))<br>      (message <apo>ECB redrawing layout...<apo>)<br><br>      (if (and ecb-redraw-layout-quickly<br>               ecb-activated-window-configuration)<br>          (condition-case nil<br>              (ecb-redraw-layout-quickly)<br>            (error (message <apo>ECB: Quick redraw failed...full redraw will be performed!<apo>)<br>                   (ecb-redraw-layout-full nil nil nil (and (not arg)<br>                                                            ecb-windows-hidden-state)<br>                                           (equal arg <tick>(16)))))<br>        (ecb-redraw-layout-full nil nil nil (and (not arg)<br>                                                 ecb-windows-hidden-state)<br>                                (equal arg <tick>(16))))<br><br>      (if (and (not arg) compwin-hidden)<br>          (ecb-toggle-compile-window -1)))<br><br>    ;;make sure we are in the edit window if necessary.<br>    (when ecb-select-edit-window-on-redraw<br>      (ecb-select-edit-window))<br><br>    (message <apo>ECB redrawing layout...done<apo>)))<br><br><br>(defecb-autocontrol/sync-function ecb-repair-only-ecb-window-layout nil nil nil<br>  <apo>Repair the ecb-window layout if it has been destroyed.<apo><br>  ;; In the following situation repairing the layout with preserving all<br>  ;; states of all edit-windows and the compile-window (incl. all sizes) makes<br>  ;; sense:<br>  ;; 1. There is a permanent compile-window visible<br>  ;; 2. The ecb-windows are not hidden<br>  ;; 3. there is no ecb-window maximized<br>  ;; 4. There is no active minibuffer<br>  ;; 5. we have less ecb-windows than we should have<br>  ;; 6. Emacs does not wait for output of a running process where the<br>  ;;    associated process-buffer is visible in the ecb-frame<br><br>  ;; Then we redraw the layout with the current window-configuration-data<br>  ;; (i.e. all data of all edit-windows and all data of the compile window) so<br>  ;; we get back all ecb-windows of current lyout but preserve the<br>  ;; edit-windows and also the compile-window (incl. its height).<br>  (if (and (ecb-compile-window-live-p)<br>           (not (ecb-windows-all-hidden))<br>           (not (ecb-buffer-is-maximized-p))<br>           (not (minibuffer-window-active-p (minibuffer-window ecb-frame)))<br>           (not (equal (mapcar <tick>buffer-name<br>                               (ecb-get-current-visible-ecb-buffers))<br>                       ecb-special-ecb-buffers-of-current-layout))<br>           ;; Klaus Berndl <klaus.berndl@sdm.de>: Currently this is not<br>           ;; perfect, because for example with a *shell* buffer visible this<br>           ;; returns nil even if the shell-buffer will probably not be in use<br>           ;; by Emacs - but for savety we have to incl. *shell* because a<br>           ;; long running shell-job could run where the job inserts output in<br>           ;; the shell-buffer.<br>           (not (delq nil (mapcar (function (lambda (p)<br>                                              (and (process-buffer p)<br>                                                   (get-buffer-window (process-buffer p)<br>                                                                      ecb-frame))))<br>                                  (process-list)))))'
        },
        {
          function : 'ecb-redraw-layout-full',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Redraw the ECB screen according to the layout set in `ecb-layout-name". After<br>this function the edit-window is selected which was current<br>before redrawing. If NO-BUFFER-SYNC is not nil then the<br>ecb-buffers will not be synchronized. If ECB-WINDOWS-CREATOR is<br>not nil then it will be used to draw the layout instead of the<br>standard layout. If WINDOW-CONFIGURATION-DATA is not nil it must<br>be an object returned by `ecb-window-configuration-data" and will<br>be used for restoring the layout. If set NO-ECB-WINDOWS must be<br>of the same type as `ecb-windows-hidden-state" - see the<br>docstring of this variable; if not set it is interpreted as<br>"none. If EMERGENCY is not nil then all other args will be<br>ignored and the layout will be redrawn like defined in the<br>current layout and the edit-area will be unsplitted and will just<br>contain the buffer before the emergency-redraw."',
          prototype : '(defun ecb-redraw-layout-full (&optional no-buffer-sync ecb-windows-creator                                         window-configuration-data                                         no-ecb-windows emergency)',
          parameter : '&optional no-buffer-sync ecb-windows-creator window-configuration-data no-ecb-windows emergency',
          lispcode : '(defun ecb-redraw-layout-full (&optional no-buffer-sync ecb-windows-creator<br>                                         window-configuration-data<br>                                         no-ecb-windows emergency)<br>  (when (and ecb-minor-mode<br>             (equal (selected-frame) ecb-frame))<br>    ;; this functions are only needed at runtime!<br>    (ecb-load-layouts)<br>    (run-hooks <tick>ecb-redraw-layout-before-hook)<br>    (let* ((config (or window-configuration-data (ecb-window-configuration-data)))<br>           (window-before-redraw (nth 0 config))<br>           (pos-before-redraw (nth 1 config))<br>           (edit-win-data-before-redraw (nth 2 config))<br>           (compile-window-config (nth 3 config))<br>           (compile-buffer-before-redraw (nth 0 compile-window-config))<br>           (compile-buffer-pos-before-redraw (nth 1 compile-window-config))<br>           (ecb-buffers-before-redraw (ecb-get-current-visible-ecb-buffers))<br>           (edit-area-size nil)<br>           (edit-win-list-after-redraw nil))<br><br>      (ecb-layout-debug-error <apo>ecb-redraw-layout-full: config: %s, hidden-state: %s, curr-buff: %s, last-source-buff: %s<apo><br>                              config ecb-windows-hidden-state (current-buffer)<br>                              ecb-last-source-buffer)<br><br>      (unless no-ecb-windows<br>        (setq no-ecb-windows ecb-windows-hidden-none-value))<br>      ;; The following code runs with deactivated adviced functions, so the<br>      ;; layout-functions can use the original function-definitions.<br>      (ecb-with-original-basic-functions<br>       (ecb-with-original-permanent-layout-functions<br>        ;; first we go to the edit-window/buffer<br>        (ecb-select-edit-window)<br><br>        (ecb-do-with-unfixed-ecb-buffers<br>         ;; Do some actions regardless of the chosen layout<br><br>         ;; first we make all windows of ecb-frame not dedicated and then we<br>         ;; delete all other windows so we have a clean frame with only one<br>         ;; window where we can draw our layout. We restore later the<br>         ;; frame-state (splits, buffers, points etc.)<br>         (ecb-make-windows-not-dedicated ecb-frame)<br>         (delete-other-windows)<br>         ;; some paranoia...<br>         (set-window-dedicated-p (selected-window) nil)<br><br>         ;; we force a layout-function to set both of these windows<br>         ;; correctly.<br>         (setq ecb-edit-window nil<br>               ecb-compile-window nil)<br><br>         ;; Now we draw the compile-window and also the ecb-windows - the<br>         ;; latter ones by calling the layout-function<br>         (if (and (not emergency) (ecb-windows-all-hidden no-ecb-windows))<br>             ;; we want a layout-redraw without any ecb-windows<br>             (progn<br>               (when ecb-compile-window-height<br>                 (ecb-draw-compile-window (and window-configuration-data<br>                                               compile-window-config<br>                                               (nth 2 compile-window-config)))<br>                 )<br>               (setq ecb-edit-window (selected-window)))<br><br>           ;; here either emergency is true or at least some ecb-windows<br>           ;; should be displayed<br><br>           ;; we have to redraw with ecb-windows<br>           ;; 1. Drawing the compile-window when it has frame-width<br>           (when (and ecb-compile-window-height<br>                      (or (equal ecb-compile-window-width <tick>frame)<br>                          (equal (ecb-get-layout-type ecb-layout-name) <tick>top)))<br>             (ecb-draw-compile-window (and window-configuration-data<br>                                           compile-window-config<br>                                           (nth 2 compile-window-config))))<br><br>           ;; 2. Drawing the ecb-windows with the layout-function<br>           (funcall (intern (format <apo>ecb-layout-function-%s<apo> ecb-layout-name))<br>                    ecb-windows-creator)<br><br>           ;; 3. Drawing the compile-window when it has edit-area-width<br>           (when (and ecb-compile-window-height<br>                      (equal ecb-compile-window-width <tick>edit-window)<br>                      (not (equal (ecb-get-layout-type ecb-layout-name) <tick>top)))<br>             (ecb-draw-compile-window (and window-configuration-data<br>                                           compile-window-config<br>                                           (nth 2 compile-window-config))))<br><br>           ;; 4. Delete accordingly to no-ecb-windows some ecb-windows<br>           ;;    If emergency is here nil then it is not possible that all<br>           ;;    ecb-windows should be hidden, so we must check if all<br>           ;;    ecb-windows should be displayed (in this case we do not<br>           ;;    delete some ecb-windows)<br>           (unless (or emergency (ecb-windows-all-displayed no-ecb-windows))<br>             ;; here no-ecb-windows must be a list of side-symbols.<br>             (dolist (side (ecb-windows-hidden-state-list no-ecb-windows))<br>               (ecb-delete-ecb-windows side ecb-edit-window)))<br>           )<br><br>         ;; Now we store the window-sizes of the ecb-windows if we have a full<br>         ;; layout but only if we have drawn them either without a<br>         ;; compile-window or with a compile-window with height as specified<br>         ;; in <backtick>ecb-compile-window-height<tick><br>         (when (and (or emergency (ecb-windows-all-displayed no-ecb-windows))<br>                    (or (not ecb-compile-window-height-lines)<br>                        (not (and window-configuration-data<br>                                  compile-window-config))))<br>           (setq ecb-layout-default-window-sizes (ecb-get-ecb-window-sizes)))<br><br>         ;; Here all needed windows are created<br><br>         ;; selecting the edit-window (this is an implicit-check if the<br>         ;; layout-function has set <backtick>ecb-edit-window<tick><br>         (select-window<br>          (if ecb-edit-window<br>              ecb-edit-window<br>            (error <apo>Edit-window not set in function <tick>ecb-layout-function-%s<apo><br>                   ecb-layout-name)))<br><br>         ;; resetting some states if we have a full layout<br>         ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: maybe here is something<br>         ;; to adapt?!<br>         (when (or emergency<br>                   (and (null ecb-windows-creator) (ecb-windows-all-displayed no-ecb-windows)))<br>           (setq ecb-current-maximized-ecb-buffer-name nil)<br>           (setq ecb-cycle-ecb-buffer-state nil))<br><br>         ;; now regardless of the value of ECB-WINDOWS-CREATOR and<br>         ;; NO-ECB-WINDOWS the selected window is the edit-window and<br>         ;; ecb-edit-window is set to this window.<br><br>         ) ;; end ecb-do-with-unfixed-ecb-buffers<br><br>        ;; !!!! here we set ecb-windows-hidden-state !!!!<br>        (if emergency<br>            (progn<br>              ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: remove this later<br>              (setq ecb-windows-hidden nil)<br>              (setq ecb-windows-hidden-state ecb-windows-hidden-none-value))<br>          ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: remove this later<br>          (setq ecb-windows-hidden no-ecb-windows)<br>          (setq ecb-windows-hidden-state no-ecb-windows))<br>        (ecb-set-minor-mode-text)<br><br>        ;; Now all the windows must be created and the editing window must not<br>        ;; be splitted! In addition the variables <backtick>ecb-edit-window<tick> and<br>        ;; <backtick>ecb-compile-window<tick> must be set to the correct windows.<br><br>        ;; The following when-expression is added for better relayouting the<br>        ;; chosen layout if we have a compilation-window.<br>        (when ecb-compile-window-height<br>          (if (not (ecb-compile-window-live-p))<br>              (error <apo>Compilation-window not set in the layout-function<apo>))<br>          (set-window-buffer<br>           ecb-compile-window<br>           (or (and compile-buffer-before-redraw<br>                    (ecb-compilation-buffer-p compile-buffer-before-redraw))<br>               (ecb-some (function (lambda (buf)<br>                                     (and (not (ecb-string= <apo>*Completions*<apo><br>                                                            (ecb-buffer-name buf)))<br>                                          (not (ecb-check-for-special-buffer buf))<br>                                          (ecb-compilation-buffer-p buf))))<br>                         (buffer-list ecb-frame))<br>               (get-buffer-create <apo>*scratch*<apo>))))<br><br>        ;; Only the function <backtick>ecb-redraw-layout-full<tick> is allowed to refer and<br>        ;; set the variable <backtick>ecb-edit-window<tick> but not after the following<br>        ;; code-line. The only exception is that every layout-function must set<br>        ;; <backtick>ecb-edit-window<tick> and <backtick>ecb-compile-window<tick> at its end (but because<br>        ;; most layout-function will be generated with <backtick>ecb-layout-define<tick> this<br>        ;; is not really an exception).<br>        (select-window ecb-edit-window))) ;; end of ecb-with-original-basic-functions,<br>                                          ;; ecb-with-original-permanent-layout-functions<br><br>      ;; now we restore the edit-windows as before the redraw<br>      (if (and (not emergency)<br>               (= (length edit-win-data-before-redraw)<br>                  (ecb-edit-area-creators-number-of-edit-windows)))<br>          (ecb-with-original-basic-functions<br>           (ecb-with-original-permanent-layout-functions<br>            (ecb-restore-edit-area)))<br>        (ecb-edit-area-creators-init))<br><br>      (when (not emergency)<br>        (setq edit-win-list-after-redraw (ecb-canonical-edit-windows-list))<br>        (setq edit-area-size (ecb-get-edit-area-size)))<br><br>      ;; a safety-check if we have now after redrawing at least as many<br>      ;; edit-windows as before redrawing. If yes we restore all window-data<br>      ;; as before redraw.<br>      (when (and (not emergency)<br>                 (= (length edit-win-list-after-redraw)<br>                    (length edit-win-data-before-redraw)))<br>        (dotimes (i (length edit-win-data-before-redraw))<br>          (let ((win (nth i edit-win-list-after-redraw))<br>                (data (nth i edit-win-data-before-redraw)))<br>            (when (buffer-live-p (nth 0 data))<br>              (set-window-buffer win (nth 0 data))<br>              (set-window-start win (nth 1 data))<br>              (set-window-point win (nth 2 data)))))<br><br>        ;; Klaus Berndl <klaus.berndl@sdm.de>: It seems that resizing the<br>        ;; windows is not reliable in some constellations with more than 3<br>        ;; edit-windows - but with max. 3 edit-windows there are not known any<br>        ;; problems - and 3 edit-windows should e sufficient for most<br>        ;; situations.<br>        (when (< (length edit-win-data-before-redraw) 4)'
        },
        {
          function : 'ecb-redraw-layout-preserving-compwin-state',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Redraw current layout with all ECB-windows visible."',
          prototype : '(defun ecb-redraw-layout-preserving-compwin-state ()',
          parameter : '',
          lispcode : '(defun ecb-redraw-layout-preserving-compwin-state ()<br>  (interactive)<br>  (let ((compwin-state (ecb-compile-window-state)))<br>    (ecb-redraw-layout-full)<br>    (if (equal compwin-state <tick>hidden)<br>        (ecb-toggle-compile-window -1))))'
        },
        {
          function : 'ecb-redraw-layout-quickly',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Redraw the layout quickly using the cached window configuration<br>`ecb-activated-window-configuration"."',
          prototype : '(defun ecb-redraw-layout-quickly ()',
          parameter : '',
          lispcode : '(defun ecb-redraw-layout-quickly ()<br>  (when (and ecb-minor-mode<br>             (equal (selected-frame) ecb-frame))<br>    (run-hooks <tick>ecb-redraw-layout-before-hook)<br>    (ecb-set-window-configuration ecb-activated-window-configuration)<br>    (run-hooks <tick>ecb-redraw-layout-after-hook)))<br>'
        },
        {
          function : 'ecb-register-autocontrol/sync-function',
          filename : 'ecb/ecb-common-browser.el',
          parameter : 'fcn-symbol buffer-name-symbol',
          lispcode : '(defun ecb-register-autocontrol/sync-function (fcn-symbol buffer-name-symbol)<br>  (add-to-list <tick>ecb-autocontrol/sync-fcn-register (cons fcn-symbol buffer-name-symbol)))'
        },
        {
          function : 'ecb-remote-path',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Test if PATH is a remote path and dissect it into components if yes.<br>Returns a list (FULL-HOST-USER-PART HOST REAL-PATH), or nil if PATH is not a<br>remote path. FULL-HOST-USER-PART is that component from beginning of PATH to<br>the :-separator which separates user- and host-parts from the real path, i.e.<br>it always ends with a colon! HOST is the remote HOST and REAL-PATH is that<br>component after that :-separator. Supports tramp, ange-ftp and efs."',
          prototype : '(defun ecb-remote-path (path)',
          parameter : 'path',
          lispcode : '(defun ecb-remote-path (path)<br>  (let ((value (ecb-remote-path-cache-get path)))<br>    (cl-case value<br>      (NOT-REMOTE nil)<br>      ((nil)<br>       (let* ((dissection (or (and (featurep <tick>tramp) ;; tramp-support<br>                                   (tramp-tramp-file-p path)<br>                                   (tramp-dissect-file-name path))<br>                              (and (featurep <tick>ange-ftp) ;; ange-ftp-support<br>                                   (ange-ftp-ftp-name path))<br>                              (and (featurep <tick>efs) ;; efs support<br>                                   (efs-ftp-path path))))<br>              (host/real-path<br>               (if dissection<br>                   (or (and (featurep <tick>tramp) ;; tramp-support<br>                            (cons (tramp-file-name-host dissection)<br>                                  (if (fboundp <tick>tramp-file-name-localname)<br>                                      (tramp-file-name-localname dissection)<br>                                    (tramp-file-name-path dissection))))<br>                       (and (featurep <tick>ange-ftp) ;; ange-ftp-support<br>                            (cons (nth 0 dissection)<br>                                  (nth 2 dissection)))<br>                       (and (featurep <tick>efs) ;; efs support<br>                            (cons (nth 0 dissection)<br>                                  (nth 2 dissection))))<br>                 (cons nil path)))<br>              (full-host-user-part<br>               (substring path 0 (- (length path)<br>                                    (length (cdr host/real-path)))))<br>              (result nil))<br>         (setq result<br>               (and dissection<br>                    (list full-host-user-part<br>                          (car host/real-path)<br>                          (cdr host/real-path))))<br>         (ecb-remote-path-cache-add path (or result <tick>NOT-REMOTE))<br>         result))<br>      (otherwise value))))<br><br>;;(ecb-remote-path <apo>/berndl@ecb.sourceforge.net:~<apo>)'
        },
        {
          function : 'ecb-remote-path-cache-add',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Add the value of REMOTE-PATH for PATH to the REMOTE-PATH-cache."',
          prototype : '(defun ecb-remote-path-cache-add (path remote-path)',
          parameter : 'path remote-path',
          lispcode : '(defun ecb-remote-path-cache-add (path remote-path)<br>  (ecb-multicache-put-value <tick>ecb-filename-cache path <tick>REMOTE-PATH<br>                            remote-path))'
        },
        {
          function : 'ecb-remote-path-cache-dump',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Dump the whole REMOTE-PATH-cache. If NO-NIL-VALUE is not nil then these<br>cache-entries are not dumped. This command is not intended for end-users of<br>ECB."',
          prototype : '(defun ecb-remote-path-cache-dump (&optional no-nil-value)',
          parameter : '&optional no-nil-value',
          lispcode : '(defun ecb-remote-path-cache-dump (&optional no-nil-value)<br>  (interactive <apo>P<apo>)<br>  (ecb-multicache-print-subcache <tick>ecb-filename-cache <tick>REMOTE-PATH no-nil-value))<br>'
        },
        {
          function : 'ecb-remote-path-cache-get',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return the cached value for PATH from the REMOTE-PATH-cache."',
          prototype : '(defun ecb-remote-path-cache-get (path)',
          parameter : 'path',
          lispcode : '(defun ecb-remote-path-cache-get (path)<br>  (ecb-multicache-get-value <tick>ecb-filename-cache path <tick>REMOTE-PATH))'
        },
        {
          function : 'ecb-remove-assoc',
          filename : 'ecb/ecb-util.el',
          parameter : 'key list',
          lispcode : '(defun ecb-remove-assoc (key list)<br>  (delete nil<br>          (mapcar (function (lambda (elem)<br>                              (if (equal (car elem) key)<br>                                  nil<br>                                elem)))<br>                  list)))<br>'
        },
        {
          function : 'ecb-remove-dir-from-caches',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Remove DIR from the caches SUBDIR, EMPTY-DIR and SOURCES."',
          prototype : '(defun ecb-remove-dir-from-caches (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-remove-dir-from-caches (dir)<br>  (ecb-files-and-subdirs-cache-remove dir)<br>  (ecb-directory-empty-cache-remove dir)<br>  (ecb-sources-cache-remove dir))'
        },
        {
          function : 'ecb-remove-elt',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Remove N-th element from SEQ. SEQ can be any sequence. SEQ will be<br>changed because this is desctructive function. SEQ is returned."',
          prototype : '(defun ecb-remove-elt (seq n)',
          parameter : 'seq n',
          lispcode : '(defun ecb-remove-elt (seq n)<br>  (delq <tick>ecb-util-remove-marker (ecb-set-elt seq n <tick>ecb-util-remove-marker)))'
        },
        {
          function : 'ecb-replace-all-occurences',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Replace in SEQ all occurences of OLD-ELEM with NEW-ELEM. Comparison is<br>done by `equal". This is desctructive function. SEQ is returned."',
          prototype : '(defun ecb-replace-all-occurences (seq old-elem new-elem)',
          parameter : 'seq old-elem new-elem',
          lispcode : '(defun ecb-replace-all-occurences (seq old-elem new-elem)<br>  (while (ecb-position old-elem seq)<br>    (setq seq (ecb-replace-first-occurence seq old-elem new-elem)))<br>  seq)'
        },
        {
          function : 'ecb-replace-first-occurence',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Replace in SEQ the first occurence of OLD-ELEM with NEW-ELEM. Comparison is<br>done by `equal". This is desctructive function. SEQ is returned."',
          prototype : '(defun ecb-replace-first-occurence (seq old-elem new-elem)',
          parameter : 'seq old-elem new-elem',
          lispcode : '(defun ecb-replace-first-occurence (seq old-elem new-elem)<br>  (let ((pos (ecb-position old-elem seq)))<br>    (if pos<br>        (ecb-set-elt seq pos new-elem)))<br>  seq)'
        },
        {
          function : 'ecb-reset-compile-window-specified-height-config',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Set the ecb-window-configuration of<br>`ecb-compile-window-specified-height-config" if it is a still valid<br>ecb-window-configuration. If this had success return t otherwise nil."',
          prototype : '(defun ecb-reset-compile-window-specified-height-config ()',
          parameter : '',
          lispcode : '(defun ecb-reset-compile-window-specified-height-config ()<br>  (let ((result<br>         (and ecb-compile-window-specified-height-config<br>              (not (ecb-window-configuration-invalidp ecb-compile-window-specified-height-config))<br>              (ecb-set-window-configuration ecb-compile-window-specified-height-config))))<br>    (ecb-layout-debug-error <apo>ecb-reset-compile-window-specified-height-config: %s<apo><br>                            result)<br>    result))'
        },
        {
          function : 'ecb-reset-history-filter',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Reset the `ecb-history-filter" so all file-buffers are displayed."',
          prototype : '(defun ecb-reset-history-filter ()',
          parameter : '',
          lispcode : '(defun ecb-reset-history-filter ()<br>  (setq ecb-history-filter (cons (function<br>                                  (lambda (buf file)<br>                                    t))<br>                                 nil)))'
        },
        {
          function : 'ecb-restore-default-window-sizes',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Resets the sizes of the ECB windows to their default values."',
          prototype : '(defun ecb-restore-default-window-sizes ()',
          parameter : '',
          lispcode : '(defun ecb-restore-default-window-sizes ()<br>  (interactive)<br>  (when (equal (selected-frame) ecb-frame)<br>    (setq ecb-layout-window-sizes<br>	  (ecb-remove-assoc ecb-layout-name ecb-layout-window-sizes))<br>    (ecb-customize-save-variable <tick>ecb-layout-window-sizes ecb-layout-window-sizes)))'
        },
        {
          function : 'ecb-restore-edit-area',
          filename : 'ecb/ecb-layout.el',
          parameter : '',
          lispcode : '(defun ecb-restore-edit-area ()<br>  (dolist (elem ecb-edit-area-creators)<br>    (let ((edit-win-list (ecb-canonical-edit-windows-list)))<br>      (select-window (nth (car elem) edit-win-list))<br>      (funcall (cdr elem)))))'
        },
        {
          function : 'ecb-restore-window-sizes',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Sets the sizes of the ECB windows to their stored values."',
          prototype : '(defun ecb-restore-window-sizes ()',
          parameter : '',
          lispcode : '(defun ecb-restore-window-sizes ()<br>  (interactive)<br>  (when (equal (selected-frame) ecb-frame)<br>    (ecb-set-ecb-window-sizes (ecb-find-assoc-value ecb-layout-name<br>                                                    ecb-layout-window-sizes))))'
        },
        {
          function : 'ecb-right-trim',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return a string stripped of all trailing whitespaces of STR."',
          prototype : '(defun ecb-right-trim (str)',
          parameter : 'str',
          lispcode : '(defun ecb-right-trim (str)<br>  (or (car (split-string str <apo>[\n\t ]*$<apo>)) <apo><apo>))'
        },
        {
          function : 'ecb-ring-elements',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return a list of the lements of RING."',
          prototype : '(defun ecb-ring-elements (ring)',
          parameter : 'ring',
          lispcode : '(defun ecb-ring-elements (ring)<br>  (mapcar #<tick>identity (cddr ring)))<br>'
        },
        {
          function : 'ecb-rotate',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Rotate SEQ so START-ELEM is the new first element of SEQ. SEQ is an<br>arbitrary sequence. Example: (ecb-rotate "(a b c d e f) "c) results in (c d<br>e f a b). If START-ELEM is not contained in SEQ then nil is returned."',
          prototype : '(defun ecb-rotate (seq start-elem)',
          parameter : 'seq start-elem',
          lispcode : '(defun ecb-rotate (seq start-elem)<br>  (let ((start-pos (ecb-position start-elem seq)))<br>    (when start-pos<br>      (ecb-concatenate (cl-typecase seq<br>                         (list <tick>list)<br>                         (string <tick>string)<br>                         (vector <tick>vector))<br>                       (ecb-subseq seq start-pos)<br>                       (ecb-subseq seq 0 start-pos)))))'
        },
        {
          function : 'ecb-save-without-auto-update-methods',
          filename : 'ecb/ecb-method-browser.el',
          parameter : '',
          lispcode : '(defun ecb-save-without-auto-update-methods ()<br>  (let ((ecb-auto-update-methods-after-save nil))<br>    (save-buffer)))<br>'
        },
        {
          function : 'ecb-scroll-window',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Scrolls window of current buffer. The window will start at WINDOW-START and<br>point will stay on POINT."',
          prototype : '(defun ecb-scroll-window (point window-start)',
          parameter : 'point window-start',
          lispcode : '(defun ecb-scroll-window (point window-start)<br>  (goto-char point)<br>  (set-window-start (get-buffer-window (current-buffer)) window-start))'
        },
        {
          function : 'ecb-search-tag-by-semantic-analyzer',
          filename : 'ecb/ecb-semantic.el',
          docstring : '  "Calculate scope at point and search for a tag-definition with TAG-NAME.<br><br>If TAG-CLASS is not nil then only tags with this tag-class are searched.<br><br>Return either a positioned semantic-tag for the found<br>tag-definition or nil if nothing is found. This mechanism uses<br>the semantic-analyzer. Therefore it will work at its best if all<br>needed customizations for the semantic analyzer have been done.<br>(See the manual of the semantic analyzer for how to customizing<br>it)."',
          prototype : '(defun ecb-search-tag-by-semantic-analyzer (tag-name &optional tag-class)',
          parameter : 'tag-name &optional tag-class',
          lispcode : '(defun ecb-search-tag-by-semantic-analyzer (tag-name &optional tag-class)<br>  (let* ((scope (ecb--semantic-calculate-scope)))<br>    (when scope<br>      (ecb--semantic-analyze-find-tag tag-name tag-class scope))))'
        },
        {
          function : 'ecb-search-tag-by-semanticdb',
          filename : 'ecb/ecb-semantic.el',
          docstring : '  "Uses semanticdb to search for the definition of tag with TAG-NAME and TAG-CLASS.<br>Return exactly one semantic tag for the definition of TAG-NAME.<br>If more than one definition have been found then the user has to<br>make a choice on file-basis.<br>If TAG-CLASS is nil then a tag regardless of its class is returned as long<br>as it matches with TAG-NAME.<br><br>The returned tag will contain the filename as its :file-attribute."',
          prototype : '(defun ecb-search-tag-by-semanticdb (tag-name &optional tag-class)',
          parameter : 'tag-name &optional tag-class',
          lispcode : '(defun ecb-search-tag-by-semanticdb (tag-name &optional tag-class)<br>  (let ((definition-alist (ecb-get-definition-list-by-semanticdb tag-name tag-class))<br>        (result-elem))<br>    (when definition-alist<br>      ;; if we got more than one file for tag-name then the user has to<br>      ;; choose one.<br>      (setq result-elem<br>            (if (> (length definition-alist) 1)<br>                (assoc (ecb-offer-choices <apo>Select a definition-file: <apo><br>                                          (mapcar #<tick>car definition-alist))<br>                       definition-alist)<br>              (car definition-alist)))<br>      ;; we add the filename to the tag, then all needed informations are'
        },
        {
          function : 'ecb-search-type-tag-by-semantic-analyzer',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Calculate scope at point and search for a type with name of TAG.<br><br>Return either a positioned semantic-tag for the found<br>type-definition or nil if nothing is found. This mechanism uses<br>the semantic-analyzer. Therefore it will work at its best if all<br>needed customizations for the semantic analyzer have been done.<br>(See the manual of the semantic analyzer for how to customizing<br>it).<br><br>This function is fully fitting the needs of the option<br>`ecb-find-external-tag-functions"."',
          prototype : '(defun ecb-search-type-tag-by-semantic-analyzer (tag)',
          parameter : 'tag',
          lispcode : '(defun ecb-search-type-tag-by-semantic-analyzer (tag)<br>  (ecb-search-tag-by-semantic-analyzer (ecb--semantic-tag-name tag) <tick>type))'
        },
        {
          function : 'ecb-search-type-tag-by-semanticdb',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Uses semanticdb for searching a type with name of TAG.<br><br>Return either a positioned semantic-tag for the found<br>type-definition or nil if nothing is found. This mechanism uses<br>the semantic-analyzer. Therefore it will work at its best if all<br>needed customizations for the semantic analyzer have been done.<br>(See the manual of the semantic analyzer for how to customizing<br>it).<br><br>This function is fully fitting the needs of the option<br>`ecb-find-external-tag-functions"."',
          prototype : '(defun ecb-search-type-tag-by-semanticdb (tag)',
          parameter : 'tag',
          lispcode : '(defun ecb-search-type-tag-by-semanticdb (tag)<br>  (ecb-search-tag-by-semanticdb (ecb--semantic-tag-name tag) <tick>type))'
        },
        {
          function : 'ecb-seconds-to-time',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Convert SECONDS (a floating point number) to an Emacs time structure."',
          prototype : '(defun ecb-seconds-to-time (seconds)',
          parameter : 'seconds',
          lispcode : '(defun ecb-seconds-to-time (seconds)<br>  (list (floor seconds 65536)<br>	(floor (mod seconds 65536))<br>	(floor (* (- seconds (ffloor seconds)) 1000000))))'
        },
        {
          function : 'ecb-select-ecb-frame',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Selects the `ecb-frame" if ECB is activated - otherwise reports an error."',
          prototype : '(defun ecb-select-ecb-frame ()',
          parameter : '',
          lispcode : '(defun ecb-select-ecb-frame ()<br>  (interactive)<br>  (if ecb-minor-mode<br>      (progn<br>        (raise-frame ecb-frame)<br>        (select-frame ecb-frame))<br>    (ecb-error <apo>ECB is not avtive in any frame!<apo>)))'
        },
        {
          function : 'ecb-select-edit-window',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Moves point into the edit-window. If optional EDIT-WINDOW-NUMBER<br>is an integer then move point into the EDIT-WINDOW-NUMBER-nth edit-window<br>(beginning from 1). If EDIT-WINDOW-NUMBER is not nil but not an integer or an<br>integer < 0 or > number of current available edit-windows then move point to<br>the second edit-window if there is more than 1. If EDIT-WINDOW-NUMBER is nil<br>then select the edit-window according to the value of the option<br>`ecb-mouse-click-destination". If point already stays in the right edit-window<br>nothing is done."',
          prototype : '(defun ecb-select-edit-window (&optional edit-window-number)',
          parameter : '&optional edit-window-number',
          lispcode : '(defun ecb-select-edit-window (&optional edit-window-number)<br>  (if (and (null edit-window-number)<br>           (equal ecb-mouse-click-destination <tick>last-point))<br>      (condition-case nil<br>          (select-window ecb-last-edit-window-with-point)<br>        (error (ecb-select-edit-window 1)))<br>    (let* ((edit-win-list (ecb-canonical-edit-windows-list))<br>           (edit-win (or (and (not edit-window-number)<br>                              (car edit-win-list))<br>                         (and (integerp edit-window-number)<br>                              (> edit-window-number 0)<br>                              (<= edit-window-number (length edit-win-list))<br>                              (nth (1- edit-window-number) edit-win-list))<br>                         (and (> (length edit-win-list) 1)<br>                              (nth 1 edit-win-list))<br>                         (car edit-win-list))))<br>      (select-window edit-win))))'
        },
        {
          function : 'ecb-select-source',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Updates the directories, sources and history buffers to match the filename<br>given. If FORCE is not nil then the update of the directories buffer is done<br>even if current directory is equal to `ecb-path-selected-directory"."',
          prototype : '(defun ecb-select-source (&optional force)',
          parameter : '&optional force',
          lispcode : '(defun ecb-select-source (&optional force)<br>  (ecb-set-selected-directory (ecb-file-name-directory<br>                               (ecb-path-selected-source <tick>file)) force)<br><br>  ;; Update directory buffer<br>  (when (ecb-show-sources-in-directories-buffer-p)<br>    (ecb-exec-in-window ecb-directories-buffer-name<br>      (tree-buffer-highlight-node-by-data/name (ecb-path-selected-source <tick>file))))<br><br>  ;; Update source buffer<br>  (ecb-exec-in-window ecb-sources-buffer-name<br>    (tree-buffer-highlight-node-by-data/name (ecb-path-selected-source <tick>file)))<br><br>  (ecb-add-buffers-to-history-new))<br><br><br>(defvar ecb-history-filter nil<br>  <apo>A cons-cell where car is the filter-function and the cdr is a string how<br>the current active filter should be displayed in the modeline of<br>the History-buffer. The filter-function gets as arguments the<br>buffername and the filename of an existing file-buffer and has to'
        },
        {
          function : 'ecb-semantic-active-for-file',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Return not nil if FILENAME is already displayed in a buffer and if semantic<br>is active for this buffer."',
          prototype : '(defun ecb-semantic-active-for-file (filename)',
          parameter : 'filename',
          lispcode : '(defun ecb-semantic-active-for-file (filename)<br>  (and (get-file-buffer filename)<br>       (with-current-buffer (get-file-buffer filename)<br>         (ecb--semantic-active-p))))<br>'
        },
        {
          function : 'ecb-semantic-assert-valid-tag',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Assert that TAG is a valid tag. If not valid then `ecb-enter-debugger"<br>is called. If NO-REPARSE is not nil then the buffer is not autom. reparsed. It<br>returns nil if the assertion fails otherwise not nil. So the caller can even<br>check the result if `ecb-debug-mode" is nil in which case the function<br>`ecb-enter-debugger" is a no-op."',
          prototype : '(defun ecb-semantic-assert-valid-tag (tag &optional no-reparse)',
          parameter : 'tag &optional no-reparse',
          lispcode : '(defun ecb-semantic-assert-valid-tag (tag &optional no-reparse)<br>  (if (ecb--semantic-tag-p tag)<br>      (if (ecb--semantic-tag-with-position-p tag)<br>          (let ((o  (ecb--semantic-tag-overlay tag)))<br>            (if (and (ecb--semantic-overlay-p o)<br>                     (not (ecb--semantic-overlay-live-p o)))<br>                (progn<br>                  (when (not no-reparse)<br>                    ;; we need this because:<br>                    ;; 1. After every jump to a tag X via the method-buffer of<br>                    ;;    ECB this tag X is added to the navigation history list<br>                    ;;    as new ecb-nav-tag-history-item.<br>                    ;; 2. Before any select of a source in the sources- or<br>                    ;;    history-buffer or of a node in the method-buffer<br>                    ;;    <backtick>ecb-nav-save-current<tick> is called which operates onto<br>                    ;;    the last saved history-item which is often a<br>                    ;;    tag-history-item (see 1.): <backtick>ecb-nav-save-current<tick><br>                    ;;    saves for tag-history-items current-position and<br>                    ;;    window-start relative to the tag position of the<br>                    ;;    last saved tag-history-item which is tag X from<br>                    ;;    1.'
        },
        {
          function : 'ecb-semantic-current-nonterminal',
          filename : 'ecb/ecb-method-browser.el',
          parameter : '',
          lispcode : '(defun ecb-semantic-current-nonterminal ()<br>  (condition-case nil<br>      (ecb--semantic-current-tag)<br>    (error (message <apo>ecb--semantic-current-tag has problems --> reparsed is performed!<apo>)<br>           (when (ecb-point-in-edit-window-number)<br>             (ecb--semantic-clear-toplevel-cache)<br>             (ecb-update-methods-buffer--internal)<br>             (ecb--semantic-current-tag)))))<br>'
        },
        {
          function : 'ecb-semantic-tag-buffer',
          filename : 'ecb/ecb-method-browser.el',
          parameter : 'tag',
          lispcode : '(defun ecb-semantic-tag-buffer (tag)<br>  ;; if ecb-debug-mode is not nil then the TAG is valid if we pass the<br>  ;; assert. If ecb-debug-mode is nil then we call simply the semantic'
        },
        {
          function : 'ecb-semantic-tag-end',
          filename : 'ecb/ecb-method-browser.el',
          parameter : 'tag',
          lispcode : '(defun ecb-semantic-tag-end (tag)<br>  ;; if ecb-debug-mode is not nil then the TAG is valid if we pass the<br>  ;; assert. If ecb-debug-mode is nil then we call simply the semantic'
        },
        {
          function : 'ecb-semantic-tag-start',
          filename : 'ecb/ecb-method-browser.el',
          parameter : 'tag',
          lispcode : '(defun ecb-semantic-tag-start (tag)<br>  ;; if ecb-debug-mode is not nil then the TAG is valid if we pass the<br>  ;; assert. If ecb-debug-mode is nil then we call simply the semantic<br>  ;; function and see what happens.'
        },
        {
          function : 'ecb-semanticdb-find-result-nth-with-file',
          filename : 'ecb/ecb-semantic.el',
          docstring : '  "In RESULT, return the Nth search result.<br>This is a 0 based search result, with the first match being element 0. Returns<br>a cons cell with car is the searched and found tag and the cdr is the<br>associated full filename of this tag. If the search result is not associated<br>with a file, then the cdr of the result-cons is nil."',
          prototype : '(defun ecb-semanticdb-find-result-nth-with-file (result n)',
          parameter : 'result n',
          lispcode : '(defun ecb-semanticdb-find-result-nth-with-file (result n)<br>  (let ((result-nth (ecb--semanticdb-find-result-nth result n)))<br>    (if (and (car result-nth)<br>             (ecb--semantic-tag-with-position-p (car result-nth))<br>             (cdr result-nth))<br>        (cons (car result-nth)<br>              (ecb--semanticdb-full-filename (cdr result-nth)))<br>      (cons (car result-nth) nil))))'
        },
        {
          function : 'ecb-set-compile-window-height',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Set the height of the compile-window according to<br>`ecb-enlarged-compilation-window-max-height" and the value of<br>`temp-buffer-resize-mode" (GNU Emacs)."',
          prototype : '(defun ecb-set-compile-window-height ()',
          parameter : '',
          lispcode : '(defun ecb-set-compile-window-height ()<br>  (if (and (ecb-compile-window-live-p)<br>           (member ecb-compile-window-temporally-enlarge<br>                   <tick>(after-display both))<br>           (or (with-current-buffer (window-buffer ecb-compile-window)<br>                 (equal major-mode <tick>compilation-mode))<br>                 temp-buffer-resize-mode))<br>      (progn<br>        (ecb-layout-debug-error <apo>ecb-set-compile-window-height: enlarge/fit<apo>)<br>        (ecb-toggle-compile-window-height 1))<br>    (ecb-layout-debug-error <apo>ecb-set-compile-window-height: shrink<apo>)<br>    (ecb-toggle-compile-window-height -1)))<br>'
        },
        {
          function : 'ecb-set-current-tag-table',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Set the current tag-table of the current source-buffer to TABLE. Return<br>TABLE."',
          prototype : '(defun ecb-set-current-tag-table (table)',
          parameter : 'table',
          lispcode : '(defun ecb-set-current-tag-table (table)<br>  (setq ecb-current-post-processed-tag-table table))<br>'
        },
        {
          function : 'ecb-set-difference',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Combine LIST1 and LIST2 using a set-difference operation.<br>The result list contains all items that appear in LIST1 but not LIST2.<br>This is a non-destructive function; it makes a copy of the data if necessary<br>to avoid corrupting the original LIST1 and LIST2.<br>If TEST-FCN is not nil then it must be a function which is used to check if an<br>item of LIST1 is an element of LIST2. If TEST-FCN is nil then `memq" is used."',
          prototype : '(defun ecb-set-difference (list1 list2 &optional test-fcn)',
          parameter : 'list1 list2 &optional test-fcn',
          lispcode : '(defun ecb-set-difference (list1 list2 &optional test-fcn)<br>  (if (or (null list1) (null list2)) list1<br>    (let ((res nil))<br>      (while list1<br>        (or (if test-fcn<br>                (funcall test-fcn (car list1) list2)<br>              (memq (car list1) list2))<br>            (push (car list1) res))<br>        (pop list1))<br>      res)))<br>'
        },
        {
          function : 'ecb-set-ecb-window-sizes',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Set the sizes of visible ecb-windows to WINDOW-SIZES.<br>WINDOW-SIZES is a list where each element is a cons where the car<br>is either the buffer-name of an ecb-buffer or the variable-symbol<br>which holds the buffer-name of an ecb-buffer (e.g. the symbol<br>`ecb-history-buffer-name"). The cdr is a cons where car is the<br>width and the cdr is the height of the window. Width and height can either be<br>fractions of current frame sizes or fixed values.<br><br>The sizes are even changed if the windows-sizes are fixed, see the<br>option `window-size-fixed" (only available for GNU Emacs)."',
          prototype : '(defun ecb-set-ecb-window-sizes (window-sizes)',
          parameter : 'window-sizes',
          lispcode : '(defun ecb-set-ecb-window-sizes (window-sizes)<br>  (unless (ecb-windows-all-hidden)<br>    (ecb-do-with-unfixed-ecb-buffers<br>     (let ((sizes (or window-sizes ecb-layout-default-window-sizes))<br>           (size-elem nil)<br>           (windows (ecb-canonical-ecb-windows-list))<br>           (ref-width (frame-width ecb-frame))<br>           (ref-height (if (ecb-compile-window-live-p)<br>                           (- (frame-height ecb-frame)<br>                              (ecb-window-full-height ecb-compile-window))<br>                         (frame-height ecb-frame))))<br>       (ecb-layout-debug-error <apo>ecb-set-ecb-window-sizes: window-sizes: %s, sizes: %s, windows: %s, length-s: %d, length-w: %d<apo><br>                               window-sizes sizes windows<br>                               (length sizes) (length windows))<br>       (mapc (lambda (win)<br>               (ecb-layout-debug-error <apo>ecb-set-ecb-window-sizes: win %s, ded: %s<apo><br>                                       win (window-dedicated-p win)))<br>             windows)<br>       (when sizes<br>         (dolist (win windows)<br>           (setq size-elem<br>                 (ecb-member-of-symbol/value-list (buffer-name (window-buffer win))<br>                                                  sizes<br>                                                  <tick>car<br>                                                  <tick>cdr))<br>           (ecb-layout-debug-error <apo>ecb-set-ecb-window-sizes: set-size of: window:%s,buffer:%s,size-elem:%s<apo><br>                                   win (window-buffer win) size-elem)<br>           ;; we change only width/height for buffers we found stored width/height for<br>           (when size-elem'
        },
        {
          function : 'ecb-set-elt',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Set VAL as new N-th element of SEQ. SEQ can be any sequence. SEQ will be<br>changed because this is desctructive function. SEQ is returned."',
          prototype : '(defun ecb-set-elt (seq n val)',
          parameter : 'seq n val',
          lispcode : '(defun ecb-set-elt (seq n val)<br>  (if (listp seq)<br>      (setcar (nthcdr n seq) val)<br>    (aset seq n val))<br>  seq)'
        },
        {
          function : 'ecb-set-minor-mode-text',
          filename : 'ecb/ecb-layout.el',
          parameter : '',
          lispcode : '(defun ecb-set-minor-mode-text ()<br>  (setq ecb-minor-mode-text<br>        (if (ecb-windows-all-hidden)<br>            (or (ecb-option-get-value <tick>ecb-minor-mode-text <tick>saved-value)<br>                (ecb-option-get-value <tick>ecb-minor-mode-text <tick>standard-value))<br>          <apo><apo>)))'
        },
        {
          function : 'ecb-set-selected-directory',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Set the contents of the ECB-directories and -sources buffer correct for the<br>value of PATH. If PATH is equal to the value of `ecb-path-selected-directory"<br>then nothing is done unless first optional argument FORCE is not nil."',
          prototype : '(defun ecb-set-selected-directory (path &optional force)',
          parameter : 'path &optional force',
          lispcode : '(defun ecb-set-selected-directory (path &optional force)<br>  (let ((last-dir ecb-path-selected-directory))<br>    (setq ecb-path-selected-directory (ecb-fix-filename path))<br>    ;; if ecb-path-selected-directory has not changed then there is no need<br>    ;; to do anything here because neither the content of directory buffer<br>    ;; nor the content of the sources buffer can have been changed!<br>    (when (or force (not (ecb-string= last-dir ecb-path-selected-directory)))<br>      (when (or (not (ecb-show-sources-in-directories-buffer-p))<br>                ecb-auto-expand-directory-tree)<br>        (ecb-exec-in-window ecb-directories-buffer-name<br>          (let (start was-expanded)<br>            (when ecb-auto-expand-directory-tree<br>              ;; Expand tree to show selected directory<br>              (setq start<br>                    (if (equal ecb-auto-expand-directory-tree <tick>best)<br>                        ;; If none of the source-paths in the buffer<br>                        ;; <backtick>ecb-directories-buffer-name<tick> matches then nil<br>                        ;; otherwise the node of the best matching<br>                        ;; source-path<br>                        (let ((best-source-path<br>                               (car (ecb-get-best-matching-source-path<br>                                     ecb-path-selected-directory))))<br>                          (if best-source-path<br>                              (tree-buffer-search-displayed-node-list<br>                               (function<br>                                (lambda (node)<br>                                  (if (and (tree-buffer-node-data-equal-p<br>                                            (tree-node->data node)<br>                                            (ecb-fix-filename best-source-path))<br>                                           ;; only nodes of level 0 (ie. with<br>                                           ;; parent == root) can be source-paths<br>                                           (eq (tree-buffer-get-root)<br>                                               (tree-node->parent node)))<br>                                      node))))))<br>                      ;; we start at the root node<br>                      (tree-buffer-get-root)))<br>              (when (and (equal ecb-auto-expand-directory-tree <tick>best)<br>                         start)<br>                (setq was-expanded (or (not (tree-node->expandable start))<br>                                       (tree-node->expanded start)))<br>                ;; expand the best-match node itself<br>                (setf (tree-node->expanded start) t)<br>                ;; This function ensures a correct expandable-state of<br>                ;; start-node<br>                (ecb-update-directory-node start))<br>              ;; start recursive expanding of either the best-matching node or<br>              ;; the root-node itself.<br>              (if (or (ecb-expand-directory-tree ecb-path-selected-directory<br>                                                 (or start<br>                                                     (tree-buffer-get-root)))<br>                      (not was-expanded))<br>                  (tree-buffer-update)<br>                (tree-buffer-recenter start (selected-window))<br>                ;; sometimes we do not need a full tree-buffer-update, even<br>                ;; when FORCE is not nil. But we have to restart the<br>                ;; directories-buffer stealthy-state.<br>                (and force (ecb-stealth-tasks-after-directories-update))))'
        },
        {
          function : 'ecb-set-selected-source',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Updates all the ECB buffers and loads the SOURCE. The source is also<br>displayed unless NO-EDIT-BUFFER-SELECTION is set to non nil. In such case the<br>source is only loaded invisible in the background, all semantic-parsing and<br>ECB-Buffer-updating is done but the content of the main-edit window is not<br>changed. For the allowed values of OTHER-EDIT-WINDOW see<br>`ecb-combine-ecb-button/edit-win-nr".<br><br>SOURCE is either a string, then it is a filename or a cons, then the car is<br>the filename and the cdr is the buffer-name, whereas the latter one can be an<br>indirect-buffer."',
          prototype : '(defun ecb-set-selected-source (source other-edit-window                                       no-edit-buffer-selection)',
          parameter : 'source other-edit-window no-edit-buffer-selection',
          lispcode : '(defun ecb-set-selected-source (source other-edit-window<br>                                       no-edit-buffer-selection)<br>  (if no-edit-buffer-selection<br>      ;; load the selected source in an invisible buffer, do all the<br>      ;; updating and parsing stuff with this buffer in the background and<br>      ;; display the methods in the METHOD-buffer. We can not go back to<br>      ;; the edit-window because then the METHODS buffer would be<br>      ;; immediately updated with the methods of the edit-window.<br>      (with-current-buffer (ecb-source-get-buffer source)<br>        (ecb-path-selected-source-set (ecb-source-get-filename source)<br>                                      (buffer-name))<br>        (ecb-update-methods-buffer--internal <tick>scroll-to-begin nil t t))<br>    ;; open the selected source in the correct edit-window and do all the<br>    ;; update and parsing stuff with this buffer<br>    (ecb-display-source source other-edit-window)'
        },
        {
          function : 'ecb-set-window-configuration',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Sets the window-configuration of ECB-WINDOW-CONFIG. The additional<br>informations needed by ECB will be set by the adviced version of<br>`set-window-configuration"."',
          prototype : '(defun ecb-set-window-configuration (ecb-window-config)',
          parameter : 'ecb-window-config',
          lispcode : '(defun ecb-set-window-configuration (ecb-window-config)<br>  (set-window-configuration (car ecb-window-config)))'
        },
        {
          function : 'ecb-set-window-size',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Enlarge/shrink WINDOW to SIZE where SIZE is a cons with new width as car<br>and new height as cdr. New width and height can be floating-point-numbers.<br>Optional third argument REF-SIZE is a cons too where car is the referencial<br>width and the cdr is the referencial height when the car and cdr of SIZE are<br>floating-point-numbers. Default referencial width rsp. height are<br>`frame-width" rsp. `frame-height" of the `ecb-frame"."',
          prototype : '(defun ecb-set-window-size (window size &optional ref-size)',
          parameter : 'window size &optional ref-size',
          lispcode : '(defun ecb-set-window-size (window size &optional ref-size)<br>  (when (and window (window-live-p window) (consp size))<br>    (let* ((ref-width (or (car ref-size) (frame-width ecb-frame)))<br>           (ref-height (or (cdr ref-size) (frame-height ecb-frame)))<br>           (absolut-width (if (and (numberp (car size))<br>                                   (floatp (car size)))<br>                              (* (car size) ref-width)<br>                            (car size)))<br>           (absolut-height (if (and (numberp (car size))<br>                                    (floatp (cdr size)))<br>                               (* (cdr size) ref-height)<br>                             (cdr size)))<br>           (enlarge-width (if (numberp absolut-width)<br>                              (- (round absolut-width)<br>                                 (ecb-window-full-width window))))<br>           (enlarge-height (if (numberp absolut-height)<br>                               (- (round absolut-height)<br>                                  (ecb-window-full-height window)))))<br>      (save-selected-window<br>        (select-window window)<br>        (if (and (numberp enlarge-width) (/= enlarge-width 0))<br>            (ignore-errors (enlarge-window enlarge-width t)))<br>        (if (and (numberp enlarge-height) (/= enlarge-height 0))<br>            (ignore-errors (enlarge-window enlarge-height)))))))'
        },
        {
          function : 'ecb-set-window-size-fixed',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Set the buffer-local value of `window-size-fixed" in each visible<br>ecb-window to FIX. For Emacs < 22: If `ecb-compile-window-height" is not nil<br>then set always nil!"',
          prototype : '(defun ecb-set-window-size-fixed (fix)',
          parameter : 'fix',
          lispcode : '(defun ecb-set-window-size-fixed (fix)<br>  (let ((l (ecb-canonical-ecb-windows-list)))<br>    (dolist (w l)<br>      (with-current-buffer (window-buffer w)<br>        (setq window-size-fixed fix)))))<br>'
        },
        {
          function : 'ecb-set-windows-dedicated-state',
          filename : 'ecb/ecb-util.el',
          docstring : '  "For every buffer in BUF-LIST set its windows dedicated-state to STATE if<br>visible in the `ecb-frame"."',
          prototype : '(defun ecb-set-windows-dedicated-state (buf-list state)',
          parameter : 'buf-list state',
          lispcode : '(defun ecb-set-windows-dedicated-state (buf-list state)<br>  (mapc (function (lambda (b)<br>                    (when (get-buffer-window b ecb-frame)<br>                      (set-window-dedicated-p<br>                       (get-buffer-window b ecb-frame) state))))<br>        buf-list))<br>'
        },
        {
          function : 'ecb-show-any-node-info-by-mouse-moving-p',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Return not nil if for at least one tree-buffer showing node info only by<br>moving the mouse over a node is activated. See<br>`ecb-directories-show-node-info" etc...."',
          prototype : '(defun ecb-show-any-node-info-by-mouse-moving-p ()',
          parameter : '',
          lispcode : '(defun ecb-show-any-node-info-by-mouse-moving-p ()<br>  (let ((when-list (mapcar (function (lambda (elem)<br>                                       (car (symbol-value elem))))<br>                           <tick>(ecb-directories-show-node-info<br>                             ecb-sources-show-node-info<br>                             ecb-methods-show-node-info<br>                             ecb-history-show-node-info<br>                             ecb-analyse-show-node-info<br>                             ))))<br>    (or (member <tick>if-too-long when-list)<br>        (member <tick>always when-list))))'
        },
        {
          function : 'ecb-show-ecb-windows',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Make the ECB windows visible."',
          prototype : '(defun ecb-show-ecb-windows ()',
          parameter : '',
          lispcode : '(defun ecb-show-ecb-windows ()<br>  (interactive)<br>  (ecb-toggle-ecb-windows 1))<br>;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: use this when new mechanism is ready'
        },
        {
          function : 'ecb-show-help',
          filename : 'ecb/ecb-help.el',
          docstring : '  "Shows the online help of ECB in Info or HTML-format.<br>The format depends on the setting in `ecb-show-help-format". If called with<br>prefix argument, i.e. if FORMAT is not nil then the user is prompted to choose<br>the format of the help (Info or Html).<br><br>If an error about not finding the needed help-file occurs please take a look<br>at the options `ecb-help-info-start-file" and `ecb-help-html-start-file"!<br><br>Note: If you got ECB as a standard XEmacs-package maybe the<br>HTML-online-documentation is not included."',
          prototype : '(defun ecb-show-help (&optional format)',
          parameter : '&optional format',
          lispcode : '(defun ecb-show-help (&optional format)<br>  (interactive <apo>P<apo>)<br>  (let ((f (if format<br>               (intern (ecb-query-string <apo>Choose format of online-help:<apo><br>                                         (if (equal <tick>ecb-show-help-format<br>                                                    <tick>html)<br>                                             <tick>(<apo>info<apo> <apo>html<apo>)<br>                                           <tick>(<apo>html<apo> <apo>info<apo>))))<br>             ecb-show-help-format))<br>        (info-path-abs (expand-file-name<br>                        (save-match-data<br>                          (if (or (string-match <apo>^\\.<apo> ecb-help-info-path)<br>                                  (string-match (concat <apo>^<apo><br>                                                        (regexp-quote<br>                                                         ecb-help-info-start-file))<br>                                                ecb-help-info-path))<br>                              (concat ecb-ecb-dir ecb-help-info-path)<br>                            ecb-help-info-path))))<br>        (html-path-abs (expand-file-name<br>                        (save-match-data<br>                          (if (or (string-match <apo>^\\.<apo> ecb-help-html-path)<br>                                  (string-match (concat <apo>^<apo><br>                                                        (regexp-quote<br>                                                         ecb-help-html-start-file))<br>                                                ecb-help-html-path))<br>                              (concat ecb-ecb-dir ecb-help-html-path)<br>                            ecb-help-html-path)))))<br>    (if (equal f <tick>info)<br>        (ecb-info info-path-abs)<br>      (message <apo>Opening ECB online-help in a web-browser...<apo>)<br>      (ecb-browse-html-file html-path-abs))))<br>'
        },
        {
          function : 'ecb-show-layout-help',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Select a layout-name and shows the documentation of the layout-function.<br>At least for the built-in layouts the documentation contains a picture of the<br>outline of the chosen layout."',
          prototype : '(defun ecb-show-layout-help ()',
          parameter : '',
          lispcode : '(defun ecb-show-layout-help ()<br>  (interactive)<br>  ;; ensure we have load all layouts defined until now<br>  (ecb-load-layouts)<br>  (describe-function<br>   (intern (format <apo>ecb-layout-function-%s<apo><br>                   (ecb-choose-layout-name (ecb-available-layouts-of-type nil)<br>                                           t)))))'
        },
        {
          function : 'ecb-show-minibuffer-info',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Checks if any info about the current node in the ECB-window WINDOW should<br>be displayed. WHEN-SPEC must have the same format as the car of<br>`ecb-directories-show-node-info"."',
          prototype : '(defun ecb-show-minibuffer-info (node window when-spec)',
          parameter : 'node window when-spec',
          lispcode : '(defun ecb-show-minibuffer-info (node window when-spec)<br>  (or (eq when-spec <tick>always)<br>      (and (eq when-spec <tick>if-too-long)<br>           window<br>           (>= (tree-node-linelength node)<br>               (window-width window)))))<br>'
        },
        {
          function : 'ecb-show-sources-in-directories-buffer-p',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return not nil if in current layout sources are shown in the<br>directories-buffer."',
          prototype : '(defun ecb-show-sources-in-directories-buffer-p ()',
          parameter : '',
          lispcode : '(defun ecb-show-sources-in-directories-buffer-p ()<br>  (cl-case ecb-show-sources-in-directories-buffer<br>    (never nil)<br>    (always t)<br>    (otherwise<br>     (and (listp ecb-show-sources-in-directories-buffer)<br>          (member ecb-layout-name<br>                  ecb-show-sources-in-directories-buffer)))))'
        },
        {
          function : 'ecb-show-tip-of-the-day',
          filename : 'ecb/ecb-tod.el',
          docstring : '  "Show tip of the day if `ecb-tip-of-the-day" is not nil."',
          prototype : '(defun ecb-show-tip-of-the-day ()',
          parameter : '',
          lispcode : '(defun ecb-show-tip-of-the-day ()<br>  (interactive)<br>  (when (or (called-interactively-p <tick>interactive) ecb-tip-of-the-day)<br>    (ignore-errors (load-file ecb-tip-of-the-day-file))<br>    (let* ((cursor (if (boundp <tick>ecb-tod-cursor)<br>                       ecb-tod-cursor<br>                     0))<br>           (tip (or (ignore-errors (nth cursor ecb-tod-tip-list))<br>                    (nth 0 ecb-tod-tip-list))))<br>      ;; show tip<br>      (ecb-message-box tip <apo>Tip of the day<apo> <apo>Close<apo>)'
        },
        {
          function : 'ecb-some',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return true if PREDICATE is true of any element of SEQ or SEQs.<br>If so, return the true (non-nil) value returned by PREDICATE."',
          prototype : '(defun ecb-some (cl-pred cl-seq &rest cl-rest)',
          parameter : 'cl-pred cl-seq &rest cl-rest',
          lispcode : '(defun ecb-some (cl-pred cl-seq &rest cl-rest)<br>  (if (or cl-rest (nlistp cl-seq))<br>      (catch <tick>cl-some<br>	(apply <tick>map nil<br>	       (function (lambda (&rest cl-x)<br>			   (let ((cl-res (apply cl-pred cl-x)))<br>			     (if cl-res (throw <tick>cl-some cl-res)))))<br>	       cl-seq cl-rest) nil)<br>    (let ((cl-x nil))<br>      (while (and cl-seq (not (setq cl-x (funcall cl-pred (pop cl-seq))))))<br>      cl-x)))'
        },
        {
          function : 'ecb-sort-tags',
          filename : 'ecb/ecb-method-browser.el',
          parameter : 'sort-method tags',
          lispcode : '(defun ecb-sort-tags (sort-method tags)<br>  (if sort-method<br>      (let ((tags-by-name<br>	     (sort tags (function (lambda (a b)<br>				      (ecb-string< (ecb--semantic-tag-name a)<br>                                                   (ecb--semantic-tag-name b)))))))<br>	(if (eq <tick>access sort-method)<br>	    (sort tags-by-name<br>		  (function<br>		   (lambda (a b)<br>		     (< (ecb-access-order (ecb--semantic-tag-protection a))<br>			(ecb-access-order (ecb--semantic-tag-protection b))))))<br>	  tags-by-name))<br>    tags))<br>'
        },
        {
          function : 'ecb-source-get-buffer',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Return a living buffer-object for SOURCE.<br>SOURCE is either a string, then it is a filename or a cons, then the car is<br>the filename and the cdr is the buffer-name, whereas the latter one can be the<br>name of an indirect-buffer.<br><br>If SOURCE contains a living buffer then this buffer is returned. Otherwise a<br>buffer for the filename-part of SOURCE is created and returned. For an<br>existing ans readable file this means the file is loaded into a buffer.<br><br>Note: The buffer is just returned but not displayed."',
          prototype : '(defun ecb-source-get-buffer (source)',
          parameter : 'source',
          lispcode : '(defun ecb-source-get-buffer (source)<br>  (let* ((my-source (if (consp source) source (cons source nil)))<br>         (filename (car my-source))<br>         (buffer (ecb-buffer-obj (cdr my-source))))<br>    (or buffer<br>        (find-file-noselect filename))))'
        },
        {
          function : 'ecb-source-get-buffername',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "SOURCE is either a string, then it is a filename or a cons, then the car is<br>the filename and the cdr is the buffer-name, whereas the latter one can be the<br>name of an indirect-buffer."',
          prototype : '(defun ecb-source-get-buffername (source)',
          parameter : 'source',
          lispcode : '(defun ecb-source-get-buffername (source)<br>  (if (consp source)<br>      (cdr source)))'
        },
        {
          function : 'ecb-source-get-filename',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "SOURCE is either a string, then it is a filename or a cons, then the car is<br>the filename and the cdr is the buffer-name, whereas the latter one can be the<br>name of an indirect-buffer."',
          prototype : '(defun ecb-source-get-filename (source)',
          parameter : 'source',
          lispcode : '(defun ecb-source-get-filename (source)<br>  (if (consp source)<br>      (car source)<br>    source))'
        },
        {
          function : 'ecb-source-item-clicked',
          filename : 'ecb/ecb-file-browser.el',
          parameter : 'node ecb-button edit-window-nr shift-mode meta-mode',
          lispcode : '(defun ecb-source-item-clicked (node ecb-button edit-window-nr shift-mode meta-mode)<br>  ;; if we are in a maximized sources-window and if a methods-buffer is<br>  ;; contained in current layout then we have to redraw the full layout first<br>  ;; so the contents of the clicked source-file can be displayed in the<br>  ;; methods-buffer.<br><br>  ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: see comment in<br>  ;; ecb-directory-or-source-clicked<br>  (when (and (ecb-buffer-is-maximized-p (buffer-name))<br>             (ecb-buffer-is-ecb-buffer-of-current-layout-p<br>              ecb-methods-buffer-name))<br>    (if (ecb-member-of-symbol/value-list<br>         (buffer-name)<br>         ecb-maximize-next-after-maximized-select)<br>        (progn<br>          (ecb-maximize-ecb-buffer ecb-methods-buffer-name)'
        },
        {
          function : 'ecb-source-make',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Build a source-object from FILENAME and BUFFER.<br>If optional arg BUFFER is nil then the just FILENAME is returned.<br>If BUFFER is not nil then it can be either a buffer-object or a buffer-name.<br>A cons is returned where car is FILENAME and cdr is the buffername of BUFFER."',
          prototype : '(defun ecb-source-make (filename &optional buffer)',
          parameter : 'filename &optional buffer',
          lispcode : '(defun ecb-source-make (filename &optional buffer)<br>  (let ((buffername (when buffer<br>                      (if (bufferp buffer)<br>                          (buffer-name buffer)<br>                        buffer))))<br>    (if buffername<br>        (cons filename buffername)<br>      filename)))'
        },
        {
          function : 'ecb-sources-cache-add-filtered',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Add the filtered sources-cache CACHE-ELEM-FILTERED for DIR to the cache. If<br>there is already a filtered cache-entry then replace it. CACHE-ELEM-FILTERED<br>has to be a list as returned by `ecb-sources-cache-get-filtered"."',
          prototype : '(defun ecb-sources-cache-add-filtered (dir cache-elem-filtered)',
          parameter : 'dir cache-elem-filtered',
          lispcode : '(defun ecb-sources-cache-add-filtered (dir cache-elem-filtered)<br>  (ecb-multicache-apply-to-value<br>   <tick>ecb-filename-cache dir <tick>SOURCES<br>   (function (lambda (old-cached-value)<br>               (if (consp old-cached-value)<br>                   (progn<br>                     (setcdr old-cached-value cache-elem-filtered)<br>                     old-cached-value)<br>                 (cons nil cache-elem-filtered))))))'
        },
        {
          function : 'ecb-sources-cache-add-full',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Add the full sources-cache CACHE-ELEM-FULL for DIR to the cache. If there<br>is already a full cache-entry then replace it. CACHE-ELEM-FULL has to be a<br>list as returned by `ecb-sources-cache-get-full"."',
          prototype : '(defun ecb-sources-cache-add-full (dir cache-elem-full)',
          parameter : 'dir cache-elem-full',
          lispcode : '(defun ecb-sources-cache-add-full (dir cache-elem-full)<br>  (ecb-multicache-apply-to-value<br>   <tick>ecb-filename-cache dir <tick>SOURCES<br>   (function (lambda (old-cached-value)<br>               (if (consp old-cached-value)<br>                   (progn<br>                     (setcar old-cached-value cache-elem-full)<br>                     old-cached-value)<br>                 (cons cache-elem-full nil))))))'
        },
        {
          function : 'ecb-sources-cache-clear',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Clear the whole SOURCES-cache."',
          prototype : '(defun ecb-sources-cache-clear ()',
          parameter : '',
          lispcode : '(defun ecb-sources-cache-clear ()<br>  (ecb-multicache-clear-subcache <tick>ecb-filename-cache <tick>SOURCES))'
        },
        {
          function : 'ecb-sources-cache-dump',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Dump the whole SOURCES-cache. If NO-NIL-VALUE is not nil then these<br>cache-entries are not dumped. This command is not intended for end-users of<br>ECB."',
          prototype : '(defun ecb-sources-cache-dump (&optional no-nil-value)',
          parameter : '&optional no-nil-value',
          lispcode : '(defun ecb-sources-cache-dump (&optional no-nil-value)<br>  (interactive <apo>P<apo>)<br>  (ecb-multicache-print-subcache <tick>ecb-filename-cache <tick>SOURCES no-nil-value))<br>'
        },
        {
          function : 'ecb-sources-cache-get-filtered',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return the filtered value of a cached-directory DIR, means the<br>4-element-list (tree-buffer-root, tree-buffer-displayed-nodes,<br>sources-buffer-string, filter-regexp). If no cache-entry for DIR is available<br>then nil is returned."',
          prototype : '(defun ecb-sources-cache-get-filtered (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-sources-cache-get-filtered (dir)<br>  (cdr (ecb-multicache-get-value <tick>ecb-filename-cache dir <tick>SOURCES)))'
        },
        {
          function : 'ecb-sources-cache-get-full',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return the full value of a cached-directory DIR, means the 3-element-list<br>(tree-buffer-root, tree-buffer-displayed-nodes, sources-buffer-string). If no<br>cache-entry for DIR is available then nil is returned."',
          prototype : '(defun ecb-sources-cache-get-full (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-sources-cache-get-full (dir)<br>  (car (ecb-multicache-get-value <tick>ecb-filename-cache dir <tick>SOURCES)))'
        },
        {
          function : 'ecb-sources-cache-remove',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Remove the cache-entry for DIR from the cache."',
          prototype : '(defun ecb-sources-cache-remove (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-sources-cache-remove (dir)<br>  (ecb-multicache-clear-value <tick>ecb-filename-cache dir <tick>SOURCES))'
        },
        {
          function : 'ecb-sources-filter',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Apply a filter to the sources-buffer to reduce the number of entries.<br>So you get a better overlooking. There are three choices:<br>- Filter by extension: Just insert the extension you want the Sources-buffer<br>  being filtered. Insert the extension without leading dot!<br>- Filter by regexp: Insert the filter as regular expression.<br>- No filter: This means to display an entry for every file in the current<br>  selected directory (all except these filter already filtered out by<br>  `ecb-source-file-regexps" and `ecb-sources-exclude-cvsignore").<br>Such a filter is only applied to the current selected directory, i.e. each<br>directory has its own filtered sources-buffer."',
          prototype : '(defun ecb-sources-filter ()',
          parameter : '',
          lispcode : '(defun ecb-sources-filter ()<br>  (interactive)<br>  (let ((choice (ecb-query-string <apo>Filter sources by:<apo><br>                                  <tick>(<apo>extension<apo> <apo>regexp<apo> <apo>nothing<apo>))))<br>    (cond ((ecb-string= choice <apo>extension<apo>)<br>           (ecb-sources-filter-by-ext<br>            (read-string <apo>Insert the filter-extension without leading dot: <apo>)))<br>          ((ecb-string= choice <apo>regexp<apo>)<br>           (ecb-sources-filter-by-regexp))<br>          (t (ecb-apply-filter-to-sources-buffer nil)))))'
        },
        {
          function : 'ecb-sources-filter-by-ext',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Filter the sources by extension EXT-STR."',
          prototype : '(defun ecb-sources-filter-by-ext (ext-str)',
          parameter : 'ext-str',
          lispcode : '(defun ecb-sources-filter-by-ext (ext-str)<br>  (if (= (length ext-str) 0)<br>      (ecb-apply-filter-to-sources-buffer<br>       <apo>^[^.]+$<apo> ;; matches only filenames with no extension<br>       <apo>No ext.<apo>)<br>    (ecb-apply-filter-to-sources-buffer<br>     (format <apo>\\.%s\\<tick><apo> ext-str)<br>     (format <apo>*.%s<apo> ext-str))))'
        },
        {
          function : 'ecb-sources-filter-by-regexp',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Filter history entries by REGEXP. If the first optional argument REGEXP is<br>nil then it asks for a regexp. If second argument FILTER-DISPLAY is not nil<br>then it is displayed in the modeline of the history-buffer for current<br>regexp-filter. Otherwise the regexp itself."',
          prototype : '(defun ecb-sources-filter-by-regexp (&optional regexp filter-display)',
          parameter : '&optional regexp filter-display',
          lispcode : '(defun ecb-sources-filter-by-regexp (&optional regexp filter-display)<br>  (let ((regexp-str (or regexp (read-string <apo>Insert the filter-regexp: <apo>))))<br>    (if (> (length regexp-str) 0)<br>        (ecb-apply-filter-to-sources-buffer regexp-str filter-display))))'
        },
        {
          function : 'ecb-sources-filter-modeline-prefix',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Compute a mode-line prefix for the Sources-buffer so the current filter<br>applied to the sources is displayed. This function is only for using by<br>the option `ecb-mode-line-prefixes"."',
          prototype : '(defun ecb-sources-filter-modeline-prefix (buffer-name sel-dir sel-source)',
          parameter : 'buffer-name sel-dir sel-source',
          lispcode : '(defun ecb-sources-filter-modeline-prefix (buffer-name sel-dir sel-source)<br>  (let ((filtered-cache-elem (ecb-sources-cache-get-filtered sel-dir)))<br>    (if (null filtered-cache-elem)<br>        nil ;; no prefix if no filter<br>      (format <apo>[Filter: %s]<apo> (cdr (nth 3 filtered-cache-elem))))))'
        },
        {
          function : 'ecb-sources-menu-creator',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Creates the popup-menus for the sources-buffer."',
          prototype : '(defun ecb-sources-menu-creator (tree-buffer-name node)',
          parameter : 'tree-buffer-name node',
          lispcode : '(defun ecb-sources-menu-creator (tree-buffer-name node)<br>  (setq ecb-layout-prevent-handle-ecb-window-selection t)<br>  (let ((dyn-user-extension<br>         (and (functionp ecb-sources-menu-user-extension-function)<br>              (funcall ecb-sources-menu-user-extension-function<br>                       tree-buffer-name node)))<br>        (dyn-builtin-extension (ecb-dir/source/hist-menu-editwin-entries)))<br>    (list (cons ecb-sources-nodetype-sourcefile<br>                (funcall (or ecb-sources-menu-sorter<br>                             <tick>identity)<br>                         (append dyn-user-extension<br>                                 ecb-sources-menu-user-extension<br>                                 ecb-sources-menu<br>                                 dyn-builtin-extension))))))<br>'
        },
        {
          function : 'ecb-speedbar-activate',
          filename : 'ecb/ecb-speedbar.el',
          docstring : '  "Make sure the speedbar is running. WARNING: This could be dependent on the<br>current speedbar implementation but normally it should work with recent<br>speedbar versions >= 0.14beta1. But be aware: If the speedbar impl changes in<br>future this could break."',
          prototype : '(defun ecb-speedbar-activate()',
          parameter : '',
          lispcode : '(defun ecb-speedbar-activate()<br><br>  ;; enable the advices for speedbar<br>  (ecb-enable-advices <tick>ecb-speedbar-adviced-functions)<br><br>  (run-hooks <tick>ecb-speedbar-before-activate-hook)<br><br>  (add-hook <tick>dframe-after-select-attached-frame-hook<br>            <tick>ecb-speedbar-dframe-select-attached-window)<br><br>  ;;disable automatic speedbar updates... let the ECB handle this with<br>  ;;its sync-mechanism<br>  (speedbar-disable-update)<br><br>  ;;always stay in the current frame<br>  ;; save the old value but only first time!<br>  (if (null ecb-speedbar-select-frame-method-old)<br>      (setq ecb-speedbar-select-frame-method-old speedbar-select-frame-method))<br>  (setq speedbar-select-frame-method <tick>attached)<br><br>  (when (not (buffer-live-p speedbar-buffer))<br>    (save-excursion<br>      (setq speedbar-buffer (get-buffer-create ecb-speedbar-buffer-name))<br>      (set-buffer speedbar-buffer)<br>      (speedbar-mode)<br><br>      ;; Enable mouse tracking in emacs<br>      (if dframe-track-mouse-function<br>          (set (make-local-variable <tick>track-mouse) t)) ;this could be messy.<br>    ))<br><br>  ;;Start up the timer<br>  (speedbar-reconfigure-keymaps)<br>  (speedbar-update-contents)<br>  (speedbar-set-timer 1)<br><br>  ;;Set the frame that the speedbar should use.  This should be the selected<br>  ;;frame.  AKA the frame that ECB is running in.<br>  (setq speedbar-frame ecb-frame)<br>  (setq dframe-attached-frame ecb-frame)<br><br>  ;;this needs to be 0 because we can<tick>t have the speedbar too chatty in the<br>  ;;current frame because this will mean that the minibuffer will be updated too<br>  ;;much.<br>  ;; save the old value but only first time!<br>  (if (null ecb-speedbar-verbosity-level-old)<br>      (setq ecb-speedbar-verbosity-level-old speedbar-verbosity-level))<br>  (setq speedbar-verbosity-level 0)<br><br>  ;; save old update-flag but only the first time<br>  (if (equal ecb-speedbar-update-flag-old -1)<br>      (setq ecb-speedbar-update-flag-old speedbar-update-flag))<br>  (setq speedbar-update-flag nil)<br><br>  (ecb-activate-ecb-autocontrol-function ecb-speedbar-buffer-sync-delay<br>                                          <tick>ecb-speedbar-buffer-sync)<br><br>  ;;reset the selection variable<br>  (setq speedbar-last-selected-file nil))<br><br><br>(defun ecb-speedbar-deactivate ()<br>  <apo>Reset things as before activating speedbar by ECB<apo><br>  (ecb-disable-advices <tick>ecb-speedbar-adviced-functions)<br><br>  (remove-hook <tick>dframe-after-select-attached-frame-hook<br>               <tick>ecb-speedbar-dframe-select-attached-window)<br><br>  (setq speedbar-frame nil)<br>  (setq dframe-attached-frame nil)<br><br>  (speedbar-enable-update)<br><br>  (if ecb-speedbar-select-frame-method-old<br>      (setq speedbar-select-frame-method ecb-speedbar-select-frame-method-old))<br>  (setq ecb-speedbar-select-frame-method-old nil)'
        },
        {
          function : 'ecb-speedbar-active-p',
          filename : 'ecb/ecb-speedbar.el',
          docstring : '  "Return not nil if speedbar is active and integrated in the `ecb-frame"."',
          prototype : '(defun ecb-speedbar-active-p ()',
          parameter : '',
          lispcode : '(defun ecb-speedbar-active-p ()<br>  (and (ecb-buffer-obj ecb-speedbar-buffer-name)<br>       (get-buffer-window (get-buffer ecb-speedbar-buffer-name) ecb-frame)))'
        },
        {
          function : 'ecb-speedbar-buffer-selected',
          filename : 'ecb/ecb-speedbar.el',
          parameter : '',
          lispcode : '(defun ecb-speedbar-buffer-selected ()<br>  (equal (current-buffer) (ecb-buffer-obj ecb-speedbar-buffer-name)))'
        },
        {
          function : 'ecb-speedbar-decorate-tag',
          filename : 'ecb/ecb-speedbar.el',
          docstring : '  "Set given face to tag"s text & return decorated text"',
          prototype : '(defun ecb-speedbar-decorate-tag (tag face)',
          parameter : 'tag face',
          lispcode : '(defun ecb-speedbar-decorate-tag (tag face)<br>  (let* ((txt-tmp (car tag))<br>	 (txt (when (stringp txt-tmp) (substring txt-tmp 0))))<br>    (when txt<br>      (set-text-properties 0 (length txt) <backtick>(face ,face) txt))<br>    txt))'
        },
        {
          function : 'ecb-speedbar-dframe-select-attached-window',
          filename : 'ecb/ecb-speedbar.el',
          parameter : '',
          lispcode : '(defun ecb-speedbar-dframe-select-attached-window ()<br>  (when (and ecb-last-edit-window-with-point<br>             ecb-last-source-buffer<br>             (window-live-p ecb-last-edit-window-with-point)<br>             (equal (window-buffer ecb-last-edit-window-with-point)<br>                    ecb-last-source-buffer))<br>    (select-window ecb-last-edit-window-with-point)<br>    (set-buffer ecb-last-source-buffer)<br>;;     nil'
        },
        {
          function : 'ecb-speedbar-sb-tag-p',
          filename : 'ecb/ecb-speedbar.el',
          docstring : '  "Return not nil if TAG is a semantic-tag generated from a speedbar tag."',
          prototype : '(defun ecb-speedbar-sb-tag-p (tag)',
          parameter : 'tag',
          lispcode : '(defun ecb-speedbar-sb-tag-p (tag)<br>  (ecb--semantic--tag-get-property tag <tick>ecb-speedbar-tag))'
        },
        {
          function : 'ecb-speedbar-select-speedbar-window',
          filename : 'ecb/ecb-speedbar.el',
          parameter : '',
          lispcode : '(defun ecb-speedbar-select-speedbar-window ()<br>  (ignore-errors<br>    (and (window-live-p (get-buffer-window ecb-speedbar-buffer-name))<br>         (select-window (get-buffer-window ecb-speedbar-buffer-name)))))'
        },
        {
          function : 'ecb-speedbar-update-contents',
          filename : 'ecb/ecb-speedbar.el',
          docstring : '  "Encapsulate updating the speedbar."',
          prototype : '(defun ecb-speedbar-update-contents ()',
          parameter : '',
          lispcode : '(defun ecb-speedbar-update-contents ()<br>  (speedbar-update-contents))<br>'
        },
        {
          function : 'ecb-split-hor',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Splits the current-window horizontally and returns the absolute amount in<br>columns. If AMOUNT is greater than -1.0 and lower than +1.0 then the value is<br>multiplied with the current window-width (frame-width if USE-FRAME is not nil)."',
          prototype : '(defun ecb-split-hor (amount &optional dont-switch-window use-frame)',
          parameter : 'amount &optional dont-switch-window use-frame',
          lispcode : '(defun ecb-split-hor (amount &optional dont-switch-window use-frame)<br>  (let ((abs-amout (ecb-normalize-number amount (if use-frame<br>                                                    (frame-width)<br>                                                  (window-width)))))<br>    (ecb-split-hor-abs abs-amout dont-switch-window)<br>    abs-amout))'
        },
        {
          function : 'ecb-split-hor-abs',
          filename : 'ecb/ecb-layout.el',
          parameter : 'amount &optional dont-switch-window',
          lispcode : '(defun ecb-split-hor-abs (amount &optional dont-switch-window)<br>  (split-window-horizontally amount)<br>  (if (not dont-switch-window)<br>      (select-window (next-window))))'
        },
        {
          function : 'ecb-split-ver',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Splits the current-window and returns the absolute amount in lines. If<br>AMOUNT is greater than -1.0 and lower than +1.0 then the value is multiplied<br>with the current window-height (frame-height if USE-FRAME is not nil)."',
          prototype : '(defun ecb-split-ver (amount &optional dont-switch-window use-frame)',
          parameter : 'amount &optional dont-switch-window use-frame',
          lispcode : '(defun ecb-split-ver (amount &optional dont-switch-window use-frame)<br>  (let ((abs-amout (ecb-normalize-number amount (if use-frame<br>                                                    (1- (frame-height))<br>                                                  (ecb-window-full-height)))))<br>    (ecb-split-ver-abs abs-amout dont-switch-window)<br>    abs-amout))'
        },
        {
          function : 'ecb-split-ver-abs',
          filename : 'ecb/ecb-layout.el',
          parameter : 'amount &optional dont-switch-window',
          lispcode : '(defun ecb-split-ver-abs (amount &optional dont-switch-window)<br>  (split-window-vertically amount)<br>  (if (not dont-switch-window)<br>      (select-window (next-window))))<br><br>;;======= The new layout mechanism========================================<br>'
        },
        {
          function : 'ecb-start-of-tag-doc',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "If TAG has an outside documentation located direct before TAG then<br>return the start of the documentation. Otherwise return nil"',
          prototype : '(defun ecb-start-of-tag-doc (tag)',
          parameter : 'tag',
          lispcode : '(defun ecb-start-of-tag-doc (tag)<br>  ;; there can be an error if tag has no documentation - e.g.<br>  ;; in elisp<br>  (let ((comment (ignore-errors (ecb--semantic-documentation-for-tag tag<br>                                                                     <tick>flex))))<br>    (if (and comment<br>             (not (stringp comment)))'
        },
        {
          function : 'ecb-stealth-tasks-after-directories-update',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "After update hook for the directories-buffer. Runs directly after<br>performing a `tree-buffer-update" for this buffer."',
          prototype : '(defun ecb-stealth-tasks-after-directories-update ()',
          parameter : '',
          lispcode : '(defun ecb-stealth-tasks-after-directories-update ()<br>  (ecb-stealthy-function-state-init <tick>ecb-stealthy-empty-dir-check)<br>  (ecb-stealthy-function-state-init <tick>ecb-stealthy-ro-check-in-directories-buf)<br>  (ecb-stealthy-function-state-init <tick>ecb-stealthy-vc-check-in-directories-buf)<br>  )'
        },
        {
          function : 'ecb-stealth-tasks-after-history-update',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "After update hook for the history-buffer. Runs directly after<br>performing a `tree-buffer-update" for this buffer."',
          prototype : '(defun ecb-stealth-tasks-after-history-update ()',
          parameter : '',
          lispcode : '(defun ecb-stealth-tasks-after-history-update ()<br>  (ecb-stealthy-function-state-init <tick>ecb-stealthy-vc-check-in-history-buf)<br>  )<br>'
        },
        {
          function : 'ecb-stealth-tasks-after-sources-update',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "After update hook for the sources-buffer. Runs directly after<br>performing a `tree-buffer-update" for this buffer."',
          prototype : '(defun ecb-stealth-tasks-after-sources-update ()',
          parameter : '',
          lispcode : '(defun ecb-stealth-tasks-after-sources-update ()<br>  (ecb-stealthy-function-state-init <tick>ecb-stealthy-ro-check-in-sources-buf)<br>  (ecb-stealthy-function-state-init <tick>ecb-stealthy-vc-check-in-sources-buf)<br>  )'
        },
        {
          function : 'ecb-stealthy-function-list-add',
          filename : 'ecb/ecb-common-browser.el',
          parameter : 'fcn',
          lispcode : '(defun ecb-stealthy-function-list-add (fcn)<br>  (add-to-list <tick>ecb-stealthy-function-list fcn))'
        },
        {
          function : 'ecb-stealthy-function-p',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Return not nil if FCN is a stealthy function defined with<br>`defecb-stealthy"."',
          prototype : '(defun ecb-stealthy-function-p (fcn)',
          parameter : 'fcn',
          lispcode : '(defun ecb-stealthy-function-p (fcn)<br>  (member fcn ecb-stealthy-function-list))'
        },
        {
          function : 'ecb-stealthy-function-state-alist-add',
          filename : 'ecb/ecb-common-browser.el',
          parameter : 'fcn',
          lispcode : '(defun ecb-stealthy-function-state-alist-add (fcn)<br>  (add-to-list <tick>ecb-stealthy-function-state-alist<br>               (cons fcn <tick>done)))'
        },
        {
          function : 'ecb-stealthy-function-state-get',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Getter for `ecb-stealthy-function-state-alist". Return state for the<br>stealthy function FCN."',
          prototype : '(defun ecb-stealthy-function-state-get (fcn)',
          parameter : 'fcn',
          lispcode : '(defun ecb-stealthy-function-state-get (fcn)<br>  (cdr (assoc fcn ecb-stealthy-function-state-alist)))'
        },
        {
          function : 'ecb-stealthy-function-state-init',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Reset the state of stealthy functions. If first optional arg FCN is a<br>stealthy function then only the state of this function is reset - otherwise<br>all stealthy functions of `ecb-stealthy-function-list" are reset. If second<br>optional arg STATE is nil then the state will be reset to the special state<br>"restart - otherwise to the value STATE."',
          prototype : '(defun ecb-stealthy-function-state-init (&optional fcn state)',
          parameter : '&optional fcn state',
          lispcode : '(defun ecb-stealthy-function-state-init (&optional fcn state)<br>  (if (and fcn (ecb-stealthy-function-p fcn))<br>      (ecb-stealthy-function-state-set fcn (or state <tick>restart))<br>    (dolist (f ecb-stealthy-function-list)<br>      (ecb-stealthy-function-state-set f (or state <tick>restart)))))'
        },
        {
          function : 'ecb-stealthy-function-state-set',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Setter for `ecb-stealthy-function-state-alist". Set STATE for the<br>stealthy function FCN. Return STATE."',
          prototype : '(defun ecb-stealthy-function-state-set (fcn state)',
          parameter : 'fcn state',
          lispcode : '(defun ecb-stealthy-function-state-set (fcn state)<br>  (setcdr (assoc fcn ecb-stealthy-function-state-alist) state))'
        },
        {
          function : 'ecb-stealthy-read-only-check--internal',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Check for all sourcefile-nodes either in the directories- or the<br>sources-buffer if the associated file is writable or not. This function does<br>the real job and is is only for use by a stealthy function defined with<br>`defecb-stealthy"! STATE is the initial state-value the stealthy-function has<br>when called. Return the new state-value."',
          prototype : '(defun ecb-stealthy-read-only-check--internal (state)',
          parameter : 'state',
          lispcode : '(defun ecb-stealthy-read-only-check--internal (state)<br>  (if (or (not ecb-sources-perform-read-only-check)<br>          (not (or (string= (buffer-name (current-buffer))<br>                            ecb-sources-buffer-name)<br>                   (and (string= (buffer-name (current-buffer))<br>                                 ecb-directories-buffer-name)<br>                        (ecb-show-sources-in-directories-buffer-p)))))<br>      <tick>done<br>    ;; Now we are either in the sources-buffer or in the directories-buffer<br>    ;; when sources are displayed in the directories-buffer<br>    (if (equal state <tick>restart)<br>        (setq state 1))<br>    ;; Here the state is an integer because a stealthy functions runs only<br>    ;; when state != <tick>done<br>    (let ((lines-of-buffer (count-lines (point-min) (point-max)))<br>          (curr-node nil)<br>          (new-name nil)<br>          (read-only-p nil)<br>          (node-types-to-check (list ecb-sources-nodetype-sourcefile<br>                                     ecb-directories-nodetype-sourcefile)))<br>      (ecb-exit-on-input <tick>read-only-stealthy<br>        (save-excursion<br>          (while (<= state lines-of-buffer)<br>            (ecb-throw-on-input <tick>lines-of-buffer-loop)<br>            (ecb-goto-line state)<br>            (setq curr-node (tree-buffer-get-node-at-point))<br>            (when (and (member (tree-node->type curr-node) node-types-to-check)<br>                       (ecb-sources-read-only-check-p<br>                        (ecb-file-name-directory (tree-node->data curr-node))))<br>              (setq new-name (tree-node->name curr-node))<br>              (setq read-only-p<br>                    (not (ecb-file-writable-p (tree-node->data curr-node))))<br>              (if read-only-p<br>                  (ecb-merge-face-into-text new-name<br>                                            ecb-source-read-only-face))<br>              ;; we update the node only if we have an empty dir and the node is<br>              ;; still expandable<br>              (when read-only-p<br>                (tree-buffer-update-node<br>                 nil<br>                 new-name<br>                 <tick>use-old-value<br>                 <tick>use-old-value<br>                 <tick>use-old-value'
        },
        {
          function : 'ecb-stealthy-vc-check--dir/history',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Check for all sourcefile-nodes either in the directories- or the<br>history-buffer the VC-state. This function does the real job and is is only<br>for use by a stealthy function defined with `defecb-stealthy"! STATE is the<br>initial state-value the stealthy-function has when called. Return the new<br>state-value."',
          prototype : '(defun ecb-stealthy-vc-check--dir/history (state)',
          parameter : 'state',
          lispcode : '(defun ecb-stealthy-vc-check--dir/history (state)<br>  (if (or (not ecb-vc-needed-vc-package-available-p)<br>          (not ecb-vc-enable-support))<br>      <tick>done<br>    (if (not (or (string= (buffer-name (current-buffer))<br>                          ecb-history-buffer-name)<br>                 (and (string= (buffer-name (current-buffer))<br>                               ecb-directories-buffer-name)<br>                      (ecb-show-sources-in-directories-buffer-p))))<br>        <tick>done<br>      ;; Now we are either in the history-buffer or in the directories-buffer<br>      ;; when sources are displayed in the directories-buffer<br>      (if (equal state <tick>restart)<br>          (setq state 1))<br>      ;; Here the state is an integer because a stealthy functions runs only<br>      ;; when state != <tick>done<br>      (let ((lines-of-buffer (count-lines (point-min) (point-max)))<br>            (curr-node nil)<br>            (curr-dir nil)<br>            (new-name nil)<br>            (vc-state-fcn nil)<br>            (new-state nil)<br>            (node-types-to-check (list ecb-history-nodetype-filebuffer<br>                                       ecb-history-nodetype-indirect-filebuffer<br>                                       ecb-directories-nodetype-sourcefile)))<br>        (ecb-exit-on-input <tick>vc-check-dir-hist-stealthy<br>          (save-excursion<br>            (while (<= state lines-of-buffer)<br>              (ecb-throw-on-input <tick>lines-of-buffer-loop)<br>              (ecb-goto-line state)<br>              (setq curr-node (tree-buffer-get-node-at-point))<br>              (when (member (tree-node->type curr-node) node-types-to-check)<br>                (setq curr-dir (ecb-file-name-directory<br>                                (ecb-source-get-filename (tree-node->data curr-node))))<br>                (when (and (ecb-vc-directory-should-be-checked-p curr-dir)<br>                           (ecb-file-exists-p (ecb-source-get-filename<br>                                               (tree-node->data curr-node))))<br>                  (setq vc-state-fcn (ecb-vc-get-state-fcn-for-dir curr-dir))<br>                  (when vc-state-fcn ;; file is under VC-control<br>                    (setq new-name (tree-node->name curr-node))<br>                    (setq new-state<br>                          (ecb-vc-check-state (ecb-source-get-filename<br>                                               (tree-node->data curr-node))<br>                                              (buffer-name (current-buffer))<br>                                              vc-state-fcn))<br>                    ;; we update the node only if the state has changed<br>                    (when (not (equal <tick>unchanged new-state))<br>                      (setq new-name (ecb-vc-generate-node-name new-name new-state))<br>                      (tree-buffer-update-node<br>                       nil new-name'
        },
        {
          function : 'ecb-stealthy-vc-check--sources',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Check for all sourcefile-nodes in sources-buffer the VC-state. This<br>function does the real job and is is only for use by a stealthy function<br>defined with `defecb-stealthy"! STATE is the initial state-value the<br>stealthy-function has when called. Return the new state-value."',
          prototype : '(defun ecb-stealthy-vc-check--sources (state)',
          parameter : 'state',
          lispcode : '(defun ecb-stealthy-vc-check--sources (state)<br>  (if (or (not ecb-vc-needed-vc-package-available-p)<br>          (not (ecb-vc-directory-should-be-checked-p ecb-path-selected-directory)))<br>      <tick>done<br>    (let ((vc-state-fcn (ecb-vc-get-state-fcn-for-dir ecb-path-selected-directory)))<br>      (if (null vc-state-fcn)<br>          ;; the sources-files are not under VC-control<br>          <tick>done<br>        ;; Now we are either in the sources-, or history-buffer or in the<br>        ;; directories-buffer when sources are displayed in the<br>        ;; directories-buffer<br>        (if (equal state <tick>restart)<br>            (setq state 1))<br>        ;; Here the state is an integer because a stealthy functions runs only<br>        ;; when state != <tick>done<br>        (let ((lines-of-buffer (count-lines (point-min) (point-max)))<br>              (curr-node nil)<br>              (new-name nil)<br>              (new-state nil)<br>              (update-performed-for-dir nil))<br>          (ecb-exit-on-input <tick>vc-check-sources-stealthy<br>            (save-excursion<br>              (while (<= state lines-of-buffer)<br>                (ecb-throw-on-input <tick>lines-of-buffer-loop)<br>                (ecb-goto-line state)<br>                (setq curr-node (tree-buffer-get-node-at-point))<br>                (if (ecb-file-exists-p (tree-node->data curr-node))<br>                    (progn<br>                      (setq new-name (tree-node->name curr-node))<br>                      (setq new-state<br>                            (ecb-vc-check-state (tree-node->data curr-node)<br>                                                (buffer-name (current-buffer))<br>                                                vc-state-fcn))<br>                      ;; we update the node only if the state has changed<br>                      (when (not (equal <tick>unchanged new-state))<br>                        (setq new-name (ecb-vc-generate-node-name new-name new-state))<br>                        (or update-performed-for-dir<br>                            (setq update-performed-for-dir ecb-path-selected-directory))<br>                        (tree-buffer-update-node<br>                         curr-node new-name<br>                         <tick>use-old-value <tick>use-old-value <tick>use-old-value<br>                         <tick>use-old-value t))<br>                      (setq state (1+ state)))<br><br>                  ;; file does no longer exist<br><br>                  ;; reduce the number of lines/files<br>                  (setq lines-of-buffer (1- lines-of-buffer))<br>                  ;; remove the node from the tree and the tree-display<br>                  (tree-buffer-remove-node curr-node t)'
        },
        {
          function : 'ecb-stop-all-autocontrol/sync-functions',
          filename : 'ecb/ecb-common-browser.el',
          parameter : '',
          lispcode : '(defun ecb-stop-all-autocontrol/sync-functions ()<br>  (dolist (fcn-elem ecb-autocontrol/sync-fcn-register)<br>    (ecb-stop-autocontrol/sync-function (car fcn-elem))))'
        },
        {
          function : 'ecb-stop-autocontrol/sync-function',
          filename : 'ecb/ecb-common-browser.el',
          parameter : 'fcn-symbol',
          lispcode : '(defun ecb-stop-autocontrol/sync-function (fcn-symbol)<br>  (let* ((timer-elem (assoc fcn-symbol ecb-idle-timer-alist))<br>         (timer (cdr timer-elem)))<br>    (when timer-elem<br>      (ecb-cancel-timer timer)<br>      (setq ecb-idle-timer-alist (delq timer-elem ecb-idle-timer-alist)))<br>    (remove-hook <tick>post-command-hook fcn-symbol)<br>    (remove-hook <tick>pre-command-hook fcn-symbol)<br>    (setq ecb-post-command-hooks (delq fcn-symbol ecb-post-command-hooks))<br>    (setq ecb-pre-command-hooks (delq fcn-symbol ecb-pre-command-hooks))))<br>'
        },
        {
          function : 'ecb-store-compile-window-specified-height-config',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Store the current ecb-window-configuration in<br>`ecb-compile-window-specified-height-config" but do this only if a<br>compile-window is visible and if this compile-window has height<br>`ecb-compile-window-height-lines"! Otherwise set this variable to nil."',
          prototype : '(defun ecb-store-compile-window-specified-height-config ()',
          parameter : '',
          lispcode : '(defun ecb-store-compile-window-specified-height-config ()<br>  (setq ecb-compile-window-specified-height-config<br>        (if (and ecb-use-window-config-for-compwin-shrink<br>                 (ecb-compile-window-live-p)<br>                 (equal (ecb-window-full-height ecb-compile-window)<br>                        ecb-compile-window-height-lines))<br>            (ecb-current-window-configuration))))'
        },
        {
          function : 'ecb-store-current-options-version',
          filename : 'ecb/ecb-upgrade.el',
          parameter : '',
          lispcode : '(defun ecb-store-current-options-version ()<br>  (when (not (ecb-options-version=ecb-version-p))<br>    (setq ecb-old-ecb-version (ecb-option-get-value <tick>ecb-options-version<br>                                                    <tick>saved-value))<br>    (ecb-customize-save-variable <tick>ecb-options-version ecb-version)))<br>'
        },
        {
          function : 'ecb-store-window-sizes',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Stores the sizes of the ECB windows for the current layout.<br>The size of the ECB windows will be set to their stored values when<br>`ecb-redraw-layout" or `ecb-restore-window-sizes" is called. To reset the<br>window sizes to their default values call `ecb-restore-default-window-sizes".<br>Please read also the documentation of `ecb-layout-window-sizes"!<br><br>The windows sizes are stored per default as fractions of current frame-width<br>and -height of the ecb-frame, so the stored values will "work" for other<br>frame sizes too. If a permanent compile-window is visible then ECB will tell<br>you that window-sizes should be stored with hidden compile-window and ask you<br>if you want proceed; if you proceed then the window-heights will be stored as<br>fractions of current (frame-height minus current visible<br>compile-window-height) so you should ensure that the current compile-window<br>has its standard-height as specified in `ecb-compile-window-height"!. If FIX<br>is not nil (means called with a prefix argument) then always the fixed values<br>of current width and height are stored!"',
          prototype : '(defun ecb-store-window-sizes (&optional fix)',
          parameter : '&optional fix',
          lispcode : '(defun ecb-store-window-sizes (&optional fix)<br>  (interactive <apo>P<apo>)<br>  (when (equal (selected-frame) ecb-frame)<br>    (if (or (ecb-buffer-is-maximized-p)<br>            (not (ecb-windows-all-displayed)))<br>         (ecb-error <apo>Sizes can only be stored if the complete layout is visible!<apo>)<br>      (if (or (not (ecb-compile-window-live-p))<br>              (y-or-n-p <apo>Window-sizes should be stored with hidden compile-window! Proceed? <apo>))<br>          (let ((a (ecb-find-assoc ecb-layout-name ecb-layout-window-sizes)))<br>            (unless a<br>              (setq a (cons ecb-layout-name nil))<br>              (setq ecb-layout-window-sizes<br>                    (ecb-add-assoc a ecb-layout-window-sizes)))<br>            (setcdr a (ecb-get-ecb-window-sizes fix))<br>            (ecb-customize-save-variable <tick>ecb-layout-window-sizes<br>                                         ecb-layout-window-sizes))))))<br>'
        },
        {
          function : 'ecb-string-make-singular',
          filename : 'ecb/ecb-method-browser.el',
          parameter : 'string',
          lispcode : '(defun ecb-string-make-singular (string)<br>  (if (equal (aref string (1- (length string))) ?s)<br>      (substring string 0 (1- (length string)))<br>    string))<br>'
        },
        {
          function : 'ecb-submit-problem-report',
          filename : 'ecb/ecb-help.el',
          docstring : '  "Submit a problem report for the ECB to the ECB mailing-list.<br>This command generates in the edit-window a problem-report which contains<br>already the current values of all ECB options, the current backtrace-buffer if<br>there is any and the current message-buffer. You will be asked for a<br>problem-report subject and then you must insert a description of the problem.<br>Please describe the problem as detailed as possible!<br><br>*IMPORTANT*: Cause of extra appearance of SPAM in the mailing-lists,<br>SourceForge has changed its policy: Now it is only possible to post to the<br>mailing-list for users who have subscribed this mailing-list. So please be<br>aware you will not be able to send comments, bug reports and improvement<br>suggestions before you have subscribed the ECB-mailing-list. See the section<br>"Mailing-list" at the ECB-website at http://ecb.sourceforge.net how to do<br>this."',
          prototype : '(defun ecb-submit-problem-report()',
          parameter : '',
          lispcode : '(defun ecb-submit-problem-report()<br><br>  (interactive)<br>  (when (or ecb-minor-mode<br>            (y-or-n-p <apo>ECB should be active when submitting a problem-report. Force report? <apo>))<br>    (if (and (equal ecb-frame (selected-frame))<br>             (not (ecb-point-in-edit-window-number)))<br>        (ecb-select-edit-window))<br>    (if (not (locate-library <apo>reporter<apo>))<br>        (ecb-error <apo>You need the reporter.el package to submit a bugreport for ECB!<apo>)<br>      (require <tick>reporter)<br>      (progn<br>        (message <apo>Preparing problem report...<apo>)<br>        ;;prepare the basic buffer<br>        (reporter-submit-bug-report<br>         ecb-problem-report-mail-address<br>         (format <apo>ECB: %s, eieio: %s, JDEE: %s<apo><br>                 ecb-version<br>                 eieio-version<br>                 (if (boundp <tick>jde-version)<br>                     jde-version<br>                   <apo>No JDEE<apo>))<br>         (ecb-problem-report-list-all-variables)<br>         nil<br>         <tick>ecb-problem-report-post-hook<br>         ecb-problem-report-message)<br>        (if (equal ecb-frame (selected-frame))<br>            (ecb-redraw-layout))<br>        (mail-subject)<br>        (insert (read-string <apo>Problem report subject: <apo><br>                             (format <apo>ECB-%s -- <apo> ecb-version)))<br>        (mail-text)<br>        (search-forward ecb-problem-report-message)<br>        (end-of-line)'
        },
        {
          function : 'ecb-subseq',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return the subsequence of SEQ from START to END.<br>If END is omitted, it defaults to the length of the sequence.<br>If START or END is negative, it counts from the end."',
          prototype : '(defun ecb-subseq (seq start &optional end)',
          parameter : 'seq start &optional end',
          lispcode : '(defun ecb-subseq (seq start &optional end)<br>  (if (stringp seq) (substring seq start end)<br>    (let (len)<br>      (and end (< end 0) (setq end (+ end (setq len (length seq)))))<br>      (if (< start 0) (setq start (+ start (or len (setq len (length seq))))))<br>      (cl-typecase seq<br>        (list (if (> start 0) (setq seq (nthcdr start seq)))<br>              (if end<br>                  (let ((res nil))<br>                    (while (>= (setq end (1- end)) start)<br>                      (push (pop seq) res))<br>                    (nreverse res))<br>                (copy-sequence seq)))<br>        (otherwise (or end (setq end (or len (length seq))))<br>                   (let ((res (make-vector (max (- end start) 0) nil))<br>                         (i 0))<br>                     (while (< start end)<br>                       (aset res i (aref seq start))<br>                       (setq i (1+ i) start (1+ start)))<br>                     res))))))'
        },
        {
          function : 'ecb-subtract-time',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Subtract two internal times and return the result as internal time."',
          prototype : '(defun ecb-subtract-time (t1 t2)',
          parameter : 't1 t2',
          lispcode : '(defun ecb-subtract-time (t1 t2)<br>  (let ((borrow (< (cadr t1) (cadr t2))))<br>    (list (- (car t1) (car t2) (if borrow 1 0))<br>	  (- (+ (if borrow 65536 0) (cadr t1)) (cadr t2)))))'
        },
        {
          function : 'ecb-symboldef-find-definition',
          filename : 'ecb/ecb-symboldef.el',
          docstring : '  "Inserts the definition of symbol with name SYMBOL-NAME.<br>Fill the upper-half of the special ecb-window with text preceding the<br>symbol-definition in the definition-file. First tries to find the definition<br>with semanticdb and then - if no success - with current etags-file."',
          prototype : '(defun ecb-symboldef-find-definition (symbol-name edit-buffer)',
          parameter : 'symbol-name edit-buffer',
          lispcode : '(defun ecb-symboldef-find-definition (symbol-name edit-buffer)<br>  (let* ((symboldef-window-height (ecb-window-full-height<br>                                   (get-buffer-window (current-buffer))))<br>         ;; first lookup via semnaticdb, then via etags:<br>         (result (or (ecb-symboldef-find-tag-by-semanticdb symbol-name edit-buffer)<br>                     (ecb-symboldef-find-tag-by-etags symbol-name edit-buffer)<br>                     (list nil nil nil)))<br>         (num-tag-lines (- (/ symboldef-window-height 2) 0))<br>         (tag-buf (nth 0 result))<br>         (tag-point (nth 1 result))<br>         (tag-point-max (nth 2 result))<br>         (extend-point-min nil)<br>         (extend-point-max nil)<br>         (hilight-point-min nil)<br>         (hilight-point-max nil))<br>    (setq truncate-lines t)<br>    (when tag-buf<br>      (with-current-buffer tag-buf<br>        (save-excursion<br>          (goto-char tag-point)<br>          (forward-line (- num-tag-lines))<br>          (setq extend-point-min (point))<br>          (forward-line num-tag-lines)<br>          (forward-line num-tag-lines)<br>          (setq extend-point-max (point))))<br>      (insert (ecb-buffer-substring extend-point-min extend-point-max tag-buf))<br>      (goto-char (+ (- tag-point extend-point-min) 1))<br>      (setq hilight-point-min (point))<br>      (if tag-point-max<br>          (goto-char (+ (- tag-point-max extend-point-min) 1))<br>        (end-of-line))<br>      (setq hilight-point-max (point))<br>      (add-text-properties hilight-point-min hilight-point-max<br>                           <tick>(face highlight ))'
        },
        {
          function : 'ecb-symboldef-find-lisp-doc',
          filename : 'ecb/ecb-symboldef.el',
          docstring : '  "Insert the lisp-documentation of symbol with name SYMBOL-NAME."',
          prototype : '(defun ecb-symboldef-find-lisp-doc (symbol-name edit-buffer)',
          parameter : 'symbol-name edit-buffer',
          lispcode : '(defun ecb-symboldef-find-lisp-doc (symbol-name edit-buffer)<br>  (setq truncate-lines nil)<br>  (let ((symbol (intern symbol-name))<br>        (fsymbol nil)<br>        (begin-vdoc (point-min))<br>        (retval nil)<br>        (args nil))<br>    ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: make an option how to deal<br>    ;; with function-symbols:<br>    ;; - always display only if symbol under point is a function<br>    ;; - display function around<br>    ;; - display conditions for function symbols (length, regexp to match)<br>    (when (setq fsymbol<br>                (with-current-buffer edit-buffer<br>                 (function-called-at-point)))<br>      (insert (format <apo>%s is <apo> fsymbol))<br>      (let ((standard-output (current-buffer)))<br>        (describe-function-1 fsymbol))<br>      (let ((beg nil)<br>            (end nil))<br>        (goto-char (point-min))<br>        (when (and ecb-symboldef-symbol-face<br>                   (re-search-forward (regexp-quote (symbol-name fsymbol)) nil t))<br>          (setq beg (match-beginning 0))<br>          (setq end (match-end 0))<br>          (ecb-merge-face<br>           (if (eq ecb-symboldef-symbol-face <tick>use-font-lock-face)<br>               <tick>font-lock-function-name-face<br>             ecb-symboldef-symbol-face)<br>           beg end)<br>          (goto-char end))<br><br>        (when (and ecb-symboldef-prototype-face<br>                   (re-search-forward  (regexp-quote (concat <apo>(<apo> (symbol-name fsymbol))) nil t))<br>          (setq beg (match-beginning 0))<br>          (goto-char beg)<br>          (forward-sexp)<br>          (setq end (point))<br>          (ecb-merge-face<br>           ecb-symboldef-prototype-face<br>           beg end)<br>          (ecb-merge-face<br>           (if (eq ecb-symboldef-symbol-face <tick>use-font-lock-face)<br>               <tick>font-lock-function-name-face<br>             ecb-symboldef-symbol-face)<br>           (1+ beg)<br>           (match-end 0))))<br>      (goto-char (point-max))<br>      ;; we needs this later if the symbol is not only a function but a<br>      ;; variable too!<br>      (setq begin-vdoc (point))<br>      (setq retval (format <apo>Lisp %s<apo><br>                           (if (commandp fsymbol)<br>                               <apo>Command<apo><br>                             <apo>Function<apo>))))<br>    (when (boundp symbol)<br>      (and fsymbol (insert <apo>\n\n___________\n\n<apo>))<br>;;       (insert (format <apo>%s is a %s\n\n%s\n\nValue: %s\n\n<apo> symbol<br>;;                       (if (user-variable-p symbol)<br>;;                           <apo>Option <apo> <apo>Variable<apo>)<br>;;                       (or (documentation-property<br>;;                            symbol <tick>variable-documentation)<br>;;                           <apo>not documented<apo>)<br>;;                       (symbol-value symbol)))<br>      (insert (ecb-symboldef-get-doc-for-vsymbol symbol edit-buffer))<br>      (let ((beg nil)<br>            (end nil))<br>        (goto-char begin-vdoc)<br>        (when (and ecb-symboldef-symbol-face<br>                   (re-search-forward (regexp-quote symbol-name) nil t))<br>          (setq beg (match-beginning 0))<br>          (setq end (match-end 0))<br>          (ecb-merge-face<br>           (if (eq ecb-symboldef-symbol-face <tick>use-font-lock-face)<br>               <tick>font-lock-variable-name-face'
        },
        {
          function : 'ecb-symboldef-find-null',
          filename : 'ecb/ecb-symboldef.el',
          docstring : '  "Empty symbol-definition find function.<br>Only prints mode and info but does not find any symbol-definition."',
          prototype : '(defun ecb-symboldef-find-null (symbol-name edit-buffer)',
          parameter : 'symbol-name edit-buffer',
          lispcode : '(defun ecb-symboldef-find-null (symbol-name edit-buffer)<br>  (let ((symboldef-window-height (ecb-window-full-height<br>                                  (get-buffer-window (current-buffer)))))<br>    (dotimes (i (/ symboldef-window-height 2)) (insert <apo>\n<apo>))<br>    (insert  <apo>*  No symbol definition function for current mode *\n<apo><br>             <apo>*  See variable <backtick>ecb-symboldef-find-functions<tick> *<apo>)))<br>'
        },
        {
          function : 'ecb-symboldef-find-tag-by-etags',
          filename : 'ecb/ecb-symboldef.el',
          docstring : '  "Try to find the definition of SYMBOL-NAME via etags.<br>Returns nil if not found otherwise a list (tag-buffer tag-begin tag-end)<br>whereas tag-end is currently always nil."',
          prototype : '(defun ecb-symboldef-find-tag-by-etags (symbol-name edit-buffer)',
          parameter : 'symbol-name edit-buffer',
          lispcode : '(defun ecb-symboldef-find-tag-by-etags (symbol-name edit-buffer)<br><br>  (let* ((result-buf (ignore-errors (find-tag-noselect symbol-name)))<br>         (result-point (if result-buf<br>                           (with-current-buffer result-buf<br>                             (point)))))<br>    (if result-buf<br>        (list result-buf result-point nil))))'
        },
        {
          function : 'ecb-symboldef-find-tag-by-semanticdb',
          filename : 'ecb/ecb-symboldef.el',
          docstring : '  "Function to find a semantic-tag by SYMBOL-NAME.<br>Returns nil if not found otherwise a list (tag-buffer tag-begin tag-end)"',
          prototype : '(defun ecb-symboldef-find-tag-by-semanticdb (symbol-name edit-buffer)',
          parameter : 'symbol-name edit-buffer',
          lispcode : '(defun ecb-symboldef-find-tag-by-semanticdb (symbol-name edit-buffer)<br>  (with-current-buffer edit-buffer<br>    (let* ((mytag-list (ecb--semanticdb-brute-deep-find-tags-by-name symbol-name<br>                                                                     nil t))<br>	   (mytag (if mytag-list<br>                      (car (ecb--semanticdb-find-result-nth<br>                            mytag-list<br>                            (1- (ecb--semanticdb-find-result-length mytag-list))))))<br>	   (mytag-ovr (if mytag (ecb--semantic-tag-bounds mytag)))<br>	   (mytag-min (if mytag-ovr (car mytag-ovr)))<br>	   (mytag-max (if mytag-ovr (car (cdr mytag-ovr))))<br>	   (mytag-buf (if mytag (ecb--semantic-tag-buffer mytag))))<br>      (if mytag-buf<br>          (list mytag-buf mytag-min mytag-max)))))'
        },
        {
          function : 'ecb-symboldef-get-doc-for-fsymbol',
          filename : 'ecb/ecb-symboldef.el',
          docstring : '  "Returns the full output of `describe-function" as string without any<br>sideeffect to the help-system of Emacs.<br>FSYMBOL is the symbol for which the doc-string should be returned and<br>EDIT-BUFFER is that buffer FSYMBOL is used."',
          prototype : '(defun ecb-symboldef-get-doc-for-fsymbol (fsymbol edit-buffer)',
          parameter : 'fsymbol edit-buffer',
          lispcode : '(defun ecb-symboldef-get-doc-for-fsymbol (fsymbol edit-buffer)<br>  ;; by binding standard-output to a special buffer we can force<br>  ;; describe-function-1 to print all its output to this buffer.<br>  (let ((standard-output (get-buffer-create ecb-symboldef-temp-buffer-name))<br>        (doc-string nil))<br>    (with-current-buffer standard-output<br>      ;;(insert (symbol-name symbol))<br>      (describe-function-1 fsymbol)<br>      (setq doc-string (buffer-string)))'
        },
        {
          function : 'ecb-symboldef-get-doc-for-vsymbol',
          filename : 'ecb/ecb-symboldef.el',
          docstring : '  "Returns the full output of `describe-variable" as string without any<br>sideeffect to the help-system of Emacs.<br>VSYMBOL is the symbol for which the doc-string should be returned and<br>EDIT-BUFFER is that buffer VSYMBOL is used."',
          prototype : '(defun ecb-symboldef-get-doc-for-vsymbol (vsymbol edit-buffer)',
          parameter : 'vsymbol edit-buffer',
          lispcode : '(defun ecb-symboldef-get-doc-for-vsymbol (vsymbol edit-buffer)<br>  ;; Klaus Berndl <klaus.berndl@sdm.de>: It would be good if we could<br>  ;; use the describe-variable output. Problem: This function displays the<br>  ;; doc in a help-window, so we have to redirect the output. Possible but<br>  ;; there is something to do:<br>  ;; 0. making edit-buffer (s. arg) current<br>  ;; 1. For Emacs: redefining help-buffer so it returns a buffer which is<br>  ;;    suitable for us. For XEmacs help-buffer-name analogous<br>  ;; 2. For (X)Emacs: Setting temp-buffer-show-function temporally to<br>  ;;    something special which does simply nothing<br>  ;; 3. setting temp-buffer-setup-hook to nil<br>  ;; 3. Binding standart-output to a temporally buffer-object<br>  ;; 4. running describe-variable<br>  (with-current-buffer edit-buffer'
        },
        {
          function : 'ecb-symboldef-get-find-function',
          filename : 'ecb/ecb-symboldef.el',
          docstring : '  "Returns the symbol find function to use according to major-mode"',
          prototype : '(defun ecb-symboldef-get-find-function ()',
          parameter : '',
          lispcode : '(defun ecb-symboldef-get-find-function ()<br>  (let ((mode-function (cdr (assoc major-mode ecb-symboldef-find-functions)))<br>	(default-function (cdr (assoc <tick>default ecb-symboldef-find-functions))))<br>    (or mode-function<br>        default-function<br>        <tick>ecb-symboldef-find-null)))'
        },
        {
          function : 'ecb-tag-generate-node-name',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Generate an suitable node name. Add needed image-icons if possible and<br>necessary. For the arguments TEXT-NAME, FIRST-CHARS and ICON-NAME see<br>`ecb-generate-node-name"."',
          prototype : '(defun ecb-tag-generate-node-name (text-name first-chars icon-name)',
          parameter : 'text-name first-chars icon-name',
          lispcode : '(defun ecb-tag-generate-node-name (text-name first-chars icon-name)<br>  (if (ecb-use-images-for-semantic-tags)<br>      (ecb-generate-node-name text-name first-chars icon-name<br>                              ecb-methods-buffer-name)<br>    text-name))<br>'
        },
        {
          function : 'ecb-tag-visit-display-doc-start',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Display the beginning of the documentation of TAG if defined outside.<br>This means move the window-start of current edit-window so the whole<br>documentation is visible. But points still stays onto the tag-start!<br>This is useful especially for languages like Java where the documentation<br>resides direct before the TAG in Javadoc format.<br>If the documentation is located within TAG then nothing is done.<br><br>If this function is set in `ecb-tag-visit-post-actions" then it"s strongly<br>recommended not to add `ecb-tag-visit-recenter" or<br>`ecb-tag-visit-recenter-top" after this this function!<br><br>This action is not recommended for sources of type TeX, texinfo etc. So you<br>should not add this action to the "default element of<br>`ecb-tag-visit-post-actions"!<br><br>Returns current point."',
          prototype : '(defun ecb-tag-visit-display-doc-start (tag)',
          parameter : 'tag',
          lispcode : '(defun ecb-tag-visit-display-doc-start (tag)<br>  (let ((tag-doc-start  (ecb-start-of-tag-doc tag)))<br>    (when (and tag-doc-start<br>               (not (pos-visible-in-window-p tag-doc-start)))<br>      ;; tag-doc-start must be above the current window-start so we must must<br>      ;; reset the window-start'
        },
        {
          function : 'ecb-tag-visit-function-member-p',
          filename : 'ecb/ecb-method-browser.el',
          parameter : 'fnc',
          lispcode : '(defun ecb-tag-visit-function-member-p (fnc)<br>  (or (member fnc (cdr (assoc <tick>default ecb-tag-visit-post-actions)))<br>      (member fnc (cdr (assoc major-mode ecb-tag-visit-post-actions)))))'
        },
        {
          function : 'ecb-tag-visit-highlight-tag-header',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Highlights line where `ecb-tag-visit-smart-tag-start" puts point for<br>TAG. Returns current point"',
          prototype : '(defun ecb-tag-visit-highlight-tag-header (tag)',
          parameter : 'tag',
          lispcode : '(defun ecb-tag-visit-highlight-tag-header (tag)<br>  (save-excursion<br>    (ecb-tag-visit-smart-tag-start tag)<br>    (ecb-overlay-move ecb-method-overlay<br>                      (ecb-line-beginning-pos)<br>                      (ecb-line-end-pos)<br>                      (current-buffer)))<br>  (setq ecb-unhighlight-hook-called nil)<br>  (add-hook <tick>pre-command-hook <tick>ecb-unhighlight-tag-header)<br>  (point))<br>'
        },
        {
          function : 'ecb-tag-visit-narrow-tag',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Narrow the source buffer to TAG.<br>If an outside located documentation belongs to TAG and if this documentation<br>is located direct before TAG (e.g. Javadoc in Java) then this documentation<br>is included in the narrow.<br><br>Returns current point."',
          prototype : '(defun ecb-tag-visit-narrow-tag (tag)',
          parameter : 'tag',
          lispcode : '(defun ecb-tag-visit-narrow-tag (tag)<br>  (when (not (ecb-speedbar-sb-tag-p tag))<br>    (narrow-to-region (or (ecb-start-of-tag-doc tag)<br>                          (ecb-semantic-tag-start tag))<br>                      (ecb-semantic-tag-end tag)))<br>  (point))<br>'
        },
        {
          function : 'ecb-tag-visit-recenter',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Recenter the source-buffer, so current line is in the middle of the window.<br>If this function is added to `ecb-tag-visit-post-actions" then it"s<br>recommended to add this function add the end of the action list for "default<br>or a `major-mode" and not to add the function `ecb-tag-visit-recenter-top"<br>too!<br><br>Returns current point."',
          prototype : '(defun ecb-tag-visit-recenter (tag)',
          parameter : 'tag',
          lispcode : '(defun ecb-tag-visit-recenter (tag)<br>  (set-window-start<br>   (selected-window)<br>   (ecb-line-beginning-pos (- (/ (ecb-window-full-height) 2))))<br>  (point))'
        },
        {
          function : 'ecb-tag-visit-recenter-top',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Recenter the source-buffer, so current line is in the middle of the window.<br>If this function is added to `ecb-tag-visit-post-actions" then it"s<br>recommended to add this function add the end of the action list for "default<br>or a `major-mode" and not to add the function `ecb-tag-visit-recenter" too!<br><br>Returns current point."',
          prototype : '(defun ecb-tag-visit-recenter-top (tag)',
          parameter : 'tag',
          lispcode : '(defun ecb-tag-visit-recenter-top (tag)<br>  (set-window-start (selected-window)<br>                    (ecb-line-beginning-pos))<br>  (point))'
        },
        {
          function : 'ecb-tag-visit-smart-tag-start',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Go to the real tag-name of TAG in a somehow smart way.<br>This is especially needed for languages like c++ where a often used style is<br>like:<br>    void<br>    ClassX::methodM(arg1...)<br>    {<br>      ...<br>    }<br>Here we want to jump to the line "ClassX::..." and not to line "void".<br><br>Returns point."',
          prototype : '(defun ecb-tag-visit-smart-tag-start (tag)',
          parameter : 'tag',
          lispcode : '(defun ecb-tag-visit-smart-tag-start (tag)<br>  (goto-char (ecb-semantic-tag-start tag))<br>  (beginning-of-line)<br>  ;; We must bind the search to the max. of either the end-of-line-pos or the<br>  ;; tag-end, because in some languages the tag-name displayed in the<br>  ;; Methods-buffer and returned by the parsing engine can not be found in the<br>  ;; source-buffer. Perl is an example, because here imenu returns tag-names<br>  ;; like <package>::<function> (e.g. bigfloat::norm) but in the source buffer<br>  ;; only <apo>sub <function><apo> (e.g. <apo>sub norm...<apo>) can be found. So to avoid<br>  ;; finding a wrong position in the source-buffer (e.g. if the tag-name'
        },
        {
          function : 'ecb-temp-buffer-show-function',
          filename : 'ecb/ecb-layout.el',
          parameter : 'buf',
          lispcode : '(defun ecb-temp-buffer-show-function (buf)<br>  ;; cause of running the hooks in <backtick>temp-buffer-show-hook<tick> we must use<br>  ;; save-selected-window (s.b.). But maybe <backtick>display-buffer<tick> calls<br>  ;; <backtick>ecb-toggle-compile-window<tick> which completely destroy all windows and<br>  ;; redraw the layout. This conflicts with the save-selected-window.<br>  ;; Therefore we toggle the compile-window before the save-selected-window!<br>  (when (ecb-compilation-buffer-p buf)<br>    (ecb-layout-debug-error <apo>ecb-temp-buffer-show-function: comp-buffer: %s<apo><br>                            buf)<br>    (when (and (equal (selected-frame) ecb-frame)<br>               (equal <tick>hidden (ecb-compile-window-state))<br>               ;; calling this from minibuffer (e.g. completions)<br>               ;; seems to cause problems<br>               (not (equal (minibuffer-window ecb-frame) (selected-window))))<br>      (ecb-layout-debug-error <apo>ecb-temp-buffer-show-function: comp-win will toggled<apo>)<br>      (ecb-toggle-compile-window 1)))<br>  (save-selected-window<br>    (save-excursion<br>      ;; this call to <backtick>display-buffer<tick> runs the adviced version of ECB which<br>      ;; always handles all the compile-window stuff if buf is a<br>      ;; compile-buffer in the sense of <backtick>ecb-compilation-buffer-p<tick>.<br>      (let ((win (display-buffer buf)))<br>        (ecb-layout-debug-error <apo>ecb-temp-buffer-show-function: win: %s, buf: %s,dedi:%s<apo><br>                                win buf (window-dedicated-p win))<br>        (select-window win)'
        },
        {
          function : 'ecb-test-fit-window-to-buffer',
          filename : 'ecb/ecb-util.el',
          parameter : '',
          lispcode : '(defun ecb-test-fit-window-to-buffer ()<br>  (interactive)<br>  (ecb-fit-window-to-buffer<br>   (selected-window)<br>   (if (functionp temp-buffer-max-height)<br>       (funcall temp-buffer-max-height (current-buffer))<br>     temp-buffer-max-height)))'
        },
        {
          function : 'ecb-test-throw-on-input',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Test that throw on input will work."',
          prototype : '(defun ecb-test-throw-on-input ()',
          parameter : '',
          lispcode : '(defun ecb-test-throw-on-input ()<br>  (interactive)<br>  (ecb-throw-on-input <tick>done-die)<br>  (message <apo>Exit Code: %s<apo><br>	   (ecb-exit-on-input <tick>testing<br>	     (let ((inhibit-quit nil)<br>		   (message-log-max nil))<br>	       (while t<br>		 (message <apo>Looping ...<apo>)<br>                 ;; with the following line it isn<tick>t interruptable... so if<br>                 ;; you call a funtion which do not return you never reach the<br>                 ;; throw-part and no interruption takes place (could be if you<br>                 ;; run external processes!)<br>                 ;; So this mechanism is better than nothing but not really'
        },
        {
          function : 'ecb-test-with-original-advice-set',
          filename : 'ecb/ecb-advice-test.el',
          parameter : '',
          lispcode : '(defun ecb-test-with-original-advice-set ()<br>  (interactive)<br>  (let ((ecb-advices-debug-error t))<br>    (unwind-protect<br>        (progn<br>          (message <apo>!!! BEGIN ecb-test-with-original-advice-set !!!!<apo>)<br>          (ecb-enable-advices <tick>ecb-advice-test-set)<br>          (ecb-disable-advices <tick>ecb-always-disabled-advices)<br>          (ecb-advice-test-defun-1)<br>          (ecb-advice-test-defun-2)<br>          (ecb-advice-test-defun-3)<br>          (ecb-advice-test-defun-4)<br>          (ecb-with-original-adviced-function-set <tick>ecb-advice-test-set<br>            (ecb-advice-test-defun-1)<br>            (message <apo>LOC-0.1 ecb-test-with-original-advice-set<apo>)<br>            (ecb-with-ecb-advice <tick>ecb-advice-test-defun-3 <tick>around<br>              (ecb-advice-test-defun-1)<br>              (ecb-advice-test-defun-2)<br>              (ecb-advice-test-defun-3)<br>              (ecb-advice-test-defun-4)<br>              (ecb-with-ecb-advice <tick>ecb-advice-test-defun-3 <tick>around<br>                (ecb-advice-test-defun-3)<br>                (ecb-advice-test-defun-4)<br>                (ecb-with-ecb-advice <tick>ecb-advice-test-defun-3 <tick>after<br>                  (ecb-advice-test-defun-3)<br>                  (ecb-advice-test-defun-4)<br>                  (ecb-with-ecb-advice <tick>ecb-advice-test-defun-4 <tick>around<br>                    (ecb-advice-test-defun-3)<br>                    (ecb-advice-test-defun-4))<br>                  (message <apo>LOC-0.2 ecb-test-with-original-advice-set<apo>)<br>                  (ecb-advice-test-defun-3)<br>                  (ecb-advice-test-defun-4))<br>                (message <apo>LOC-0.3 ecb-test-with-original-advice-set<apo>)<br>                (ecb-advice-test-defun-3)<br>                (ecb-advice-test-defun-4))<br>              (message <apo>LOC-0.4 ecb-test-with-original-advice-set<apo>)<br>              (ecb-advice-test-defun-3)<br>              (ecb-advice-test-defun-4))<br>            (ecb-advice-test-defun-2)<br>            (ecb-advice-test-defun-3)<br>            (ecb-advice-test-defun-4)<br>            (message <apo>LOC-1 ecb-test-with-original-advice-set<apo>)<br>            (ecb-with-original-adviced-function-set <tick>ecb-advice-test-set<br>              (ecb-advice-test-defun-1)<br>              (ecb-advice-test-defun-2))<br>            (message <apo>LOC-2 ecb-test-with-original-advice-set<apo>)<br>            (ecb-advice-test-defun-1)<br>            (ecb-advice-test-defun-2)            <br>            (message <apo>LOC-3 ecb-test-with-original-advice-set<apo>)<br>            (ecb-with-original-adviced-function-set <tick>ecb-advice-test-set<br>              (ecb-advice-test-defun-1)<br>              (ecb-advice-test-defun-2)<br>              (message <apo>LOC-4 ecb-test-with-original-advice-set<apo>)<br>              (ecb-with-original-adviced-function-set <tick>ecb-advice-test-set<br>                (ecb-advice-test-defun-1)<br>                (ecb-advice-test-defun-2)))            <br>            (message <apo>LOC-5 ecb-test-with-original-advice-set<apo>)<br>            )<br>          (ecb-advice-test-defun-1)<br>          (ecb-advice-test-defun-2)<br>          (message <apo>LOC-6 ecb-test-with-original-advice-set<apo>))<br>      (ecb-disable-advices <tick>ecb-advice-test-set)<br>      (ecb-advice-test-defun-1)<br>      (ecb-advice-test-defun-2)<br>      (ecb-advice-test-defun-3)<br>      (ecb-advice-test-defun-4)<br>      (message <apo>!!! END ecb-test-with-original-advice-set !!!!<apo>))))<br><br><br>;; expected output:'
        },
        {
          function : 'ecb-time-diff',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return the difference between time T1 and T2 in seconds (can be a<br>floating-point number). If optional arg ROUNDED is not nil the result is a<br>rounded integer."',
          prototype : '(defun ecb-time-diff (t1 t2 &optional rounded)',
          parameter : 't1 t2 &optional rounded',
          lispcode : '(defun ecb-time-diff (t1 t2 &optional rounded)<br>  (funcall (if rounded <tick>round <tick>identity)<br>           (ecb-time-to-seconds (ecb-subtract-time t1 t2))))<br>'
        },
        {
          function : 'ecb-time-less-p',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Say whether time T1 is less than time T2."',
          prototype : '(defun ecb-time-less-p (t1 t2)',
          parameter : 't1 t2',
          lispcode : '(defun ecb-time-less-p (t1 t2)<br>  (or (< (car t1) (car t2))<br>      (and (= (car t1) (car t2))<br>	   (< (nth 1 t1) (nth 1 t2)))))<br>'
        },
        {
          function : 'ecb-time-to-seconds',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Convert TIME to a floating point number."',
          prototype : '(defun ecb-time-to-seconds (time)',
          parameter : 'time',
          lispcode : '(defun ecb-time-to-seconds (time)<br>  (+ (* (car time) 65536.0)<br>     (cadr time)<br>     (/ (or (nth 2 time) 0) 1000000.0)))'
        },
        {
          function : 'ecb-tod-move-cursor',
          filename : 'ecb/ecb-tod.el',
          parameter : 'cursor',
          lispcode : '(defun ecb-tod-move-cursor (cursor)<br>  (with-temp-file (expand-file-name ecb-tip-of-the-day-file)<br>    (erase-buffer)<br>    (insert (format <apo>(defvar ecb-tod-cursor 0)\n(setq ecb-tod-cursor %d)<apo><br>                    (if (< (1+ cursor) (length ecb-tod-tip-list))<br>                        (1+ cursor)<br>                      0)))))'
        },
        {
          function : 'ecb-toggle-auto-expand-tag-tree',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Toggle auto expanding of the ECB-methods-buffer.<br>With prefix argument ARG, switch on if positive, otherwise switch off. If the<br>effect is that auto-expanding is switched off then the current value of<br>`ecb-auto-expand-tag-tree" is saved so it can be used for the next switch on<br>by this command."',
          prototype : '(defun ecb-toggle-auto-expand-tag-tree (&optional arg)',
          parameter : '&optional arg',
          lispcode : '(defun ecb-toggle-auto-expand-tag-tree (&optional arg)<br>  (interactive <apo>P<apo>)<br>  (let* ((new-value (if (null arg)<br>                        (if ecb-auto-expand-tag-tree<br>                            (progn<br>                              (setq ecb-auto-expand-tag-tree-old<br>                                    ecb-auto-expand-tag-tree)<br>                              nil)<br>                          ecb-auto-expand-tag-tree-old)<br>                      (if (<= (prefix-numeric-value arg) 0)<br>                          (progn<br>                            (if ecb-auto-expand-tag-tree<br>                                (setq ecb-auto-expand-tag-tree-old<br>                                      ecb-auto-expand-tag-tree))<br>                            nil)<br>                        (or ecb-auto-expand-tag-tree<br>                            ecb-auto-expand-tag-tree-old)))))<br>    (setq ecb-auto-expand-tag-tree new-value)<br>    (message <apo>Auto. expanding of the methods-buffer is switched %s \(Value: %s\).<apo><br>             (if new-value <apo>on<apo> <apo>off<apo>)<br>             new-value)))'
        },
        {
          function : 'ecb-toggle-compile-window',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Toggle the visibility of the compile-window of ECB.<br>With prefix argument ARG, make visible if positive, otherwise invisible. The<br>height of the compile-window is always the current value of<br>`ecb-compile-window-height"! If called and `ecb-compile-window-height" is nil<br>then ECB asks for the height of the compile-window, sets this height as new<br>value of `ecb-compile-window-height" and displays the compile-window (so if<br>you have called this command by mistake and you do not want a compile-window<br>you have to quit with `C-g")."',
          prototype : '(defun ecb-toggle-compile-window (&optional arg)',
          parameter : '&optional arg',
          lispcode : '(defun ecb-toggle-compile-window (&optional arg)<br>  (interactive <apo>P<apo>)<br>  (unless (or (not ecb-minor-mode)<br>              (not (equal (selected-frame) ecb-frame)))<br>    (let ((new-state (if (null arg)<br>                         (not (ecb-compile-window-live-p))<br>                       (>= (prefix-numeric-value arg) 0)))<br>          (ecb-buf (if (member (current-buffer)<br>                                (ecb-get-current-visible-ecb-buffers))<br>                       (current-buffer)))<br>          (new-win nil))<br>      (if new-state<br>          (let ((height (or ecb-compile-window-height<br>                            (and (called-interactively-p <tick>interactive)<br>                                 (or (ecb-option-get-value <tick>ecb-compile-window-height<br>                                                           <tick>saved-value)<br>                                     (ecb-read-number <apo>Insert height of the compile-window: <apo> 6))))))<br>            (when height<br>              (customize-set-variable <tick>ecb-compile-window-height height)<br>              ;; ecb-redraw-layout-full only preserves point and selected window<br>              ;; if called from an edit- or compile-window. If called from an<br>              ;; ECB-window we have to restore it here.<br>              (when ecb-buf<br>                (setq new-win (get-buffer-window ecb-buf))<br>                (if (and new-win (window-live-p new-win)<br>                         (equal (window-frame new-win) ecb-frame))<br>                    (select-window new-win)))))<br>        (when (ecb-compile-window-live-p)<br>          (let ((point-location (ecb-where-is-point)))<br>            (ecb-with-original-basic-functions<br>             (ecb-with-original-permanent-layout-functions<br>              (delete-window ecb-compile-window)))<br>            (ecb-restore-window-sizes)'
        },
        {
          function : 'ecb-toggle-compile-window-height',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Toggle whether the `ecb-compile-window" is enlarged or not.<br>If ARG > 0 then shrink or enlarge the the compile-window according to the<br>value of `ecb-enlarged-compilation-window-max-height". But never shrink below<br>the value of `ecb-compile-window-height". If ARG <= 0 then shrink<br>`ecb-compile-window" to `ecb-compile-window-height" and if ARG is nil then<br>toggle the enlarge-state. Returns the new height of the compile-window or nil<br>if no compile-window is visible."',
          prototype : '(defun ecb-toggle-compile-window-height (&optional arg)',
          parameter : '&optional arg',
          lispcode : '(defun ecb-toggle-compile-window-height (&optional arg)<br>  (interactive <apo>P<apo>)<br>  (if (and ecb-minor-mode<br>           (equal (selected-frame) ecb-frame)<br>           (equal <tick>visible (ecb-compile-window-state)))<br>      (let* ((height-before (ecb-window-full-height ecb-compile-window))<br>             (should-shrink (if (null arg)<br>                               (> height-before ecb-compile-window-height-lines)<br>                             (<= (prefix-numeric-value arg) 0)))<br>;;             (compile-window-selected-p (equal (selected-window)<br>;;                                               ecb-compile-window))<br>            (max-height nil)<br>            (number-of-lines nil))<br>        ;; we must use save-excursion because otherwise this command behaves<br>        ;; wrong when called from program within a (save-excursion (set-buffer<br>        ;; ...)) call.<br>        (save-excursion<br>;          (save-selected-window    ; test for warning with with-current-buffer<br>            (select-window ecb-compile-window)<br>            (setq number-of-lines (1+ (count-lines (point-min) (point-max))))<br>            (ecb-layout-debug-error <apo>ecb-toggle-compile-window-height: buffer: %s, lines: %d<apo><br>                                    (current-buffer) number-of-lines)<br>            (if should-shrink<br>                (progn<br>                  (ecb-layout-debug-error <apo>ecb-toggle-compile-window-height: buffer: %s, lines: %d shrink down to compile-window-height<apo><br>                                          (current-buffer) number-of-lines)<br>                  (when (not (ecb-reset-compile-window-specified-height-config))<br>                    (ecb-layout-debug-error <apo>ecb-toggle-compile-window-height: call shrink-window!<apo>)<br>                    (shrink-window (max 0 (- (ecb-window-full-height)<br>                                             ecb-compile-window-height-lines)))<br>                    ;; we restore the window-sizes (either the default or the<br>                    ;; stored sizes. because this function is often called<br>                    ;; during display-buffer (e.g. when completions, help-buffers,<br>                    ;; choosing a completion are performed) and XEmacs often<br>                    ;; destroyes the window-layout (e.g. the topmost<br>                    ;; ecb-window disappears, when doing completion etc..) we<br>                    ;; hav to ignore errors here.... it<tick>s not easy to find out<br>                    ;; what is precisely happening here but with this error<br>                    ;; ignoring all seems to work...<br>                    (ignore-errors (ecb-restore-window-sizes))<br>                    ))<br>'
        },
        {
          function : 'ecb-toggle-do-not-leave-window-after-select',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Toggles if a node-selection in a tree-buffer leaves the tree-window.<br>See also the option `ecb-tree-do-not-leave-window-after-select"."',
          prototype : '(defun ecb-toggle-do-not-leave-window-after-select ()',
          parameter : '',
          lispcode : '(defun ecb-toggle-do-not-leave-window-after-select ()<br>  (interactive)<br>  (let ((tree-buffer (ecb-point-in-ecb-tree-buffer)))<br>    (if tree-buffer<br>        (let ((tree-buf-name (buffer-name tree-buffer)))<br>          (if (ecb-member-of-symbol/value-list<br>               tree-buf-name<br>               ecb-tree-do-not-leave-window-after-select--internal)<br>              (progn<br>                (setq ecb-tree-do-not-leave-window-after-select--internal<br>                      ;; we must try both - the symbol of the tree-buffer-name<br>                      ;; and the tree-buffer-name because we do not know what<br>                      ;; the user has specified in<br>                      ;; <backtick>ecb-tree-do-not-leave-window-after-select<tick>!<br>                      (delete (ecb-ecb-buffer-registry-get-symbol tree-buf-name)<br>                              (delete tree-buf-name<br>                                      ecb-tree-do-not-leave-window-after-select--internal)))<br>                (message <apo>Selections leave the tree-window of %s<apo> tree-buf-name))<br>            (setq ecb-tree-do-not-leave-window-after-select--internal'
        },
        {
          function : 'ecb-toggle-ecb-windows',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Toggle visibility of the ECB-windows.<br>With prefix argument ARG, make visible if positive, otherwise invisible.<br>This has nothing to do with (de)activating ECB but only affects the<br>visibility of the ECB windows. ECB minor mode remains active!"',
          prototype : '(defun ecb-toggle-ecb-windows (&optional arg)',
          parameter : '&optional arg',
          lispcode : '(defun ecb-toggle-ecb-windows (&optional arg)<br>  (interactive <apo>P<apo>)<br>  (unless (or (not ecb-minor-mode)<br>              (not (equal (selected-frame) ecb-frame)))<br>    (let ((new-state (if (null arg)<br>                         (not (ecb-windows-all-hidden))<br>                       (<= (prefix-numeric-value arg) 0))))<br>      (if (not new-state)<br>          (progn<br>            (run-hooks <tick>ecb-show-ecb-windows-before-hook)<br><br>            ;; if <backtick>ecb-buffer-is-maximized-p<tick> is not nil then this means we<br>            ;; should only restore this one maximized buffer!<br>            (let ((compwin-hidden (equal <tick>hidden<br>                                         (ecb-compile-window-state))))<br>              (if (ecb-buffer-is-maximized-p)<br>                   (ecb-maximize-ecb-buffer (ecb-maximized-ecb-buffer-name))<br>                (ecb-redraw-layout-full))<br>              (if compwin-hidden<br>                  (ecb-toggle-compile-window -1)))<br>            (run-hooks <tick>ecb-show-ecb-windows-after-hook)<br>            (message <apo>ECB windows are now visible.<apo>))<br>        (unless (ecb-windows-all-hidden)<br>          (run-hooks <tick>ecb-hide-ecb-windows-before-hook)<br>; leo only used for xemacs : (tree-buffer-deactivate-follow-mouse)<br>          (let ((compwin-hidden (equal <tick>hidden<br>                                       (ecb-compile-window-state))))<br>            (ecb-redraw-layout-full nil nil nil ecb-windows-hidden-all-value)<br>            (if compwin-hidden'
        },
        {
          function : 'ecb-toggle-ecb-windows-new',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Toggle visibility of the ECB-windows.<br>For layout-type left-right the toggle sequence depends on the<br>value of the option `ecb-left-right-layout-hide-sequence". For<br>all other layout types toggling follows the intuitive way. With<br>prefix argument ARG you will be asked which ecb-windows to hide<br>if the current layout is of type left-right.<br><br>This has nothing to do with (de)activating ECB but only affects the<br>visibility of the ECB windows. ECB minor mode remains active!"',
          prototype : '(defun ecb-toggle-ecb-windows-new (&optional arg)',
          parameter : '&optional arg',
          lispcode : '(defun ecb-toggle-ecb-windows-new (&optional arg)<br>  (interactive <apo>P<apo>)<br>  (unless (or (not ecb-minor-mode)<br>              (not (equal (selected-frame) ecb-frame)))<br>    (let ((new-state (if (null arg)<br>                         (ecb-windows-toggled-hidden-state)<br>                       (if (not (equal (ecb-get-layout-type) <tick>left-right))<br>                           (ecb-windows-toggled-hidden-state)<br>                         ;; ask for the new state<br>                         (let ((possible-hide-options<br>                                (mapcar (function (lambda (e)<br>                                                    (symbol-name e)))<br>                                        (ecb-delete-first-occurence-from-list<br>                                         ;; ecb-delete-first-occ... is destructive!<br>                                         (ecb-copy-list <tick>(none all left-side right-side))<br>                                         ecb-windows-hidden-state))))<br>                           (intern (ecb-query-string <apo>ECB-windows to hide:<apo>'
        },
        {
          function : 'ecb-toggle-layout',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Toggles between the layouts defined in `ecb-toggle-layout-sequence".<br>See also option `ecb-show-sources-in-directories-buffer".<br><br>If optional argument LAST-ONE is not nil (e.g. called with a prefix-arg) then<br>always the last selected layout was choosen regardless of the setting in<br>`ecb-toggle-layout-sequence". The last selected layout is always that layout<br>which was current direct before the most recent layout-switch. So now a user<br>can switch to another layout via `ecb-change-layout" and always come back to<br>his previous layout via [C-u] `ecb-toggle-layout"."',
          prototype : '(defun ecb-toggle-layout (&optional last-one)',
          parameter : '&optional last-one',
          lispcode : '(defun ecb-toggle-layout (&optional last-one)<br>  (interactive <apo>P<apo>)<br>  (if (and last-one<br>           (stringp ecb-last-selected-layout))<br>      (ecb-layout-switch ecb-last-selected-layout)<br>    (let ((layout-name (nth ecb-toggle-layout-state ecb-toggle-layout-sequence))<br>          (next-index (if (< (1+ ecb-toggle-layout-state)<br>                             (length ecb-toggle-layout-sequence))<br>                          (1+ ecb-toggle-layout-state)<br>                        0)))<br>      (when (and layout-name (not (= ecb-toggle-layout-state next-index)))<br>        (setq ecb-toggle-layout-state next-index)<br>        (ecb-layout-switch layout-name)))))'
        },
        {
          function : 'ecb-toggle-maximize-ecb-window',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Toggle maximizing the special ecb-window of ECB-BUFFER-NAME.<br>If there is a maximizied ecb-window then it will be "minimized", i.e. all<br>ecb-windows of current layout will be displayed. If there is no ecb-window<br>maximized then that of ECB-BUFFER-NAME will be maximized. If ECB-BUFFER-NAME<br>is nil then the current buffer-name is used. Nothing will be done if the<br>caller tries to maximize a non-ecb-window."',
          prototype : '(defun ecb-toggle-maximize-ecb-window (&optional ecb-buffer-name)',
          parameter : '&optional ecb-buffer-name',
          lispcode : '(defun ecb-toggle-maximize-ecb-window (&optional ecb-buffer-name)<br>  (if (ecb-buffer-is-maximized-p)<br>      (ecb-undo-maximize-ecb-buffer)<br>    (let ((buf-name (or ecb-buffer-name (buffer-name))))<br>      (when (ecb-buffer-is-ecb-buffer-of-current-layout-p buf-name)<br>        (ecb-maximize-ecb-buffer buf-name t)))))'
        },
        {
          function : 'ecb-toggle-maximize-ecb-window-with-mouse',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Mouse-wrapper for `ecb-toggle-maximize-ecb-window"."',
          prototype : '(defun ecb-toggle-maximize-ecb-window-with-mouse ()',
          parameter : '',
          lispcode : '(defun ecb-toggle-maximize-ecb-window-with-mouse ()<br>  (interactive <apo>@<apo>)<br>  (ecb-toggle-maximize-ecb-window))'
        },
        {
          function : 'ecb-toggle-scroll-other-window-scrolls-compile',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Toggle the state of `ecb-scroll-other-window-scrolls-compile-window".<br>With prefix argument ARG, set it to t, otherwise to nil. For all details about<br>the scroll-behavior of `scroll-other-window" see the advice documentation of<br>`other-window-for-scrolling"."',
          prototype : '(defun ecb-toggle-scroll-other-window-scrolls-compile (&optional arg)',
          parameter : '&optional arg',
          lispcode : '(defun ecb-toggle-scroll-other-window-scrolls-compile (&optional arg)<br>  (interactive <apo>P<apo>)<br>  (unless (or (not ecb-minor-mode)<br>              (not (equal (selected-frame) ecb-frame)))<br>    (setq ecb-scroll-other-window-scrolls-compile-window<br>          (if (null arg)<br>              (not ecb-scroll-other-window-scrolls-compile-window)<br>            (>= (prefix-numeric-value arg) 0)))<br>    (message <apo>Scrolling the other-window scrolls compile-window is now %s.<apo><br>             (if ecb-scroll-other-window-scrolls-compile-window <apo>ON<apo> <apo>OFF<apo>))))'
        },
        {
          function : 'ecb-tree-buffer-callbacks-add',
          filename : 'ecb/ecb-common-browser.el',
          parameter : 'type buffer-name-symbol callback',
          lispcode : '(defun ecb-tree-buffer-callbacks-add (type buffer-name-symbol callback)<br>  (unless (member type <tick>(select expand))<br>    (error <apo>ECB %s tries to add tree-buffer-callback of unknown type %s<apo><br>           ecb-version type))<br>  ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: maybe we should add a check if<br>  ;; the buffer-name-symbol is already registered with defecb-tree-buffer-creator<br>  (let ((type-elem (ecb-find-assoc type ecb-tree-buffer-callbacks)))<br>    (unless (ecb-find-assoc buffer-name-symbol type-elem)<br>      (setcdr type-elem (cons (cons buffer-name-symbol callback)'
        },
        {
          function : 'ecb-tree-buffer-callbacks-alist-of-type',
          filename : 'ecb/ecb-common-browser.el',
          parameter : 'type',
          lispcode : '(defun ecb-tree-buffer-callbacks-alist-of-type (type)<br>  (unless (member type <tick>(select expand))<br>    (error <apo>ECB %s tries to get tree-buffer-callback of unknown type %s<apo><br>           ecb-version type))<br>  (cdr (assoc type ecb-tree-buffer-callbacks)))<br>'
        },
        {
          function : 'ecb-tree-buffer-creators-init',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Initialize `ecb-tree-buffer-creators".<br>Removes all creators and set it to nil."',
          prototype : '(defun ecb-tree-buffer-creators-init ()',
          parameter : '',
          lispcode : '(defun ecb-tree-buffer-creators-init ()<br>  (setq ecb-tree-buffer-creators nil))'
        },
        {
          function : 'ecb-tree-buffer-creators-register',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Register the creator-function FN for the tree-buffer NAME-SYMBOL."',
          prototype : '(defun ecb-tree-buffer-creators-register (name-symbol fn)',
          parameter : 'name-symbol fn',
          lispcode : '(defun ecb-tree-buffer-creators-register (name-symbol fn)<br>  (add-to-list <tick>ecb-tree-buffer-creators (cons name-symbol fn)))'
        },
        {
          function : 'ecb-tree-buffer-creators-run',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Run all currently registered creator-functions."',
          prototype : '(defun ecb-tree-buffer-creators-run ()',
          parameter : '',
          lispcode : '(defun ecb-tree-buffer-creators-run ()<br>  (dolist (creator-elem ecb-tree-buffer-creators)<br>    ;; create all the tree-buffers if they don<tick>t already exist<br>    (funcall (cdr creator-elem))))'
        },
        {
          function : 'ecb-tree-buffer-node-collapsed-callback',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "This is the callback-function ecb.el gives to every tree-buffer to call<br>when a node has been collapsed."',
          prototype : '(defun ecb-tree-buffer-node-collapsed-callback (node                                                mouse-button                                                shift-pressed                                                control-pressed                                                meta-pressed                                                tree-buffer-name)',
          parameter : 'node mouse-button shift-pressed control-pressed meta-pressed tree-buffer-name',
          lispcode : '(defun ecb-tree-buffer-node-collapsed-callback (node<br>                                                mouse-button<br>                                                shift-pressed<br>                                                control-pressed<br>                                                meta-pressed<br>                                                tree-buffer-name)<br>  (let* ((ecb-button-list (ecb-interpret-mouse-click mouse-button<br>						     shift-pressed<br>						     control-pressed<br>                                                     meta-pressed<br>						     tree-buffer-name))<br>         (keyboard-p (equal (nth 3 ecb-button-list) <tick>keyboard)))<br>    (if (not keyboard-p)<br>        (setq ecb-layout-prevent-handle-ecb-window-selection t))))'
        },
        {
          function : 'ecb-tree-buffer-node-expand-callback',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "This is the callback-function ecb.el gives to every tree-buffer to call<br>when a node should be expanded. This function does nothing if the click<br>combination is invalid (see `ecb-interpret-mouse-click")."',
          prototype : '(defun ecb-tree-buffer-node-expand-callback (node					     mouse-button					     shift-pressed					     control-pressed                                             meta-pressed					     tree-buffer-name)',
          parameter : 'node mouse-button shift-pressed control-pressed meta-pressed tree-buffer-name',
          lispcode : '(defun ecb-tree-buffer-node-expand-callback (node<br>					     mouse-button<br>					     shift-pressed<br>					     control-pressed<br>                                             meta-pressed<br>					     tree-buffer-name)<br>  (let* ((ecb-button-list (ecb-interpret-mouse-click mouse-button<br>						     shift-pressed<br>						     control-pressed<br>                                                     meta-pressed<br>						     tree-buffer-name))<br>	 (ecb-button (nth 0 ecb-button-list))<br>	 (shift-mode (nth 1 ecb-button-list))<br>         (meta-mode (nth 2 ecb-button-list))<br>         (keyboard-p (equal (nth 3 ecb-button-list) <tick>keyboard))<br>         (expand-callbacks (ecb-tree-buffer-callbacks-alist-of-type <tick>expand))<br>         (callback-fcn nil))<br>    (if (not keyboard-p)<br>        (setq ecb-layout-prevent-handle-ecb-window-selection t))<br>    ;; we just dispatch to the right action<br>    (when ecb-button-list<br>      (setq callback-fcn<br>            (ecb-member-of-symbol/value-list tree-buffer-name<br>                                             expand-callbacks<br>                                             <tick>car<br>                                             <tick>cdr))<br>      (when (functionp callback-fcn)'
        },
        {
          function : 'ecb-tree-buffer-node-select-callback',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "This is the callback-function ecb.el gives to every tree-buffer to call<br>when a node has been selected. This function does nothing if the click<br>combination is invalid (see `ecb-interpret-mouse-click"."',
          prototype : '(defun ecb-tree-buffer-node-select-callback (node					     mouse-button					     shift-pressed					     control-pressed                                             meta-pressed					     tree-buffer-name)',
          parameter : 'node mouse-button shift-pressed control-pressed meta-pressed tree-buffer-name',
          lispcode : '(defun ecb-tree-buffer-node-select-callback (node<br>					     mouse-button<br>					     shift-pressed<br>					     control-pressed<br>                                             meta-pressed<br>					     tree-buffer-name)<br>  (let* ((ecb-button-list (ecb-interpret-mouse-click mouse-button<br>						     shift-pressed<br>						     control-pressed<br>                                                     meta-pressed<br>						     tree-buffer-name))<br>	 (ecb-button (nth 0 ecb-button-list))<br>	 (shift-mode (nth 1 ecb-button-list))<br>         (meta-mode (nth 2 ecb-button-list))<br>         (keyboard-p (equal (nth 3 ecb-button-list) <tick>keyboard))<br>         (maximized-p (ecb-buffer-is-maximized-p tree-buffer-name))<br>         (select-callbacks (ecb-tree-buffer-callbacks-alist-of-type <tick>select))<br>         (callback-fcn nil))<br>    ;; we need maybe later that something has clicked in a tree-buffer, e.g.<br>    ;; in <backtick>ecb-handle-major-mode-visibilty<tick>.<br>    (setq ecb-item-in-tree-buffer-selected t)<br>    (if (not keyboard-p)<br>        (setq ecb-layout-prevent-handle-ecb-window-selection t))<br><br>    ;; first we dispatch to the right action<br>    (when ecb-button-list<br>      (setq callback-fcn<br>            (ecb-member-of-symbol/value-list tree-buffer-name<br>                                             select-callbacks<br>                                             <tick>car<br>                                             <tick>cdr))<br>      (when (functionp callback-fcn)<br>        (funcall callback-fcn node ecb-button nil shift-mode meta-mode)))<br><br>    ;; now we go back to the tree-buffer but only if all of the following<br>    ;; conditions are true:<br>    ;; 1. The ecb-windows are now not hidden<br>    ;; 2. The tree-buffer-name is contained in<br>    ;;    ecb-tree-do-not-leave-window-after-select--internal<br>    ;; 3. Either it is not the ecb-directories-buffer-name or<br>    ;;    at least <backtick>ecb-show-sources-in-directories-buffer-p<tick> is true and the<br>    ;;    hitted node is a sourcefile<br>    (when (and (not (ecb-windows-all-hidden))<br>               (ecb-member-of-symbol/value-list'
        },
        {
          function : 'ecb-tree-node-add-files',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "For every file in FILES add a child-node to NODE."',
          prototype : '(defun ecb-tree-node-add-files  (node path files type include-extension old-children &optional not-expandable)',
          parameter : 'node path files type include-extension old-children &optional not-expandable',
          lispcode : '(defun ecb-tree-node-add-files<br>  (node path files type include-extension old-children &optional not-expandable)<br>  (let* ((no-vc-state-display<br>          ;; no vc-state-display when the type of FILES means subdirs in<br>          ;; the directories-buffer<br>          (and (equal (buffer-name) ecb-directories-buffer-name)<br>               (= type ecb-directories-nodetype-directory)))<br>         (dir-managed-by-vc (if (or no-vc-state-display<br>                                    (not (ecb-vc-directory-should-be-checked-p path)))<br>                                nil<br>                              (ecb-vc-managed-dir-p path))))<br>    (dolist (file files)<br>      (let* ((filename (ecb-fix-filename path file))<br>             (file-1 (if include-extension<br>                         file<br>                       (ecb-file-name-sans-extension file))))<br>        (tree-node-add-children<br>         node<br>         (ecb-new-child<br>          old-children<br>          (if no-vc-state-display<br>              file-1<br>            (if dir-managed-by-vc<br>                (ecb-vc-generate-node-name file-1<br>                                           (nth 0 (ecb-vc-cache-get filename)))<br>              (ecb-generate-node-name file-1 -1 <apo>leaf<apo><br>                                      ecb-sources-buffer-name)))<br>          type filename<br>          (or not-expandable<br>              (= type ecb-directories-nodetype-sourcefile)<br>              ;; The empty-dir-check is performed stealthy'
        },
        {
          function : 'ecb-trim',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Applies `ecb-right-trim" and `ecb-left-trim" to STR."',
          prototype : '(defun ecb-trim (str)',
          parameter : 'str',
          lispcode : '(defun ecb-trim (str)<br>  (ecb-left-trim (ecb-right-trim str)))'
        },
        {
          function : 'ecb-try-highlight-tag',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "First we try to expand only the absolute needed parts of the tree-buffer to<br>highlight the tag HIGHLIGHT-TAG - this means we recursively go upstairs the<br>ladder of types the current tag belongs to. If this has still no success then<br>we return nil otherwise true (the HIGHLIGHT-TAG is highlighted).<br><br>If called from program: HIGHLIGHT-TAG is the tag to highlight, CURR-TAG has to<br>be equal to HIGHLIGHT-TAG and TABLE must be the current tag-table of the<br>current buffer."',
          prototype : '(defun ecb-try-highlight-tag (highlight-tag curr-tag table)',
          parameter : 'highlight-tag curr-tag table',
          lispcode : '(defun ecb-try-highlight-tag (highlight-tag curr-tag table)<br>  (let* ((type-tag (and curr-tag<br>                        (ecb-get-type-tag-of-tag curr-tag table t)))<br>         (bucket-data<br>          (and (not type-tag)<br>               (list <tick>ecb-bucket-node<br>                     (cdr (assoc (or (and (ecb--semantic-tag-prototype-p highlight-tag)<br>                                          <tick>prototype)<br>                                     (ecb--semantic-tag-class highlight-tag))<br>                                 (ecb-methods-get-data-store<br>                                  <tick>semantic-symbol->name-assoc-list)))<br>                     (ecb--semantic-tag-class highlight-tag))))<br>         (type-node nil))<br>    (or (and curr-tag<br>             ;; this is save because ecb-try-highlight-tag runs only within<br>             ;; ecb-tag-sync which is defined to do nothing if<br>             ;; ecb-methods-buffer-name is not visible in the current layout<br>             ;; ==> the return value <tick>window-not-visible is not possible here!<br>             (ecb-exec-in-window ecb-methods-buffer-name<br>               (or (tree-buffer-highlight-node-by-data/name<br>                    highlight-tag nil nil<br>                    (equal ecb-highlight-tag-with-point <tick>highlight))<br>                   ;; If the tag could not be highlighted and if there is no<br>                   ;; containing type for this tag then this tag is probably<br>                   ;; contained in a toplevel bucket. Then we search the<br>                   ;; bucket-node for the tag if this tag-class is specified<br>                   ;; as expanded or collapsed (ie not flattened or hidden<br>                   ;; because in these cases no bucket would exist). If we<br>                   ;; find the bucket-node then we expand only this<br>                   ;; bucket-node and try highlighting again.<br>                   (when (and highlight-tag<br>                              bucket-data ;; tag has no containing type<br>                              ;;(member (car (cdr (assoc (ecb--semantic-tag-class highlight-tag)<br>                              ;;                         (ecb-get-show-tags-list))))<br>                              ;;        <tick>(expanded collapsed))<br>                              (or (equal ecb-auto-expand-tag-tree <tick>all)<br>                                  (member (ecb--semantic-tag-class highlight-tag)<br>                                          (ecb-normalize-expand-spec<br>                                           ecb-methods-nodes-expand-spec))))<br>                     (let ((bucket-node<br>                            (tree-buffer-search-displayed-node-list<br>                             (function (lambda (node)<br>                                         (if (and (tree-buffer-node-data-equal-p<br>                                                   (tree-node->data node)<br>                                                   bucket-data)<br>                                                  (eq (tree-buffer-get-root)<br>                                                      (tree-node->parent node)))<br>                                             node))))))<br>                       (when bucket-node<br>                         (ecb-expand-methods-node-internal<br>                          bucket-node<br>                          100<br>                          (equal ecb-auto-expand-tag-tree <tick>all)<br>                          nil t)<br>                         (tree-buffer-highlight-node-by-data/name<br>                          highlight-tag nil nil<br>                          (equal ecb-highlight-tag-with-point <tick>highlight)))))<br>                   ;; The node representing HIGHLIGHT-TAG could not be<br>                   ;; highlighted by <backtick>tree-buffer-highlight-node-by-data/name<tick> -<br>                   ;; probably it is invisible. Let<tick>s try to make expand its<br>                   ;; containing type (if there is any) and then highlighting'
        },
        {
          function : 'ecb-type-tag-expansion',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Return the default expansion-state of TYPE-SPECIFIER for current major-mode<br>as specified in `ecb-type-tag-expansion""',
          prototype : '(defun ecb-type-tag-expansion (type-specifier)',
          parameter : 'type-specifier',
          lispcode : '(defun ecb-type-tag-expansion (type-specifier)<br>  (let ((mode-expansion (cdr (assoc major-mode ecb-type-tag-expansion)))<br>        (default-expansion (cdr (assoc <tick>default ecb-type-tag-expansion))))<br>    (or (equal mode-expansion <tick>all-specifiers)<br>        (member type-specifier mode-expansion)<br>        (and (null mode-expansion)<br>             (or (equal default-expansion <tick>all-specifiers)<br>                 (member type-specifier default-expansion))))))'
        },
        {
          function : 'ecb-undo-maximize-ecb-buffer',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Undo the maximizing of an ecb-buffer.<br>If optional arg PRESERVE-SELECTED-WINDOW is not nil then the currently<br>selected window does not change. Otherwise after displaying all ecb-windows the<br>current edit-window is selected."',
          prototype : '(defun ecb-undo-maximize-ecb-buffer (&optional preserve-selected-window)',
          parameter : '&optional preserve-selected-window',
          lispcode : '(defun ecb-undo-maximize-ecb-buffer (&optional preserve-selected-window)<br>  (when (equal (selected-frame) ecb-frame)<br>    (let ((curr-loc (ecb-where-is-point))<br>          (prev-buffer-name (buffer-name)))<br>      (ecb-redraw-layout-preserving-compwin-state)<br>      ;; point is now in the edit-buffer so maybe we have to move point to the<br>      ;; buffer where it was before.<br>      (when preserve-selected-window<br>        (cl-case (car curr-loc)<br>          (ecb<br>           (ecb-window-select prev-buffer-name))<br>          (compile'
        },
        {
          function : 'ecb-unhighlight-tag-header',
          filename : 'ecb/ecb-method-browser.el',
          parameter : '',
          lispcode : '(defun ecb-unhighlight-tag-header ()<br>  (let ((key (ecb-event-to-key last-input-event)))<br>    (when (not (or (and (equal key <tick>mouse-release)<br>                        (not ecb-unhighlight-hook-called))<br>                   (equal key <tick>mouse-movement)))<br>      (ecb-overlay-delete ecb-method-overlay)<br>      (remove-hook <tick>pre-command-hook <tick>ecb-unhighlight-tag-header)))<br>  (setq ecb-unhighlight-hook-called t))<br>'
        },
        {
          function : 'ecb-update-after-partial-reparse',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Updates the method buffer and all internal ECB-caches after a partial<br>semantic-reparse. This function is added to the hook<br>`semantic-after-partial-cache-change-hook".<br><br>If `ecb-partial-reparse-always-full-fetch" is not nil then always a full fetch<br>for tags is performed; this is just a fallback if there are problems with the<br>partial reparse and update-mechanism."',
          prototype : '(defun ecb-update-after-partial-reparse (updated-tags)',
          parameter : 'updated-tags',
          lispcode : '(defun ecb-update-after-partial-reparse (updated-tags)<br>  (if (or ecb-partial-reparse-always-full-fetch<br>          ;; if at least one of the updated-tags is a tag without an overlay<br>          ;; we should do a full fetch (example: semantic calls the partial<br>          ;; hook when deleting a complete function and then calling<br>          ;; semantic-fetch-tags - the supplied updated-tag will be a tag<br>          ;; without an overlay but instead a beg/end-array where beg and end<br>          ;; are the same buffer location = empty tag)<br>          (catch <tick>tag-without-overlay<br>            (dolist (tag updated-tags)<br>              (when (not (ecb-overlay-p (ecb--semantic-tag-overlay tag)))<br>                (ecb-partial-reparse-debug <apo>Called for a tag without overlay:%s - full-fetch needed<apo> tag)<br>                (throw <tick>tag-without-overlay t)))<br>            nil))<br>      ;; perform a full fetch<br>      (ecb-rebuild-methods-buffer-with-tagcache (ecb-fetch-semantic-tags))<br><br>    ;; now our partial reparse/update mechanism begins<br>    (ecb-partial-reparse-debug <apo>Partial reparse starts for the tags:<apo>)<br>    (dolist (tag updated-tags)<br>      (ecb-partial-reparse-debug <apo>- Tag-name:%s,tag-class:%s,full-tag:%s<apo><br>                                 (ecb--semantic-tag-name tag)<br>                                 (ecb--semantic-tag-class tag)<br>                                 tag))<br>    (when (and ecb-minor-mode ;; ECB must be active - just for saveness<br>               ;; ECB-frame must be active<br>               (equal (selected-frame) ecb-frame)<br>               ;; if there is a methods-buffer in current layout<br>               ;; I think there is no need that the methods buffer is visible<br>               ;; because we should also update if currently hidden<br>               (ecb-buffer-is-ecb-buffer-of-current-layout-p ecb-methods-buffer-name)<br>               ;; current buffer must have a filename.<br>               (ecb-buffer-file-name (current-buffer))<br>               ;; the parsed buffer must be displayed in a window within the<br>               ;; ECB-frame: This prevents the methods-buffer being confused by<br>               ;; the background-parsing of other files by semantic-idle-timer<br>               (or ecb-method-buffer-rebuild-allowed-for-invisible-buffers<br>                   (get-buffer-window (current-buffer) ecb-frame)))<br>      (let ((full-fetch-needed nil)<br>            (taglist updated-tags)<br>            (tag nil)<br>            (at-least-one-node-updated nil)<br>            (post-processed-list nil)<br>            (fcn-list (cdr (assoc major-mode ecb-post-process-semantic-taglist))))<br>        (while (and (not full-fetch-needed) taglist)<br>          (setq tag (car taglist))<br>          (ecb-partial-reparse-debug <apo>Processing tag: %s<apo> (ecb--semantic-tag-name tag))<br>          (setq taglist (cdr taglist))<br>          ;; for each tag in the updated tags we do<br>          ;; 1. run the post-processing function of current major-mode<br>          ;; 2. apply the tag-table filters<br>          ;; 3. apply the tag filters<br>          (let* ((one-tag-list (list tag))<br>                 (tag-for-update nil)<br>                 (tag-ident-name (ecb--semantic-tag-name tag))<br>                 (tag-ident-class (ecb--semantic-tag-class tag))<br>                 (tag-ident-parent (ecb--semantic-tag-named-parent tag))<br>                 (tag-ident-parent-name (if (ecb--semantic-tag-p tag-ident-parent)<br>                                            (ecb--semantic-tag-name tag-ident-parent)<br>                                          tag-ident-parent)))<br>            (ecb-partial-reparse-debug <apo>tag-ident-name:%s,tag-ident-class:%s,tag-ident-parent:%s<apo><br>                                       tag-ident-name<br>                                       tag-ident-class<br>                                       tag-ident-parent-name)<br>            ;; first we run the post-process functions and build up<br>            ;; post-processed-list which contains one element for each tag of<br>            ;; the updated tags. But be aware that the orginal tag is maybe not<br>            ;; contained in the list because a post-process function as somehow<br>            ;; modified it or added as member to a new container tag, e.g.<br>            ;; semantic-adopt-external-members which creates maybe new faux tags<br>            ;; for methods which are defined in another file as the class itself<br>            ;; (e.g. with c++)!<br>            (dolist (fcn fcn-list)<br>              (if (fboundp fcn)<br>                  (setq one-tag-list (funcall fcn one-tag-list))))<br>            (ecb-partial-reparse-debug <apo>one-tag-list after post-processing: %s<apo><br>                                       one-tag-list)<br>            ;; now we apply that tag-filters which must operate onto the whole<br>            ;; tag-table - but here we use each tag as a separate tag-table<br>            (setq one-tag-list (ecb-apply-tag-table-filters one-tag-list))<br>            (ecb-partial-reparse-debug <apo>one-tag-list after tag-table filtering %s<apo><br>                                       one-tag-list)<br>            ;; now we must see how get from the one-tag-list our orginal tag so<br>            ;; we can apply the tag-filters:<br>            (if (null one-tag-list)<br>                (ecb-partial-reparse-debug <apo>tag has been filtered out by tag-table filters<apo>)<br>              (if (and (equal (ecb--semantic-tag-name (car one-tag-list))<br>                              tag-ident-name)<br>                       (equal (ecb--semantic-tag-class (car one-tag-list))<br>                              tag-ident-class))<br>                  (setq tag-for-update (car one-tag-list))<br>                ;; if the first tag in the one-tag-list is not our original tag<br>                ;; then we check if the first component of the first tag of<br>                ;; one-tag-list is our original tag (e.g. when<br>                ;; semantic-adopt-external-members has been run then this is the<br>                ;; case)<br>                (let ((try (car (ecb--semantic-tag-components-with-overlays<br>                                 (car one-tag-list)))))<br>                  (ecb-partial-reparse-debug <apo>We try the first member - it is: %s<apo> try)<br>                  (when (ecb--semantic-tag-p try)<br>                    (if (and (equal (ecb--semantic-tag-name try)<br>                                    tag-ident-name)<br>                             (equal (ecb--semantic-tag-class try)<br>                                    tag-ident-class))<br>                        (setq tag-for-update try)))))<br>              (if (null tag-for-update)<br>                  ;; if we failed in getting our original tag we indicate a<br>                  ;; full-fetch - should not happen but how knows...<br>                  (progn<br>                    (ecb-partial-reparse-debug <apo>full-fetch-needed because we didn<tick>t found our tag<apo>)<br>                    (setq taglist nil) ;; it makes no sense to process further tags<br>                    (setq full-fetch-needed t)<br>                    )<br>                ;; now we apply the tag-related filters to see if the updated tag<br>                ;; is filtered out - in this case we would do nothing<br>                (ecb-partial-reparse-debug <apo>tag-for-update before tag-filters: %s<apo> tag-for-update)<br>                (ecb-apply-user-filter-to-tags (list tag-for-update))<br>                (ecb-partial-reparse-debug <apo>tag-for-update after tag-filters: %s<apo> tag-for-update)<br>                (if (ecb-tag-forbidden-display-p tag-for-update)<br>                    ;; we can re-allow because now we process only tags which are<br>                    ;; not forbidden (ie. filtered out), so for next run we can<br>                    ;; filter again - see the other location in code where this<br>                    ;; function is used for explanation.<br>                    ;; if the tag is filtered out we simply do nothing for this tag<br>                    (progn<br>                      (ecb-partial-reparse-debug <apo>tag-for-update is filtered out by tag-filters<apo>)<br>                      (ecb-allow-tag-display tag-for-update)'
        },
        {
          function : 'ecb-update-autoloads',
          filename : 'ecb/ecb-autogen.el',
          docstring : '  "Update ecb autoloads from sources.<br>Autoloads file name is defined in variable `ecb-autogen-file"."',
          prototype : '(defun ecb-update-autoloads ()',
          parameter : '',
          lispcode : '(defun ecb-update-autoloads ()<br>  (interactive)<br><br>  (if (file-exists-p (expand-file-name ecb-autogen-file))<br>      (delete-file (expand-file-name ecb-autogen-file)))<br><br>  (with-temp-file (expand-file-name ecb-autogen-file)<br>    (insert <apo><apo>))<br><br>  (let* ((default-directory (file-name-directory (locate-library <apo>ecb<apo>)))<br>         (generated-autoload-file (expand-file-name ecb-autogen-file))<br>         ;; needed for XEmacs to ensure that always a feature <tick>ecb-autoloads<br>         ;; is provided and not a feature like <tick>ecb-1.91.2-autoloads (XEmacs<br>         ;; uses the installation-directory of ECB as feature prefix if<br>         ;; autoload-package-name is not provided.<br>         (autoload-package-name <apo>ecb<apo>)<br>         (subdirs (mapcar <tick>expand-file-name ecb-autogen-subdirs))<br>         (command-line-args-left (cons default-directory subdirs))<br>         )<br>    (ecb-batch-update-autoloads))<br><br>  ;; for GNU Emacs we must do this:<br>  (with-current-buffer (find-file-noselect (expand-file-name ecb-autogen-file))<br>    (goto-char (point-min))<br>    (when (not (re-search-forward (format <apo>^(provide <tick>%s)<apo>'
        },
        {
          function : 'ecb-update-directories-buffer',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Updates the ECB directories buffer."',
          prototype : '(defun ecb-update-directories-buffer ()',
          parameter : '',
          lispcode : '(defun ecb-update-directories-buffer ()<br>  (interactive)<br>  (unless (or (not ecb-minor-mode)<br>              (not (equal (selected-frame) ecb-frame)))<br>    (ecb-exec-in-window ecb-directories-buffer-name<br>      (let* ((node (tree-buffer-get-root))<br>             (old-children (tree-node->children node))<br>             (normed-paths (ecb-normed-source-paths)))<br>        (setf (tree-node->children node) nil)<br>        (dolist (path normed-paths)<br>          (let* ((dir (car path))<br>                 (name (cdr path))<br>                 (remote-dir (ecb-remote-path dir))<br>                 (not-accessible nil))<br>            (if (or (not remote-dir)<br>                    (ecb-host-accessible-p (nth 1 remote-dir)))<br>                (if (ecb-file-accessible-directory-p dir)<br>                    (tree-node-add-children<br>                     node<br>                     (ecb-new-child old-children name<br>                                    ecb-directories-nodetype-sourcepath<br>                                    dir<br>                                    nil<br>                                    (if ecb-truncate-long-names<br>                                        <tick>beginning)))<br>                  (setq not-accessible t))<br>              (setq not-accessible t))<br>            (when not-accessible<br>              (ecb-warning <apo>Source-path element %s is not accessible - ignored!<apo> path))))<br>        (tree-buffer-update)))<br>    ))<br>'
        },
        {
          function : 'ecb-update-directory-node',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Updates the directory node NODE and add all subnodes if any."',
          prototype : '(defun ecb-update-directory-node (node)',
          parameter : 'node',
          lispcode : '(defun ecb-update-directory-node (node)<br>  (let ((old-children (tree-node->children node))<br>        (path (tree-node->data node)))<br>    (setf (tree-node->children node) nil)<br>    (if (ecb-file-accessible-directory-p path)<br>        (let ((files-and-dirs (ecb-get-files-and-subdirs path)))<br>          (ecb-tree-node-add-files node path (cdr files-and-dirs)<br>                                   ecb-directories-nodetype-directory<br>                                   t old-children)<br>          (if (ecb-show-sources-in-directories-buffer-p)<br>              (ecb-tree-node-add-files node path (car files-and-dirs)<br>                                       ecb-directories-nodetype-sourcefile<br>                                       ecb-show-source-file-extension<br>                                       old-children t))<br>          (setf (tree-node->expandable node)<br>                (or (tree-node->children node)))<br>          ;; if node is not expandable we set its expanded state to nil<br>          (setf (tree-node->expanded node)<br>                (if (not (tree-node->expandable node))<br>                    nil'
        },
        {
          function : 'ecb-update-methods-after-saving',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Updates the methods-buffer after saving if this option is turned on and if<br>current-buffer is saved."',
          prototype : '(defun ecb-update-methods-after-saving ()',
          parameter : '',
          lispcode : '(defun ecb-update-methods-after-saving ()<br>  (when (and (equal (selected-frame) ecb-frame)<br>             ecb-auto-update-methods-after-save<br>             ecb-last-edit-window-with-point<br>             ;; this prevents updating the method buffer after saving a not<br>             ;; current buffer (e.g. with <backtick>save-some-buffers<tick>), because this<br>             ;; would result in displaying a method-buffer not belonging to the<br>             ;; current source-buffer.<br>             (equal (current-buffer)<br>                    (window-buffer ecb-last-edit-window-with-point)))'
        },
        {
          function : 'ecb-update-methods-buffer--internal',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Updates the methods buffer with the current buffer. The only thing what<br>must be done is to start the toplevel parsing of semantic, because the rest is<br>done by `ecb-rebuild-methods-buffer-with-tagcache" because this function is in<br>the `semantic-after-toplevel-cache-change-hook".<br>If optional argument SCROLL-TO-TOP is non nil then the method-buffer is<br>displayed with window-start and point at beginning of buffer.<br><br>If second optional argument REBUILD-NON-SEMANTIC is not nil then non-semantic<br>sources are forced to be rescanned and reparsed by<br>`ecb-rebuild-methods-buffer-with-tagcache". The function<br>`ecb-rebuild-methods-buffer-for-non-semantic" is the only one settings this<br>argument to not nil!<br><br>If third optional arg FULL-SEMANTIC is not nil then for semantic-sources an<br>immediate parse-run is triggered - not an idle one! Has no effect for<br>non-semantic-sources.<br><br>If fourth optional argument INVISIBLE-SOURCEBUFFER-ALLOWED is not NIL then we<br>drive `ecb-rebuild-methods-buffer-with-tagcache" so it does not prevent<br>rebuilding a not visible source-buffer."',
          prototype : '(defun ecb-update-methods-buffer--internal (&optional scroll-to-top                                                      rebuild-non-semantic                                                      full-semantic                                                      invisible-sourcebuffer-allowed)',
          parameter : '&optional scroll-to-top rebuild-non-semantic full-semantic invisible-sourcebuffer-allowed',
          lispcode : '(defun ecb-update-methods-buffer--internal (&optional scroll-to-top<br>                                                      rebuild-non-semantic<br>                                                      full-semantic<br>                                                      invisible-sourcebuffer-allowed)<br>  (when (and (equal (selected-frame) ecb-frame)<br>             (get-buffer-window ecb-methods-buffer-name))<br>    ;; Set here <backtick>ecb-method-buffer-needs-rebuild<tick> to t so we can see below if<br>    ;; <backtick>ecb-rebuild-methods-buffer-with-tagcache<tick> was called auto. after<br>    ;; <backtick>ecb-fetch-semantic-tags<tick>.<br>    (setq ecb-method-buffer-needs-rebuild t)<br>    ;; set this global variable according to the value of<br>    ;; invisible-sourcebuffer-allowed so that the hook-driven call to<br>    ;; <backtick>ecb-rebuild-methods-buffer-with-tagcache<tick> and the call below as well<br>    ;; do not prevent rebuilding an invisible source-buffer.<br>    ;; <backtick>ecb-method-buffer-rebuild-allowed-for-invisible-buffers<tick> is evaluated<br>    ;; by <backtick>ecb-rebuild-methods-buffer-with-tagcache<tick> and also reset to nil at<br>    ;; the end.<br>    (setq ecb-method-buffer-rebuild-allowed-for-invisible-buffers<br>          invisible-sourcebuffer-allowed)<br><br>    (let ((current-tagcache (and (ecb--semantic-active-p)<br>                                   ;; if we manually bovinate the buffer we<br>                                   ;; must widen the source to get all tags.<br>                                   (save-excursion<br>                                     (save-restriction'
        },
        {
          function : 'ecb-update-sources-buffer',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Updates the sources-buffer with all sources contained in<br>`ecb-path-selected-directory" - the contents are either newly computed or come<br>from the `ecb-sources-cache". DIR-BEFORE-UPDATE is the directory which was<br>selected before this update."',
          prototype : '(defun ecb-update-sources-buffer (dir-before-update)',
          parameter : 'dir-before-update',
          lispcode : '(defun ecb-update-sources-buffer (dir-before-update)<br><br>  ;; Here we add a cache-mechanism which caches for each path the node-tree<br>  ;; and the whole buffer-string of the sources-buffer. A cache-elem would be<br>  ;; removed from the cache if a directory is POWER-clicked in the directories<br>  ;; buffer because this is the only way to synchronize the sources-buffer<br>  ;; with the disk-contents of the clicked directory. This works because the<br>  ;; tree of the sources-buffer contains only not expandable nodes (see the<br>  ;; comment in <backtick>ecb-rebuild-methods-buffer-with-tagcache<tick>). If we would<br>  ;; make the nodes in the Sources-buffer <apo>expandable<apo> this caching would not<br>  ;; work!<br><br>  (ecb-exec-in-window ecb-sources-buffer-name<br>    ;; if we have a filtered cache we must display it - otherwise we use the<br>    ;; full cache if there is any<br>    (let ((cache-elem (or (ecb-sources-cache-get-filtered ecb-path-selected-directory)<br>                          (ecb-sources-cache-get-full ecb-path-selected-directory))))<br>      (if cache-elem<br>          (progn<br>            (tree-buffer-set-root (nth 0 cache-elem))<br>            (tree-buffer-update nil (cons (nth 2 cache-elem)<br>                                          (nth 1 cache-elem))))<br>        (let ((new-tree (tree-node-new-root))<br>              (old-children (tree-node->children (tree-buffer-get-root)))<br>              (new-cache-elem nil))<br>          ;; building up the new files-tree<br>          (ecb-tree-node-add-files<br>           new-tree<br>           ecb-path-selected-directory<br>           (car (ecb-get-files-and-subdirs ecb-path-selected-directory))<br>           ecb-sources-nodetype-sourcefile<br>           ecb-show-source-file-extension old-children t)<br><br>          ;; updating the buffer itself<br>          (tree-buffer-set-root new-tree)<br>          (tree-buffer-update)'
        },
        {
          function : 'ecb-update-tag-node',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Updates a node containing a tag.<br>This function MUST be called with the source-buffer as current buffer!"',
          prototype : '(defun ecb-update-tag-node (tag node &optional parent-tag no-bucketize)',
          parameter : 'tag node &optional parent-tag no-bucketize',
          lispcode : '(defun ecb-update-tag-node (tag node &optional parent-tag no-bucketize)<br>  (let ((children (ecb-children-tags tag))<br>        (tag-name (ecb-displayed-tag-name tag parent-tag)))<br>    (setf (tree-node->name node) tag-name)<br>    (unless (eq <tick>function (ecb--semantic-tag-class tag))<br>      (ecb-add-tags node children tag no-bucketize)<br>      (setf (tree-node->expandable node)<br>            (not (= 0 (length (tree-node->children node)))))<br>      ;; Always expand types, maybe this should be customizable and more<br>      ;; flexible<br>      (if (not (eq <tick>type (ecb--semantic-tag-class tag)))<br>          (setf (tree-node->expanded node) nil)<br>        (let ((type-specifier (ecb-get-type-specifier tag)))<br>          (setf (tree-node->expanded node)<br>                (and (tree-node->expandable node)'
        },
        {
          function : 'ecb-upgrade-alway-operate-in-edit-window',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-alway-operate-in-edit-window (old-val)<br>  (let ((l (copy-tree old-val)))<br>    (setq l (delete <tick>switch-to-buffer-other-window l))<br>    l))'
        },
        {
          function : 'ecb-upgrade-auto-expand-tag-tree-collapse-other',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-auto-expand-tag-tree-collapse-other (old-val)<br>  (if old-val<br>      <tick>only-if-on-tag<br>    nil))'
        },
        {
          function : 'ecb-upgrade-cache-directory-contents',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-cache-directory-contents (old-val)<br>  (mapcar (function (lambda (elem)<br>                      (cons (nth 0 elem) (nth 1 elem))))<br>          old-val))'
        },
        {
          function : 'ecb-upgrade-compile-window-temporally-enlarge',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-compile-window-temporally-enlarge (old-val)<br>  (cl-case old-val<br>    ((t after-compilation) <tick>after-display)<br>    ((nil) nil)<br>    ((after-selection both) old-val)<br>    (otherwise <tick>ecb-no-upgrade-conversion)))'
        },
        {
          function : 'ecb-upgrade-directories-menu-ext',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-directories-menu-ext (old-val)<br>  (append (ecb-upgrade-menu-extension old-val)<br>          (ecb-option-get-value <tick>ecb-directories-menu-user-extension<br>                                <tick>standard-value)))'
        },
        {
          function : 'ecb-upgrade-exclude-parents-regexp',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-exclude-parents-regexp (old-val)<br>  (if old-val (list old-val)))'
        },
        {
          function : 'ecb-upgrade-excluded-directories-regexp',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-excluded-directories-regexp (old-val)<br>  (list old-val))'
        },
        {
          function : 'ecb-upgrade-history-menu-ext',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-history-menu-ext (old-val)<br>  (append (ecb-upgrade-menu-extension old-val)<br>          (ecb-option-get-value <tick>ecb-history-menu-user-extension<br>                                <tick>standard-value)))'
        },
        {
          function : 'ecb-upgrade-layout-nr',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-layout-nr (old-val)<br>  (let ((name (ecb-upgrade-layout-nr2name old-val)))<br>    (if (stringp name)<br>        name<br>      <tick>ecb-no-upgrade-conversion)))'
        },
        {
          function : 'ecb-upgrade-layout-nr2name',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'number',
          lispcode : '(defun ecb-upgrade-layout-nr2name (number)<br>  (let ((number-name-alist <tick>((nil . <apo>left8<apo>)<br>                             (0 . <apo>left1<apo>)<br>                             (1 . <apo>left2<apo>)<br>                             (2 . <apo>left3<apo>)<br>                             (3 . <apo>left4<apo>)<br>                             (4 . <apo>left5<apo>)<br>                             (5 . <apo>right1<apo>)<br>                             (6 . <apo>left6<apo>)<br>                             (7 . <apo>top1<apo>)<br>                             (8 . <apo>left7<apo>)<br>                             (9 . <apo>left8<apo>)<br>                             (10 . <apo>top2<apo>)<br>                             (11 . <apo>left9<apo>)<br>                             (12 . <apo>left10<apo>)<br>                             (13 . <apo>left11<apo>)<br>                             (14 . <apo>left12<apo>)<br>                             (15 . <apo>left13<apo>)<br>                             (16 . <apo>left14<apo>)<br>                             (17 . <apo>left15<apo>)<br>                             (18 . <apo>leftright1<apo>)<br>                             (19 . <apo>leftright2<apo>)<br>                             (20 . <apo>speedbar1<apo>))))<br>    (cdr (assoc number number-name-alist))))'
        },
        {
          function : 'ecb-upgrade-layout-window-sizes',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-layout-window-sizes (old-val)<br>  (ecb-option-get-value <tick>ecb-layout-window-sizes <tick>standard-value))'
        },
        {
          function : 'ecb-upgrade-major-modes-activate',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-major-modes-activate (old-val)<br>  (if (not (listp old-val))<br>      old-val<br>    (let ((l (copy-tree old-val)))<br>      (dolist (elem l)<br>        (if (and (consp elem)<br>                 (integerp (cdr elem)))<br>            (setcdr elem (ecb-upgrade-layout-nr2name (cdr elem)))))<br>      l)))'
        },
        {
          function : 'ecb-upgrade-make-copy-of-custom-file',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Make a backup of the file returned by `ecb-custom-file" in the same directory."',
          prototype : '(defun ecb-upgrade-make-copy-of-custom-file ()',
          parameter : '',
          lispcode : '(defun ecb-upgrade-make-copy-of-custom-file ()<br>  (when (ecb-custom-file-writeable-p)<br>    (let* ((file (ecb-custom-file))<br>           (backup-file-base (format <apo>%s.before_ecb_%s<apo> file ecb-version))<br>           (backup-file backup-file-base)<br>           (i 0))<br>      (while (file-exists-p backup-file)<br>        (setq i (1+ i))<br>        (setq backup-file (format <apo>%s__%d<apo> backup-file-base i)))<br>      (copy-file file backup-file))))<br>'
        },
        {
          function : 'ecb-upgrade-menu-extension',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-list',
          lispcode : '(defun ecb-upgrade-menu-extension (old-list)<br>  (mapcar (function (lambda (i)<br>                      (reverse i)))<br>          old-list))'
        },
        {
          function : 'ecb-upgrade-methods-menu-ext',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-methods-menu-ext (old-val)<br>  (append (ecb-upgrade-menu-extension old-val)<br>          (ecb-option-get-value <tick>ecb-methods-menu-user-extension<br>                                <tick>standard-value)))'
        },
        {
          function : 'ecb-upgrade-mode-line-data',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-mode-line-data (old-val)<br>  (list (cons <tick>ecb-directories-buffer-name<br>              (if (equal (nth 0 old-val) <tick>selected)<br>                  <tick>sel-dir<br>                (nth 0 old-val)))<br>        (cons <tick>ecb-sources-buffer-name<br>              (if (equal (nth 1 old-val) <tick>selected)<br>                  <tick>sel-dir<br>                (nth 1 old-val)))<br>        (cons <tick>ecb-methods-buffer-name<br>              (if (equal (nth 2 old-val) <tick>selected)<br>                  <tick>sel-source<br>                (nth 2 old-val)))<br>        (cons <tick>ecb-history-buffer-name<br>              (nth 3 old-val))))'
        },
        {
          function : 'ecb-upgrade-mode-line-prefixes',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-mode-line-prefixes (old-val)<br>  (list (cons <tick>ecb-directories-buffer-name<br>              (nth 0 old-val))<br>        (cons <tick>ecb-sources-buffer-name<br>              (nth 1 old-val))<br>        (cons <tick>ecb-methods-buffer-name<br>              (nth 2 old-val))<br>        (cons <tick>ecb-history-buffer-name<br>              (nth 3 old-val))))'
        },
        {
          function : 'ecb-upgrade-not-compatible-options',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Upgrade all not anymore compatible options of `ecb-not-compatible-options".<br>If such an option is contained in `ecb-upgradable-option-alist" then try to<br>perform a special upgrade with `ecb-option-upgrade". If no special upgrade is<br>done then the option is reset to the default-value of current ECB-version."',
          prototype : '(defun ecb-upgrade-not-compatible-options ()',
          parameter : '',
          lispcode : '(defun ecb-upgrade-not-compatible-options ()<br>  ;; For every not compatible option perform an upgrade<br>  (let ((is-not-a-downgrade<br>         (not (ecb-package-version-list<<br>               (ecb-package-version-str2list ecb-version)<br>               (ecb-package-version-str2list ecb-options-version)))))<br>    (dolist (option ecb-not-compatible-options)<br>      ;; if the incompatible option is not upgraded by <backtick>ecb-option-upgrade<tick><br>      ;; then we reset it to the standard-value of current ECB-version. If we<br>      ;; make a downgrade we always reset to the default!<br>      (let ((upgrade-result<br>             (if is-not-a-downgrade (ecb-option-upgrade (car option)))))'
        },
        {
          function : 'ecb-upgrade-options',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Check for all ECB-options if the current value is compatible to the type.<br>If not upgrade it to the new type or reset it to the default-value of current<br>ECB. Try also to upgrade renamed options. Displays all upgraded or reset<br>options with their old (before the upgrade/reset) and new values."',
          prototype : '(defun ecb-upgrade-options ()',
          parameter : '',
          lispcode : '(defun ecb-upgrade-options ()<br>  (interactive)<br>  (ecb-check-not-compatible-options)<br>  (ecb-upgrade-not-compatible-options)<br>  (ecb-upgrade-renamed-options)<br>  (ecb-display-upgraded-options))<br>'
        },
        {
          function : 'ecb-upgrade-other-window-jump-behavior',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-other-window-jump-behavior (old-val)<br>  (if (equal old-val <tick>all)<br>      <tick>all<br>    (ecb-option-get-value <tick>ecb-other-window-behavior<br>                          <tick>standard-value)))'
        },
        {
          function : 'ecb-upgrade-post-process-semantic-taglist',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-post-process-semantic-taglist (old-val)<br>  (let ((l (copy-tree old-val)))<br>    (dolist (elem l)<br>      (if (cdr elem)<br>          (setcdr elem (list (cdr elem)))))<br>    l))'
        },
        {
          function : 'ecb-upgrade-post-process-semantic-tokenlist',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-post-process-semantic-tokenlist (old-val)<br>  (let ((val-copy (copy-tree old-val))<br>        (mapping-list<br>         <tick>((ecb-group-function-tokens-with-parents . ecb-group-function-tags-with-parents))))<br>    (mapc (function (lambda (e)<br>                      (if (assoc (cdr e) mapping-list)<br>                          (setcdr e (cdr (assoc (cdr e) mapping-list))))))<br>          val-copy)<br>    val-copy))'
        },
        {
          function : 'ecb-upgrade-prescan-directories-for-emptyness',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-prescan-directories-for-emptyness (old-val)<br>  (if old-val <tick>unless-remote nil))'
        },
        {
          function : 'ecb-upgrade-renamed-options',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Upgrade all renamed options of `ecb-upgradable-option-alist" and store<br>every option in `ecb-renamed-options" if at least an upgrade was tried (see<br>`ecb-option-upgrade").<br><br>Note: This function upgrades only the renamed but not the incompatible options<br>(i.e. only the type but not the name of the option has changed) of<br>`ecb-upgradable-option-alist" because the latter ones will be upgraded by<br>`ecb-upgrade-not-compatible-options"!"',
          prototype : '(defun ecb-upgrade-renamed-options ()',
          parameter : '',
          lispcode : '(defun ecb-upgrade-renamed-options ()<br>  (setq ecb-renamed-options nil)<br>  (when (not (ecb-package-version-list<<br>              (ecb-package-version-str2list ecb-version)<br>              (ecb-package-version-str2list ecb-options-version)))<br>    (ecb-get-all-ecb-options)<br>    (dolist (option ecb-upgradable-option-alist)<br>      ;; perform only an upgrade if the option is not contained in<br>      ;; <backtick>ecb-not-compatible-options<tick> too because then ECB has auto.<br>      ;; recognized that this option is not compatible and the upgrade (or<br>      ;; reset) is performed by <backtick>ecb-upgrade-not-compatible-options<tick>!<br>      (when (not (assoc (car option) ecb-not-compatible-options))<br>        (let ((new-value-list (ecb-option-upgrade (car option))))<br>          ;; if an upgrade was tried then store the option in<br>          ;; <backtick>ecb-renamed-options<tick>.<br>          (when (and new-value-list<br>                     (not (equal (car new-value-list)<br>                                 <tick>ecb-no-upgrade-conversion)))'
        },
        {
          function : 'ecb-upgrade-show-tags',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-show-tags (old-val)<br>  (ecb-option-get-value <tick>ecb-show-tags<br>                        <tick>standard-value))'
        },
        {
          function : 'ecb-upgrade-sort-history-items',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-sort-history-items (old-val)<br>  (if old-val ecb-sources-sort-method))'
        },
        {
          function : 'ecb-upgrade-source-file-regexps',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-source-file-regexps (old-val)<br>  (let ((l (copy-tree old-val)))<br>    (dolist (elem l)<br>      (setcdr elem (list (list (cadr elem)) (list (caddr elem)))))<br>    l))'
        },
        {
          function : 'ecb-upgrade-sources-menu-ext',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-sources-menu-ext (old-val)<br>  (append (ecb-upgrade-menu-extension old-val)<br>          (ecb-option-get-value <tick>ecb-sources-menu-user-extension<br>                                <tick>standard-value)))'
        },
        {
          function : 'ecb-upgrade-sources-perform-read-only-check',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-sources-perform-read-only-check (old-val)<br>  (if old-val <tick>unless-remote nil))'
        },
        {
          function : 'ecb-upgrade-split-edit-window',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-split-edit-window (old-val)<br>  (if (equal old-val t)<br>      <tick>before-activation<br>    old-val))'
        },
        {
          function : 'ecb-upgrade-toggle-layout-sequence',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-toggle-layout-sequence (old-val)<br>  (mapcar (function (lambda (elem)<br>                      (ecb-upgrade-layout-nr2name elem)))<br>          old-val))'
        },
        {
          function : 'ecb-upgrade-token-display-function',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-token-display-function (old-val)<br>  (let ((l (copy-tree old-val))<br>        (mapping-list<br>         <tick>((semantic-name-nonterminal                  . ecb--semantic-format-tag-name)<br>           (semantic-abbreviate-nonterminal            . ecb--semantic-format-tag-abbreviate)<br>           (semantic-summarize-nonterminal             . ecb--semantic-format-tag-summarize)<br>           (semantic-prototype-nonterminal             . ecb--semantic-format-tag-prototype)<br>           (semantic-concise-prototype-nonterminal     . ecb--semantic-format-tag-concise-prototype)<br>           (semantic-uml-abbreviate-nonterminal        . ecb--semantic-format-tag-uml-abbreviate)<br>           (semantic-uml-prototype-nonterminal         . ecb--semantic-format-tag-uml-prototype)<br>           (semantic-uml-concise-prototype-nonterminal . ecb--semantic-format-tag-uml-concise-prototype)<br>           (semantic-prin1-nonterminal                 . ecb--semantic-format-tag-prin1)<br>           (ecb-name-nonterminal                  . ecb-format-tag-name)<br>           (ecb-abbreviate-nonterminal            . ecb-format-tag-abbreviate)<br>           (ecb-summarize-nonterminal             . ecb-format-tag-summarize)<br>           (ecb-prototype-nonterminal             . ecb-format-tag-prototype)<br>           (ecb-concise-prototype-nonterminal     . ecb-format-tag-concise-prototype)<br>           (ecb-uml-abbreviate-nonterminal        . ecb-format-tag-uml-abbreviate)<br>           (ecb-uml-prototype-nonterminal         . ecb-format-tag-uml-prototype)<br>           (ecb-uml-concise-prototype-nonterminal . ecb-format-tag-uml-concise-prototype)<br>           (ecb-prin1-nonterminal                 . ecb-format-tag-prin1))))<br>    (mapc (function (lambda (e)<br>                      (if (assoc (cdr e) mapping-list)<br>                          (setcdr e (cdr (assoc (cdr e) mapping-list))))))<br>          l)<br>    l))<br>'
        },
        {
          function : 'ecb-upgrade-token-header-face',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-token-header-face (old-val)<br>  (if (equal old-val <tick>ecb-token-header-face)<br>      <tick>ecb-tag-header-face<br>    old-val))'
        },
        {
          function : 'ecb-upgrade-token-visit-post-actions',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-token-visit-post-actions (old-val)<br>  (let ((val-copy (copy-tree old-val))<br>        (mapping-list<br>         <tick>((ecb-token-visit-highlight-token-header . ecb-tag-visit-highlight-tag-header)<br>           (ecb-token-visit-smart-token-start . ecb-tag-visit-smart-tag-start)<br>           (ecb-token-visit-recenter . ecb-tag-visit-recenter)<br>           (ecb-token-visit-recenter-top . ecb-tag-visit-recenter-top)<br>           (ecb-token-visit-goto-doc-start . ecb-tag-visit-goto-doc-start)<br>           (ecb-token-visit-narrow-token . ecb-tag-visit-narrow-tag))))<br>    (mapc (function (lambda (e)<br>                      (dotimes (i (length (cdr e)))<br>                        (if (assoc (nth i (cdr e)) mapping-list)<br>                            (ecb-set-elt (cdr e) i<br>                                         (cdr (assoc (nth i (cdr e))<br>                                                     mapping-list)))))))<br>          val-copy)<br>    val-copy))'
        },
        {
          function : 'ecb-upgrade-tree-RET-selects-edit-window',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-tree-RET-selects-edit-window (old-val)<br>  (delq nil (mapcar (lambda (b)<br>                      (and (not (ecb-member-of-symbol/value-list<br>                                 (symbol-value b)<br>                                 old-val))<br>                           b))<br>                    <tick>(ecb-directories-buffer-name<br>                      ecb-sources-buffer-name<br>                      ecb-methods-buffer-name<br>                      ecb-history-buffer-name<br>                      ecb-analyse-buffer-name))))<br><br>'
        },
        {
          function : 'ecb-upgrade-tree-image-icons-directories',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-tree-image-icons-directories (old-val)<br>  (let ((l (copy-tree old-val)))<br>    (cons (nth 0 l)<br>          (delq nil (list (if (nth 1 l)<br>                              (cons <tick>ecb-directories-buffer-name<br>                                    (nth 1 l)))<br>                          (if (nth 2 l)<br>                              (cons <tick>ecb-sources-buffer-name<br>                                    (nth 2 l)))<br>                          (if (nth 3 l)<br>                              (cons <tick>ecb-methods-buffer-name<br>                                    (nth 3 l)))<br>                          (if (nth 4 l)<br>                              (cons <tick>ecb-history-buffer-name<br>                                    (nth 4 l))))))))'
        },
        {
          function : 'ecb-upgrade-truncate-lines',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-truncate-lines (old-val)<br>  (cond ((equal t old-val)<br>         <tick>(ecb-directories-buffer-name<br>           ecb-sources-buffer-name<br>           ecb-methods-buffer-name<br>           ecb-history-buffer-name))<br>        ((equal nil old-val)<br>         nil)<br>        ((listp old-val)<br>         (let ((new-list nil))<br>           (if (nth 0 old-val)<br>               (setq new-list (cons <tick>ecb-directories-buffer-name new-list)))<br>           (if (nth 1 old-val)<br>               (setq new-list (cons <tick>ecb-sources-buffer-name new-list)))<br>           (if (nth 2 old-val)<br>               (setq new-list (cons <tick>ecb-methods-buffer-name new-list)))<br>           (if (nth 3 old-val)<br>               (setq new-list (cons <tick>ecb-history-buffer-name new-list)))<br>           new-list))<br>        (t<br>         <tick>(ecb-directories-buffer-name<br>           ecb-sources-buffer-name<br>           ecb-methods-buffer-name<br>           ecb-history-buffer-name))))'
        },
        {
          function : 'ecb-upgrade-type-token-display',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-type-token-display (old-val)<br>  (let ((val-copy (copy-tree old-val))<br>        (mapping-list<br>         <tick>((ecb-type-token-class-face . ecb-type-tag-class-face)<br>           (ecb-type-token-interface-face . ecb-type-tag-interface-face)<br>           (ecb-type-token-struct-face . ecb-type-tag-struct-face)<br>           (ecb-type-token-typedef-face . ecb-type-tag-typedef-face)<br>           (ecb-type-token-enum-face . ecb-type-tag-enum-face)<br>           (ecb-type-token-group-face . ecb-type-tag-group-face))))<br>    (mapc (function (lambda (e)<br>                      (dolist (l (cdr e))<br>                        (if (assoc (nth 2 l) mapping-list)<br>                            (ecb-set-elt l 2<br>                                         (cdr (assoc (nth 2 l) mapping-list)))))))<br>          val-copy)<br>    val-copy))'
        },
        {
          function : 'ecb-upgrade-use-speedbar-for-directories',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-use-speedbar-for-directories (old-val)<br>  (if old-val<br>      <tick>dir))'
        },
        {
          function : 'ecb-upgrade-vc-enable-support',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-vc-enable-support (old-val)<br>  (if old-val <tick>unless-remote nil))'
        },
        {
          function : 'ecb-upgrade-window-sync',
          filename : 'ecb/ecb-upgrade.el',
          parameter : 'old-val',
          lispcode : '(defun ecb-upgrade-window-sync (old-val)<br>  (if (equal old-val t)<br>      (ecb-option-get-value <tick>ecb-window-sync <tick>standard-value)<br>    nil))'
        },
        {
          function : 'ecb-values-of-symbol/value-list',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return a list of values build from the members of LIST.<br>The result-list is a list which is build from LIST by using the<br>symbol-value if a list-member is a symbol and otherwise the<br>list-member itself.<br><br>If ELEM-ACCESSOR is a function then it is used to get that part of an elem<br>of LIST for which the rule above should be applied."',
          prototype : '(defun ecb-values-of-symbol/value-list (list &optional elem-accessor)',
          parameter : 'list &optional elem-accessor',
          lispcode : '(defun ecb-values-of-symbol/value-list (list &optional elem-accessor)<br>  (let ((elem-acc (or elem-accessor <tick>identity)))<br>    (mapcar (function (lambda (elem)<br>                        (let ((e (funcall elem-acc elem)))<br>                          (if (symbolp e)<br>                              (symbol-value e)<br>                            e))))<br>            list)))'
        },
        {
          function : 'ecb-vc-after-revert-hook',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Ensures that the ECB-cache is reset and the entry for the currently<br>reverted file-buffer is cleared."',
          prototype : '(defun ecb-vc-after-revert-hook ()',
          parameter : '',
          lispcode : '(defun ecb-vc-after-revert-hook ()<br>  (let ((file (ignore-errors (ecb-fix-filename (ecb-buffer-file-name)))))<br>    (when (and file (ecb-file-exists-p file))<br>      (ecb-vc-cache-remove file)<br>      (ecb-vc-reset-vc-stealthy-checks))))'
        },
        {
          function : 'ecb-vc-cache-add-dir',
          filename : 'ecb/ecb-file-browser.el',
          parameter : 'dir backend',
          lispcode : '(defun ecb-vc-cache-add-dir (dir backend)<br>  (ecb-multicache-put-value <tick>ecb-filename-cache dir <tick>VC backend)<br>  backend)'
        },
        {
          function : 'ecb-vc-cache-add-file',
          filename : 'ecb/ecb-file-browser.el',
          parameter : 'file state checked-buffer-names',
          lispcode : '(defun ecb-vc-cache-add-file (file state checked-buffer-names)<br>  (ecb-multicache-put-value <tick>ecb-filename-cache file <tick>VC<br>                            (list state<br>                                  (ecb-subseq (current-time) 0 2)<br>                                  checked-buffer-names))<br>  state)'
        },
        {
          function : 'ecb-vc-cache-clear',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Clear the whole VC-cache."',
          prototype : '(defun ecb-vc-cache-clear ()',
          parameter : '',
          lispcode : '(defun ecb-vc-cache-clear ()<br>  (ecb-multicache-clear-subcache <tick>ecb-filename-cache <tick>VC))'
        },
        {
          function : 'ecb-vc-cache-dump',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Dump the whole VC-cache. If NO-NIL-VALUE is not nil then these<br>cache-entries are not dumped. This command is not intended for end-users of<br>ECB."',
          prototype : '(defun ecb-vc-cache-dump (&optional no-nil-value)',
          parameter : '&optional no-nil-value',
          lispcode : '(defun ecb-vc-cache-dump (&optional no-nil-value)<br>  (interactive <apo>P<apo>)<br>  (ecb-multicache-print-subcache <tick>ecb-filename-cache <tick>VC no-nil-value))<br>'
        },
        {
          function : 'ecb-vc-cache-get',
          filename : 'ecb/ecb-file-browser.el',
          parameter : 'file',
          lispcode : '(defun ecb-vc-cache-get (file)<br>  (ecb-multicache-get-value <tick>ecb-filename-cache file <tick>VC))'
        },
        {
          function : 'ecb-vc-cache-remove',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Remove FILE from the VC-cache."',
          prototype : '(defun ecb-vc-cache-remove (file)',
          parameter : 'file',
          lispcode : '(defun ecb-vc-cache-remove (file)<br>  (ecb-multicache-clear-value <tick>ecb-filename-cache file <tick>VC))'
        },
        {
          function : 'ecb-vc-cache-remove-files-of-dir',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Remove all files contained in DIR from the VC-cache."',
          prototype : '(defun ecb-vc-cache-remove-files-of-dir (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-vc-cache-remove-files-of-dir (dir)<br>  (let* ((dir-sep-string (ecb-directory-sep-string dir))<br>         (regexp (concat <apo>^<apo><br>                         (regexp-quote dir)<br>                         (regexp-quote dir-sep-string)<br>                         <apo>[^<apo><br>                         dir-sep-string<br>                         <apo>]+$<apo>)))<br>    (save-match-data<br>      (ecb-multicache-mapsubcache<br>       <tick>ecb-filename-cache <tick>VC<br>       (function (lambda (key old-value)<br>                   (if (and old-value<br>                            (string-match regexp key))<br>                       ;; the filename-key has a VC-cache value and matches the<br>                       ;; regexp above so its a cached file of DIR so we return<br>                       ;; nil ==> in fact we remove this file from the VC-cache'
        },
        {
          function : 'ecb-vc-check-CC-state',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Checks the VC-state of FILE when under Control of Clearcase.<br>Returns the following different state-values: "unknown, "up-to-date, "edited<br>and "unlocked-changes."',
          prototype : '(defun ecb-vc-check-CC-state (file)',
          parameter : 'file',
          lispcode : '(defun ecb-vc-check-CC-state (file)<br>  (let ((action (and (fboundp <tick>clearcase-compute-next-action)<br>                     (clearcase-compute-next-action file))))<br>    (cond<br>     ((eq action <tick>mkelem)<br>      <tick>unknown)<br>     ((eq action <tick>checkout)<br>      <tick>up-to-date)<br>     ((eq action <tick>uncheckout)<br>      <tick>edited)<br>     ((eq action <tick>illegal-checkin)<br>      ;; ??? Is OK ???<br>      <tick>unlocked-changes)<br>     ((eq action <tick>checkin)'
        },
        {
          function : 'ecb-vc-check-state',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Check if the VC-state for FILE must be rechecked, i.e. if it is out of<br>date. If it is still valid and also already checked for TREE-BUFFER-NAME then<br>return the symbol "unchanged (if still valid but only not checked for<br>TREE-BUFFER-NAME then return the state and store the fact that it has been<br>check now also for this buffer). Otherwise check the new state for FILE with<br>VC-STATE-FCN, store it in the cache only for TREE-BUFFER-NAME and return the<br>new state."',
          prototype : '(defun ecb-vc-check-state (file tree-buffer-name vc-state-fcn)',
          parameter : 'file tree-buffer-name vc-state-fcn',
          lispcode : '(defun ecb-vc-check-state (file tree-buffer-name vc-state-fcn)<br>  (let* ((cached-state (ecb-vc-cache-get file))<br>         (last-state (nth 0 cached-state))<br>         (last-check-time (nth 1 cached-state))<br>         (checked-tree-buffer-names (nth 2 cached-state))<br>         (no-need-for-state-check-p<br>          (and last-check-time<br>               (or (null last-state) ;; FILE has been checked but is not in VC<br>                   (not (ecb-time-less-p last-check-time<br>                                         (ecb-subseq (nth 5 (ecb-file-attributes file))<br>                                                     0 2))))))<br>         (result nil))<br>    (if no-need-for-state-check-p<br>        ;; FILE was not modified since our last vc-state-check<br>        (if (member tree-buffer-name checked-tree-buffer-names)<br>            ;; TREE-BUFFER-NAMES is in the list of buffer-names for which the<br>            ;; state of FILE has already been cached ==> there is no need to<br>            ;; update the cache we can just return <tick>unchanged to signalize<br>            ;; that nothing has to be updated<br>            (setq result <tick>unchanged)<br>          ;; now we add TREE-BUFFER-NAME to that list - this new list will be<br>          ;; added to the cache below. As result we will return the last-state<br>          ;; because the state itself is still valid - the only thing we now<br>          ;; have to store in the cache is that the last-state is now valid<br>          ;; for TREE-BUFFER-NAME too!<br>          (setq result last-state)<br>          (setq checked-tree-buffer-names<br>                (cons tree-buffer-name checked-tree-buffer-names)))<br><br>      ;; FILE was modified since our last vc-state-check, so we have to check<br>      ;; the state again'
        },
        {
          function : 'ecb-vc-checkin-hook',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Ensures that the ECB-cache is reset and the entry for the most recent<br>checkedin file is cleared. Uses `ecb-checkedin-file" as last checked-in file."',
          prototype : '(defun ecb-vc-checkin-hook ()',
          parameter : '',
          lispcode : '(defun ecb-vc-checkin-hook ()<br>  (when ecb-checkedin-file<br>    (ecb-vc-cache-remove ecb-checkedin-file)<br>    (ecb-vc-reset-vc-stealthy-checks)<br>    (setq ecb-checkedin-file nil)))'
        },
        {
          function : 'ecb-vc-dir-managed-by-BZR',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return "BZR if DIRECTORY is managed by Bazaar. nil if not."',
          prototype : '(defun ecb-vc-dir-managed-by-BZR (directory)',
          parameter : 'directory',
          lispcode : '(defun ecb-vc-dir-managed-by-BZR (directory)<br>  (and (locate-library <apo>vc-bzr<apo>)<br>       (ecb-file-exists-p (concat directory <apo>/<apo> <apo>.bzr<apo>))<br>       (require <tick>vc)<br>       (require <tick>vc-bzr)<br>       <tick>BZR))<br>'
        },
        {
          function : 'ecb-vc-dir-managed-by-CC',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return "CC if DIRECTORY is managed by ClearCase. nil if not."',
          prototype : '(defun ecb-vc-dir-managed-by-CC (directory)',
          parameter : 'directory',
          lispcode : '(defun ecb-vc-dir-managed-by-CC (directory)<br>  (and (fboundp <tick>clearcase-file-is-in-view-p)<br>       (if (clearcase-file-is-in-view-p directory)<br>           <tick>CC)))'
        },
        {
          function : 'ecb-vc-dir-managed-by-CVS',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return "CVS if DIRECTORY is managed by CVS. nil if not."',
          prototype : '(defun ecb-vc-dir-managed-by-CVS (directory)',
          parameter : 'directory',
          lispcode : '(defun ecb-vc-dir-managed-by-CVS (directory)<br>  (and (locate-library <apo>vc-cvs<apo>)<br>       (ecb-file-exists-p (concat directory <apo>/CVS/<apo>))<br>       (require <tick>vc)<br>       (require <tick>vc-cvs)<br>       <tick>CVS))'
        },
        {
          function : 'ecb-vc-dir-managed-by-GIT',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return "GIT if DIRECTORY is managed by Git. nil if not.<br>Because with Git only the top-most directory of a source-tree has a subdir<br>.git this function tries recursively upwards if there is a .git-subdir."',
          prototype : '(defun ecb-vc-dir-managed-by-GIT (directory)',
          parameter : 'directory',
          lispcode : '(defun ecb-vc-dir-managed-by-GIT (directory)<br>  (and (locate-library <apo>vc-git<apo>)<br>       (fboundp <tick>vc-find-root)<br>       (vc-find-root directory <apo>.git<apo>)<br>       (require <tick>vc)<br>       (require <tick>vc-git)<br>       <tick>GIT))<br><br>;; clearcase support'
        },
        {
          function : 'ecb-vc-dir-managed-by-HG',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return "HG if DIRECTORY is managed by Mercurial. nil if not.<br>Because with Mercurial only the top-most directory of a source-tree has a subdir<br>.hg this function tries recursively upwards if there is a .hg-subdir."',
          prototype : '(defun ecb-vc-dir-managed-by-HG (directory)',
          parameter : 'directory',
          lispcode : '(defun ecb-vc-dir-managed-by-HG (directory)<br>  (and (locate-library <apo>vc-hg<apo>)<br>       (fboundp <tick>vc-find-root)<br>       (vc-find-root directory <apo>.hg<apo>)<br>       (require <tick>vc)<br>       (require <tick>vc-hg)<br>       <tick>HG))<br>'
        },
        {
          function : 'ecb-vc-dir-managed-by-RCS',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return "RCS if DIRECTORY is managed by RCS. nil if not."',
          prototype : '(defun ecb-vc-dir-managed-by-RCS (directory)',
          parameter : 'directory',
          lispcode : '(defun ecb-vc-dir-managed-by-RCS (directory)<br>  (and (locate-library <apo>vc-rcs<apo>)<br>       (ecb-file-exists-p (concat directory <apo>/RCS/<apo>))<br>       (require <tick>vc)<br>       (require <tick>vc-rcs)<br>       <tick>RCS))'
        },
        {
          function : 'ecb-vc-dir-managed-by-SCCS',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return "SCCS if DIRECTORY is managed by SCCS. nil if not."',
          prototype : '(defun ecb-vc-dir-managed-by-SCCS (directory)',
          parameter : 'directory',
          lispcode : '(defun ecb-vc-dir-managed-by-SCCS (directory)<br>  (and (locate-library <apo>vc-sccs<apo>)<br>       (or (ecb-file-exists-p (concat directory <apo>/SCCS/<apo>))<br>           ;; Remote SCCS project<br>           (let ((proj-dir (getenv <apo>PROJECTDIR<apo>)))<br>             (if proj-dir<br>                 (ecb-file-exists-p (concat proj-dir <apo>/SCCS<apo>)))))<br>       (require <tick>vc)<br>       (require <tick>vc-sccs)<br>       <tick>SCCS))'
        },
        {
          function : 'ecb-vc-dir-managed-by-SVN',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return "SVN if DIRECTORY is managed by SVN. nil if not."',
          prototype : '(defun ecb-vc-dir-managed-by-SVN (directory)',
          parameter : 'directory',
          lispcode : '(defun ecb-vc-dir-managed-by-SVN (directory)<br>  (and (locate-library <apo>vc-svn<apo>)<br>       (let ((admin-dir (cond ((and (memq system-type <tick>(cygwin windows-nt ms-dos))<br>                                    (getenv <apo>SVN_ASP_DOT_NET_HACK<apo>))<br>                               <apo>_svn<apo>)<br>                              (t <apo>.svn<apo>))))<br>         (ecb-file-exists-p (concat directory <apo>/<apo> admin-dir <apo>/<apo>)))<br>       (require <tick>vc)<br>       (require <tick>vc-svn)<br>       <tick>SVN))'
        },
        {
          function : 'ecb-vc-enable-internals',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Enable or disable (if ARG < 0) all settings needed by the VC-support."',
          prototype : '(defun ecb-vc-enable-internals (arg)',
          parameter : 'arg',
          lispcode : '(defun ecb-vc-enable-internals (arg)<br>  (if (< arg 0)<br>      (progn<br>        (remove-hook <tick>after-revert-hook <tick>ecb-vc-after-revert-hook)<br>        (remove-hook <tick>write-file-functions <tick>ecb-vc-reset-vc-stealthy-checks)<br>        (remove-hook <tick>vc-checkin-hook <tick>ecb-vc-checkin-hook)<br>        (ecb-disable-advices <tick>ecb-vc-advices))<br>    (add-hook <tick>after-revert-hook <tick>ecb-vc-after-revert-hook)<br>    (add-hook <tick>write-file-functions <tick>ecb-vc-reset-vc-stealthy-checks)<br>    (add-hook <tick>vc-checkin-hook <tick>ecb-vc-checkin-hook)<br>    (ecb-enable-advices <tick>ecb-vc-advices)))<br><br>;; -- end of vc-support ---------------'
        },
        {
          function : 'ecb-vc-generate-node-name',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Generate a node-name with an appropriate icon in the front of NAME<br>depending on STATE. If Emacs supports image-display then an image-icon wll be<br>used otherwise an ascii-icon. The text-property "ecb-vc-ascii-icon-length is<br>added to the full length of the returned node-name. It contains as value the<br>length of the ascii-icon (incl. one trailing space) which is added in front<br>of NAME."',
          prototype : '(defun ecb-vc-generate-node-name (name state)',
          parameter : 'name state',
          lispcode : '(defun ecb-vc-generate-node-name (name state)<br>  (let* ((ascii-icon (ecb-vc-get-ascii-icon-for-vc-state state))<br>         (node-name (concat ascii-icon <apo> <apo><br>                            (save-match-data<br>                              (if (string-match <apo>^(.) \\(.+\\)$<apo> name)<br>                                  (match-string 1 name)<br>                                name)))))<br>    (put-text-property 0 (length node-name)<br>                       <tick>ecb-vc-ascii-icon-length (1+ (length ascii-icon))<br>                       node-name)<br>    (ecb-generate-node-name node-name (1+ (length ascii-icon))<br>                            (ecb-vc-get-image-name-for-vc-state state)<br>                            ;; even in the history- or the directories-buffers<br>                            ;; we use the icons of the sources-buffer because'
        },
        {
          function : 'ecb-vc-get-state-fcn-for-dir',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Get that function which should be used for checking the VC-state for files<br>contained in DIRECTORY. Get it either from the VC-cache or call the car of<br>each element of `ecb-vc-supported-backends" and return the cdr of the first<br>elem where the car returns not nil. If Directory is not managed by a<br>version-control system then return nil. Store the result in the VC-cache for<br>speeding up things next time. Ange-ftp- or efs-directories will never be<br>checked for VC-states!"',
          prototype : '(defun ecb-vc-get-state-fcn-for-dir (directory)',
          parameter : 'directory',
          lispcode : '(defun ecb-vc-get-state-fcn-for-dir (directory)<br>  (let* ((norm-dir (ecb-fix-filename directory))<br>         (cache-val (ecb-vc-cache-get norm-dir)))<br>    (cl-case cache-val<br>      (NO-VC nil)<br>      ((nil) ;; not cached or outdated<br>       (let ((vc-backend-fcn<br>              (catch <tick>found<br>                (dolist (elem ecb-vc-supported-backends)<br>                  (when (and (fboundp (car elem))<br>                             (funcall (car elem) norm-dir))<br>                    (throw <tick>found (cdr elem))))<br>                nil)))<br>         ;; Add it to the vc-cache: Either NO-VC if nil otherwise the<br>         ;; check-state-function<br>         (ecb-vc-cache-add-dir norm-dir (or vc-backend-fcn <tick>NO-VC))'
        },
        {
          function : 'ecb-vc-reset-vc-stealthy-checks',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Resets all stealthy VC-checks."',
          prototype : '(defun ecb-vc-reset-vc-stealthy-checks ()',
          parameter : '',
          lispcode : '(defun ecb-vc-reset-vc-stealthy-checks ()<br>  ;; we can call savely all these initialization because if one of the<br>  ;; following tree-windows is not visible nothing will be done (and the<br>  ;; directories-check will only run when sources are displayed in the<br>  ;; directories buffer!). If visible the vc-check will be performed for all<br>  ;; current visible file-nodes again in all visible tree-buffers of the<br>  ;; file-browser but because we have only removed the cache-entry for<br>  ;; exactly one file, the check will be very fast for all file-nodes<br>  ;; besides this file!<br>'
        },
        {
          function : 'ecb-vc-state',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Same as `vc-state" but it clears the internal caches of the VC-package for<br>FILE before calling `vc-state". Finally calls `vc-state" and returns that<br>value. This function should work for all backends supported by vc.<br><br>Note: `vc-state" probably uses the heuristic-state function of the backend<br>which is much faster but can be sometimes inaccurate. If always the accurate<br>state is needed `vc-recompute-state" has to be used - see<br>`ecb-vc-recompute-state"."',
          prototype : '(defun ecb-vc-state (file)',
          parameter : 'file',
          lispcode : '(defun ecb-vc-state (file)<br>  (and (fboundp <tick>vc-file-clearprops) (vc-file-clearprops file))<br>  (vc-state file))'
        },
        {
          function : 'ecb-vc-update-sources-cache',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Update the SOURCES cache for DIR with the current-content of the<br>sources-buffer if DIR has currently either a filtered or full cache entry in<br>the SOURCES-cache."',
          prototype : '(defun ecb-vc-update-sources-cache (dir)',
          parameter : 'dir',
          lispcode : '(defun ecb-vc-update-sources-cache (dir)<br>  (let* ((full-sources-cache (ecb-sources-cache-get-full dir))<br>         (filtered-sources-cache (and full-sources-cache<br>                                      (ecb-sources-cache-get-filtered dir))))<br>    (if filtered-sources-cache<br>        ;; we have currently a filtered sources-buffer so we must update the<br>        ;; filtered sources-cache.<br>        (ecb-sources-cache-add-filtered dir<br>                                        (list (tree-buffer-get-root)<br>                                              (tree-buffer-displayed-nodes-copy)<br>                                              (ecb-buffer-substring (point-min)<br>                                                                    (point-max))<br>                                              ;; add the old-filter-spec<br>                                              ;; because it must be the same<br>                                              (nth 3 filtered-sources-cache)))<br>      (if full-sources-cache<br>          ;; we have currently a cached sources-buffer without an applied<br>          ;; filter so we must update the full sources-cache.<br>          (ecb-sources-cache-add-full dir'
        },
        {
          function : 'ecb-warning',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Displays a warning."',
          prototype : '(defun ecb-warning (&rest args)',
          parameter : '&rest args',
          lispcode : '(defun ecb-warning (&rest args)<br>  (message (concat <apo>ECB <apo> ecb-version <apo> - Warning: <apo> (apply <tick>format args))))'
        },
        {
          function : 'ecb-where-is-point',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return a cons-cell with the exact location of point in the ecb-frame.<br>The car is one of "ecb (point in a special ecb-window), "edit<br>(point in an edit-window of the edit-area), "compile (point in<br>the compile window), "minibuf (the minibuffer is the selected<br>window) or "other-dedicated (point is in a dedicated window<br>which is not one of the special ecb-windows - some packages like<br>ediff could use dedicated windows for their own needs). The cdr<br>is the number of the window in the related window-list in<br>canonical order (means top-left-most window in the related<br>window-list has number 1 and so on...). In case of "other-dedicated the cdr is<br>the number of the window in the full window-list of the ecb-frame (without<br>minibuffer-window).<br><br>If the compile-window or the minibuffer is the selected window then the window<br>number is always 1.<br><br>If the ecb-frame is not the selected frame then nil is returned.<br>This means the result is undefined.<br><br>If WIN-LIST is nil then a new window-list is computed via<br>`ecb-canonical-windows-list".<br><br>Examples:<br><br>If point stays in the second special-window list, then ("ecb . 2) is<br>returned, even in layouts of type "right".<br><br>If there are 3 edit windows and point stays in the third one, then (edit . 3)<br>is returned, even in layouts of type "left".<br><br>If the compile-window or the minibuffer is the selected window then<br>("compile . 1) rsp. (minibuf . 1) is returned."',
          prototype : '(defun ecb-where-is-point (&optional win-list)',
          parameter : '&optional win-list',
          lispcode : '(defun ecb-where-is-point (&optional win-list)<br>  (when (equal (selected-frame) ecb-frame)<br>    (let ((win-list (or win-list (ecb-canonical-windows-list)))<br>          (type (cond ((memq (selected-window)<br>                             (ecb-canonical-ecb-windows-list win-list))<br>                       <tick>ecb)<br>                      ((memq (selected-window)<br>                             (ecb-canonical-edit-windows-list win-list))<br>                       <tick>edit)<br>                      ((equal (selected-window) (minibuffer-window ecb-frame))<br>                       <tick>minibuf)<br>                      ((ecb-point-in-compile-window)<br>                       <tick>compile)<br>                      (t <tick>other-dedicated))))<br>           (cons type (cl-case type<br>                        (ecb (ecb-point-in-ecb-window-number<br>                              (ecb-canonical-ecb-windows-list win-list)))<br>                        (edit (ecb-point-in-edit-window-number<br>                               (ecb-canonical-edit-windows-list win-list)))<br>                        (compile 1)<br>                        (minibuf 1)<br>                        (otherwise (ecb-window-in-window-list-number win-list)))))))<br>'
        },
        {
          function : 'ecb-window-config-cache-add',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Add ECB-WINDOW-CONFIG to the `ecb-window-config-cache"-ring. The new config<br>will be added as the newest (last) item. If the cache is full (see<br>`ecb-window-config-cache-size"), dump the oldest item to make room."',
          prototype : '(defun ecb-window-config-cache-add (ecb-window-config)',
          parameter : 'ecb-window-config',
          lispcode : '(defun ecb-window-config-cache-add (ecb-window-config)<br>  (ecb-window-config-cache-init)<br>  (ecb-ring-insert ecb-window-config-cache ecb-window-config))'
        },
        {
          function : 'ecb-window-config-cache-clear',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Clear the cache."',
          prototype : '(defun ecb-window-config-cache-clear ()',
          parameter : '',
          lispcode : '(defun ecb-window-config-cache-clear ()<br>  (setq ecb-window-config-cache nil))<br>'
        },
        {
          function : 'ecb-window-config-cache-get',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Get the cache-element for the EMACS-WINDOW-CONFIG which is<br>window-configuration-object like returned by `current-window-configuration".<br>If the cache does not contain such an element then nil is returned."',
          prototype : '(defun ecb-window-config-cache-get (emacs-window-config)',
          parameter : 'emacs-window-config',
          lispcode : '(defun ecb-window-config-cache-get (emacs-window-config)<br>  (if (and (ecb-ring-p ecb-window-config-cache)<br>           (not (ecb-ring-empty-p ecb-window-config-cache)))<br>      (let ((configs (ecb-ring-elements ecb-window-config-cache)))<br>        (assq emacs-window-config configs))))'
        },
        {
          function : 'ecb-window-config-cache-get-latest',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Get the newest (last) cache-item."',
          prototype : '(defun ecb-window-config-cache-get-latest ()',
          parameter : '',
          lispcode : '(defun ecb-window-config-cache-get-latest ()<br>  (if (and (ecb-ring-p ecb-window-config-cache)<br>           (not (ecb-ring-empty-p ecb-window-config-cache)))<br>      (ecb-ring-ref ecb-window-config-cache 0)))'
        },
        {
          function : 'ecb-window-config-cache-init',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Initialize the cache as a ring of size `ecb-window-config-cache-size" if<br>not already initialized."',
          prototype : '(defun ecb-window-config-cache-init ()',
          parameter : '',
          lispcode : '(defun ecb-window-config-cache-init ()<br>  (or (ecb-ring-p ecb-window-config-cache)<br>      (setq ecb-window-config-cache<br>            (ecb-make-ring ecb-window-config-cache-size))))'
        },
        {
          function : 'ecb-window-configuration-data',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return current window configuration of the ecb-frame as a list with the<br>following structure:<br>1. The number of the edit-window if point is one of the edit-windows, nil<br>   otherwise<br>2. current point if one of the edit-windows is selected, nil otherwise.<br>3. Data of all edit-windows in form of a list: Everey listelement is a list<br>   again with first subelement is the buffer of an edit-window, second<br>   subelement is the `window-start" of this window, third is the<br>   `window-point" and fourth subelement is the result of `ecb-get-window-size"<br>   for this window. This data-list has the same ordering as<br>   `ecb-canonical-edit-windows-list".<br>4. Data of the compile window or nil (if there is no compile-window visible):<br>   List with first elem is the buffer of the compile-window, second elem is<br>   current point of the compile-buffer if the compile-window is selected<br>   (otherwise nil) and third elem is the current height of the<br>   compile-window.<br>5. The window sizes of the ecb-windows as returned by<br>   `ecb-get-ecb-window-sizes""',
          prototype : '(defun ecb-window-configuration-data ()',
          parameter : '',
          lispcode : '(defun ecb-window-configuration-data ()<br>  (let* ((win-list (ecb-canonical-windows-list))<br>         (edit-win-list (ecb-canonical-edit-windows-list win-list))<br>         (ecb-win-list (ecb-canonical-ecb-windows-list win-list))<br>         (point-pos (ecb-where-is-point win-list))<br>         (edit-area-size (ecb-get-edit-area-size win-list)))<br>    (list (if (equal <tick>edit (car point-pos)) (cdr point-pos))<br>          (if (equal <tick>edit (car point-pos)) (point))<br>          (mapcar (function (lambda (win)<br>                              (list (window-buffer win)<br>                                    (window-start win)<br>                                    (window-point win)<br>                                    (ecb-get-window-size win nil edit-area-size))))<br>                  edit-win-list)<br>          (if (equal <tick>visible (ecb-compile-window-state))<br>              (list (window-buffer ecb-compile-window)<br>                    (if (equal (car point-pos) <tick>compile) (point))<br>                    (ecb-window-full-height ecb-compile-window)))<br>          (ecb-get-ecb-window-sizes nil ecb-win-list)<br>          )))<br>'
        },
        {
          function : 'ecb-window-configuration-invalidp',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return non nil when WINDOW-CONFIG is probably not valid anymore.<br>WINDOW-CONFIG must be got from the adviced version of<br>`current-window-configuration"."',
          prototype : '(defun ecb-window-configuration-invalidp (window-config)',
          parameter : 'window-config',
          lispcode : '(defun ecb-window-configuration-invalidp (window-config)<br>  (not (equal (nth 3 window-config)<br>              (list ecb-frame ecb-layout-name ecb-compile-window-height<br>                    ecb-compile-window-width<br>                    ecb-windows-width ecb-windows-height))))<br>'
        },
        {
          function : 'ecb-window-in-window-list-number',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return the number of WINDOW in the window-list WIN-LIST.<br>The left-top-most window of the frame has number 1. The other windows have<br>the same ordering as `other-window" would walk through the frame.<br><br>If WINDOW is nil then the currently selected window is used."',
          prototype : '(defun ecb-window-in-window-list-number (win-list &optional window)',
          parameter : 'win-list &optional window',
          lispcode : '(defun ecb-window-in-window-list-number (win-list &optional window)<br>  (let ((win-number (ecb-position (or window (selected-window)) win-list)))<br>    (if win-number (1+ win-number) nil)))<br>'
        },
        {
          function : 'ecb-window-live-p',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return not nil if buffer BUFFER-OR-NAME is displayed in an active window."',
          prototype : '(defun ecb-window-live-p (buffer-or-name)',
          parameter : 'buffer-or-name',
          lispcode : '(defun ecb-window-live-p (buffer-or-name)<br>  (and buffer-or-name (window-live-p (get-buffer-window buffer-or-name))))'
        },
        {
          function : 'ecb-window-safely-shrinkable-p',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Non-nil if the WINDOW can be shrunk without shrinking other windows.<br>If WINDOW is nil or omitted, it defaults to the currently selected window."',
          prototype : '(defun ecb-window-safely-shrinkable-p (&optional window)',
          parameter : '&optional window',
          lispcode : '(defun ecb-window-safely-shrinkable-p (&optional window)<br>  (with-selected-window (or window (selected-window))<br>    (let ((edges (ecb-window-edges)))<br>      (or (= (nth 2 edges) (nth 2 (ecb-window-edges (previous-window))))<br>	  (= (nth 0 edges) (nth 0 (ecb-window-edges (next-window))))))))'
        },
        {
          function : 'ecb-window-select',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Select that window which displays in the `ecb-frame" the buffer<br>BUFFER-OR-NAME which can be either a buffer-object or a buffer-name. Return<br>the window-object. If that buffer is not displayed in the `ecb-frame" then<br>nothing happens and nil is returned."',
          prototype : '(defun ecb-window-select (buffer-or-name)',
          parameter : 'buffer-or-name',
          lispcode : '(defun ecb-window-select (buffer-or-name)<br>  (let ((window (get-buffer-window buffer-or-name ecb-frame)))<br>    (if window<br>	(select-window window)<br>      nil)))<br><br>'
        },
        {
          function : 'ecb-window-sync',
          filename : 'ecb/ecb.el',
          docstring : '  "Synchronizes all special ECB-buffers with current buffer.<br>Depending on the contents of current buffer this command performs different<br>synchronizing tasks but only if ECB is active and point stays in an<br>edit-window.<br><br>- If current buffer is a file-buffer (or an indirect-buffer with a<br>  file-buffer as base-buffer) then all special ECB-buffers are<br>  synchronized with current buffer.<br><br>- If current buffer is a dired-buffer then the directory- and<br>  the sources-tree-buffer are synchronized if visible<br><br>In addition to this all the synchronizing hooks (e.g.<br>`ecb-basic-buffer-sync-hook") run if the related ecb-buffers are visible in an<br>ecb-window."',
          prototype : '(defun ecb-window-sync ()',
          parameter : '',
          lispcode : '(defun ecb-window-sync ()<br>  (interactive)<br>  ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: XXXXXXXXX remove the args!!!'
        },
        {
          function : 'ecb-windows-all-displayed',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return not nil if all ecb-windows are displayed.<br>If HIDDEN-STATE is not nil then it must be of the same type as<br>`ecb-windows-hidden-state". If nil then the value of<br>`ecb-windows-hidden-state" is used. This function has a<br>"binary" semantic: a return value of not nil means that all<br>ecb-windows of current layout are displayed and a return value of<br>nil means that either no or only some but not all ecb-windows are<br>displayed."',
          prototype : '(defun ecb-windows-all-displayed (&optional hidden-state)',
          parameter : '&optional hidden-state',
          lispcode : '(defun ecb-windows-all-displayed (&optional hidden-state)<br>  (let ((state (or hidden-state ecb-windows-hidden-state)))<br>    (equal state ecb-windows-hidden-none-value)))'
        },
        {
          function : 'ecb-windows-all-hidden',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return not nil if all ecb-windows are hidden.<br>If HIDDEN-STATE is not nil then it must be of the same type as<br>`ecb-windows-hidden-state". If nil then the value of<br>`ecb-windows-hidden-state" is used.<br>This function has a "binary" semantic: a return value of nil<br>means that some or all ecb-windows of current layout are displayed and a<br>return value of not nil means that all ecb-windows are hidden."',
          prototype : '(defun ecb-windows-all-hidden (&optional hidden-state)',
          parameter : '&optional hidden-state',
          lispcode : '(defun ecb-windows-all-hidden (&optional hidden-state)<br>  (let ((state (or hidden-state ecb-windows-hidden-state)))<br>    (equal state ecb-windows-hidden-all-value)))'
        },
        {
          function : 'ecb-windows-hidden-state-list',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return the hidden-state of the ecb-windows as list.<br>If HIDDEN-STATE is not nil then it must be of the same type as<br>`ecb-windows-hidden-state". If nil then the value of<br>`ecb-windows-hidden-state" is used.<br><br>The return value is either nil if all ecb-windows are displayed<br>(i.e. no ecb-windows are hidden) or a list which sides of the<br>ecb-frame are hidden. This list contains an appropriate set of<br>symbols of "left-side, "right-side or "top-side."',
          prototype : '(defun ecb-windows-hidden-state-list (&optional hidden-state)',
          parameter : '&optional hidden-state',
          lispcode : '(defun ecb-windows-hidden-state-list (&optional hidden-state)<br>  (let ((state (or hidden-state ecb-windows-hidden-state)))<br>    (cl-case state<br>      (all (cl-case (ecb-get-layout-type)<br>             (left-right <tick>(left-side right-side))<br>             (left <tick>(left-side))<br>             (right <tick>(right-side))<br>             (top <tick>(top-side))))<br>      (none nil)<br>      (otherwise (list state)))))'
        },
        {
          function : 'ecb-windows-toggled-hidden-state',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Return the current hidden-state toggled.<br>If HIDDEN-STATE is not nil then it must be of the same type as<br>`ecb-windows-hidden-state". If nil then the value of<br>`ecb-windows-hidden-state" is used.<br><br>For all layout-types except left-right this is "none when current state is<br>"all and vice versa.<br><br>For the layout-type left-right this depends on the value of the option<br>"ecb-left-right-layout-hide-sequence": It is the successor of the<br>current-state in that list. If current-state is the last element in that list<br>the toggled state is the first element of that list."',
          prototype : '(defun ecb-windows-toggled-hidden-state (&optional hidden-state)',
          parameter : '&optional hidden-state',
          lispcode : '(defun ecb-windows-toggled-hidden-state (&optional hidden-state)<br>  (let ((state (or hidden-state ecb-windows-hidden-state)))<br>    (if (equal (ecb-get-layout-type) <tick>left-right)<br>        (ecb-next-listelem ecb-left-right-layout-hide-sequence state)<br>      (if (ecb-windows-all-displayed)<br>          <tick>all<br>        <tick>none))))'
        },
        {
          function : 'ecb-winman-escreen-disable-support',
          filename : 'ecb/ecb-winman-support.el',
          docstring : '  "Disable the escreen-support of ECB."',
          prototype : '(defun ecb-winman-escreen-disable-support ()',
          parameter : '',
          lispcode : '(defun ecb-winman-escreen-disable-support ()<br>  (interactive)<br>  (ecb-disable-advices <tick>ecb-winman-escreen-adviced-functions t)<br>  (when (featurep <tick>escreen)<br>    (remove-hook <tick>escreen-goto-screen-hook<br>                 <tick>ecb-winman-escreen-goto-escreen-hook)))<br>'
        },
        {
          function : 'ecb-winman-escreen-enable-support',
          filename : 'ecb/ecb-winman-support.el',
          docstring : '  "Load the escreen-library and enable the ECB-support for it.<br>This does not install or activate escreen! For this you have still to call<br>`escreen-install"! For further documentation about escreen see the file<br>escreen.el!"',
          prototype : '(defun ecb-winman-escreen-enable-support ()',
          parameter : '',
          lispcode : '(defun ecb-winman-escreen-enable-support ()<br>  (interactive)<br>  (if (locate-library <apo>escreen<apo>)<br>      (condition-case nil<br>          (progn<br>            (require <tick>escreen)<br>            (ecb-enable-advices <tick>ecb-winman-escreen-adviced-functions)<br>            (add-hook <tick>escreen-goto-screen-hook<br>                      <tick>ecb-winman-escreen-goto-escreen-hook)<br>            (ecb-info-message <apo>Support for escreen enabled.<apo>))<br>        (error<br>         (ecb-winman-escreen-disable-support)<br>         (ecb-error <apo>The escreen-support can not be properly installed!<apo>)))<br>    (ecb-error <apo>The library escreen.el can not be found!<apo>)))<br>'
        },
        {
          function : 'ecb-winman-escreen-goto-escreen-hook',
          filename : 'ecb/ecb-winman-support.el',
          docstring : '  "Activate ECB if we go to the escreen with number `ecb-escreen-number"."',
          prototype : '(defun ecb-winman-escreen-goto-escreen-hook ()',
          parameter : '',
          lispcode : '(defun ecb-winman-escreen-goto-escreen-hook ()<br>  (if (and (boundp <tick>ecb-minor-mode)<br>           (not ecb-minor-mode)<br>           (= escreen-current-screen-number<br>              ecb-winman-escreen-number))<br>      (let ((ecb-split-edit-window-after-start <tick>before-deactivation))<br>        (ecb-activate))))'
        },
        {
          function : 'ecb-winman-winring-disable-support',
          filename : 'ecb/ecb-winman-support.el',
          docstring : '  "Disable the winring-support of ECB."',
          prototype : '(defun ecb-winman-winring-disable-support ()',
          parameter : '',
          lispcode : '(defun ecb-winman-winring-disable-support ()<br>  (interactive)<br>  (ecb-disable-advices <tick>ecb-winman-winring-adviced-functions t))<br>'
        },
        {
          function : 'ecb-winman-winring-enable-support',
          filename : 'ecb/ecb-winman-support.el',
          docstring : '  "Load the winring-library and enable the ECB-support for it.<br>This does not install or activate winring! For this you have still to call<br>`winring-initialize"! For further documentation about winring see the file<br>winring.el!"',
          prototype : '(defun ecb-winman-winring-enable-support ()',
          parameter : '',
          lispcode : '(defun ecb-winman-winring-enable-support ()<br>  (interactive)<br>  (if (locate-library <apo>winring<apo>)<br>      (condition-case nil<br>          (progn<br>            (require <tick>winring)<br>            (ecb-enable-advices <tick>ecb-winman-winring-adviced-functions)<br>            (ecb-info-message <apo>Support for winring enabled.<apo>))<br>        (error<br>         (ecb-winman-winring-disable-support)<br>         (ecb-error <apo>The winring-support can not be properly installed!<apo>)))<br>    (ecb-error <apo>The library winring.el can not be found!<apo>)))'
        },
        {
          function : 'ecb-working-celeron-display',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return a string displaying a celeron as things happen.<br>LENGTH is the amount of display that has been used.  NUMBER<br>is t to display the done string, or the number to display."',
          prototype : '(defun ecb-working-celeron-display (length number)',
          parameter : 'length number',
          lispcode : '(defun ecb-working-celeron-display (length number)<br>  (cl-case number<br>    ((t)<br>     (ecb-working-frame-animation-display length [ <apo>[<apo> <apo>]<apo> ]<br>					  ecb-working-celeron-strings))<br>    ;; All the % signs because it then gets passed to message.<br>    (otherwise<br>     (ecb-working-frame-animation-display length number<br>                                          ecb-working-celeron-strings))))<br>'
        },
        {
          function : 'ecb-working-dynamic-status',
          filename : 'ecb/ecb-util.el',
          docstring : '  "show the status. If NUMBER is nil, then increment a local NUMBER from 0<br>with each call. If it is a number or float, use it as the raw percentile."',
          prototype : '(defun ecb-working-dynamic-status (&optional number)',
          parameter : '&optional number',
          lispcode : '(defun ecb-working-dynamic-status (&optional number)<br>  (let* ((n (or number ecb-working-ref1))<br>         (m1 (funcall <tick>format ecb-working-message))<br>         (m2 (ecb-working-celeron-display (length m1) n)))<br>    (ecb-nolog-message <apo>%s%s<apo> m1 m2)<br>    (setq ecb-working-ref1 (1+ ecb-working-ref1))))'
        },
        {
          function : 'ecb-working-frame-animation-display',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Manage a simple frame-based animation for working functions.<br>LENGTH is the number of characters left.  NUMBER is a passed in<br>number (which happens to be ignored.).  While coders pass t into<br>NUMBER, functions using this should convert NUMBER into a vector<br>describing how to render the done message.<br>Argument FRAMES are the frames used in the animation."',
          prototype : '(defun ecb-working-frame-animation-display (length number frames)',
          parameter : 'length number frames',
          lispcode : '(defun ecb-working-frame-animation-display (length number frames)<br>  (cl-typecase number<br>    (vector<br>     (let ((zone (- (length (aref frames 0)) (length (aref number 0))<br>                    (length (aref number 1)))))<br>       (if (< (length ecb-working-donestring) zone)<br>           (concat <apo> <apo> (aref number 0)<br>                   (make-string<br>                    (ceiling (/ (- (float zone)<br>                                   (length ecb-working-donestring)) 2)) ? )<br>                   ecb-working-donestring<br>                   (make-string<br>                    (floor (/ (- (float zone)<br>                                 (length ecb-working-donestring)) 2)) ? )<br>                   (aref number 1))<br>         (concat <apo> <apo> (aref frames (% ecb-working-ref1 (length frames)))<br>                 <apo> <apo> ecb-working-donestring))))<br>    (otherwise<br>     (concat <apo> <apo> (aref frames (% ecb-working-ref1 (length frames)))))))'
        },
        {
          function : 'ecb-working-status-call-process',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Display working messages while running a process.<br>TIMEOUT is how fast to display the messages.<br>MESSAGE is the message to show, and DONESTR is the string to add when done.<br>CALLPROCESSARGS are the same style of args as passed to `call-process".<br>The are: PROGRAM, INFILE, BUFFER, DISPLAY, and ARGS.<br>Since it actually calls `start-process", not all features will work.<br>It returns the exit-status of the called PROGRAM."',
          prototype : '(defun ecb-working-status-call-process  (timeout message donestr program &optional infile buffer display &rest args)',
          parameter : 'timeout message donestr program &optional infile buffer display &rest args',
          lispcode : '(defun ecb-working-status-call-process<br>  (timeout message donestr program &optional infile buffer display &rest args)<br>  (ecb-working-status-timeout timeout message donestr<br>    (let* ((process-environment (cons <apo>LC_ALL=C<apo> process-environment))<br>           (proc (apply <tick>start-process <apo>ecb-working<apo><br>                        (if (listp buffer) (car buffer) buffer)<br>                        program args)))<br>      (set-process-sentinel proc <tick>list)<br>      (while (eq (process-status proc) <tick>run)<br>	(accept-process-output proc)<br>	;; accept-process-output caused my Solaris Emacs 20.3 to crash.<br>	;; If this is unreliable for you, use the below which will work<br>	;; in that situation.'
        },
        {
          function : 'silentcomp-is-compiling',
          filename : 'ecb/silentcomp.el',
          docstring : '  "Return non-nil if eval"ed during compilation.  Don"t use outside<br>`eval-when-compile"."',
          prototype : '(defun silentcomp-is-compiling ()',
          parameter : '',
          lispcode : '(defun silentcomp-is-compiling ()<br>  (and (boundp <tick>byte-compile-dest-file)<br>       (stringp byte-compile-dest-file)))'
        },
        {
          function : 'silentcomp-restore-environment',
          filename : 'ecb/silentcomp.el',
          parameter : '',
          lispcode : '(defun silentcomp-restore-environment ()<br>  ;; Eval<tick>ed during compilation to restore variables, functions etc<br>  ;; declared with <backtick>silentcomp-defvar<tick> et al.<br>  (if (not load-in-progress)<br>      (let (p)<br>	(setq p silentcomp-unbound-variables)<br>	(while p<br>	  (let ((var (car p)))<br>	    (if (and (boundp var)<br>		     (eq (intern (concat <apo>silentcomp-ignore-var:<apo><br>					 (symbol-name var)))<br>			 var))<br>		(makunbound var)))<br>	  (setq p (cdr p)))<br>	(setq p silentcomp-original-functions)<br>	(while p<br>	  (let ((fun (car (car p)))<br>		(def (car (cdr (cdr (car p))))))<br>	    (if (and (fboundp fun)<br>		     (eq (intern (concat <apo>silentcomp-ignore-fun:<apo><br>					 (symbol-name fun)))<br>			 (symbol-function fun)))<br>		(if (eq def <tick>unbound)<br>		    (fmakunbound fun)<br>		  (fset fun def))))'
        },
        {
          function : 'tree-buffer-add-image-icon-maybe',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Add IMAGE-ICON to STR between START (incl.) and START+LEN (excl.). If<br>IMAGE-ICON is not nil (which must be an image-object in the sense of<br>Emacs) then add this image to STR otherwise do nothing. Normally<br>IMAGE-ICON should be either nil or an image-object returned by<br>`tree-buffer-find-image". Always return STR. If IMAGE-ICON is nil or<br>`tree-buffer-real-style" returns not "image then START and LEN are ignored!<br>If an image is added then two text-properties are added to the full length of<br>STR: "tree-buffer-image-start which holds START as value and<br>"tree-buffer-image-length which holds LEN as value."',
          prototype : '(defun tree-buffer-add-image-icon-maybe (start len str image-icon)',
          parameter : 'start len str image-icon',
          lispcode : '(defun tree-buffer-add-image-icon-maybe (start len str image-icon)<br>  (when (equal <tick>image (tree-buffer-real-style))<br>    ;; Regular images (created with <backtick>insert-image<tick> are intangible<br>    ;; which (I suppose) make them more compatible with XEmacs 21.<br>    ;; Unfortunately, there is a giant pile of code dependent on the<br>    ;; underlying text.  This means if we leave it tangible, then I<br>    ;; don<tick>t have to change said giant piles of code.<br>    (when image-icon<br>      (add-text-properties start (+ start len)<br>                           (list <tick>display image-icon<br>                                 <tick>rear-nonsticky (list <tick>display))<br>                           str)'
        },
        {
          function : 'tree-buffer-add-node',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Insert NODE in current tree-buffer at point.<br>The indentation is the concatenation of INDENT-STR-FIRST-SEGS and<br>INDENT-STR-LAST-SEG. If LAST-CHILDREN is not nil then NODE is the last<br>children of its parent-node; this means it must be displayed with an<br>end-guide."',
          prototype : '(defun tree-buffer-add-node (node indent-str-first-segs indent-str-last-seg                                  &optional last-children)',
          parameter : 'node indent-str-first-segs indent-str-last-seg &optional last-children',
          lispcode : '(defun tree-buffer-add-node (node indent-str-first-segs indent-str-last-seg<br>                                  &optional last-children)<br>  ;; here we save the indentstr in the node itself - we do this as first step<br>  ;; so all following steps can use the indentstr from the node itself<br>  (when (tree-buffer-spec->ascii-guide-face tree-buffer-spec)<br>    (put-text-property 0 (length indent-str-first-segs)<br>                       <tick>face (tree-buffer-spec->ascii-guide-face tree-buffer-spec)<br>                       indent-str-first-segs)<br>    (put-text-property 0 (length indent-str-last-seg)<br>                       <tick>face (tree-buffer-spec->ascii-guide-face tree-buffer-spec)<br>                       indent-str-last-seg))<br>  (setf (tree-node->indentstr node)<br>        (concat indent-str-first-segs indent-str-last-seg))<br><br>  ;; insert the node indentation<br>  (insert (tree-node->indentstr node))<br>  ;; insert the node with all its symbols - either as image or ascii and add<br>  ;; the node to the <backtick>tree-buffer-displayed-nodes<tick><br>  (tree-buffer-insert-node-display node)<br>  (tree-buffer-add-to-displayed-nodes node)<br><br>  ;; compute the indentation-strings for the children and run recursive for<br>  ;; each child<br>  (when (tree-node->expanded node)<br>    (let* ((number-of-childs (length (tree-node->children node)))<br>           (counter 0)<br>           (guide-strings (tree-buffer-gen-guide-strings))<br>           (guide-str (nth 1 guide-strings))<br>           (guide-end-str (nth 2 guide-strings))<br>           (no-guide-str (nth 3 guide-strings))<br>           (indent-str-last-seg-copy (copy-sequence indent-str-last-seg))<br>           (next-indent-str-first-segs<br>            (if (= 0 (length indent-str-last-seg-copy))<br>                <apo><apo><br>              (concat indent-str-first-segs<br>                      (if last-children<br>                          (tree-buffer-add-image-icon-maybe<br>                           2 1<br>                           (tree-buffer-add-image-icon-maybe<br>                            0 2 no-guide-str<br>                            (tree-buffer-find-image <apo>no-guide<apo>))<br>                           (tree-buffer-find-image <apo>no-handle<apo>))<br>                        (tree-buffer-add-image-icon-maybe<br>                         2 1<br>                         (tree-buffer-aset<br>                          indent-str-last-seg-copy<br>                          (1- (cond ((equal <tick>image (tree-buffer-real-style))<br>                                     tree-buffer-indent-with-images)<br>                                    ((tree-buffer-spec->expand-symbol-before-p<br>                                      tree-buffer-spec)<br>                                     tree-buffer-indent-w/o-images-before-min)<br>                                    (t<br>                                     tree-buffer-indent-w/o-images-after-min)))<br>                          ? )<br>                         (tree-buffer-find-image <apo>no-handle<apo>))))))<br>           (next-indent-str-last-seg-std<br>            (tree-buffer-add-image-icon-maybe<br>             2 1<br>             (tree-buffer-add-image-icon-maybe<br>              0 2 guide-str<br>              (tree-buffer-find-image <apo>guide<apo>))<br>             (tree-buffer-find-image <apo>handle<apo>)))<br>           (next-indent-str-last-seg-end<br>            (tree-buffer-add-image-icon-maybe<br>             2 1<br>             (tree-buffer-add-image-icon-maybe<br>              0 2 guide-end-str<br>              (tree-buffer-find-image <apo>end-guide<apo>))<br>             (tree-buffer-find-image <apo>handle<apo>))))<br>      (dolist (node (tree-node->children node))'
        },
        {
          function : 'tree-buffer-arrow-pressed',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Perform smart arrow-key navigation/movement."',
          prototype : '(defun tree-buffer-arrow-pressed ()',
          parameter : '',
          lispcode : '(defun tree-buffer-arrow-pressed ()<br>  (interactive)<br>  (unless (not (equal (selected-frame) tree-buffer-frame))<br>    (let ((node (tree-buffer-get-node-at-point))<br>          (arrow-key (tree-buffer-event-to-key last-command-event)))<br>      (cl-case arrow-key<br>        (up<br>         (forward-line -1)<br>         (beginning-of-line)<br>         (re-search-forward tree-buffer-incr-searchpattern-indent-prefix nil t))<br>        (down<br>         (forward-line 1)<br>         (beginning-of-line)<br>         (re-search-forward tree-buffer-incr-searchpattern-indent-prefix nil t))<br>        (right<br>         (if (and (tree-node->expandable node)<br>                  (not (tree-node->expanded node)))<br>             (tree-buffer-tab-pressed)<br>           ;; jump to the first subnode<br>           (forward-line 1)<br>           (beginning-of-line)<br>           (re-search-forward tree-buffer-incr-searchpattern-indent-prefix nil t)))<br>        (left<br>         (if (tree-node->expanded node)<br>             (tree-buffer-tab-pressed)<br>           ;; jump to next higher node<br>           (let* ((new-indent-factor (/ (max 0 (- (tree-node-indentlength node)<br>                                                  (tree-buffer-spec->tree-indent<br>                                                   tree-buffer-spec)))<br>                                        (tree-buffer-spec->tree-indent tree-buffer-spec)))<br>                  (search-string<br>                   (concat (tree-buffer-gen-searchpattern-indent-prefix new-indent-factor)<br>                           <apo>[^ <backtick>|]<apo>)))<br>             (re-search-backward search-string nil t)<br>             (beginning-of-line)<br>             (re-search-forward tree-buffer-incr-searchpattern-indent-prefix nil t))))))))'
        },
        {
          function : 'tree-buffer-build-tree-buffer-display',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Rebuild the variable `tree-buffer-displayed-nodes" from the current<br>children of `tree-buffer-root". This also builds the display of current<br>tree-buffer from scratch. This functions expects the current tree-buffer to be<br>empty!"',
          prototype : '(defun tree-buffer-build-tree-buffer-display ()',
          parameter : '',
          lispcode : '(defun tree-buffer-build-tree-buffer-display ()<br>  (tree-buffer-initialize-displayed-nodes)<br>  (dolist (node (tree-node->children tree-buffer-root))<br>    (tree-buffer-add-node node <apo><apo> <apo><apo>)))'
        },
        {
          function : 'tree-buffer-clear-tree',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Clear current tree-buffer, i.e. remove all children of the root-node"',
          prototype : '(defun tree-buffer-clear-tree ()',
          parameter : '',
          lispcode : '(defun tree-buffer-clear-tree ()<br>  (dolist (child (tree-node->children (tree-buffer-get-root)))<br>    (tree-buffer-remove-node child)))'
        },
        {
          function : 'tree-buffer-copy-list',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return a copy of a LIST, which may be a dotted list.<br>The elements of the list are not copied, just the list structure itself."',
          prototype : '(defun tree-buffer-copy-list (list)',
          parameter : 'list',
          lispcode : '(defun tree-buffer-copy-list (list)<br>  (if (fboundp <tick>copy-sequence)<br>      (copy-sequence list)<br>    (if (consp list)<br>        (let ((res nil))<br>          (while (consp list) (push (pop list) res))<br>          (prog1 (nreverse res) (setcdr res list)))<br>      (car list))))'
        },
        {
          function : 'tree-buffer-count-subnodes-to-display',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Returns the number of ALL subnodes of NODE which will currently be displayed<br>if NODE is expanded, means the number of all the children of NODE (if NODE is<br>expanded) plus recursive the number of the children of each expanded child.<br>Example:<br>[-] NODE<br>    [+] child 1<br>    [-] child 2<br>        [+] child 2.1<br>        [-] child 2.2<br>            [+] child 2.2.1<br>            [+] child 2.2.2<br>        [+] child 2.3<br>    [-] child 3<br>        [+] child 3.1<br>    [+] child 4<br>The result for NODE here is 10"',
          prototype : '(defun tree-buffer-count-subnodes-to-display (node)',
          parameter : 'node',
          lispcode : '(defun tree-buffer-count-subnodes-to-display (node)<br>  (let ((result 0))<br>    (when (and (tree-node->expandable node)<br>               (tree-node->expanded node))<br>      (setq result (+ result (length (tree-node->children node))))<br>      (dolist (child (tree-node->children node))<br>        (setq result (+ result (tree-buffer-count-subnodes-to-display child)))))<br>    result))'
        },
        {
          function : 'tree-buffer-create-menu',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Creates a popup menu from the list MENU-ITEMS.<br>MENU-ITEMS is a list of elements of the following type: Each element defines a<br>new menu-entry and is either:<br><br>a) Menu-command: A list containing two sub-elements, whereas the first is the<br>   function (a function symbol) being called if the menu-entry is selected<br>   and the second is the name of the menu-entry.<br>b) Separator: A one-element-list and the element is the string "---": Then a<br>   non-selectable menu-separator is displayed.<br>c) Submenu: A list where the first element is the title of the submenu<br>   displayed in the main-menu and all other elements are either menu-commands<br>   (see a) or separators (see b) or another submenu (see c). This allows<br>   deep nested menu-submenu-structures!<br><br>If optional arg NODE-COMMANDS-P is not nil then the function of a<br>menu-commands will be called with a tree-node argument. Otherwise the<br>menu-commands will be called with no argument.<br><br>If NODE-COMMANDS-P is not nil then the function of a menu-command must follow<br>the following guidelines: Such a function must be defined with the macro<br>`tree-buffer-defpopup-command"! This macro defines a new popup-command whereas<br>the newly defined command gets one argument NODE. See the docstring of<br>`tree-buffer-defpopup-command" for further details.<br><br>Example for the definition of such a popupmenu-command:<br><br>(tree-buffer-defpopup-command ecb-my-special-dir-popup-function<br>  "Prints the name of the directory of the node under point."<br>  (let ((node-data=dir (tree-node->data node)))<br>     (message "Dir under node: %s" node-data=dir)))"',
          prototype : '(defun tree-buffer-create-menu (menu-items &optional node-commands-p)',
          parameter : 'menu-items &optional node-commands-p',
          lispcode : '(defun tree-buffer-create-menu (menu-items &optional node-commands-p)<br>  (when menu-items<br>    (tree-buffer-create-menu-emacs menu-items <apo>dummy-name<apo>)))<br>'
        },
        {
          function : 'tree-buffer-create-menu-emacs',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Create an Emacs-menu for MENU-DEF with name MENU-NAME.<br>MENU-DEF must have the same format as the first argument of<br>`tree-buffer-create-menu"."',
          prototype : '(defun tree-buffer-create-menu-emacs (menu-def menu-name)',
          parameter : 'menu-def menu-name',
          lispcode : '(defun tree-buffer-create-menu-emacs (menu-def menu-name)<br>  (let ((map (make-sparse-keymap menu-name))<br>        (counter 0)<br>        (menu-items (reverse menu-def)))<br>    (dolist (item menu-items)<br>      (cond ((string= (car item) <apo>---<apo>)<br>             (define-key map<br>               (make-vector 1<br>                            (setq counter (1+ counter)))<br>               (list <apo>---<apo>)))<br>            ((stringp (cadr item)) ;; menu-entry<br>             (define-key map<br>               (make-vector 1<br>                            (setq counter (1+ counter)))<br>               (cons (cadr item) (car item))))<br>            (t ;; submenu<br>             (define-key map<br>               (make-vector 1<br>                            (setq counter (1+ counter)))<br>               (cons (car item)<br>                     (tree-buffer-create-menu-emacs (cdr item) (car item)))))))<br>    map))<br>'
        },
        {
          function : 'tree-buffer-create-menu-xemacs',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Create a XEmacs-menu for MENU-DEF.<br>If optional arg NODE-COMMANDS-P is not nil then the menu-commands will be<br>called with the current node at point. Otherwise the menu-commands will be<br>called with no argument. MENU-DEF must have the same format as the first<br>argument of `tree-buffer-create-menu"."',
          prototype : '(defun tree-buffer-create-menu-xemacs (menu-def &optional node-commands-p)',
          parameter : 'menu-def &optional node-commands-p',
          lispcode : '(defun tree-buffer-create-menu-xemacs (menu-def &optional node-commands-p)<br>  (when menu-def<br>    (let ((item (car menu-def)))<br>      (cons (cond ((string= (car item) <apo>---<apo>)<br>		   (car item))<br>		  ((stringp (cadr item)) ;; menu-entry<br>                   (let ((v (make-vector 3 t)))<br>                     (aset v 0 (cadr item))<br>                     (aset v 1 (delq nil<br>                                     (list (car item)<br>                                           (and node-commands-p<br>                                                <tick>(tree-buffer-get-node-at-point)))))<br>                     (aset v 2 t)<br>                     v))<br>		  (t ;; submenu<br>                   <backtick>(,(car item)<br>                     ,@(tree-buffer-create-menu-xemacs (cdr item)<br>                                                       node-commands-p))))<br>	    (tree-buffer-create-menu-xemacs (cdr menu-def) node-commands-p)))))'
        },
        {
          function : 'tree-buffer-create-menus',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Creates a popup menus from an assoc list with menus.<br>MENUS is an assoc list containing cons-cells of the form:<br>The car is a node-type (see slot TYPE of a tree-node) and the cdr is a menu<br>in the sense of `tree-buffer-create-menu", i.e. the cdr is a list of<br>menu-items expected as argument by `tree-buffer-create-menu".<br><br>For a description of NODE-COMMAND-P see `tree-buffer-create-menu"."',
          prototype : '(defun tree-buffer-create-menus (menus &optional node-commands-p)',
          parameter : 'menus &optional node-commands-p',
          lispcode : '(defun tree-buffer-create-menus (menus &optional node-commands-p)<br>  (when menus<br>    (cons (cons (caar menus)<br>		(tree-buffer-create-menu (cdar menus) node-commands-p))<br>	  (tree-buffer-create-menus (cdr menus) node-commands-p))))'
        },
        {
          function : 'tree-buffer-create-mouse-key',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Create a mouse-key which can be bound to a command via `define-key".<br>BUTTON is the number of the mouse-button which can be 1, 2 or 3. TRIGGER<br>determines when the command is triggered, values can be "button-press and<br>"button-release. The third optional modifier can be one of the symbols "shift,<br>"control or "meta. The fourth optional argument KEY-QUALIFIER is only used by<br>GUN Emacs and can be an additional key-qualifier symbol like "mode-line or<br>"header-line."',
          prototype : '(defun tree-buffer-create-mouse-key (button trigger &optional modifier key-qualifier)',
          parameter : 'button trigger &optional modifier key-qualifier',
          lispcode : '(defun tree-buffer-create-mouse-key (button trigger &optional modifier key-qualifier)<br>  (let ((mouse-button (format <apo>%smouse-%d<apo><br>                         (if (equal trigger <tick>button-press)<br>                           <apo>down-<apo><br>                           <apo><apo>)<br>                          button))<br>        (modifier-elem (cl-case modifier<br>                         (shift <apo>S-<apo>)<br>                         (control <apo>C-<apo>)<br>                         (meta <apo>M-<apo>)<br>                         (otherwise <apo><apo>))))<br><br>    (if (and key-qualifier (symbolp key-qualifier))<br>        (vector key-qualifier (intern (concat modifier-elem mouse-button)))<br>      (vector (intern (concat modifier-elem mouse-button))))))'
        },
        {
          function : 'tree-buffer-debug-error',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Run ARGS through `format" and write it to the *Messages*-buffer.<br>Do nothing if `tree-buffer-debug-mode" is nil!"',
          prototype : '(defun tree-buffer-debug-error (&rest args)',
          parameter : '&rest args',
          lispcode : '(defun tree-buffer-debug-error (&rest args)<br>  (when tree-buffer-debug-mode<br>    (message (concat (format <apo>Tree-buffer-debug: [%s] <apo><br>                             (format-time-string <apo>%H:%M:%S<apo>))<br>                     (apply <tick>format args)))))<br>'
        },
        {
          function : 'tree-buffer-destroy',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Destroy the tree-buffer with name TREE-BUFFER-NAME. Does nothing if either<br>tree-buffer-name is not alive or if it is not a tree-buffer created with<br>`tree-buffer-create"."',
          prototype : '(defun tree-buffer-destroy (tree-buffer-name)',
          parameter : 'tree-buffer-name',
          lispcode : '(defun tree-buffer-destroy (tree-buffer-name)<br>  (when (and tree-buffer-name (member (get-buffer tree-buffer-name) tree-buffers))<br>    (setq tree-buffers (delq (get-buffer tree-buffer-name) tree-buffers))<br>    (ignore-errors (kill-buffer tree-buffer-name))))<br>'
        },
        {
          function : 'tree-buffer-display-in-general-face',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Apply the face in slot GENERAL-FACE of `tree-buffer-spec" of current<br>tree-buffer to current tree-buffer."',
          prototype : '(defun tree-buffer-display-in-general-face ()',
          parameter : '',
          lispcode : '(defun tree-buffer-display-in-general-face ()<br>  (when (tree-buffer-spec->general-face tree-buffer-spec)<br>    (tree-buffer-overlay-move tree-buffer-general-overlay<br>                              (point-min) (point-max))))'
        },
        {
          function : 'tree-buffer-displayed-node-linenr',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return the line-number of NODE in current tree-buffer.<br>Nodes are compared by `eq"."',
          prototype : '(defun tree-buffer-displayed-node-linenr (node)',
          parameter : 'node',
          lispcode : '(defun tree-buffer-displayed-node-linenr (node)<br>  (1+ (tree-buffer-displayed-node-nr node)))'
        },
        {
          function : 'tree-buffer-displayed-node-nr',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return the number of NODE in the node-sequence of current tree-buffer.<br>Nodes are compared by `eq"! Number is counted from 0 whereas the topmost<br>displayed node ha number 0."',
          prototype : '(defun tree-buffer-displayed-node-nr (node)',
          parameter : 'node',
          lispcode : '(defun tree-buffer-displayed-node-nr (node)<br>  (tree-buffer-position tree-buffer-displayed-nodes node <tick>eq))'
        },
        {
          function : 'tree-buffer-displayed-nodes-replace-node',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Replace NODE with NEW-NODE in `tree-buffer-displayed-nodes".<br>Return the updated list."',
          prototype : '(defun tree-buffer-displayed-nodes-replace-node (node new-node)',
          parameter : 'node new-node',
          lispcode : '(defun tree-buffer-displayed-nodes-replace-node (node new-node)<br>  (let ((memq-list (tree-buffer-member node tree-buffer-displayed-nodes <tick>eq)))<br>    (if memq-list<br>        (setcar memq-list new-node)))<br>  tree-buffer-displayed-nodes)'
        },
        {
          function : 'tree-buffer-empty-p',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return not nil if current tree-buffer is empty."',
          prototype : '(defun tree-buffer-empty-p ()',
          parameter : '',
          lispcode : '(defun tree-buffer-empty-p ()<br>  (= (point-min) (point-max)))'
        },
        {
          function : 'tree-buffer-event-buffer',
          filename : 'ecb/tree-buffer.el',
          parameter : 'event',
          lispcode : '(defun tree-buffer-event-buffer (event)<br>  (window-buffer (tree-buffer-event-window event)))'
        },
        {
          function : 'tree-buffer-event-point',
          filename : 'ecb/tree-buffer.el',
          parameter : 'event',
          lispcode : '(defun tree-buffer-event-point (event)<br>  (posn-point (event-start event)))'
        },
        {
          function : 'tree-buffer-event-to-key',
          filename : 'ecb/tree-buffer.el',
          parameter : 'event',
          lispcode : '(defun tree-buffer-event-to-key (event)<br>  (let ((type (event-basic-type event)))<br>    (cl-case type<br>      ((mouse-1 mouse-2 mouse-3) <tick>mouse-release)<br>      ((down-mouse-1 down-mouse-2 down-mouse-3) <tick>mouse-press)<br>      (otherwise (event-basic-type event)))))<br><br>;; overlay/extend stuff<br><br>  (defalias <tick>tree-buffer-make-overlay   <tick>make-overlay)<br>  (defalias <tick>tree-buffer-overlay-put    <tick>overlay-put)<br>  (defalias <tick>tree-buffer-overlay-move   <tick>move-overlay)<br>  (defalias <tick>tree-buffer-overlay-delete <tick>delete-overlay)<br>  (defalias <tick>tree-buffer-overlay-kill   <tick>delete-overlay)<br><br>;; timer stuff<br><br>  (defalias <tick>tree-buffer-run-with-idle-timer <tick>run-with-idle-timer)<br>  (defalias <tick>tree-buffer-cancel-timer <tick>cancel-timer)'
        },
        {
          function : 'tree-buffer-event-window',
          filename : 'ecb/tree-buffer.el',
          parameter : 'event',
          lispcode : '(defun tree-buffer-event-window (event)<br>  (posn-window (event-start event)))'
        },
        {
          function : 'tree-buffer-expand-node',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Expand the NODE up to an expand-level of LEVEL.<br><br>LEVEL specifies precisely which level of nodes should be expanded. LEVEL means<br>the indentation-level of the NODE itself and its (recursive) subnodes<br>relative to the NODE itself.<br><br>A LEVEL value X means that all (sub)nodes with an indentation-level <= X<br>relative to NODE are expanded and all other are collapsed. A negative LEVEL<br>value means that NODE is collapsed.<br><br>Examples:<br><br>- LEVEL = 0: If NODE is the root-node then this means expand only all nodes<br>  with no indentation at all. If NODE is any other node then this means expand<br>  only the NODE itself because it is the only node which has indentation 0 to<br>  itself. All deeper indented nodes will be collapsed.<br><br>- LEVEL = 1: If NODE is the root-node then this means expand all nodes with no<br>  indentation at all and all subnodes of these nodes - all deeper indented<br>  nodes will be collapsed. If NODE is any other node then this means expand<br>  the NODE itself and all of its direct subnodes - because only the direct<br>  subnodes of NODE have indentation-level 1 relativ to NODE.<br><br>This function expands beginning from NODE the NODE itself and all subnodes of<br>NODE with level <= LEVEL, so the subnodes of these nodes get visible and<br>collapses all their (recursive) subnodes with indentation-level > LEVEL.<br><br>If a node has to be expanded then first the function in SLOT NODE-EXPANDED-FN<br>of `tree-buffer-spec" of current tree-buffer (see `tree-buffer-create") is<br>called with the argument-values [node 0 nil nil (buffer-name)].<br><br>This function gets two optional function-arguments which are called to test if<br>a node should be excluded from expanding or collapsing; both functions are<br>called with two arguments, where the first one is the expandable/collapsable<br>node and the second one is the current level of indentation of this node<br>relativ to the startnode NODE: EXPAND-PRED-FN is called if a node has to be<br>expanded and must return nil if this node should not be expanded even if its<br>indentation level is <= LEVEL and COLLAPSE-PRED-FN is called analogous for a<br>node which has to be collapsed and must return nil if the node should not be<br>collapsed even if its indentation level is > then LEVEL.<br><br>Examples:<br>- LEVEL = -1 collapses the NODE.<br>- LEVEL = 0 expands only the NODE itself because it is the only node which can<br>  have no indentation relativ to itself.<br>- LEVEL = 2 expands the NODE itself, its children and its grandchildren -<br>  these are the nodes which are either not indented (the NODE itself) or<br>  indented once (the children) or twice (the grandchildren)."',
          prototype : '(defun tree-buffer-expand-node (node level                                     &optional expand-pred-fn collapse-pred-fn)',
          parameter : 'node level &optional expand-pred-fn collapse-pred-fn',
          lispcode : '(defun tree-buffer-expand-node (node level<br>                                     &optional expand-pred-fn collapse-pred-fn)<br>  (if (not (equal (tree-buffer-get-root) node))<br>      (tree-buffer-expand-node-internal node 0 level<br>                                        expand-pred-fn collapse-pred-fn)))'
        },
        {
          function : 'tree-buffer-expand-node-internal',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Expand NODE if CURRENT-LEVEL (the indentation-level of NODE) <= LEVEL or<br>collapses NODE if CURRENT-LEVEL > LEVEL. Do this recursive for subnodes of<br>NODE with incremented CURRENT-LEVEL. For EXPAND-PRED-FN and COLLAPSE-PRED-FN<br>see `tree-buffer-expand-node". This function is not for external usage; use<br>`tree-buffer-expand-node" instead."',
          prototype : '(defun tree-buffer-expand-node-internal (node current-level level                                              expand-pred-fn collapse-pred-fn)',
          parameter : 'node current-level level expand-pred-fn collapse-pred-fn',
          lispcode : '(defun tree-buffer-expand-node-internal (node current-level level<br>                                              expand-pred-fn collapse-pred-fn)<br>  (when (tree-node->expandable node)<br>    (when (and (tree-buffer-spec->node-expanded-fn tree-buffer-spec)<br>               (not (tree-node->expanded node)))<br>      (funcall (tree-buffer-spec->node-expanded-fn tree-buffer-spec)<br>               node 0 nil nil nil (buffer-name)))<br>    (when (or (and (not (tree-node->expanded node))<br>                   (or (not (functionp expand-pred-fn))<br>                       (funcall expand-pred-fn node current-level))<br>                   (<= current-level level))<br>              (and (tree-node->expanded node)<br>                   (or (not (functionp collapse-pred-fn))<br>                       (funcall collapse-pred-fn node current-level))<br>                   (> current-level level)))<br>      (tree-node-toggle-expanded node))<br>    (dolist (child (tree-node->children node))<br>      (tree-buffer-expand-node-internal child (1+ current-level) level<br>                                        expand-pred-fn collapse-pred-fn))))'
        },
        {
          function : 'tree-buffer-find-common-substring',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return common substring beginning with SUBS in each element of LIS. If<br>ONLY-PREFIX is not nil then only common prefix is returned."',
          prototype : '(defun tree-buffer-find-common-substring (lis subs &optional only-prefix)',
          parameter : 'lis subs &optional only-prefix',
          lispcode : '(defun tree-buffer-find-common-substring (lis subs &optional only-prefix)<br>  (let ((change-word-sub (concat (if only-prefix<br>                                     (concat <apo>^<apo><br>                                             (car (tree-buffer-spec->incr-search-additional-pattern<br>                                                   tree-buffer-spec)))<br>                                   <apo><apo>)<br>                                 <apo>\\(<apo> (regexp-quote subs) <apo>\\)<apo>))<br>        res alist)<br>    (setq res<br>          (mapcar (function (lambda (word)<br>                              (save-match-data<br>                                (if (string-match change-word-sub word)<br>                                    (substring word<br>                                               (match-beginning<br>                                                (if (and only-prefix<br>                                                         (cdr (tree-buffer-spec->incr-search-additional-pattern<br>                                                               tree-buffer-spec)))<br>                                                    (1+ (cdr (tree-buffer-spec->incr-search-additional-pattern<br>                                                              tree-buffer-spec)))<br>                                                  1)))<br>                                  ;; else no match<br>                                  nil))))<br>                  lis))<br>    (setq res (delq nil res)) ;; remove any nil elements (shouldn<tick>t happen)<br>    (setq alist (mapcar (function (lambda (r)<br>                                    (cons r 1)))<br>                        res)) ;; could use an  OBARRAY<br>    ;; try-completion returns t if there is an exact match.'
        },
        {
          function : 'tree-buffer-find-displayed-node-by-data/name',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Find the first displayed node in current tree-buffer having data NODA-DATA.<br>When START-NODE is nil then all currently visible nodes are searched beginning<br>with the first one otherwise START-NODE is the startpoint for the search.<br><br>If NODE-NAME is not nil then it must be A STRING and only a node<br>is found which has the same node-NAME.<br><br>If the search has success then the found node is returend."',
          prototype : '(defun tree-buffer-find-displayed-node-by-data/name (node-data &optional                                                               node-name start-node)',
          parameter : 'node-data &optional node-name start-node',
          lispcode : '(defun tree-buffer-find-displayed-node-by-data/name (node-data &optional<br>                                                               node-name start-node)<br>  (catch <tick>exit<br>    (let ((node-list (if (or (null start-node)<br>                             (eq start-node (tree-buffer-get-root)))<br>                         tree-buffer-displayed-nodes<br>                       ;; we need that sub-list of tree-buffer-displayed-nodes<br>                       ;; which has the start-node as first elem. But we can<br>                       ;; not calling <backtick>member<tick> for this search because this<br>                       ;; can result in a stack-overflow in equal for large<br>                       ;; node-lists especially with complex-data (e.g.<br>                       ;; semantic tags). Therefore we use <backtick>memq<tick>.<br>                       (or (tree-buffer-member start-node<br>                                               tree-buffer-displayed-nodes<br>                                               <tick>eq)<br>                           tree-buffer-displayed-nodes))))<br>      (dolist (node node-list)'
        },
        {
          function : 'tree-buffer-find-image',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return an image-object for the TREE-IMAGE-NAME. The needed image-file with<br>name "<prefix><TREE-IMAGE-NAME>.<a supported image-file-extension>" is first<br>searched in the dir of slot ADDITIONAL-IMAGES-DIR of `tree-buffer-spec" (if<br>not nil) and then - if there is no image found for this name - in the dir of<br>slot DEFAULT-IMAGES-DIR of `tree-buffer-spec". <prefix> is the value of the<br>slot IMAGE-FILE-PREFIX of `tree-buffer-spec". All found and created<br>image-objectes will be cached so every image is only created once! Returns the<br>image-object for TREE-IMAGE-NAME."',
          prototype : '(defun tree-buffer-find-image (tree-image-name)',
          parameter : 'tree-image-name',
          lispcode : '(defun tree-buffer-find-image (tree-image-name)<br>  (and (equal <tick>image (tree-buffer-real-style))<br>       ;; Klaus Berndl <klaus.berndl@sdm.de>: This comes from the XEmacs-bug<br>       ;; not able to display adjacent images.<br>       (not (member tree-image-name <tick>(<apo>handle<apo> <apo>no-handle<apo>)))<br>       (or (tree-buffer-image-cache-get tree-image-name)<br>           (let ((dirs (mapcar <tick>expand-file-name<br>                               (if (tree-buffer-spec->additional-images-dir<br>                                    tree-buffer-spec)<br>                                   (list (tree-buffer-spec->additional-images-dir<br>                                          tree-buffer-spec)<br>                                         (tree-buffer-spec->default-images-dir<br>                                          tree-buffer-spec))<br>                                 (list (tree-buffer-spec->default-images-dir<br>                                        tree-buffer-spec)))))<br>                 (fmt-specs tree-buffer-image-formats)<br>                 fmt fmt-exts file file-name image loc-dirs)<br>             (while (and fmt-specs (not file))<br>               (setq fmt (car (car fmt-specs))<br>                     fmt-exts (cdr (car fmt-specs))<br>                     fmt-specs (cdr fmt-specs))<br>               (when (tree-buffer-image-type-available-p fmt)<br>                 (while (and fmt-exts (not file))<br>                   (setq loc-dirs dirs)<br>                   (while (and loc-dirs (not file))<br>                     (setq file-name (concat (car loc-dirs) <apo>/<apo><br>                                             (tree-buffer-spec->image-file-prefix<br>                                              tree-buffer-spec)<br>                                             tree-image-name<br>                                             (car fmt-exts)))<br>                     (when (file-readable-p file-name)<br>                       (setq file file-name))<br>                     (setq loc-dirs (cdr loc-dirs)))<br>                   (setq fmt-exts (cdr fmt-exts)))))<br>             (when file<br>               (setq image (tree-buffer-create-image file fmt))<br>               (tree-buffer-image-cache-put tree-image-name<br>                                            image)'
        },
        {
          function : 'tree-buffer-first',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return the first elem of the sequence SEQ."',
          prototype : '(defun tree-buffer-first (seq)',
          parameter : 'seq',
          lispcode : '(defun tree-buffer-first (seq)<br>  (if (listp seq)<br>      (car seq)<br>    (if (> (length seq) 0)<br>        (aref seq 0)<br>      nil)))<br>'
        },
        {
          function : 'tree-buffer-gen-guide-strings',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Returns a list with four elements - the correct guide-strings for current<br>tree-buffer: (guide-str-handle guide-str-no-handle guide-end-str no-guide-str)"',
          prototype : '(defun tree-buffer-gen-guide-strings ()',
          parameter : '',
          lispcode : '(defun tree-buffer-gen-guide-strings ()<br>  (if (equal <tick>ascii-no-guides (tree-buffer-real-style))<br>      (make-list 4 (make-string (tree-buffer-spec->tree-indent<br>                                 tree-buffer-spec) ? ))<br>    (let* ((indent-fill-up (make-string<br>                            (- (tree-buffer-spec->tree-indent tree-buffer-spec)<br>                               (cond ((equal <tick>image (tree-buffer-real-style))<br>                                      tree-buffer-indent-with-images)<br>                                     ((tree-buffer-spec->expand-symbol-before-p<br>                                       tree-buffer-spec)<br>                                      tree-buffer-indent-w/o-images-before-min)<br>                                     (t<br>                                      tree-buffer-indent-w/o-images-after-min)))<br>                            ? ))<br>           (guide-str-handle (concat (tree-buffer-ascii-symbol-4-image-name<br>                                      <apo>guide<apo>)<br>                                     (tree-buffer-ascii-symbol-4-image-name<br>                                      <apo>handle<apo>)<br>                                     indent-fill-up))<br>           (guide-str-no-handle (concat (tree-buffer-ascii-symbol-4-image-name<br>                                         <apo>guide<apo>)<br>                                        (tree-buffer-ascii-symbol-4-image-name<br>                                         <apo>no-handle<apo>)<br>                                        indent-fill-up))<br>           (guide-end-str (concat (tree-buffer-ascii-symbol-4-image-name<br>                                   <apo>end-guide<apo>)<br>                                  (tree-buffer-ascii-symbol-4-image-name<br>                                   <apo>handle<apo>)<br>                                  indent-fill-up))<br>           (no-guide-str (concat (tree-buffer-ascii-symbol-4-image-name<br>                                  <apo>no-guide<apo>)<br>                                 (tree-buffer-ascii-symbol-4-image-name<br>                                  <apo>no-handle<apo>)<br>                                 indent-fill-up)))<br>      (list guide-str-handle guide-str-no-handle guide-end-str no-guide-str))))'
        },
        {
          function : 'tree-buffer-gen-searchpattern-indent-prefix',
          filename : 'ecb/tree-buffer.el',
          docstring : '                       "|")<br>            ")"',
          prototype : '(defun tree-buffer-gen-searchpattern-indent-prefix (&optional count)  (let ((guide-strings (tree-buffer-gen-guide-strings)))    (concat "^\\("            (mapconcat (function (lambda (e)                                   (format "\\(%s\\)" e)))                       (list (nth 1 guide-strings)                             (nth 3 guide-strings)                             (nth 0 guide-strings)                             (nth 2 guide-strings))',
          parameter : '&optional count',
          lispcode : '(defun tree-buffer-gen-searchpattern-indent-prefix (&optional count)<br>  (let ((guide-strings (tree-buffer-gen-guide-strings)))<br>    (concat <apo>^\\(<apo><br>            (mapconcat (function (lambda (e)<br>                                   (format <apo>\\(%s\\)<apo> e)))<br>                       (list (nth 1 guide-strings)<br>                             (nth 3 guide-strings)<br>                             (nth 0 guide-strings)<br>                             (nth 2 guide-strings))<br>            (if (integerp count)<br>                (format <apo>\\{%d\\}<apo> count)<br>              <apo>*<apo>))))<br>'
        },
        {
          function : 'tree-buffer-get-event-column',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return the clicked column on a char-base."',
          prototype : '(defun tree-buffer-get-event-column (e &optional include-fringe-scrollbar)',
          parameter : 'e &optional include-fringe-scrollbar',
          lispcode : '(defun tree-buffer-get-event-column (e &optional include-fringe-scrollbar)<br>  (let* ((x-point (car (nth 2 (car (cdr e)))))<br>	 (pixels-per-10-col (/ (* 10 (frame-pixel-width))<br>			       (frame-width)))<br>	 (click-col (+ (/ (* 10 x-point) pixels-per-10-col)<br>                       (if include-fringe-scrollbar<br>                           (length (with-current-buffer (tree-buffer-event-buffer e)<br>                                     (tree-buffer-spec->sticky-indent-string<br>                                      tree-buffer-spec)))<br>                         0))))<br>    click-col))'
        },
        {
          function : 'tree-buffer-get-node-at-point',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Returns the node at point P. If p is nil the current point is used."',
          prototype : '(defun tree-buffer-get-node-at-point (&optional p)',
          parameter : '&optional p',
          lispcode : '(defun tree-buffer-get-node-at-point (&optional p)<br>  (save-mark-and-excursion<br>    (if p (goto-char p))<br>    (tree-buffer-nth-displayed-node (1- (tree-buffer-current-line)))))'
        },
        {
          function : 'tree-buffer-get-node-facer',
          filename : 'ecb/tree-buffer.el',
          parameter : 'node',
          lispcode : '(defun tree-buffer-get-node-facer (node)<br>  (let ((facer (cdr (assoc (tree-node->type node)<br>                           (tree-buffer-spec->type-facer tree-buffer-spec)))))<br>    (if facer<br>        facer<br>      nil)))'
        },
        {
          function : 'tree-buffer-get-node-name-end-point',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Returns the buffer point where the name of the NODE ends."',
          prototype : '(defun tree-buffer-get-node-name-end-point (node)',
          parameter : 'node',
          lispcode : '(defun tree-buffer-get-node-name-end-point (node)<br>  (tree-buffer-debug-error <apo>tree-buffer-get-node-name-end-point: Cur-buf: %s<apo><br>                           (current-buffer))<br>  (+ (tree-buffer-get-node-name-start-point node)<br>     (length (tree-node->displayed-name node))))'
        },
        {
          function : 'tree-buffer-get-node-name-start-column',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Returns the buffer column where the name of the node starts."',
          prototype : '(defun tree-buffer-get-node-name-start-column (node)',
          parameter : 'node',
          lispcode : '(defun tree-buffer-get-node-name-start-column (node)<br>  (+ (tree-node-indentlength node)<br>     (if (and (tree-buffer-spec->expand-symbol-before-p<br>               tree-buffer-spec)<br>              (or (tree-node->expandable node)<br>                  (member (tree-node->type node)<br>                          (tree-buffer-spec->maybe-empty-node-types<br>                           tree-buffer-spec))))<br>         (if (not (equal <tick>image (tree-buffer-real-style)))<br>             4 3)<br>       0)<br>     (if (and (tree-buffer-spec->expand-symbol-before-p<br>               tree-buffer-spec)<br>              (not (tree-node->expandable node))<br>              (member (tree-node->type node)<br>                      (tree-buffer-spec->leaf-node-types tree-buffer-spec)))<br>         (if (not (equal <tick>image (tree-buffer-real-style)))<br>             2 1)<br>       0)))<br>'
        },
        {
          function : 'tree-buffer-get-node-name-start-point',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Returns the buffer point where the name of the NODE starts."',
          prototype : '(defun tree-buffer-get-node-name-start-point (node)',
          parameter : 'node',
          lispcode : '(defun tree-buffer-get-node-name-start-point (node)<br>  (let ((linenr (tree-buffer-displayed-node-linenr node)))<br>    (tree-buffer-debug-error <apo>tree-buffer-get-node-name-start-point: Cur-buf: %s, linenr: %d<apo><br>                             (current-buffer) linenr)<br>    (when linenr<br>      (save-mark-and-excursion<br>        (tree-buffer-goto-line linenr)<br>        (beginning-of-line)<br>        (+ (point) (tree-buffer-get-node-name-start-column node))))))'
        },
        {
          function : 'tree-buffer-get-root',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return the root-node of current tree-buffer."',
          prototype : '(defun tree-buffer-get-root ()',
          parameter : '',
          lispcode : '(defun tree-buffer-get-root ()<br>  tree-buffer-root)'
        },
        {
          function : 'tree-buffer-goto-line',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Goto LINE, counting from line 1 at beginning of buffer.<br><br>This function doesn"t set the mark."',
          prototype : '(defun tree-buffer-goto-line (line)',
          parameter : 'line',
          lispcode : '(defun tree-buffer-goto-line (line)<br>  ;; Move to the specified line number in that buffer.<br>  (save-restriction<br>    (widen)<br>    (goto-char 1)<br>    (if (eq selective-display t)<br>        (re-search-forward <apo>[\n\C-m]<apo> nil <tick>end (1- line))<br>      (forward-line (1- line)))))'
        },
        {
          function : 'tree-buffer-goto-sticky-node',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Go in current tree-buffer to that node which should be sticky.<br>Returns the line-number of the sticky node."',
          prototype : '(defun tree-buffer-goto-sticky-node ()',
          parameter : '',
          lispcode : '(defun tree-buffer-goto-sticky-node ()<br>  (goto-char (window-start))<br>  (forward-line -1)<br>  (end-of-line)<br>  ;; This is the node under the header-line<br>  (let* ((node-under-header-line (tree-buffer-get-node-at-point))<br>         (node-at-window-start (save-excursion<br>                                 (forward-line 1)<br>                                 (tree-buffer-get-node-at-point)))<br>         (parent-node (and node-at-window-start<br>                           (tree-node->parent node-at-window-start)))<br>         (node-to-go (if (eq parent-node (tree-buffer-get-root))<br>                         node-under-header-line<br>                       parent-node)))<br>    ;; we must go the node itself so we can get the whole<br>    ;; line - otherwise we would not get the right icons etc...'
        },
        {
          function : 'tree-buffer-help-echo-fn',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "This function is the value of the `help-echo" property of each<br>tree-node. This is only used with GNU Emacs >= 21!"',
          prototype : '(defun tree-buffer-help-echo-fn (win obj pos)',
          parameter : 'win obj pos',
          lispcode : '(defun tree-buffer-help-echo-fn (win obj pos)<br>  (let* ((window win)<br>         (position pos)<br>         (buffer (window-buffer window))<br>         node)<br>    (with-current-buffer buffer<br>      (setq node (tree-buffer-get-node-at-point position))<br>      (and (tree-buffer-spec->node-mouse-over-fn tree-buffer-spec)<br>           node<br>           (funcall (tree-buffer-spec->node-mouse-over-fn tree-buffer-spec)<br>                    node window <tick>no-print)))))'
        },
        {
          function : 'tree-buffer-highlight-node-by-data/name',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Highlights in current tree-buffer the node which has as data NODE-DATA. If<br>START-NODE is nil or equal to the root-node then all nodes of current<br>tree-buffer are searched from beginning until the node with data NODE-DATA has<br>been found otherwise the search starts with START-NODE. If DONT-MAKE-VISIBLE<br>is true then no tree-buffer recentering has been done to make this node<br>visible.<br><br>If optional argument NODE-NAME is not nil then it must be string<br>and a node will only be highlighted if not only NODE-DATA matches<br>but also NODE-NAME.<br><br>If either NODE-DATA is nil or if the node belonging to NODE-DATA<br>(and NODE-NAME, if set) can not be found because it is invisible<br>(probably because its parent-node is not expanded) then no<br>highlighting takes place but the existing highlighting is removed<br>and nil is returned. Otherwise the node is highlighted and not<br>nil is returned."',
          prototype : '(defun tree-buffer-highlight-node-by-data/name (node-data &optional node-name start-node                                                          dont-make-visible)',
          parameter : 'node-data &optional node-name start-node dont-make-visible',
          lispcode : '(defun tree-buffer-highlight-node-by-data/name (node-data &optional node-name start-node<br>                                                          dont-make-visible)<br>  (if node-data<br>      (let ((node (tree-buffer-find-displayed-node-by-data/name node-data<br>                                                                node-name start-node))<br>            (w (get-buffer-window (current-buffer))))<br>        (if (null node)<br>            (progn<br>              ;; node can not be found because maybe the node is a subnode and<br>              ;; it<tick>s parent is not expanded --> then there is no node for<br>              ;; NODE-DATA; therefore we must remove the highlighting<br>              (tree-buffer-remove-highlight)<br>              nil)<br>          (setq tree-buffer-highlighted-node (list node-data node-name node))<br>          (save-current-buffer<br>            (tree-buffer-overlay-move tree-buffer-highlight-overlay<br>                                      (tree-buffer-get-node-name-start-point node)<br>                                      (tree-buffer-get-node-name-end-point node)))<br>          (when (not dont-make-visible)<br>            ;; make node visible if not and optimize the windows display for'
        },
        {
          function : 'tree-buffer-highlighted-node-matches-data/name-p',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "return not nil iff currently highlighted node matches passed data and name.<br><br>Currently highlighted node is stored in `tree-buffer-highlighted-node"."',
          prototype : '(defun tree-buffer-highlighted-node-matches-data/name-p (data name)',
          parameter : 'data name',
          lispcode : '(defun tree-buffer-highlighted-node-matches-data/name-p (data name)<br>  (and (tree-buffer-node-data-equal-p data (nth 0 tree-buffer-highlighted-node))<br>       ;; if stored name is nil then it has not been set by<br>       ;; <backtick>tree-buffer-highlight-node-by-data/name<tick> and is therefore not<br>       ;; valid to compare. If set it must match the passed name.<br>       (or (null (nth 1 tree-buffer-highlighted-node))'
        },
        {
          function : 'tree-buffer-hscroll',
          filename : 'ecb/tree-buffer.el',
          parameter : 'amount',
          lispcode : '(defun tree-buffer-hscroll (amount)<br>  (ignore-errors<br>    (let ((current-prefix-arg amount))<br>      (call-interactively <tick>scroll-left))))'
        },
        {
          function : 'tree-buffer-images-can-be-used',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Not nil if images can be used with current Emacs setup."',
          prototype : '(defun tree-buffer-images-can-be-used ()',
          parameter : '',
          lispcode : '(defun tree-buffer-images-can-be-used ()<br>  (if tree-buffer-images-can-be-used-init-p<br>      tree-buffer-images-can-be-used<br>    (setq tree-buffer-images-can-be-used-init-p t)<br>    (setq tree-buffer-images-can-be-used<br>          (and (or (fboundp <tick>defimage)<br>                   (fboundp <tick>make-image-specifier))<br>               (if (fboundp <tick>display-images-p)<br>                   (display-images-p)<br>                 window-system)))))'
        },
        {
          function : 'tree-buffer-incremental-node-search',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Incremental search for a node in current tree-buffer.<br>Each display-able key (e.g. all keys normally bound to `self-insert-command")<br>is appended to the current search-pattern. The tree-buffer tries to jump to<br>the current search-pattern. If no match is found then nothing is done. Some<br>special keys:<br>- [backspace] and [delete]: Delete the last character from the search-pattern.<br>- [home]: Delete the complete search-pattern<br>- [end]: Expand either to a complete node if current search-pattern is<br>         already unique or expands to the greatest common prefix of the nodes.<br>         If there are at least two nodes with the same greatest common-prefix<br>         than every hit of [end] jumps to the next node with this common<br>         prefix.<br><br>The current search-pattern is shown in the echo area.<br>After selecting a node with RET the search-pattern is cleared out.<br><br>Do NOT call this function directly. It works only if called from the binding<br>mentioned above!"',
          prototype : '(defun tree-buffer-incremental-node-search ()',
          parameter : '',
          lispcode : '(defun tree-buffer-incremental-node-search ()<br>  (interactive)<br>  (unless (not (equal (selected-frame) tree-buffer-frame))<br>    (let ((last-comm (tree-buffer-event-to-key last-command-event))<br>          (full-search-regexp nil))<br>      (cl-case last-comm<br>        ((delete backspace)<br>         ;; reduce by one from the end<br>         (setq tree-buffer-incr-searchpattern<br>               (substring tree-buffer-incr-searchpattern<br>                          0<br>                          (max 0 (1- (length tree-buffer-incr-searchpattern))))))<br>        ;; delete the complete search-pattern<br>        (home<br>         (setq tree-buffer-incr-searchpattern <apo><apo>))<br>        ;; expand to the max. common prefix<br>        (end<br>         (let* ((node-name-list (tree-buffer-map-displayed-nodes<br>                                 <tick>tree-node->name))<br>                (common-prefix (tree-buffer-find-common-substring<br>                                node-name-list tree-buffer-incr-searchpattern<br>                                (if (equal (tree-buffer-spec->incr-search-p tree-buffer-spec)<br>                                           <tick>prefix)<br>                                    t))))<br>           (if (stringp common-prefix)<br>               (setq tree-buffer-incr-searchpattern common-prefix))))<br>        ((nil) nil) ;; do nothing<br>        (otherwise<br>         ;; add the last command to the end<br>         (setq tree-buffer-incr-searchpattern<br>               (concat tree-buffer-incr-searchpattern<br>                       (char-to-string last-comm)))))<br>      (setq full-search-regexp<br>            (concat tree-buffer-incr-searchpattern-indent-prefix<br>                    tree-buffer-incr-searchpattern-expand-prefix<br>                    (car (tree-buffer-spec->incr-search-additional-pattern<br>                          tree-buffer-spec))<br>                    (if (equal (tree-buffer-spec->incr-search-p tree-buffer-spec)<br>                               <tick>substring)<br>                        <apo>[^()\n]*<apo><br>                      <apo><apo>)<br>                    (regexp-quote tree-buffer-incr-searchpattern)))<br>      (setq tree-buffer-incr-searchpattern<br>            (or (funcall (tree-buffer-spec->reduce-tree-for-incr-search-fn tree-buffer-spec)<br>                         tree-buffer-incr-searchpattern full-search-regexp)<br>                ;; Only if the reduce-function is <tick>ignore we get nil and then<br>                ;; we do not change the <backtick>tree-buffer-incr-searchpattern<tick><br>                tree-buffer-incr-searchpattern))<br>      (tree-buffer-nolog-message<br>       <apo>%s node search: [%s]%s<apo><br>       (buffer-name (current-buffer))<br>       tree-buffer-incr-searchpattern<br>       (if (save-excursion<br>             (if (not (and (equal last-comm <tick>end)<br>                           (string= tree-buffer-incr-searchpattern<br>                                    tree-buffer-last-incr-searchpattern)))<br>                 (goto-char (point-min)))'
        },
        {
          function : 'tree-buffer-insert-node-display',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Insert NODE into the tree-buffer with all necessary buttons before or after<br>the name of the NODE. This function computes also the name how the NODE has to<br>be displayed and returns this name. If optional arg NO-NEWLINE is not nil then<br>no final newline is displayed after inserting the node. Otherwise always a<br>newline is inserted after the node."',
          prototype : '(defun tree-buffer-insert-node-display (node &optional no-newline)',
          parameter : 'node &optional no-newline',
          lispcode : '(defun tree-buffer-insert-node-display (node &optional no-newline)<br>  (let* ((node-type (tree-node->type node))<br>         (tree-image-name (if (and (tree-node->expanded node)<br>                                   (tree-node->expandable node))<br>                              <apo>open<apo><br>                            (if (not (tree-node->expandable node))<br>                                (if (member node-type<br>                                            (tree-buffer-spec->maybe-empty-node-types<br>                                             tree-buffer-spec))<br>                                    <apo>empty<apo><br>                                  (if (member node-type<br>                                              (tree-buffer-spec->leaf-node-types tree-buffer-spec))<br>                                      <apo>leaf<apo><br>                                    nil))<br>                              <apo>close<apo>)))<br>         (ascii-symbol (tree-buffer-ascii-symbol-4-image-name tree-image-name))<br>         (display-name (tree-buffer-node-display-name node))<br>         (mouse-highlight (or (equal t (tree-buffer-spec->mouse-highlight-fn tree-buffer-spec))<br>                              (and (tree-buffer-spec->mouse-highlight-fn tree-buffer-spec)<br>                                   (funcall (tree-buffer-spec->mouse-highlight-fn tree-buffer-spec)<br>                                            node)))))<br>    (when (and (tree-buffer-spec->expand-symbol-before-p tree-buffer-spec)<br>	       ascii-symbol tree-image-name)<br>      (tree-buffer-insert-text<br>       (tree-buffer-add-image-icon-maybe<br>        0 (length ascii-symbol)<br>        ascii-symbol (tree-buffer-find-image tree-image-name))<br>       nil nil mouse-highlight)<br>      (if (not (equal <tick>image (tree-buffer-real-style)))<br>          (insert <apo> <apo>)))<br>    (tree-buffer-insert-text display-name<br>                             (tree-buffer-get-node-facer node)<br>                             t mouse-highlight)<br>    (when (and (not (tree-buffer-spec->expand-symbol-before-p tree-buffer-spec))<br>	       ascii-symbol)<br>      (insert <apo> <apo>)<br>      (tree-buffer-insert-text ascii-symbol nil nil mouse-highlight))<br>    (unless no-newline (insert <apo>\n<apo>))<br>    display-name))'
        },
        {
          function : 'tree-buffer-insert-text',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Insert TEXT at point and faces it with FACER. FACER can be a face then the<br>text gets this face or it can be a function-symbol which is called to face the<br>inserted TEXT. Such a function gets two arguments: Point where TEXT has been<br>inserted and the TEXT itself"',
          prototype : '(defun tree-buffer-insert-text (text &optional facer help-echo mouse-highlight)',
          parameter : 'text &optional facer help-echo mouse-highlight',
          lispcode : '(defun tree-buffer-insert-text (text &optional facer help-echo mouse-highlight)<br>  (when (stringp text)<br>    (let ((p (point)))<br>      (insert text)<br>      (if mouse-highlight<br>          (put-text-property p (point) <tick>mouse-face <tick>highlight))<br>      (if help-echo<br>          (put-text-property p (point) <tick>help-echo<br>                             <tick>tree-buffer-help-echo-fn))<br>      (if facer<br>          (if (functionp facer)<br>              (funcall facer p text)<br>            (tree-buffer-merge-face facer p (point))))<br>      )))'
        },
        {
          function : 'tree-buffer-last',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return the last elem of the sequence SEQ."',
          prototype : '(defun tree-buffer-last (seq)',
          parameter : 'seq',
          lispcode : '(defun tree-buffer-last (seq)<br>  (if (listp seq)<br>      (car (last seq))<br>    (if (> (length seq) 0)<br>        (aref seq (1- (length seq)))<br>      nil)))'
        },
        {
          function : 'tree-buffer-member',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Find the first occurrence of ITEM in LIST.<br>Return the sublist of LIST whose car is ITEM. Comparison is done with `equal"<br>unless TEST-FCN is not nil: In this case TEST-FCN will be used to compare ITEM<br>with the elements of LIST. If TEST-FCN is `eq" then `memq" is called for<br>optimization."',
          prototype : '(defun tree-buffer-member (item list &optional test-fcn)',
          parameter : 'item list &optional test-fcn',
          lispcode : '(defun tree-buffer-member (item list &optional test-fcn)<br>  (if test-fcn<br>      (if (eq test-fcn <tick>eq)<br>          ;; some optimization<br>          (memq item list)<br>        (progn<br>          (while (and list (not (funcall test-fcn item (car list))))<br>            (setq list (cdr list)))<br>          list))'
        },
        {
          function : 'tree-buffer-merge-face',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Merge FACE either to a buffer-part or to TEXT.<br>In both cases START and END define the region which should be<br>faced. The FACE is merged, i.e. the values of all face-attributes<br>of FACE take effect and the values of all face-attributes of the<br>buffer-part or TEXT which are not set by FACE are preserved.<br><br>If always returns TEXT (if not nil then modified with FACE)."',
          prototype : '(defun tree-buffer-merge-face (face start end &optional text)',
          parameter : 'face start end &optional text',
          lispcode : '(defun tree-buffer-merge-face (face start end &optional text)<br>  (if (null face)<br>      text<br>    (alter-text-property start end <tick>face<br>                         (lambda (current-face)<br>                           (let ((cf<br>                                  (cl-typecase current-face<br>;                                    (ecb-tree-buffer-face (list current-face))<br>                                    (list current-face)<br>                                    (otherwise nil)))<br>                                 (nf<br>                                  (cl-typecase face<br>;                                    (ecb-tree-buffer-face (list face))<br>                                    (list face)<br>                                    (otherwise nil))))<br>                             ;; we must add the new-face in front of<br>                             ;; current-face to get the right merge!<br>                             (if (member face cf)'
        },
        {
          function : 'tree-buffer-mouse-hscroll',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Read a mouse event E from the mode line and scroll horizontally.<br>If the mouse is being clicked on the far left, or far right of the<br>mode-line.  This is only useful for non-XEmacs"',
          prototype : '(defun tree-buffer-mouse-hscroll (e)',
          parameter : 'e',
          lispcode : '(defun tree-buffer-mouse-hscroll (e)<br>  (interactive <apo>e<apo>)<br>  (let* ((click-col (tree-buffer-get-event-column e t)))<br>    (save-selected-window<br>      (select-window (tree-buffer-event-window e))<br>      (cond ((< click-col 4)<br>             (tree-buffer-hscroll (- (tree-buffer-spec->hor-scroll-step tree-buffer-spec))))<br>            ((> click-col (- (window-width) 4))<br>             (tree-buffer-hscroll (tree-buffer-spec->hor-scroll-step tree-buffer-spec)))<br>            (t (tree-buffer-nolog-message<br>                <apo>Click on the edge of the modeline to scroll left/right<apo>))))<br>    ))'
        },
        {
          function : 'tree-buffer-node-data-equal-p',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Calls the function stored in slot NODE-DATA-EQUAL-FN of `tree-buffer-spec"<br>to test NODE-DATA-1 and NODE-DATA-2 for equality."',
          prototype : '(defun tree-buffer-node-data-equal-p (node-data-1 node-data-2)',
          parameter : 'node-data-1 node-data-2',
          lispcode : '(defun tree-buffer-node-data-equal-p (node-data-1 node-data-2)<br>  (and node-data-1 node-data-2<br>       ;; if this comparison-function runs into an error we handle this as<br>       ;; non-equality!<br>       (ignore-errors'
        },
        {
          function : 'tree-buffer-node-display-name',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Computes that string which is used to display the name of NODE. The<br>display-name will be set in the slot DISPLAYED-NAME of NODE and also<br>returned."',
          prototype : '(defun tree-buffer-node-display-name (node)',
          parameter : 'node',
          lispcode : '(defun tree-buffer-node-display-name (node)<br>  (let* ((ww (window-width))<br>	 (name (concat (tree-node->name node)))<br>         (display-name name)<br>         (shrink-token (or (nth 1 (tree-node->shrink-name-spec node))<br>                           <apo>...<apo>))<br>         (shrink-token-length (length shrink-token))<br>         (expand-length (if (tree-node->expandable node)<br>                            (+ (if (eq (tree-buffer-real-style) <tick>image)<br>                                   1<br>                                 tree-buffer-expand-symbol-length)<br>                               1)<br>                          0))<br>         (indent-length (if (eq (tree-buffer-real-style) <tick>image)<br>                            (floor (tree-node-indentlength node)<br>                                   (if (tree-buffer-spec->expand-symbol-before-p tree-buffer-spec)<br>                                       tree-buffer-indent-w/o-images-before-min<br>                                     tree-buffer-indent-w/o-images-after-min))<br>                          (tree-node-indentlength node)))<br>         (name-shrink-start-pos (or (nth 0 (tree-node->shrink-name-spec node))<br>                                    0))<br>         (remaining-chars (or (nth 2 (tree-node->shrink-name-spec node))<br>                              5))<br>         (new-end-of-before-shrink-part name-shrink-start-pos)<br>         (width (+ indent-length expand-length (length name))))<br>;;     (when (and (equal (buffer-name) ecb-history-buffer-name)<br>;;                (= ecb-history-nodetype-bucket (tree-node->type node)))<br>;;       (message <apo>node-disp: node:%s,name-l:%d,\nww:%d,ind-l:%d,exp-l:%d,start-p:%d,width:%d<apo><br>;;                name (length name) ww indent-length expand-length name-shrink-start-pos width)<br>;;       )<br>    ;; Truncate name if necessary<br>    (when (and (>= (- ww indent-length expand-length) (+ shrink-token-length<br>                                                         remaining-chars))<br>               (> width ww)<br>               ;; there should at least remain 5 visible chars of name<br>               (> (length name) (+ shrink-token-length (- width ww) remaining-chars)))<br>      (if (eq <tick>beginning (tree-node->shrink-name node))<br>          (progn<br>            (when (> name-shrink-start-pos 0)<br>              (when (< (- ww indent-length expand-length name-shrink-start-pos)<br>                       (+ shrink-token-length remaining-chars))<br>                (setq new-end-of-before-shrink-part<br>                      (- ww indent-length expand-length shrink-token-length remaining-chars))<br>                ;; now name-shrink-start-pos is exactly set so 3 + 5 chars can<br>                ;; be displayed from the rest<br>                (when (< new-end-of-before-shrink-part 3)<br>                  (setq new-end-of-before-shrink-part 0))))<br>            (setq display-name<br>                  (concat (substring name 0 new-end-of-before-shrink-part)<br>                          shrink-token<br>                          (substring name (max name-shrink-start-pos<br>                                               (+ (- width ww)<br>                                                  new-end-of-before-shrink-part<br>                                                  shrink-token-length))))))<br>	(if (and (not (tree-buffer-spec->expand-symbol-before-p tree-buffer-spec))'
        },
        {
          function : 'tree-buffer-nolog-message',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Works exactly like `message" but does not log the message"',
          prototype : '(defun tree-buffer-nolog-message (&rest args)',
          parameter : '&rest args',
          lispcode : '(defun tree-buffer-nolog-message (&rest args)<br>  (let ((msg (cond ((or (null args)<br>                        (null (car args)))<br>                    nil)<br>                   ((null (cdr args))<br>                    (car args))<br>                   (t<br>                    (apply <tick>format args)))))<br>    ;; Now message is either nil or the formated string.<br>    ;; Emacs way of preventing log messages.<br>    (let ((message-log-max nil)<br>          (message-truncate-lines nil))<br>      (if msg<br>          (message <apo>%s<apo> msg)'
        },
        {
          function : 'tree-buffer-point-at-expand-symbol-p',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return not nil if point P is located at the expand-symbol of NODE."',
          prototype : '(defun tree-buffer-point-at-expand-symbol-p (node p)',
          parameter : 'node p',
          lispcode : '(defun tree-buffer-point-at-expand-symbol-p (node p)<br>  (tree-buffer-debug-error <apo>tree-buffer-point-at-expand-symbol-p: Cur-buf: %s, p: %d, exp-sym-before: %s<apo><br>                           (current-buffer)<br>                           p (tree-buffer-spec->expand-symbol-before-p tree-buffer-spec))<br>  (when (or (tree-node->expandable node)<br>            ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: maybe it would be<br>            ;; better to handle such nodes as if point can not stay at the<br>            ;; empty-symbol...<br>            (member (tree-node->type node)<br>                    (tree-buffer-spec->maybe-empty-node-types tree-buffer-spec)))<br>    (let ((start-point (tree-buffer-get-node-name-start-point node))<br>          (end-point (tree-buffer-get-node-name-end-point node)))<br>      (if (tree-buffer-spec->expand-symbol-before-p tree-buffer-spec)<br>          (and (>= p (- start-point 4))'
        },
        {
          function : 'tree-buffer-point-at-node-name-p',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return not nil if point P is located at the displayed-name of NODE."',
          prototype : '(defun tree-buffer-point-at-node-name-p (node p)',
          parameter : 'node p',
          lispcode : '(defun tree-buffer-point-at-node-name-p (node p)<br>  (tree-buffer-debug-error <apo>tree-buffer-point-at-node-name-p: Cur-buf: %s, p: %d<apo><br>                           (current-buffer) p)<br>  (and (>= p (tree-buffer-get-node-name-start-point node))<br>       (< p (tree-buffer-get-node-name-end-point node))))'
        },
        {
          function : 'tree-buffer-popup-menu',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Popup a a context menu.<br>EVENT is the event which has triggered the menu-popup.<br>For Emacs it is an event as needed by `x-popup-menu".<br>MENU-TITLE is the string which should be displayed as menu-title.<br>If optional arg NODE is a tree-node then the selected menu-command will be<br>called with that node as argument.<br>If NODE is nil then the selected menu-command will be called with no<br>argument otherwise with NODE as the only argument."',
          prototype : '(defun tree-buffer-popup-menu (event menu menu-title &optional node)',
          parameter : 'event menu menu-title &optional node',
          lispcode : '(defun tree-buffer-popup-menu (event menu menu-title &optional node)<br>  ;; we must set the title for the menu-keymap<br>  (setcar (member (nth (1- (length menu)) menu) menu)<br>          menu-title)<br>  (let* ((menu-selection (apply <tick>vector<br>                                (x-popup-menu event menu)))<br>         (fn (if (and menu-selection<br>                      (> (length menu-selection) 0))<br>                 (lookup-key menu menu-selection))))<br>    (when (functionp fn)<br>      (if node<br>          (funcall fn node)'
        },
        {
          function : 'tree-buffer-pos-hor-visible-p',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return non nil if POS is horizontal visible in WINDOW otherwise nil."',
          prototype : '(defun tree-buffer-pos-hor-visible-p (pos window)',
          parameter : 'pos window',
          lispcode : '(defun tree-buffer-pos-hor-visible-p (pos window)<br>  (save-mark-and-excursion<br>    (goto-char pos)<br>    (and (>= (- (current-column) (window-hscroll window)) 0)<br>         (< (- (current-column) (window-hscroll window))<br>            (window-width window)))))'
        },
        {
          function : 'tree-buffer-position',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return the position of ELEM within SEQ counting from 0. Comparison is done<br>with `equal" unless TEST-FCN is not nil: In this case TEST-FCN will be used to<br>compare ITEM with the elements of SEQ."',
          prototype : '(defun tree-buffer-position (seq elem &optional test-fcn)',
          parameter : 'seq elem &optional test-fcn',
          lispcode : '(defun tree-buffer-position (seq elem &optional test-fcn)<br>  (if (listp seq)<br>      (let ((pos (- (length seq) (length (tree-buffer-member elem seq test-fcn)))))<br>        (if (= pos (length seq))<br>            nil<br>          pos))<br>    (catch <tick>found<br>      (dotimes (i (length seq))<br>        (if (funcall (or test-fcn <tick>equal) elem (aref seq i))<br>            (throw <tick>found i)))<br>      nil)))'
        },
        {
          function : 'tree-buffer-real-style',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return the currently used style of the tree-buffer. If X)Emacs allows<br>displaying images then this is simply the value of the slot STYLE of<br>`tree-buffer-spec". Otherwise the style "image is replaced by "ascii-guides.<br>If the optional arg STYLE is not nil then this is used instead of the slot<br>STYLE of `tree-buffer-spec". Allowed values of STYLE are nil, "image,<br>"ascii-guides, ascii-no-guides."',
          prototype : '(defun tree-buffer-real-style (&optional style)',
          parameter : '&optional style',
          lispcode : '(defun tree-buffer-real-style (&optional style)<br>  (let ((my-style (or style (tree-buffer-spec->style tree-buffer-spec))))<br>    (if (tree-buffer-images-can-be-used)<br>        my-style<br>      (if (equal my-style <tick>image)<br>          <tick>ascii-guides<br>        my-style))))'
        },
        {
          function : 'tree-buffer-recenter',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "If NODE is not visible then first recenter the window WINDOW so NODE is<br>best visible, means NODE is displayed in the middle of the window if possible.<br>If NODE is expanded then recenter the WINDOW so as much as possible subnodes<br>of NODE will be visible. If NODE is not expandable then WINDOW is always<br>displayed without empty-lines at the end, means WINDOW is always best filled."',
          prototype : '(defun tree-buffer-recenter (node window)',
          parameter : 'node window',
          lispcode : '(defun tree-buffer-recenter (node window)<br>  (let* ((node-points (save-excursion<br>                        (tree-buffer-goto-line (tree-buffer-displayed-node-linenr node))<br>                        (cons (tree-buffer-line-beginning-pos)<br>                              (tree-buffer-line-end-pos))))<br>         (node-point (car node-points))<br>         (point-lines-before (count-lines (point-min) node-point))<br>         (point-lines-after (1- (count-lines node-point (point-max)))))<br>    ;; first make point best visible, means display node in the middle of the<br>    ;; window if possible (if there are enough lines before/after the node).<br>    (when (not (pos-visible-in-window-p node-point window))<br>      (if (< node-point (window-start window))<br>          (set-window-start<br>           window<br>           (save-excursion<br>             (goto-char node-point)<br>             (forward-line<br>              (* -1 (min point-lines-before<br>                         (/ (tree-buffer-window-display-height window) 2))))<br>             (tree-buffer-line-beginning-pos)))<br>        (set-window-start window<br>                          (save-excursion<br>                            (goto-char (window-start window))<br>                            (forward-line<br>                             (- (+ 1<br>                                   (count-lines (window-start window) node-point)<br>                                   (min point-lines-after<br>                                        (/ (tree-buffer-window-display-height window) 2)))<br>                                (tree-buffer-window-display-height window)))<br>                            (tree-buffer-line-beginning-pos)))<br>        ))<br>    ;; now optimize the window display for displaying as much possible<br>    ;; subnodes of node.<br>    (if (tree-node->expanded node)<br>        (let ((exp-node-children-count (1+ (tree-buffer-count-subnodes-to-display node)))<br>              (point-window-line (count-lines (window-start window) node-point)))<br>          ;; if the current node is not already displayed in the first line of<br>          ;; the window (= condition 1) and if not all of it<tick>s children are<br>          ;; visible in the window then we can do some optimization.<br>          (if (and (save-excursion<br>                     (goto-char node-point)<br>                     (forward-line -1)<br>                     (pos-visible-in-window-p (point) window))<br>                   (not (save-excursion<br>                          (goto-char node-point)<br>                          (forward-line exp-node-children-count)<br>                          (pos-visible-in-window-p (point) window))))<br>              ;; optimize the display of NODE and it<tick>s children so as much as<br>              ;; possible are visible.<br>              (set-window-start window<br>                                (save-excursion<br>                                  (goto-char (window-start window))<br>                                  (forward-line<br>                                   (min point-window-line<br>                                        (- (+ 1<br>                                              ;; Cause of a bug in GNU Emacs<br>                                              ;; <= 21.3 we would need here an<br>                                              ;; extra +1 to display all<br>                                              ;; subnodes (otherwise the last<br>                                              ;; one is not displayed). But<br>                                              ;; this extra +1 would only be<br>                                              ;; needed if the tree-buffer is<br>                                              ;; not completely displayed in'
        },
        {
          function : 'tree-buffer-remove-elt',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Remove N-th element from SEQ. SEQ can be any sequence. SEQ will be<br>changed because this is desctructive function. SEQ is returned."',
          prototype : '(defun tree-buffer-remove-elt (seq n)',
          parameter : 'seq n',
          lispcode : '(defun tree-buffer-remove-elt (seq n)<br>  (delq <tick>tree-buffer-remove-marker<br>        (tree-buffer-set-elt seq n <tick>tree-buffer-remove-marker)))'
        },
        {
          function : 'tree-buffer-remove-highlight',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Unhighlight the currently highlighted tree-node."',
          prototype : '(defun tree-buffer-remove-highlight ()',
          parameter : '',
          lispcode : '(defun tree-buffer-remove-highlight ()<br>  (when tree-buffer-highlighted-node<br>    (tree-buffer-overlay-delete tree-buffer-highlight-overlay))<br>  (setq tree-buffer-highlighted-node nil))'
        },
        {
          function : 'tree-buffer-remove-node',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Remove NODE from current tree-buffer. If NODE is nil then the node at<br>current point will be removed. If NODE equal the node returned by<br>`tree-buffer-get-root" then nothing will be done. If first optional arg<br>REDISLAY is not nil then NODE will be also completely removed from the<br>tree-display otherwise only from the internal tree-structure. If second<br>optional arg EMPTY-PARENT-TYPES is not nil and a list of node-types (see<br>`tree-buffer-create") and if the node-type of the parent of NODE is contained<br>in EMPTY-PARENT-TYPES and if NODE is the only children of its parent then its<br>parent is recursively removed too."',
          prototype : '(defun tree-buffer-remove-node (node &optional redisplay empty-parent-types)',
          parameter : 'node &optional redisplay empty-parent-types',
          lispcode : '(defun tree-buffer-remove-node (node &optional redisplay empty-parent-types)<br>  (let ((my-node (or node (tree-buffer-get-node-at-point))))<br>    (when (and my-node (not (eq (tree-buffer-get-root) my-node)))<br>      (let* ((parent (tree-node->parent my-node))<br>             (parent-type (tree-node->type parent)))<br>        ;; If parent is the root-node then its type is always -1 (only the<br>        ;; root-node has type -1) and therefore then the recursion stops here<br>        ;; savely.<br>        (if (and (member parent-type empty-parent-types)<br>                 (= (length (tree-node->children parent)) 1))<br>            (tree-buffer-remove-node parent redisplay empty-parent-types)<br>          (tree-node-remove-child parent my-node)<br>          (when redisplay<br>            (let ((buffer-read-only nil)<br>                  (node-line (when redisplay<br>                               (if node<br>                                   (tree-buffer-displayed-node-linenr my-node)<br>                                 (tree-buffer-current-line)))))<br>              (when node-line<br>                (save-current-buffer<br>                  (tree-buffer-goto-line node-line)<br>                  (beginning-of-line)<br>                  (delete-region (tree-buffer-line-beginning-pos)'
        },
        {
          function : 'tree-buffer-run-after-update-hook',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Run all functions of slot AFTER-UPDATE-HOOK of `tree-buffer-spec"."',
          prototype : '(defun tree-buffer-run-after-update-hook ()',
          parameter : '',
          lispcode : '(defun tree-buffer-run-after-update-hook ()<br>  (dolist (f (tree-buffer-spec->after-update-hook tree-buffer-spec))<br>    (funcall f)))'
        },
        {
          function : 'tree-buffer-scroll-window',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Scrolls current tree-buffer. The window will start at WINDOW-START and<br>point will stay on POINT."',
          prototype : '(defun tree-buffer-scroll-window (point window-start)',
          parameter : 'point window-start',
          lispcode : '(defun tree-buffer-scroll-window (point window-start)<br>  (goto-char point)<br>  (set-window-start (get-buffer-window (current-buffer)) window-start))'
        },
        {
          function : 'tree-buffer-search-displayed-node-list',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Call SEARCH-FCN for each currently visible node in current tree-buffer.<br>Return the first node for which SEARCH-FCN returns not nil."',
          prototype : '(defun tree-buffer-search-displayed-node-list (search-fcn)',
          parameter : 'search-fcn',
          lispcode : '(defun tree-buffer-search-displayed-node-list (search-fcn)<br>  (catch <tick>exit<br>    (dolist (node tree-buffer-displayed-nodes)<br>      (when (funcall search-fcn node)<br>        (throw <tick>exit node)))))'
        },
        {
          function : 'tree-buffer-select',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "If the callback-function in slot IS-CLICK-VALID-FN of `tree-buffer-spec"<br>returns nil then nothing is done. Otherwise: If either the MOUSE-BUTTON is 0<br>or point is as the node-name then the callback-function in slot<br>NODE-SELECTED-FN is called with the needed arguments (see<br>`tree-buffer-create"). If point is at the expand/collape-button depending of<br>the expansion-state either the callback in slot NODE-EXPANDED-FN or<br>NODE-COLLAPSED-FN is called (for parameters see again `tree-buffer-create").<br>None of these callbacks must modify the slot EXPANDED of the passed node<br>because this is done automatically by this function.<br>ADDITIONAL-KEY-LIST is either nil or a list of additonal keys pressed. If not<br>nil only the symbols "shift, "control and "meta are recognized."',
          prototype : '(defun tree-buffer-select (mouse-button additional-key-list)',
          parameter : 'mouse-button additional-key-list',
          lispcode : '(defun tree-buffer-select (mouse-button additional-key-list)<br>  (unless (not (equal (selected-frame) tree-buffer-frame))<br>    (let ((shift-pressed (member <tick>shift additional-key-list))<br>          (control-pressed (member <tick>control additional-key-list))<br>          (meta-pressed (member <tick>meta additional-key-list)))<br>      (when (and (tree-buffer-spec->is-click-valid-fn tree-buffer-spec)<br>                 (funcall (tree-buffer-spec->is-click-valid-fn tree-buffer-spec)<br>                          mouse-button shift-pressed control-pressed meta-pressed<br>                          (buffer-name)))<br>        (tree-buffer-debug-error <apo>tree-buffer-select-1: Cur-buf: %s<apo><br>                                 (current-buffer))<br>        (let ((node (tree-buffer-get-node-at-point)))<br>          (when node<br>            (tree-buffer-debug-error <apo>tree-buffer-select-2: Cur-buf: %s<apo><br>                                     (current-buffer))<br>            ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: Is this the right place<br>            ;; for this? probably it can cause some erros...... Yep - it causes<br>            ;; serious XEmacs-sideeffects: clicking into tree-buffer doesn<tick>t<br>            ;; work anymore when doing this during an active isearch! Seems that<br>            ;; isearch-exit switches the current buffer so the buffer after the<br>            ;; isearch-exit is not the same as before!! So we comment this out!!<br>            ;;           (ignore-errors<br>            ;;             (let ((search-nonincremental-instead nil))<br>            ;;               (isearch-exit)))<br>            (tree-buffer-debug-error <apo>tree-buffer-select-3: Cur-buf: %s<apo><br>                                     (current-buffer))<br>            (cond ((or (= mouse-button 0)<br>                       (tree-buffer-point-at-node-name-p node (point)))<br>                   (setq tree-buffer-incr-searchpattern <apo><apo>)<br>                   (when (tree-buffer-spec->node-selected-fn tree-buffer-spec)<br>                     (funcall (tree-buffer-spec->node-selected-fn tree-buffer-spec)<br>                              node mouse-button shift-pressed control-pressed meta-pressed<br>                              (buffer-name))))<br>                  ((tree-buffer-point-at-expand-symbol-p node (point))<br>                   (when (and (not (tree-node->expanded node))<br>                              (tree-buffer-spec->node-expanded-fn tree-buffer-spec))<br>                     (funcall (tree-buffer-spec->node-expanded-fn tree-buffer-spec)<br>                              node mouse-button<br>                              shift-pressed control-pressed meta-pressed<br>                              (buffer-name)))<br>                   (when (tree-node->expandable node)'
        },
        {
          function : 'tree-buffer-set-elt',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Set VAL as new N-th element of SEQ. SEQ can be any sequence. SEQ will be<br>changed because this is desctructive function. SEQ is returned."',
          prototype : '(defun tree-buffer-set-elt (seq n val)',
          parameter : 'seq n val',
          lispcode : '(defun tree-buffer-set-elt (seq n val)<br>  (if (listp seq)<br>      (setcar (nthcdr n seq) val)<br>    (aset seq n val))<br>  seq)'
        },
        {
          function : 'tree-buffer-set-root',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Set the root-node of current tree-buffer to ROOT.<br>ROOT must be either that root-node automatically created by<br>`tree-buffer-create" or a node returned by `tree-node-new-root"!"',
          prototype : '(defun tree-buffer-set-root (root)',
          parameter : 'root',
          lispcode : '(defun tree-buffer-set-root (root)<br>  (setq tree-buffer-root root)<br>  (setf (tree-node->expanded tree-buffer-root) t))'
        },
        {
          function : 'tree-buffer-show-modeline-menu',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Display a popup-menu for the modeline of current tree-buffer.<br>For an description of EVENT see `tree-buffer-popup-menu"."',
          prototype : '(defun tree-buffer-show-modeline-menu (event)',
          parameter : 'event',
          lispcode : '(defun tree-buffer-show-modeline-menu (event)<br>  (unless (not (equal (selected-frame) tree-buffer-frame))<br>    (let* ((menu-creator (tree-buffer-spec->modeline-menu-creator tree-buffer-spec))<br>           (menu (and menu-creator (funcall menu-creator (buffer-name)))))<br>      (when menu<br>        (tree-buffer-popup-menu event<br>                                (tree-buffer-create-menu menu)<br>                                <apo>Tree-buffer modeline-menu<apo>)))))'
        },
        {
          function : 'tree-buffer-show-node-menu',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Display a popup-menu for the node at point.<br>For an description of EVENT see `tree-buffer-popup-menu"."',
          prototype : '(defun tree-buffer-show-node-menu (event)',
          parameter : 'event',
          lispcode : '(defun tree-buffer-show-node-menu (event)<br>  (unless (not (equal (selected-frame) tree-buffer-frame))<br>    (let ((node (tree-buffer-get-node-at-point))<br>          (menu-creator (tree-buffer-spec->menu-creator tree-buffer-spec)))<br>      (when (and node (functionp menu-creator))<br>        (let* ((menu (cdr (assoc (tree-node->type node)<br>                                 (tree-buffer-create-menus<br>                                  (funcall (tree-buffer-spec->menu-creator<br>                                            tree-buffer-spec)<br>                                           (buffer-name) node)<br>                                  t))))<br>               (menu-title-creator<br>                (cdr (assoc (tree-node->type node)<br>                            (tree-buffer-spec->menu-titles tree-buffer-spec))))<br>               (menu-title (cl-typecase menu-title-creator<br>                             (string menu-title-creator)<br>                             (function (funcall menu-title-creator node))<br>                             (otherwise <apo>Tree-buffer-nodemenu<apo>))))<br>          (when menu<br>            (tree-buffer-popup-menu event menu menu-title node)))))))'
        },
        {
          function : 'tree-buffer-show-node-menu-keyboard',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Activate the popup-menu of current tree-buffer via keyboard. If called with<br>a prefix-arg then the library tmm.el is used for displaying the popup-menu -<br>ignored with XEmacs."',
          prototype : '(defun tree-buffer-show-node-menu-keyboard (&optional use-tmm)',
          parameter : '&optional use-tmm',
          lispcode : '(defun tree-buffer-show-node-menu-keyboard (&optional use-tmm)<br>  (interactive <apo>P<apo>)<br>  (if use-tmm<br>      (unless (not (equal (selected-frame) tree-buffer-frame))<br>        (when (tree-buffer-spec->menu-creator tree-buffer-spec)<br>          (let ((node (tree-buffer-get-node-at-point)))<br>            (when (and node (locate-library <apo>tmm<apo>))<br>              (let ((menu (cdr (assoc (tree-node->type node)<br>                                      (tree-buffer-create-menus<br>                                       (funcall (tree-buffer-spec->menu-creator<br>                                                 tree-buffer-spec)<br>                                                (buffer-name) node))))))<br>                (tmm-prompt menu))))))<br><br>    (let ((curr-frame-ypos (* (/ (frame-pixel-height) (frame-height))<br>                              (count-lines (window-start) (point))))<br>          (curr-frame-xpos (* (/ (frame-pixel-width) (frame-width))<br>                              (current-column))))<br>      (tree-buffer-show-node-menu (list (list curr-frame-xpos curr-frame-ypos)<br>                                        (selected-window))))))'
        },
        {
          function : 'tree-buffer-sticky-default-indent-string',
          filename : 'ecb/tree-buffer.el',
          docstring : '		       "   "',
          prototype : '(defun tree-buffer-sticky-default-indent-string ()  (if window-system      (concat       (condition-case nil	   ;; Test scroll bar location	   (let ((charwidth (tree-buffer-frame-char-width))		 (scrollpos (frame-parameter (selected-frame)					     "vertical-scroll-bars))		 )	     (if (or (eq scrollpos "left)		     ;; Now wait a minute.  If you turn scroll-bar-mode		     ;; on, then off, the new value is t, not left.		     ;; Will this mess up older emacs where the default		     ;; was on the right?  I don"t think so since they don"t		     ;; support a header line.		     (eq scrollpos t))		 (let ((w (when (boundp "scroll-bar-width)			    (symbol-value "scroll-bar-width))))				   (if (not w)		       (setq w (frame-parameter (selected-frame)						"scroll-bar-width)))		   ;; in 21.2, the frame parameter is sometimes empty		   ;; so we need to get the value here.		   (if (not w)		       (setq w (+ (get "scroll-bar-width "x-frame-parameter)				  ;; In 21.4, or perhaps 22.1 the x-frame				  ;; parameter is different from the frame				  ;; parameter by only 1 pixel.				  1)))		   (if (not w)',
          parameter : '',
          lispcode : '(defun tree-buffer-sticky-default-indent-string ()<br>  (if window-system<br>      (concat<br>       (condition-case nil<br>	   ;; Test scroll bar location<br>	   (let ((charwidth (tree-buffer-frame-char-width))<br>		 (scrollpos (frame-parameter (selected-frame)<br>					     <tick>vertical-scroll-bars))<br>		 )<br>	     (if (or (eq scrollpos <tick>left)<br>		     ;; Now wait a minute.  If you turn scroll-bar-mode<br>		     ;; on, then off, the new value is t, not left.<br>		     ;; Will this mess up older emacs where the default<br>		     ;; was on the right?  I don<tick>t think so since they don<tick>t<br>		     ;; support a header line.<br>		     (eq scrollpos t))<br>		 (let ((w (when (boundp <tick>scroll-bar-width)<br>			    (symbol-value <tick>scroll-bar-width))))<br>		<br>		   (if (not w)<br>		       (setq w (frame-parameter (selected-frame)<br>						<tick>scroll-bar-width)))<br><br>		   ;; in 21.2, the frame parameter is sometimes empty<br>		   ;; so we need to get the value here.<br>		   (if (not w)<br>		       (setq w (+ (get <tick>scroll-bar-width <tick>x-frame-parameter)<br>				  ;; In 21.4, or perhaps 22.1 the x-frame<br>				  ;; parameter is different from the frame<br>				  ;; parameter by only 1 pixel.<br>				  1)))<br><br>		   (if (not w)<br>		     (setq w (+ charwidth w))   ; Some sort of border around<br>					        ; the scrollbar.<br>		     (make-string (/ w charwidth) ? )))<br>	       <apo><apo>))<br>	 (error <apo><apo>))<br>       (condition-case nil<br>	   ;; Test fringe size.<br>	   (let* ((f (window-fringes))'
        },
        {
          function : 'tree-buffer-stickynode-fetch-stickyline',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Make the parent-node at the top of the current tree-window sticky."',
          prototype : '(defun tree-buffer-stickynode-fetch-stickyline ()',
          parameter : '',
          lispcode : '(defun tree-buffer-stickynode-fetch-stickyline ()<br>  (let ((str<br>         (if (= 0 (count-lines (point-min) (window-start)))<br>             <apo><apo><br>           (save-current-buffer<br>             ;; here we have at least one node under the header-line<br>             (tree-buffer-goto-sticky-node)<br>             (buffer-substring (tree-buffer-line-beginning-pos) (tree-buffer-line-end-pos)))))<br>	(start 0))<br>    ;; we must handle the special sign % of head-line-format!<br>    (save-match-data<br>      (while (string-match <apo>%<apo> str start)<br>        (setq str (replace-match <apo>%%<apo> t t str 0)<br>              start (1+ (match-end 0)))<br>        ))<br>    ;; In 21.4 (or 22.1) the header doesn<tick>t expand tabs.  Hmmmm.<br>    ;; We should replace them here.<br>    ;;<br>    ;; This hack assumes that tabs are kept smartly at tab boundaries'
        },
        {
          function : 'tree-buffer-stickynode-header-line-format',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "The header line format used by sticky func mode."',
          prototype : '(defun tree-buffer-stickynode-header-line-format ()',
          parameter : '',
          lispcode : '(defun tree-buffer-stickynode-header-line-format ()<br>  (tree-buffer-stickynode-fetch-stickyline))'
        },
        {
          function : 'tree-buffer-tab-pressed',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Perform the defined action after a TAB-hit."',
          prototype : '(defun tree-buffer-tab-pressed ()',
          parameter : '',
          lispcode : '(defun tree-buffer-tab-pressed ()<br>  (interactive)<br>  (unless (not (equal (selected-frame) tree-buffer-frame))<br>    (let ((node (tree-buffer-get-node-at-point)))<br>      (when (tree-node->expandable node)<br>	(when (and (tree-buffer-spec->node-expanded-fn tree-buffer-spec)<br>		   (not (tree-node->expanded node)))<br>	  (funcall (tree-buffer-spec->node-expanded-fn tree-buffer-spec)<br>                   node 0 nil nil nil (buffer-name)))<br>        (when (tree-node->expandable node)<br>          (when (and (tree-node->expanded node)<br>                     (tree-buffer-spec->node-collapsed-fn tree-buffer-spec))<br>            (funcall (tree-buffer-spec->node-collapsed-fn tree-buffer-spec)<br>                     node 0 nil<br>                     nil nil (buffer-name)))<br>          (tree-node-toggle-expanded node))<br>	;; Update the tree-buffer with optimized display of NODE'
        },
        {
          function : 'tree-buffer-update',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Updates the current tree-buffer. The buffer will be completely rebuild with<br>it"s current nodes. Window-start and point will be preserved. If NODE is not<br>nil and a valid and expanded node with at least one child then the display of<br>this node is optimized so the node itself and as much as possible of it"s<br>children (and also recursive the children of a child if it"s already<br>expanded, see `tree-buffer-count-subnodes-to-display") are visible in current<br>tree-buffer. If CONTENT is not nil then it must be a cons-cell where the car<br>is the whole string of the tree-buffer and the cdr is the value of<br>`tree-buffer-displayed-nodes". Then the content of the tree-buffer will not be<br>rebuild by reinserting all nodes from the tree-node-structure but just by<br>inserting the car of CONTENT in the tree-buffer and setting<br>`tree-buffer-displayed-nodes" to cdr of CONTENT."',
          prototype : '(defun tree-buffer-update (&optional node content)',
          parameter : '&optional node content',
          lispcode : '(defun tree-buffer-update (&optional node content)<br>  (let* ((w (get-buffer-window (current-buffer)))<br>         (ws (window-start w))<br>         (p (point))<br>         (buffer-read-only nil)<br>         (next-line-add-newlines nil))<br>    (erase-buffer)<br>    (if (consp content)<br>        (progn<br>          (insert (car content))<br>          (tree-buffer-set-displayed-nodes (cdr content)))<br>      (tree-buffer-build-tree-buffer-display))<br>    (tree-buffer-display-in-general-face)<br>    (tree-buffer-highlight-node-by-data/name<br>     (or nil ;;(and node (tree-node->data node))<br>         (nth 0 tree-buffer-highlighted-node))<br>     (nth 1 tree-buffer-highlighted-node)<br>     (nth 2 tree-buffer-highlighted-node)<br>     nil)<br>    (goto-char p)<br>    (set-window-start w ws)<br>    ;; let<tick>s optimize the display of the expanded node NODE and it<tick>s children.<br>    (when node<br>      (tree-buffer-recenter node w))<br>    (tree-buffer-run-after-update-hook)))'
        },
        {
          function : 'tree-buffer-update-node',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "This function updates the NODE with the new datas NAME, SHRINK-NAME, TYPE,<br>DATA and EXPANDABLE. If NODE is nil then the node at current point will be<br>updated. Each of the arguments NAME, SHRINK-NAME, TYPE, DATA and EXPANDABLE<br>can have the special value "use-old-value; this means that attribute of NODE<br>will not be updated. If first optional arg REDISLAY is not nil then NODE will<br>be completely redisplayed according to its new data. Nil for REDISLAY makes<br>sense for example if the caller wants to update a bunch of nodes but wants to<br>update the display itself first at the end of all node-updates (for<br>efficiency). In that case the caller has to ensure that `tree-buffer-update"<br>is called after updating all needed nodes."',
          prototype : '(defun tree-buffer-update-node (node name shrink-name type data expandable                                     &optional redisplay)',
          parameter : 'node name shrink-name type data expandable &optional redisplay',
          lispcode : '(defun tree-buffer-update-node (node name shrink-name type data expandable<br>                                     &optional redisplay)<br>  (let* ((my-node (or node (tree-buffer-get-node-at-point)))<br>         (node-line (when redisplay<br>                      ;; Klaus Berndl <klaus.berndl@sdm.de>: We could simply<br>                      ;; here call (tree-buffer-displayed-node-linenr<br>                      ;; my-node) but for best possible performance we just<br>                      ;; use the current linenumber if NODE is nil (means we<br>                      ;; stay already at the right point and there is no need<br>                      ;; to waste performance by searching a node we have<br>                      ;; already <apo>found<apo>...maybe paranoid ;-)<br>                      (if node<br>                          (tree-buffer-displayed-node-linenr node)<br>                        (tree-buffer-current-line))))<br>         (old-node-data (tree-node->data my-node))<br>         (old-node-name (tree-node->name my-node))<br>         (buffer-read-only nil))<br>    (tree-node-update my-node name type data expandable shrink-name)<br>    (when node-line ;; we want a redisplay<br>      (save-current-buffer<br>        (tree-buffer-goto-line node-line)<br>        (beginning-of-line)<br>        (delete-region (tree-buffer-line-beginning-pos)<br>                       (tree-buffer-line-end-pos))<br>        (insert (tree-node->indentstr my-node))'
        },
        {
          function : 'tree-node-add-children',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Add new CHILDREN to the already existing children of NODE.<br>If the optional arg AT_BEGINNING is not nil then the new CHILDREN will be<br>added to the beginning of the existing children of NODE otherwise to the end<br>(default). CHILDREN must be either a single tree-node object or a list of<br>tree-nodes."',
          prototype : '(defun tree-node-add-children (node children &optional at-beginning)',
          parameter : 'node children &optional at-beginning',
          lispcode : '(defun tree-node-add-children (node children &optional at-beginning)<br>  (let ((c-list (cl-typecase children<br>                  (tree-node (list children))<br>                  (list children)<br>                  (otherwise<br>                   (error <apo>Children must be either a single tree-node or a list of tree-nodes.<apo>)))))<br>    ;; set NODE as parent of all new CHILDREN<br>    (dolist (c c-list)<br>      (setf (tree-node->parent c) node))<br>    ;; add the new CHILDREN to the existing ones<br>    (setf (tree-node->children node)<br>          (if at-beginning'
        },
        {
          function : 'tree-node-find-child-by-data/name',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Finds the first child with the given CHILD-DATA.<br>CHILD-DATA will be compared with the data of each children of NODE by calling<br>`tree-buffer-node-data-equal-p".<br>If CHILD-NAME is set then also the name of the child will be compared with<br>CHILD-NAME and must match."',
          prototype : '(defun tree-node-find-child-by-data/name (node child-data &optional child-name)',
          parameter : 'node child-data &optional child-name',
          lispcode : '(defun tree-node-find-child-by-data/name (node child-data &optional child-name)<br>  (catch <tick>exit<br>    (dolist (child (tree-node->children node))<br>      (when (and (tree-buffer-node-data-equal-p (tree-node->data child)<br>                                                child-data)<br>                 (or (null child-name)<br>                     (string= child-name (tree-node->name child))))<br>        (throw <tick>exit child)))))'
        },
        {
          function : 'tree-node-find-child-by-name',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return the first child of NODE with name CHILD-NAME."',
          prototype : '(defun tree-node-find-child-by-name (node child-name)',
          parameter : 'node child-name',
          lispcode : '(defun tree-node-find-child-by-name (node child-name)<br>  (catch <tick>exit<br>    (dolist (child (tree-node->children node))<br>      (when (equal (tree-node->name child) child-name)<br>        (throw <tick>exit child)))))<br>'
        },
        {
          function : 'tree-node-id-init',
          filename : 'ecb/tree-buffer.el',
          parameter : '',
          lispcode : '(defun tree-node-id-init ()<br>  (setq tree-node-id tree-node-id-init-value))'
        },
        {
          function : 'tree-node-indent-level',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return indentation-level of NODE.<br>Top-level nodes (children of the root-node) have level 0."',
          prototype : '(defun tree-node-indent-level (node)',
          parameter : 'node',
          lispcode : '(defun tree-node-indent-level (node)<br>  (let ((parent (tree-node->parent node)))<br>    (if (eq parent (tree-buffer-get-root))<br>        0<br>      (1+ (tree-node-indent-level parent)))))'
        },
        {
          function : 'tree-node-map-subtree',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Apply MAP-FCN to full subtree of START-NODE and make a list of the results.<br>MAP-FCN is a function which gets a node of this subtree as argument.<br><br>Full subtree means the START-NODE itself and all its children and<br>all the grandchildren and so on; to each of these nodes MAP-FCN<br>is applied. If START-NODE is the root-node of current tree-buffer<br>then the START-NODE itself is not passed to MAP-FCN.<br><br>Often it is recommendable to apply a `delq" nil to the result<br>when the MAP-FCN does only perform for certain nodes, i.e. return<br>not nil only for certain nodes.<br><br>The subtree is walked by a depth-first-walk."',
          prototype : '(defun tree-node-map-subtree (start-node map-fcn)',
          parameter : 'start-node map-fcn',
          lispcode : '(defun tree-node-map-subtree (start-node map-fcn)<br>  (let ((result (unless (equal start-node (tree-buffer-get-root))<br>                  (mapcar map-fcn (list start-node)))))<br>    (dolist (child (tree-node->children start-node))<br>      (setq result<br>            (append result (tree-node-map-subtree child map-fcn))))<br>    result))<br><br>;; (defun tree-node-map-subtree-test ()<br>;;   (save-excursion'
        },
        {
          function : 'tree-node-new',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Create a new tree-node which can be displayed in a tree-buffer.<br>A tree-node can have the following slots:<br><br>  NAME: The name of the node. Regardless how the node is displayed; see<br>  SHRINK-NAME and DISPLAYED-NAME.<br><br>  TYPE: The type of the node; must currently be an interger!<br><br>  DATA: The data of the node; can be arbitrary lisp-structures.<br><br>  EXPANDED: If not nil then the node is currently expanded, means its children<br>  are visible.<br><br>  PARENT: The parent tree-node.<br><br>  SHRINK-NAME: Decides if the NAME can be shortened when displayed in a<br>  narrow tree buffer window. The following values are valid:<br>  - beginning: The NAME is truncated at the beginning so the end is always<br>    visible. The shrinking can be specified in more detail with<br>    SHRINK-NAME-SPEC (s.b.)<br>  - end: The NAME is truncated at the end. If the tree-node is EXPANDABLE the<br>    name is truncated so that the expand symbol is visible.<br>  - nil: The NAME is never truncated. In this case DISPLAYED-NAME is equal to<br>    NAME.<br><br>  SHRINK-NAME-SPEC: nil or a 3 element-list which defines exactly<br>  how to shrink the node-name from beginning. The first element<br>  is a 0-based starting position in the NAME where shrinking<br>  should start if the name has to be shrinked from beginning<br>  (see SHRINK-NAME) - if nil then 0 is used, i.e. shrinking<br>  starts at beginning of NAME. The second element is a string<br>  which is used as token to indicate the shrinking (e.g.<br>  "-->") - if nil then "..." is used. The third element is<br>  the number of chars of the node-name which should remain as<br>  visible (counted from the end of node-name) - if nil then 5 is<br>  used. This slot is ignored if SHRINK-NAME is "end or nil.<br><br>  CHILDREN: List of children tree-nodes.<br><br>  EXPANDABLE: If not nil then the node is expandable means has children.<br><br>  INDENTSTR: Containes the full indentation-string for the node. So a single<br>  node can easily be redrawn.<br><br>  DISPLAYED-NAME: Contains the current displayed name of the node. The<br>  displayed name can be different from the NAME according to the value of<br>  SHRINK-NAME.<br><br>For all parameters except NOT-EXPANDABLE the description is available in the<br>slot-list above. If the first optional argument NOT-EXPANDABLE is set to not<br>nil then the slot EXPANDABLE will be set to nil; otherwise to t.<br><br>See Info node `(ecb)tree-buffer" for all details of using tree-nodes."',
          prototype : '(defun tree-node-new (name type data &optional not-expandable parent                           shrink-name shrink-name-spec)',
          parameter : 'name type data &optional not-expandable parent shrink-name shrink-name-spec',
          lispcode : '(defun tree-node-new (name type data &optional not-expandable parent<br>                           shrink-name shrink-name-spec)<br>  (let* ((new-id (tree-node-id-next))<br>         (n (-tree-node-new :id new-id<br>                            :name name<br>                            :type type<br>                            :data data<br>                            :expandable (not not-expandable)<br>                            :parent parent<br>                            :shrink-name shrink-name<br>                            :shrink-name-spec (or shrink-name-spec<br>                                                  <tick>(0 <apo>...<apo> 5))<br>                            :children nil<br>                            :expanded nil<br>                            :displayed-name nil<br>                            :indentstr nil)))<br>    (when (and parent (tree-node-p parent))<br>      (tree-node-add-children parent n))<br>    n))'
        },
        {
          function : 'tree-node-new-root',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Creates a new root node.<br>The root node has always NAME="root", TYPE=-1 and DATA=nil. The root node<br>will not be displayed. Only the root-node is allowed to have as TYPE -1!"',
          prototype : '(defun tree-node-new-root ()',
          parameter : '',
          lispcode : '(defun tree-node-new-root ()<br>  (tree-node-new <apo>root<apo> -1 nil))'
        },
        {
          function : 'tree-node-remove-child-by-data/name',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Removes the first child with the given CHILD-DATA.<br>Returns the removed child. CHILD-DATA will be compared with the data of each<br>children of NODE by calling `tree-buffer-node-data-equal-p".<br>If CHILD-NAME is set then also the name of the child will be compared with<br>CHILD-NAME and must match."',
          prototype : '(defun tree-node-remove-child-by-data/name (node child-data &optional child-name)',
          parameter : 'node child-data &optional child-name',
          lispcode : '(defun tree-node-remove-child-by-data/name (node child-data &optional child-name)<br>  (catch <tick>exit<br>    (let ((last-cell nil)<br>	  (cell (tree-node->children node)))<br>      (while cell<br>	(when (and (tree-buffer-node-data-equal-p (tree-node->data (car cell))<br>                                                  child-data)<br>                   (or (null child-name)<br>                       (string= child-name (tree-node->name (car cell)))))<br>	  (if last-cell<br>	      (setcdr last-cell (cdr cell))<br>	    (setf (tree-node->children node) (cdr cell)))<br>	  (setcdr cell nil)<br>	  (setf (tree-node->parent (car cell)) nil)<br>	  (throw <tick>exit cell))<br>	(setq last-cell cell)<br>	(setq cell (cdr cell))))))'
        },
        {
          function : 'tree-node-search-subtree-by-data',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Search the full subtree of START-NODE for the first (sub-)node with DATA.<br>The "full subtree" means the START-NODE itself, its children, their grandchildren<br>etc. The search is done by a depth-first-search. Data-comparison is performed<br>with `tree-buffer-node-data-equal-p"."',
          prototype : '(defun tree-node-search-subtree-by-data (start-node data)',
          parameter : 'start-node data',
          lispcode : '(defun tree-node-search-subtree-by-data (start-node data)<br>  (car (delq nil<br>             (tree-node-map-subtree start-node<br>                                    (function<br>                                     (lambda (n)<br>                                       (if (tree-buffer-node-data-equal-p<br>                                            data<br>                                            (tree-node->data n))<br>                                           n)))))))<br>'
        },
        {
          function : 'tree-node-search-subtree-by-id',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Search the full subtree of START-NODE for the first (sub-)node with NODE-ID.<br>The "full subtree" means the START-NODE itself, its children, their grandchildren<br>etc. The search is done by a depth-first-search."',
          prototype : '(defun tree-node-search-subtree-by-id (start-node node-id)',
          parameter : 'start-node node-id',
          lispcode : '(defun tree-node-search-subtree-by-id (start-node node-id)<br>  (car (delq nil<br>             (tree-node-map-subtree start-node<br>                                    (function (lambda (n)<br>                                                (if (= node-id (tree-node->id n))<br>                                                    n)))))))<br>'
        },
        {
          function : 'tree-node-update',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Update NODE with setable datas.<br>Each of the arguments NAME, SHRINK-NAME, TYPE, DATA and EXPANDABLE can have<br>the special value "use-old-value; this means that this attribute/slot of NODE<br>will not be updated."',
          prototype : '(defun tree-node-update (node name type data expandable shrink-name)',
          parameter : 'node name type data expandable shrink-name',
          lispcode : '(defun tree-node-update (node name type data expandable shrink-name)<br>  (unless (eq name <tick>use-old-value)<br>    (setf (tree-node->name node) name))<br>  (unless (eq shrink-name <tick>use-old-value)<br>    (setf (tree-node->shrink-name node) shrink-name))<br>  (unless (eq type <tick>use-old-value)<br>    (setf (tree-node->type node) type))<br>  (unless (eq data <tick>use-old-value)<br>    (setf (tree-node->data node) data))<br>  (unless (eq expandable <tick>use-old-value)<br>    (setf (tree-node->expandable node) expandable)))'
        }
    ]
  }