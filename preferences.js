const electron = require('electron')
const app = electron.app
const path = require('path')
const ElectronPreferences = require('electron-preferences')

const preferences = new ElectronPreferences({
  dataStore: path.resolve(app.getPath('userData'), 'preferences.json'),
  defaults: {
    general: {
      participantNameSeparator: '•',
      speakerNameSeparator: '<br/>'
    }
  },
  onLoad: (data) => {
    return data
  },
  webPreferences: {
    devTools: true
  },
  sections: [
    {
      id: 'general',
      label: 'Free Conference App',
      icon: 'settings-gear-63',
      form: {
        groups: [
          {
            label: 'Spreadsheet',
            fields: [
              {
                label: 'Spreadsheet URL',
                key: 'spreadsheetUrl',
                type: 'text',
                help: 'Something like https://docs.google.com/spreadsheets/d/1-XXXXXXXXXXXXXXXXXXXXXXXXX/edit#gid=123123',
                inputType: 'url'
              },
              {
                label: 'CSV URL',
                key: 'csvUrl',
                type: 'text',
                help: 'You need to "Publish to the web" for it to work. It looks like https://docs.google.com/spreadsheets/d/e/2PACX-XXXXXXXXXXXXX-XXXXXX/pub?gid=123123&single=true&output=csv',
                inputType: 'url'
              }
            ]
          },
          {
            label: 'Free conference',
            fields: [
              {
                label: 'Conference ID',
                key: 'conferenceId',
                type: 'text',
                help: 'Something like 1234567',
                inputType: 'number'
              }
            ]
          },
          {
            label: 'Interface',
            fields: [
              {
                label: 'Participant list separator',
                key: 'participantNameSeparator',
                type: 'text',
                help: 'The separator between the phone and the name'
              },
              {
                label: 'Speaker separator',
                key: 'speakerNameSeparator',
                type: 'text',
                help: 'The separator between the phone and the name'
              }
            ]
          }
        ]
      }
    }
  ]
})

module.exports = preferences
