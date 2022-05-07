import React, { useEffect, useState } from 'react';
import {Grid,Button,Modal, Box} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CustomFormTextField } from '../customStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductDetails, updateProduct } from '../../actions/productAction';
import { clearErrors } from '../../actions/userAction';
import { UPDATE_PRODUCT_RESET } from '../../constants/productConstants';
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "450px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    margin: "0 auto",
  };
  
function ModifiyOrderModal({open,handleClose}) {
  const dispatch = useDispatch();
  const { error, product } = useSelector((state) => state.productDetails);
  const { products } = useSelector((state) => state.products);
  const {
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.product);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [availableItems, setAvailableItems] = useState(0);
  const [images, setImages] = useState([]);
  const [manufacturer, setManufacturer] = useState();
 const navigate =useNavigate()

  // const productId = match.params.id;

   const { productId } = useParams();
// const { id } = useParams();
//const productId = products.filter(product => product._id === id);

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(getProductDetails(productId));
    } else {
      setName(product.name);
      setDescription(product.description);
      setManufacturer(product.manufacturer);
      setPrice(product.price);
      setCategory(product.category);
      setAvailableItems(product.availableItems);
      setImages(product.imageUrl);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Product Updated Successfully");
     navigate("/admin/products");
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
  }, [dispatch,error,
    navigate,
    isUpdated,
    productId,
    product,
    updateError,
  ]);

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("manufacturer", manufacturer);
    myForm.set("category", category);
    myForm.set("availableItems", availableItems);
    myForm.set("images", images);

    dispatch(updateProduct(productId, myForm));
  };


  return (
    <>       
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            onClick={handleClose}
            style={{ float: "right", color: "#646464" }}
          />
       
          <h2 style={{textAlign:"center",color:"#646464"}}>Modify product</h2>
          <form onSubmit={updateProductSubmitHandler}>
          <Grid container maxWidth="lg" sx={{ textAlign: "center" }}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <CustomFormTextField
                label="Name"
                variant="outlined"
                placeholder="Enter product Name"
                fullWidth 
                sx={{margin:"7px"}}
                value={name}
                onChange={(e) => setName(e.target.value)}   
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <CustomFormTextField
                label="Category"
                variant="outlined"
                placeholder="Category"
                fullWidth 
                sx={{margin:"7px"}}
                value={category}
                onChange={(e) => setCategory(e.target.value)}   
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <CustomFormTextField
                label="Manufacturer"
                variant="outlined"
                placeholder="Manufacturer"
                fullWidth 
                sx={{margin:"7px"}}
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <CustomFormTextField
                label="Available items"
                variant="outlined"
                placeholder="Available items"
                fullWidth 
                sx={{margin:"7px"}}
                value={availableItems}
                onChange={(e) => setAvailableItems(e.target.value)}
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <CustomFormTextField
                label="Price"
                variant="outlined"
                placeholder="Price"
                fullWidth 
                sx={{margin:"7px"}}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <CustomFormTextField
                label="Image Url"
                variant="outlined"
                placeholder="Image Url"
                fullWidth 
                sx={{margin:"7px"}}
                value={images}
                onChange={(e) => setImages(e.target.value)}
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <CustomFormTextField
                label="Product description"
                variant="outlined"
                placeholder="Product description"
                fullWidth 
                sx={{margin:"7px"}}
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
                MODIFY ORDER
              </Button>
            </Grid>
          </Grid>
          </form>
        </Box>
      </Modal>
    </>
  )
}

export default ModifiyOrderModal