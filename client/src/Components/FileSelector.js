import React, {useState} from 'react'

const FileSelector = () => {
    // const [file, setFile] = useState('');

   const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = (e.target.result)
          console.log(text)
          let doc = document.getElementById('output');
          doc.textContent = text;
        // data = text
        };
        reader.readAsText(e.target.files[0])
      }

    return (
        <div>
            <input 
                type="file" 
                name="inputfile" 
                id="input-file"
                onChange={(event) => { showFile(event) }}
            />
            <p id='output'></p>
        </div>
    )
}

export default FileSelector;