"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery, Typography, Box } from "@mui/material";

import WeatherCard from "../components/WeatherCard";
import DriverStat from "../components/DriverStat";
import AvailableJobs from "../components/AvailableJobs";
import RecentActivity from "../components/RecentActivity";

const OperatorHome = () => {
  const [loading, setLoading] = useState(undefined);
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

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading === undefined) {
    return <div>Loading...</div>;
  }

  const styles = {
    parent_box: {
      // border: "solid blue 2px",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
      justifySelf: screenGreaterThan1920LessThan3840 ? "center" : "",
    },
    cards_box: {
      // border: "solid green 2px",
      display: "flex",
      flexDirection:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "column"
          : "row",
      gap: screenGreaterThan1024LessThan1280
        ? "80px"
        : screenGreaterThan1280LessThan1366 ||
          screenGreaterThan1366LessThan1440 ||
          screenGreaterThan1440LessThan1920 ||
          screenGreaterThan1920LessThan3840
        ? "100px"
        : "25px",
      alignSelf:
        screenGreaterThan1024LessThan1280 ||
        screenGreaterThan1280LessThan1366 ||
        screenGreaterThan1366LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "center"
          : "",
    },
    heading_typography: {
      fontSize: screenLessThan430
        ? "24px"
        : screenGreaterThan430LessThan768 || screenGreaterThan768LessThan1024
        ? "26px"
        : screenGreaterThan1024LessThan1280
        ? "28px"
        : screenGreaterThan1280LessThan1366 || screenGreaterThan1366LessThan1440
        ? "30px"
        : screenGreaterThan1440LessThan1920
        ? "32px"
        : "36px",
      textAlign:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024 ||
        screenGreaterThan1024LessThan1280 ||
        screenGreaterThan1280LessThan1366 ||
        screenGreaterThan1366LessThan1440 ||
        screenGreaterThan1440LessThan1920 ||
        screenGreaterThan1920LessThan3840
          ? "center"
          : "",
      // border: "solid red 2px",
      marginTop: "30px",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "75%"
        : screenGreaterThan768LessThan1024 || screenGreaterThan1024LessThan1280
        ? "55%"
        : screenGreaterThan1280LessThan1366 || screenGreaterThan1366LessThan1440
        ? "50%"
        : screenGreaterThan1440LessThan1920 || screenGreaterThan1920LessThan3840
        ? "65%"
        : "100%",
      paddingLeft: screenLessThan430 ? "10px" : "",
    },
    recently_box: {
      // border: "solid green 2px",
      display: "flex",
      alignSelf: "center",
      width: screenLessThan430
        ? "94%"
        : screenGreaterThan430LessThan768
        ? "80%"
        : screenGreaterThan768LessThan1024 ||
          screenGreaterThan1024LessThan1280 ||
          screenGreaterThan1280LessThan1366 ||
          screenGreaterThan1366LessThan1440 ||
          screenGreaterThan1440LessThan1920
        ? "80%"
        : screenGreaterThan1920LessThan3840
        ? "70%"
        : "100%",
    },
  };
  return (
    <>
      <Box sx={styles.parent_box}>
        <Typography variant="body1" sx={styles.heading_typography}>
          Good Afternoon,{" "}
          <span style={{ fontWeight: "bold", color: "#009737" }}>
            Yonatan Haddish
          </span>
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
