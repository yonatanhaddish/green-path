"use client";

import React from "react";

import { Box, Button, Typography, useMediaQuery } from "@mui/material";
function WhyChooseUs() {
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
  const styles = {
    parent_box: {
      //   border: "solid red 2px",
      backgroundColor: "#c1c4c2",
      //   height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
      justifySelf: "center",
      paddingBottom: "100px",
    },
    typo_heading: {
      borderBottom: "solid #009737 2px",
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
        ? "50%"
        : screenGreaterThan430LessThan768
        ? "30%"
        : screenGreaterThan768LessThan1024
        ? "35%"
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
    why_choose_us_box_parent: {
      //   border: "solid green 2px",
      width: screenLessThan430
        ? "80%"
        : screenGreaterThan430LessThan768 ||
          screenGreaterThan768LessThan1024 ||
          screenGreaterThan1024LessThan1440 ||
          screenGreaterThan1440LessThan1920
        ? "90%"
        : "100%",
      display: "flex",
      flexWrap: "wrap",
      alignSelf:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1440 ||
        screenGreaterThan1440LessThan1920
          ? "center"
          : "",
      gap: screenLessThan430
        ? "50px"
        : screenGreaterThan430LessThan768
        ? "20px"
        : screenGreaterThan768LessThan1024
        ? "30px"
        : screenGreaterThan1024LessThan1440
        ? "30px"
        : screenGreaterThan1440LessThan1920
        ? ""
        : "",
      justifyContent: "space-around",
    },
    why_choose_us_box_single: {
      //   border: "solid blue 2px",
      display: "flex",
      flexDirection: "column",
      gap:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "10px"
          : "",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "40%"
        : screenGreaterThan768LessThan1024
        ? "40%"
        : screenGreaterThan1024LessThan1440
        ? "30%"
        : screenGreaterThan1440LessThan1920 || screenGreaterThan1920LessThan3840
        ? "20%"
        : "100%",
    },
    typo_why_choose_us: {
      fontWeight: "bold",
      fontSize: screenLessThan430 ? "20px" : "20px",
      textAlign: "center",
      alignSelf: "center",
      color: "#009737",
      width: screenGreaterThan1024LessThan1440 ? "80%" : "100%",
      //   border: "solid red 2px",
    },
    typo_why_choose_us_desc: {
      //   border: "solid green 2px",
      width: screenLessThan430
        ? "70%"
        : screenGreaterThan430LessThan768
        ? "90%"
        : screenGreaterThan768LessThan1024
        ? "80%"
        : screenGreaterThan1024LessThan1440
        ? "80%"
        : screenGreaterThan1440LessThan1920
        ? "70%"
        : screenGreaterThan1920LessThan3840
        ? "75%"
        : "100%",
      textAlign: "center",
      alignSelf: "center",
      fontWeight: "bold",
    },
  };
  return (
    <>
      <Box sx={styles.parent_box}>
        <Typography sx={styles.typo_heading}>Why Choose Us</Typography>
        <Box sx={styles.why_choose_us_box_parent}>
          <Box sx={styles.why_choose_us_box_single}>
            <Typography sx={styles.typo_why_choose_us}>
              Reliable and on-time deliveries
            </Typography>
            <Typography sx={styles.typo_why_choose_us_desc}>
              We prioritize punctuality with every delivery. Count on us for
              reliable, on-time service—no delays, just dependable results.
            </Typography>
          </Box>
          <Box sx={styles.why_choose_us_box_single}>
            <Typography sx={styles.typo_why_choose_us}>
              A strong commitment to sustainability
            </Typography>
            <Typography sx={styles.typo_why_choose_us_desc}>
              We’re dedicated to eco-friendly practices, reducing our carbon
              footprint through efficient routes and greener operations.
              Sustainability is at the heart of everything we do.
            </Typography>
          </Box>
          <Box sx={styles.why_choose_us_box_single}>
            <Typography sx={styles.typo_why_choose_us}>
              Innovative, customer-focused solutions
            </Typography>
            <Typography sx={styles.typo_why_choose_us_desc}>
              We tailor our services to meet your unique needs, using smart
              technology and creative thinking. Our goal is to make every
              experience smooth, efficient, and centered around you.
            </Typography>
          </Box>
          <Box sx={styles.why_choose_us_box_single}>
            <Typography sx={styles.typo_why_choose_us}>
              Transparency and efficiency in every step
            </Typography>
            <Typography sx={styles.typo_why_choose_us_desc}>
              We keep you informed at every stage with clear communication and
              real-time updates. Our streamlined processes ensure fast,
              hassle-free service you can trust.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default WhyChooseUs;
