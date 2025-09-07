const groups =
  {
    names:
      [
        'ecb',
        'ecb-analyse',
        'ecb-compilation',
        'ecb-create-layout',
        'ecb-cycle',
        'ecb-directories',
        'ecb-eshell',
        'ecb-examples',
        'ecb-face-options',
        'ecb-faces',
        'ecb-general',
        'ecb-help',
        'ecb-history',
        'ecb-jde-integration',
        'ecb-layout',
        'ecb-methods',
        'ecb-mode-line',
        'ecb-most-important',
        'ecb-non-semantic',
        'ecb-sources',
        'ecb-speedbar',
        'ecb-symboldef',
        'ecb-tree-buffer',
        'ecb-upgrade-internal',
        'ecb-version-control',
        'ecb-winman-support'
    ],

    info:
      [
        {
          group : 'ecb',
          filename : 'ecb/ecb.el',
          docstring : '  "Emacs code browser."',
          prototype : '(defgroup ecb nil',
          lispcode : '(defgroup ecb nil<br>  :group <tick>tools<br>  :prefix <apo>ecb-<apo>)'
        },
        {
          group : 'ecb-analyse',
          filename : 'ecb/ecb-analyse.el',
          docstring : '  "Settings for the analyse-buffer in the Emacs code browser."',
          prototype : '(defgroup ecb-analyse nil',
          lispcode : '(defgroup ecb-analyse nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-<apo>)<br>'
        },
        {
          group : 'ecb-compilation',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Settings for the compile window of ECB."',
          prototype : '(defgroup ecb-compilation nil',
          lispcode : '(defgroup ecb-compilation nil<br>  :group <tick>ecb-layout<br>  :prefix <apo>ecb-<apo>)<br>'
        },
        {
          group : 'ecb-create-layout',
          filename : 'ecb/ecb-create-layout.el',
          docstring : '  "Settings for creating new ECB-layouts."',
          prototype : '(defgroup ecb-create-layout nil',
          lispcode : '(defgroup ecb-create-layout nil<br>  :group <tick>ecb-layout<br>  :prefix <apo>ecb-create-layout-<apo>)'
        },
        {
          group : 'ecb-cycle',
          filename : 'ecb/ecb-cycle.el',
          docstring : '  "Setting for cycling through misc ECB buffers."',
          prototype : '(defgroup ecb-cycle nil',
          lispcode : '(defgroup ecb-cycle nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-cycle-<apo>)<br>'
        },
        {
          group : 'ecb-directories',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Settings for the directories-buffer in the Emacs code browser."',
          prototype : '(defgroup ecb-directories nil',
          lispcode : '(defgroup ecb-directories nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-<apo>)'
        },
        {
          group : 'ecb-eshell',
          filename : 'ecb/ecb-eshell.el',
          docstring : '  "Settings for eshell integration within the ECB."',
          prototype : '(defgroup ecb-eshell nil',
          lispcode : '(defgroup ecb-eshell nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-eshell-<apo>)'
        },
        {
          group : 'ecb-examples',
          filename : 'ecb/ecb-examples.el',
          docstring : '  "Settings for the bufferinfo example in the Emacs code browser."',
          prototype : '(defgroup ecb-examples nil',
          lispcode : '(defgroup ecb-examples nil<br>  :group <tick>ecb-examples-bufferinfo<br>  :prefix <apo>ecb-<apo>)<br><br>;; The following three options are typical for a special ECB-buffer which<br>;; should be synchronized with current buffer in the edit-area.'
        },
        {
          group : 'ecb-face-options',
          filename : 'ecb/ecb-face.el',
          docstring : '  "Settings for all faces used in ECB."',
          prototype : '(defgroup ecb-face-options nil',
          lispcode : '(defgroup ecb-face-options nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-<apo>)'
        },
        {
          group : 'ecb-faces',
          filename : 'ecb/ecb-face.el',
          docstring : '  "Definitions of all ECB-faces"',
          prototype : '(defgroup ecb-faces nil',
          lispcode : '(defgroup ecb-faces nil<br>  :group <tick>ecb-face-options<br>  :group <tick>faces<br>  :prefix <apo>ecb-<apo>)'
        },
        {
          group : 'ecb-general',
          filename : 'ecb/ecb.el',
          docstring : '  "General settings for the Emacs code browser."',
          prototype : '(defgroup ecb-general nil',
          lispcode : '(defgroup ecb-general nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-<apo>)'
        },
        {
          group : 'ecb-help',
          filename : 'ecb/ecb-help.el',
          docstring : '  "Settings for the ECB online help"',
          prototype : '(defgroup ecb-help nil',
          lispcode : '(defgroup ecb-help nil<br>  :group <tick>ecb)'
        },
        {
          group : 'ecb-history',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Settings for the history-buffer in the Emacs code browser."',
          prototype : '(defgroup ecb-history nil',
          lispcode : '(defgroup ecb-history nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-<apo>)'
        },
        {
          group : 'ecb-jde-integration',
          filename : 'ecb/ecb-jde.el',
          docstring : '  "Settings for the JDEE-integration in the Emacs code browser."',
          prototype : '(defgroup ecb-jde-integration nil',
          lispcode : '(defgroup ecb-jde-integration nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-jde-<apo>)<br>'
        },
        {
          group : 'ecb-layout',
          filename : 'ecb/ecb-layout.el',
          docstring : '  "Settings for the screen-layout of the Emacs code browser."',
          prototype : '(defgroup ecb-layout nil',
          lispcode : '(defgroup ecb-layout nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-<apo>)'
        },
        {
          group : 'ecb-methods',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Settings for the methods-buffer in the Emacs code browser."',
          prototype : '(defgroup ecb-methods nil',
          lispcode : '(defgroup ecb-methods nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-<apo>)<br>'
        },
        {
          group : 'ecb-mode-line',
          filename : 'ecb/ecb-mode-line.el',
          docstring : '  "Settings for the modelines of the ECB-tree-buffers."',
          prototype : '(defgroup ecb-mode-line nil',
          lispcode : '(defgroup ecb-mode-line nil<br>  :group <tick>ecb-general<br>  :prefix <apo>ecb-<apo>)'
        },
        {
          group : 'ecb-most-important',
          filename : 'ecb/ecb.el',
          docstring : '  "The most important settings of ECB you should know."',
          prototype : '(defgroup ecb-most-important nil',
          lispcode : '(defgroup ecb-most-important nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-<apo>)'
        },
        {
          group : 'ecb-non-semantic',
          filename : 'ecb/ecb-method-browser.el',
          docstring : '  "Settings for parsing and displaying non-semantic files."',
          prototype : '(defgroup ecb-non-semantic nil',
          lispcode : '(defgroup ecb-non-semantic nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-<apo>)<br>'
        },
        {
          group : 'ecb-sources',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Settings for the sources-buffers in the Emacs code browser."',
          prototype : '(defgroup ecb-sources nil',
          lispcode : '(defgroup ecb-sources nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-<apo>)'
        },
        {
          group : 'ecb-speedbar',
          filename : 'ecb/ecb-speedbar.el',
          docstring : '  "Settings for the speedbar-integration of ECB."',
          prototype : '(defgroup ecb-speedbar nil',
          lispcode : '(defgroup ecb-speedbar nil<br>  :group <tick>ecb-general<br>  :prefix <apo>ecb-<apo>)'
        },
        {
          group : 'ecb-symboldef',
          filename : 'ecb/ecb-symboldef.el',
          docstring : '  "Settings for the symbol-definition-buffer in the Emacs code browser."',
          prototype : '(defgroup ecb-symboldef nil',
          lispcode : '(defgroup ecb-symboldef nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-<apo>)'
        },
        {
          group : 'ecb-tree-buffer',
          filename : 'ecb/ecb-common-browser.el',
          docstring : '  "General settings related to the tree-buffers of ECB."',
          prototype : '(defgroup ecb-tree-buffer nil',
          lispcode : '(defgroup ecb-tree-buffer nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-<apo>)'
        },
        {
          group : 'ecb-upgrade-internal',
          filename : 'ecb/ecb-upgrade.el',
          docstring : '  "Only Internal setting for the ECB upgrade-mechanism - no user-options!"',
          prototype : '(defgroup ecb-upgrade-internal nil',
          lispcode : '(defgroup ecb-upgrade-internal nil<br>  :group <tick>ecb-general<br>  :prefix <apo>ecb-<apo>)'
        },
        {
          group : 'ecb-version-control',
          filename : 'ecb/ecb-file-browser.el',
          docstring : '  "Settings for the version-control support in the ECB."',
          prototype : '(defgroup ecb-version-control nil',
          lispcode : '(defgroup ecb-version-control nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-<apo>)'
        },
        {
          group : 'ecb-winman-support',
          filename : 'ecb/ecb-winman-support.el',
          docstring : '  "Settings for supporting several window-managers.<br>Currently winring and escreen are supported."',
          prototype : '(defgroup ecb-winman-support nil',
          lispcode : '(defgroup ecb-winman-support nil<br>  :group <tick>ecb<br>  :prefix <apo>ecb-winman-<apo>)'
        }
    ]
  }