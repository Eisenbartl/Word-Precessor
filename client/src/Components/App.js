import React, { useState } from 'react';

import SaveFile from '../../../utils/saveToDevice';

// components
import ToolBar from './ToolBar';
import SideMenu from './SideMenu';
import DocumentContainer from './DocumentContainer';

const App = () => {
    const [visible, setDocVisibility] = useState(true);

        return (
            <div className='main-window'>
                <SideMenu />

                <div className='menu-document-container'>
                    <ToolBar />

                    { visible === true ? (
                        <DocumentContainer SaveFile={SaveFile}/>
                    ):
                        <input type='file'/>
                    }
                </div>
            </div>
        )
}

export default App;