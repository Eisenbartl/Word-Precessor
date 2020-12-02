import React, { useState } from 'react';
import FileSelector from './FileSelector';

// const showFiles = require('../../../utils/displayFiles')

// import {fromEvent} from 'file-selector';
import SaveFile from '../../../utils/saveToDevice';

// components
import TopBar from './TopBar';
import SideMenu from './SideMenu';
import DocumentContainer from './DocumentContainer';

const App = () => {
    const [value, setValue] = useState('');

        return (
            <div className='main-window'>
                <SideMenu chapterTitle={value.chapter} />

                <div className='menu-document-container'>
                    <TopBar />

                    {/* { visible === true ? ( */}
                        <DocumentContainer onChange={setValue} value={value} SaveFile={SaveFile}/>
                    {/* // ): */}
                        <FileSelector onChange={setValue}/>
                    {/* // } */}
                </div>
            </div>
        )
}

export default App;