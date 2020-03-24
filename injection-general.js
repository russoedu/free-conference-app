const config = require('./config')

setTimeout(async function waitForTableDiv() {
  if (document.getElementById('table-injection')) {
    const table = document.getElementById('table-injection');
    table.innerHTML = `<webview
      id="table"
      src="https://docs.google.com/spreadsheets/d/1-UBKWKvO3T0vwpxCCbXzY8OalHoYKwQFASBiFtXxMs0/edit#gid=111019831"
      autosize="on"
      style="width:calc(30% + 58px); height:100vh;"
      preload="./injection-table.js"
    ></webview>`
  } else {
      setTimeout(waitForTableDiv, 1000)
  }
}, 100)
