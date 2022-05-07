import React, { useState,useEffect } from "react";
import { Grid, Button } from "@mui/material";
import { CustomFormTextField } from "../customStyles";
import { useSelector, useDispatch } from "react-redux";
import {clearErrors,createProduct} from '../../actions/productAction'
import { useNavigate } from "react-router-dom";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import toast from "react-hot-toast";
import Loader from "../Loader";


function AddProduct() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [availableItems, setAvailableItems] = useState(0);
  const [images, setImages] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
     toast.success("Product Created Successfully");
      navigate("/admin/products");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch,  error, navigate, success]);

 const createProductSubmitHandler = (e) => {
  e.preventDefault(); 
   dispatch(createProduct(name,price,description,category, manufacturer,images, availableItems));
};

  return (
    <>
    {
      loading?<Loader/>:<><form  onSubmit={createProductSubmitHandler}>
      <Grid container maxWidth="lg" sx={{textAlign:'center',paddingTop:"100px"}} >
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CustomFormTextField
            label="Name"
            variant="outlined"
            placeholder="Enter product Name"
            sx={{width:"400px",height:'56px'}}
            value={name}
            onChange={(e) => setName(e.target.value)}         
          />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CustomFormTextField
             label="Category"
            variant="outlined"
            placeholder="Category"
            sx={{width:"400px",height:'56px'}}
            value={category}
            onChange={(e) => setCategory(e.target.value)}      
          />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CustomFormTextField
            label="Manufacturer"
            variant="outlined"
            placeholder="Manufacturer"
            sx={{width:"400px",height:'56px'}}
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CustomFormTextField
            label="Available items"
            variant="outlined"
            placeholder="Available items"
            sx={{width:"400px",height:'56px'}}
           value={availableItems}
           onChange={(e) => setAvailableItems(e.target.value)}
             />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CustomFormTextField
            label="Price"
            variant="outlined"
            placeholder="Price"
            sx={{width:"400px",height:'56px'}}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
    
            />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CustomFormTextField
            label="Image Url"
            variant="outlined"
            placeholder="Image Url"
            sx={{width:"400px",height:'56px'}}
            value={images}
            onChange={(e) => setImages(e.target.value)}
            />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <CustomFormTextField
            label="Product description"
            variant="outlined"
            placeholder="Product description"
            sx={{width:"400px",height:'56px'}}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          
            />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Button
                 type="submit"
                 variant="contained"
                  sx={{ marginTop: "10px", width: "200px" }}
                >
                 ADD PRODUCT
                </Button>
        </Grid>
      </Grid>
      </form></>
    }
    
  </>
  )
}

export default AddProduct