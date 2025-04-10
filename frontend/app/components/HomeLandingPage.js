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
    landing_page_parent: {
      // border: screenGreaterThan1024LessThan1280 ? "solid red 3px" : "",
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
        : screenGreaterThan1366LessThan1440
        ? "row-reverse"
        : screenGreaterThan1440LessThan1920
        ? "row-reverse"
        : screenGreaterThan1920LessThan2560
        ? "row-reverse"
        : "row",
      width: screenLessThan430 ? "100%" : "100%",
      height: screenLessThan430
        ? "90vh"
        : screenGreaterThan430LessThan768
        ? "93vh"
        : screenGreaterThan768LessThan1024
        ? "93vh"
        : screenGreaterThan1024LessThan1280
        ? "90vh"
        : screenGreaterThan1280LessThan1366
        ? "90vh"
        : screenGreaterThan1366LessThan1440
        ? "90vh"
        : screenGreaterThan1440LessThan1920
        ? "93vh"
        : screenGreaterThan1920LessThan2560
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
        ? "55%"
        : screenGreaterThan430LessThan768
        ? "55%"
        : screenGreaterThan768LessThan1024
        ? "50%"
        : screenGreaterThan1024LessThan1280
        ? "100%"
        : screenGreaterThan1280LessThan1366
        ? "100%"
        : screenGreaterThan1366LessThan1440
        ? "100%"
        : screenGreaterThan1440LessThan1920
        ? "100%"
        : screenGreaterThan1920LessThan2560
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
        : screenGreaterThan768LessThan1024
        ? "50px"
        : screenGreaterThan1024LessThan1280
        ? "55px"
        : screenGreaterThan1280LessThan1366
        ? "60px"
        : screenGreaterThan1366LessThan1440
        ? "70px"
        : screenGreaterThan1440LessThan1920
        ? "70px"
        : screenGreaterThan1920LessThan2560
        ? "100px"
        : "100px",
      fontFamily: "serif",
      width: "100%",
      fontWeight: "bold",
      color: "green",
      display: "flex",
      justifyContent: "center",
      textAlign: screenGreaterThan1024LessThan1280
        ? "center"
        : screenGreaterThan1280LessThan1366
        ? "center"
        : screenGreaterThan1366LessThan1440
        ? "center"
        : screenGreaterThan1920LessThan2560
        ? "center"
        : screenGreaterThan1440LessThan1920
        ? "center"
        : "",
    },
    typo_paragraph: {
      // border: "solid blue 2px",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "85%"
        : screenGreaterThan1024LessThan1280
        ? "80%"
        : screenGreaterThan1280LessThan1366
        ? "70%"
        : screenGreaterThan768LessThan1024
        ? "75%"
        : screenGreaterThan1366LessThan1440
        ? "85%"
        : screenGreaterThan1440LessThan1920
        ? "80%"
        : screenGreaterThan1920LessThan2560
        ? "70%"
        : "100%",
      color: "white",
      margin: "0 auto",
      fontSize: screenLessThan430
        ? "16px"
        : screenGreaterThan430LessThan768
        ? "18px"
        : screenGreaterThan768LessThan1024
        ? "18px"
        : screenGreaterThan1024LessThan1280
        ? "15px"
        : screenGreaterThan1280LessThan1366
        ? "18px"
        : screenGreaterThan1366LessThan1440
        ? "18px"
        : screenGreaterThan1440LessThan1920
        ? "20px"
        : screenGreaterThan1920LessThan2560
        ? "20px"
        : "100px",
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
        ? "18px"
        : screenGreaterThan1024LessThan1280
        ? "16px"
        : screenGreaterThan1280LessThan1366
        ? "18px"
        : screenGreaterThan1366LessThan1440
        ? "18px"
        : screenGreaterThan1440LessThan1920
        ? "18px"
        : screenGreaterThan1920LessThan2560
        ? "18px"
        : "100px",
      fontWeight: "bold",
      width: "200px",
      //   marginBottom: "50px",
      marginLeft: screenLessThan430
        ? "20px"
        : screenGreaterThan430LessThan768
        ? "55px"
        : screenGreaterThan1024LessThan1280
        ? "10%"
        : screenGreaterThan1280LessThan1366
        ? "100px"
        : screenGreaterThan768LessThan1024
        ? "12%"
        : screenGreaterThan1366LessThan1440
        ? "7%"
        : screenGreaterThan1920LessThan2560
        ? "15%"
        : "100px",
    },
    child_box: {
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: screenGreaterThan768LessThan1024
        ? "20px"
        : screenGreaterThan1024LessThan1280
        ? "10px"
        : screenGreaterThan1920LessThan2560
        ? "60px"
        : "20px",
      width: "100%",
      height: screenLessThan430
        ? "45%"
        : screenGreaterThan430LessThan768
        ? "45%"
        : screenGreaterThan768LessThan1024
        ? "50%"
        : screenGreaterThan1024LessThan1280
        ? "100%"
        : screenGreaterThan1280LessThan1366
        ? "100%"
        : screenGreaterThan1366LessThan1440
        ? "100%"
        : screenGreaterThan1440LessThan1920
        ? "100%"
        : screenGreaterThan1920LessThan2560
        ? "100%"
        : "",
      // border: "solid blue 1px",
      backgroundColor: "#0E2835",
      justifyContent: "center",
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
