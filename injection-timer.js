setTimeout(function removeFromPage() {
  if (document.querySelector('#sfcnt')) {
    const cst = document.querySelector('#cst');
    cst.parentNode.removeChild(cst);

    const sfcnt = document.querySelector('#sfcnt');
    sfcnt.parentNode.removeChild(sfcnt);

    const topNav = document.querySelector('#top_nav');
    topNav.parentNode.removeChild(topNav);

    const searchform = document.querySelector('#searchform');
    searchform.parentNode.removeChild(searchform);

    const srg = document.querySelector('.srg');
    srg.parentNode.removeChild(srg);

    const appbar = document.querySelector('#appbar');
    appbar.parentNode.removeChild(appbar);

    const bkWMgd = document.querySelector('#rso > div:nth-child(3) > div');
    bkWMgd.parentNode.removeChild(bkWMgd);

    const other = document.querySelector('#gsr > div:nth-child(2)');
    other.parentNode.removeChild(other);

    const other2 = document.querySelector('#search > div > h1');
    other2.parentNode.removeChild(other2);

    const extrares = document.querySelector('#extrares');
    extrares.parentNode.removeChild(extrares);

    const tabHeader = document.querySelector('#act-tab-header');
    tabHeader.parentNode.removeChild(tabHeader);

    const actFbkRow = document.querySelector('#act-fbk-row');
    actFbkRow.parentNode.removeChild(actFbkRow);

    const other3 = document.querySelector('#rso > div:nth-child(2)');
    other3.parentNode.removeChild(other3);

    const footer1 = document.querySelector('#center_col > div:nth-child(5)');
    footer1.parentNode.removeChild(footer1);

    const footcnt = document.querySelector('#footcnt');
    footcnt.parentNode.removeChild(footcnt);


    const cnt = document.querySelector('#cnt');
    cnt.style.cssText = 'padding: 0;';

    const rso = document.querySelector('#rso');
    rso.style.cssText = 'margin-top: 0; width: 320px;';

    const res = document.querySelector('#res');
    res.style.cssText = 'padding: 0;';

    const centerCol = document.querySelector('#center_col');
    centerCol.style.cssText = 'margin-left: 0;';

    const num = document.getElementsByClassName('act-tim-txt-cnt');
    num[1].style.cssText = 'border: none;';

    const html = document.querySelector('html');
    html.style.cssText = 'height: 0; overflow: hidden;';

    const rcnt = document.querySelector('#rcnt');
    rcnt.style.cssText = 'height: 0;';

  } else {
    setTimeout(removeFromPage, 500);
  }
}, 500);
