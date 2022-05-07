import React from "react";
import { Typography, Stepper, StepLabel, Step,Box} from "@mui/material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import CategoryIcon from '@mui/icons-material/Category';



const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <Typography>Items</Typography>,
      icon: <CategoryIcon />,
    },
    {
      label: <Typography>Select Address</Typography>,
      icon: <LocalShippingIcon />,
    },
    {
      label: <Typography>Confirm Order</Typography>,
      icon: <LibraryAddCheckIcon />,
    },
  
  ];

  const stepStyles = {
    boxSizing: "border-box",
    marginTop: "150px"
  };
 
  return (
    <>
  <Box sx={{ width: "100%", marginTop: "100px" }}>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ?  "#1976d2"  : "rgba(0, 0, 0, 0.649)",
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
  </Box>

    </>
  );
};

export default CheckoutSteps;