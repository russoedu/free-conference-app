

setTimeout(function removeFromPage() {
  if (document.querySelector('#sfcnt')) {

    const cst = document.querySelector('#cst');
    cst.parentNode.removeChild(cst);

    const sfcnt = document.querySelector('#sfcnt');
    sfcnt.parentNode.removeChild(sfcnt);

    const top_nav = document.querySelector("#top_nav");
    top_nav.parentNode.removeChild(top_nav);

    const searchform = document.querySelector("#searchform");
    searchform.parentNode.removeChild(searchform);

    const srg = document.querySelector(".srg");
    srg.parentNode.removeChild(srg);

    const appbar = document.querySelector("#appbar");
    appbar.parentNode.removeChild(appbar);

    const bkWMgd = document.querySelector("#rso > div:nth-child(3) > div");
    bkWMgd.parentNode.removeChild(bkWMgd);

    const other = document.querySelector("#gsr > div:nth-child(2)");
    other.parentNode.removeChild(other);

    const other2 = document.querySelector("#search > div > h1");
    other2.parentNode.removeChild(other2);

    const other3 = document.querySelector("#extrares");
    other3.parentNode.removeChild(other3);
  } else {
    //console.log(`waiting list ${i++}`);
    setTimeout(removeFromPage, 500);
  }
}, 500);