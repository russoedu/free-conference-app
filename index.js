const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
  })
  win.loadFile('index.html')

  win.webContents.on('did-finish-load', () => {
    win.maximize()
    win.show()
  })
}

app.on('ready', createWindow)
