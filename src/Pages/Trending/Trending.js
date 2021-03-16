import { Typography } from '@material-ui/core';
import axios from 'axios'
import {useState, useEffect} from 'react'
import { PaginationBar } from '../../components/Pagination/PaginationBar';
import { MovieCard } from './../../components/MovieCard/MovieCard';
import useStyles from './../styles'

export const Trending = () => {
    const {trendingGrid,pageTitle} = useStyles()
    const[numOfPages, setNumOfPages] = useState()
    const [results, setResults] = useState([])
    const [page, setPage ] = useState(1)
    const fetchTrending = async ()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        setResults(data.results)
    }
    useEffect(() => {
        fetchTrending()
    }, [page])

    return (
        <div >
            <Typography variant='body' component='h2' className={pageTitle}>Trending</Typography>
            <div className={trendingGrid}>
                {results && results.map(m => (
                    <MovieCard
                    key={m.id} 
                    id={m.id}
                    poster={m.poster_path}
                    title={m.title || m.name}
                    date={m.first_air || m.release_date}
                    media_type={m.media_type}
                    vote_avg={m.vote_average}
                    />
                ))}
            </div>
            {numOfPages > 1 &&
                <PaginationBar setPage={setPage} />
            }
        </div>
    )
} 
