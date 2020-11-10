import React, { useState } from 'react';
import ChapterBtn from './ChapterBtn';

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

const SideMenu = () => {
    const [chapters, createChapters] = useState([
        {
            title: 'chapter one'
        }
    ]);

    const addChapter = title => {
        const newChapters = [...chapters, {title}];

        createChapters(newChapters);
    }

    return (
        <div className='side-menu'>
            {/* add chapter */}

            <AddChapterForm addChapter={addChapter} />
            <div className='chapter-list'>
                {chapters.map((chapter, index) => (
                    <ChapterBtn key={index} index={index} chapter={chapter} />
                ))}
            </div>
        </div>
    )
}

export default SideMenu;