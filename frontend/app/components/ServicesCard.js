"use client";

import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
export function ServicesCardLoadOwnwer() {
  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const styles = {
    parent_box: {
      border: "solid black 1px",
      boxShadow: "0 0 10px black",
      height: "600px",
      width: "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      //   gap: "20px",
    },
    title_image_box: {
      //   border: "solid 2px green",
      height: "60%",
    },
    desc_button_box: {
      //   border: "solid 2px blue",
      height: "35%",
      width: "90%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      //   gap: "20px",
    },
    image_box: {
      //   border: "solid red 2px",
      width: "100%",
      height: "90%",
      backgroundImage: `url("/images/load_owner.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      margin: "0 auto",
    },
    typo_heading: {
      //   border: "solid red 2px",
      fontSize: "20px",
      fontWeight: "bold",
      paddingLeft: "10px",
      backgroundColor: "#000",
      color: "green",
    },
    typo_description: {
      //   border: "solid red 2px",
      fontSize: "16px",
      fontWeight: "bold",
      width: "90%",
      margin: "0 auto",
      textAlign: "center",
    },
    button: {
      //   border: "solid white 1px",
      backgroundColor: "#009737",
      //   backgroundColor: "#000",
      color: "#000",
      //   color: "#fff",
      fontSize: "16px",
      fontWeight: "bold",
      width: "200px",
      //   marginBottom: "50px",
      marginLeft: "20px",
      margin: "0 auto",
    },
  };
  return (
    <>
      <Box sx={styles.parent_box}>
        <Box sx={styles.title_image_box}>
          <Typography sx={styles.typo_heading}>Load Owners</Typography>
          <Box sx={styles.image_box}></Box>
        </Box>
        <Box sx={styles.desc_button_box}>
          <Typography sx={styles.typo_description}>
            Maximize your earnings by connecting with customers who need
            transportation services. Browse available delivery requests, accept
            jobs that fit your schedule, and get paid for every successful trip.
          </Typography>
          <Button sx={styles.button}>Register Here</Button>
        </Box>
      </Box>
    </>
  );
}
export function ServicesCardVanOwner() {
  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const styles = {
    parent_box: {
      border: "solid black 1px",
      boxShadow: "0 0 10px black",
      height: "600px",
      width: "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      //   gap: "20px",
    },
    title_image_box: {
      //   border: "solid 2px green",
      height: "60%",
    },
    desc_button_box: {
      //   border: "solid 2px blue",
      height: "35%",
      width: "90%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      //   gap: "20px",
    },
    image_box: {
      //   border: "solid red 2px",
      width: "100%",
      height: "90%",
      backgroundImage: `url("/images/van_owner.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      margin: "0 auto",
    },
    typo_heading: {
      //   border: "solid red 2px",
      fontSize: "20px",
      fontWeight: "bold",
      paddingLeft: "10px",
      backgroundColor: "#000",
      color: "green",
    },
    typo_description: {
      //   border: "solid red 2px",
      fontSize: "16px",
      fontWeight: "bold",
      width: "90%",
      margin: "0 auto",
      textAlign: "center",
    },
    button: {
      //   border: "solid white 1px",
      backgroundColor: "#009737",
      //   backgroundColor: "#000",
      color: "#000",
      //   color: "#fff",
      fontSize: "16px",
      fontWeight: "bold",
      width: "200px",
      //   marginBottom: "50px",
      marginLeft: "20px",
      margin: "0 auto",
    },
  };
  return (
    <>
      <Box sx={styles.parent_box}>
        <Box sx={styles.title_image_box}>
          <Typography sx={styles.typo_heading}>Van Owners</Typography>
          <Box sx={styles.image_box}></Box>
        </Box>
        <Box sx={styles.desc_button_box}>
          <Typography sx={styles.typo_description}>
            We provide a seamless way for businesses and individuals to
            transport goods efficiently. Simply post your load details, get
            matched with reliable van operators, and ensure timely deliveries
            with ease.
          </Typography>
          <Button sx={styles.button}>Register Here</Button>
        </Box>
      </Box>
    </>
  );
}
