"use client";

import React from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import { RegisterEmployer } from "../components/RegisterForm";

function page() {
  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const screenGreaterThan430LessThan768 = useMediaQuery(
    "(min-width: 431px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1024 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const screenGreaterThan1024LessThan1366 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1366px)"
  );
  const screenGreaterThan1366 = useMediaQuery("(min-width: 1366px)");

  const styles = {
    cardContent: {
      border: "solid #000 2px",
      boxShadow: "0 0 10px #000",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "60%"
        : screenGreaterThan768LessThan1024
        ? "55%"
        : screenGreaterThan1024LessThan1366
        ? "30%"
        : screenGreaterThan1366
        ? "450px"
        : "20%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      paddingTop: "40px",
      marginTop: screenLessThan430
        ? "20px"
        : screenGreaterThan430LessThan768
        ? "20px"
        : screenGreaterThan768LessThan1024
        ? "50px"
        : screenGreaterThan1024LessThan1366
        ? "20px"
        : screenGreaterThan1366
        ? "50px"
        : "",
    },
    headingContent: {
      width: "90%",
      alignSelf: "center",
    },
    typoCompany: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#009737",
    },
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={styles.cardContent}
      >
        <Box sx={styles.headingContent}>
          <Typography sx={styles.typoCompany}>Welcome to Green Path</Typography>
        </Box>
        <Box>
          <RegisterEmployer />
        </Box>
      </Box>
    </>
  );
}

export default page;
