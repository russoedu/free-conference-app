setTimeout(function removeFromPage() {
  if (document.getElementsByTagName('HEAD')) {
    const style = document.createElement('STYLE');
    const head = document.getElementsByTagName('HEAD')[0];
    const styleText = `#docs-menubars, #docs-bars, td.docs-sheet-status-container-avs, .docs-material.docs-companion-app-switcher-container {
      display:none!important;
    }`;
    const textnode = document.createTextNode(styleText);
    style.appendChild(textnode);
    head.appendChild(style);
  } else {
    setTimeout(removeFromPage, 500);
  }
}, 500);