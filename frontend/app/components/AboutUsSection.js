"use client";

import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
function AboutUsSection() {
  const imageSources = [
    "/images/green_path_about.jpeg",
    "/images/AboutUsImage.jpeg",
    "/images/load_owner_02.jpeg",
    "/images/two_cargo_van_driver.jpeg",
  ];
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
    about_us_parent: {
      // border: "solid red 2px",
      backgroundColor: "#c1c4c2",
      //   height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
      justifySelf: "center",
    },
    about_us_child: {
      // border: "solid blue 2px",
      display: "flex",
      flexDirection: screenLessThan430 ? "column" : "row",
      alignItems: "center",
      alignSelf: "center",
      justifyContent:
        screenGreaterThan1280LessThan1366 ||
        screenGreaterThan1024LessThan1280 ||
        screenGreaterThan1366LessThan1440
          ? "space-between"
          : screenGreaterThan1440LessThan1920
          ? "space-around"
          : "",
      gap: screenLessThan430
        ? "10px"
        : screenGreaterThan430LessThan768
        ? "20px"
        : screenGreaterThan768LessThan1024
        ? "40px"
        : screenGreaterThan1024LessThan1280
        ? ""
        : screenGreaterThan1280LessThan1366
        ? ""
        : screenGreaterThan1366LessThan1440
        ? ""
        : screenGreaterThan1440LessThan1920
        ? ""
        : screenGreaterThan1920LessThan3840
        ? "10%"
        : "",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "90%"
        : screenGreaterThan1024LessThan1280
        ? "80%"
        : screenGreaterThan1280LessThan1366
        ? "85%"
        : screenGreaterThan1366LessThan1440
        ? "80%"
        : screenGreaterThan1440LessThan1920
        ? "70%"
        : screenGreaterThan1920LessThan3840
        ? "70%"
        : "90%",
      paddingBottom: "100px",
    },
    images_box_parent: {
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "50%"
        : screenGreaterThan768LessThan1024
        ? "50%"
        : screenGreaterThan1024LessThan1280
        ? "40%"
        : screenGreaterThan1280LessThan1366
        ? "35%"
        : screenGreaterThan1366LessThan1440
        ? "40%"
        : screenGreaterThan1440LessThan1920
        ? "35%"
        : screenGreaterThan1920LessThan3840
        ? "40%"
        : "100%",
      height: screenLessThan430
        ? "350px"
        : screenGreaterThan430LessThan768
        ? "350px"
        : screenGreaterThan768LessThan1024
        ? "400px"
        : screenGreaterThan1024LessThan1280
        ? "350px"
        : screenGreaterThan1280LessThan1366
        ? "400px"
        : screenGreaterThan1366LessThan1440
        ? "400px"
        : screenGreaterThan1440LessThan1920
        ? "500px"
        : screenGreaterThan1920LessThan3840
        ? "550px"
        : "100px",
      maxWidth: "100%",
      maxHeight: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: 1,
    },
    image_box_01: {
      backgroundImage: `url("/images/green_path_about.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "50vw",
      height: "50vw",
      maxWidth: "100%",
      maxHeight: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: 1,
      //   border: "3px solid green",
    },
    image_box_03: {
      backgroundImage: `url("/images/load_owner_02.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "50vw",
      height: "50vw",
      maxWidth: "100%",
      maxHeight: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: 1,
      //   border: "3px solid green",
    },
    image_box_04: {
      backgroundImage: `url("/images/two_cargo_van_driver.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "50vw",
      height: "50vw",
      maxWidth: "100%",
      maxHeight: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: 1,
      //   border: "3px solid green",
    },
    image_box_02: {
      backgroundImage: `url("/images/AboutUsImage.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "50vw",
      height: "50vw",
      maxWidth: "100%",
      maxHeight: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: 1,
      //   border: "3px solid green",
    },
    typo_parent: {
      // border: "solid green 2px",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan1440LessThan1920
        ? "40%"
        : screenGreaterThan1920LessThan3840
        ? "35%"
        : "50%",
      display: "flex",
      flexDirection: "column",
      gap: screenLessThan430
        ? "10px"
        : screenGreaterThan430LessThan768
        ? "5px"
        : screenGreaterThan768LessThan1024
        ? "20px"
        : screenGreaterThan1024LessThan1280
        ? "10px"
        : screenGreaterThan1280LessThan1366
        ? "30px"
        : "40px",
      //   textAlign: "center",
    },
    typo_heading: {
      borderBottom: "solid green 2px",
      fontSize: screenLessThan430
        ? "30px"
        : screenGreaterThan430LessThan768
        ? "25px"
        : screenGreaterThan768LessThan1024
        ? "40px"
        : screenGreaterThan1024LessThan1280
        ? "35px"
        : screenGreaterThan1280LessThan1366
        ? "40px"
        : screenGreaterThan1366LessThan1440
        ? "45px"
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
        : screenGreaterThan1024LessThan1280
        ? "20%"
        : screenGreaterThan1280LessThan1366
        ? "20%"
        : screenGreaterThan1366LessThan1440
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
    typo_desc: {
      // fontWeight: "bold",
      fontSize: screenLessThan430
        ? "16px"
        : screenGreaterThan768LessThan1024
        ? "18px"
        : screenGreaterThan1024LessThan1280
        ? "18px"
        : screenGreaterThan1280LessThan1366
        ? "18px"
        : screenGreaterThan1366LessThan1440
        ? "18px"
        : screenGreaterThan1440LessThan1920
        ? "20px"
        : screenGreaterThan1920LessThan3840
        ? "22px "
        : screenGreaterThan430LessThan768
        ? "16px"
        : "40px",
    },
    button_box: {
      border: "solid #000 1px",
      fontSize: "16px",
      backgroundColor: "#009737",
      color: "#000",
      fontWeight: "bold",
      width: screenLessThan430
        ? "60%"
        : screenGreaterThan1024LessThan1280
        ? "30%"
        : screenGreaterThan1280LessThan1366
        ? "40%"
        : screenGreaterThan1366LessThan1440
        ? "35%"
        : screenGreaterThan1440LessThan1920
        ? "30%"
        : "50%",
    },
  };
  return (
    <>
      <Box sx={styles.about_us_parent}>
        <Typography sx={styles.typo_heading}>About Us</Typography>
        <Box sx={styles.about_us_child}>
          <Box sx={styles.images_box_parent}>
            {imageSources.map((src, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  // border: "3px solid green",
                }}
              />
            ))}
          </Box>
          <Box sx={styles.typo_parent}>
            <Typography sx={styles.typo_desc}>
              <span style={{ fontSize: "1.5rem" }}>W</span>e are{" "}
              <span style={{ color: "#009737", fontWeight: "bold" }}>
                Green Path{" "}
              </span>
              Logistics, a company dedicated to providing reliable, efficient,
              and sustainable road transportation solutions. Our goal is to
              revolutionize logistics by combining innovation, efficiency, and
              environmental responsibility.
            </Typography>
            <Typography sx={styles.typo_desc}>
              <span style={{ fontSize: "1.5rem" }}>O</span>ur Mission is to
              deliver seamless and cost-effective transportation solutions while
              moving toward a fully
              <span style={{ color: "#009737", fontWeight: "bold" }}>
                {" "}
                eco-friendly
              </span>{" "}
              future. We are committed to reducing our carbon footprint and
              adopting greener practices in every aspect of our operations.
            </Typography>
            <Button sx={styles.button_box}>Read More</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AboutUsSection;
