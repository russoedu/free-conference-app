class AppMenu {
  static mainWindow (app, preferences, shell) {
    return [
      {
        label: 'File',
        submenu: [
          {
            label: 'Exit',
            accelerator: 'CmdOrCtrl+Q',
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
        label: 'Edit',
        submenu: [
          {
            label: 'Undo',
            accelerator: 'CmdOrCtrl+Z',
            role: 'undo'
          },
          {
            label: 'Redo',
            accelerator: 'Shift+CmdOrCtrl+Z',
            role: 'redo'
          },
          {
            type: 'separator'
          },
          {
            label: 'Cut',
            accelerator: 'CmdOrCtrl+X',
            role: 'cut'
          },
          {
            label: 'Copy',
            accelerator: 'CmdOrCtrl+C',
            role: 'copy'
          },
          {
            label: 'Paste',
            accelerator: 'CmdOrCtrl+V',
            role: 'paste'
          },
          {
            label: 'Select All',
            accelerator: 'CmdOrCtrl+A',
            role: 'selectall'
          },
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
  }

  static preferencesMenu () {
    return [
      {
        label: 'Window',
        role: 'window',
        submenu: [
          {
            label: 'Close',
            accelerator: 'CmdOrCtrl+W',
            role: 'close'
          }
        ]
      }
    ]
  }

}

module.exports = AppMenu
