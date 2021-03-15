import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import {AppBar,Hidden, Toolbar, Container, Typography, Button} from '@material-ui/core'
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
    const {header, logo, navLink, toolbar} = useStyles()
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
        </div>
    )
}
