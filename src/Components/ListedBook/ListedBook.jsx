import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredBooklist } from "../../utility/localstorage";
import Bookscomplete from "../Bookscomplete/Bookscomplete";
import { getStoredWishBookList } from "../utility2/localstorage2";



const ListedBook = () => {

    const bookswish = useLoaderData();

    const [BooksWish, setBooksWish] = useState([]);

    useEffect(() => {
        const storedFinalWishBookList = getStoredWishBookList();
        if (bookswish.length > 0) {
            const alreadyWishBooks = bookswish.filter(bookwish => storedFinalWishBookList.includes(bookwish.id));

            setBooksWish(alreadyWishBooks);
        }
    }, [bookswish])


    const booksread = useLoaderData();

    const [ReadBooks, setReadBooks] = useState([]);

    useEffect(() => {

        const storedReadbooklist = getStoredBooklist();
        if (booksread.length > 0) {
            const alreadyReadBooks = booksread.filter(book => storedReadbooklist.includes(book.id));




            /*console.log(alreadyReadBooks)*/

            setReadBooks(alreadyReadBooks);
        }

    }, [booksread])


    return (
        <div className="flex flex-col justify-center items-center">
            <h1>Books I read : {ReadBooks.length}</h1>


            <h1 className="bg-red-300">Books I awlays wish : {BooksWish.length}</h1>

            <div role="tablist" className="tabs tabs-lifted w-[1180px]">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 ">
                    {ReadBooks.map(book => <Bookscomplete key={book.id} ronbi={book} ></Bookscomplete>)}

                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 6">
                    {BooksWish.map (wishbook => <Bookscomplete key={wishbook.id} ronbi={wishbook} ></Bookscomplete> )}
                </div>


            </div>



        </div>
    );
};

export default ListedBook;