import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { TbBrandPagekit } from "react-icons/tb";


const Bookscomplete = ({ ronbi }) => {

    const { id, tag, author, bookName, publisher, pages, category, rating, yearOfPublishing, coverImage } = ronbi;


    return (

        <div className=" flex justify-center mt-8">
            <div className="flex w-[1200px] border-[2px] rounded-lg p-6 justify-around">

                <div className="w-[280px] h-[320px] p-8 rounded-lg flex justify-center items-center bg-gray-100">
                    <img className="w-[2200px] h-[280px] rounded-lg" src={coverImage} alt="" />
                </div>
                <div className=" grid grid-cols-1 content-center">
                    <h1 className="font-extrabold text-2xl p-2">{bookName}</h1>
                    <p className="font-bold text-xl p-2"> By : {author}</p>
                    <div className="flex items-center">
                        <p className="font-bold text-sm p-2">Tag <span>#{tag}</span></p>
                        <p className="text-lg"><CiLocationOn /></p>
                        <h6 className="font-normal text-md p-2">Year of publishing : {yearOfPublishing} </h6>
                    </div>
                    <div>
                        <div className="flex items-center p-2">
                            <h3 className="text-lg"><GoPeople /></h3>
                            <p className="font-normal text-md p-2">Publisher : {publisher}</p>
                        </div>
                        <div className="flex items-center p-2">
                            <h3 className="text-xl"><TbBrandPagekit /></h3>
                            <p className="font-normal text-md p-2">Pages : {pages}</p>
                        </div>
                        <hr className="border-[1px] border-gray-400 ml-4" />
                        <div className="flex items-center p-3 gap-40">
                            <h2 className="font-bold text-md text-blue-500 bg-blue-100 p-3 mt-2 rounded-2xl ">Category : {category} </h2>
                            <h2 className="font-bold text-md text-yellow-600 bg-yellow-100 p-3 mt-2 rounded-2xl w-[180px"> Rating : {rating}</h2>
                            <Link to ={`/book/${id}`} ><button className="bg-green-500 text-white p-3 mt-2 rounded-2xl "> View Details</button></Link>
                        </div>

                    </div>


                </div>



            </div>

        </div>

    );
};

export default Bookscomplete;