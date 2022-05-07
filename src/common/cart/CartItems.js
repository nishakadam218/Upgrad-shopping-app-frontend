import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartItems() {
 const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <parent> No item in Your Cart </parent>
          <Link to="/items"> View items </Link>
        </div>
      ) : (
        <>
          {cartItems &&
            cartItems.map((item) => (
              <>
                <Grid container spacing={3} sx={{ marginTop: "60px" }}>
                  <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                    <div className="item-details">
                      <div className="item-detail-image">
                        <img
                          style={{ display: "block", width: "100%" }}
                          src={item.imageUrl}
                          alt={item.name}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
                    <div className="item-details">
                      <div className="detail-content">
                        <h3>{item.name}</h3>
                        <p>
                          Quantity: <strong>{item.quantity}</strong>
                        </p>
                        <p>
                          Category: <strong>{item.category}</strong>
                        </p>
                        <p>{item.description}</p>
                        <div className="card-content">
                          <span style={{ color: "red" }}>
                            Total Price: {`₹${item.price * item.quantity}`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </>
            ))}
        </>
      )}
    </>
  );
}

export default CartItems;
