import React from 'react';
import FileSelector from './FileSelector';

const ToolBar = props => {
  const setFile = props.setFile
    return (
        <div className='tool-bar'>
          <FileSelector setFile={setFile}/>
          <button id='bold' className='tool-btn'>B</button>
          <button id='italic' className='tool-btn'>I</button>
        </div>
    )
};

export default ToolBar;