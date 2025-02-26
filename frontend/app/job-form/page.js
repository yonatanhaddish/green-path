"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";
import { Typography } from "@mui/material";

export default function JobForm() {
  const styles = {
    cardContent: {
      border: "solid red 2px",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
  };
  return (
    <Box component="form" noValidate autoComplete="off" sx={styles.cardContent}>
      <Box>
        <Typography>Job Id: #123123</Typography>
        <Typography>Eagle Import & Export</Typography>
      </Box>
      <Box>
        <Box>
          <TextField
            required
            id="pickup-location"
            label="Pickup Location"
            defaultValue="123 Main St."
            fullWidth
          />
          <TextField
            required
            id="dropoff-location"
            label="Dropoff Location"
            defaultValue="100 Wellington St."
            fullWidth
          />
        </Box>
        <Box>
          <TextField
            id="distance"
            label="Distance (km)"
            type="number"
            fullWidth
          />
          <TextField id="weight" label="Weight (kg)" type="number" fullWidth />
        </Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box>
            <DemoContainer components={["DateField"]}>
              <DateField label="Delivery Date" fullWidth />
            </DemoContainer>
          </Box>
          <Box>
            <DemoContainer components={["DateField"]}>
              <DateField label="Delivery Date" fullWidth />
            </DemoContainer>
          </Box>
        </LocalizationProvider>
        <Box>
          <TextField id="price" label="Price ($)" type="number" fullWidth />
        </Box>
      </Box>
    </Box>
  );
}
