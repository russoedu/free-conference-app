setTimeout(function removeFromPage() {
  if (document.querySelector('#sfcnt')) {
    const style = document.createElement('STYLE');
    const head = document.getElementsByTagName('HEAD')[0];
    const styleText = `html {
      height: 0!important;
      overflow: hidden!important;
    }
    #cst, #sfcnt, #top_nav, #searchform, .srg, #appbar, #rso > div:nth-child(3) > div,
      #gsr > div:nth-child(2), #search > div > h1, #extrares, #act-tab-header, #act-fbk-row, #rso > div:nth-child(2),
      #center_col > div:nth-child(5), #footcnt, #navcnt {
      display:none!important;
    }
    #cnt, #res {
      padding: 0!important;
    }
    #rso {
      margin-top: 0!important;
      width: 320px!important;
      left: calc(50vw - 320px / 2);
      position: fixed;
    }
    #center_col {
      margin-left: 0!important;
    }
    .act-tim-fs-cnt, .act-switch-area, .act-foreground, .act-background, .vk_c, .act-timer-section .act-tim-paused .act-tim-txt-cnt {
      border: none!important;
    }
    #rcnt {
      height: 0!important;
    }`;
    const textnode = document.createTextNode(styleText);
    style.appendChild(textnode);
    head.appendChild(style);
  } else {
    setTimeout(removeFromPage, 500);
  }
}, 500);
