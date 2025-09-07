const classes =
  {
    names:
      [
        'ecb-dlist-node',
        'ecb-nav-file-history-item',
        'ecb-nav-history-item',
        'ecb-nav-tag-history-item'
    ],

    info:
      [
        {
          class : 'ecb-dlist-node',
          filename : 'ecb/ecb-navigate.el',
          docstring : '  "A node in a double linked list."',
          prototype : '(defclass ecb-dlist-node ()  ((previous :initform nil); :protection :private)   (next :initform nil); :protection :private)   (data :initarg :data :initform nil); :protection :private)   )',
          parameter : '',
          lispcode : '(defclass ecb-dlist-node ()<br>  ((previous :initform nil); :protection :private)<br>   (next :initform nil); :protection :private)<br>   (data :initarg :data :initform nil); :protection :private)<br>   )<br>  )'
        },
        {
          class : 'ecb-nav-file-history-item',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'ecb-nav-history-item',
          lispcode : '(defclass ecb-nav-file-history-item (ecb-nav-history-item)<br>  ((file :initarg :file :initform <apo><apo>); :protection :private)<br>   ;; the following is nil if the item does not point to an indirect-buffer<br>   ;; based on a file-buffer<br>   (indirect-buffer-name :initarg :indirect-buffer-name :initform <apo><apo>) ; :protection :private)'
        },
        {
          class : 'ecb-nav-history-item',
          filename : 'ecb/ecb-navigate.el',
          parameter : '',
          lispcode : '(defclass ecb-nav-history-item ()<br>  ((pos :initarg :pos :initform 0); :protection :private)<br>   (window-start :initarg :window-start :initform 0); :protection :private)<br>   )<br>  )'
        },
        {
          class : 'ecb-nav-tag-history-item',
          filename : 'ecb/ecb-navigate.el',
          parameter : 'ecb-nav-history-item',
          lispcode : '(defclass ecb-nav-tag-history-item (ecb-nav-history-item)<br>  ((tag-buffer :initarg :tag-buffer :initform nil); :protection :private)<br>   (tag-start :initarg :tag-start :initform nil) ; :protection :private)<br>   (tag-end :initarg :tag-end :initform nil) ; :protection :private)<br>   (tag-name :initarg :tag-name :initform nil) ; :protection :private)<br>   (narrow :initarg :narrow :initform nil); :protection :private)<br>   )<br>  )'
        }
    ]
  }