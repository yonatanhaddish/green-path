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
      //   border: "solid red 2px",
      fontSize: "22px",
      fontWeight: "bold",
      display: "flex",
      justifySelf: "center",
      backgroundColor: "green",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    box_parent: {
      border: "solid red 2px",
    },
  };
  return (
    <>
      <Box sx={styles.box_parent}>
        <Typography sx={styles.typo_heading}>Contact Us</Typography>
        <Box>
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="full-name"
              label="Full Name"
              variant="outlined"
              size="small"
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
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
                label="Age"

                //   onChange={handleChange}
              >
                <MenuItem value="load_owner">Load Owner</MenuItem>
                <MenuItem value="van_owner">Van Owner</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              size="small"
              // onChange={handleChangePhoneNumberValue}
            />
            <Box>
              <Button>Submit</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ContactUsSection;
