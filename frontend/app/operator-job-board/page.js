"use client";

import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import { useMediaQuery, Box, Typography } from "@mui/material";
import Filter from "../components/Filter";
import JobCard from "../components/JobCard";

const JobBoard = () => {
  const [loading, setLoading] = useState(undefined);

  const screenGreater_1024LessThan1280 = useMediaQuery(
    "(min-width: 100px) and (max-width: 900px)"
  );
  const screenGreaterThan_2560 = useMediaQuery("(max-width:1920px)");
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
      // border: "solid red 2px",
      width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
      display: "flex",
      flexDirection: "column",
      paddingTop: "30px",
      gap: "50px",
      background: "#F5F5F5",
      justifySelf: "center",
    },
    cards_box: {
      width: screenGreaterThan_2560 ? "90%" : "75%",
      // width: "90%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignSelf: "center",
      justifyContent: "space-evenly",
      gap: "30px",
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
      width: screenGreater_1024LessThan1280 ? "95%" : "40%",
      display: "flex",
      alignSelf: "flex-end",
      gap: "20px",
      marginRight: "20px",
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
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Box>
    </Box>
  );
};
export default JobBoard;
