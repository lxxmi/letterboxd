import {makeStyles} from '@material-ui/core'

export default makeStyles((theme)=>({
    navLink:{
        fontFamily:'Open Sans, sans-serif',
        fontWeight:'700',
        size:'18px',
        marginLeft:theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            marginLeft:'0',
          },
    },
}));