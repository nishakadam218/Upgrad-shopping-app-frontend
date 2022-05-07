import React, { useState } from "react";
import { Box, Grid,Container } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import {  toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import AddAddress from "./AddAddress";
import AddItems from "./AddItems";
import ConfirmOrder from "./ConfirmOrder";

function getSteps() {
  return ["items", "Select Address", "Confirm order"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
          <AddItems />
        );

    case 1:
      return (       
          <AddAddress />
      )
    case 2:
      return (  
          <ConfirmOrder /> 
      );

    default:
      return "unknown step";
  }
}

export default function LinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container maxWidth="xl">
    <Box sx={{ width: "100%", marginTop: "100px" }}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};

          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        toast.success("Order placed successfully")
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <Grid container sx={{ justifyContent: "center", margin: "20px" }}>
            <Grid item>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                back
              </Button>

              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "PLACE ORDER" : "Next"}
              </Button>
            </Grid>
          </Grid>
        </>
      )}  
    </Box>
    </Container>
  );
}
