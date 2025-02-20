import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const styles = {
  cardContent: {
    // border: "solid green 1px",
    display: "flex",
    flexDirection: "column",
    maxHeight: "170px",
    border: "0.1px solid",
  },
};

const card = (
  <React.Fragment>
    <CardContent sx={styles.cardContent}>
      <Typography sx={{ fontWeight: "bold" }}>Driver Statistics</Typography>
      <br></br> <hr />
      <Typography>
        Total Trips Completed: <span>46</span>
      </Typography>{" "}
      <hr />
      <Typography>
        Total Distance Driven: <span>1200 Kms</span>
      </Typography>
      <hr />
      <Typography>
        Rating: <span>4.85 / 5</span>
      </Typography>{" "}
      <hr />
    </CardContent>
  </React.Fragment>
);

export default function DriverStat() {
  return (
    <Box
      sx={{
        width: {
          xs: "90%",
          // sm: "60%",
        },
        // border: "solid 1px blue",
      }}
    >
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
