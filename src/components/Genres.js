import React,{useEffect} from 'react'
import axios from 'axios'
import Chip from '@material-ui/core/Chip';

export const Genres = ({type,genres, setGenres,setPage, selectedGenres, setSelectedGenres}) => {

    const fetchGenres = async ()=>{
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        setGenres(data.genres)
    }

    useEffect(()=>{
        fetchGenres()
        return () => {
            setGenres({}); 
          };
    },[])

    const handleAddGenre = (genre)=>{
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter(g => g.id!== genre.id))
        setPage(1)
    }
    const handleRemoveGenre = (genre)=>{
        setGenres([...genres, genre])
        setSelectedGenres(selectedGenres.filter(g => g.id!== genre.id))
        setPage(1)
    }

    return (
        <div style={{'margin-bottom':'8px',}}>
            {selectedGenres && selectedGenres.map((g)=>{
                return <Chip  style={{margin:4, color:'#fff', background:'#333','font-family':'Work Sans'}} clickable onDelete={()=>handleRemoveGenre(g)} color='primary' size='small' label={g.name} key={g.id} />
            })}
            {genres && genres.map((g)=>{
                return <Chip style={{margin:4,'font-family':'Work Sans'}} clickable onClick={()=>handleAddGenre(g)} size='small' label={g.name} key={g.id} />
            })}
        </div>
    )
}
