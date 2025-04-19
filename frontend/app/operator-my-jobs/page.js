"use client";
import React from "react";
import AcceptedJobs from "../components/AcceptedJobs";
import RecentActivity from "../components/RecentActivity";
import { Box, Typography, useMediaQuery } from "@mui/material";
const MyJobs = () => {
  const screenGreaterThan_2560 = useMediaQuery("(min-width:1280px)");
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
    cardParent: {
      // border: "solid red 2px",
      width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      justifySelf: "center",
    },
    boxTypography: {
      // border: "solid green 2px",
      width: "90%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      marginLeft: "20px",
      marginTop: "30px",
    },
    greetingTypography: {
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
    },
    totalJobsTypography: {
      // border: "solid purple 2px",
      fontSize: "16px",
      fontWeight: "bold",
    },
    cardAcceptedJobs: {
      // border: "solid blue 2px",
      width: screenGreaterThan_2560 ? "85%" : "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "30px",
      justifyContent: "space-around",
      alignSelf: "center",
      // paddingTop: "80px",
      // paddingBottom: "100px",
    },
    recentlyActivity: {
      // border: "solid green 2px",
      width: screenLessThan430
        ? "95%"
        : screenGreaterThan430LessThan768 ||
          screenGreaterThan768LessThan1024 ||
          screenGreaterThan1024LessThan1280
        ? "90%"
        : screenGreaterThan1280LessThan1366 ||
          screenGreaterThan1366LessThan1440 ||
          screenGreaterThan1440LessThan1920
        ? "85%"
        : "90%",
      display: "flex",
      justifyContent: "center",
      alignSelf: "center",
    },
  };

  return (
    <Box sx={styles.cardParent}>
      <Box sx={styles.boxTypography}>
        <Typography sx={styles.greetingTypography}>
          Good Morning, Yonatan
        </Typography>
        <Typography sx={styles.totalJobsTypography}>
          You have 8 Jobs to do.
        </Typography>
      </Box>
      <Box sx={styles.cardAcceptedJobs}>
        <AcceptedJobs />
        <AcceptedJobs />
        <AcceptedJobs />
        <AcceptedJobs />
        <AcceptedJobs />
        <AcceptedJobs />
        <AcceptedJobs />
        <AcceptedJobs />
      </Box>
      <Box sx={styles.recentlyActivity}>
        <RecentActivity />
      </Box>
    </Box>
  );
};
export default MyJobs;
