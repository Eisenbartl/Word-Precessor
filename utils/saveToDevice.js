const FileSaver = require('file-saver');

// const saveFile = (text, filename, type ) => {
//     const file = new Blob([text], {type: type});

//     if (window.navigator.msSaveOrOpenBlob)
//         window.navigator.msSaveOrOpenBlob(file, filename);
//     else {
//         let a = document.createElement('a'),
//             url = URL.createObjectURL(file);
//         a.href = url;
//         a.download = filename;
//         document.body.appendChild(a);
//         a.click();
//         setTimeout(() => {
//             document.body.removeChild(a);
//             window.URL.revokeObjectURL(url);
//         }, 0)
//     }
// }

const saveFile = text => {
    // const blob = new Blob([text], {type: 'text/plain;charset=utf-8'});
    const fileName = 'doc'
    const file = new File([text], fileName, {type: 'text/plain;charset=utf-8'});

    // FileSaver.saveAs(blob, `${fileName}.txt`)
    FileSaver.saveAs(file)
}

module.exports = saveFile;