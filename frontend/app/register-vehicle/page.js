"use client";
import React, { useState } from "react";
import TextField, { textFieldClasses } from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";
<<<<<<< HEAD
import { Typography, Box, useMediaQuery } from "@mui/material";
=======
import { Typography, useMediaQuery } from "@mui/material";
>>>>>>> ffe65fb37d36a0a239df5d8026973fd093055066
import BasicButtons from "../components/BasicButton";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import {
  RegisterUserForm,
  RegisterVehicleForm,
  GetUserVehicleInfo,
} from "../components/RegisterForm";

function page() {
  const [viewForm, setViewForm] = useState("vehicle-page");

<<<<<<< HEAD
  const screenLessThan768 = useMediaQuery(
    "(min-width: 100px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1366 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1366px)"
=======
  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const screenGreaterThan430LessThan1280 = useMediaQuery(
    "(min-width: 431px) and (max-width: 1280px)"
  );
  const screenGreaterThan1280LessThan1440 = useMediaQuery(
    "(min-width: 1280px) and (max-width: 1440px)"
>>>>>>> ffe65fb37d36a0a239df5d8026973fd093055066
  );

  const styles = {
    cardContent: {
<<<<<<< HEAD
      border: "solid green 2px",
      width: screenLessThan768
        ? "96%"
        : screenGreaterThan768LessThan1366
        ? "90%"
        : "30%",
=======
      // border: "solid blue 2px",
      width: screenLessThan430
        ? "96%"
        : screenGreaterThan430LessThan1280
        ? "60%"
        : screenGreaterThan1280LessThan1440
        ? "40%"
        : "40%",
>>>>>>> ffe65fb37d36a0a239df5d8026973fd093055066
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      paddingBottom: "40px",
<<<<<<< HEAD
      // marginTop: "30px",
      justifySelf: "center",
=======
      paddingTop: "30px",
      // justifySelf: "center",
      margin: "0 auto",
>>>>>>> ffe65fb37d36a0a239df5d8026973fd093055066
    },
    headingContent: {
      border: "solid blue 2px",
      width: "90%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignSelf: "center",
      marginTop: "30px",
    },
    typoCompany: {
      border: "solid red 2px",
      fontSize: "20px",
    },
  };

  const handleUserPageChange = (data) => {
    setViewForm(data);
  };
  const handleVehiclePageChange = (data) => {
    setViewForm(data);
  };
  const handleEditPageChange = (data) => {
    setViewForm(data);
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
        {viewForm === "vehicle-page" && (
          <RegisterVehicleForm onPageChangeVehicle={handleVehiclePageChange} />
        )}
        {viewForm == "user-page" && (
          <RegisterUserForm onPageChange={handleUserPageChange} />
        )}
        {viewForm == "submit-page" && (
          <GetUserVehicleInfo onPageUpateButton={handleEditPageChange} />
        )}
      </Box>
    </>
  );
}

export default page;
