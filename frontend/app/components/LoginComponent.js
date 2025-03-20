import React from "react";
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

function LoginComponent() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const styles = {
    cardContent: {
      //   border: "solid green 2px",
      display: "flex",
      flexDirection: "column",
      gap: "50px",
      paddingTop: "0px",
    },
    heading_box: {
      //   border: "solid red 2px",
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      paddingTop: "30px",
    },
    heading_type: {
      color: "#009737",
      fontWeight: "bold",
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
      //   border: "solid blue 1px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
  };

  return (
    <>
      <Box>
        <Card>
          <CardContent sx={styles.cardContent}>
            <Box sx={styles.heading_box}>
              <Typography sx={styles.login_style}>LOGIN</Typography>
              <Typography sx={styles.heading_type}>Van Owner</Typography>
            </Box>
            <Box sx={styles.input_box}>
              <TextField
                id="email-address"
                label="Email Address"
                type="email"
                fullWidth
              />
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
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
              <BasicButtons message="Login" />
            </Box>
          </CardContent>
          <CardActions sx={styles.cardAction}>
            <Typography>Dont have an account? Register here</Typography>
            <Typography>Forgot Password?</Typography>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default LoginComponent;
