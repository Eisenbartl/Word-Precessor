const electron = require('electron');
const url = require('url');
const path = require('path');
const menu = require('./client/dist/mainMenuTemplate.js');
// const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// listen for app to be ready
app.on('ready', function () {
    // create new window
    mainWindow = new BrowserWindow({
        // frame: false,
        height: 800,
        width: 1200,
        minWidth: 500,
        minHeight: 316
    });

    // react dev tools
    // installExtension(REACT_DEVELOPER_TOOLS)
    //     .then(name => {
    //         console.log(`Added extension: ${name}`)
    //     }).catch(err => {
    //         console.log('error', err)
    //     })

    // open dev tools
    mainWindow.webContents.openDevTools();

    // load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/client/dist/mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    // build menu from template
    const mainMenu = Menu.buildFromTemplate(menu);

    // insert menu template
    Menu.setApplicationMenu(mainMenu);
});

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})