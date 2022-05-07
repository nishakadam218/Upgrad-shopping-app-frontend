import React,{useState} from 'react';
import {Grid ,Box,Button} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import {CustomFormTextField} from '../../common/customStyles';
import HelmetText from '../../common/HelmetText';
import { useDispatch, useSelector } from "react-redux";
import { register} from "../../actions/userAction";
import Loader from "../../common/Loader";
import {useNavigate} from 'react-router-dom'

function Signup() {
let navigate = useNavigate ();
const dispatch = useDispatch();
const {loading} = useSelector((state) => state.user);

const [firstName ,setFirstName]=useState("");
const [lastName ,setLastName]=useState("");
const [password ,setPassword]=useState("");
const [cPassword ,setcPassword]=useState("");
const [emailAddress ,setEmailAddress]=useState("");
const [contactNumber ,setContactNumber]=useState("");

const registerSubmit = (e) => {
  e.preventDefault();
  dispatch(register( firstName, lastName, password, cPassword, emailAddress, contactNumber));
  navigate("/login");
};


return (   
<>
{loading ? (
 <Loader />
      ) : (<>
<HelmetText title="Register-Upgrad E-Shop"/>
    <div className='login-form'>
    <Box style={{ maxWidth: "300px", margin: "80px auto"}}>
      <div className='lock-icon'>
      <LockOutlinedIcon fontSize='large' sx={{color:"#ffff"}}/>
      </div>
      <h3>Sign In</h3>
    <form onSubmit={registerSubmit}>
    <Grid container>
    <Grid item  xl={12}  >
      <CustomFormTextField
        required
        type="text"
        id="outlined-required"
        label="First Name"
        autoComplete='off'
        name='firstName'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        sx={{width:"300px",height:'56px'}}
         /> 
      </Grid>
      <Grid item  xl={12}  >
      <CustomFormTextField
        required
        type="text"
        id="outlined-required"
        label="Last Name"
        autoComplete='off'
        name='lastName'
        value={lastName}
           onChange={(e) => setLastName(e.target.value)}
        sx={{width:"300px",height:'56px'}}
         /> 
      </Grid>
    <Grid item xl={12} >
    <CustomFormTextField
        required
        id="outlined-required"
        type="text"
        label="Email Address"
        name='emailAddress'
        autoComplete='off'
        value={emailAddress}
           onChange={(e) => setEmailAddress(e.target.value)}
        sx={{width:"300px",height:'56px'}}
          />
    </Grid>
      
      <Grid item  xl={12}  >
      <CustomFormTextField
        required
        type="password"
        id="outlined-required"
        label="Password"
        autoComplete='off'
        name='password'
        value={password}
           onChange={(e) => setPassword(e.target.value)}
        sx={{width:"300px",height:'56px'}}
         /> 
      </Grid>
      <Grid item  xl={12}  >
      <CustomFormTextField
        required
        type="password"
        id="outlined-required"
        label="Confirm Password"
        autoComplete='off'
        name='cPassword'
        value={cPassword}
        onChange={(e) => setcPassword(e.target.value)}
        sx={{width:"300px",height:'56px'}}
         /> 
      </Grid>
      <Grid item  xl={12} >
      <CustomFormTextField
        required
        type="number"
        id="outlined-required"
        label="Contact Number"
        autoComplete='off'
        name='contactNumber'
        value={contactNumber}
           onChange={(e) => setContactNumber(e.target.value)}
        sx={{width:"300px",height:'56px'}}
         /> 
      </Grid>
       <Grid item xl={12}>
        <Button 
         type="submit"
         variant="contained"
         sx={{width:"300px",height:'40px',marginBottom:'10px'}}
     
        >SIGN UP</Button>
        </Grid>
      </Grid>
      </form>
      <Link to="/login">Already have an account? Sign in </Link>
      </Box>
      </div>
      </>
 )}
       </>
  )
}

export default Signup