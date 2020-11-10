import React, { useState } from 'react';
import SideMenu from './SideMenu';
import DocumentContainer from './DocumentContainer';

const App = () => {

    // save textarea input as .txt file to device storage
    const saveText = text => {
        console.log(text)
    }

        return (
            <div className='main-window'>
                <SideMenu />
                <DocumentContainer saveText={saveText}/>
            </div>
        )
}

export default App;