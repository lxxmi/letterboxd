import {makeStyles} from '@material-ui/core'

export default makeStyles((theme)=>({
    trendingGrid:{
        display:'flex',
        flexWrap:'wrap',
        alignItems:'stretch',
        alignContent:'stretch',
        justifyContent:'space-around',
    },
    pageTitle:{
        color:'rgba(0,0,0,0.8)',
        fontFamily:'Open Sans',
        marginBottom:'5px',
        paddingLeft:theme.spacing(1),
        [theme.breakpoints.down('xs')]:{
            fontSize:'18px',
        }
    },
}));