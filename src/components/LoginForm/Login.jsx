import React,{useState,useEffect} from 'react';
import {TextField,Grid ,Box,Button} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link ,useLocation,useNavigate} from 'react-router-dom';
import HelmetText from '../../common/HelmetText';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login} from "../../actions/userAction";
import Loader from "../../common/Loader";
import toast from 'react-hot-toast';

function Login() {
const dispatch = useDispatch();
const navigate=useNavigate();
const location=useLocation();
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");
const {  loading, isAuthenticated,error} = useSelector((state) => state.user);

const loginSubmit = (e) => {
  e.preventDefault();
   dispatch(login(loginEmail,loginPassword)); 
};
const redirect = location.search ? location.search.split("=")[1] : "/products";

useEffect(() => {
  if (error) {
    toast.error(error);
    dispatch(clearErrors());
  }
  if (isAuthenticated) {
    navigate(redirect);
  }
}, [dispatch, isAuthenticated, navigate,error,redirect]);

  return (
<>
{loading ? (
        <Loader />
      ) : (<>
<HelmetText title="Login-Upgrad E-Shop"/>

<div className='login-form'>
<Box style={{ maxWidth: "300px", margin: "80px auto" }}>
  <div className='lock-icon'>
  <LockOutlinedIcon fontSize='large' sx={{color:"#ffff"}} />
  </div>
  <h3>Sign In</h3>
<form onSubmit={loginSubmit} >
<Grid container spacing={2}>
<Grid item xl={12} >
<TextField
    //required
    id="outlined-required"
    type="text"
    label="Email Address"
    name="emailAddress"
    value={loginEmail}
    onChange={(e) => setLoginEmail(e.target.value)}
    autoComplete='off'
    sx={{width:"300px",height:'56px'}}
      />
</Grid>
   <Grid item  xl={12}  >
  <TextField
    //required
    type="password"
    id="outlined-required"
    label="Password"
    name="password"
    value={loginPassword}
    onChange={(e) => setLoginPassword(e.target.value)}
    autoComplete='off'
    sx={{width:"300px",height:'56px'}}
     /> 
  </Grid>
   <Grid item xl={12}>
    <Button
     type="submit" 
     variant="contained"
     sx={{width:"300px",height:'40px',marginBottom:'20px'}}
    >SIGN IN</Button>
    </Grid>
  </Grid>
  </form>
  <Link to="/signup">Don't have an account? SignUP </Link>
  </Box>
  </div>
  </>
 )}
   </>
  )
}

export default Login