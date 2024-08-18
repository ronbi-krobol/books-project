
const getStoredWishBookList = () => {
    const storedWishBookList = localStorage.getItem('book-wish')
    if (storedWishBookList) {
        return JSON.parse(storedWishBookList);
    }
    return []
}




const saveWishBooklist = id => {
    const storedWishBookLists = getStoredWishBookList();
    const exists = storedWishBookLists.find(bookId => bookId === id)
    if (!exists) {
        storedWishBookLists.push(id);
        localStorage.setItem('book-wish', JSON.stringify(storedWishBookLists))
    }

}



const removeWishBookFromList = (bookId) => {
    const wishList = getStoredWishBookList();
    const updatedWishList = wishList.filter(id => id !== bookId);
    localStorage.setItem('book-wish', JSON.stringify(updatedWishList));
};

export { getStoredWishBookList, saveWishBooklist, removeWishBookFromList }