import React,{useState} from 'react'
import { Link as RouterLink } from 'react-router-dom';
import {Drawer, IconButton, MenuItem,Link} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './styles';

export const MenuDrawer = ({navLinks}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenuOpen = ()=>{
        setMenuOpen(!menuOpen)  
    }
    const handleMenuClose = ()=>{
        setMenuOpen(!menuOpen)
    }
    const {navLink} = useStyles()
    return (
        <div>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                <MenuIcon/>
            </IconButton>
            <Drawer anchor='left' open={menuOpen} onClose={handleMenuClose}>
                <div style={{"width":"200px","padding":"20px 20px"}}>
                    {navLinks && navLinks.map(({ label, path, icon })=>{
                        return <Link key={label} className={navLink} color='inherit' style={{'text-decoration':'none'}}
                                component={RouterLink} to={path}>
                                    <MenuItem onClick={handleMenuClose}>
                                        {icon}
                                        <span style={{"padding-left":"10px"}}>{label}</span>
                                    </MenuItem>
                                </Link>
                    })}
                </div>
            </Drawer>
        </div>
    )
}
