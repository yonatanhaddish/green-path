"use client";

import React from "react";

import { Box, Button, Typography, useMediaQuery } from "@mui/material";

function HomeLandingPage() {
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

  const styles = {
    landing_page_parent: {
      // border: screenGreaterThan1280LessThan1366 ? "solid red 3px" : "",
      display: "flex",
      flexDirection: screenLessThan430
        ? "column"
        : screenGreaterThan430LessThan768
        ? "column"
        : screenGreaterThan768LessThan1024
        ? "column"
        : screenGreaterThan1024LessThan1280
        ? "row-reverse"
        : screenGreaterThan1280LessThan1366
        ? "row-reverse"
        : "row",
      width: screenLessThan430 ? "100%" : "100%",
      height: screenLessThan430
        ? "87vh"
        : screenGreaterThan430LessThan768
        ? "93vh"
        : screenGreaterThan768LessThan1024
        ? "93vh"
        : screenGreaterThan1024LessThan1280
        ? "90vh"
        : screenGreaterThan1280LessThan1366
        ? "90vh"
        : "",
      margin: "0 auto",
      backgroundColor: "#F5F5F5",
    },
    text_box: {
      //   border: "solid green 2px",
    },
    image_box: {
      //   border: "solid blue 2px",
      width: screenLessThan430 ? "100%" : "100%",
      height: screenLessThan430
        ? "65%"
        : screenGreaterThan430LessThan768
        ? "55%"
        : screenGreaterThan768LessThan1024
        ? "50%"
        : screenGreaterThan1024LessThan1280
        ? "100%"
        : screenGreaterThan1280LessThan1366
        ? "100%"
        : "",
      backgroundImage: `url("/images/landing-page.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      margin: "0 auto",
    },
    typo_heading: {
      //   border: "solid green 2px",
      fontSize: screenLessThan430
        ? "25px"
        : screenGreaterThan430LessThan768
        ? "40px"
        : "40px",
      fontFamily: "serif",
      width: "100%",
      fontWeight: "bold",
      color: "green",
      paddingTop: screenGreaterThan1024LessThan1280 ? "40px" : "20px",
      display: "flex",
      justifyContent: "center",
      paddingTop: screenGreaterThan1280LessThan1366 ? "80px" : "20px",
    },
    typo_paragraph: {
      // border: "solid blue 2px",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "85%"
        : screenGreaterThan1024LessThan1280
        ? "70%"
        : screenGreaterThan1280LessThan1366
        ? "70%"
        : "100%",
      color: "white",
      margin: "0 auto",
      fontSize: screenLessThan430
        ? "16px"
        : screenGreaterThan430LessThan768
        ? "18px"
        : screenGreaterThan768LessThan1024
        ? "16px"
        : screenGreaterThan1024LessThan1280
        ? "16px"
        : screenGreaterThan1280LessThan1366
        ? "20px"
        : "50px",
    },
    button: {
      //   border: "solid white 1px",
      backgroundColor: "#009737",
      color: "#000",
      fontSize: screenLessThan430
        ? "16px"
        : screenGreaterThan430LessThan768
        ? "18px"
        : screenGreaterThan768LessThan1024
        ? "16px"
        : screenGreaterThan1024LessThan1280
        ? "16px"
        : screenGreaterThan1280LessThan1366
        ? "18px"
        : "50px",
      fontWeight: "bold",
      width: "200px",
      //   marginBottom: "50px",
      marginLeft: screenLessThan430
        ? "20px"
        : screenGreaterThan430LessThan768
        ? "55px"
        : screenGreaterThan1024LessThan1280
        ? "90px"
        : screenGreaterThan1280LessThan1366
        ? "100px"
        : "100px",
    },
    child_box: {
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
      height: screenLessThan430
        ? "35%"
        : screenGreaterThan430LessThan768
        ? "45%"
        : screenGreaterThan768LessThan1024
        ? "50%"
        : screenGreaterThan1024LessThan1280
        ? "100%"
        : screenGreaterThan1280LessThan1366
        ? "100%"
        : "",
      // border: "solid blue 1px",
      backgroundColor: "#000",
    },
  };
  return (
    <>
      <Box sx={styles.landing_page_parent}>
        <Box sx={styles.image_box}></Box>
        <Box sx={styles.child_box}>
          <Typography sx={styles.typo_heading}>
            Full Sustain Cargo Solutions
          </Typography>
          {screenLessThan430 ? (
            <Typography sx={styles.typo_paragraph}>
              We provide reliable and efficient road transportation services,
              ensuring seamless logistics and timely deliveries. 🚛
            </Typography>
          ) : (
            <Typography sx={styles.typo_paragraph}>
              We provide services in the field of road transportation, ensuring
              reliable, eco-friendly, and efficient delivery solutions for
              businesses and individuals. Our commitment is to seamless
              logistics, timely deliveries, and reducing carbon footprints,
              making every shipment a step toward a greener future. 🌱🚛
              <br /> <br />
              In the near future, we will be 100% green and eco-friendly, fully
              transitioning to sustainable energy solutions for all our
              transportation services. ♻️✨
            </Typography>
          )}
          <Button sx={styles.button}>Our Service</Button>
        </Box>
      </Box>
    </>
  );
}

export default HomeLandingPage;
// {screenLessThan430 ? (
//   <Box sx={styles.landing_page_parent}>
//     {/* <Typography sx={styles.typo_green_path}>GREEN PATH</Typography> */}
//     <Box sx={styles.image_box}></Box>
//     <Box sx={styles.child_box}>
//       <Typography sx={styles.typo_heading}>
//         Full Sustain Cargo Solutions
//       </Typography>
//       <Typography variant="'textSecondary'" sx={styles.typo_paragraph}>
//         We provide reliable and efficient road transportation services,
//         ensuring seamless logistics and timely deliveries. 🚛
//       </Typography>
//       <Box sx={styles.button_box}>
//         <Button sx={styles.button}>Our Service</Button>
//       </Box>
//     </Box>
//   </Box>
// ) : (
//   <Box sx={styles.landing_page_parent}>
//     <Box sx={styles.text_box}>
//       <Typography>Full Sustain Cargo Solutions</Typography>
//       <Typography>
//         We provide services in the field of road transportation, ensuring
//         reliable, eco-friendly, and efficient delivery solutions for
//         businesses and individuals. Our commitment is to seamless
//         logistics, timely deliveries, and reducing carbon footprints,
//         making every shipment a step toward a greener future. 🌱🚛 In the
//         near future, we will be 100% green and eco-friendly, fully
//         transitioning to sustainable energy solutions for all our
//         transportation services. ♻️✨
//       </Typography>
//       <Button>Our Service</Button>
//     </Box>
//     <Box sx={styles.image_box}></Box>
//   </Box>
// )}
