import React, { useState } from 'react';
import ChapterBtn from './ChapterBtn';
import ToolBar from './ToolBar';

const AddChapterForm = () => {
    // const [value, setValue] = useState('');
    const [words, setWords] = useState('');

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     if(!title) return;
    //     addChapter(title)
    //     setTitle('');
    // }

    const addChapter = e => {
        e.preventDefault();
        setValue(e.target.value)
    }

    return (
        // <form className='add-chapter-form' onSubmit={addChapter}>
        <form className='add-chapter-form'>
            <input 
                type='text' 
                className='chapter-title-input' 
                value={words} 
                onChange={e => setWords(e.target.value)} 
                placeholder='add chapter'
            />
            <button type='submit'>+</button>
        </form>
    )
}

const SideMenu = props => {
    const [chapters, createChapters] = useState([]);

    // const addChapter = title => {
    //     const newChapters = [...chapters, {title}];
        
    //     createChapters(newChapters);
    //     console.log(chapters)
    // }

    return (
        <div className='side-menu'>
            {/* add chapter */}
            <ToolBar />
            <div className='menu-container'>
                <div className='chapter-form-list'>
                    <AddChapterForm />
                    <div className='chapter-list'>
                    {/* { props.file.map(item =>
                        <button className='chapter-btn'>{item}</button>
                        )} */}
                    </div>
                </div>
                <button id='bind-btn'>Bind</button>
            </div>
        </div>
    )
}

export default SideMenu;