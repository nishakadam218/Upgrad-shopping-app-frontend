import React  from 'react';
import {Grid,Container} from "@mui/material"
import HelmetText from '../../common/HelmetText'
import AdminProductCard from '../../common/Admin/AddminProductCard';
import {useSelector} from "react-redux"
import Loader from '../../common/Loader';

function AdminHome() {
  const { loading,  products } = useSelector((state) => state.products);
  return ( <>
    {loading ?<Loader/>: 
    <>
      <HelmetText title="AdminHome-Upgrad E-Shop"/>
       <Container maxWidth="lg">
        <Grid
             container
             spacing={3}
             className="our-card-container"
           > 
           {
             products.map(product=>{
               return<>
               <Grid item xl={4}lg={4} md={4} sm={6} xs={12} key={product._id}>
                <AdminProductCard  product={product}  />
                </Grid>   
                </>
             })
           }
         </Grid>
         </Container>
          </>
       }
    </>
  )
}
export default AdminHome