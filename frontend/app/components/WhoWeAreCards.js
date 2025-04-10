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
  const screenGreaterThan430LessThan768 = useMediaQuery(
    "(min-width: 431px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1024 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const screenGreaterThan1024LessThan1280 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1280px)"
  );
  const screenGreaterThan1280LessThan1366 = useMediaQuery(
    "(min-width: 1281px) and (max-width: 1366px)"
  );
  const screenGreaterThan1366LessThan1440 = useMediaQuery(
    "(min-width: 1367px) and (max-width: 1440px)"
  );
  const screenGreaterThan1440LessThan1920 = useMediaQuery(
    "(min-width: 1441px) and (max-width: 1920px)"
  );
  const screenGreaterThan1920LessThan2560 = useMediaQuery(
    "(min-width: 1921px) and (max-width: 2560px)"
  );
  const styles = {
    who_we_are_box: {
      border: "solid black 1px",
      boxShadow: "0 0 10px black",
      height: screenLessThan430
        ? "500px"
        : screenGreaterThan430LessThan768
        ? "350px"
        : screenGreaterThan768LessThan1024
        ? "300px"
        : screenGreaterThan1024LessThan1280
        ? "250px"
        : screenGreaterThan1280LessThan1366
        ? "200px"
        : screenGreaterThan1366LessThan1440
        ? "200px"
        : screenGreaterThan1440LessThan1920
        ? "250px"
        : screenGreaterThan1920LessThan2560
        ? "300px"
        : "700px",
      width: screenGreaterThan1920LessThan2560 ? "50%" : "100%",
      margin: "0 auto",
      backgroundColor: "#228245",
      display: "flex",
      flexDirection: screenGreaterThan1280LessThan1366
        ? "row"
        : screenGreaterThan1366LessThan1440
        ? "row"
        : screenGreaterThan1440LessThan1920
        ? "row"
        : screenGreaterThan1920LessThan2560
        ? "row"
        : "column",
    },
    image_box_whoarewe: {
      backgroundImage: `url("/images/green_path_about.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: screenGreaterThan1024LessThan1280
        ? "70%"
        : screenGreaterThan1280LessThan1366
        ? "100%"
        : screenGreaterThan1366LessThan1440
        ? "100%"
        : screenGreaterThan1440LessThan1920
        ? "100%"
        : screenGreaterThan1920LessThan2560
        ? "100%"
        : "60%",
      width: screenGreaterThan1280LessThan1366
        ? "50%"
        : screenGreaterThan1366LessThan1440
        ? "50%"
        : screenGreaterThan1440LessThan1920
        ? "50%"
        : "100%",
      // border: "solid white 2px",
    },
    typo_description: {
      // border: "solid white 2px",
      width: "90%",
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "center",
      margin: "0 auto",
      paddingTop: "15px",
      height: screenGreaterThan1024LessThan1280
        ? "30%"
        : screenGreaterThan1280LessThan1366
        ? "40%"
        : "40%",
      alignSelf: "center",
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
  const screenGreaterThan430LessThan768 = useMediaQuery(
    "(min-width: 431px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1024 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const screenGreaterThan1024LessThan1280 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1280px)"
  );
  const screenGreaterThan1280LessThan1366 = useMediaQuery(
    "(min-width: 1281px) and (max-width: 1366px)"
  );
  const screenGreaterThan1366LessThan1440 = useMediaQuery(
    "(min-width: 1367px) and (max-width: 1440px)"
  );
  const screenGreaterThan1440LessThan1920 = useMediaQuery(
    "(min-width: 1441px) and (max-width: 1920px)"
  );
  const screenGreaterThan1920LessThan2560 = useMediaQuery(
    "(min-width: 1921px) and (max-width: 2560px)"
  );
  const styles = {
    who_we_are_box: {
      border: "solid black 1px",
      boxShadow: "0 0 10px black",
      height: screenLessThan430
        ? "500px"
        : screenGreaterThan430LessThan768
        ? "350px"
        : screenGreaterThan768LessThan1024
        ? "300px"
        : screenGreaterThan1024LessThan1280
        ? "250px"
        : screenGreaterThan1280LessThan1366
        ? "200px"
        : screenGreaterThan1366LessThan1440
        ? "200px"
        : screenGreaterThan1440LessThan1920
        ? "250px"
        : screenGreaterThan1920LessThan2560
        ? "300px"
        : "700px",
      width: screenGreaterThan1920LessThan2560 ? "50%" : "100%",
      margin: "0 auto",
      backgroundColor: "#228245",
      display: "flex",
      flexDirection: screenGreaterThan1280LessThan1366
        ? "row-reverse"
        : screenGreaterThan1366LessThan1440
        ? "row-reverse"
        : screenGreaterThan1440LessThan1920
        ? "row-reverse"
        : screenGreaterThan1920LessThan2560
        ? "row-reverse"
        : "column",
    },
    typo_description: {
      // border: "solid blue 2px",
      width: "90%",
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "center",
      margin: "0 auto",
      paddingTop: "15px",
      height: screenGreaterThan1024LessThan1280
        ? "30%"
        : screenGreaterThan1280LessThan1366
        ? "40%"
        : "40%",
      alignSelf: "center",
    },
    image_box_mission: {
      backgroundImage: `url("/images/our_mission.jpeg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: screenGreaterThan1024LessThan1280
        ? "70%"
        : screenGreaterThan1280LessThan1366
        ? "100%"
        : screenGreaterThan1366LessThan1440
        ? "100%"
        : screenGreaterThan1440LessThan1920
        ? "100%"
        : screenGreaterThan1920LessThan2560
        ? "100%"
        : "60%",
      width: screenGreaterThan1280LessThan1366
        ? "50%"
        : screenGreaterThan1366LessThan1440
        ? "50%"
        : screenGreaterThan1440LessThan1920
        ? "50%"
        : "100%",
      // border: "solid green 2px",
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
  const screenGreaterThan430LessThan768 = useMediaQuery(
    "(min-width: 431px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1024 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const screenGreaterThan1024LessThan1280 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1280px)"
  );
  const screenGreaterThan1280LessThan1366 = useMediaQuery(
    "(min-width: 1281px) and (max-width: 1366px)"
  );
  const screenGreaterThan1366LessThan1440 = useMediaQuery(
    "(min-width: 1367px) and (max-width: 1440px)"
  );
  const screenGreaterThan1440LessThan1920 = useMediaQuery(
    "(min-width: 1441px) and (max-width: 1920px)"
  );
  const screenGreaterThan1920LessThan2560 = useMediaQuery(
    "(min-width: 1921px) and (max-width: 2560px)"
  );
  const styles = {
    who_we_are_box: {
      border: "solid black 1px",
      boxShadow: "0 0 10px black",
      height: screenLessThan430
        ? "500px"
        : screenGreaterThan430LessThan768
        ? "350px"
        : screenGreaterThan768LessThan1024
        ? "300px"
        : screenGreaterThan1024LessThan1280
        ? "400px"
        : screenGreaterThan1280LessThan1366
        ? "400px"
        : screenGreaterThan1366LessThan1440
        ? "400px"
        : screenGreaterThan1440LessThan1920
        ? "400px"
        : screenGreaterThan1920LessThan2560
        ? "400px"
        : "1000px",
      width: screenGreaterThan1024LessThan1280
        ? "40%"
        : screenGreaterThan1280LessThan1366
        ? "40%"
        : screenGreaterThan1366LessThan1440
        ? "40%"
        : screenGreaterThan1440LessThan1920
        ? "40%"
        : screenGreaterThan1920LessThan2560
        ? "40%"
        : "100%",
      margin: "0 auto",
      backgroundColor: "#228245",
    },
    typo_heading: {
      fontSize: "20px",
      color: "white",
      fontWeight: "bold",
      paddingTop: "15px",
      marginLeft: "20px",
      textDecoration: "underline",
      textShadow: "0 0 10px white",
    },
    typo_expain: {
      marginLeft: "10px",
      // border: "solid 2px white",
      width: "90%",
      margin: "0 auto",
      textAlign: "center",
      fontWeight: "bold",
    },
  };
  return (
    <>
      <Box sx={styles.who_we_are_box}>
        <Box sx={styles.typo_box}>
          <Typography sx={styles.typo_heading}>Our Green Commitment</Typography>
        </Box>
        <List sx={styles.list_box}>
          <ListItem>
            <ListItemText primary="⚫️ Integrating fuel-efficient and electric vehicles into our fleet" />
          </ListItem>
          <ListItem>
            <ListItemText primary="⚫️ Optimizing routes to reduce emissions and waste" />
          </ListItem>
          <ListItem>
            <ListItemText primary="⚫️ Partnering with eco-conscious businesses" />
          </ListItem>
          <ListItem>
            <ListItemText primary="⚫️ Implementing advanced tracking and logistics solutions to improve sustainability" />
          </ListItem>
        </List>
        <Typography sx={styles.typo_expain}>
          We are actively working towards going fully green in the near future
          by
        </Typography>
      </Box>
    </>
  );
}
export function WhyChooseUs() {
  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const screenGreaterThan430LessThan768 = useMediaQuery(
    "(min-width: 431px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1024 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const screenGreaterThan1024LessThan1280 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1280px)"
  );
  const screenGreaterThan1280LessThan1366 = useMediaQuery(
    "(min-width: 1281px) and (max-width: 1366px)"
  );
  const screenGreaterThan1366LessThan1440 = useMediaQuery(
    "(min-width: 1367px) and (max-width: 1440px)"
  );
  const screenGreaterThan1440LessThan1920 = useMediaQuery(
    "(min-width: 1441px) and (max-width: 1920px)"
  );
  const screenGreaterThan1920LessThan2560 = useMediaQuery(
    "(min-width: 1921px) and (max-width: 2560px)"
  );
  const styles = {
    who_we_are_box: {
      border: "solid black 1px",
      boxShadow: "0 0 10px black",
      height: screenLessThan430
        ? "500px"
        : screenGreaterThan430LessThan768
        ? "350px"
        : screenGreaterThan768LessThan1024
        ? "350px"
        : screenGreaterThan1024LessThan1280
        ? "400px"
        : screenGreaterThan1280LessThan1366
        ? "400px"
        : screenGreaterThan1366LessThan1440
        ? "400px"
        : screenGreaterThan1440LessThan1920
        ? "400px"
        : screenGreaterThan1920LessThan2560
        ? "400px"
        : "1000px",
      width: screenGreaterThan1024LessThan1280
        ? "40%"
        : screenGreaterThan1280LessThan1366
        ? "40%"
        : screenGreaterThan1366LessThan1440
        ? "40%"
        : screenGreaterThan1440LessThan1920
        ? "40%"
        : screenGreaterThan1920LessThan2560
        ? "40%"
        : "100%",
      margin: "0 auto",
      backgroundColor: "#228245",
    },
    typo_heading: {
      fontSize: "20px",
      color: "white",
      fontWeight: "bold",
      paddingTop: "15px",
      marginLeft: "20px",
      textDecoration: "underline",
      textShadow: "0 0 10px white",
    },
    typo_expain: {
      marginLeft: "10px",
      fontWeight: "bold",
      // border: "solid red 2px",
      width: "90%",
      textAlign: "center",
      margin: "0 auto",
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
            <ListItemText primary="⚫️ Reliable and on-time deliveries" />
          </ListItem>
          <ListItem>
            <ListItemText primary="⚫️ A strong commitment to sustainability" />
          </ListItem>
          <ListItem>
            <ListItemText primary="⚫️ Innovative, customer-focused solutions" />
          </ListItem>
          <ListItem>
            <ListItemText primary="⚫️ Transparency and efficiency in every step" />
          </ListItem>
        </List>
        <Typography sx={styles.typo_expain}>
          We believe the future of logistics is green, efficient, and
          responsible—and we are on the path to making that a reality. Join us
          in creating a smarter, eco-friendly transportation industry!
        </Typography>
      </Box>
    </>
  );
}
