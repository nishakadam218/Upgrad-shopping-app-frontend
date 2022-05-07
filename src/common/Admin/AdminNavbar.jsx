import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Button,
  Divider,
  Box,
  Badge,
  SwipeableDrawer,
  IconButton,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { logout } from "../../actions/userAction";
import { useDispatch } from "react-redux";
import AdminSearchFilter from "./AdminSearchFilter";
import { CustomAppBar } from "../customStyles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function AdminNavbar() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const [openMenu, setOpen] = useState(false);
  const Login = () => {
    navigate("/login");
  };
  const SignUp = () => {
    navigate("/signup");
  };
  function logoutUser() {
    dispatch(logout());
    alert("Logout Successfully");
    navigate("/signup");
  }

  return (
    <>
      <CustomAppBar position="fixed">
        <div className="navbar">
          <div className="logo">
            <ShoppingCartIcon fontSize="large" />
            <span>upGrad E-Shopping</span>
          </div>
          <div className="search-filter">
            <AdminSearchFilter />
          </div>

          <div className="home-menu-icon">
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
          <div className="desktop-none">
            {isAuthenticated ? (
              <>
                <div className="nav-links">
                  <ul>
                    <IconButton aria-label="cart">
                      <Link to="/cart">
                        <Badge
                          badgeContent={cartItems.length}
                          color="secondary"
                        >
                          <li>
                            <AddShoppingCartIcon fontSize="large" />
                          </li>
                        </Badge>
                      </Link>
                    </IconButton>
                    <Link to="/admin/products">
                      <li>Home</li>
                    </Link>
                    <Link to="/addproduct">
                      <li> Add Product</li>
                    </Link>
                    <Button
                      onClick={logoutUser}
                      variant="contained"
                      color="secondary"
                      sx={{ margin: "5px", padding: "2px 4px" }}
                    >
                      <li>Logout</li>
                    </Button>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="nav-links">
                  <ul>
                    <Button
                      onClick={Login}
                      variant="contained"
                      color="secondary"
                      sx={{ margin: "5px", padding: "2px 4px" }}
                    >
                      <li>Login</li>
                    </Button>
                    <Button
                      onClick={SignUp}
                      variant="contained"
                      color="secondary"
                      sx={{ margin: "5px", padding: "2px 4px" }}
                    >
                      <li>Signup</li>
                    </Button>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </CustomAppBar>
      <SwipeableDrawer
        anchor="left"
        open={openMenu}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
        sx={{ width: 250 }}
      >
        <div className="list">
          <Box textAlign="center" p={4}></Box>
          <Divider />
          {/*------------------mobile menu---------------*/}
          {isAuthenticated ? (
            <>
              <div className="nav-links-mobile">
                <ul>
                  <AdminSearchFilter />
                  <li>
                    <IconButton aria-label="cart">
                      <Link to="/cart">
                        <Badge
                          badgeContent={cartItems.length}
                          color="secondary"
                        >
                          <AddShoppingCartIcon
                            fontSize="large"
                            sx={{ color: "#f50057" }}
                          />
                        </Badge>
                      </Link>
                    </IconButton>
                  </li>
                  <Link to="/admin/products">
                    <li>Home</li>
                  </Link>
                  <Link to="/addproduct">
                    <li> Add Product</li>
                  </Link>
                  <li>
                    <Button
                      onClick={logoutUser}
                      variant="contained"
                      color="secondary"
                      sx={{ padding: "5px 5px" }}
                    >
                      Logout
                    </Button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="nav-links-mobile">
              <ul>
                <Button
                  onClick={Login}
                  variant="contained"
                  color="secondary"
                  sx={{ margin: "1px", padding: "1px 3px" }}
                >
                  <li>Login</li>
                </Button>
                <Button
                  onClick={SignUp}
                  variant="contained"
                  color="secondary"
                  sx={{ margin: "5px", padding: "1px 3px" }}
                >
                  <li>Signup</li>
                </Button>
              </ul>
            </div>
          )}
        </div>
      </SwipeableDrawer>
    </>
  );
}

export default AdminNavbar;
