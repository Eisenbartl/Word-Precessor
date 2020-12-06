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
    // const [chapters, createChapters] = useState([
    //     {
    //         title: 'some chapter'
    //     }
    // ]);

    const chapters = [props.chapterTitle]

    const addChapter = title => {
        // const newChapters = [...chapters, {title}];
        // createChapters(newChapters);

        chapters.push(title)
    }

    return (
        <div className='side-menu'>
            <ToolBar findFile={props.findFile()}/>
            {/* add chapter */}
            <div>
                <AddChapterForm addChapter={addChapter} />
                <div className='chapter-list'>
                    {chapters.map((chapter, index) => (
                        // <ChapterBtn key={index} index={index} chapter={chapter} />
                        <ul>
                            <li className='chapter-btn'>{chapter}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideMenu;