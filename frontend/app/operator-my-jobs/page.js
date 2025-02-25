import React from "react";
import AcceptedJobs from "../components/AcceptedJobs";
import { Box } from "@mui/material";
const MyJobs = () => {
  const styles = {
    cardParent: {
      border: "solid blue 2px",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "60px",
      justifyContent: "space-evenly",
      paddingTop: "80px",
      paddingBottom: "100px",
    },
  };

  return (
    <Box sx={styles.cardParent}>
      <AcceptedJobs />
      <AcceptedJobs />
      <AcceptedJobs />
      <AcceptedJobs />
      <AcceptedJobs />
      <AcceptedJobs />
      <AcceptedJobs />
      <AcceptedJobs />
    </Box>
  );
};
export default MyJobs;
