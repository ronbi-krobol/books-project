import { useEffect, useState } from 'react';
import Ninebook from '../Ninebooks/Ninebook';



const Homebooks = () => {

    const [Booksno, setBooksno] = useState([])

    const [Totalbooks, setTotalbooks] = useState([6])

    useEffect(() => {

        fetch("bookslist.json")
            .then(res => res.json())
            .then(data => setBooksno(data))


    }, [])




    return (

        <div>
            <div className=' grid grid-cols-3 justify-between ml-20 mr-20 gap-16 mt-12'>

                {Booksno.slice(0, Totalbooks).map(book => <Ninebook key={book.id} singlebook={book}></Ninebook>)}

            </div>

            <div className='text-center mt-8 mb-8'>

                <button onClick={() => setTotalbooks()} className="btn w-[120px] btn-outline btn-primary">Show All</button>


            </div>

        </div>



    );
};

export default Homebooks;