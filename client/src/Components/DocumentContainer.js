import React, { useState } from 'react';
const FileSaver = require('file-saver');

// const fs = require('../../../utils/saveToDevice');

const DocumentContainer = (props) => {
    // const [value, setValue] = useState('');
    
    const saveFile = e => {
        e.preventDefault();
        // const blob = new Blob([text], {type: 'text/plain;charset=utf-8'});
        // const data = input;
        const data = {
            chapter: 'chapter one',
            content: props.value
        }
        const json = JSON.stringify(data);
    
        const fileName = 'doc'
        const file = new File([json], fileName, {type: 'application/json'});
    
        // console.log(json)
        FileSaver.saveAs(file)
    }



    return (
        <form id='document-container' className='document-container' onSubmit={e => saveFile(e)}>
            <textarea
                className='input'
                id = 'output'
                onChange={e => props.onChange(e.target.value)}
            />
            
            <button type='submit'>save</button>
        </form>
    )
}

export default DocumentContainer;