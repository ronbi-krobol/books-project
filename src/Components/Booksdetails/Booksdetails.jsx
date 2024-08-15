import { useEffect, useState } from "react";
import Onebook from "../Onebook/Onebook";


const Booksdetails = () => {

    const [Books, setBooks] = useState([])

    useEffect(() => {
        fetch("bookslist.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>

            {Books.map(bookno => <Onebook key = {bookno.id} Onebookdetails = {bookno}></Onebook>)}

        </div>
    );
};

export default Booksdetails;