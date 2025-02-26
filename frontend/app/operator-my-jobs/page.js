import React from "react";
import AcceptedJobs from "../components/AcceptedJobs";
import RecentActivity from "../components/RecentActivity";
import { Box } from "@mui/material";
const MyJobs = () => {
  const styles = {
    cardParent: {
      // border: "solid red 2px",
    },
    cardAcceptedJobs: {
      // border: "solid blue 2px",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "60px",
      justifyContent: "space-evenly",
      paddingTop: "80px",
      paddingBottom: "100px",
    },
    recentlyActivity: {
      // border: "solid green 2px",
      width: "90%",
      display: "flex",
      justifyContent: "center",
    },
  };

  return (
    <Box sx={styles.cardParent}>
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
