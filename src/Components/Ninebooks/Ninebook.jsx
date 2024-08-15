import { CiStar } from "react-icons/ci";

const Ninebook = ({ singlebook }) => {

    const { category, tag, bookName, author, publisher, rating, coverImage, pages } = singlebook;
    return (
        <div className=" border-2 rounded-[14px]">
            <div className="p-6">

                <div className=" h-[300px] grid grid-cols-1 place-items-center border-6 bg-gray-200 rounded-2xl  ">

                    <div className="w-[180px] h-[270px] border-4 ">
                        <img src={coverImage} alt="" />
                    </div>
                </div>

                <div className="mt-4">
                    <div className="flex flex-row justify-between">
                        <p className="text-green-600 bg-blue-50 font-semibold  p-1 rounded-md">{tag}</p>
                        <p className="text-green-600 bg-blue-50 font-semibold  p-1 rounded-md"> {publisher} </p>
                    </div>
                    <h3 className="font-bold text-[28px] mt-4 p-1">{bookName}</h3>
                    <p className="font-semibold text-xl mt-2 p-1"> By : {author}</p>
                    <hr  className="border-2 border-gray-500 border-dashed ml-[6px] mt-4" />
                    

                    <div className="mt-4 flex flex-row justify-between">
                        <p className="font-semibold p-1 text-lg"> {category}</p>
                        <div className="flex flex-row items-center gap-4">
                            <p className="font-semibold p-1 text-lg">{rating}</p>
                            <h1 className="text-2xl font-semibold"><CiStar></CiStar></h1>
                        </div>

                    </div>

                </div>

            </div>



        </div>
    );
};

export default Ninebook;