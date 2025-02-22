import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BasicButtons from "./BasicButton";

export default function JobCard() {
  const styles = {
    cardParent: {
      border: "solid red 1px",
      width: "35%",
    },
    cardContent: {
      border: "solid green 2px",
      width: "100%",
      paddingLeft: "20px",
    },
    cardActions: {
      border: "solid blue 2px",
      width: "100%",
    },
  };
  return (
    <Card sx={styles.cardParent}>
      <CardContent sx={styles.cardContent}>
        <Typography>06 - Feb - 2025</Typography>
        <Typography>Job Id: #123123</Typography>
        <Typography>Pickup Address: 123 Main Street W.</Typography>
        <Typography>Destination Address: 100 Wellington Street W.</Typography>
        <Typography>Distance: 100 Kms</Typography>
        <Typography>Weight: 240 Kgs (520 Lbs)</Typography>
        <Typography>Price: 590 CAD</Typography>
        <Typography>Pickup Time: 10:00 AM</Typography>
        <Typography>Delivery Time: 12:00 PM</Typography>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <BasicButtons
          message="Accept Job"
          sx={{ border: "solid red 10px" }}
        ></BasicButtons>
      </CardActions>
    </Card>
  );
}
