import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicButtons from "./Button";

const card = (
  <React.Fragment>
    <CardContent sx={{ maxHeight: "170px" }}>
      <Typography sx={{ fontWeight: "bold" }}>Available Jobs</Typography>
      <br />
      <Typography fontWeight="bold" fontSize={30}>
        15
      </Typography>{" "}
      <br />
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "50%",
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
      sx={{
        width: {
          sm: "60%",
        },
      }}
    >
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
