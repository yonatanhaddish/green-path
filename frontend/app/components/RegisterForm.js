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
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

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
  buttonInVehicleClass: {
    // border: "solid red 2px",
    display: "flex",
    gap: "150px",
  },
  buttonEditSubmitForm: {
    backgroundColor: "#000",
    color: "white",
    width: "120px",
    height: "40px",
    fontSize: "15px",
  },
  boxGetUserVehicleInfo: {
    // border: "solid red 2px",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    gap: "40px",
  },
  buttonSumbit: {
    // border: "solid red 2px",
    width: "80%",
    height: "45px",
    fontSize: "15px",
  },
};

export function RegisterUserForm({ onPageChange }) {
  const [buttonState, setButtonState] = useState("user-page");

  const handleUserFormNext = () => {
    const newState = "vehicle-page";
    setButtonState(newState);
    onPageChange(newState);
  };

  return (
    <>
      <Box sx={styles.textFieldBox}>
        <Box sx={styles.textField}>
          <TextField
            required
            id="full-name"
            label="Full Name"
            fullWidth
            sx={styles.textField1}
          />
          <TextField
            required
            id="email-address"
            label="Email Address"
            type="email"
            fullWidth
            sx={styles.textField1}
          />
        </Box>
        <Box sx={styles.textField}>
          <TextField
            id="phone-number"
            label="Phone Number"
            type="number"
            fullWidth
            sx={styles.textField1}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={styles.textField}>
              <DemoContainer components={["DateField"]}>
                <DateField
                  label="Date of birth"
                  fullWidth
                  sx={styles.textField1}
                />
              </DemoContainer>
            </Box>
          </LocalizationProvider>
        </Box>
        <Box sx={styles.textField}>
          <TextField
            id="home-address"
            label="Home Address"
            fullWidth
            sx={styles.textField1}
          />
          <TextField
            id="city"
            label="City"
            //   type="date"
            fullWidth
            sx={styles.textField1}
          />
          <TextField
            id="postal-code"
            label="Postal Code"
            //   type="date"
            fullWidth
            sx={styles.textField1}
          />
        </Box>
        <Box sx={styles.buttonUploadDL}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#5b665f",

              // height: {
              //   md: "30px",
              // },
              fontSize: {
                md: "8px",
              },
              width: {
                xs: "70%",
              },
            }}
          >
            Upload Driving License Here{" "}
          </Button>
        </Box>
        <Box sx={styles.boxButton} onClick={handleUserFormNext}>
          <BasicButtons message="Next" />
        </Box>
      </Box>
    </>
  );
}
export function RegisterVehicleForm({ onPageChangeVehicle }) {
  const [buttonStateVehicle, setButtonStateVehicle] = useState("vehicle-page");

  const handleNextButton = () => {
    const newState = "submit-page";
    setButtonStateVehicle(newState);
    onPageChangeVehicle(newState);
  };
  const handleBackButton = () => {
    const newState = "user-page";
    setButtonStateVehicle(newState);
    onPageChangeVehicle(newState);
  };

  return (
    <>
      <Box sx={styles.textFieldBox}>
        <Box sx={styles.textField}>
          <TextField
            required
            id="vehicle-type"
            label="Vehicle Type"
            fullWidth
            sx={styles.textField1}
          />
          <TextField
            required
            id="vehicle-make"
            label="Make"
            fullWidth
            sx={styles.textField1}
          />
          <TextField
            required
            id="vehicle-model"
            label="Model"
            fullWidth
            sx={styles.textField1}
          />
          <TextField
            required
            id="vehicle-year"
            label="Year"
            fullWidth
            sx={styles.textField1}
          />

          <TextField
            required
            id="license-plate"
            label="License Plate Number"
            fullWidth
            sx={styles.textField1}
          />
          <TextField
            required
            id="vehicle-color"
            label="Color"
            fullWidth
            sx={styles.textField1}
          />
          <TextField
            required
            id="vehicle-sizer"
            label="Cargo Size (optional)"
            fullWidth
            sx={styles.textField1}
          />
        </Box>

        <Box sx={styles.buttonUploadDL}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#000",

              // height: {
              //   md: "30px",
              // },
              fontSize: {
                md: "8px",
              },
              width: {
                xs: "80%",
              },
            }}
          >
            Upload Driver Abstract{" "}
          </Button>
        </Box>
        <Box sx={styles.buttonUploadDL}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#000",

              // height: {
              //   md: "30px",
              // },
              fontSize: {
                md: "8px",
              },
              width: {
                xs: "80%",
              },
            }}
          >
            Upload Vehicle Insurance{" "}
          </Button>
        </Box>
        <Box sx={styles.buttonUploadDL}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#000",

              // height: {
              //   md: "30px",
              // },
              fontSize: {
                md: "8px",
              },
              width: {
                xs: "80%",
              },
            }}
          >
            Upload Background check{" "}
          </Button>
        </Box>
        <Box sx={styles.boxButton}>
          <Box sx={styles.buttonInVehicleClass}>
            <Box onClick={handleBackButton}>
              <BasicButtons message="Back" />
            </Box>
            <Box onClick={handleNextButton}>
              {" "}
              <BasicButtons message="Next" />
            </Box>
          </Box>
        </Box>
      </Box>
      ;
    </>
  );
}
export function GetUserVehicleInfo({ onPageUpateButton }) {
  const [submitButtonState, setSubmitButtonState] = useState("submit-page");

  const handleUpdateFormButton = () => {
    const newState = "user-page";
    setSubmitButtonState(newState);
    onPageUpateButton(newState);
  };
  return (
    <Box sx={styles.boxGetUserVehicleInfo}>
      <Card sx={{ minWidth: 275, paddingBottom: "30px", paddingTop: "10px" }}>
        <CardContent>
          <Typography color="text.primary">
            Full Name: <span style={{ fontWeight: "bold" }}>Bruce Wills</span>
          </Typography>
          <Typography color="text.primary">
            Email Address:{" "}
            <span style={{ fontWeight: "bold" }}>die_hard@email.com</span>
          </Typography>
          <Typography color="text.primary">
            Phone Number:{" "}
            <span style={{ fontWeight: "bold" }}>324-443-2212</span>
          </Typography>
          <Typography color="text.primary">
            Date of Birth:{" "}
            <span style={{ fontWeight: "bold" }}>March 10, 1989</span>
          </Typography>
          <Typography color="text.primary">
            Home Address:{" "}
            <span style={{ fontWeight: "bold" }}>123 Wellington Avenue</span>
          </Typography>
          <Typography color="text.primary">
            City/Town: <span style={{ fontWeight: "bold" }}>Toronto</span>
          </Typography>
          <Typography color="text.primary">
            Postal Code: <span style={{ fontWeight: "bold" }}>M1L 1L1</span>
          </Typography>
          <Typography color="text.primary">
            Vehicle Type: <span style={{ fontWeight: "bold" }}>Mini Van</span>
          </Typography>
          <Typography color="text.primary">
            Vehicle Make: <span style={{ fontWeight: "bold" }}>Dodge</span>
          </Typography>
          <Typography color="text.primary">
            Vehicle Model: <span style={{ fontWeight: "bold" }}>Caravana</span>
          </Typography>
          <Typography color="text.primary">
            Vehicle Year: <span style={{ fontWeight: "bold" }}>2021</span>
          </Typography>
          <Typography color="text.primary">
            Vehicle License Plate:{" "}
            <span style={{ fontWeight: "bold" }}>CRTY326</span>
          </Typography>
          <Typography color="text.primary">
            Vehicle Color <span style={{ fontWeight: "bold" }}>white</span>
          </Typography>
          <Typography color="text.primary">
            Vehicle Size: <span style={{ fontWeight: "bold" }}>N/A</span>
          </Typography>{" "}
          <Typography color="text.primary">
            Driving License:{" "}
            <span style={{ fontWeight: "bold" }}>uploaded</span>
          </Typography>
          <Typography color="text.primary">
            Vehicle Inspection:{" "}
            <span style={{ fontWeight: "bold" }}>uploaded</span>
          </Typography>
          <Typography color="text.primary">
            Driver Abstract:{" "}
            <span style={{ fontWeight: "bold" }}>uploaded</span>
          </Typography>
          <Typography color="text.primary">
            Vehicle Insurance:{" "}
            <span style={{ fontWeight: "bold" }}>uploaded</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            sx={styles.buttonEditSubmitForm}
            onClick={handleUpdateFormButton}
          >
            Update
          </Button>
        </CardActions>
      </Card>
      <Box sx={styles.buttonSumbit}>
        <BasicButtons message="SUBMIT" />
      </Box>
    </Box>
  );
}
