import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import axios from 'axios';
import Hero from './Hero';
import ShowMovie from './ShowMovie';

const Home = () => {
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
    return (
        <div>
            <Hero movies={movies}></Hero>
            <ShowMovie movies={movies}></ShowMovie>
        </div>
    );
};

export default Home;