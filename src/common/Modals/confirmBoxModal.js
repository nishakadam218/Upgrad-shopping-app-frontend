import React from 'react';
import {Grid,Button,Modal, Box} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CustomFormTextField } from '../customStyles';
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
  
function ConfirmBoxModal({open,handleClose}) {
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
          <Grid container maxWidth="lg" sx={{ textAlign: "center" }}>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Button
                variant="contained"
                sx={{ marginTop: "10px", width: "200px" }}
              >
                MODIFY ORDER
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  )
}

export default ConfirmBoxModal