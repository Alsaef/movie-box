import React, { useContext } from 'react';
import { WatchListContext } from '../Context/WatchListProvider';
import Swal from 'sweetalert2'
const WatchList = () => {
    const { watchList, setWatchList } = useContext(WatchListContext)
    console.log(watchList);

    const removeList = (i,title) => {

        const remove = watchList.filter((list,index) => index !== i)
        
        setWatchList(remove)

          Swal.fire({
          title: `Remove Movie ${title.title} Watch List`,
          text: "",
          icon: "success"
        });

    }

    return (
               <div className="py-6">
            <h2 className="text-4xl text-center mb-6">
                Watch <span className="font-bold text-red-500">List</span>
            </h2>

            <div className="mx-auto w-[90%] flex flex-col gap-4">
                {watchList.map((list, index) => (
                    <div
                        key={index}
                        className="card card-side bg-base-100 shadow-md border border-gray-300 rounded-xl p-4"
                    >
                        <figure className="bg-gray-100 rounded-lg p-3 w-[120px] h-[130px] flex items-center justify-center">
                            <img
                                src={list.images}
                                alt={list.Title}
                                className="h-full object-cover rounded-md"
                            />
                        </figure>

                        <div className="card-body px-4 py-2">
                            <h2 className="card-title text-xl font-semibold">
                                {list.Title}
                            </h2>
                            <p className="text-sm opacity-80">⭐ {list.ratting}/10</p>

                            <div className="card-actions justify-end mt-3">
                                <button
                                    onClick={() => removeList(index,{title:list.Title})}
                                    className="btn btn-error btn-sm text-white rounded-lg px-4"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default WatchList;