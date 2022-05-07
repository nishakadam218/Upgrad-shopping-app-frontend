import React from "react";
import { Grid, Button } from "@mui/material";
import {CustomFormTextField} from '../common/customStyles'

function ModifyProduct() {
  return (
    <>
    <Grid container maxWidth="lg" sx={{textAlign:'center'}} >
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <CustomFormTextField
          label="Name"
          variant="outlined"
          placeholder="Enter Your Name"
          sx={{width:"300px",height:'56px'}}
          
         
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <CustomFormTextField
           label="Category"
          variant="outlined"
          placeholder="Category"
          sx={{width:"300px",height:'56px'}}
                  
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <CustomFormTextField
          label="Manufacturer"
          variant="outlined"
          placeholder="Manufacturer"
          sx={{width:"300px",height:'56px'}}
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <CustomFormTextField
          label="Available items"
          variant="outlined"
          placeholder="Available items"
          sx={{width:"300px",height:'56px'}}
  
           />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <CustomFormTextField
          label="Price"
          variant="outlined"
          placeholder="Price"
          sx={{width:"300px",height:'56px'}}
  
          />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <CustomFormTextField
          label="Image Url"
          variant="outlined"
          placeholder="Image Url"
          sx={{width:"300px",height:'56px'}}

          />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <CustomFormTextField
          label="Product description"
          variant="outlined"
          placeholder="Product description"
          sx={{width:"300px",height:'56px'}}
        
          />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Button
               variant="contained"
                sx={{ marginTop: "10px", width: "200px" }}
              >
                MODIFY ORDER
              </Button>
      </Grid>
    </Grid>
  </>
  )
}

export default ModifyProduct