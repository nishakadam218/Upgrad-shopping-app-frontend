import Navbar from './common/Navbar';
import { useEffect } from "react";
import './index.css';
import { Container} from '@mui/material';
import Login from './components/LoginForm/Login';
import Signup from './components/LoginForm/Signup';
import Footer from './common/Footer';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from './components/Home/AdminHome';
import AdminNavbar from './common/Admin/AdminNavbar';
import AdminProducts from "./common/Admin/AdminProducts"
import AddProduct from './common/Admin/AddProduct';
import store from "./store";
import { loadUser } from "./actions/userAction";
import { useSelector } from "react-redux";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AdminProductDetails from './common/Admin/AdminProductDetails';
import AddAddress from './common/AddAddress';
import Cart from './common/cart/Cart';
import AddItems from './common/AddItems';
import LinearStepper from './common/Steper';
import ConfirmOrder from './common/ConfirmOrder';


function App() {
  const { loading, isAuthenticated, user ,isAdmin} = useSelector((state) => state.user);
     useEffect(() => {  
        store.dispatch(loadUser());
      }, []);
    return ( 
    <>
        <BrowserRouter>
        {isAuthenticated && user.role==="user" ? <Navbar/> : <AdminNavbar/>}
         <Routes>
          <Route  path="/login" element={<Login />}/>
          <Route  path="/signup" element={<Signup />}/>
          <Route  path="/products" element={<Products />}/>
          <Route  path="/products/:keyword" element={<Products />}/>
          <Route  path="/product/:id" element={<ProductDetails />}/>
          <Route path="/order"  element={<AddItems />}/>
          <Route path="/shipping"  element={<AddAddress />}/>
          <Route path="/confirmorder"  element={<ConfirmOrder />}/>
          <Route  path="/cart" element={<Cart/>}/>
          {/* <Route  path="/order/:id" element={<HorizontalLinearStepper/>}/> */}
          {/* <Route path="/steper" element={<LinearStepper/>}/> */}
          {/* <Route  path="/adminhome/product/:id" element={<ProductDetails />}/> */}
           <Route  path="/" element={<Home />}/>
           {/* admin routes */}
         <Route element={<ProtectedRoute />}>   
          <Route exact path="/order/:id" element={<AdminProductDetails />}/>
          <Route  path="/admin/products" element={<AdminHome />}/>
          <Route  path="/addproduct" element={<AddProduct />}/>
          <Route  path="/admin/product/:id" element={<AdminProductDetails />}/>
          <Route  path="/admin/products" element={<AdminProducts />}/>    
          <Route  path="/admin/products/:keyword" element={<AdminProducts />}/>
        </Route>

        </Routes>
        <Container maxWidth="lg">
        <Footer />
        </Container>
    </BrowserRouter>
        </>
    );
}

export default App;