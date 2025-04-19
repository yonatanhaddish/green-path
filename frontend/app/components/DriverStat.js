"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography, useMediaQuery } from "@mui/material";

export default function DriverStat() {
  const [temperatureStyle, setTemperatureStyle] = useState("");
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
    cardContent: {
      // border: "solid green 2px",
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      height: screenLessThan430
        ? "130px"
        : screenGreaterThan430LessThan768
        ? "140px"
        : screenGreaterThan768LessThan1024
        ? "140px"
        : screenGreaterThan1024LessThan1280
        ? "250px"
        : screenGreaterThan1280LessThan1366
        ? "250px"
        : screenGreaterThan1366LessThan1440 || screenGreaterThan1440LessThan1920
        ? "250px"
        : "350px",
    },
    single_card: {
      // border: "solid #009737 1px",
      boxShadow: "0 0 10px #000",
      width: screenLessThan430
        ? "85%"
        : screenGreaterThan430LessThan768
        ? "50%"
        : screenGreaterThan768LessThan1024
        ? "60%"
        : screenGreaterThan1024LessThan1280
        ? "250px"
        : screenGreaterThan1280LessThan1366 || screenGreaterThan1366LessThan1440
        ? "250px"
        : screenGreaterThan1440LessThan1920
        ? "250px"
        : "300px",
      margin:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "0 auto"
          : "",
    },
    typo_stat: {
      fontWeight: "bold",
      color: "#009737",
      marginBottom: "10px",
      minHeight: "",
      fontSize: screenGreaterThan1920LessThan3840 ? "26px" : "18px",
      borderBottom: "solid #000 1px",
    },
    typo_trips: {
      fontWeight: "bold",
    },
    typo_distance: {
      fontWeight: "bold",
    },
    typo_rating: {
      fontWeight: "bold",
    },
  };

  const card = (
    <React.Fragment>
      <CardContent sx={styles.cardContent}>
        <Typography sx={styles.typo_stat}>Driver Statistics</Typography>
        <Typography sx={styles.typo_trips}>
          Total Trips Completed: <span>46</span>
        </Typography>{" "}
        <Typography sx={styles.typo_distance}>
          Total Distance Driven: <span>1200 Kms</span>
        </Typography>
        <Typography sx={styles.typo_rating}>
          Rating: <span>4.85 / 5</span>
        </Typography>{" "}
      </CardContent>
    </React.Fragment>
  );
  return (
    <Box sx={styles.single_card}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
