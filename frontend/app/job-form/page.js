"use client";
import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";

// import TextField, { textFieldClasses } from "@mui/material/TextField";
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
  const screenGreaterThan430LessThan768 = useMediaQuery(
    "(min-width: 431px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1024 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const screenGreaterThan1024LessThan1280 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1280px)"
  );
  const screenGreaterThan1280LessThan1366 = useMediaQuery(
    "(min-width: 1281px) and (max-width: 1366px)"
  );
  const screenGreaterThan1366LessThan1440 = useMediaQuery(
    "(min-width: 1367px) and (max-width: 1440px)"
  );
  const screenGreaterThan1440LessThan1920 = useMediaQuery(
    "(min-width: 1441px) and (max-width: 1920px)"
  );
  const screenGreaterThan1920LessThan3840 = useMediaQuery(
    "(min-width: 1921px) and (max-width: 3840px)"
  );
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading === undefined) {
    return <div>Loading...</div>;
  }

  const styles = {
    parent_box: {
      border: "solid #000 1px",
      boxShadow: "0 0 10px #009737",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: screenLessThan430 ? "90%" : "100%",
      justifySelf: "center",
      marginTop: "20px",
    },

    child_box: {
      // border: "solid green 2px",
      display: "flex",
      flexDirection: "column",
      gap: "25px",
      paddingBottom: "30px",
    },
    typo_jobid: {
      textAlign: "end",
      fontSize: screenLessThan430 ? "18px" : "20px",
      fontWeight: "bold",
      paddingTop: "20px",
      marginRight: "5%",
      color: "#009737",
    },
    input_box: {
      // border: "solid yellow 2px",
      width: screenLessThan430 ? "90%" : "100%",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      gap: screenLessThan430 ? "10px" : "",
      alignSelf: "center",
    },
    text_input: {
      // border: "solid green 1px",
      width: "100%",
    },
    button_box: {
      // border: "solid green 2px",
      width: screenLessThan430 ? "70%" : "100%",
      alignSelf: "center",
      textAlign: "center",
      fontWeight: "bold",
      height: "50px",
      fontSize: "16px",
      backgroundColor: "#000",
      color: "#fff",
    },
  };

  return (
    <Box sx={styles.parent_box}>
      <Typography sx={styles.typo_jobid}>Job ID: #123123</Typography>
      <Box sx={styles.child_box}>
        <Box sx={styles.input_box}>
          <TextField
            id="outlined-basic"
            label="Company Name"
            variant="outlined"
            sx={styles.text_input}
          />
          <TextField
            id="outlined-basic"
            label="Company Address"
            variant="outlined"
            sx={styles.text_input}
          />
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            sx={styles.text_input}
          />
          <TextField
            id="outlined-basic"
            label="Postal Code"
            variant="outlined"
            sx={styles.text_input}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            sx={styles.text_input}
          />
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            sx={styles.text_input}
          />
          <TextField
            id="outlined-basic"
            label="Contact Person Name"
            variant="outlined"
            sx={styles.text_input}
          />
          <TextField
            id="outlined-basic"
            label="Contact Person Job Title"
            variant="outlined"
            sx={styles.text_input}
          />
          <TextField
            id="outlined-basic"
            label="Contact Person Phone Number"
            variant="outlined"
            sx={styles.text_input}
          />
        </Box>
        <Button sx={styles.button_box}>Submit</Button>
      </Box>
    </Box>
  );
}
