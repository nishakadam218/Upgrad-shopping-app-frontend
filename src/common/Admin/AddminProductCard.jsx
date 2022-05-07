import React, { useEffect } from "react";
import {
  CardActions,
  Button,
  IconButton, 
 
} from "@mui/material";
import { Link } from "react-router-dom";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";

import ModifiyOrderModal from "../Modals/ModifiyOrderModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAdminProduct } from "../../actions/productAction";
import toast from "react-hot-toast";
import { clearErrors } from "../../actions/userAction";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";

function AdminProductCard({ product}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const {error} = useSelector((state) => state.products);
  const { error: deleteError, isDeleted } = useSelector((state) => state.product);

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
      if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      toast.error(deleteError);
     dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Product Deleted Successfully");
      navigate("/admin/products");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }
   dispatch(getAdminProduct());
  }, [dispatch,error, deleteError,navigate, isDeleted]);
  return (
    <>                   
            <div className="blog-content">
                   
              <div className="blog-text-content">
              <Link to={`/product/${product._id}`}>
              <div className="card-img">
               <img src={product.imageUrl} alt={product.name}  />
               </div>
              <div>
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
               <Link to={`/product/${product._id}`}><Button variant="contained">BUY</Button></Link>
                </div>
              <div className="card-action-content">
             <IconButton aria-label="add to favorites" onClick={handleOpen} >
               <ModeEditIcon />
               </IconButton>
               <IconButton aria-label="add to favorites" onClick={() =>deleteProductHandler(`${product._id}`)}>
               <DeleteIcon/>
               </IconButton>
               </div>
            </CardActions>
            </div>
            </div>
            <ModifiyOrderModal open={open} handleClose={handleClose} />
    
    </>
  );
}

export default AdminProductCard;
