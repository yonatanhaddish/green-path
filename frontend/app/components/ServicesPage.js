import React from "react";
import { Typography, Box } from "@mui/material";
import {
  ServicesCardLoadOwnwer,
  ServicesCardVanOwner,
} from "../components/ServicesCard";

function ServicesPage() {
  const styles = {
    box_parent: {
      //   border: "solid red 2px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      paddingBottom: "50px",
      paddingTop: "50px",
    },
    typo_heading: {
      //   border: "solid red 2px",
      fontSize: "22px",
      fontWeight: "bold",
      display: "flex",
      justifySelf: "center",
      //   marginTop: "30px",
      backgroundColor: "green",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    services_cards: {
      //   border: "solid green 2px",
      display: "flex",
      flexDirection: "column",
      gap: "50px",
      width: "80%",
      margin: "0 auto",
    },
  };

  return (
    <>
      <Box sx={styles.box_parent}>
        <Box>
          <Typography sx={styles.typo_heading}>Services</Typography>
        </Box>
        <Box sx={styles.services_cards}>
          <ServicesCardLoadOwnwer />
          <ServicesCardVanOwner />
        </Box>
      </Box>
    </>
  );
}

export default ServicesPage;
