import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import useStyles from './styles'

export const PaginationBar = ({setPage, numOfPages=10}) => {
    const handlePageChange =(page)=>{
        setPage(page)
        window.scroll(0,0)
    }
    const {outerBar} = useStyles()
    return (
        <Pagination className={outerBar}
         onChange={(e)=>handlePageChange(e.target.textContent)}
         count={numOfPages}
         size='small'
         hideNextButton
         hidePrevButton
         />
    )
}
