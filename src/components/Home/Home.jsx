import React,{useEffect} from 'react';
import {Grid,Container} from "@mui/material"
import ProductCard from '../../common/ProductCard';
import HelmetText from '../../common/HelmetText';
import {getProduct} from "../../actions/productAction";
import {useSelector,useDispatch} from "react-redux"
import Loader from '../../common/Loader';

function Home() {
  const dispatch = useDispatch();
  const { loading,  products } = useSelector((state) => state.products);
  useEffect(() => {
   dispatch(getProduct());
  }, [dispatch]);

  return (
 <>
 {loading ?<Loader/>: 
 <>
   <HelmetText title="Home-Upgrad E-Shop"/>
    <Container maxWidth="lg">
     <Grid
          container
          spacing={3}
          className="our-card-container"
        > 
        {
          products.map(product=>{
            return<>
            <Grid item xl={4}lg={4} md={4} sm={6} xs={12}>
             <ProductCard key={product._id} product={product}/>
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

export default Home