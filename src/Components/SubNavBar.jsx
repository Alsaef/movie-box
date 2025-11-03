import React from 'react';
import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";

const SubNavBar = () => {
    
    return (
        <div className='bg-red-700 h-full px-[2px]'>
            <div className='flex items-center justify-around py-1'>

                <div className='flex items-center justify-center gap-4 text-white'>
                    <li className='list-none'><a href="">Home</a></li>
                    <li className='list-none'><a href="">About</a></li>
                    <li className='list-none'><a href="">Contact</a></li>
                </div>


                <div className='flex items-center justify-center gap-4 text-white'>
                  <li className='list-none'><a href=""><FaFacebook /></a></li>
                  <li className='list-none'><a href=""><FaTwitter/></a></li>
                  <li className='list-none'><a href=""><FaInstagram /></a></li>
                </div>

            </div>
        </div>
    );
};

export default SubNavBar;