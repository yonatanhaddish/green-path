"use client";

import React, { useState, useEffect } from "react";
import {
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";

function ContactUs() {
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
    contact_us_parent: {
      //   border: "solid red 2px",
      backgroundColor: "#c1c4c2",
      //   height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
      justifySelf: "center",
    },
    info_box_parent: {
      //   border: "solid blue 2px",
      display: "flex",
      flexDirection:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "column "
          : "row",
      marginBottom: "100px",
      justifyContent: screenGreaterThan1440LessThan1920
        ? "center"
        : screenGreaterThan768LessThan1024 ||
          screenGreaterThan1024LessThan1440 ||
          screenGreaterThan1920LessThan3840
        ? "center"
        : "",
    },
    info_box: {
      border: "solid #009737 2px",
      boxShadow: "0 0 10px #000",
      width: screenLessThan430
        ? "75%"
        : screenGreaterThan430LessThan768
        ? "67%"
        : screenGreaterThan768LessThan1024
        ? "30%"
        : screenGreaterThan1024LessThan1440
        ? "20%"
        : screenGreaterThan1440LessThan1920
        ? "16%"
        : screenGreaterThan1920LessThan3840
        ? "18%"
        : "100%",
      display: "flex",
      flexDirection: "column",
      //   justifySelf: "center",
      backgroundColor: "#009737",
      paddingLeft: "20px",
      paddingTop: screenGreaterThan1920LessThan3840 ? "40px" : "10px",
      paddingBottom: "10px",
      alignSelf:
        screenLessThan430 || screenGreaterThan430LessThan768 ? "center" : "",
    },
    input_parent: {
      border: "solid #009737 1px",
      boxShadow: "0 0 10px #000",
      width: screenLessThan430
        ? "80%"
        : screenGreaterThan430LessThan768
        ? "70%"
        : screenGreaterThan768LessThan1024
        ? "45%"
        : screenGreaterThan1440LessThan1920
        ? "35%"
        : screenGreaterThan1024LessThan1440
        ? "35%"
        : screenGreaterThan1920LessThan3840
        ? "35%"
        : "100%",
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      gap:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1440
          ? "10px"
          : screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "20px"
          : "100px",
      paddingBottom: "30px",
    },
    input_box: {
      //   border: "solid pink 2px",
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      gap:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "20px"
          : "",
      width:
        screenLessThan430 || screenGreaterThan768LessThan1024
          ? "80%"
          : screenGreaterThan430LessThan768
          ? "70%"
          : screenGreaterThan1024LessThan1440
          ? "80%"
          : screenGreaterThan1440LessThan1920
          ? "60%"
          : screenGreaterThan1920LessThan3840
          ? "65%"
          : "100%",
    },
    typo_info: {
      fontWeight: "bold",
    },
    typo_heading: {
      borderBottom: "solid green 2px",
      fontSize: screenLessThan430
        ? "25px"
        : screenGreaterThan430LessThan768
        ? "25px"
        : screenGreaterThan768LessThan1024
        ? "40px"
        : screenGreaterThan1024LessThan1440
        ? "35px"
        : screenGreaterThan1440LessThan1920
        ? "45px"
        : screenGreaterThan1920LessThan3840
        ? "45px"
        : "100px",
      width: screenLessThan430
        ? "40%"
        : screenGreaterThan430LessThan768
        ? "20%"
        : screenGreaterThan768LessThan1024
        ? "30%"
        : screenGreaterThan1024LessThan1440
        ? "20%"
        : screenGreaterThan1440LessThan1920
        ? "17%"
        : screenGreaterThan1920LessThan3840
        ? "20%"
        : "100%",
      marginLeft: "30px",
      //   paddingLeft: "30px",
      textAlign: "center",
    },
    contact_info_heading: {
      borderBottom: "dashed #c1c4c2 1px",
      width: "90%",
      marginBottom: "20px",
      paddingTop:
        screenLessThan430 || screenGreaterThan430LessThan768 ? "" : "20px",
    },
    button_box: {
      border: "solid #000 1px",
      fontSize: "16px",
      backgroundColor: "#009737",
      color: "#000",
      fontWeight: "bold",
      width:
        screenLessThan430 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan430LessThan768
          ? "60%"
          : screenGreaterThan1024LessThan1440 ||
            screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "60%"
          : "100%",
    },
    typo_desc: {
      //   border: "solid red 2px",
      width:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1440
          ? "80%"
          : screenGreaterThan1440LessThan1920
          ? "70%"
          : screenGreaterThan1920LessThan3840
          ? "65%"
          : "100%",
      alignSelf: "center",
      fontWeight: "bold",
      paddingTop: screenGreaterThan1920LessThan3840 ? "40px" : "20px",
    },
  };
  return (
    <Box sx={styles.contact_us_parent}>
      <Typography sx={styles.typo_heading}>Contact Us</Typography>
      <Box sx={styles.info_box_parent}>
        <Box sx={styles.info_box}>
          <Typography
            sx={{ ...styles.typo_info, ...styles.contact_info_heading }}
          >
            Contact Info
          </Typography>
          <Typography sx={styles.typo_info}> 📧 greenpath@email.com</Typography>
          <Typography sx={styles.typo_info}> 📞 (437) 123 1212</Typography>
          <Typography sx={styles.typo_info}> 📍 123 Main St. E</Typography>
          <Typography sx={styles.typo_info}> ⏰ 09:00 AM - 07:00 PM</Typography>
        </Box>
        <Box sx={styles.input_parent}>
          <Typography sx={styles.typo_desc}>
            Feel free to leave us message anytime. We will get back to your as
            soon as we can!
          </Typography>
          <Box sx={styles.input_box}>
            <TextField
              id="full-name"
              label="Full Name"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Choose Service Type
              </InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="load_owner"
                label="Select One"
                //   onChange={handleChange}
              >
                <MenuItem value="load_owner">Load Owner</MenuItem>
                <MenuItem value="van_owner">Van Owner</MenuItem>
              </Select>
            </FormControl>
            <TextField
              sx={styles.input_field}
              id="message"
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              size="small"
              minRows={6}
              maxRows={8}
              // onChange={handleChangePhoneNumberValue}
            />
            <Button sx={styles.button_box}>Send Message</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUs;
