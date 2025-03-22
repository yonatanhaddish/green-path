"use client";
import React from "react";
import AcceptedJobs from "../components/AcceptedJobs";
import RecentActivity from "../components/RecentActivity";
import { Box, Typography, useMediaQuery } from "@mui/material";
const MyJobs = () => {
  const screenGreaterThan_2560 = useMediaQuery("(min-width:1280px)");

  const styles = {
    cardParent: {
      // border: "solid red 2px",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
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
      // border: "solid blue 2px",
      fontSize: "24px",
    },
    totalJobsTypography: {
      // border: "solid purple 2px",
      fontSize: "16px",
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
      width: "100%",
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
          You have 7 Jobs to do.
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
