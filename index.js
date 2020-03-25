const { app, BrowserWindow, Menu, shell } = require('electron')
const preferences = require('./preferences')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
  })

  const menu = Menu.buildFromTemplate(
    [
      {
        label: 'File',
        submenu: [
          {
            label: 'Exit',
            click () {
              app.quit()
            }
          },
          {
            label: 'Preferences',
            click () {
              preferences.show()
            }
          }
        ]
      },
      {
        label: 'About',
        submenu: [
          {
            label: 'Copyright © 2020 Eduardo Russo'
          },
          {
            label: 'Project page on GitHub',
            click () {
              shell.openExternal('https://github.com/russoedu/free-conference-app/')
            }
          }
        ]
      }
    ]
  )

  Menu.setApplicationMenu(menu)
  mainWindow.loadFile('index.html')
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.maximize()
    mainWindow.show()
  })
}

function closeAllWindows () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}

function reopenWindow () {
  if (mainWindow === null) {
    createWindow()
  }
}

app.on('ready', createWindow)
app.on('window-all-closed', closeAllWindows)
app.on('activate', reopenWindow)

preferences.on('save', (preferences) => {
  console.log('Preferences were saved.', JSON.stringify(preferences, null, 4))
})
