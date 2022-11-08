const path = require('path');
const {app, BrowswerWindow, BrowserWindow } = require('electron');


const isDev = process.env.NODE_ENV !== 'production';

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'HELA Calibration',
        width: isDev ? 1200 : 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, './preload.js')}
    });
    if(isDev){
        mainWindow.webContents.openDevTools();
    }
    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

app.whenReady().then(() =>{
    createMainWindow();

    app.on('activate', () =>{
        if(BrowserWindow.getAllWindows().length === 0){
            createMainWindow();
        }
    });
});




