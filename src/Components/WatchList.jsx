import React, { useContext } from 'react';
import { WatchListContext } from '../Context/WatchListProvider';

const WatchList = () => {
    const { watchList, setWatchList } = useContext(WatchListContext)
    console.log(watchList);

    const removeList = (i) => {

        const remove = watchList.filter((list,index) => index !== i)
        
        setWatchList(remove)

    }

    return (
        <div>
            <h2 className=' text-4xl text-center py-2.5'> watch <span className='font-bold text-red-500'>list</span></h2>

            <div className='mx-auto w-[90%] flex flex-col gap-3'>
                {
                    watchList.map((list, index) => (
                        <div className="card card-side bg-base-100 shadow-sm border-2 border-black py-3 px-4">
                            <figure>
                                <img
                                    className='h-[100px]'
                                    src={list.images}
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{list.Title}</h2>
                                <p>{list.ratting}.</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => removeList(index)} className="btn btn-error text-white">Remove</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default WatchList;