"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField, { textFieldClasses } from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";
import { Typography, useMediaQuery } from "@mui/material";
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
