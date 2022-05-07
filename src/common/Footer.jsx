import React from 'react'
import { Link } from 'react-router-dom';
import {Grid} from '@mui/material'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <>

<div className='copyright'>
<Grid container sx={{margin:'0 auto'}}>
<Grid item xl={12} sm={12} xs={12} lg={12} md={12}>
    <p>Copyright &copy; <Link to="/"> upGrad</Link> &nbsp;{currentYear}</p>
    </Grid>  
   </Grid>
    </div>

           
    </>
  )
}

export default Footer