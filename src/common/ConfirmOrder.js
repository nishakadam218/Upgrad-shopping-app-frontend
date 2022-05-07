import React from 'react'
import CheckoutSteps from './CheckoutSteps';
import {Grid,Container,Typography}from "@mui/material";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function ConfirmOrder() {
  const navigate = useNavigate();
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
  
    const shippingCharges = subtotal > 1000 ? 0 : 200;
  
    const tax = subtotal * 0.18;
  
    const totalPrice = subtotal + tax + shippingCharges;
  
    const proceedToPayment = () => {
      const data = {
        subtotal,
        shippingCharges,
        tax,
        totalPrice,
      };
  
      sessionStorage.setItem("orderInfo", JSON.stringify(data));
      toast.success("payment succesfull")
      navigate("/");
    };
      const address = `${shippingInfo.landmark},${shippingInfo.street}, ${shippingInfo.city},  ${shippingInfo.pinCode}`;
  return ( 
    <>
    <Container maxWidth="lg">
    <CheckoutSteps activeStep={2}/>
   <div className="step2">
    <Grid container spacing={3} sx={{margin:"0 auto"}}>  
    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
    <div className="detail-content">
              <h1>Confirm Product Details: </h1>
              </div>
    {cartItems &&
        cartItems.map((item) => (
<div className="detail-content">
<Link to={`/product/${item.product}`}>
                      <p>{item.name}</p>
                    </Link>
    <p>
      Category:<strong>{item.category}</strong>
    </p>
    <p>
    {item.description.substring(0 ,50) +`...`}
    </p>
    <div className="card-content">
      <span style={{ color: "red" }}>
                    Total Price:  {item.quantity} X ₹{item.price} ={" "}
                      <b>₹{item.price * item.quantity}</b>
       </span>
    </div>
</div>

))}</Grid>
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
    <div className="detail-content">
              <h1>Address Details: </h1>
              <p>
              {address}
              </p>
              <p>
               Contact Number:<span>{shippingInfo.phoneNo}</span>
              </p>
             
       </div>
       
      </Grid>
 
      <Grid item xl={4} lg={4} md={4} sm={12} xs={12} >
           <div className="orderSummary">
            <Typography>Order Summery</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>₹{subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>₹{shippingCharges}</span>
              </div>
              <div>
                <p>GST:</p>
                <span>₹{tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{totalPrice}</span>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
          </Grid>
    </Grid></div>
    </Container>
    </>
  )
}

export default ConfirmOrder