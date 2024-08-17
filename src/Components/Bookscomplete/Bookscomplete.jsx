import { Link } from "react-router-dom";


const Bookscomplete = ({ ronbi }) => {

    const { id, tag, author, bookName, publisher, pages, category, rating, yearOfPublishing, coverImage } = ronbi;


    return (
        <div className=" flex justify-center">
            <div className="flex w-[1200px] border-4 ">

                <div className="w-[300px] p-8 border-4 flex justify-center items-center bg-gray-100">
                    <img className="w-[180px] h-[240px]" src={coverImage} alt="" />
                </div>
                <div>
                    <h1 className="font-extrabold text-2xl p-4">{bookName}</h1>
                    <p className="font-bold text-xl p-4"> By : {author}</p>
                    <div className="flex items-center">
                        <p className="font-bold text-sm p-4">Tag <span>#{tag}</span></p>
                        <p>icon</p>
                        <h6 className="font-normal text-md p-4">Year of publishing : {yearOfPublishing} </h6>
                    </div>
                    <div>
                        <div className="flex items-center p-4">
                            <h3>Icon</h3>
                            <p className="font-normal text-md p-4">Publisher : {publisher}</p>
                        </div>
                        <div className="flex items-center p-4">
                            <h3>Icon</h3>
                            <p className="font-normal text-md p-4">Pages : {pages}</p>
                        </div>
                        <hr />
                        <div className="flex items-center p-4 gap-8">
                            <h2 className="font-normal text-md ">Category : {category} </h2>
                            <h2 className="font-normal text-md "> Rating : {rating}</h2>
                            <Link to ={`/book/${id}`} ><button> View Details</button></Link>
                        </div>

                    </div>


                </div>



            </div>

        </div>

    );
};

export default Bookscomplete;