"use client";

import React from "react";
import Search from "../components/Search";
import { Box, Typography } from "@mui/material";
import Filter from "../components/Filter";
import JobCard from "../components/JobCard";

const JobBoard = () => {
  return (
    <Box>
      <Box>
        <Search />
        <Filter />
        <Typography>Total Jobs: 100</Typography>
      </Box>
      <Box>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Box>
    </Box>
  );
};
export default JobBoard;
