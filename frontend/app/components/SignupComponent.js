"use client";
import React, { useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import BasicButtons from "./BasicButton";

const styles = {
  cardContent: {
    //   border: "solid #009737 2px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    paddingTop: "0px",
  },
  heading_box: {
    //   border: "solid red 2px",
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    paddingTop: "20px",
  },
  heading_type: {
    color: "#009737",
    fontWeight: "500",
    fontSize: "20px",
    fontFamily: "Times, Times New Roman, serif",
    borderBottom: "2px solid #009737",
  },
  login_style: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  input_box: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  cardAction: {
    //   border: "solid #009737 1px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "30px",
  },
};

export function SignupLoadOwner() {
  const [showPassword, setShowPassword] = useState(false);
  const [signupOwnerEmailValue, setSignupOwnerEmail] = useState("");
  const [signupOwnerPassword, setSignupOwnerPassword] = useState("");
  const [signupOwnerPasswordConfirm, setSignupOwnerPasswordConfirm] =
    useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleChangesignupLoadOwnerEmail = (event) => {
    setSignupOwnerEmail(event.target.value);
  };
  const handleChangeLoadOwnerPassword = (event) => {
    setSignupOwnerPassword(event.target.value);
  };
  const handleChangeLoadOwnerPasswordConfirm = (event) => {
    setSignupOwnerPasswordConfirm(event.target.value);
  };
  console.log({
    signupOwnerEmailValue,
    signupOwnerPassword,
    signupOwnerPasswordConfirm,
  });

  return (
    <>
      <Box>
        <Card>
          <CardContent sx={styles.cardContent}>
            <Box sx={styles.heading_box}>
              <Typography sx={styles.login_style}>SIGNUP</Typography>
              <Typography sx={styles.heading_type}>Load Owner</Typography>
            </Box>
            <Box sx={styles.input_box}>
              <TextField
                size="small"
                fullWidth
                id="email-address"
                label="Email Address"
                type="email"
                onChange={handleChangesignupLoadOwnerEmail}
              />
              <FormControl fullWidth variant="outlined" size="small">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChangeLoadOwnerPassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControl fullWidth variant="outlined" size="small">
                <InputLabel htmlFor="outlined-adornment-confirm-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-confirm-password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChangeLoadOwnerPasswordConfirm}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Box>
            <Box>
              <BasicButtons message="SignUp" />
            </Box>
          </CardContent>
          <CardActions sx={styles.cardAction}>
            <Typography>
              Alerady have an account? <Link href="/login">Login here</Link>
            </Typography>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export function SignupVanOwner() {
  const [showPassword, setShowPassword] = useState(false);
  const [vanOwnerEmailValue, setVanOwnerEmail] = useState("");
  const [vanOwnerPassword, setVanOwnerPassword] = useState("");
  const [vanOwnerConfirmPassword, setVanOwnerConfirmPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeVanOwnerEmail = (event) => {
    setVanOwnerEmail(event.target.value);
  };
  const handleChangeVanOwnerPassword = (event) => {
    setVanOwnerPassword(event.target.value);
  };
  const handleChangeVanOwnerconfirmPassword = (event) => {
    setVanOwnerConfirmPassword(event.target.value);
  };
  console.log({
    vanOwnerEmailValue,
    vanOwnerPassword,
    vanOwnerConfirmPassword,
  });

  return (
    <>
      <Box>
        <Card>
          <CardContent sx={styles.cardContent}>
            <Box sx={styles.heading_box}>
              <Typography sx={styles.login_style}>SIGNUP</Typography>
              <Typography sx={styles.heading_type}>Van Owner</Typography>
            </Box>
            <Box sx={styles.input_box}>
              <TextField
                size="small"
                fullWidth
                id="email-address"
                label="Email Address"
                type="email"
                onChange={handleChangeVanOwnerEmail}
              />
              <FormControl fullWidth variant="outlined" size="small">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChangeVanOwnerPassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControl fullWidth variant="outlined" size="small">
                <InputLabel htmlFor="outlined-adornment-confirm-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-confirm-password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChangeVanOwnerconfirmPassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Box>
            <Box>
              <BasicButtons message="SignUp" />
            </Box>
          </CardContent>
          <CardActions sx={styles.cardAction}>
            <Typography>
              Alerady have an account? <Link href="/login">Login here</Link>
            </Typography>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
