import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [searchBar, setSearchBar] = useState(false)
    let nav = <>
        <li><Link to="/">Feature</Link></li>
        <li><Link to="/watch-list">Watch List</Link></li>
        <li><a href="">Popular Movie</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100  mx-auto lg:w-[60%] w-full z-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {nav}
                        </ul>
                    </div>
                    <a className=""><img width={200} src={Logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={() => setSearchBar(!searchBar)} className="cursor-pointer">
                        {
                            searchBar===false?  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg> :  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        }
                       


                       

                    </button>
                </div>
            </div>

            <div className={`flex flex-col items-center overflow-hidden transition-all duration-300 ease-in-out ${searchBar ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                {
                    searchBar === true && <SearchBar setSearchBar={setSearchBar}></SearchBar>}
            </div>

        </div>
    );
};

export default NavBar;