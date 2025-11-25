import React, { useContext, useEffect } from 'react';
import { WatchListContext } from '../Context/WatchListProvider';
import Swal from 'sweetalert2'
const Card = ({ movie }) => {
  const {watchList,setWatchList}=useContext(WatchListContext)
  const handelWatchList=(drilingmovie)=>{
   const newList={
    Title:drilingmovie.Title,
    images:drilingmovie.Images?.[1],
    ratting:drilingmovie.imdbRating
   }

    setWatchList([...watchList,newList])

    Swal.fire({
  title: "Add Watch List",
  text: "",
  icon: "success"
});
    
  }
  useEffect(()=>{
     localStorage.setItem('watchList',JSON.stringify(watchList))
  },[watchList])
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      
      <img
        src={movie.Images?.[1]}
        alt={movie.Title}
        className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

     
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

     
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h2 className="text-lg font-bold mb-1 truncate">{movie.Title}</h2>
        <div className="flex items-center justify-between">
          <p className="text-sm opacity-90">⭐ {movie.imdbRating}/10</p>
          <span className="text-xs bg-pink-600 px-2 py-1 rounded-md">HD</span>
        </div>
      </div>

      
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl font-semibold mb-2">{movie.Title}</h3>
         <button onClick={()=>handelWatchList(movie)} className='btn bg-red-500 text-white rounded-2xl'>Add Watch List</button>
      </div>
    </div>
  );
};

export default Card;
