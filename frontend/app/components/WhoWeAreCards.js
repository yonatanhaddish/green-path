"use client";

import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

export function WhoWeAreCard() {
  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const styles = {
    who_we_are_box: {
      border: "solid #000 1px",
      height: "500px",
      width: "100%",
      margin: "0 auto",
    },
    image_box_whoarewe: {
      backgroundImage: `url("/images/landing-page.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "60%",
      width: "100%",
      //   border: "solid green 2px",
    },
    typo_description: {
      //   border: "solid blue 2px",
      width: "90%",
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "center",
      margin: "0 auto",
      paddingTop: "15px",
    },
    image_box_mission: {
      backgroundImage: `url("/images/landing-page-02.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "60%",
      width: "100%",
      //   border: "solid green 2px",
    },
  };
  return (
    <>
      <Box sx={styles.who_we_are_box}>
        <Box sx={styles.image_box_whoarewe}></Box>
        <Typography sx={styles.typo_description}>
          We are Green Path Logistics, a company dedicated to providing
          reliable, efficient, and sustainable road transportation solutions.
          Our goal is to revolutionize logistics by combining innovation,
          efficiency, and environmental responsibility.
        </Typography>
      </Box>
    </>
  );
}
export function OurMission() {
  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const styles = {
    who_we_are_box: {
      border: "solid #000 1px",
      height: "500px",
      width: "100%",
      margin: "0 auto",
    },
    image_box_whoarewe: {
      backgroundImage: `url("/images/landing-page.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "60%",
      width: "100%",
      //   border: "solid green 2px",
    },
    typo_description: {
      //   border: "solid blue 2px",
      width: "90%",
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "center",
      margin: "0 auto",
      paddingTop: "15px",
    },
    image_box_mission: {
      backgroundImage: `url("/images/landing-page-02.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "60%",
      width: "100%",
      //   border: "solid green 2px",
    },
  };
  return (
    <>
      <Box sx={styles.who_we_are_box}>
        <Box sx={styles.image_box_mission}></Box>
        <Typography sx={styles.typo_description}>
          Our Mission is to deliver seamless and cost-effective transportation
          solutions while moving toward a fully eco-friendly future. We are
          committed to reducing our carbon footprint and adopting greener
          practices in every aspect of our operations.
        </Typography>
      </Box>
    </>
  );
}
export function GreenCommitment() {
  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const styles = {
    who_we_are_box: {
      border: "solid #000 1px",
      height: "500px",
      //   width: "100%",
      margin: "0 auto",
    },
    image_box_whoarewe: {
      backgroundImage: `url("/images/landing-page.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "60%",
      width: "100%",
      //   border: "solid green 2px",
    },
    typo_description: {
      //   border: "solid blue 2px",
      width: "90%",
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "center",
      margin: "0 auto",
      paddingTop: "15px",
    },
    image_box_mission: {
      backgroundImage: `url("/images/landing-page-02.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "60%",
      width: "100%",
      //   border: "solid green 2px",
    },
    typo_box: {
      //   border: "solid red 2px",
      //   height: "10%",
    },
    list_box: {
      //   border: "solid green 2px",
      paddingTop: "20px",
    },
    typo_heading: {
      fontSize: "20px",
      color: "green",
      fontWeight: "bold",
      paddingTop: "15px",
      marginLeft: "20px",
      textDecoration: "underline",
    },
    typo_expain: {
      marginLeft: "10px",
    },
  };
  return (
    <>
      <Box sx={styles.who_we_are_box}>
        <Box sx={styles.typo_box}>
          <Typography sx={styles.typo_heading}>Our Green Commitment</Typography>
        </Box>
        <List sx={styles.list_box}>
          <Typography sx={styles.typo_expain}>
            We are actively working towards going fully green in the near future
            by:
          </Typography>
          <ListItem>
            <ListItemText primary="✅ Integrating fuel-efficient and electric vehicles into our fleet" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Optimizing routes to reduce emissions and waste" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Partnering with eco-conscious businesses" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Implementing advanced tracking and logistics solutions to improve sustainability" />
          </ListItem>
        </List>
      </Box>
    </>
  );
}
export function WhyChooseUs() {
  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const styles = {
    who_we_are_box: {
      border: "solid #000 1px",
      height: "500px",
      //   width: "100%",
      margin: "0 auto",
    },
    image_box_whoarewe: {
      backgroundImage: `url("/images/landing-page.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "60%",
      width: "100%",
      //   border: "solid green 2px",
    },
    typo_description: {
      //   border: "solid blue 2px",
      width: "90%",
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "center",
      margin: "0 auto",
      paddingTop: "15px",
    },
    image_box_mission: {
      backgroundImage: `url("/images/landing-page-02.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "60%",
      width: "100%",
      //   border: "solid green 2px",
    },
    typo_box: {
      //   border: "solid red 2px",
      //   height: "10%",
    },
    list_box: {
      //   border: "solid green 2px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    typo_heading: {
      fontSize: "20px",
      color: "green",
      fontWeight: "bold",
      paddingTop: "15px",
      marginLeft: "20px",
      textDecoration: "underline",
    },
    typo_expain: {
      marginLeft: "10px",
    },
  };
  return (
    <>
      <Box sx={styles.who_we_are_box}>
        <Box sx={styles.typo_box}>
          <Typography sx={styles.typo_heading}>Why Choose Us?</Typography>
        </Box>
        <List sx={styles.list_box}>
          <ListItem>
            <ListItemText primary="✅ Reliable and on-time deliveries" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ A strong commitment to sustainability" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Innovative, customer-focused solutions" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Transparency and efficiency in every step" />
          </ListItem>
          <Typography sx={styles.typo_expain}>
            We believe the future of logistics is green, efficient, and
            responsible—and we are on the path to making that a reality. Join us
            in creating a smarter, eco-friendly transportation industry!
          </Typography>
        </List>
      </Box>
    </>
  );
}
