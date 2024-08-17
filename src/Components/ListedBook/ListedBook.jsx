import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredBooklist } from "../../utility/localstorage";
import Bookscomplete from "../Bookscomplete/Bookscomplete";



const ListedBook = () => {

    const booksread = useLoaderData();

    const [ReadBooks, setReadBooks] = useState([]);
    
    useEffect ( () => {

        const storedReadbooklist = getStoredBooklist();
        if(booksread.length > 0) {
            const alreadyReadBooks = booksread.filter (book => storedReadbooklist.includes(book.id));
           

            

            /*console.log(alreadyReadBooks)*/

            setReadBooks (alreadyReadBooks);
        }

    },[])

    
    return (
        <div>
            <h1>Books I read : {ReadBooks.length}</h1>

            {ReadBooks.map(book => <Bookscomplete key={book.id} ronbi = {book} ></Bookscomplete> )}

            

        
            
            

                  
        </div>
    );
};

export default ListedBook;