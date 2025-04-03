"use client";

import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import {
  WhoWeAreCard,
  OurMission,
  GreenCommitment,
  WhyChooseUs,
} from "../components/WhoWeAreCards";

function AboutUs() {
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
    box_parent: {
      //   border: "solid red 2px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      paddingBottom: "50px",
      paddingTop: "50px",
    },
    typo_heading: {
      border: "solid black 2px",
      fontSize: "22px",
      fontWeight: "bold",
      display: "flex",
      justifySelf: "center",
      //   marginTop: "30px",
      // backgroundColor: "green",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    about_cards: {
      //   border: "solid green 2px",
      width: "80%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
    commitment_chooseus: {
      // border: screenGreaterThan1024LessThan1280 ? "solid red 2px" : "",
      display: "flex",
      flexDirection: screenGreaterThan1024LessThan1280
        ? "row"
        : screenGreaterThan1280LessThan1366
        ? "row"
        : screenGreaterThan1366LessThan1440
        ? "row"
        : screenGreaterThan1440LessThan1920
        ? "row"
        : screenGreaterThan1920LessThan2560
        ? "row"
        : "column",
      justifyContent: "flex-end",
      gap: screenGreaterThan1024LessThan1280 ? "" : "25px",
    },
    whoweare_mission: {
      display: "flex",
      flexDirection: screenGreaterThan1920LessThan2560 ? "row" : "column",
      gap: screenGreaterThan1920LessThan2560 ? "40px" : "25px",
    },
  };
  return (
    <>
      <Box sx={styles.box_parent}>
        <Box>
          <Typography sx={styles.typo_heading}>Who Are We</Typography>
        </Box>
        <Box sx={styles.about_cards}>
          <Box sx={styles.whoweare_mission}>
            <WhoWeAreCard />
            <OurMission />
          </Box>
          <Box sx={styles.commitment_chooseus}>
            <GreenCommitment />
            <WhyChooseUs />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
