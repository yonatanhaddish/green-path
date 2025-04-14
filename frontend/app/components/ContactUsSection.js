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

function ContactUsSection() {
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
  const screenGreaterThan1024LessThan3840 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 3840px)"
  );
  const screenGreaterThan1280LessThan1440 = useMediaQuery(
    "(min-width: 1281px) and (max-width: 1440px)"
  );
  const screenGreaterThan1440LessThan1920 = useMediaQuery(
    "(min-width: 1441px) and (max-width: 1920px)"
  );
  const screenGreaterThan1920LessThan2560 = useMediaQuery(
    "(min-width: 1921px) and (max-width: 2560px)"
  );
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading === undefined) {
    return <div>Loading...</div>;
  }

  const styles = {
    typo_heading: {
      border: "solid black 2px",
      fontSize: "22px",
      fontWeight: "bold",
      display: "flex",
      justifySelf: "center",
      backgroundColor: "#000",
      color: "#fff",
      paddingLeft: "20px",
      paddingRight: "20px",
      margin: "0 auto",
    },
    box_parent: {
      border: "solid black 1px",
      boxShadow: "0 0 10px green",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      paddingBottom: "20px",
      paddingTop: "30px",
      width: screenGreaterThan1280LessThan1440
        ? "70%"
        : screenGreaterThan1440LessThan1920
        ? "60%"
        : screenGreaterThan1920LessThan2560
        ? "50%"
        : "80%",
      margin: "0 auto",
      marginBottom: "60px",
    },
    input_box_parent: {
      // border: "solid blue 2px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "80%"
        : screenGreaterThan768LessThan1024
        ? "55%"
        : screenGreaterThan1024LessThan3840
        ? "40%"
        : "30%",
      margin: "0 auto",
    },
    box_button: {
      border: "solid black 1px",
      width: "160px",
      margin: "0 auto",
      color: "#000",
      // backgroundColor: "#009737",
      fontWeight: "bold",
    },
    message_box: {
      // border: "solid red 2px",
      height: "200px",
      fontSize: "16px",
      fontWeight: "bold",
    },
    input_field: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "black",
          boxShadow: "0 0 5px black",
        },
        "&:hover fieldset": {
          borderColor: "green",
        },
        "&.Mui-focused fieldset": {
          borderColor: "green",
        },
      },
      "& .MuiInputLabel-root": {
        color: "gray",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "green",
      },
    },
    typo_desc: {
      fontFamily: "italic",
    },
    info_box: {
      border: "solid green 1px",
      boxShadow: "0 0 10px green",
      color: "#fff",
      backgroundColor: "#000",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "80%"
        : screenGreaterThan768LessThan1024
        ? "55%"
        : screenGreaterThan1024LessThan3840
        ? "40%"
        : "30%",
      display: "flex",
      flexDirection: "column",
      padding: "10px",
      height: screenGreaterThan1024LessThan3840 ? "300px" : "100%",
      alignSelf:
        screenLessThan430 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan430LessThan768
          ? "center"
          : "",
      marginLeft: screenGreaterThan1024LessThan3840 ? "30px" : "",
    },
    info_input_box: {
      // border: "solid purple 2px",
      display: "flex",
      flexDirection: screenGreaterThan1024LessThan3840 ? "row" : "column",
      gap: "10px",
      // alignSelf: screenGreaterThan1024LessThan3840 ? "center" : "",
      alignItems: screenGreaterThan1024LessThan3840 ? "center" : "",
    },
    typo_info: {
      fontSize: screenGreaterThan1024LessThan3840 ? "22px" : "16px",
    },
  };
  return (
    <>
      <Box sx={styles.box_parent}>
        <Typography sx={styles.typo_heading}>Contact Us</Typography>
        <Box sx={styles.info_input_box}>
          <Box sx={styles.info_box}>
            <Typography sx={styles.typo_info}>Info</Typography>
            <Typography sx={styles.typo_info}>
              📧 greenpath@email.com
            </Typography>
            <Typography sx={styles.typo_info}>📞 (437) 123 1212</Typography>
            <Typography sx={styles.typo_info}>📍 123 Main St. E</Typography>
            <Typography sx={styles.typo_info}>
              ⏰ 09:00 AM - 07:00 PM
            </Typography>
          </Box>
          <Box
            sx={styles.input_box_parent}
            component="form"
            noValidate
            autoComplete="off"
          >
            <Typography sx={styles.typo_desc}>
              Feel free to contact us any time. We will get back to your as soon
              as we can!
            </Typography>
            <TextField
              sx={styles.input_field}
              id="full-name"
              label="Full Name"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              sx={styles.input_field}
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
            />
            <FormControl fullWidth sx={styles.input_field}>
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
              minRows={8}
              maxRows={10}
              // onChange={handleChangePhoneNumberValue}
            />
            {/* <Box sx={styles.box_button}>
           
          </Box> */}
            <Button sx={styles.box_button}>Send Message</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ContactUsSection;
