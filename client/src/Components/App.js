import React, { useState } from 'react';
import FileSelector from './FileSelector';

// const showFiles = require('../../../utils/displayFiles')

// import {fromEvent} from 'file-selector';
import SaveFile from '../../../utils/saveToDevice';

// components
import ToolBar from './ToolBar';
import SideMenu from './SideMenu';
import DocumentContainer from './DocumentContainer';

const App = () => {
    const [visible, setDocVisibility] = useState(false);
    
        return (
            <div className='main-window'>
                <SideMenu />

                <div className='menu-document-container'>
                    <ToolBar />

                    { visible === true ? (
                        <DocumentContainer SaveFile={SaveFile}/>
                    ):
                        <FileSelector/>
                    }
                </div>
            </div>
        )
}

export default App;