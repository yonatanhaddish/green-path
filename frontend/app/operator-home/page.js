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
              sm: 28,
              md: 30,
            },
            marginTop: 5,
            marginLeft: {
              xs: 3,
              md: 5,
            },
            display: "flex",
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
              sm: "80%",
              md: "100%",
            },
            display: "flex",
            justifyTracks: {
              sm: "center",
            },
            justifySelf: {
              xs: "center",
              sm: "center",
            },

            marginTop: 3,
          }}
        >
          <Grid
            size={{ xs: 12, sm: 12, md: 4 }}
            sx={{ justifyItems: "center" }}
          >
            <WeatherCard />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 4 }}
            sx={{ justifyItems: "center" }}
          >
            <DriverStat />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 4 }}
            sx={{ justifyItems: "center" }}
          >
            <AvailableJobs />
          </Grid>
          <Grid
            size={{ xs: 12, md: 12 }}
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
