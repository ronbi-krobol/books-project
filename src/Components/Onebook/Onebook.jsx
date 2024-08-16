import { useLoaderData, useParams } from "react-router-dom";



const Onebook = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find (book => book.id === idInt);
    

   
    
    

    return (
        <div className="flex flex-row">
            <div className="w-1/2">
                
                <div >
                    <img src={book.coverImage} alt="" />
                </div>

            </div>
            <div className="w-1/2"> 
                <h1>{book.bookName}</h1>
                <p> By : {book.author}</p>
                <hr />
                <p>{book.category}</p>
                <hr />
                <p>Review : {book.review}</p>
                <div>
                    <p>Tag</p>
                    <p>#{book.tag}</p>
                    
                </div>
                <hr />
                <p>Number of Pages: {book.pages}</p>
                <p>Publisher: {book.publisher}</p>
                <p>Year of Publishing: {book.yearOfPublishing}</p>
                <p> Rating: {book.rating}</p>
                <div>
                   <button>Read</button>
                   <button>Wishlist</button>
                </div>


            </div>
        </div>
    );
};

export default Onebook;