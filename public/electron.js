const {app, BrowserWindow} = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
const {autoUpdater} = require('electron-updater')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        heght: 600
    })

    win.loadURL(
        isDev ?
        'http://localhost:3000'
        : `file://${path.join(__dirname, '../build/index.html')}`
    )

    autoUpdater.checkForUpdatesAndNotify()

    if(isDev){
        win.webContents.openDevTools({mode: 'detach'})
    }
}

app.whenReady().then(() => {
    createWindow()
})