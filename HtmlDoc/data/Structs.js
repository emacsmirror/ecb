const structs =
  {
    names:
      [
        'tree-buffer-spec',
        'tree-node'
    ],

    info:
      [
        {
          struct : 'tree-buffer-spec',
          filename : 'tree-buffer.el',
          lispcode : '(cl-defstruct (tree-buffer-spec<br>            (:constructor -tree-buffer-spec-new)<br>            (:copier nil)<br>            (:conc-name tree-buffer-spec->))<br>  (tree-indent nil :read-only t)<br>  (menu-creator nil :read-only t)<br>  (menu-titles nil :read-only t)<br>  (modeline-menu-creator nil :read-only t)<br>  (sticky-parent-p nil :read-only t)<br>  (sticky-indent-string nil :read-only t)<br>  (sticky-parent-fn nil :read-only t)<br>  (type-facer nil :read-only t)<br>  (expand-symbol-before-p nil :read-only t)<br>  (mouse-action-trigger nil :read-only t)<br>  (is-click-valid-fn nil :read-only t)<br>  (node-selected-fn nil :read-only t)<br>  (node-expanded-fn nil :read-only t)<br>  (node-collapsed-fn nil :read-only t)<br>  (node-mouse-over-fn nil :read-only t)<br>  (mouse-highlight-fn nil :read-only t)<br>  (node-data-equal-fn nil :read-only t)<br>  (after-update-hook nil :read-only t)<br>  (maybe-empty-node-types nil :read-only t)<br>  (leaf-node-types nil :read-only t)<br>  (general-face nil :read-only t)<br>  (incr-search-additional-pattern nil :read-only t)<br>  (incr-search-p nil :read-only t)<br>  (reduce-tree-for-incr-search-fn nil :read-only t)<br>  (hor-scroll-step nil :read-only t)<br>  (default-images-dir nil :read-only t)<br>  (additional-images-dir nil :read-only t)<br>  (image-file-prefix nil :read-only t)<br>  (style nil :read-only t)<br>  (ascii-guide-face nil :read-only t))'
        },
        {
          struct : 'tree-node',
          filename : 'tree-buffer.el',
          lispcode : '(cl-defstruct (tree-node<br>              (:constructor -tree-node-new)<br>              (:copier nil)<br>              (:conc-name tree-node->))<br>  name<br>  type<br>  data<br>  children<br>  parent<br>  shrink-name<br>  shrink-name-spec<br>  expandable<br>  expanded<br>  displayed-name<br>  indentstr<br>  id)'
        }
    ]
  }