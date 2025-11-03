import React from 'react';
import Card from './Card';

const ShowMovie = ({movies}) => {
    return (
        <div>
            <h2 className='text-center my-4 font-bold text-black text-4xl'>All <span className='text-red-600'>Movies</span></h2>

            <div className='grid lg:grid-cols-4 grid-cols-1 gap-3 mx-auto w-[90%] my-5'>
                {
                     movies.map((movie,index)=>(
                    
                        <Card key={index} movie={movie}></Card>
                    
                    
                ))
                }
            </div>
        </div>
    );
};

export default ShowMovie;