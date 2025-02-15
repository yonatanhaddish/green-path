import React from "react";
import "./operator-home.css";

import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import WeatherCard from "../components/WeatherCard";
import DriverStat from "../components/DriverStat";
import AvailableJobs from "../components/AvailableJobs";

const OpearatorHome = () => {
  return (
    <>
      <Box>
        <Typography variant="h6">Good Afternoon, Yonatan Haddish</Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6, lg: 10 }}>
            <WeatherCard />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 2 }}>
            <WeatherCard />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 8 }}>
            <WeatherCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OpearatorHome;
