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
  const screenGreaterThan1024LessThan1440 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1440px)"
  );
  const screenGreaterThan1440LessThan2560 = useMediaQuery(
    "(min-width: 1441px) and (max-width: 2560px)"
  );
  const screenGreaterThan2560LessThan3840 = useMediaQuery(
    "(min-width: 2560px) and (max-width: 3840px)"
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
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "80%"
        : screenGreaterThan768LessThan1024
        ? "80%"
        : screenGreaterThan1024LessThan1440
        ? "60%"
        : screenGreaterThan1440LessThan2560
        ? "25%"
        : screenGreaterThan2560LessThan3840
        ? "25%"
        : "80%",
      marginBottom: "50px",
      margin:
        screenLessThan430 || screenGreaterThan1024LessThan1440
          ? "25px auto"
          : "50px auto",
    },

    child_box: {
      // border: "solid red 2px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      paddingBottom:
        screenLessThan430 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1440
          ? "30px"
          : screenGreaterThan430LessThan768 ||
            screenGreaterThan1440LessThan2560 ||
            screenGreaterThan2560LessThan3840
          ? "50px"
          : "",
    },
    typo_jobid: {
      fontSize: screenLessThan430 ? "18px" : "18px",
      fontWeight: "bold",
      paddingTop: "20px",
      marginRight: "5%",
      borderBottom: "solid #009737 2px",
      width: "fit-content",
      alignSelf: "end",
    },
    input_box: {
      // border: "solid purple 2px",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "80%"
        : screenGreaterThan768LessThan1024
        ? "70%"
        : "70%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",

      gap: screenLessThan430
        ? "10px"
        : screenGreaterThan430LessThan768 ||
          screenGreaterThan768LessThan1024 ||
          screenGreaterThan1024LessThan1440 ||
          screenGreaterThan1440LessThan2560 ||
          screenGreaterThan2560LessThan3840
        ? "10px"
        : "",
      alignSelf: "center",
      justifyContent: "center",
    },
    text_input: {
      // border: "solid green 1px",
      width: screenLessThan430
        ? "100%"
        : screenGreaterThan430LessThan768
        ? "70%"
        : screenGreaterThan768LessThan1024 || screenGreaterThan1440LessThan2560
        ? "80%"
        : screenGreaterThan1024LessThan1440
        ? "45%"
        : screenGreaterThan2560LessThan3840
        ? "70%"
        : "200px",
      // textAlign: "center",
    },
    button_box: {
      // border: "solid red 2px",
      width: screenLessThan430
        ? "70%"
        : screenGreaterThan430LessThan768
        ? "50%"
        : screenGreaterThan768LessThan1024
        ? "45%"
        : screenGreaterThan1024LessThan1440
        ? "40%"
        : screenGreaterThan1440LessThan2560 || screenGreaterThan2560LessThan3840
        ? "50%"
        : "100%",
      alignSelf: "center",
      textAlign: "center",
      fontWeight: "bold",
      height: "45px",
      // fontSize: "16px",
      backgroundColor: "#000",
      color: "#fff",
    },
    typo_heading: {
      // border: "solid green 2px",
      fontSize: screenLessThan430
        ? "26px"
        : screenGreaterThan430LessThan768
        ? "26px"
        : screenGreaterThan768LessThan1024
        ? "26px"
        : screenGreaterThan1024LessThan1440
        ? "28px"
        : screenGreaterThan1440LessThan2560
        ? "30px"
        : "30px",
      marginTop: "20px",
      color: "#009737",
      fontWeight: "bold",
      marginLeft: "20px",
    },
    heading_box: {
      // border: "solid red 2px",
      display: "flex",
      flexDirection: screenLessThan430 ? "column" : "row",
      justifyContent: "space-between",
    },
  };

  return (
    <Box sx={styles.parent_box}>
      <Box sx={styles.heading_box}>
        <Typography sx={styles.typo_heading}>
          Eagle Import & Export Ltd.
        </Typography>
        <Box sx={styles.typo_jobid}>
          <Typography sx={{ color: "#000" }}>06 - Feb - 2024</Typography>
          <Typography>Job Id: #123123</Typography>
        </Box>
      </Box>

      <Box sx={styles.child_box}>
        <Box sx={styles.input_box}>
          <TextField
            id="outlined-basic"
            size="small"
            label="Pickup Location"
            variant="outlined"
            sx={styles.text_input}
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Droppoff Location"
            variant="outlined"
            sx={styles.text_input}
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Weight"
            variant="outlined"
            sx={styles.text_input}
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Pickup Time"
            variant="outlined"
            sx={styles.text_input}
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Price"
            variant="outlined"
            sx={styles.text_input}
          />
          <TextField
            id="outlined-basic"
            size="small"
            label="Item Description"
            multiline
            minRows={4}
            maxRows={6}
            variant="outlined"
            sx={styles.text_input}
          />
        </Box>
        <Button sx={styles.button_box}>Post</Button>
      </Box>
    </Box>
  );
}
