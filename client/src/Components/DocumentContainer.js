import React, { useState } from 'react';
const fs = require('../../../utils/saveToDevice');

const DocumentContainer = (props) => {
    // const [value, setValue] = useState('');

    const saveDocument = e => {
        e.preventDefault();
        // setValue(e.target.value);
        // if(!value) return;

        const testFile = {
            chapter: 'chapter one',
            content: value
        }

        fs(testFile)
    }

    return (
        <form className='document-container' onSubmit={saveDocument}>
        {/* <form className='document-container'> */}
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