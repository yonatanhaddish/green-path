"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, useMediaQuery } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

export default function WeatherCard() {
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
    parent_box: {
      background: temperatureStyle,
      border: "none",
      // border: "solid green 2px",
      display: "flex",
      flexDirection:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "row"
          : screenGreaterThan1024LessThan1280 ||
            screenGreaterThan1280LessThan1366 ||
            screenGreaterThan1366LessThan1440 ||
            screenGreaterThan1440LessThan1920
          ? "column-reverse"
          : "column-reverse",
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
      justifyContent: "space-around",
    },
    parent_card: {
      // border: "solid blue 2px",
      width: screenLessThan430
        ? "50%"
        : screenGreaterThan430LessThan768
        ? "50%"
        : screenGreaterThan1024LessThan1280
        ? "100%"
        : "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignSelf: "center",
    },
    icon_box: {
      // border: "solid red 2px",
      width: screenLessThan430
        ? "50%"
        : screenGreaterThan430LessThan768
        ? "50%"
        : screenGreaterThan1024LessThan1280
        ? "100%"
        : "100%",
      alignSelf: "center",
      textAlign: "center",
    },
    typo_degree: {
      fontSize: screenLessThan430
        ? "45px"
        : screenGreaterThan430LessThan768
        ? "50px"
        : screenGreaterThan768LessThan1024
        ? "55px"
        : screenGreaterThan1024LessThan1280
        ? "55px"
        : screenGreaterThan1280LessThan1366 ||
          screenGreaterThan1366LessThan1440 ||
          screenGreaterThan1440LessThan1920
        ? "55px"
        : "60px",
    },
    typo_date: {
      fontWeight: "bold",
      // border: "solid red 2px",
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
    typo_city: {
      fontWeight: "bold",
    },
    typo_weather_type: {
      fontWeight: "bold",
    },
  };

  useEffect(() => {
    const temperature = 40; // example value
    const bg =
      temperature > 30
        ? "linear-gradient(to right, white, white, #FFF176)"
        : "linear-gradient(to right, white, white, rgb(118, 166, 255))";
    setTemperatureStyle(bg);
  }, []);

  const card = (
    <CardContent sx={styles.parent_box}>
      <Box sx={styles.parent_card}>
        <Typography sx={styles.typo_date}>14-February-2025</Typography>
        <Typography sx={styles.typo_degree}>40°C</Typography>
        <Typography sx={styles.typo_city}>Toronto, Canada</Typography>
        <Typography sx={styles.typo_weather_type}>Sunny</Typography>
      </Box>
      <Box sx={styles.icon_box}>
        <LightModeOutlinedIcon sx={{ fontSize: 100 }} />
      </Box>
    </CardContent>
  );

  return (
    <Box sx={styles.single_card}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
