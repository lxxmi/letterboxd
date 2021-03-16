import React,{useState} from 'react'
import { Link as RouterLink } from 'react-router-dom';
import {AppBar,Hidden, Toolbar, Container, Typography, Button} from '@material-ui/core'
import Fab from '@material-ui/core/Fab';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {MenuDrawer} from '../MenuDrawer/MenuDrawer'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import MovieIcon from '@material-ui/icons/Movie'
import TvIcon from '@material-ui/icons/Tv'
import useStyles from './style';

export const Header = () => {
    const navLinks = [
        {label:"Trending", path:"/", icon:<WhatshotIcon/>},
        {label:"Movies", path:"/movies", icon:<MovieIcon/>},
        {label:"TV Shows", path:"/shows", icon:<TvIcon/>},
    ]
    const {header, logo, navLink, toolbar, scrollTopBtn} = useStyles()
    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {    
       if (!showScroll && window.pageYOffset > 400){
          setShowScroll(true)    
       } else if (showScroll && window.pageYOffset <= 400){
          setShowScroll(false)    
       }  
    };
    window.addEventListener('scroll', checkScrollTop)

    return (
        <div>
            <AppBar position="fixed" className={header}>
                <Container maxWidth='lg'>
                    <Toolbar className={toolbar}>
                        <Hidden mdUp>
                            <MenuDrawer navLinks={navLinks}/>
                        </Hidden>
                        <Typography onClick={()=>window.scroll(0,0)} variant='h6' className={logo} component='h1'>
                            LetterBoxd
                        </Typography>
                        <Hidden smDown>
                            <div>
                                {navLinks && navLinks.map(({ label, path })=>{
                                    return <Button key={label} className={navLink} color='inherit'
                                            component={RouterLink} to={path}>{label}</Button>
                                })}
                            </div>                    
                        </Hidden>
                    </Toolbar>
                </Container>                                
            </AppBar>
            {showScroll &&
            <Fab color='primary' size='small' onClick={()=>window.scroll(0,0)} className={scrollTopBtn} aria-label='Scroll back to top'>
            <ExpandLessIcon />
        </Fab>
        }
        </div>
    )
}
