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
    cards_box: {
      // border: "solid green 2px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
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
