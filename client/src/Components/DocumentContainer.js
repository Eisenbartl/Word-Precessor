import React, { useState } from 'react';
const FileSaver = require('file-saver');

// const fs = require('../../../utils/saveToDevice');

const DocumentContainer = (props) => {
    
    const saveFile = e => {
        e.preventDefault();

        const json = JSON.stringify(props.file);
    
        const fileName = 'doc'
        const file = new File([json], fileName, {type: 'application/json'});
    
        console.log(json)
        FileSaver.saveAs(file)
    }



    return (
        <form id='document-container' className='document-container' onSubmit={e => saveFile(e)}>
            <textarea
                className='input'
                id = 'output'
                defaultValue={props.content.content}
                onChange={e => props.editCurrentChapter(e.target.value) }
            />
            
            <button type='submit'>save</button>
        </form>
    )
}

export default DocumentContainer;