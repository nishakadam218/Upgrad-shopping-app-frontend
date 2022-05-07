import React, { useState } from "react";
import { Grid, Button,} from "@mui/material";
import { CustomFormTextField } from "../common/customStyles";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../actions/cartAction";
import {useNavigate} from "react-router-dom"
import CheckoutSteps from "./CheckoutSteps";
import toast from "react-hot-toast";
function AddAddress() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { shippingInfo } = useSelector((state) => state.cart);

  // const [address, setAddress] =useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [street, setStreet] = useState(shippingInfo.street);
  const [name, setName] = useState(shippingInfo.name);
  // const [state, setState] = useState(shippingInfo.state);
  const [landmark, setLandmark] = useState(shippingInfo.landmark);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);


  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert.error("Phone Number should be 10 digits Long");
      return;
    }
    dispatch(
      saveShippingInfo({ name,street, city, landmark, pinCode, phoneNo })
    );
    toast.success("Address Added Succesfully")
    navigate("/confirmorder");
    
  };
  console.log(shippingInfo);
  return (
    <>
    <CheckoutSteps activeStep={1}></CheckoutSteps>
    <form onSubmit={shippingSubmit} style={{margin:"0 auto"}}>
      <Grid container maxWidth="lg" sx={{ textAlign: "center" }}>
               <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CustomFormTextField
            label="Name"
            variant="outlined"
            placeholder="Enter Your Name"
            sx={{ width: "300px", height: "56px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CustomFormTextField
            label="Contact Number"
            variant="outlined"
            placeholder="Enter Your Contact Number"
            sx={{ width: "300px", height: "56px" }}
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CustomFormTextField
            label="Landmark"
            variant="outlined"
            placeholder="Enter Your Landmark"
            sx={{ width: "300px", height: "56px" }}
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CustomFormTextField
            label="Street"
            variant="outlined"
            placeholder="Enter Your Street"
            sx={{ width: "300px", height: "56px" }}
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CustomFormTextField
            label="City"
            variant="outlined"
            placeholder="Enter Your City"
            sx={{ width: "300px", height: "56px" }}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CustomFormTextField
            label="Zip code"
            variant="outlined"
            placeholder="Enter Your Zip code"
            sx={{ width: "300px", height: "56px" }}
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: "10px", width: "200px" }}
           
           >
            PLACE ORDER
          </Button>
        </Grid>
    
      </Grid>
      </form>
    </>
  );
}

export default AddAddress;
