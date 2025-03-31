import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import {
  WhoWeAreCard,
  OurMission,
  GreenCommitment,
  WhyChooseUs,
} from "../components/WhoWeAreCards";

function AboutUs() {
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
      //   border: "solid red 2px",
      fontSize: "22px",
      fontWeight: "bold",
      display: "flex",
      justifySelf: "center",
      //   marginTop: "30px",
      backgroundColor: "green",
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
  };
  return (
    <>
      <Box sx={styles.box_parent}>
        <Box>
          <Typography sx={styles.typo_heading}>Who Are We</Typography>
        </Box>
        <Box sx={styles.about_cards}>
          <WhoWeAreCard />
          <OurMission />
          <GreenCommitment />
          <WhyChooseUs />
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
