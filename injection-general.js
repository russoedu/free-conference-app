const config = require('./config')

const tabeleInnerHTML = `<webview id="table" src="${config.spreadsheetUrl}" autosize="on" style="width:calc(560px + 55px); height:100vh;" preload="./injection-table.js"></webview>`
const conferenceInnerHTML = `<webview id="conference" src="https://hello.freeconference.com/conf/call/${config.conferenceId}" preload="./injection-conference.js" autosize="on" style="width:100%; height:calc(100vh - 154px)"></webview>`
const timerInnerHTML = '<webview id="timer" src="https://www.google.com/search?q=timer" preload="./injection-timer.js" autosize="on" style="height:154px"></webview>'

setTimeout(function waitForTable () {
  if (document.getElementById('table-injection')) {
    document.getElementById('table-injection').innerHTML = tabeleInnerHTML
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
