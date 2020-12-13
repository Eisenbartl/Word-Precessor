import React, { useState } from 'react';

import SaveFile from '../../../utils/saveToDevice';

// components
import TopBar from './TopBar';
import SideMenu from './SideMenu';
import DocumentContainer from './DocumentContainer';

const App = () => {
    const [value, setValue] = useState('');
    const [file , setFile] = useState();
    const [currentChapterContent, setCurrentChapter] = useState('');

    // on chapter tag click, run a function that sets currentChapter
    const displayChapter = string => {
        file.map(item => {
            item.chapter === string ? setCurrentChapter(item) : null;
        })
    }

    const editCurrentChapter = input => {
        let newChapterContent = {
            chapter: currentChapterContent.chapter,
            content: input
        }

        setCurrentChapter(newChapterContent);

        // create/ edit the original file
        let newFile = file;

        newFile.map(item => {
            item.chapter === currentChapterContent.chapter ? item.content = input : null;
        })

        setFile(newFile)
    }

    const addChapter = input => {
        let newFile = file;

        let newChapter = {
            chapter: input,
            content: ''
        };

        newFile.push(newChapter);

        setFile(newFile);
    }

        return (
            <div className='main-window'>
                <SideMenu 
                    setFile={setFile} 
                    file={file} 
                    displayChapter={displayChapter} 
                    addChapter={addChapter}
                />

                <div className='menu-document-container'>
                    <TopBar />

                    {/* { file !== undefined ? ( */}
                        <DocumentContainer
                            SaveFile={SaveFile} 
                            file={file} 
                            content={currentChapterContent}
                            editCurrentChapter={editCurrentChapter}
                        />
                    {/* // ):
                        // null
                    // } */}
                </div>
            </div>
        )
}

export default App;