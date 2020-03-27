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
            accelerator: 'CmdOrCtrl+,',
            click () {
              preferences.show()
            }
          }
        ]
      },
      {
        label: 'View',
        submenu: [
          {
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click: function (item, focusedWindow) {
              if (focusedWindow) {
                focusedWindow.reload()
              }
            }
          },
          {
            label: 'Toggle Developer Tools',
            accelerator: (function () {
              if (process.platform === 'darwin') {
                return 'Alt+Command+I'
              } else {
                return 'Ctrl+Shift+I'
              }
            })(),
            click: function (item, focusedWindow) {
              if (focusedWindow) {
                focusedWindow.toggleDevTools()
              }
            }
          }
        ]
      },
      {
        label: 'Window',
        role: 'window',
        submenu: [
          {
            label: 'Minimize',
            accelerator: 'CmdOrCtrl+M',
            role: 'minimize'
          },
          {
            label: 'Close',
            accelerator: 'CmdOrCtrl+W',
            role: 'close'
          }
        ]
      },
      {
        label: 'About',
        submenu: [
          {
            label: 'View project on GitHub',
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
