import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BasicButtons from "./BasicButton";

export default function AcceptedJobs() {
  const styles = {
    cardParent: {
      // border: "solid green 2px",
      // width: "30%",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
    },
    cardContent: {
      // border: "solid green 2px",
    },

    typographyStyle01: {
      textAlign: "end",
    },
    typographyStyle02: {
      marginTop: "15px",
    },
    typographyStyle03: {
      fontWeight: "bold",
    },
    typographyStyle04: {
      // border: "solid red 2px",
      marginTop: "-10px",
      width: "80%",
      marginLeft: "10%",
      paddingBottom: "20px",
    },
  };
  return (
    <Card sx={styles.cardParent}>
      <CardContent sx={styles.cardContent}>
        <Typography variant="subtitle2" sx={styles.typographyStyle01}>
          Job ID: #123123
        </Typography>
        <Typography variant="subtitle2" sx={styles.typographyStyle03}>
          Job Accepted on: 20-March-2025
        </Typography>
        <Typography variant="subtitle2" sx={styles.typographyStyle02}>
          <span style={styles.typographyStyle03}>Pickup Address:</span> 123 Main
          Street W.
        </Typography>
        <Typography variant="subtitle2">
          <span style={styles.typographyStyle03}>Destination Address:</span> 100
          Wellington Street W.
        </Typography>
        <Typography variant="subtitle2">
          <span style={styles.typographyStyle03}>Distance:</span> 100 Kms
        </Typography>
        <Typography variant="subtitle2">
          <span style={styles.typographyStyle03}>Weight:</span> 240 Kgs (520
          Lbs)
        </Typography>
        <Typography variant="subtitle2">
          <span style={styles.typographyStyle03}>Price:</span> 590 CAD
        </Typography>
        <Typography variant="subtitle2">
          <span style={styles.typographyStyle03}>Pickup Time</span>: 10:00 AM
        </Typography>
        <Typography variant="subtitle2">
          <span style={styles.typographyStyle03}>Delivery Time:</span> 12:00 PM
        </Typography>
      </CardContent>
      <CardActions sx={styles.typographyStyle04}>
        <BasicButtons message="Remove Job"></BasicButtons>
      </CardActions>
    </Card>
  );
}
