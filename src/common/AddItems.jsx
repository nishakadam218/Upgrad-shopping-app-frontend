import React from 'react';
import {Grid,Container}from "@mui/material";
import {useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CustomButton } from './customStyles';
import CheckoutSteps from './CheckoutSteps';
import toast from 'react-hot-toast';

function AddItems() {
  const {  cartItems } = useSelector((state) => state.cart);
  const handleToast=()=>{
    toast.success("Order placed succesfully")
  }
  return (
    <>
    <CheckoutSteps activeStep={0}></CheckoutSteps>
    <Container maxWidth="lg">

   {cartItems &&
      cartItems.map((item) => (
    <>
    <Grid container spacing={3} sx={{margin:"20px auto"}}>
      <Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
          <div className="item-details">
            <div className="CartItemCard">
              <img
                style={{ width: "15vmax"}}
                src={item.imageUrl}
                alt={item.name}
              />
            </div>
          </div>
        </Grid>
        <Grid item xl={9} lg={9} md={9} sm={12} xs={12} >
        <div className="item-details">
            <div className="detail-content">
             <Link to={`/product/${item.product}`}>
                      <h3 style={{ color: "#3D4046"}}>{item.name}</h3>
              </Link>
              <p>Quantity: <strong>{item.quantity}</strong></p>
              <p>
                Category:<strong>{item.category}</strong>
              </p>
              <p>
                {item.description.substring(0 ,50) +`...`}
              </p>
              <div className="card-content">
                {/* <span style={{ color: "red" }}> {item.quantity} X {item.price}= &#8377;{item.price * item.quantity}</span> */}
                <span style={{ color: "red" }}>  &#8377;{item.price * item.quantity}</span>
              </div>     
            </div>
          </div>
        </Grid>
        </Grid>
        </> ))} 
      
        <Grid container spacing={3} sx={{margin:"0 auto"}}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
       <Link to="/shipping"><CustomButton
       onClick={handleToast}
            variant="contained"
            sx={{ marginTop: "10px", width: "200px" }}
           >
           CONTINUE
          </CustomButton></Link>
          </Grid>
          </Grid>
          </Container>
    </>
  )
}

export default AddItems
