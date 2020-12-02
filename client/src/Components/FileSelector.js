import React, {useState} from 'react'

const FileSelector = (props) => {
    // const [file, setFile] = useState('');

   const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = (JSON.parse(e.target.result));
          console.log(text)
          props.onChange(text)
          // display opened file
          let doc = document.getElementById('output');
          doc.textContent = text.content;
        };
        reader.readAsText(e.target.files[0]);
      }

    return (
        <div>
            <input 
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