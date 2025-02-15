import React from "react";
import "./operator-home.css";
import WeatherCard from "../components/WeatherCard";
import DriverStat from "../components/driverStat";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import AvailableJobs from "../components/AvailableJobs";

const OpearatorHome = () => {
  return (
    <>
      <Box className="operator-home">
        <Typography>Good Afternoon, Yonatan Haddish</Typography>
        <div className="info-cards">
          <WeatherCard />
          <DriverStat />
          <AvailableJobs />
        </div>
      </Box>
    </>
  );
};

export default OpearatorHome;
