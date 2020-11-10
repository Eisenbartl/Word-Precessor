import React, { useState } from 'react';

const DocumentContainer = ({ saveText }) => {
    const [value, setValue] = useState('')

    const handleSave = e => {
        e.preventDefault();
        if(!value) return;
        saveText(value);
    }

    return (
        <form className='page-box' onSubmit={handleSave}>
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