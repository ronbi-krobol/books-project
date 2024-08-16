


const Banner = () => {

    
    
    return (
        <div className="ml-20 mr-20 mt-12 ">
            <div className="bg-yellow-200 flex flex-row justify-between h-[400px] rounded-[14px]">
                <div className="grid grid-cols-1 place-content-center ml-24 gap-10 w-1/2">
                    <h1 className="text-5xl font-bold w-[440px] text-left ml-10 mb-16">Books to freshen up your bookshelf</h1>
                    <button className="w-[140px] h-[44px] bg-green-500 rounded-lg text-sm font-bold text-white ml-10 ">View The List</button>
                </div>
                <div className=" mr-40 ">
                    <div className="w-[318px] h-[394px] flex flex-row justify-around items-center ">
                        <img src="/public/hand-drawn-flat-design-stack-books-illustration.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;