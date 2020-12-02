const FileSaver = require('file-saver');

// const saveFile = text => {
//     // const blob = new Blob([text], {type: 'text/plain;charset=utf-8'});
//     const fileName = 'doc'
//     const file = new File([text], fileName, {type: 'text/plain;charset=utf-8'});

//     // FileSaver.saveAs(blob, `${fileName}.txt`)
//     FileSaver.saveAs(file)
// }

const saveFile = input => {
    // const blob = new Blob([text], {type: 'text/plain;charset=utf-8'});
    const data = input;
    const json = JSON.stringify(data);

    const fileName = 'doc'
    const file = new File([json], fileName, {type: 'application/json'});

    // FileSaver.saveAs(blob, `${fileName}.txt`)
    console.log(file)
    FileSaver.saveAs(file)
}

module.exports = saveFile;