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
    },
    searchFilterJobs: {
      // border: "solid red 2px",
    },
    searchFilter: {
      border: "solid green 2px",
      display: "flex",
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
          <Typography>Total Jobs: 100</Typography>
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
