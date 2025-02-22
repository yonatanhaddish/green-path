import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import BasicButtons from "./BasicButton";

const card = (
  <React.Fragment>
    <CardContent sx={{ width: "100%", minHeight: "100%" }}>
      <Typography sx={{ fontWeight: "bold" }}>Available Jobs</Typography>
      <br />
      <Typography fontWeight="bold" fontSize={30}>
        15
      </Typography>{" "}
      <br />
      <Box
        sx={{
          width: {
            sm: "50%",
            md: "50%",
            lg: "80%",
          },
        }}
      >
        <BasicButtons message="View Job Board" />
      </Box>
    </CardContent>
  </React.Fragment>
);

export default function AvailableJobs(props) {
  return (
    <Box
      sx={
        {
          // width: {
          //   xs: "90%",
          //   sm: "80%",
          // },
          // border: "solid 1px blue",
        }
      }
    >
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
