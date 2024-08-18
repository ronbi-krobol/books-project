import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredBooklist, saveBooklist } from "../../utility/localstorage";
import { getStoredWishBookList, removeWishBookFromList, saveWishBooklist } from "../utility2/localstorage2";



const Onebook = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt);



    const storedReadBooklist = getStoredBooklist();
    const storedWishBooklist = getStoredWishBookList()

    const bookRead = () => {

        if (storedReadBooklist.includes(idInt)) {
            toast("This Book is already marked as read !");
        }

        else {
            saveBooklist(idInt);
            toast("You read the book !");

        if (storedWishBooklist.includes(idInt)) {
                removeWishBookFromList(idInt); // Call the function with correct bookId
                toast.info("This book was removed from the wishlist because it's marked as read.");
            }


        }



    };

    const wishList = () => {

        if (storedReadBooklist.includes(idInt)) {
            toast("This Book is already read !")
        }

        else if (storedWishBooklist.includes(idInt)) {
            toast('Books Already added in the wishlist')
        }

        else {
            saveWishBooklist(idInt)
            toast("Books Added To Wishlist !")
        }


    };



    return (
        <div className="flex flex-row ml-28 mr-2 gap-20 h-[750px] mt-12 ">
            <div className=" h-[700px] w-[500px] grid grid-cols-1 justify-items-center content-center bg-gray-100 rounded-2xl">

                <div className="w-[400px] h-[600px]" >
                    <img className="h-[600px] w-[400px] rounded-xl" src={book.coverImage} alt="" />
                </div>

            </div>
            <div className="w-[700px] h-[700px] grid grid-cols-1 content-between">
                <h1 className="font-extrabold text-4xl">{book.bookName}</h1>
                <p className="font-bold text-2xl mt-4 pb-2"> By : {book.author}</p>
                <hr className="border-1 border-gray-500" />
                <p className="font-normal text-lg pt-1 pb-1">{book.category}</p>
                <hr className="border-1 border-gray-500" />
                <p className="font-normal text-md text-justify pt-2 pb-2 ">Review : {book.review}</p>
                <div className="flex flex-row gap-12 pb-2 font-bold text-md">
                    <p>Tag</p>
                    <p className="text-green-500 ">#{book.tag}</p>

                </div>
                <hr className="border-1 border-gray-500" />
                <div className="font-md text-lg grid grid-cols-1 h-[200px] content-between">
                    <p>Number of Pages:{book.pages}</p>
                    <p>Publisher: {book.publisher}</p>
                    <p>Year of Publishing: {book.yearOfPublishing}</p>
                    <p> Rating: {book.rating}</p>

                </div>

                <div className="flex flex-row gap-28 mt-2">
                    <button onClick={bookRead} className="btn w-24 h-4 btn-outline btn-primary">Read</button>
                    <button onClick={wishList} className="btn w-24 h-4 btn-outline btn-secondary">Wishlist</button>
                </div>


            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Onebook;