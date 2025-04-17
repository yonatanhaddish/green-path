"use client";

import React from "react";
import Link from "next/link";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";

function OurServiceSection() {
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
    our_service_parent: {
      //   border: "solid red 2px",
      backgroundColor: "#c1c4c2",
      //   height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
      justifySelf: "center",
    },
    our_service_child: {
      //   border: "solid green 2px",
      width:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1440 ||
        screenGreaterThan1440LessThan1920
          ? "90%"
          : screenGreaterThan1920LessThan3840
          ? "80%"
          : "100%",
      display: "flex",
      flexDirection: "column",
      gap:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "30px"
          : screenGreaterThan768LessThan1024 ||
            screenGreaterThan1024LessThan1440
          ? "40px"
          : screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "60px"
          : "100px",
      alignSelf:
        screenLessThan430 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan1024LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "center"
          : "",
      paddingBottom: "100px",
    },
    typo_heading: {
      borderBottom: "solid green 2px",
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
        ? "40%"
        : screenGreaterThan430LessThan768
        ? "20%"
        : screenGreaterThan768LessThan1024
        ? "30%"
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
    typo_services: {
      //   border: "solid blue 2px",
      width: screenLessThan430
        ? "100%"
        : screenGreaterThan768LessThan1024
        ? "90%"
        : screenGreaterThan1024LessThan1440
        ? "80%"
        : screenGreaterThan1440LessThan1920
        ? "70%"
        : screenGreaterThan1920LessThan3840
        ? "60%"
        : "100%",
      textAlign: "center",
      fontSize: screenLessThan430
        ? "16px"
        : screenGreaterThan1920LessThan3840
        ? "22px"
        : screenGreaterThan430LessThan768
        ? "18px"
        : screenGreaterThan768LessThan1024
        ? "18px"
        : screenGreaterThan1024LessThan1440
        ? "18px"
        : screenGreaterThan1440LessThan1920
        ? "22px"
        : "20px",
      fontWeight: "bold",
      alignSelf:
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "center"
          : "",
    },
    icon_van_owner: {
      width: "50px",
      height: "50px",
      backgroundImage: `url("/images/4.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      marginTop:
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan1024LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "20px"
          : "",
    },
    service_van_onwer: {
      border: "solid #000 2px",
      boxShadow: "0 0 10px #009737",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      gap:
        screenLessThan430 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "30px"
          : screenGreaterThan1024LessThan1440
          ? "10px"
          : "30px",
      minHeight: "400px",
      alignItems: "center",
      paddingBottom: "30px",
      width: screenGreaterThan768LessThan1024
        ? "45%"
        : screenGreaterThan1024LessThan1440
        ? "35%"
        : screenGreaterThan1440LessThan1920
        ? "32%"
        : screenGreaterThan1920LessThan3840
        ? "30%"
        : "100%",
    },
    icon_load_owner: {
      width: "50px",
      height: "50px",
      backgroundImage: `url("/images/3.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      marginTop:
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan1024LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "20px"
          : "",
    },
    service_load_onwer: {
      border: "solid #000 2px",
      boxShadow: "0 0 10px #009737",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      gap:
        screenLessThan430 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "30px"
          : screenGreaterThan1024LessThan1440
          ? "10px"
          : "30px",
      minHeight: "400px",
      alignItems: "center",
      paddingBottom: "30px",
      width: screenGreaterThan768LessThan1024
        ? "45%"
        : screenGreaterThan1024LessThan1440
        ? "35%"
        : screenGreaterThan1440LessThan1920
        ? "32%"
        : screenGreaterThan1920LessThan3840
        ? "30%"
        : "100%",
    },
    service_cards: {
      //   border: "solid blue 2px",
      width: screenLessThan430
        ? "85%"
        : screenGreaterThan430LessThan768
        ? "50%"
        : screenGreaterThan768LessThan1024
        ? "100%"
        : screenGreaterThan1024LessThan1440
        ? "90%"
        : screenGreaterThan1440LessThan1920
        ? "80%"
        : "100%",
      display: "flex",
      flexDirection:
        screenLessThan430 || screenGreaterThan430LessThan768 ? "column" : "row",
      alignSelf: "center",
      gap:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "30px"
          : screenGreaterThan1024LessThan1440
          ? ""
          : screenGreaterThan768LessThan1024
          ? "20px"
          : screenGreaterThan1440LessThan1920
          ? ""
          : screenGreaterThan1920LessThan3840
          ? ""
          : "100px",
      justifyContent: screenGreaterThan768LessThan1024
        ? "space-around"
        : screenGreaterThan1024LessThan1440 ||
          screenGreaterThan1440LessThan1920 ||
          screenGreaterThan1920LessThan3840
        ? "space-evenly"
        : "",
    },
    typo_head: {
      borderBottom: "solid #009737 2px",
      fontSize: screenLessThan430
        ? "22px"
        : screenGreaterThan768LessThan1024 ||
          screenGreaterThan1024LessThan1440 ||
          screenGreaterThan1440LessThan1920 ||
          screenGreaterThan1920LessThan3840
        ? "22px"
        : "20px",
      fontWeight: "bold",
      width: "70%",
      textAlign: "center",
    },
    typo_description: {
      width:
        screenLessThan430 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan1024LessThan1440 ||
        screenGreaterThan1440LessThan1920
          ? "75%"
          : screenGreaterThan1920LessThan3840
          ? "65%"
          : "100%",
      alignSelf: "center",
      fontSize: screenLessThan430
        ? "16px"
        : screenGreaterThan768LessThan1024
        ? "18px"
        : screenGreaterThan1024LessThan1440
        ? "16px"
        : "20px",
      //   fontWeight: "bold",
    },
    button_box: {
      // border: "solid #000 1px",
      fontSize: "16px",
      backgroundColor: "#009737",
      color: "#000",
      fontWeight: "bold",
      width:
        screenLessThan430 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan430LessThan768
          ? "70%"
          : screenGreaterThan1024LessThan1440 ||
            screenGreaterThan1440LessThan1920 ||
            screenGreaterThan1920LessThan3840
          ? "60%"
          : "100%",
    },
  };
  return (
    <div id="our_service">
      <Box sx={styles.our_service_parent}>
        <Typography sx={styles.typo_heading}>Our Services</Typography>
        <Box sx={styles.our_service_child}>
          <Typography sx={styles.typo_services}>
            We connect people who need reliable van delivery services with
            trusted van operators, making freight transportation simple,
            efficient, and secure. Our platform offers a seamless experience for
            both load owners and van operators — from posting a job to
            successful delivery.
          </Typography>

          <Box sx={styles.service_cards}>
            <Box sx={styles.service_load_onwer}>
              <Box sx={styles.icon_load_owner}></Box>
              <Typography sx={styles.typo_head}>Load Owners</Typography>
              <Typography sx={styles.typo_description}>
                Whether you're a business or an individual, post your delivery
                needs with ease. Our platform matches your load with verified
                van operators ready to transport your items safely and on time.
              </Typography>

              <Box sx={styles.button_box}>
                <Link href="/signup">
                  <Button
                    sx={{
                      width: "100%",
                      border: "solid #000 1px",
                      fontSize: "16px",
                      backgroundColor: "#009737",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    Register Here
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box sx={styles.service_van_onwer}>
              <Box sx={styles.icon_van_owner}></Box>
              <Typography sx={styles.typo_head}>Van Owners</Typography>
              <Typography sx={styles.typo_description}>
                Turn your van into a revenue-generating asset. Join our network,
                browse available jobs, and choose deliveries that fit your
                schedule and route preferences.
              </Typography>
              <Box sx={styles.button_box}>
                <Link href="/signup">
                  <Button
                    sx={{
                      width: "100%",
                      border: "solid #000 1px",
                      fontSize: "16px",
                      backgroundColor: "#009737",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    Register Here
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default OurServiceSection;
