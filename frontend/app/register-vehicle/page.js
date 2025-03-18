"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField, { textFieldClasses } from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";
import { Typography } from "@mui/material";
import BasicButtons from "../components/BasicButton";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { RegisterUserForm } from "../components/RegisterForm";
// import { RegisterVehicleForm } from "../components/RegisterForm";

import {
  RegisterUserForm,
  RegisterVehicleForm,
  GetUserVehicleInfo,
} from "../components/RegisterForm";

function page({ sendButtonStateToParent }) {
  const [viewForm, setViewForm] = useState("user-page");

  const styles = {
    cardContent: {
      // border: "solid #e1fceb 2px",
      // borderTop: "solid green 2px",
      //   paddingTop: "10px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      paddingBottom: "40px",
      // marginLeft: "20px",
      marginTop: "15px",
      // backgroundImage:
      //   "linear-gradient(to bottom, green, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff)",
    },
    headingContent: {
      width: "90%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignSelf: "center",
    },
    textFieldBox: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      gap: "15px",
    },
    textField: {
      // width: "90%",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    boxButton: {
      // border: "solid red 2px",
      marginTop: "10px",
      height: "50px",
    },
    textField1: {
      // backgroundColor: "#f5fff9",
      "& .MuiInputLabel-root": { color: "black" },
      "& .MuiInputLabel-root.Mui-focused": { color: "black" },
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "gray" },
        "&:hover fieldset": { borderColor: "black" },
        "&.Mui-focused fieldset": {
          borderColor: "gray",
          //   backgroundColor: "#e1fceb",
        },
      },
    },
    typoCompany: {
      fontWeight: "bold",
    },
    job_id: {
      borderBottom: "green solid 2px",
    },
    buttonUploadDL: {
      //   border: "solid red 3px",
      //   backgroundColor: "red",
    },
  };

  const handleUserPageChange = (data) => {
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
        {viewForm === "vehicle-page" && <RegisterVehicleForm />}
        {viewForm == "user-page" && (
          <RegisterUserForm onPageChange={handleUserPageChange} />
        )}
        {viewForm == "submit-page" && <GetUserVehicleInfo />}
      </Box>
    </>
  );
}

export default page;
