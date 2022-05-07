import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  FormControl,
  Select,
  MenuItem,
  Container,
} from "@mui/material";
import ToggleButtons from "../../common/ToggleButtons";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetails } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../common/Loader";
import { addItemsToCart } from "../../actions/cartAction";
import toast from "react-hot-toast";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.productDetails);
 
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const handleQuantitiChange = (event) => {
    setQuantity(event.target.value);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    toast.success("Item Added To Cart");
    navigate(`/cart`);
  };

  return (
    <>
     {loading ? (
        <Loader />
      ) : (
        <>
         <Container maxWidth="lg">
          <ToggleButtons />
            <Grid container spacing={3}>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <div className="product-details">
                  <div className="product-detail-image">
                    <img
                      style={{ display: "block", width: "100%" }}
                      src={product.imageUrl}
                      alt={product.name}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                <div className="detail-content">
                  <h1>{product.name}</h1>
                  <Button
                    variant="contained"
                    sx={{
                      marginTop: "5px",
                      borderRadius: 30,
                      textTransform: "none",
                    }}
                  >
                    Available Quentity: {product.availableItems}
                  </Button>
                  <p>
                    Category:<strong>{product.category}</strong>
                  </p>
                  <p>{product.description}</p>
                  <div className="card-content">
                    <span style={{ color: "red", fontSize: "30px" }}>
                      &#8377;{product.price}
                    </span>
                  </div>
                  <p>Enter Quentity</p>
                  <FormControl sx={{ width: 300 }}>
                    <Select
                      value={quantity}
                      lable="Enter Quentity"
                      onChange={handleQuantitiChange}
                    >
                      {[...Array(product.availableItems).keys()].map((x, i) => {
                        return (
                          <MenuItem key={product.id} value={i + 1}>
                            {i + 1}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    <Button
                      onClick={addToCartHandler}
                      variant="contained"
                      sx={{ marginTop: "20px", width: "200px" }}
                    >
                      PLACE ORDER
                    </Button>
                  </FormControl>
                </div>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
}

export default ProductDetails;
