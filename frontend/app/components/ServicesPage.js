"use client";

import React from "react";
import { useMediaQuery, Typography, Box } from "@mui/material";
import {
  ServicesCardLoadOwnwer,
  ServicesCardVanOwner,
} from "../components/ServicesCard";

function ServicesPage() {
  const screenGreaterThan1024LessThan1280 = useMediaQuery(
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
    box_parent: {
      border: "solid blue 2px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      paddingBottom: "50px",
      paddingTop: "50px",
      backgroundColor: "#c1c4c2",
    },
    typo_heading: {
      border: "solid black 2px",
      fontSize: "22px",
      fontWeight: "bold",
      display: "flex",
      justifySelf: "center",
      // backgroundColor: "green",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    services_cards: {
      // border: "solid green 2px",
      display: "flex",
      flexDirection:
        screenGreaterThan1024LessThan1280 ||
        screenGreaterThan1366LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan2560
          ? "row"
          : "column",
      gap: "50px",
      width: "80%",
      alignSelf: "center",
    },
  };

  return (
    <>
      <Box sx={styles.box_parent}>
        <Box>
          <Typography sx={styles.typo_heading}>Services</Typography>
        </Box>
        <Box sx={styles.services_cards}>
          <ServicesCardLoadOwnwer />
          <ServicesCardVanOwner />
        </Box>
      </Box>
    </>
  );
}

export default ServicesPage;
