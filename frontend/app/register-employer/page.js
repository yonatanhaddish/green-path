"use client";

import React from "react";
import { Typography, Box } from "@mui/material";
import { RegisterEmployer } from "../components/RegisterForm";

function page() {
  const styles = {
    cardContent: {
      //   border: "solid red 2px",
      width: "90%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      paddingBottom: "40px",
      marginTop: "30px",
      justifySelf: "center",
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
