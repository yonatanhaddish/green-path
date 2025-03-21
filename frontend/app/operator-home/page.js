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

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading === undefined) {
    return <div>Loading...</div>;
  }

  const styles = {
    parent_box: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      // alignItems: "center",
      // justifySelf: "center",
      // paddingTop: "30px",

      gap: "20px",
      background: "#F5F5F5",
      // border: "solid red 2px",
    },
    cards_box: {
      display: "flex",
      flexDirection: "column",
      // flexDirection:
      //   screnLessThan_768 || screenGreater_769LessThan1024 ? "column" : "row",
      // justifyContent: "space-around",
      // alignItems: "center",
      gap: "20px",
      width: screenLessThan_768 ? "80%" : "70%",
      alignSelf: "center",
      // border: "solid green 2px",
    },

    card_single: {
      // width: screenLessThan_768 ? "85%" : "25%",
    },
    recently_box: {
      width: "90%",
      display: "flex",
      alignSelf: "center",
      // border: "solid red 2px",
    },
    heading_typography: {
      // width: "90%",
      fontSize:
        screenLessThan_768 || screenGreater_769LessThan1024 ? "22px" : "",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundImage: "linear-gradient(to right, #000, green)",
      marginLeft: "10px",
      marginTop: "30px",
      // border: "solid red 2px",
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
