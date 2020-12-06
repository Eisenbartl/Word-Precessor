import React, { useState } from 'react';
import ChapterBtn from './ChapterBtn';
import ToolBar from './ToolBar';

const AddChapterForm = ({addChapter}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!title) return;
        addChapter(title)
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' className='chapter-title-input' onChange={e => setTitle(e.target.value)} placeholder='add chapter'/>
            <button type='submit'>+</button>
        </form>
    )
}


const SideMenu = props => {
    const setFile = props.setFile;
    const file = [props.file];
    const chapters = [];
    // const [chapters, createChapters] = useState([
    //     {
    //         title: 'some chapter'
    //     }
    // ]);


    const addChapter = title => {
        // const newChapters = [...chapters, {title}];
        // createChapters(newChapters);

        // chapters.push(title)
    }

    const displayChapters = props => {
        if (file.length > 0) {
            for (let i = 0; i <= file.length; i++) {
                file.map(item => {
                    item !== undefined ? chapters.push(item[i].chapter) : null ;
                })
            }
        }
    }
    displayChapters()

    return (
        <div className='side-menu'>
            <ToolBar setFile={setFile}/>
            {/* add chapter */}
            <div>
                <AddChapterForm addChapter={addChapter} />
                <div className='chapter-list'>
                    {
                    chapters.map((chapter) => (
                        <ul>
                            <li value={chapter} className='chapter-btn' onClick={() => props.displayChapter(chapter)}>{chapter}</li>
                        </ul>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SideMenu;