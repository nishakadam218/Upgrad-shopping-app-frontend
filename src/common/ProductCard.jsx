import React from "react";
import { CardActions, Button } from "@mui/material";
import { Link } from "react-router-dom";


function ProductCard({product}) {
  return (
    <>            
          <div className="blog-content">
            <Link to = {`/product/${product._id}`}>
              <div className="card-img">
               <img src={product.imageUrl} alt={product.name}  />
               </div>  
              <div className="blog-text-content">
               <div className="card-content">
                <h3>{product.name.substring(0, 30)}</h3>
                <h3 >&#8377;{product.price}</h3>
                </div>
                <p>
              {product.description.substring(0 ,150) +`...`}
                </p>
                </div>
             </Link> 
              <CardActions sx={{justifyContent:'space-between',padding:"0"}}>
               <div className="card-action">
               <Link to = {`/product/${product._id}`}> <Button variant="contained" sx={{padding:"3"}}>BUY</Button></Link>
                </div>
              </CardActions>
            </div>
         
    </>
  );
}

export default ProductCard;
