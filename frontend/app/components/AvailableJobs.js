"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  Typography,
  useMediaQuery,
  Button,
  CardContent,
  Card,
  Box,
} from "@mui/material";
import BasicButtons from "./BasicButton";

export default function AvailableJobs(props) {
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
      border: "solid green 2px",
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
      justifyContent: "space-around",
    },
    single_card: {
      // border: "solid pink 2px",
      width: screenLessThan430
        ? "85%"
        : screenGreaterThan430LessThan768
        ? "50%"
        : screenGreaterThan768LessThan1024
        ? "60%"
        : screenGreaterThan1024LessThan1280
        ? "20%"
        : screenGreaterThan1280LessThan1366 || screenGreaterThan1366LessThan1440
        ? "20%"
        : screenGreaterThan1440LessThan1920
        ? "18%"
        : "15%",
      margin:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "0 auto"
          : "",
    },
    typo_avail: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#009737",
    },
    typo_available_jobs: {
      fontSize: "35px",
    },
    button_view_board: {
      // border: "solid red 2px",
      backgroundColor: "#000",
      color: "#fff",
      width:
        screenLessThan430 || screenGreaterThan430LessThan768
          ? "80%"
          : screenGreaterThan768LessThan1024
          ? "50%"
          : "100%",
      height: "40px",
    },
  };
  const card = (
    <React.Fragment>
      <CardContent sx={styles.cardContent}>
        <Typography sx={styles.typo_avail}>Available Jobs</Typography>
        <Typography sx={styles.typo_available_jobs}>15</Typography>{" "}
        <Link href="/operator-job-board">
          <Button sx={styles.button_view_board}>View Job Board</Button>
        </Link>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={styles.single_card}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
