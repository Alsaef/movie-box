import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({setSearchBar}) => {
    const [search,setSearch]=useState('')
    const navigate=useNavigate()
    const handelSearch=(e)=>{
      e.preventDefault()

      navigate(`/movies?query=${search}`)

      setSearch('')
      setSearchBar(false)
    }
    return (
        <div className='my-5'>
            <div>
               <form className='flex items-start gap-1' onSubmit={handelSearch}>
                 <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search Movies" className="input" />
                <button className='btn btn-neutral'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg></button>
               </form>
            </div>
        </div>
    );
};

export default SearchBar;