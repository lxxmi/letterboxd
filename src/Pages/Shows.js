import { useState, useEffect } from 'react';
import axios from 'axios'
import { PaginationBar } from './../components/Pagination/PaginationBar';
import { MovieCard } from './../components/MovieCard/MovieCard';
import { Typography } from '@material-ui/core';
import useStyles from './styles'
import { Genres } from './../components/Genres';

export const Shows = () => {
    const[page, setPage] = useState(1)
    const[numOfPages, setNumOfPages] = useState()
    const [results, setResults] = useState([])
    const[genres, setGenres] = useState([])
    const[selectedGenres, setSelectedGenres] = useState([])
    const {trendingGrid, pageTitle} = useStyles([])

    const useGenre = (selectedGenres) => {
        if (selectedGenres.length < 1) return "";
      
        const GenreIds = selectedGenres.map((g) => g.id);
        return GenreIds.reduce((acc, curr) => acc + "," + curr);
      };
      const genreList = useGenre(selectedGenres)

    const fetchMovies = async ()=>{
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreList}`
            )
        setResults(data.results)
        setNumOfPages(data.total_pages)
    }
    useEffect(()=>{
        fetchMovies()
    },[page, genreList])

    return (
        <div >
            <Typography variant='body' component='h2' className={pageTitle}>Discover TV Shows</Typography>
            <Genres
             page={page}
             type='tv'
             genres={genres}
             setGenres={setGenres}
             selectedGenres={selectedGenres}
             setSelectedGenres={setSelectedGenres}
             setPage={setPage}
             />
            <div className={trendingGrid}>
                {results && results.map(m => (
                    <MovieCard
                    key={m.id} 
                    id={m.id}
                    poster={m.poster_path}
                    title={m.title || m.name}
                    date={m.first_air_date || m.release_date}
                    media_type='tv'
                    vote_avg={m.vote_average}
                    />
                ))}
            </div>
            {numOfPages > 1 &&
                <PaginationBar setPage={setPage} numOfPages={numOfPages} />
            }
        </div>
    )
}

