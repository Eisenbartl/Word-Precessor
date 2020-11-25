const showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      const content = JSON.parse(text).content;
      let doc = document.getElementById('output');
      doc.textContent = content;
    };
    reader.readAsText(e.target.files[0])
}

module.exports = showFile;