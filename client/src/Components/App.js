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
    const openFile = (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = (e.target.result)

          const content = JSON.parse(text);
          this.setState({file: content})
          let doc = document.getElementById('output');
          doc.textContent = content.content;

        //   console.log(typeof(content.chapter))
        };
        reader.readAsText(e.target.files[0])
    }

        return (
            <div className='main-window'>
                <SideMenu />

                <div className='menu-document-container'>
                    <TopBar />

                    {/* { visible === true ? ( */}
                        <DocumentContainer onChange={value => console.log(value)} />
                    {/* // ): */}
                        <FileSelector />
                    {/* // } */}
                </div>
            </div>
        )
}

export default App;