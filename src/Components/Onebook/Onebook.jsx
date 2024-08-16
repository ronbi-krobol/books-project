import { useLoaderData, useParams } from "react-router-dom";



const Onebook = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt);

   




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
                <hr  className="border-1 border-gray-500" />
                <p className="font-normal text-lg pt-1 pb-1">{book.category}</p>
                <hr className="border-1 border-gray-500"/>
                <p className="font-normal text-md text-justify pt-2 pb-2 ">Review : {book.review}</p>
                <div className="flex flex-row gap-12 pb-2 font-bold text-md">
                    <p>Tag</p>
                    <p className="text-green-500 ">#{book.tag}</p>

                </div>
                <hr  className="border-1 border-gray-500" />
                <div className="font-md text-lg grid grid-cols-1 h-[200px] content-between">
                <p>Number of Pages:{book.pages}</p>
                <p>Publisher: {book.publisher}</p>
                <p>Year of Publishing: {book.yearOfPublishing}</p>
                <p> Rating: {book.rating}</p>

                </div>
                
                <div className="flex flex-row gap-28 mt-2">
                <button className="btn w-24 h-4 btn-outline btn-primary">Read</button>
                <button className="btn w-24 h-4 btn-outline btn-secondary">Wishlist</button>
                </div>


            </div>
        </div>
    );
};

export default Onebook;