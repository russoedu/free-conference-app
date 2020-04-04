const config = require('./config')
const { ipcRenderer, remote } = require('electron')

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'

const tableInnerHTML = `<webview id="table"
  src="${config.spreadsheetUrl}"
  autosize="on"
  style="width:calc(560px + 55px); height:100vh;"
  preload="./injection-table.js"
  useragent="${userAgent}">
</webview>`
const conferenceInnerHTML = `<webview id="conference"
  src="https://hello.freeconference.com/conf/call/${config.conferenceId}"
  autosize="on"
  style="width:100%; height:calc(100vh - 154px)"
  preload="./injection-conference.js"
  useragent="${userAgent}">
</webview>`
const timerInnerHTML = `<webview id="timer"
  src="https://www.google.com/search?q=timer"
  autosize="on"
  style="height:154px"
  preload="./injection-timer.js"
  useragent="${userAgent}">
</webview>`

const generalAlert = '<div class="preferences"><h1>Please fill the preferences and reload the app!</h1><button id="reload-button" class="button"></button>'

function isSet (key) {
  if (typeof key !== 'undefined' && key !== '' && key !== null) {
    return true
  }
  return false
}

if (!isSet(config.spreadsheetUrl) ||
    !isSet(config.csvUrl) ||
    !isSet(config.conferenceId)) {
  setTimeout(function checkConfig () {
    if (document.getElementById('general-injection')) {
      document.getElementById('general-injection').innerHTML = generalAlert
      const bt = document.getElementById('reload-button')
      bt.innerHTML = 'Click here to reload the app'
      bt.addEventListener('click', () => {
        remote.getCurrentWindow().reload()
      })
      ipcRenderer.send('showPreferences')
    } else {
      setTimeout(checkConfig, 500)
    }
  }, 100)
} else {
  setTimeout(function waitForTable () {
    if (document.getElementById('table-injection')) {
      document.getElementById('table-injection').innerHTML = tableInnerHTML
    } else {
      setTimeout(waitForTable, 500)
    }
  }, 100)

  setTimeout(function waitForConference () {
    if (document.getElementById('conference-injection')) {
      document.getElementById('conference-injection').innerHTML = conferenceInnerHTML
    } else {
      setTimeout(waitForConference, 500)
    }
  }, 100)

  setTimeout(function waitForConference () {
    if (document.getElementById('timer-injection')) {
      document.getElementById('timer-injection').innerHTML = timerInnerHTML
    } else {
      setTimeout(waitForConference, 500)
    }
  }, 100)
}
