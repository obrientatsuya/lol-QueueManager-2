const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const ipc = ipcMain

function createWindow () {
  const win = new BrowserWindow({
    width: 1039,
    height: 603,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('src/home.html')
  win.setBackgroundColor('#343B48')

  // close app
  ipc.on('closeApp', ()=>{
    win.close()
  })
  ipc.on('minimizeApp', ()=>{
    win.minimize()
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
