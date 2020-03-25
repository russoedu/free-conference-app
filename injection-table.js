setTimeout(function removeFromPage () {
  if (document.getElementsByTagName('HEAD')) {
    const style = document.createElement('STYLE')
    const head = document.getElementsByTagName('HEAD')[0]
    const styleText = `
    #docs-branding-container, #formula-bar, .docs-title-outer.docs-title-inline-rename, #docs-titlebar-share-client-button,
    #docs-titlebar-edit-buttons, #docs-presence-container {
      display:none!important
    }
    #docs-menubars, #docs-toolbar-wrapper {
      visibility: hidden
    }#docs-bars {
      height:33px
    }
    .docs-material #docs-header .docs-titlebar-buttons {
      padding-right: 56px
    }
    #docs-header-container{
      position: absolute
      right: 55px
      z-index: 10000
    }`
    const textnode = document.createTextNode(styleText)
    style.appendChild(textnode)
    head.appendChild(style)
  } else {
    setTimeout(removeFromPage, 500)
  }
}, 500)
