import React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import WeatherCard from "../components/WeatherCard";
import DriverStat from "../components/DriverStat";
import AvailableJobs from "../components/AvailableJobs";
import RecentActivity from "../components/RecentActivity";

const OperatorHome = () => {
  return (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: {
              xs: 20,
              sm: 28,
              md: 30,
            },
            marginTop: 5,
            marginLeft: {
              xs: 3,
              md: 5,
              lg: 5,
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
              xs: "90%",
              sm: "80%",
              lg: "90%",
            },
            display: "flex",

            justifyContent: "center", // Center the Grid container horizontally
            margin: "0 auto", // Center the Grid container horizontally
            marginTop: 3,
            border: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "none",
            },
          }}
        >
          <Grid
            item="true"
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              // border: "solid 2px red",
              width: {
                xs: "100%",
                sm: "100%",
                lg: "30%",
              },
            }}
          >
            <WeatherCard />
          </Grid>
          <Grid
            item="true"
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              // border: "solid 2px red",
              width: {
                xs: "100%",
                sm: "100%",
                lg: "30%",
              },
            }}
          >
            <DriverStat />
          </Grid>
          <Grid
            item="true"
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              // border: "solid 2px red",

              width: {
                xs: "100%",
                sm: "100%",
                lg: "30%",
              },
            }}
          >
            <AvailableJobs />
          </Grid>
        </Grid>
        <Box
          sx={{
            marginTop: {
              xs: 2,
            },

            width: {
              sm: "100%",
              lg: "100%",
            },
            display: "flex",
            justifyContent: {
              xs: "center",
              lg: "center",
            },
          }}
        >
          <RecentActivity />
        </Box>
      </Box>
    </>
  );
};

export default OperatorHome;
