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
  // headingContent: {
  //   width: "90%",
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignSelf: "center",
  // },
  // textFieldBox: {
  //   width: "90%",
  //   display: "flex",
  //   flexDirection: "column",
  //   gap: "15px",
  //   // border: "solid red 2px",
  //   margin: "0 auto",
  // },
  // textField: {
  //   // width: "90%",
  //   display: "flex",
  //   flexDirection: "column",
  //   gap: "15px",
  // },
  // boxButton: {
  //   marginTop: "10px",
  //   display: "flex",
  //   height: "45px",
  //   gap: "20px",
  //   paddingBottom: "50px",
  // },
  // textField1: {
  //   // backgroundColor: "#f5fff9",
  //   "& .MuiInputLabel-root": { color: "black" },
  //   "& .MuiInputLabel-root.Mui-focused": { color: "black" },
  //   "& .MuiOutlinedInput-root": {
  //     "& fieldset": { borderColor: "gray" },
  //     "&:hover fieldset": { borderColor: "black" },
  //     "&.Mui-focused fieldset": {
  //       borderColor: "green",
  //       //   backgroundColor: "#e1fceb",
  //     },
  //   },
  // },
  // typoCompany: {
  //   fontWeight: "bold",
  // },
  // job_id: {
  //   borderBottom: "green solid 2px",
  // },
  // buttonUploadDL: {
  //   width: "100%",
  //   display: "flex",
  //   flexDirection: "column",
  //   gap: "10px",
  // },
  // buttonInVehicleClass: {
  //   border: "solid red 2px",
  //   display: "flex",
  //   displayDirection: "column",
  //   // justifyContent: "space-around",
  // },
  // buttonEditSubmitForm: {
  //   backgroundColor: "#000",
  //   color: "white",
  //   width: "140px",
  //   height: "40px",
  //   fontSize: "16px",
  // },
  // boxGetUserVehicleInfo: {
  //   // border: "solid red 2px",
  //   width: "100%",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignSelf: "center",
  //   gap: "20px",
  // },
  // buttonSumbit: {
  //   width: "100%",
  //   height: "45px",
  //   fontSize: "18px",
  //   paddingBottom: "30px",
  // },
};

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

  // console.log({
  //   companyNameValue,
  //   companyAddressValue,
  //   companyCityValue,
  //   companyPostalCodeValue,
  //   companyPhoneNumberValue,
  //   companyEmailAddressValue,
  //   companyContactNameValue,
  //   companyContactJobTitleValue,
  //   companyContactPhoneNumberValue,
  //   companyContactEmailAddressValue,
  // });

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

  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const screenGreaterThan430LessThan768 = useMediaQuery(
    "(min-width: 431px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1024 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const screenGreaterThan1024LessThan1440 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1440px)"
  );
  const screenGreaterThan1440LessThan2560 = useMediaQuery(
    "(min-width: 1441px) and (max-width: 2560px)"
  );
  const screenGreaterThan2560LessThan3840 = useMediaQuery(
    "(min-width: 2560px) and (max-width: 3840px)"
  );

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading === undefined) {
    return <div>Loading...</div>;
  }

  const styles = {
    parent_box: {
      border: "solid #000 1px",
      boxShadow: "0 0 10px #009737",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "65%"
        : screenGreaterThan768LessThan1024
        ? "65%"
        : screenGreaterThan1024LessThan1440
        ? "60%"
        : screenGreaterThan1440LessThan2560 || screenGreaterThan2560LessThan3840
        ? "25%"
        : "80%",
      marginBottom: "50px",
      margin:
        screenLessThan430 || screenGreaterThan1024LessThan1440
          ? "25px auto"
          : "50px auto",
    },
    typo_heading: {
      fontSize: screenLessThan430 ? "18px" : "18px",
      fontWeight: "bold",
      paddingTop: "20px",
      marginLeft: "5%",
      color: "#009737",
      // borderBottom: "solid #009737 2px",
      width: "fit-content",
      // alignSelf: "end",
    },
    input_form_box: {
      // border: "solid red 2px",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "75%"
        : screenGreaterThan768LessThan1024
        ? "80%"
        : screenGreaterThan1024LessThan1440
        ? "70%"
        : "100%",
      alignSelf: "center",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      marginBottom: "30px",
    },
    input_box: {
      // border: "solid purple 2px",
      // width: screenLessThan430 ? "90%" : "100%",
      display: "flex",
      flexDirection: "row",
      gap: "15px",
      flexWrap: "wrap",
    },
    text_input: {
      border: "solid green 1px",
      width:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "100%"
          : screenGreaterThan1024LessThan1440
          ? "45%"
          : "100%",
    },
    d_license_box: {
      // border: "solid green 2px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      // width: screenLessThan430 ? "100%" : "90%",
    },
    front_button: {
      border: "solid #000 1px",
      backgroundColor: "#009737",
      color: "#000",
      width: "100%",
    },
    back_button: {
      border: "solid #000 1px",
      backgroundColor: "#009737",
      color: "#000",
      width: "100%",
    },
    next_button: {
      // border: "solid #009737 1px",
      backgroundColor: "#000",
      color: "#fff",
      fontSize: "18px",
      marginTop: "20px",
    },
  };

  const handleUserFormNext = () => {
    const newState = "vehicle-page";
    setButtonState(newState);
    onPageChange(newState);
  };

  return (
    <>
      <Box sx={styles.parent_box}>
        <Typography sx={styles.typo_heading}>
          Welcome to GreenPath | User Info
        </Typography>
        <Box sx={styles.input_form_box}>
          <Box sx={styles.input_box}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Full Name"
              variant="outlined"
              sx={styles.text_input}
            />
            <TextField
              id="outlined-basic"
              size="small"
              label="Email Address"
              variant="outlined"
              sx={styles.text_input}
            />
            <TextField
              id="outlined-basic"
              size="small"
              label="Phone Number"
              variant="outlined"
              sx={styles.text_input}
            />
            <TextField
              id="outlined-basic"
              size="small"
              label="Home Address"
              variant="outlined"
              sx={styles.text_input}
            />
            <TextField
              id="outlined-basic"
              size="small"
              label="City"
              variant="outlined"
              sx={styles.text_input}
            />
            <TextField
              id="outlined-basic"
              size="small"
              label="Country"
              variant="outlined"
              sx={styles.text_input}
            />
            <TextField
              id="outlined-basic"
              size="small"
              label="Postal Code"
              variant="outlined"
              sx={styles.text_input}
            />
          </Box>
          <Box sx={styles.d_license_box}>
            <Button sx={styles.front_button}>
              Driving License (Front Side)
            </Button>
            <Button sx={styles.back_button}>Driving License(Back Side)</Button>
          </Box>
          <Button sx={styles.next_button} onClick={handleUserFormNext}>
            Next
          </Button>
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

  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const screenGreaterThan430LessThan768 = useMediaQuery(
    "(min-width: 431px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1024 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const screenGreaterThan1024LessThan1440 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1440px)"
  );
  const screenGreaterThan1440LessThan2560 = useMediaQuery(
    "(min-width: 1441px) and (max-width: 2560px)"
  );
  const screenGreaterThan2560LessThan3840 = useMediaQuery(
    "(min-width: 2560px) and (max-width: 3840px)"
  );

  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  // if (loading === undefined) {
  //   return <div>Loading...</div>;
  // }

  const styles = {
    parent_box: {
      border: "solid #000 1px",
      boxShadow: "0 0 10px #009737",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "65%"
        : screenGreaterThan768LessThan1024
        ? "65%"
        : screenGreaterThan1024LessThan1440
        ? "90%"
        : screenGreaterThan1440LessThan2560 || screenGreaterThan2560LessThan3840
        ? "25%"
        : "80%",
      marginBottom: "50px",
      margin:
        screenLessThan430 || screenGreaterThan1024LessThan1440
          ? "25px auto"
          : "50px auto",
    },
    typo_heading: {
      fontSize: screenLessThan430 ? "18px" : "18px",
      fontWeight: "bold",
      paddingTop: "20px",
      marginLeft: "5%",
      color: "#009737",
      // borderBottom: "solid #009737 2px",
      width: "fit-content",
      // alignSelf: "end",
    },
    input_form_box: {
      // border: "solid red 2px",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "75%"
        : screenGreaterThan768LessThan1024
        ? "80%"
        : "100%",
      alignSelf: "center",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      marginBottom: "30px",
    },
    input_box: {
      // border: "solid purple 2px",
      // width: screenLessThan430 ? "90%" : "100%",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    text_input: {
      // border: "solid green 1px",
      width:
        screenLessThan430 ||
        screenGreaterThan430LessThan768 ||
        screenGreaterThan768LessThan1024
          ? "100%"
          : "50%",
    },
    document_box: {
      // border: "solid green 2px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      // width: screenLessThan430 ? "80%" : "100%",
    },
    vehicle_doc_button: {
      border: "solid #000 1px",
      backgroundColor: "#009737",
      color: "#000",
      width: "100%",
    },

    next_button: {
      // border: "solid #009737 1px",
      backgroundColor: "#000",
      color: "#fff",
      fontSize: "18px",
      width: "50%",
    },
    button_box: {
      // border: "solid red 2px",
      display: "flex",
      flexDirection: "row",
      gap: "15px",
      justifyContent: "center",
      marginTop: "20px",
    },
  };

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

  const handleChangeVehicleColor = (event) => {
    // setVehicleColorValue(event.target.value);
  };

  return (
    <>
      <Box sx={styles.parent_box}>
        <Typography sx={styles.typo_heading}>
          Welcome to GreenPath | Vehicle Info
        </Typography>
        <Box sx={styles.input_form_box}>
          <Box sx={styles.input_box}>
            <FormControl fullWidth sx={styles.textField1} size="small">
              <InputLabel id="vehicle-type-select-label">
                Vehicle Type
              </InputLabel>
              <Select
                labelId="vehicle-type-select-label"
                id="vehicle-type"
                value={vehicleTypeValue}
                label="Vehicle Type"
                // onChange={handleChangeVehicleType}
              >
                <MenuItem value="van">Van</MenuItem>
                <MenuItem value="mini-van">Mini Van</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={styles.textField1} size="small">
              <InputLabel id="vehicle-make-select-label">
                Vehicle Make
              </InputLabel>
              <Select
                labelId="vehicle-make-select-label"
                id="vehicle-make"
                value={vehicleMakeValue}
                label="Vehicle Make"
                // onChange={handleChangeVehicleMake}
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
                // onChange={handleChangeVehicleModel}
              >
                {vehicleModels.map((item) => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth sx={styles.textField1} size="small">
              <InputLabel id="vehicle-year-select-label">
                Vehicle Year
              </InputLabel>
              <Select
                labelId="vehicle-year-select-label"
                id="vehicle-year"
                value={vehicleYearValue}
                label="Vehicle Year"
                // onChange={handleChangeVehicleYear}
              >
                {vehicleYears.map((item) => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              size="small"
              label="Plate Number"
              variant="outlined"
              sx={styles.text_input}
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
                // onChange={handleChangeVehicleColor}
              >
                {vehicleColors.map((item) => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={styles.document_box}>
            <Button sx={styles.vehicle_doc_button}>
              Police Background Check
            </Button>
            <Button sx={styles.vehicle_doc_button}>Vehicle Insurance</Button>
            <Button sx={styles.vehicle_doc_button}>Vehicle Inspection</Button>
          </Box>
          <Box sx={styles.button_box}>
            <Button sx={styles.next_button} onClick={handleBackButton}>
              Back
            </Button>
            <Button sx={styles.next_button} onClick={handleNextButton}>
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export function GetUserVehicleInfo({ onPageUpateButton }) {
  const [submitButtonState, setSubmitButtonState] = useState("submit-page");

  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const screenGreaterThan430LessThan768 = useMediaQuery(
    "(min-width: 431px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1024 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const screenGreaterThan1024LessThan1440 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1440px)"
  );
  const screenGreaterThan1440LessThan2560 = useMediaQuery(
    "(min-width: 1441px) and (max-width: 2560px)"
  );
  const screenGreaterThan2560LessThan3840 = useMediaQuery(
    "(min-width: 2560px) and (max-width: 3840px)"
  );

  const styles = {
    parent_box: {
      border: "solid #000 1px",
      boxShadow: "0 0 10px #009737",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768
        ? "65%"
        : screenGreaterThan768LessThan1024
        ? "65%"
        : screenGreaterThan1024LessThan1440
        ? "60%"
        : screenGreaterThan1440LessThan2560 || screenGreaterThan2560LessThan3840
        ? "25%"
        : "80%",
      paddingBottom: "40px",
      margin:
        screenLessThan430 || screenGreaterThan1024LessThan1440
          ? "25px auto"
          : "50px auto",
    },
    child_box: {
      // border: "solid red 2px",
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768 || screenGreaterThan768LessThan1024
        ? "70%"
        : "100%",
      alignSelf: "center",
      paddingTop: screenLessThan430
        ? "20px"
        : screenGreaterThan430LessThan768
        ? "40px"
        : "40px",
    },
    update_button: {
      // border: "solid #009737 1px",
      backgroundColor: "#000",
      color: "#fff",
      fontSize: "18px",
      width: "50%",
      alignSelf: "end",
    },
    submit_button: {
      // border: "solid #009737 1px",
      backgroundColor: "#000",
      color: "#fff",
      fontSize: "18px",
      width: screenLessThan430
        ? "90%"
        : screenGreaterThan430LessThan768 || screenGreaterThan768LessThan1024
        ? "70%"
        : "100%",
      alignSelf: "center",
    },
    typo_info: {
      fontWeight: "bold",
    },
  };
  const handleUpdateFormButton = () => {
    const newState = "user-page";
    setSubmitButtonState(newState);
    onPageUpateButton(newState);
  };

  const handleVanOwnerSubmit = () => {
    console.log("2222222");
  };

  return (
    <>
      <Box sx={styles.parent_box}>
        <Box sx={styles.child_box}>
          <Typography sx={styles.typo_info}>
            Name: <span style={{ color: "green" }}>Bruce Wills</span>
          </Typography>
          <Typography sx={styles.typo_info}>
            Email: <span style={{ color: "green" }}>brucewills@email.com</span>
          </Typography>
          <Typography sx={styles.typo_info}>
            Phone Number: <span style={{ color: "green" }}>(888) 888-8888</span>
          </Typography>
          <Typography sx={styles.typo_info}>
            Home Address:{" "}
            <span style={{ color: "green" }}>100 Main St West</span>
          </Typography>
          <Typography sx={styles.typo_info}>
            City:{" "}
            <span style={{ color: "green" }}>Toronto, Canada, M1L1L1</span>
          </Typography>
          <Typography sx={styles.typo_info}>
            Driving License Front:{" "}
            <span style={{ color: "green" }}>uploaded successful</span>
          </Typography>
          <Typography sx={styles.typo_info}>
            Driving License Back:{" "}
            <span style={{ color: "green" }}>uploaded successful</span>
          </Typography>
          <Typography sx={styles.typo_info}>
            Vehicle Type: <span style={{ color: "green" }}>Cargo Van</span>
          </Typography>
          <Typography sx={styles.typo_info}>
            Vehicle Make: <span style={{ color: "green" }}>Ford</span>
          </Typography>
          <Typography sx={styles.typo_info}>
            Vehicle Model: <span style={{ color: "green" }}>Transit</span>
          </Typography>
          <Typography sx={styles.typo_info}>
            Vehicle Year: <span style={{ color: "green" }}>2024</span>
          </Typography>
          <Typography sx={styles.typo_info}>
            License Plate Number:{" "}
            <span style={{ color: "green" }}>CYCD 676</span>
          </Typography>
          <Typography sx={styles.typo_info}>
            Background Check:{" "}
            <span style={{ color: "green" }}>uploaded successful</span>
          </Typography>
          <Typography sx={styles.typo_info}>
            Vehicle Inspection:{" "}
            <span style={{ color: "green" }}>uploaded successful</span>
          </Typography>
          <Typography sx={styles.typo_info}>
            Vehicle Insurance:{" "}
            <span style={{ color: "green" }}>uploaded successful</span>
          </Typography>
          <Button sx={styles.update_button} onClick={handleUpdateFormButton}>
            Update
          </Button>
        </Box>
        <Button sx={styles.submit_button}>Submit</Button>
      </Box>
    </>
  );
}
