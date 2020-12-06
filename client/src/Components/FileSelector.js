import React, {useState} from 'react'

const FileSelector = (props) => {
    // const [file, setFile] = useState('');

   const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = (JSON.parse(e.target.result));
          let doc = document.getElementById('output');
          // props.onChange(text)
          text.map((x) => 

            doc.textContent = x.chapter 
            )
          // display opened file
          
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
            className='file-selector-btn' 
            onClick={() => getFile()}>file</button>
            <input 
                // style={{visibility: 'hidden'}}
                type="file" 
                name="inputfile" 
                id="input-file"
                // onChange={(event) => { props.onChange(event.target.value); showFile(event) }}
                onChange={(event) =>  showFile(event) }
            />
            {/* <p id='output'></p> */}
        </div>
    )
}

export default FileSelector;