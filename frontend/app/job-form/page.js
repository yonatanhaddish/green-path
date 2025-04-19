"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField, { textFieldClasses } from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";
import { Typography, useMediaQuery } from "@mui/material";
import BasicButtons from "../components/BasicButton";

export default function JobForm() {
  const [loading, setLoading] = useState(undefined);

  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const screenGreaterThan4318LessThan834 = useMediaQuery(
    "(min-width: 431px) and (max-width: 834px)"
  );
  const screenGreaterThan430LessThan768 = useMediaQuery(
    "(min-width: 431px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1024 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const screenGreaterThan1024LessThan1366 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1366px)"
  );
  const screenGreaterThan1366 = useMediaQuery("(min-width: 1366px)");
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading === undefined) {
    return <div>Loading...</div>;
  }

  const styles = {
    cardContent: {
      paddingTop: "34px",
      border: "solid #000 2px",
      boxShadow: "0 0 10px #000",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "60%"
        : screenGreaterThan768LessThan1024
        ? "55%"
        : screenGreaterThan1024LessThan1366
        ? "30%"
        : screenGreaterThan1366
        ? "450px"
        : "20%",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      paddingBottom: "40px",
      justifySelf: "center",
      marginTop: screenLessThan430
        ? "20px"
        : screenGreaterThan430LessThan768
        ? "20px"
        : screenGreaterThan768LessThan1024
        ? "50px"
        : screenGreaterThan1024LessThan1366
        ? "20px"
        : screenGreaterThan1366
        ? "50px"
        : "",
      paddingTop: "40px",
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
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    boxButton: {
      marginTop: "10px",
      height: "50px",
    },
    textField1: {
      "& .MuiInputLabel-root": { color: "black" },
      "& .MuiInputLabel-root.Mui-focused": { color: "black" },
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "gray" },
        "&:hover fieldset": { borderColor: "black" },
        "&.Mui-focused fieldset": {
          borderColor: "gray",
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
            size="small"
          />
          <TextField
            required
            id="dropoff-location"
            label="Dropoff Location"
            fullWidth
            sx={styles.textField1}
            size="small"
          />
        </Box>
        <Box sx={styles.textField}>
          <TextField
            id="distance"
            label="Distance (km)"
            type="number"
            fullWidth
            sx={styles.textField1}
            size="small"
          />
          <TextField
            id="weight"
            label="Weight (kg)"
            type="number"
            fullWidth
            sx={styles.textField1}
            size="small"
          />
        </Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={styles.textField}>
            <DemoContainer components={["DateField"]}>
              <DateField
                label="Delivery Date"
                fullWidth
                sx={styles.textField1}
                size="small"
              />
            </DemoContainer>
          </Box>
          <Box sx={styles.textField}>
            <DemoContainer components={["DateField"]}>
              <DateField
                label="Delivery Date"
                fullWidth
                sx={styles.textField1}
                size="small"
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
            size="small"
          />
        </Box>
        <Box sx={styles.boxButton}>
          <BasicButtons message="Post Job" />
        </Box>
      </Box>
    </Box>
  );
}
