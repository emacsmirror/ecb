const substs =
  {
    names:
      [
        'ecb--ezimage-use-images',
        'ecb--semantic--before-fetch-tags-hook',
        'ecb--semantic--tag-set-overlay',
        'ecb--semantic-after-partial-cache-change-hook',
        'ecb--semantic-after-toplevel-cache-change-hook',
        'ecb--semantic-fetch-tags',
        'ecb--semantic-format-face-alist',
        'ecb--semantic-format-tag-functions',
        'ecb--semantic-format-use-images-flag',
        'ecb--semantic-orphaned-member-metaparent-type',
        'ecb--semantic-symbol->name-assoc-list',
        'ecb--semantic-symbol->name-assoc-list-for-type-parts',
        'ecb--semantic-tag',
        'ecb--semantic-tag-calculate-parent',
        'ecb--semantic-uml-colon-string',
        'ecb-allow-tag-display',
        'ecb-check-dir-exclude',
        'ecb-check-filename-for-history-exclude',
        'ecb-check-parent-for-exclude',
        'ecb-count-screen-lines',
        'ecb-current-line',
        'ecb-directory-sep-char',
        'ecb-directory-sep-string',
        'ecb-directory-should-prescanned-p',
        'ecb-ecb-buffer-registry-buffer-list',
        'ecb-ecb-buffer-registry-get-set-fcn',
        'ecb-ecb-buffer-registry-get-symbol',
        'ecb-ecb-buffer-registry-name-list',
        'ecb-ecb-buffer-registry-symbol-list',
        'ecb-edit-area-creators-add',
        'ecb-edit-area-creators-init',
        'ecb-fixed-filename-cache-get',
        'ecb-fixed-filename-cache-put',
        'ecb-font-lock-tags',
        'ecb-forbid-tag-display',
        'ecb-get-icon-for-tag',
        'ecb-host-accessible-valid-time',
        'ecb-ignore-display-buffer-alist',
        'ecb-ignore-pop-up-frames',
        'ecb-ignore-special-display',
        'ecb-match-regexp-list',
        'ecb-multicache-init',
        'ecb-show-at-least-one-tag-p',
        'ecb-sources-read-only-check-p',
        'ecb-string<',
        'ecb-string=',
        'ecb-tag-forbidden-display-p',
        'ecb-use-images-for-semantic-tags',
        'ecb-vc-directory-should-be-checked-p',
        'ecb-vc-get-ascii-icon-for-vc-state',
        'ecb-vc-get-image-name-for-vc-state',
        'tree-buffer-add-to-displayed-nodes',
        'tree-buffer-ascii-symbol-4-image-name',
        'tree-buffer-aset',
        'tree-buffer-create-image',
        'tree-buffer-current-line',
        'tree-buffer-displayed-nodes-copy',
        'tree-buffer-displayed-nodes-remove-node',
        'tree-buffer-displayed-nodes-remove-nth',
        'tree-buffer-displayed-nodes-replace-nth',
        'tree-buffer-get-data-store',
        'tree-buffer-image-cache-get',
        'tree-buffer-image-cache-put',
        'tree-buffer-initialize-displayed-nodes',
        'tree-buffer-map-displayed-nodes',
        'tree-buffer-nth-displayed-node',
        'tree-buffer-number-of-displayed-nodes',
        'tree-buffer-set-data-store',
        'tree-buffer-set-displayed-nodes',
        'tree-node-id-next',
        'tree-node-indentlength',
        'tree-node-linelength',
        'tree-node-remove-child',
        'tree-node-sort-children',
        'tree-node-toggle-expanded'
    ],

    info:
      [
        {
          subst : 'ecb--ezimage-use-images',
          filename : 'ecb/ecb-semantic-wrapper.el',
          lispcode : '(defsubst ecb--ezimage-use-images ()<br>  (if (boundp <tick>ezimage-use-images)<br>      ezimage-use-images))'
        },
        {
          subst : 'ecb--semantic--before-fetch-tags-hook',
          filename : 'ecb/ecb-semantic-wrapper.el',
          lispcode : '(defsubst ecb--semantic--before-fetch-tags-hook ()<br>  (if (boundp <tick>semantic--before-fetch-tags-hook)<br>      <tick>semantic--before-fetch-tags-hook<br>    <tick>semantic-before-toplevel-bovination-hook))'
        },
        {
          subst : 'ecb--semantic--tag-set-overlay',
          filename : 'ecb/ecb-semantic-wrapper.el',
          docstring : '  "Set the overlay part of TAG with OVERLAY. OVERLAY can be an overlay or an<br>unloaded buffer representation."',
          prototype : '(defsubst ecb--semantic--tag-set-overlay (tag overlay)',
          lispcode : '(defsubst ecb--semantic--tag-set-overlay (tag overlay)<br>  (let ((o-cdr (ecb--semantic--tag-overlay-cdr tag)))<br>    (setcar o-cdr overlay)))'
        },
        {
          subst : 'ecb--semantic-after-partial-cache-change-hook',
          filename : 'ecb/ecb-semantic-wrapper.el',
          docstring : '  "Return the hook-symbol `semantic-after-partial-cache-change-hook"."',
          prototype : '(defsubst ecb--semantic-after-partial-cache-change-hook ()',
          lispcode : '(defsubst ecb--semantic-after-partial-cache-change-hook ()<br>  <tick>semantic-after-partial-cache-change-hook)'
        },
        {
          subst : 'ecb--semantic-after-toplevel-cache-change-hook',
          filename : 'ecb/ecb-semantic-wrapper.el',
          docstring : '  "Return the hook-symbol `semantic-after-toplevel-cache-change-hook"."',
          prototype : '(defsubst ecb--semantic-after-toplevel-cache-change-hook ()',
          lispcode : '(defsubst ecb--semantic-after-toplevel-cache-change-hook ()<br>  <tick>semantic-after-toplevel-cache-change-hook)'
        },
        {
          subst : 'ecb--semantic-fetch-tags',
          filename : 'ecb/ecb-semantic-wrapper.el',
          lispcode : '(defsubst ecb--semantic-fetch-tags (&optional check-cache)<br>    (apply <tick>semantic-fetch-tags nil))'
        },
        {
          subst : 'ecb--semantic-format-face-alist',
          filename : 'ecb/ecb-semantic-wrapper.el',
          docstring : '  "Return either the value of `semantic-format-face-alist" or<br>`semantic-face-alist" depending which semantic version is loaded."',
          prototype : '(defsubst ecb--semantic-format-face-alist ()',
          lispcode : '(defsubst ecb--semantic-format-face-alist ()<br>  (if (boundp <tick>semantic-format-face-alist)<br>      (symbol-value <tick>semantic-format-face-alist)<br>    (symbol-value <tick>semantic-face-alist)))'
        },
        {
          subst : 'ecb--semantic-format-tag-functions',
          filename : 'ecb/ecb-semantic-wrapper.el',
          docstring : '  "Return either the value of `semantic-format-tag-functions" or<br>`semantic-token->text-functions" depending which semantic version is loaded."',
          prototype : '(defsubst ecb--semantic-format-tag-functions ()',
          lispcode : '(defsubst ecb--semantic-format-tag-functions ()<br>  (if (boundp <tick>semantic-format-tag-functions)<br>      (symbol-value <tick>semantic-format-tag-functions)<br>    (symbol-value <tick>semantic-token->text-functions)))'
        },
        {
          subst : 'ecb--semantic-format-use-images-flag',
          filename : 'ecb/ecb-semantic-wrapper.el',
          lispcode : '(defsubst ecb--semantic-format-use-images-flag ()<br>  (if (boundp <tick>semantic-format-use-images-flag)<br>      semantic-format-use-images-flag))<br>'
        },
        {
          subst : 'ecb--semantic-orphaned-member-metaparent-type',
          filename : 'ecb/ecb-semantic-wrapper.el',
          docstring : '  "Return the value of `semantic-orphaned-member-metaparent-type"."',
          prototype : '(defsubst ecb--semantic-orphaned-member-metaparent-type ()',
          lispcode : '(defsubst ecb--semantic-orphaned-member-metaparent-type ()<br>  (symbol-value <tick>semantic-orphaned-member-metaparent-type))'
        },
        {
          subst : 'ecb--semantic-symbol->name-assoc-list',
          filename : 'ecb/ecb-semantic-wrapper.el',
          docstring : '  "Return the value of `semantic-symbol->name-assoc-list"."',
          prototype : '(defsubst ecb--semantic-symbol->name-assoc-list ()',
          lispcode : '(defsubst ecb--semantic-symbol->name-assoc-list ()<br>  (symbol-value <tick>semantic-symbol->name-assoc-list))'
        },
        {
          subst : 'ecb--semantic-symbol->name-assoc-list-for-type-parts',
          filename : 'ecb/ecb-semantic-wrapper.el',
          docstring : '  "Return the value of `semantic-symbol->name-assoc-list-for-type-parts"."',
          prototype : '(defsubst ecb--semantic-symbol->name-assoc-list-for-type-parts ()',
          lispcode : '(defsubst ecb--semantic-symbol->name-assoc-list-for-type-parts ()<br>  (symbol-value <tick>semantic-symbol->name-assoc-list-for-type-parts))'
        },
        {
          subst : 'ecb--semantic-tag',
          filename : 'ecb/ecb-semantic-wrapper.el',
          docstring : '  "Create a new semantic tag with name NAME and tag-class CLASS."',
          prototype : '(defsubst ecb--semantic-tag (name class &rest ignore)',
          lispcode : '(defsubst ecb--semantic-tag (name class &rest ignore)<br>  (if (fboundp <tick>semantic-tag)<br>      (apply <tick>semantic-tag name class ignore)<br>    (list name class nil nil nil nil)))'
        },
        {
          subst : 'ecb--semantic-tag-calculate-parent',
          filename : 'ecb/ecb-semantic-wrapper.el',
          docstring : '  "Attempt to calculate the parent-tag of TAG."',
          prototype : '(defsubst ecb--semantic-tag-calculate-parent (tag)',
          lispcode : '(defsubst ecb--semantic-tag-calculate-parent (tag)<br>  (if (fboundp <tick>semantic-tag-calculate-parent)<br>      (apply <tick>semantic-tag-calculate-parent (list tag))<br>    (with-current-buffer (ecb--semantic-tag-buffer tag)<br>      (goto-char (ecb--semantic-tag-start tag))<br>      (ecb--semantic-current-tag-parent))))'
        },
        {
          subst : 'ecb--semantic-uml-colon-string',
          filename : 'ecb/ecb-semantic-wrapper.el',
          docstring : '  "Return the value of `semantic-uml-colon-string"."',
          prototype : '(defsubst ecb--semantic-uml-colon-string ()',
          lispcode : '(defsubst ecb--semantic-uml-colon-string ()<br>  (symbol-value <tick>semantic-uml-colon-string))'
        },
        {
          subst : 'ecb-allow-tag-display',
          filename : 'ecb/ecb-method-browser.el',
          lispcode : '(defsubst ecb-allow-tag-display (tag)<br>  (ecb--semantic--tag-put-property tag <tick>hide-tag nil))'
        },
        {
          subst : 'ecb-check-dir-exclude',
          filename : 'ecb/ecb-file-browser.el',
          lispcode : '(defsubst ecb-check-dir-exclude (dir)<br>  (ecb-match-regexp-list dir ecb-excluded-directories-regexps))'
        },
        {
          subst : 'ecb-check-filename-for-history-exclude',
          filename : 'ecb/ecb-file-browser.el',
          lispcode : '(defsubst ecb-check-filename-for-history-exclude (filename)<br>  (ecb-match-regexp-list filename ecb-history-exclude-file-regexps))'
        },
        {
          subst : 'ecb-check-parent-for-exclude',
          filename : 'ecb/ecb-method-browser.el',
          lispcode : '(defsubst ecb-check-parent-for-exclude (parent-name)<br>  (ecb-match-regexp-list parent-name ecb-exclude-parents-regexps))'
        },
        {
          subst : 'ecb-count-screen-lines',
          filename : 'ecb/ecb-util.el',
          lispcode : '(defsubst ecb-count-screen-lines (&optional beg end)<br>  (count-screen-lines beg end))<br>(defalias <tick>ecb-frame-parameter <tick>frame-parameter)<br>(defalias <tick>ecb-line-beginning-pos <tick>line-beginning-position)<br>(defalias <tick>ecb-line-end-pos <tick>line-end-position)<br>(defalias <tick>ecb-bolp <tick>bolp)<br>(defalias <tick>ecb-eolp <tick>eolp)<br>(defalias <tick>ecb-bobp <tick>bobp)<br>(defalias <tick>ecb-eobp <tick>eobp)<br>(defun ecb-event-window (event)<br>  (posn-window (event-start event)))<br>(defun ecb-event-point (event)<br>  (posn-point (event-start event)))<br>(defun ecb-event-buffer (event)<br>  (window-buffer (ecb-event-window event)))<br>(defun ecb-window-full-width (&optional window)<br>  (let ((edges (window-edges window)))<br>    (- (nth 2 edges) (nth 0 edges))))<br>(defalias <tick>ecb-window-display-height <tick>window-text-height)<br>(defalias <tick>ecb-window-full-height <tick>window-height)<br>(defalias <tick>ecb-frame-char-width <tick>frame-char-width)<br>(defalias <tick>ecb-frame-char-height <tick>frame-char-height)<br>(defalias <tick>ecb-window-edges <tick>window-edges)'
        },
        {
          subst : 'ecb-current-line',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return the current line-number - the first line in a buffer has number 1."',
          prototype : '(defsubst ecb-current-line ()',
          lispcode : '(defsubst ecb-current-line ()<br>  (+ (count-lines 1 (point)) (if (= (current-column) 0) 1 0)))'
        },
        {
          subst : 'ecb-directory-sep-char',
          filename : 'ecb/ecb-common-browser.el',
          lispcode : '(defsubst ecb-directory-sep-char (&optional refdir)<br>  (if (or (null refdir)<br>          (not (ecb-remote-path refdir)))<br>      ecb-directory-sep-char<br>    ?/))'
        },
        {
          subst : 'ecb-directory-sep-string',
          filename : 'ecb/ecb-common-browser.el',
          lispcode : '(defsubst ecb-directory-sep-string (&optional refdir)<br>  (char-to-string (ecb-directory-sep-char refdir)))<br>'
        },
        {
          subst : 'ecb-directory-should-prescanned-p',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return not nil if DIR should be prescanned for emptyness.<br>The check is performed according to the settings in the options<br>`ecb-prescan-directories-for-emptyness" and<br>`ecb-prescan-directories-exclude-regexps"."',
          prototype : '(defsubst ecb-directory-should-prescanned-p (dir)',
          lispcode : '(defsubst ecb-directory-should-prescanned-p (dir)<br>  (and (or (equal t ecb-prescan-directories-for-emptyness)<br>           (and (equal <tick>unless-remote ecb-prescan-directories-for-emptyness)<br>                (not (ecb-remote-path dir))))<br>       (not (ecb-match-regexp-list dir ecb-prescan-directories-exclude-regexps))))'
        },
        {
          subst : 'ecb-ecb-buffer-registry-buffer-list',
          filename : 'ecb/ecb-common-browser.el',
          lispcode : '(defsubst ecb-ecb-buffer-registry-buffer-list (&optional only-tree-buffers)<br>  (delq nil (mapcar (function (lambda (e)<br>                                (and (or (not only-tree-buffers)<br>                                         (nth 2 e))<br>                                     (ecb-buffer-obj (nth 0 e)))))<br>                    ecb-ecb-buffer-registry)))'
        },
        {
          subst : 'ecb-ecb-buffer-registry-get-set-fcn',
          filename : 'ecb/ecb-common-browser.el',
          lispcode : '(defsubst ecb-ecb-buffer-registry-get-set-fcn (name)<br>  (nth 3 (assoc name ecb-ecb-buffer-registry)))<br>'
        },
        {
          subst : 'ecb-ecb-buffer-registry-get-symbol',
          filename : 'ecb/ecb-common-browser.el',
          lispcode : '(defsubst ecb-ecb-buffer-registry-get-symbol (name)<br>  (nth 1 (assoc name ecb-ecb-buffer-registry)))'
        },
        {
          subst : 'ecb-ecb-buffer-registry-name-list',
          filename : 'ecb/ecb-common-browser.el',
          lispcode : '(defsubst ecb-ecb-buffer-registry-name-list (&optional only-tree-buffers)<br>  (delq nil (mapcar (function (lambda (e)<br>                                (and (or (not only-tree-buffers)<br>                                         (nth 2 e))<br>                                     (nth 0 e))))<br>                    ecb-ecb-buffer-registry)))'
        },
        {
          subst : 'ecb-ecb-buffer-registry-symbol-list',
          filename : 'ecb/ecb-common-browser.el',
          lispcode : '(defsubst ecb-ecb-buffer-registry-symbol-list (&optional only-tree-buffers)<br>  (delq nil (mapcar (function (lambda (e)<br>                                (and (or (not only-tree-buffers)<br>                                         (nth 2 e))<br>                                     (nth 1 e))))<br>                    ecb-ecb-buffer-registry)))'
        },
        {
          subst : 'ecb-edit-area-creators-add',
          filename : 'ecb/ecb-layout.el',
          lispcode : '(defsubst ecb-edit-area-creators-add (creator)<br>  (setq ecb-edit-area-creators (append ecb-edit-area-creators (list creator))))'
        },
        {
          subst : 'ecb-edit-area-creators-init',
          filename : 'ecb/ecb-layout.el',
          lispcode : '(defsubst ecb-edit-area-creators-init ()<br>  (setq ecb-edit-area-creators nil))'
        },
        {
          subst : 'ecb-fixed-filename-cache-get',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Get the cached value for PATH and FILENAME from the FIXED-FILENAMES-cache<br>in `ecb-filename-cache". If no vaue is cached for PATH and FILENAME then nil<br>is returned."',
          prototype : '(defsubst ecb-fixed-filename-cache-get (path filename)',
          lispcode : '(defsubst ecb-fixed-filename-cache-get (path filename)<br>  (ecb-multicache-get-value <tick>ecb-filename-cache<br>                            (concat path filename)<br>                            <tick>FIXED-FILENAMES))'
        },
        {
          subst : 'ecb-fixed-filename-cache-put',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "Add FIXED-FILENAME for PATH and FILENAME to the FIXED-FILENAMES-cache<br>of `ecb-filename-cache"."',
          prototype : '(defsubst ecb-fixed-filename-cache-put (path filename fixed-filename)',
          lispcode : '(defsubst ecb-fixed-filename-cache-put (path filename fixed-filename)<br>  (ecb-multicache-put-value <tick>ecb-filename-cache<br>                            (concat path filename)<br>                            <tick>FIXED-FILENAMES<br>                            fixed-filename))'
        },
        {
          subst : 'ecb-font-lock-tags',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Returns not nil if `ecb-font-lock-tags" is not nil and font-lock loaded."',
          prototype : '(defsubst ecb-font-lock-tags ()',
          lispcode : '(defsubst ecb-font-lock-tags ()<br>  (and ecb-font-lock-tags<br>       (featurep <tick>font-lock)))'
        },
        {
          subst : 'ecb-forbid-tag-display',
          filename : 'ecb/ecb-method-browser.el',
          lispcode : '(defsubst ecb-forbid-tag-display (tag)<br>  (ecb--semantic--tag-put-property tag <tick>hide-tag t))'
        },
        {
          subst : 'ecb-get-icon-for-tag',
          filename : 'ecb/ecb-method-browser.el',
          lispcode : '(defsubst ecb-get-icon-for-tag (abstract-p static-p type protection)<br>  (cdr (assq protection<br>              (cdr (assq type<br>                          (cdr (assq static-p<br>                                      (cdr (assq abstract-p<br>                                                  ecb-tag-image-name-alias-alist)))))))))<br><br>'
        },
        {
          subst : 'ecb-host-accessible-valid-time',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Get the valid-cache-time of a remote HOST concering its ping-state. If host<br>doesn"t match any regexp of `ecb-host-accessible-check-valid-time" then return<br>60 seconds."',
          prototype : '(defsubst ecb-host-accessible-valid-time (host)',
          lispcode : '(defsubst ecb-host-accessible-valid-time (host)<br>  (or (ecb-match-regexp-list host ecb-host-accessible-check-valid-time<br>                             <tick>car <tick>cdr)<br>      60))'
        },
        {
          subst : 'ecb-ignore-display-buffer-alist',
          filename : 'ecb/ecb-layout.el',
          lispcode : '(defsubst ecb-ignore-display-buffer-alist ()<br>  (or (equal ecb-ignore-display-buffer-alist <tick>always)<br>      (and (equal ecb-ignore-display-buffer-alist <tick>compile-window)<br>           ecb-compile-window-height)))'
        },
        {
          subst : 'ecb-ignore-pop-up-frames',
          filename : 'ecb/ecb-layout.el',
          lispcode : '(defsubst ecb-ignore-pop-up-frames ()<br>  (or (equal ecb-ignore-pop-up-frames <tick>always)<br>      (and (equal ecb-ignore-pop-up-frames <tick>compile-window)<br>           ecb-compile-window-height)))'
        },
        {
          subst : 'ecb-ignore-special-display',
          filename : 'ecb/ecb-layout.el',
          lispcode : '(defsubst ecb-ignore-special-display ()<br>  (or (equal ecb-ignore-special-display <tick>always)<br>      (and (equal ecb-ignore-special-display <tick>compile-window)<br>           ecb-compile-window-height)))'
        },
        {
          subst : 'ecb-match-regexp-list',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Return not nil if STR matches one of the regexps in REGEXP-LIST. If<br>ELEM-ACCESSOR is a function then it is used to get the regexp from the<br>processed elem of REGEXP-LIST. If nil the elem itself is used. If<br>RETURN-ACCESSOR is a function then it is used to get the object to return from<br>the matching elem. If nil then the matching elem itself is returned."',
          prototype : '(defsubst ecb-match-regexp-list (str regexp-list &optional elem-accessor                                     return-accessor)',
          lispcode : '(defsubst ecb-match-regexp-list (str regexp-list &optional elem-accessor<br>                                     return-accessor)<br>  (let ((elem-acc (or elem-accessor <tick>identity))<br>        (return-acc (or return-accessor <tick>identity)))<br>    (catch <tick>exit<br>      (dolist (elem regexp-list)<br>        (let ((case-fold-search t))<br>          (save-match-data<br>            (if (string-match (funcall elem-acc elem) str)<br>                (throw <tick>exit (funcall return-acc elem))))<br>          nil)))))<br>'
        },
        {
          subst : 'ecb-multicache-init',
          filename : 'ecb/ecb-util.el',
          docstring : '  "Initialize the ecb-multicache of CACHE-VAR. If CACHE-VAR contains already<br>a valid cache then nothing is done otherwise a new cache is created."',
          prototype : '(defsubst ecb-multicache-init (cache-var)',
          lispcode : '(defsubst ecb-multicache-init (cache-var)<br>  (or (ecb-multicache-p cache-var)<br>      (set cache-var (make-hash-table :size (get cache-var <tick>ecb-multicache-size)<br>                                      :test (get cache-var <tick>ecb-multicache-test)))))'
        },
        {
          subst : 'ecb-show-at-least-one-tag-p',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Not nil if at least one of the tags in TAGLIST should be displayed in the<br>Methods-buffer."',
          prototype : '(defsubst ecb-show-at-least-one-tag-p (taglist)',
          lispcode : '(defsubst ecb-show-at-least-one-tag-p (taglist)<br>  (catch <tick>found<br>    (dolist (tag taglist)<br>      (if (not (ecb-tag-forbidden-display-p tag))<br>          (throw <tick>found t)))<br>    nil))<br>'
        },
        {
          subst : 'ecb-sources-read-only-check-p',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return not nil if the sources of DIR should be checked for read-only-state.<br>The check is performed according to the settings in the options<br>`ecb-sources-perform-read-only-check" and<br>`ecb-read-only-check-exclude-regexps"."',
          prototype : '(defsubst ecb-sources-read-only-check-p (dir)',
          lispcode : '(defsubst ecb-sources-read-only-check-p (dir)<br>  (and (or (equal t ecb-sources-perform-read-only-check)<br>           (and (equal <tick>unless-remote ecb-sources-perform-read-only-check)<br>                (not (ecb-remote-path dir))))<br>       (not (ecb-match-regexp-list dir ecb-read-only-check-exclude-regexps))))'
        },
        {
          subst : 'ecb-string<',
          filename : 'ecb/ecb-util.el',
          lispcode : '(defsubst ecb-string< (str1 str2 &optional ignore-case)<br>  (let ((s1 (or (and (stringp str1) str1) (symbol-name str1)))<br>        (s2 (or (and (stringp str2) str2) (symbol-name str2)))<br>        (result nil))<br>    (setq result (ecb-compare-strings s1 nil nil s2 nil nil ignore-case))<br>    (and (numberp result) (< result 0))))'
        },
        {
          subst : 'ecb-string=',
          filename : 'ecb/ecb-util.el',
          lispcode : '(defsubst ecb-string= (str1 str2 &optional ignore-case)<br>  (let ((s1 (or (and (stringp str1) str1) (symbol-name str1)))<br>        (s2 (or (and (stringp str2) str2) (symbol-name str2))))<br>    (eq (ecb-compare-strings s1 nil nil s2 nil nil ignore-case) t)))'
        },
        {
          subst : 'ecb-tag-forbidden-display-p',
          filename : 'ecb/ecb-method-browser.el',
          lispcode : '(defsubst ecb-tag-forbidden-display-p (tag)<br>  (ecb--semantic--tag-get-property tag <tick>hide-tag))'
        },
        {
          subst : 'ecb-use-images-for-semantic-tags',
          filename : 'ecb/ecb-method-browser.el',
          lispcode : '(defsubst ecb-use-images-for-semantic-tags ()<br>  (and ecb-display-image-icons-for-semantic-tags<br>       (ecb-images-can-be-used)<br>       (equal ecb-tree-buffer-style <tick>image)))'
        },
        {
          subst : 'ecb-vc-directory-should-be-checked-p',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return not nil if the sources of DIR should be checked for VC-state.<br>The check is performed according to the settings in the options<br>`ecb-vc-enable-support" and `ecb-vc-directory-should-be-checked-p"."',
          prototype : '(defsubst ecb-vc-directory-should-be-checked-p (dir)',
          lispcode : '(defsubst ecb-vc-directory-should-be-checked-p (dir)<br>  (and dir<br>       ecb-vc-needed-vc-package-available-p<br>       (or (equal t ecb-vc-enable-support)<br>           (and (equal <tick>unless-remote ecb-vc-enable-support)<br>                (not (ecb-remote-path dir))))<br>       (not (ecb-match-regexp-list dir ecb-vc-directory-exclude-regexps))))'
        },
        {
          subst : 'ecb-vc-get-ascii-icon-for-vc-state',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return the associated texual icon for the vc-state STATE."',
          prototype : '(defsubst ecb-vc-get-ascii-icon-for-vc-state (state)',
          lispcode : '(defsubst ecb-vc-get-ascii-icon-for-vc-state (state)<br>  (or (nth 1 (cdr (assq state ecb-vc-state-icon-alist)))<br>      <apo>(?)<apo>))<br>'
        },
        {
          subst : 'ecb-vc-get-image-name-for-vc-state',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Return the associated image-name for the vc-state STATE."',
          prototype : '(defsubst ecb-vc-get-image-name-for-vc-state (state)',
          lispcode : '(defsubst ecb-vc-get-image-name-for-vc-state (state)<br>  (or (nth 0 (cdr (assq state ecb-vc-state-icon-alist)))<br>      <apo>vc-unknown<apo>))'
        },
        {
          subst : 'tree-buffer-add-to-displayed-nodes',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Add NODE at the end of the displayed nodes `tree-buffer-displayed-nodes"."',
          prototype : '(defsubst tree-buffer-add-to-displayed-nodes (node)',
          lispcode : '(defsubst tree-buffer-add-to-displayed-nodes (node)<br>  (setq tree-buffer-displayed-nodes<br>        (append tree-buffer-displayed-nodes (list node))))'
        },
        {
          subst : 'tree-buffer-ascii-symbol-4-image-name',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return the ascii-symbol which displays the tree-image NAME. This is done<br>according to the value of the slot EXPAND-SYMBOL-BEFORE-P of<br>`tree-buffer-spec". It always returns a copy of the registered string in<br>`tree-buffer-tree-image-names"!"',
          prototype : '(defsubst tree-buffer-ascii-symbol-4-image-name (name)',
          lispcode : '(defsubst tree-buffer-ascii-symbol-4-image-name (name)<br>  (let ((sym (if (tree-buffer-spec->expand-symbol-before-p tree-buffer-spec)<br>                 <tick>before<br>               <tick>after)))<br>    ;; Klaus Berndl <klaus.berndl@sdm.de>: If there are performance issues<br>    ;; concerning the tree-buffer-redisplay then maybe this copy-sequence is<br>    ;; the reason. But must be profiled! If yes, then an alternative could be'
        },
        {
          subst : 'tree-buffer-aset',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Same as `aset" but returns changed ARRAY."',
          prototype : '(defsubst tree-buffer-aset (array idx newelt)',
          lispcode : '(defsubst tree-buffer-aset (array idx newelt)<br>  (aset array idx newelt)<br>  array)'
        },
        {
          subst : 'tree-buffer-create-image',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return non-nil if image type TYPE is available.<br>Image types are symbols like `xbm" or `jpeg"."',
          prototype : '(defsubst tree-buffer-create-image (file type)  (apply "create-image         "(,file ,type nil                 ,@tree-buffer-image-properties-emacs)))(defsubst tree-buffer-image-type-available-p (type)',
          lispcode : '(defsubst tree-buffer-create-image (file type)<br>  (apply <tick>create-image<br>         <backtick>(,file ,type nil<br>                 ,@tree-buffer-image-properties-emacs)))<br>(defsubst tree-buffer-image-type-available-p (type)<br>  (image-type-available-p type))'
        },
        {
          subst : 'tree-buffer-current-line',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return the current line-number - the first line in a buffer has number 1."',
          prototype : '(defsubst tree-buffer-current-line ()',
          lispcode : '(defsubst tree-buffer-current-line ()<br>  (+ (count-lines 1 (point)) (if (= (current-column) 0) 1 0)))'
        },
        {
          subst : 'tree-buffer-displayed-nodes-copy',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return a copy of the displayed-nodes-list `tree-buffer-displayed-nodes".<br>Only the list-structure is copied not the elements itself."',
          prototype : '(defsubst tree-buffer-displayed-nodes-copy ()',
          lispcode : '(defsubst tree-buffer-displayed-nodes-copy ()<br>  (tree-buffer-copy-list tree-buffer-displayed-nodes))'
        },
        {
          subst : 'tree-buffer-displayed-nodes-remove-node',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Remove NODE from the displayed nodes `tree-buffer-displayed-nodes"."',
          prototype : '(defsubst tree-buffer-displayed-nodes-remove-node (node)',
          lispcode : '(defsubst tree-buffer-displayed-nodes-remove-node (node)<br>  (setq tree-buffer-displayed-nodes<br>        (delq node tree-buffer-displayed-nodes)))'
        },
        {
          subst : 'tree-buffer-displayed-nodes-remove-nth',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Remove the N-th node from the displayed nodes `tree-buffer-displayed-nodes"."',
          prototype : '(defsubst tree-buffer-displayed-nodes-remove-nth (n)',
          lispcode : '(defsubst tree-buffer-displayed-nodes-remove-nth (n)<br>  (tree-buffer-remove-elt tree-buffer-displayed-nodes n))'
        },
        {
          subst : 'tree-buffer-displayed-nodes-replace-nth',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Replace the N-th node with NEW-NODE in `tree-buffer-displayed-nodes".<br>Return the updated list."',
          prototype : '(defsubst tree-buffer-displayed-nodes-replace-nth (n new-node)',
          lispcode : '(defsubst tree-buffer-displayed-nodes-replace-nth (n new-node)<br>  (tree-buffer-set-elt tree-buffer-displayed-nodes n new-node))'
        },
        {
          subst : 'tree-buffer-get-data-store',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return the current value of `tree-buffer-data-store"."',
          prototype : '(defsubst tree-buffer-get-data-store ()',
          lispcode : '(defsubst tree-buffer-get-data-store ()<br>  tree-buffer-data-store)<br>'
        },
        {
          subst : 'tree-buffer-image-cache-get',
          filename : 'ecb/tree-buffer.el',
          lispcode : '(defsubst tree-buffer-image-cache-get (tree-image-name)<br>  (cdr (assoc tree-image-name<br>              tree-buffer-local-image-cache)))'
        },
        {
          subst : 'tree-buffer-image-cache-put',
          filename : 'ecb/tree-buffer.el',
          lispcode : '(defsubst tree-buffer-image-cache-put (tree-image-name image)<br>  (setq tree-buffer-local-image-cache<br>        (cons (cons tree-image-name image)<br>              tree-buffer-local-image-cache)))'
        },
        {
          subst : 'tree-buffer-initialize-displayed-nodes',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Initialize the `tree-buffer-displayed-nodes" with nil."',
          prototype : '(defsubst tree-buffer-initialize-displayed-nodes ()',
          lispcode : '(defsubst tree-buffer-initialize-displayed-nodes ()<br>  (setq tree-buffer-displayed-nodes nil))'
        },
        {
          subst : 'tree-buffer-map-displayed-nodes',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Apply function to each node of `tree-buffer-displayed-nodes".<br>Make a list of the results. The result is a list just as long as<br>`tree-buffer-displayed-nodes"."',
          prototype : '(defsubst tree-buffer-map-displayed-nodes (function)',
          lispcode : '(defsubst tree-buffer-map-displayed-nodes (function)<br>  (mapcar (function (lambda (n)<br>                      (funcall function n)))<br>          tree-buffer-displayed-nodes))<br>'
        },
        {
          subst : 'tree-buffer-nth-displayed-node',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return the N-th displayed node of current tree-buffer.<br>Counts from 0 whereas the 0-th node is the topmost displayed node."',
          prototype : '(defsubst tree-buffer-nth-displayed-node (n)',
          lispcode : '(defsubst tree-buffer-nth-displayed-node (n)<br>  (nth n tree-buffer-displayed-nodes))'
        },
        {
          subst : 'tree-buffer-number-of-displayed-nodes',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return the number of current displayed nodes."',
          prototype : '(defsubst tree-buffer-number-of-displayed-nodes ()',
          lispcode : '(defsubst tree-buffer-number-of-displayed-nodes ()<br>  (length tree-buffer-displayed-nodes))'
        },
        {
          subst : 'tree-buffer-set-data-store',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Set `tree-buffer-data-store" to DATA."',
          prototype : '(defsubst tree-buffer-set-data-store (data)',
          lispcode : '(defsubst tree-buffer-set-data-store (data)<br>  (setq tree-buffer-data-store data))'
        },
        {
          subst : 'tree-buffer-set-displayed-nodes',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Set `tree-buffer-displayed-nodes" to DISPLAYED-NODES.<br>DISPLAYED-NODES which has to be a list of node-objects. Replaces the old list<br>of displayed-nodes."',
          prototype : '(defsubst tree-buffer-set-displayed-nodes (displayed-nodes)',
          lispcode : '(defsubst tree-buffer-set-displayed-nodes (displayed-nodes)<br>  (setq tree-buffer-displayed-nodes displayed-nodes))'
        },
        {
          subst : 'tree-node-id-next',
          filename : 'ecb/tree-buffer.el',
          lispcode : '(defsubst tree-node-id-next ()<br>  (setq tree-node-id (1+ tree-node-id)))'
        },
        {
          subst : 'tree-node-indentlength',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return the length of slot INDENTSTR."',
          prototype : '(defsubst tree-node-indentlength (node)',
          lispcode : '(defsubst tree-node-indentlength (node)<br>  (length (tree-node->indentstr node)))'
        },
        {
          subst : 'tree-node-linelength',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Return the length of the full node display in current tree-buffer.<br>This is the length of the indentation (slot INDENTSTR) plus the length of the<br>slot DISPLAYED-NAME of NODE."',
          prototype : '(defsubst tree-node-linelength (node)',
          lispcode : '(defsubst tree-node-linelength (node)<br>  (+ (length (tree-node->displayed-name node))<br>     (tree-node-indentlength node)))'
        },
        {
          subst : 'tree-node-remove-child',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Removes the CHILD from the childrens of NODE."',
          prototype : '(defsubst tree-node-remove-child (node child)',
          lispcode : '(defsubst tree-node-remove-child (node child)<br>  (setf (tree-node->parent child) nil)<br>  (setf (tree-node->children node)<br>        (delq child (tree-node->children node))))'
        },
        {
          subst : 'tree-node-sort-children',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Run `sort" for the children of NODE with SORTFN as sorting-function.<br>SORTFN must be a function acceptable by `sort". The sorted children-list<br>become the new children of NODE."',
          prototype : '(defsubst tree-node-sort-children (node sortfn)',
          lispcode : '(defsubst tree-node-sort-children (node sortfn)<br>  (setf (tree-node->children node)<br>        (sort (tree-node->children node) sortfn)))'
        },
        {
          subst : 'tree-node-toggle-expanded',
          filename : 'ecb/tree-buffer.el',
          docstring : '  "Toggle the value of slot EXPANDED."',
          prototype : '(defsubst tree-node-toggle-expanded (node)',
          lispcode : '(defsubst tree-node-toggle-expanded (node)<br>  (setf (tree-node->expanded node) (not (tree-node->expanded node))))'
        }
    ]
  }