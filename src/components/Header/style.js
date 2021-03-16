import {makeStyles} from '@material-ui/core'

export default makeStyles((theme)=>({
    header:{
        backgroundColor: "#400CCC",
    },
    scrollTopBtn:{
        backgroundColor: "#400CCC",
        position:'fixed',
        zIndex:'100',
        bottom:theme.spacing(5), 
        right:theme.spacing(8),
        [theme.breakpoints.down('xs')]:{
            right:theme.spacing(2),
        }
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down('sm')]: {
            paddingLeft:'0',
            justifyContent: "start",
        },
    },
    logo:{
        fontFamily:'Work Sans, sans-serif',
        fontWeight: '600',
        color:'#FFFEFE',
        textAlign:'left',
    },
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