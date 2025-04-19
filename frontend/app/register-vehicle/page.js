"use client";
import React, { useState } from "react";
import TextField, { textFieldClasses } from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";
import { Box, Typography, useMediaQuery } from "@mui/material";
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
  const [viewForm, setViewForm] = useState("user-page");
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
