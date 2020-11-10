const { app } = require('electron');
const electron = require('electron');
const {Menu} = electron;

// create menu template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'New'
            },
            {
                label: 'Open'
            },
            {
                label: 'Save'
            },
            {
                label: 'Save As'
            },
            {
                label: 'Quit',
                accelerator: process.platform = 'darwin' ? 'Command+Q' : 'Ctrl+Q', // hot key not working on win
                click() {
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {
                label: 'Undo'
            },
            {
                label: 'Redo'
            },
            {
                label: 'Cut'
            },
            {
                label: 'Copy'
            },
            {
                label: 'Paste'
            },
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                label: 'Show ruler'
            },
        ]
    },
    {
        label: 'Insert',
        submenu: [
            {
                label: 'TBD'
            },
        ]
    },
    {
        label: 'Format',
        submenu: [
            {
                label: 'Text'
            },
            {
                label: 'Paragraph styles'
            },
            {
                label: 'Align & indent'
            },
            {
                label: 'Line spacing'
            },
            {
                label: 'Columns'
            },
            {
                label: 'Bullets & numbering'
            },
            {
                label: 'Headers & footers'
            },
            {
                label: 'Page numbers'
            },
            {
                label: 'Clear formatting'
            },
        ]
    },
    {
        label: 'Tools',
        submenu: [
            {
                label: 'Spelling & grammar'
            },
            {
                label: 'Word count'
            },
            {
                label: 'Dictionary'
            },
            {
                label: 'Voice typing'
            },
        ]
    },
    
];

// if on mac, add empty object to menu
if(process.platform === 'darwin') {
    mainMenuTemplate.unshift({});
}

module.exports = mainMenuTemplate;