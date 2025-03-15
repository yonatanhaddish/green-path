"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField, { textFieldClasses } from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";
import { Typography } from "@mui/material";
import BasicButtons from "../components/BasicButton";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function page() {
  const [viewForm, setViewForm] = useState(false);

  const styles = {
    cardContent: {
      // border: "solid #e1fceb 2px",
      // borderTop: "solid green 2px",
      //   paddingTop: "10px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      paddingBottom: "40px",
      // marginLeft: "20px",
      marginTop: "15px",
      // backgroundImage:
      //   "linear-gradient(to bottom, green, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff)",
    },
    headingContent: {
      width: "90%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignSelf: "center",
    },
    textFieldBox: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      gap: "15px",
    },
    textField: {
      // width: "90%",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    boxButton: {
      // border: "solid red 2px",
      marginTop: "10px",
      height: "50px",
    },
    textField1: {
      // backgroundColor: "#f5fff9",
      "& .MuiInputLabel-root": { color: "black" },
      "& .MuiInputLabel-root.Mui-focused": { color: "black" },
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "gray" },
        "&:hover fieldset": { borderColor: "black" },
        "&.Mui-focused fieldset": {
          borderColor: "gray",
          //   backgroundColor: "#e1fceb",
        },
      },
    },
    typoCompany: {
      fontWeight: "bold",
    },
    job_id: {
      borderBottom: "green solid 2px",
    },
    buttonUploadDL: {
      //   border: "solid red 3px",
      //   backgroundColor: "red",
    },
  };

  function handleNextPage() {
    setViewForm(!viewForm);
  }
  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={styles.cardContent}
      >
        <Box sx={styles.headingContent}>
          <Typography sx={styles.typoCompany}>Welcome to Green Path</Typography>
          {/* <Typography sx={styles.job_id}>Job Id: #123123</Typography> */}
        </Box>
        {viewForm ? (
          <Box sx={styles.textFieldBox}>
            <Box sx={styles.textField}>
              <TextField
                required
                id="vehicle-make"
                label="Make"
                fullWidth
                sx={styles.textField1}
              />
              <TextField
                required
                id="vehicle-model"
                label="Model"
                fullWidth
                sx={styles.textField1}
              />
              <TextField
                required
                id="vehicle-year"
                label="Year"
                fullWidth
                sx={styles.textField1}
              />
              <TextField
                required
                id="vehicle-type"
                label="Vehicle Type"
                fullWidth
                sx={styles.textField1}
              />
              <TextField
                required
                id="license-plate"
                label="License Plate Number"
                fullWidth
                sx={styles.textField1}
              />
              <TextField
                required
                id="vehicle-color"
                label="Color"
                fullWidth
                sx={styles.textField1}
              />
              <TextField
                required
                id="vehicle-sizer"
                label="Cargo Size (optional)"
                fullWidth
                sx={styles.textField1}
              />
            </Box>

            <Box sx={styles.buttonUploadDL}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#000",

                  // height: {
                  //   md: "30px",
                  // },
                  fontSize: {
                    md: "8px",
                  },
                  width: {
                    xs: "80%",
                  },
                }}
              >
                Upload Driver Abstract{" "}
              </Button>
            </Box>
            <Box sx={styles.buttonUploadDL}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#000",

                  // height: {
                  //   md: "30px",
                  // },
                  fontSize: {
                    md: "8px",
                  },
                  width: {
                    xs: "80%",
                  },
                }}
              >
                Upload Vehicle Insurance{" "}
              </Button>
            </Box>
            <Box sx={styles.buttonUploadDL}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#000",

                  // height: {
                  //   md: "30px",
                  // },
                  fontSize: {
                    md: "8px",
                  },
                  width: {
                    xs: "80%",
                  },
                }}
              >
                Upload Background check{" "}
              </Button>
            </Box>
            <Box sx={styles.boxButton} onClick={handleNextPage}>
              {viewForm ? (
                <BasicButtons message="Back" />
              ) : (
                <BasicButtons message="Next" />
              )}
            </Box>
          </Box>
        ) : (
          <Box sx={styles.textFieldBox}>
            <Box sx={styles.textField}>
              <TextField
                required
                id="full-name"
                label="Full Name"
                fullWidth
                sx={styles.textField1}
              />
              <TextField
                required
                id="email-address"
                label="Email Address"
                type="email"
                fullWidth
                sx={styles.textField1}
              />
            </Box>
            <Box sx={styles.textField}>
              <TextField
                id="phone-number"
                label="Phone Number"
                type="number"
                fullWidth
                sx={styles.textField1}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box sx={styles.textField}>
                  <DemoContainer components={["DateField"]}>
                    <DateField
                      label="Date of birth"
                      fullWidth
                      sx={styles.textField1}
                    />
                  </DemoContainer>
                </Box>
              </LocalizationProvider>
            </Box>
            <Box sx={styles.textField}>
              <TextField
                id="home-address"
                label="Home Address"
                fullWidth
                sx={styles.textField1}
              />
              <TextField
                id="city"
                label="City"
                //   type="date"
                fullWidth
                sx={styles.textField1}
              />
              <TextField
                id="postal-code"
                label="Postal Code"
                //   type="date"
                fullWidth
                sx={styles.textField1}
              />
            </Box>
            <Box sx={styles.buttonUploadDL}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#000",

                  // height: {
                  //   md: "30px",
                  // },
                  fontSize: {
                    md: "8px",
                  },
                  width: {
                    xs: "60%",
                  },
                }}
              >
                Upload Driving License{" "}
              </Button>
            </Box>
            <Box sx={styles.boxButton} onClick={handleNextPage}>
              {viewForm ? (
                <BasicButtons message="Back" />
              ) : (
                <BasicButtons message="Next" />
              )}
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}

export default page;
