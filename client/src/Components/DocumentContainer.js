import React, { useState } from 'react';

const DocumentContainer = ({ SaveFile }) => {
    const [value, setValue] = useState('')

    const saveDocument = e => {
        e.preventDefault();
        if(!value) return;
        // SaveFile(value);
        const testFile = {
            chapter: 'chapter one',
            content: value
        }
        console.log(testFile)
    }

    return (
        <form className='document-container' onSubmit={saveDocument}>
            <textarea
                className='input'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button type='submit'>save</button>
        </form>
    )
}

export default DocumentContainer;