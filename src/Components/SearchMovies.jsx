import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loading from './Loading';
import Card from './Card';
import axios from 'axios';

const SearchMovies = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchFn = async () => {
        const res = await axios.get('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/075b6aaba5ee43554ecd55006e5d080a8acf08fe/Film.JSON')
        setMovies(res.data)
        setLoading(false)

    }
    useEffect(() => {
        fetchFn()
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    const filterMovie = movies.filter(movie => movie.Title.toLowerCase().includes(query.toLowerCase()))
      
    return (
        <div>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-3 mx-auto w-[90%] my-5'>
                {
                    filterMovie.map((movie, index) => (

                        <Card key={index} movie={movie}></Card>


                    ))
                }
            </div>

             <div>
                    {filterMovie.length === 0 &&
                        <div className=' my-7'>

                          <h2 className=' text-center text-red-500 text-4xl font-bold'>Movie Not Found</h2>

                        </div>

                    }
                </div>
        </div>
    );
};

export default SearchMovies;