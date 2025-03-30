"use client";

import React from "react";

import { Box, Button, Typography, useMediaQuery } from "@mui/material";

function HomeLandingPage() {
  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );

  const styles = {
    landing_page_parent: {
      // border: "solid red 2px",
      display: "flex",
      flexDirection: screenLessThan430 ? "column" : "row",
      width: screenLessThan430 ? "100%" : "100%",
      height: screenLessThan430 ? "88vh" : "100vh",
      margin: "0 auto",
      //   background: `linear-gradient(to bottom,#000,#000,#fff)`,
      backgroundColor: "#F5F5F5",
    },
    text_box: {
      //   border: "solid green 2px",
    },
    image_box: {
      //   border: "solid blue 2px",
      width: screenLessThan430 ? "100%" : "100%",
      height: screenLessThan430 ? "65%" : "100px",
      backgroundImage: `url("/images/landing-page.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      margin: "0 auto",
    },
    typo_heading: {
      //   border: "solid green 2px",
      fontSize: screenLessThan430 ? "25px" : "10px",
      fontFamily: "serif",
      width: "100%",
      fontWeight: "bold",
      color: "green",
      paddingTop: "20px",
      display: "flex",
      justifyContent: "center",
    },
    typo_paragraph: {
      //   border: "solid blue 2px",
      width: "90%",
      color: "white",
      margin: "0 auto",
    },
    typo_green_path: {
      //   border: "solid purple 2px",
      fontFamily: "Helvetica, sans-serif",
      fontWeight: "bold",
      fontSize: screenLessThan430 ? "45px" : "10px",
      margin: "0 auto",
    },
    button_box: {
      //   border: "solid white 1px",
      backgroundColor: "#009737",
      color: "#000",
      fontSize: "16px",
      fontWeight: "bold",
      width: "200px",
      marginBottom: "50px",
      marginLeft: "20px",
    },
    child_box: {
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
      //   border: "solid blue 1px",
      backgroundColor: "#000",
    },
  };
  return (
    <>
      {screenLessThan430 ? (
        <Box sx={styles.landing_page_parent}>
          {/* <Typography sx={styles.typo_green_path}>GREEN PATH</Typography> */}
          <Box sx={styles.image_box}></Box>
          <Box sx={styles.child_box}>
            <Typography sx={styles.typo_heading}>
              Full Sustain Cargo Solutions
            </Typography>
            <Typography variant="'textSecondary'" sx={styles.typo_paragraph}>
              We provide reliable and efficient road transportation services,
              ensuring seamless logistics and timely deliveries. 🚛
            </Typography>
            <Button sx={styles.button_box}>Our Service</Button>
          </Box>
        </Box>
      ) : (
        <Box sx={styles.landing_page_parent}>
          <Box sx={styles.text_box}>
            <Typography>Full Sustain Cargo Solutions</Typography>
            <Typography>
              We provide services in the field of road transportation, ensuring
              reliable, eco-friendly, and efficient delivery solutions for
              businesses and individuals. Our commitment is to seamless
              logistics, timely deliveries, and reducing carbon footprints,
              making every shipment a step toward a greener future. 🌱🚛 In the
              near future, we will be 100% green and eco-friendly, fully
              transitioning to sustainable energy solutions for all our
              transportation services. ♻️✨
            </Typography>
            <Button>Our Service</Button>
          </Box>
          <Box sx={styles.image_box}></Box>
        </Box>
      )}
    </>
  );
}

export default HomeLandingPage;
