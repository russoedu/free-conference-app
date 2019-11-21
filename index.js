const { app, BrowserWindow } = require('electron')


function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    // width: 800,
    // height: 600,
    webPreferences: {
      nodeIntegration: true,
      webviewTag : true,
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
  // win.loadURL('https://hello.freeconference.com/conf/call/6861278')
}

// let win = new BrowserWindow({ width: 800, height: 1500 })

// let contents = win.webContents
// console.log(contents)

app.on('ready', createWindow)