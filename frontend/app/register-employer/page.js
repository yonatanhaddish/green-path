"use client";

import React from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import { RegisterEmployer } from "../components/RegisterForm";

function page() {
  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const screenGreaterThan430LessThan1280 = useMediaQuery(
    "(min-width: 431px) and (max-width: 1280px)"
  );
  const screenGreaterThan1280LessThan1440 = useMediaQuery(
    "(min-width: 1280px) and (max-width: 1440px)"
  );
  const styles = {
    cardContent: {
      // border: "solid blue 2px",
      width: screenLessThan430
        ? "96%"
        : screenGreaterThan430LessThan1280
        ? "60%"
        : screenGreaterThan1280LessThan1440
        ? "40%"
        : "40%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      paddingBottom: "40px",
      paddingTop: "30px",
      // justifySelf: "center",
      margin: "0 auto",
    },
    headingContent: {
      //   border: "solid red 2px",
      width: "90%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignSelf: "center",
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
