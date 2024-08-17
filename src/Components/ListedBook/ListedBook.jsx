import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredBooklist } from "../../utility/localstorage";
import Bookscomplete from "../Bookscomplete/Bookscomplete";



const ListedBook = () => {

    const booksread = useLoaderData();

    const [ReadBooks, setReadBooks] = useState([]);

    useEffect(() => {

        const storedReadbooklist = getStoredBooklist();
        if (booksread.length > 0) {
            const alreadyReadBooks = booksread.filter(book => storedReadbooklist.includes(book.id));




            /*console.log(alreadyReadBooks)*/

            setReadBooks(alreadyReadBooks);
        }

    }, [])


    return (
        <div className="flex flex-col justify-center items-center"> 
            <h1>Books I read : {ReadBooks.length}</h1>

            <div role="tablist" className="tabs tabs-lifted w-[1180px]">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 ">
                    {ReadBooks.map(book => <Bookscomplete key={book.id} ronbi={book} ></Bookscomplete>)}

                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 6">
                    Tab content 2
                </div>


            </div>


        </div>
    );
};

export default ListedBook;