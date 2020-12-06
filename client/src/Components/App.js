import React, { useState } from 'react';

import SaveFile from '../../../utils/saveToDevice';

// components
import TopBar from './TopBar';
import SideMenu from './SideMenu';
import DocumentContainer from './DocumentContainer';

const App = () => {
    const [value, setValue] = useState('');
    const [file , setFile] = useState();
    const [currentChapter, setCurrentChapter] = useState();

    // on chapter tag click, run a function that sets currentChapter
    const displayChapter = string => {
        let chapterContent = '';
        file.map(item => {
            item.chapter === string ? chapterContent = item.content : null;
        })

        let doc = document.getElementById('output');
        doc.textContent = chapterContent;
    }
        return (
            <div className='main-window'>
                <SideMenu setFile={setFile} file={file} displayChapter={displayChapter}/>

                <div className='menu-document-container'>
                    <TopBar />

                    {/* { file !== undefined ? ( */}
                        <DocumentContainer onChange={setValue} value={value} SaveFile={SaveFile} file={file}/>
                    {/* // ):
                        // null
                    // } */}
                </div>
            </div>
        )
}

export default App;