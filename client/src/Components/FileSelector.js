import React, {useState} from 'react'

const FileSelector = (props) => {

   const setProjectFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = (JSON.parse(e.target.result));

          props.setFile(text); // set state
        };
        reader.readAsText(e.target.files[0]);
      }

      const getFile = () => {
        const fileBtn = document.getElementById('input-file');
        fileBtn.click();
      }

    return (
        <div className='file-selector'>
          <button 
            className='file-selector-btn tool-btn' 
            onClick={() => getFile()}>file</button>
            <input 
                type="file" 
                name="inputfile" 
                id="input-file"
                onChange={(event) =>  setProjectFile(event) }
            />
        </div>
    )
}

export default FileSelector;