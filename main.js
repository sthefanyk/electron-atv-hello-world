const { app, BrowserWindow } = require('electron');

var mainWindow = null;

async function createWindow(){
    mainWindow = new BrowserWindow({
        width: 800,
        height:600
    })

    await mainWindow.loadFile('src/pages/editor/index.html')
}

app.whenReady().then(createWindow);