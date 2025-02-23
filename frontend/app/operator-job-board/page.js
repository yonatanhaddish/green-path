"use client";

import React from "react";
import Search from "../components/Search";
import { useMediaQuery, Box, Typography } from "@mui/material";
import Filter from "../components/Filter";
import JobCard from "../components/JobCard";

const JobBoard = () => {
  const styles = {
    parent_box: {
      // border: "solid red 2px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      paddingTop: "30px",
      gap: "20px",
      background: "#F5F5F5",
    },
    cards_box: {
      // border: "solid green 2px",
      width: {
        xs: "100%",
        sm: "80%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "40px",
      paddingBottom: "100px",
    },
    searchFilterJobs: {
      // border: "solid red 2px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    searchFilter: {
      // border: "solid green 2px",
      width: "100%",
      display: "flex",
      gap: "20px",
    },
    totalJobs: {
      // border: "solid blue 2px",
      width: "92%",
      display: "flex",
      justifyContent: "flex-end",
      fontSize: "16px",
      color: "blue",

      // marginLeft: "20px",
    },
  };
  return (
    <Box sx={styles.parent_box}>
      <Box sx={styles.searchFilterJobs}>
        <Box sx={styles.searchFilter}>
          <Search />
          <Filter />
        </Box>
        <Box>
          <Typography sx={styles.totalJobs}>Total Jobs: 100</Typography>
        </Box>
      </Box>
      <Box sx={styles.cards_box}>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Box>
    </Box>
  );
};
export default JobBoard;
