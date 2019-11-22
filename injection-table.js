setTimeout(function removeFromPage() {
  if (document.querySelector('#docs-header')) {
    const header = document.querySelector('#docs-header-container');
    header.style.cssText = 'display:none';

    const menuBar = document.querySelector('#docs-menubars');
    menuBar.style.cssText = 'display:none';

    const docsBar = document.querySelector('#docs-bars');
    docsBar.style.cssText = 'display:none';

    const additionalBar = document.querySelector('#docs-additional-bars');
    additionalBar.style.cssText = 'display:none';

    const statusContainer = document.querySelector('#grid-bottom-bar > tbody > tr:nth-child(2) > td.docs-sheet-status-container-avs');
    statusContainer.style.cssText = 'display:none';

  } else {
    setTimeout(removeFromPage, 500);
  }
}, 500);
