"use client";
import React from "react";
import { useMediaQuery, Typography, Box } from "@mui/material";

import WeatherCard from "../components/WeatherCard";
import DriverStat from "../components/DriverStat";
import AvailableJobs from "../components/AvailableJobs";
import RecentActivity from "../components/RecentActivity";

const OperatorHome = () => {
  const isLapTopSmallScreen = useMediaQuery("(max-width:1024px)");

  const styles = {
    parent_box: {
      // border: "solid red 2px",
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "30px",
      gap: "20px",
      background: "#F5F5F5",
    },
    cards_box: {
      width: isLapTopSmallScreen ? "80%" : "90%",
      display: "flex",
      flexDirection: isLapTopSmallScreen ? "column" : "row",
      justifyContent: "space-around",
      gap: "20px",
      // border: "solid blue 2px",
    },

    card_single: {
      width: "100%",
      // border: "solid green 2px",
    },
    recently_box: {
      // border: "solid green 2px",
      width: "90%",
      display: "flex",
      justifyContent: "center",
    },
    heading_typography: {
      // border: "solid blue 2px",
      width: "50%",
      // fontWeight: "bold",
      fontSize: "1.1rem",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundImage: "linear-gradient(to right, #000, green)",
    },
  };
  return (
    <>
      <Box sx={styles.parent_box}>
        <Typography variant="body1" sx={styles.heading_typography}>
          Good Afternoon,{" "}
          <span style={{ fontWeight: "bold" }}>Yonatan Haddish</span>
        </Typography>
        <Box sx={styles.cards_box}>
          <Box sx={styles.card_single}>
            <WeatherCard />
          </Box>
          <Box sx={styles.card_single}>
            <DriverStat />
          </Box>
          <Box sx={styles.card_single}>
            <AvailableJobs />
          </Box>
        </Box>
        <Box sx={styles.recently_box}>
          <RecentActivity />
        </Box>
      </Box>
    </>
  );
};

export default OperatorHome;
