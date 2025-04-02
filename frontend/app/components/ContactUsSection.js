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
      gap: "50px",
      paddingBottom: "20px",
      paddingTop: "30px",
      width: "80%",
      margin: "0 auto",
      marginBottom: "100px",
    },
    input_box_parent: {
      // border: "solid blue 2px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      width: "90%",
      margin: "0 auto",
    },
    box_button: {
      border: "solid black 1px",
      width: "160px",
      margin: "0 auto",
      color: "#000",
      backgroundColor: "#009737",
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
  };
  return (
    <>
      <Box sx={styles.box_parent}>
        <Typography sx={styles.typo_heading}>Contact Us</Typography>
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
    </>
  );
}

export default ContactUsSection;
