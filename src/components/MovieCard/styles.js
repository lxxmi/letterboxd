import {makeStyles} from '@material-ui/core'

export default makeStyles((theme)=>({
    card:{
        width:200,
        borderRadius:'10px',
        margin:'0 4px 10px 4px',
        boxShadow:'5px 5px 8px rgba(0,0,0,0.15) ',
        [theme.breakpoints.down('xs')]: {
            width:'40vw',
        },
    },
    badge:{
        marginLeft:"25px",
        marginTop:"-18px",
        borderRadius:'50%',
    },
    cardContent:{
        padding:'0px 10px 10px 10px',
    },
    cardTitle:{
        fontFamily:'Open sans, sans-serif',
        fontSize:'16px',
        fontWeight:'600',
        width:'100%',
        // paddingLeft:'8px',
        [theme.breakpoints.down('xs')]:{
            fontSize:'14px'
        }
    },
    subtitle:{
        fontSize:'12px',
    },
}));