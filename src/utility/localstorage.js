

const getStoredBooklist = () => {
    const storedBooklist = localStorage.getItem('book-read');
    if (storedBooklist) {
        return JSON.parse(storedBooklist);
    }
    return [];
}


const saveBooklist = id => {

    const storedBooklists = getStoredBooklist();
    const exists = storedBooklists.find(bookId => bookId === id);
    if (!exists) {
        storedBooklists.push(id);
        localStorage.setItem('book-read', JSON.stringify(storedBooklists))
    }

}


export { getStoredBooklist, saveBooklist }