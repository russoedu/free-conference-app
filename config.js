// const preferences = require('./preferences')
const { ipcRenderer } = require('electron')
const preferences = ipcRenderer.sendSync('getPreferences')

module.exports = {
  spreadsheetUrl: preferences.general.spreadsheetUrl,
  csvUrl: preferences.general.csvUrl,
  conferenceId: preferences.general.conferenceId,
  participantNameSeparator: preferences.general.participantNameSeparator,
  speakerNameSeparator: preferences.general.speakerNameSeparator
}
