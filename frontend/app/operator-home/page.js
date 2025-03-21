"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery, Typography, Box } from "@mui/material";

import WeatherCard from "../components/WeatherCard";
import DriverStat from "../components/DriverStat";
import AvailableJobs from "../components/AvailableJobs";
import RecentActivity from "../components/RecentActivity";

const OperatorHome = () => {
  const [loading, setLoading] = useState(undefined);
  const screenLessThan_768 = useMediaQuery("(max-width:768px)");
  const screenGreater_769LessThan1024 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const screenGreater_1024LessThan1280 = useMediaQuery(
    "(min-width: 765px) and (max-width: 1280px)"
  );
  const screenGreater_1280LessThan1366 = useMediaQuery(
    "(min-width: 1281px) and (max-width: 1441px)"
  );

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading === undefined) {
    return <div>Loading...</div>;
  }

  const styles = {
    parent_box: {
      height: "100%",
      width:
        screenLessThan_768 ||
        screenGreater_769LessThan1024 ||
        screenGreater_1024LessThan1280
          ? "100%"
          : "70%",
      display: "flex",
      flexDirection: "column",
      justifySelf: "center",

      gap: "20px",
      background: "#F5F5F5",
    },
    cards_box: {
      display: "flex",
      flexDirection:
        screenLessThan_768 || screenGreater_769LessThan1024 ? "column" : "row",
      justifyContent: screenGreater_1024LessThan1280
        ? "space-around"
        : "center",
      gap: "20px",
      width: screenLessThan_768
        ? "80%"
        : screenGreater_769LessThan1024
        ? "60%"
        : screenGreater_1280LessThan1366
        ? "100%"
        : "80%",
      alignSelf: "center",
    },

    card_single: {
      width: "100%",
    },
    recently_box: {
      width: "90%",
      display: "flex",
      alignSelf: "center",
      justifyContent: "center",
    },
    heading_typography: {
      fontSize:
        screenLessThan_768 || screenGreater_769LessThan1024
          ? "22px"
          : screenGreater_1024LessThan1280
          ? "30px"
          : "36px",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundImage: "linear-gradient(to right, #000, green)",
      marginLeft: "10px",
      marginTop: "30px",
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
