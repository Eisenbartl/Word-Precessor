import React, { useState } from 'react';
import ChapterBtn from './ChapterBtn';
import ToolBar from './ToolBar';

const AddChapterForm = props => {
    const [title, setTitle] = useState('');

    const addNewChapter = e => {
        e.preventDefault();

        props.addChapter(title)
    }

    return (
        <form onSubmit={(e) => addNewChapter(e)}>
            <input type='text' className='chapter-title-input' onChange={e => setTitle(e.target.value)} placeholder='add chapter'/>
            <button type='submit'>+</button>
        </form>
    )
}


const SideMenu = props => {
    const setFile = props.setFile;
    let file = props.file;
    const chapters = [];

    const displayChapters = () => {
        file.map(item => {
            item !== undefined ? chapters.push(item.chapter) : null ;
        })
    }
    
    file !== undefined ? displayChapters() : null;
    

    return (
        <div className='side-menu'>
            <ToolBar setFile={setFile}/>
            {/* add chapter */}
            <div>
                <AddChapterForm addChapter={props.addChapter} />
                <div className='chapter-list'>
                    {

                    chapters.map((chapter) => (
                        <ul>
                            <li value={chapter} className='chapter-btn' 
                            onClick={() => props.displayChapter(chapter)}
                            onDoubleClick={() => console.log('ze old double CLICK!!!')}
                        >
                            {chapter}
                        </li>
                        </ul>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SideMenu;