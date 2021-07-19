const { app, BrowserWindow } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 800,
    show: false,
    webPreferences: {
      /**
       * @note Settings this option to `true` injects the `global`
       * variable on the `window` in the browser.
       */
      nodeIntegration: true,
    },
  })

  win.loadFile('../browser.html')
}

app.whenReady().then(() => {
  createWindow()
})
