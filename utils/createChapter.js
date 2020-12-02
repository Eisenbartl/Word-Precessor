const createChapter = e => {
    e.preventDefault();
    const title = e.target.value
    if(!title) return;
    addChapter(title)
    setTitle('');
}

module.exports = createChapter;