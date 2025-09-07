const methods =
  {
    names:
      [
        'ecb-analyse-more-nodes',
        'ecb-get-data',
        'ecb-get-next',
        'ecb-get-previous',
        'ecb-nav-get-file',
        'ecb-nav-get-indirect-buffer-name',
        'ecb-nav-get-narrow',
        'ecb-nav-get-pos',
        'ecb-nav-get-tag-buffer',
        'ecb-nav-get-tag-end',
        'ecb-nav-get-tag-name',
        'ecb-nav-get-tag-start',
        'ecb-nav-get-window-start',
        'ecb-nav-goto',
        'ecb-nav-is-valid',
        'ecb-nav-save',
        'ecb-nav-set-file',
        'ecb-nav-set-indirect-buffer-name',
        'ecb-nav-set-pos',
        'ecb-nav-set-window-start',
        'ecb-nav-to-string',
        'ecb-set-data',
        'ecb-set-next',
        'ecb-set-previous'
    ],

    info:
      [
        {
          method : 'ecb-analyse-more-nodes',
          filename : 'ecb/ecb-analyse.el',
          docstring : '  "Show a set of ecb-nodes specific to CONTEXT."',
          prototype : '(cl-defmethod ecb-analyse-more-nodes ((context semantic-analyze-context-functionarg))',
          parameter : 'context semantic-analyze-context-functionarg',
          lispcode : '(cl-defmethod ecb-analyse-more-nodes ((context semantic-analyze-context-functionarg))<br>  (cl-call-next-method)<br>  (let ((func (oref context function)))<br>    (when func<br>      (ecb-analyse-add-nodes <apo>Function<apo> <apo>Function<apo> func ecb-analyse-nodetype-function)<br>      ;; An index for the argument the prefix is in:<br>      (let ((arg (oref context argument)))<br>	(when arg<br>	  (ecb-analyse-add-nodes <apo>Argument #<apo><br>                                 (format <apo>Argument # %d<apo> (oref context index))<br>                                 arg<br>                                 ecb-analyse-nodetype-function-arg))))))'
        },
        {
          method : 'ecb-get-data',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'node ecb-dlist-node',
          lispcode : '(cl-defmethod ecb-get-data ((node ecb-dlist-node))<br>  (oref node data))'
        },
        {
          method : 'ecb-get-next',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'node ecb-dlist-node',
          lispcode : '(cl-defmethod ecb-get-next ((node ecb-dlist-node))<br>  (oref node next))'
        },
        {
          method : 'ecb-get-previous',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'node ecb-dlist-node',
          lispcode : '(cl-defmethod ecb-get-previous ((node ecb-dlist-node))<br>  (oref node previous))'
        },
        {
          method : 'ecb-nav-get-file',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-file-history-item',
          lispcode : '(cl-defmethod ecb-nav-get-file ((item ecb-nav-file-history-item))<br>  (oref item file))'
        },
        {
          method : 'ecb-nav-get-indirect-buffer-name',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-file-history-item',
          lispcode : '(cl-defmethod ecb-nav-get-indirect-buffer-name ((item ecb-nav-file-history-item))<br>  (oref item indirect-buffer-name))'
        },
        {
          method : 'ecb-nav-get-narrow',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-tag-history-item',
          lispcode : '(cl-defmethod ecb-nav-get-narrow ((item ecb-nav-tag-history-item))<br>  (oref item narrow))'
        },
        {
          method : 'ecb-nav-get-pos',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-history-item',
          lispcode : '(cl-defmethod ecb-nav-get-pos ((item ecb-nav-history-item))<br>  (oref item pos))'
        },
        {
          method : 'ecb-nav-get-tag-buffer',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-tag-history-item',
          lispcode : '(cl-defmethod ecb-nav-get-tag-buffer ((item ecb-nav-tag-history-item))<br>  (oref item tag-buffer))'
        },
        {
          method : 'ecb-nav-get-tag-end',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-tag-history-item',
          lispcode : '(cl-defmethod ecb-nav-get-tag-end ((item ecb-nav-tag-history-item))<br>  (oref item tag-end))'
        },
        {
          method : 'ecb-nav-get-tag-name',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-tag-history-item',
          lispcode : '(cl-defmethod ecb-nav-get-tag-name ((item ecb-nav-tag-history-item))<br>  (oref item tag-name))'
        },
        {
          method : 'ecb-nav-get-tag-start',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-tag-history-item',
          lispcode : '(cl-defmethod ecb-nav-get-tag-start ((item ecb-nav-tag-history-item))<br>  (oref item tag-start))'
        },
        {
          method : 'ecb-nav-get-window-start',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-history-item',
          lispcode : '(cl-defmethod ecb-nav-get-window-start ((item ecb-nav-history-item))<br>  (oref item window-start))'
        },
        {
          method : 'ecb-nav-goto',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-file-history-item',
          lispcode : '(cl-defmethod ecb-nav-goto ((item ecb-nav-file-history-item))<br>  (when (ecb-nav-get-file item)<br>    (if (ecb-nav-get-indirect-buffer-name item)<br>        (switch-to-buffer (ecb-nav-get-indirect-buffer-name item))<br>      (find-file (ecb-nav-get-file item)))<br>    (widen)<br>    (goto-char (ecb-nav-get-pos item))<br>    (let ((win-start (ecb-nav-get-window-start item)))<br>      (if win-start<br>          (set-window-start (selected-window) win-start)))))'
        },
        {
          method : 'ecb-nav-is-valid',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-file-history-item',
          lispcode : '(cl-defmethod ecb-nav-is-valid ((item ecb-nav-file-history-item))<br>  ;; TODO: Klaus Berndl <klaus.berndl@sdm.de>: for saveness we should test if<br>  ;; file points to a readable file - but what about remote-file (can last<br>  ;; long)?<br>  (and (ecb-nav-get-file item)'
        },
        {
          method : 'ecb-nav-save',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-file-history-item',
          lispcode : '(cl-defmethod ecb-nav-save ((item ecb-nav-file-history-item))<br>  (ecb-nav-set-pos item (point))<br>  (ecb-nav-set-window-start item (window-start))<br>  (ecb-nav-set-file item (ecb-buffer-file-name))<br>  (ecb-nav-set-indirect-buffer-name item (and (ecb-buffer-file-name)<br>                                              (buffer-base-buffer)<br>                                              (buffer-name)))<br>  t)'
        },
        {
          method : 'ecb-nav-set-file',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-file-history-item file',
          lispcode : '(cl-defmethod ecb-nav-set-file ((item ecb-nav-file-history-item) file)<br>  (oset item file file))'
        },
        {
          method : 'ecb-nav-set-indirect-buffer-name',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-file-history-item indirect-buffer-name',
          lispcode : '(cl-defmethod ecb-nav-set-indirect-buffer-name ((item ecb-nav-file-history-item) indirect-buffer-name)<br>  (oset item indirect-buffer-name indirect-buffer-name))'
        },
        {
          method : 'ecb-nav-set-pos',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-history-item pos',
          lispcode : '(cl-defmethod ecb-nav-set-pos ((item ecb-nav-history-item) pos)<br>  (oset item pos pos))'
        },
        {
          method : 'ecb-nav-set-window-start',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-history-item point',
          lispcode : '(cl-defmethod ecb-nav-set-window-start ((item ecb-nav-history-item) point)<br>  (oset item window-start point))'
        },
        {
          method : 'ecb-nav-to-string',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'item ecb-nav-file-history-item',
          lispcode : '(cl-defmethod ecb-nav-to-string ((item ecb-nav-file-history-item))<br>  (concat (ecb-nav-get-file item) <apo>-<apo><br>          (ecb-nav-get-indirect-buffer-name item)<br>          <apo>:<apo> (cl-call-next-method)))'
        },
        {
          method : 'ecb-set-data',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'node ecb-dlist-node data',
          lispcode : '(cl-defmethod ecb-set-data ((node ecb-dlist-node) data)<br>  (oset node data data))'
        },
        {
          method : 'ecb-set-next',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'node ecb-dlist-node next',
          lispcode : '(cl-defmethod ecb-set-next ((node ecb-dlist-node) next)<br>  (let ((old-next (ecb-get-next node)))<br>    (when old-next<br>      (oset old-next previous nil))<br>    (oset node next next)<br>    (when next<br>      (ecb-set-previous next nil)<br>      (oset next previous node))))'
        },
        {
          method : 'ecb-set-previous',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'node ecb-dlist-node previous',
          lispcode : '(cl-defmethod ecb-set-previous ((node ecb-dlist-node) previous)<br>  (let ((old-previous (ecb-get-previous node)))<br>    (when old-previous<br>      (oset old-previous next nil))<br>    (oset node previous previous)<br>    (when previous<br>      (ecb-set-next previous nil)<br>      (oset previous next node))))<br><br>'
        }
    ]
  }