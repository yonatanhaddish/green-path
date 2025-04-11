"use client";

import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";

function OurPartnersSection() {
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
  const styles = {
    landing_page_parent: {
      // border: screenGreaterThan1920LessThan3840 ? "solid red 2px" : "",
      height:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "100%"
          : screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1366 ||
            screenGreaterThan1366LessThan1440 ||
            screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "100%"
          : "100%",
      width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
      backgroundColor: "#c1c4c2",
      display: "flex",
      flexDirection:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "column"
          : screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1366 ||
            screenGreaterThan1366LessThan1440 ||
            screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "row-reverse"
          : "row",
      gap: screenLessThan430
        ? "10px"
        : screenGreaterThan430LessThan768 ||
          screenGreaterThan1024LessThan1280 ||
          screenGreaterThan1280LessThan1366 ||
          screenGreaterThan1366LessThan1440 ||
          screenGreaterThan1440LessThan1920 ||
          screenGreaterThan1920LessThan3840
        ? ""
        : "20px",
      justifySelf: "center",
    },
    image_box: {
      // border: screenGreaterThan1920LessThan3840 ? "solid green 2px" : "",
      height:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "50%"
          : screenGreaterThan1280LessThan1366 ||
            screenGreaterThan1366LessThan1440 ||
            screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "100%"
          : "100%",
      backgroundImage: `url("/images/LandingImage.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "100%"
          : screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1366 ||
            screenGreaterThan1366LessThan1440 ||
            screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "50%"
          : "",
    },
    child_box: {
      // border: screenGreaterThan1920LessThan3840 ? "solid blue 2px" : "",
      height:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "50%"
          : screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1366 ||
            screenGreaterThan1366LessThan1440 ||
            screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "fit-content"
          : "100%",
      display: "flex",
      flexDirection: "column",
      // textAlign: "center",
      gap: screenLessThan430
        ? "15px"
        : screenGreaterThan430LessThan768
        ? "20px"
        : screenGreaterThan768LessThan1024
        ? "30px"
        : screenGreaterThan1024LessThan1280
        ? "20px"
        : screenGreaterThan1280LessThan1366
        ? "30px"
        : screenGreaterThan1366LessThan1440
        ? "30px"
        : screenGreaterThan1440LessThan1920
        ? "40px"
        : screenGreaterThan1920LessThan3840
        ? "50px"
        : "100px",
      alignItems: "center",
      alignSelf: "center",
      width:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "100%"
          : screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1366 ||
            screenGreaterThan1366LessThan1440 ||
            screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "50%"
          : "",
      // alignSelf: "center",
    },
    typo_heading: {
      // border: "solid green 2px",
      fontSize: screenLessThan430
        ? "36px"
        : screenGreaterThan430LessThan768
        ? "50px"
        : screenGreaterThan768LessThan1024
        ? "55px"
        : screenGreaterThan1024LessThan1280
        ? "55px"
        : screenGreaterThan1280LessThan1366
        ? "60px"
        : screenGreaterThan1366LessThan1440
        ? "60px"
        : screenGreaterThan1440LessThan1920
        ? "75px"
        : screenGreaterThan1920LessThan3840
        ? "90px"
        : "100px",
      fontWeight: "bold",
      fontFamily: "serif",
      textAlign: "center",
      width: screenGreaterThan768LessThan1024
        ? "80%"
        : screenGreaterThan1280LessThan1366 ||
          screenGreaterThan1366LessThan1440 ||
          screenGreaterThan1440LessThan1920
        ? "80%"
        : screenGreaterThan1920LessThan3840
        ? "80%"
        : "100%",
    },
    typo_paragraph: {
      // border: "solid purple 2px",
      fontSize: screenLessThan430
        ? "18px"
        : screenGreaterThan430LessThan768
        ? "20px"
        : screenGreaterThan768LessThan1024
        ? "18px"
        : screenGreaterThan1024LessThan1280
        ? "16px"
        : screenGreaterThan1280LessThan1366
        ? "18px"
        : screenGreaterThan1366LessThan1440
        ? "20px"
        : screenGreaterThan1440LessThan1920
        ? "20px"
        : screenGreaterThan1920LessThan3840
        ? "20px"
        : "100px",
      width: screenLessThan430
        ? "85%"
        : screenGreaterThan430LessThan768
        ? "70%"
        : screenGreaterThan768LessThan1024
        ? "70%"
        : screenGreaterThan1024LessThan1280
        ? "80%"
        : screenGreaterThan1280LessThan1366
        ? "70%"
        : screenGreaterThan1366LessThan1440
        ? "70%"
        : screenGreaterThan1440LessThan1920
        ? "70%"
        : screenGreaterThan1920LessThan3840
        ? "70%"
        : "100%",
      // fontFamily: `Copperplate, "Copperplate Gothic Light"`,
    },
    button_box: {
      // border: "solid blue 2px",
      width: screenLessThan430
        ? "85%"
        : screenGreaterThan430LessThan768
        ? "70%"
        : screenGreaterThan768LessThan1024
        ? "70%"
        : screenGreaterThan1024LessThan1280
        ? "80%"
        : screenGreaterThan1280LessThan1366
        ? "70%"
        : screenGreaterThan1366LessThan1440
        ? "70%"
        : screenGreaterThan1440LessThan1920
        ? "70%"
        : screenGreaterThan1920LessThan3840
        ? "70%"
        : "100%",
      display: "flex",
      gap: screenLessThan430
        ? "20px"
        : screenGreaterThan430LessThan768
        ? "30px"
        : screenGreaterThan768LessThan1024
        ? "30px"
        : screenGreaterThan1024LessThan1280
        ? "40px"
        : screenGreaterThan1280LessThan1366
        ? "40px"
        : screenGreaterThan1366LessThan1440
        ? "40px"
        : screenGreaterThan1440LessThan1920
        ? "60px"
        : screenGreaterThan1920LessThan3840
        ? "60px"
        : "",
    },
    button_our_service: {
      border: "solid #000 1px",
      fontSize: "16px",
      backgroundColor: "#009737",
      color: "#000",
      fontWeight: "bold",
      width: screenLessThan430
        ? "50%"
        : screenGreaterThan430LessThan768
        ? "40%"
        : screenGreaterThan768LessThan1024
        ? "35%"
        : screenGreaterThan1024LessThan1280
        ? "60%"
        : screenGreaterThan1280LessThan1366
        ? "75%"
        : screenGreaterThan1366LessThan1440
        ? "75%"
        : screenGreaterThan1440LessThan1920
        ? "35%"
        : screenGreaterThan1920LessThan3840
        ? "40%"
        : "100%",
    },
    button_contact_us: {
      border: "solid #009737 2px",
      fontSize: "16px",
      width: screenLessThan430
        ? "50%"
        : screenGreaterThan430LessThan768
        ? "40%"
        : screenGreaterThan768LessThan1024
        ? "35%"
        : screenGreaterThan1024LessThan1280
        ? "60%"
        : screenGreaterThan1280LessThan1366
        ? "75%"
        : screenGreaterThan1366LessThan1440
        ? "75%"
        : screenGreaterThan1440LessThan1920
        ? "35%"
        : screenGreaterThan1920LessThan3840
        ? "40%"
        : "100%",
      fontWeight: "bold",
      color: "#000",
    },
    span_heading_title: {
      color: "#009737",
    },
  };
  return (
    <>
      <Box sx={styles.landing_page_parent}>
        <Box sx={styles.image_box}></Box>
        <Box sx={styles.child_box}>
          <Typography sx={styles.typo_heading}>
            Full Sustain{" "}
            <span style={styles.span_heading_title}>Cargo Solutions</span>
          </Typography>
          {screenLessThan430 ? (
            <Typography sx={styles.typo_paragraph}>
              We provide services in the field of road transportation, ensuring
              reliable, eco-friendly, and efficient delivery solutions for
              businesses and individuals. 🌱🚛
            </Typography>
          ) : (
            <Typography sx={styles.typo_paragraph}>
              We provide services in the field of road transportation, ensuring
              reliable, eco-friendly, and efficient delivery solutions for
              businesses and individuals. Our commitment is to seamless
              logistics, timely deliveries, and reducing carbon footprints,
              making every shipment a step toward a greener future. 🌱🚛
            </Typography>
          )}
          <Box sx={styles.button_box}>
            <Button sx={styles.button_our_service}>Our Service</Button>
            <Button sx={styles.button_contact_us}>Contact Us</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default OurPartnersSection;
