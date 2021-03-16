import React,{useEffect} from 'react'
import axios from 'axios'
import {Hidden} from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

    const GenreList = ()=>{
        return (
        <div>
        {selectedGenres && selectedGenres.map((g)=>{
            return <Chip  style={{margin:4, color:'#fff', background:'#333','font-family':'Work Sans'}} clickable onDelete={()=>handleRemoveGenre(g)} color='primary' size='small' label={g.name} key={g.id} />
        })}
        {genres && genres.map((g)=>{
            return <Chip style={{margin:4,'font-family':'Work Sans'}} clickable onClick={()=>handleAddGenre(g)} size='small' label={g.name} key={g.id} />
        })}
        </div>
        )
    }

    return (
        <>
        <div style={{'margin-bottom':'8px'}}>
            <Hidden xsDown>
                <GenreList />
            </Hidden>
            <Hidden smUp>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <Typography style={{margin:0}} >Filters</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <GenreList />
                    </AccordionDetails>
                </Accordion>
            </Hidden>
        </div>
        </>
    )
}
