"use client";
import React, { useState, useEffect } from "react";
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
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const styles = {
  cardContent: {
    // border: "solid blue 10px",
    // borderTop: "solid green 2px",
    //   paddingTop: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    paddingBottom: "40px",
    // marginLeft: "20px",
    marginTop: "15px",
    // border: "solid green 2px",
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
    // border: "solid red 2px",
  },
  textField: {
    // width: "90%",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  boxButton: {
    marginTop: "10px",
    display: "flex",
    height: "45px",
    gap: "20px",
  },
  textField1: {
    // backgroundColor: "#f5fff9",
    "& .MuiInputLabel-root": { color: "black" },
    "& .MuiInputLabel-root.Mui-focused": { color: "black" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "gray" },
      "&:hover fieldset": { borderColor: "black" },
      "&.Mui-focused fieldset": {
        borderColor: "green",

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
    width: "100%",
  },
  buttonInVehicleClass: {
    border: "solid red 2px",
    display: "flex",
    displayDirection: "column",
    // justifyContent: "space-around",
  },
  buttonEditSubmitForm: {
    backgroundColor: "#000",
    color: "white",
    width: "140px",
    height: "40px",
    fontSize: "15px",
  },
  boxGetUserVehicleInfo: {
    // border: "solid red 2px",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    gap: "40px",
  },
  buttonSumbit: {
    // border: "solid red 2px",
    width: "100%",
    height: "45px",
    fontSize: "15px",
  },
};

export function RegisterUserForm({ onPageChange }) {
  const [buttonState, setButtonState] = useState("vechicle-page");
  const [fullNameValue, setFullNameValue] = useState("");
  const [emailAddressValue, setEmailAddressValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const [dateOfBirthValue, setDateOfBirthValue] = useState("");
  const [homeAddressValue, setHomeAddressValue] = useState("");
  const [cityTownValue, setCityTownValue] = useState("");
  const [postalCodeValue, setPostalCodeValue] = useState("");
  const [loading, setLoading] = useState(undefined);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading === undefined) {
    return <div>Loading...</div>;
  }

  const handleChangeFullName = (event) => {
    setFullNameValue(event.target.value);
  };
  const handleChangeEmailValue = (event) => {
    setEmailAddressValue(event.target.value);
  };
  const handleChangePhoneNumberValue = (event) => {
    setPhoneNumberValue(event.target.value);
  };
  const handleChangeDOBValue = (event) => {
    setDateOfBirthValue(event.format("MM/DD/YYYY"));
  };
  const handleChangeHomeAddressValue = (event) => {
    setHomeAddressValue(event.target.value);
  };
  const handleChangeCityTownValue = (event) => {
    setCityTownValue(event.target.value);
  };
  const handleChangePostalCodeValue = (event) => {
    setPostalCodeValue(event.target.value);
  };

  console.log({
    fullNameValue,
    emailAddressValue,
    phoneNumberValue,
    dateOfBirthValue,
    homeAddressValue,
    cityTownValue,
    postalCodeValue,
  });

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
            size="small"
            onChange={handleChangeFullName}
          />
          <TextField
            required
            id="email-address"
            label="Email Address"
            type="email"
            fullWidth
            sx={styles.textField1}
            size="small"
            onChange={handleChangeEmailValue}
          />
        </Box>
        <Box sx={styles.textField}>
          <TextField
            id="phone-number"
            label="Phone Number"
            type="number"
            fullWidth
            sx={styles.textField1}
            size="small"
            onChange={handleChangePhoneNumberValue}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={styles.textField}>
              <DemoContainer components={["DateField"]}>
                <DateField
                  id="date-of-birth"
                  label="Date of birth"
                  fullWidth
                  sx={styles.textField1}
                  size="small"
                  onChange={handleChangeDOBValue}
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
            size="small"
            sx={styles.textField1}
            onChange={handleChangeHomeAddressValue}
          />
          <TextField
            id="city"
            label="City"
            size="small"
            fullWidth
            sx={styles.textField1}
            onChange={handleChangeCityTownValue}
          />
          <TextField
            id="postal-code"
            label="Postal Code"
            size="small"
            fullWidth
            sx={styles.textField1}
            onChange={handleChangePostalCodeValue}
          />
        </Box>
        <Box sx={styles.buttonUploadDL}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5b665f",
              width: "100%",
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
  const [vehicleTypeValue, setVehicleTypeValue] = useState("");
  const [vehicleMakeValue, setVehicleMakeValue] = useState("");
  const [vehicleModelValue, setVehicleModelValue] = useState("");
  const [vehicleYearValue, setVehicleYearValue] = useState("");
  const [vehicleLicensePlateValue, setVehicleLicensePlateValue] = useState("");
  const [vehicleColorValue, setVehicleColorValue] = useState("");
  const [vehicleCargoSize, setVehicleCargoSize] = useState("");
  const [loading, setLoading] = useState(undefined);
  const vehicleMakes = ["GMC", "RAM", "Toyota", "Honda", "Ford"];
  const vehicleYears = [];
  const vehicleModels = ["GMC", "RAM", "Toyota", "Honda", "Ford"];
  const vehicleColors = ["Black", "Red", "Green", "Yellow", "Blue"];
  for (let year = 2015; year <= 2025; year++) {
    vehicleYears.push(year);
  }

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading === undefined) {
    return <div>Loading...</div>;
  }

  const handleChangeVehicleType = (event) => {
    setVehicleTypeValue(event.target.value);
  };
  const handleChangeVehicleMake = (evenet) => {
    setVehicleMakeValue(evenet.target.value);
  };
  const handleChangeVehicleModel = (event) => {
    setVehicleModelValue(event.target.value);
  };
  const handleChangeVehicleYear = (event) => {
    setVehicleYearValue(event.target.value);
  };
  const handleLicensePlateNumber = (event) => {
    setVehicleLicensePlateValue(event.target.value);
  };
  const handleChangeVehicleColor = (event) => {
    setVehicleColorValue(event.target.value);
  };
  const handleChangeCargoSize = (event) => {
    setVehicleCargoSize(event.target.value);
  };

  // console.log({
  //   vehicleTypeValue,
  //   vehicleMakeValue,
  //   vehicleModelValue,
  //   vehicleYearValue,
  //   vehicleLicensePlateValue,
  //   vehicleColorValue,
  //   vehicleCargoSize,
  // });

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
          <FormControl fullWidth sx={styles.textField1} size="small">
            <InputLabel id="vehicle-type-select-label">Vehicle Type</InputLabel>
            <Select
              labelId="vehicle-type-select-label"
              id="vehicle-type"
              value={vehicleTypeValue}
              label="Vehicle Type"
              onChange={handleChangeVehicleType}
            >
              <MenuItem value="van">Van</MenuItem>
              <MenuItem value="mini-van">Mini Van</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={styles.textField1} size="small">
            <InputLabel id="vehicle-make-select-label">Vehicle Make</InputLabel>
            <Select
              labelId="vehicle-make-select-label"
              id="vehicle-make"
              value={vehicleMakeValue}
              label="Vehicle Make"
              onChange={handleChangeVehicleMake}
            >
              {vehicleMakes.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={styles.textField1} size="small">
            <InputLabel id="vehicle-model-select-label">
              Vehicle Model
            </InputLabel>
            <Select
              labelId="vehicle-model-select-label"
              id="vehicle-model"
              value={vehicleModelValue}
              label="Vehicle Model"
              onChange={handleChangeVehicleModel}
            >
              {vehicleModels.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={styles.textField1} size="small">
            <InputLabel id="vehicle-year-select-label">Vehicle Year</InputLabel>
            <Select
              labelId="vehicle-year-select-label"
              id="vehicle-year"
              value={vehicleYearValue}
              label="Vehicle Year"
              onChange={handleChangeVehicleYear}
            >
              {vehicleYears.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            required
            id="license-plate"
            label="License Plate Number"
            fullWidth
            sx={styles.textField1}
            size="small"
            onChange={handleLicensePlateNumber}
          />
          <FormControl fullWidth sx={styles.textField1} size="small">
            <InputLabel id="vehicle-color-select-label">
              Vehicle Color
            </InputLabel>
            <Select
              labelId="vehicle-color-select-label"
              id="vehicle-color"
              value={vehicleColorValue}
              label="Vehicle Color"
              onChange={handleChangeVehicleColor}
            >
              {vehicleColors.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            required
            id="vehicle-sizer"
            label="Cargo Size (optional)"
            fullWidth
            sx={styles.textField1}
            size="small"
            onChange={handleChangeCargoSize}
          />
        </Box>
        <Box sx={styles.buttonUploadDL}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5b665f",
              width: "100%",
            }}
          >
            Upload Driver Abstract Here{" "}
          </Button>
        </Box>
        <Box sx={styles.buttonUploadDL}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5b665f",
              width: "100%",
            }}
          >
            Upload Vehicle Insurance Here{" "}
          </Button>
        </Box>
        <Box sx={styles.buttonUploadDL}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5b665f",
              width: "100%",
            }}
          >
            Upload Background check Here{" "}
          </Button>
        </Box>
        <Box sx={styles.boxButton}>
          <Box onClick={handleBackButton} sx={{ width: "100%" }}>
            <BasicButtons message="Back" />
          </Box>
          <Box onClick={handleNextButton} sx={{ width: "100%" }}>
            <BasicButtons message="Next" />
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
      <Card
        sx={{
          minWidth: 275,
          //   paddingBottom: "30px",
          // paddingTop: "10px",
        }}
      >
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
export function RegisterEmployer() {
  const [companyNameValue, setCompanyNameValue] = useState("");
  const [companyAddressValue, setCompanyAddressValue] = useState("");
  const [companyCityValue, setCompanyCityValue] = useState("");
  const [companyPostalCodeValue, setCompanyPostalCodeValue] = useState("");
  const [companyPhoneNumberValue, setCompanyPhoneNumberValue] = useState("");
  const [companyEmailAddressValue, setCompanyEmailAddressValue] = useState("");
  const [companyContactNameValue, setCompanyContactNameValue] = useState("");
  const [companyContactJobTitleValue, setCompanyContactJobTitleValue] =
    useState("");
  const [companyContactPhoneNumberValue, setCompanyContactPhoneNumber] =
    useState("");
  const [companyContactEmailAddressValue, setCompanyContactEmailAddressValue] =
    useState("");
  const [loading, setLoading] = useState(undefined);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading === undefined) {
    return <div>Loading...</div>;
  }

  const handleChangeCompanyName = (event) => {
    setCompanyNameValue(event.target.value);
  };
  const handleChangeCompanyAddress = (event) => {
    setCompanyAddressValue(event.target.value);
  };
  const handleChangeCompanyCity = (event) => {
    setCompanyCityValue(event.target.value);
  };
  const handleChangeCompanyPostalCode = (event) => {
    setCompanyPostalCodeValue(event.target.value);
  };
  const handleChangeCompanyPhoneNumber = (event) => {
    setCompanyPhoneNumberValue(event.target.value);
  };
  const handleChangeCompanyEmail = (event) => {
    setCompanyEmailAddressValue(event.target.value);
  };
  const handleChangeContactName = (event) => {
    setCompanyContactNameValue(event.target.value);
  };
  const handleChangeContactJobTitle = (event) => {
    setCompanyContactJobTitleValue(event.target.value);
  };
  const handleChangeContactPhoneNumber = (event) => {
    setCompanyContactPhoneNumber(event.target.value);
  };
  const handleChangeContactEmailAddress = (event) => {
    setCompanyContactEmailAddressValue(event.target.value);
  };

  console.log({
    companyNameValue,
    companyAddressValue,
    companyCityValue,
    companyPostalCodeValue,
    companyPhoneNumberValue,
    companyEmailAddressValue,
    companyContactNameValue,
    companyContactJobTitleValue,
    companyContactPhoneNumberValue,
    companyContactEmailAddressValue,
  });

  return (
    <>
      <Box sx={styles.textFieldBox}>
        <Box sx={styles.textField}>
          <TextField
            required
            id="company-name"
            label="Company Name"
            fullWidth
            sx={styles.textField1}
            size="small"
            onChange={handleChangeCompanyName}
          />
          <TextField
            required
            id="company-address"
            label="Company Address"
            fullWidth
            size="small"
            sx={styles.textField1}
            onChange={handleChangeCompanyAddress}
          />
          <TextField
            required
            id="city"
            label="City"
            size="small"
            fullWidth
            sx={styles.textField1}
            onChange={handleChangeCompanyCity}
          />
          <TextField
            required
            id="postal-code"
            label="Postal Code"
            size="small"
            fullWidth
            sx={styles.textField1}
            onChange={handleChangeCompanyPostalCode}
          />
        </Box>
        <Box sx={styles.textField}>
          <TextField
            required
            id="phone-number"
            label="Phone Number"
            type="number"
            fullWidth
            sx={styles.textField1}
            size="small"
            onChange={handleChangeCompanyPhoneNumber}
          />
          <TextField
            required
            id="email-address"
            label="Email Address"
            type="email"
            fullWidth
            sx={styles.textField1}
            size="small"
            onChange={handleChangeCompanyEmail}
          />
        </Box>
        <Box sx={styles.textField}>
          <TextField
            required
            id="contact-name"
            label="Contact Full Name"
            fullWidth
            sx={styles.textField1}
            size="small"
            onChange={handleChangeContactName}
          />
          <TextField
            required
            id="contact-job-title"
            label="Contact Job Title"
            fullWidth
            sx={styles.textField1}
            size="small"
            onChange={handleChangeContactJobTitle}
          />
          <TextField
            required
            id="contact-phone-number"
            label="Contact Phone Number"
            type="number"
            fullWidth
            sx={styles.textField1}
            size="small"
            onChange={handleChangeContactPhoneNumber}
          />
          <TextField
            required
            id="contact-email-address"
            label="Contact Email Address"
            type="email"
            fullWidth
            sx={styles.textField1}
            size="small"
            onChange={handleChangeContactEmailAddress}
          />
        </Box>
        <Box>
          <Box sx={styles.boxButton}>
            <BasicButtons message="Submit" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
