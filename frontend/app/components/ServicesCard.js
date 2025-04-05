"use client";

import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
export function ServicesCardLoadOwnwer() {
  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const screenGreaterThan430LessThan768 = useMediaQuery(
    "(min-width: 431px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1024 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const screenGreaterThan1024LessThan1366 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1366px)"
  );
  const screenGreaterThan1366LessThan1440 = useMediaQuery(
    "(min-width: 1367px) and (max-width: 1440px)"
  );
  const screenGreaterThan1440LessThan1920 = useMediaQuery(
    "(min-width: 1441px) and (max-width: 1920px)"
  );
  const screenGreaterThan1920LessThan2560 = useMediaQuery(
    "(min-width: 1921px) and (max-width: 2560px)"
  );
  const styles = {
    parent_box: {
      border: "solid black 2px",
      boxShadow: "0 0 10px black",
      height: screenGreaterThan1024LessThan1366 ? "500px" : "600px",
      width: screenLessThan430
        ? "100%"
        : screenGreaterThan430LessThan768
        ? "80%"
        : screenGreaterThan1024LessThan1366
        ? "35%"
        : screenGreaterThan1366LessThan1440
        ? "40%"
        : screenGreaterThan1440LessThan1920
        ? "50%"
        : screenGreaterThan1920LessThan2560
        ? "30%"
        : "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      //   gap: "20px",
      backgroundColor: "green",
      paddingBottom: "10px",
    },
    title_image_box: {
      // border: "solid 2px green",
      height: screenGreaterThan1024LessThan1366 ? "50%" : "65%",
    },
    desc_button_box: {
      // border: "solid 2px blue",
      height: screenGreaterThan1024LessThan1366 ? "50%" : "35%",
      width: "90%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent:
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1366 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan2560
          ? "space-around"
          : "space-between",
    },
    image_box: {
      //   border: "solid red 2px",
      width: "100%",
      height: "90%",
      backgroundImage: `url("/images/load_owner.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: screenGreaterThan430LessThan768
        ? ""
        : screenGreaterThan768LessThan1024
        ? "right 35% bottom 80%"
        : screenGreaterThan1024LessThan1366
        ? ""
        : screenGreaterThan1440LessThan1920
        ? ""
        : screenGreaterThan1920LessThan2560
        ? ""
        : "center",
      margin: "0 auto",
    },
    typo_heading: {
      //   border: "solid red 2px",
      fontSize: "20px",
      fontWeight: "bold",
      paddingLeft: "10px",
      // backgroundColor: "#000",
      // color: "green",
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
      border: "solid black 2px",
      // backgroundColor: "#009737",
      backgroundColor: "#000",
      color: "#000",
      color: "#fff",
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
  const screenGreaterThan430LessThan768 = useMediaQuery(
    "(min-width: 431px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1024 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const screenGreaterThan1024LessThan1366 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1366px)"
  );
  const screenGreaterThan1366LessThan1440 = useMediaQuery(
    "(min-width: 1367px) and (max-width: 1440px)"
  );
  const screenGreaterThan1440LessThan1920 = useMediaQuery(
    "(min-width: 1441px) and (max-width: 1920px)"
  );
  const screenGreaterThan1920LessThan2560 = useMediaQuery(
    "(min-width: 1921px) and (max-width: 2560px)"
  );
  const styles = {
    parent_box: {
      border: "solid black 2px",
      boxShadow: "0 0 10px black",
      height: screenGreaterThan1024LessThan1366 ? "500px" : "600px",
      width: screenLessThan430
        ? "100%"
        : screenGreaterThan430LessThan768
        ? "80%"
        : screenGreaterThan1024LessThan1366
        ? "35%"
        : screenGreaterThan1366LessThan1440
        ? "40%"
        : screenGreaterThan1440LessThan1920
        ? "50%"
        : screenGreaterThan1920LessThan2560
        ? "30%"
        : "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      //   gap: "20px",
      backgroundColor: "green",
      paddingBottom: "10px",
    },
    title_image_box: {
      // border: "solid 2px green",
      height: screenGreaterThan1024LessThan1366 ? "50%" : "65%",
    },
    desc_button_box: {
      // border: "solid 2px blue",
      height: screenGreaterThan1024LessThan1366 ? "50%" : "35%",
      width: "90%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent:
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1366 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan2560
          ? "space-around"
          : "space-between",
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
      // backgroundColor: "#000",
      // color: "green",
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
      border: "solid black 2px",
      // backgroundColor: "#009737",
      backgroundColor: "#000",
      color: "#000",
      color: "#fff",
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
