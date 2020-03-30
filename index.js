const { app, BrowserWindow, shell, Menu } = require('electron')
const preferences = require('./preferences')
const AppMenu = require('./menu')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
  })

  const menu = Menu.buildFromTemplate(AppMenu.mainWindow(app, preferences, shell))
  Menu.setApplicationMenu(menu)
  mainWindow.webContents.setUserAgent('Chrome')
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
