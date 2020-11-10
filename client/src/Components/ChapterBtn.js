import React from 'react';


const ChapterBtn = ({ chapter, index }) => {
    return (
        <button className='chapter-btn'>
            {chapter.title}
        </button>
    )
}

export default ChapterBtn;