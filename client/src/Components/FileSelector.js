import React, {useState} from 'react'
const showFile = require('../../../utils/showFile')

const FileSelector = props => {
    // const [file, setFile] = useState('');
    // const [title, setTitle] = useState('')

   const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = (e.target.result)
          const content = JSON.parse(text);
          let doc = document.getElementById('output');
          doc.textContent = content.content;

            console.log('hello')
        };
        reader.readAsText(e.target.files[0])
        // console.log(e.target)
      }



    return (
        <div>
            <input 
                type="file" 
                name="inputfile" 
                id="input-file"
                onChange={(event) => { showFile(event) }}
                // onChange={(event) => {openFile(event) }}
            />
        </div>
    )
}

export default FileSelector;