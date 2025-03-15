"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField, { textFieldClasses } from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";
import { Typography } from "@mui/material";
import BasicButtons from "../components/BasicButton";

export default function JobForm() {
  const styles = {
    cardContent: {
      // border: "solid #e1fceb 2px",
      // borderTop: "solid green 2px",
      paddingTop: "10px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      paddingBottom: "40px",
      // marginLeft: "20px",
      marginTop: "30px",
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
          // backgroundColor: "#e1fceb",
        },
      },
    },
    typoCompany: {
      fontWeight: "bold",
    },
    job_id: {
      borderBottom: "green solid 2px",
    },
  };
  return (
    <Box component="form" noValidate autoComplete="off" sx={styles.cardContent}>
      <Box sx={styles.headingContent}>
        <Typography sx={styles.typoCompany}>Eagle Import & Export</Typography>
        <Typography sx={styles.job_id}>Job Id: #123123</Typography>
      </Box>
      <Box sx={styles.textFieldBox}>
        <Box sx={styles.textField}>
          <TextField
            required
            id="pickup-location"
            label="Pickup Location"
            fullWidth
            sx={styles.textField1}
          />
          <TextField
            required
            id="dropoff-location"
            label="Dropoff Location"
            fullWidth
            sx={styles.textField1}
          />
        </Box>
        <Box sx={styles.textField}>
          <TextField
            id="distance"
            label="Distance (km)"
            type="number"
            fullWidth
            sx={styles.textField1}
          />
          <TextField
            id="weight"
            label="Weight (kg)"
            type="number"
            fullWidth
            sx={styles.textField1}
          />
        </Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={styles.textField}>
            <DemoContainer components={["DateField"]}>
              <DateField
                label="Delivery Date"
                fullWidth
                sx={styles.textField1}
              />
            </DemoContainer>
          </Box>
          <Box sx={styles.textField}>
            <DemoContainer components={["DateField"]}>
              <DateField
                label="Delivery Date"
                fullWidth
                sx={styles.textField1}
              />
            </DemoContainer>
          </Box>
        </LocalizationProvider>
        <Box sx={styles.textField}>
          <TextField
            id="price"
            label="Price ($)"
            type="number"
            fullWidth
            sx={styles.textField1}
          />
        </Box>
        <Box sx={styles.boxButton}>
          <BasicButtons message="Post Job" />
        </Box>
      </Box>
    </Box>
  );
}
