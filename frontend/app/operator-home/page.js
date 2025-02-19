import React from "react";
import "./operator-home.css";

import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import WeatherCard from "../components/WeatherCard";
import DriverStat from "../components/DriverStat";
import AvailableJobs from "../components/AvailableJobs";
import RecentActivity from "../components/RecentActivity";

const OpearatorHome = () => {
  return (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: {
              xs: 18,
              md: 50,
            },
            marginTop: 5,
            marginLeft: {
              xs: 3,
              md: 5,
            },
            display: "flex",
            fontWeight: "-",
          }}
        >
          Good Afternoon,{" "}
          <span
            style={{
              fontWeight: "bold",
              background: "linear-gradient(to left, black, green)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Times New Roman",
            }}
          >
            Yonatan Haddish
          </span>
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{
            width: {
              xs: "80%",
            },
            justifySelf: {
              xs: "center",
            },
            // border: "solid green 2px",
            marginTop: 3,
          }}
        >
          <Grid size={{ xs: 12, md: 6, lg: 10 }}>
            <WeatherCard />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 2 }}>
            <DriverStat />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 8 }}>
            <AvailableJobs />
          </Grid>
          <Grid
            size={{ xs: 12 }}
            sx={{
              marginTop: {
                xs: 2,
              },
            }}
          >
            <RecentActivity />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OpearatorHome;
