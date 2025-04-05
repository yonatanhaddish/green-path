"use client";

import React from "react";
import { Forum } from "next/font/google";
import { Box, Typography, keyframes } from "@mui/material";

const forum = Forum({
  weight: ["400"],
  subsets: ["latin"],
});

const SCROLL_SPEED = 50;

const marquee = keyframes`
  from { transform: translateX(20%); }
  to { transform: translateX(-100%); }
`;

const styles = {
  parent_container: {
    // border: "solid green 2px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "100%",
    position: "relative",
    background: "#f5f5f5",
    padding: "10px 0",
    display: "flex",
    // background: "linear-gradient(to right, #fff , #000 20%)",
    backgroundColor: "#000",
    color: "#009737",
    height: "150px",
  },
  partner_box: {
    display: "flex",
    animation: `${marquee} ${SCROLL_SPEED}s linear infinite`,
    alignSelf: "center",
  },
  partner_item: {
    marginRight: "50px",
    fontSize: "35px",
    // fontWeight: "bold",
    fontFamily: forum.style.fontFamily,
    whiteSpace: "nowrap",
    // border: "solid blue 2px",
  },
  typo_heading: {
    border: "solid black 2px",
    fontSize: "22px",
    fontWeight: "bold",
    display: "flex",
    justifySelf: "center",
    //   marginTop: "30px",
    // backgroundColor: "green",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
};

const partners_array = [
  { name: "Atlantis Freight Solutions", fontFamily: "'Roboto', sans-serif" },
  { name: "Evergreen Cargo", fontFamily: "'Montserrat', sans-serif" },
  { name: "Summit Logistics Group", fontFamily: "'Lora', cursive" },
  { name: "Titan Supply Chain", fontFamily: "'Oswald', sans-serif" },
  { name: "BlueWave Distributors", fontFamily: "'Playfair Display', serif" },
  { name: "PrimeSource Freight", fontFamily: "'Poppins', sans-serif" },
  { name: "Metro Goods Transport", fontFamily: "'Merriweather', serif" },
  { name: "CargoLink Enterprise", fontFamily: "'Raleway', cursive" },
  { name: "ProHaul Shipping", fontFamily: "'Ubuntu', sans-serif" },
  { name: "Horizon Logistics", fontFamily: "'Fira Sans', sans-serif" },
  { name: "Nexus Distribution", fontFamily: "'Nunito', sans-serif" },
  { name: "Apex Freight Systems", fontFamily: "'Quicksand', sans-serif" },
  { name: "Zenith Cargo", fontFamily: "'Dancing Script', cursive" },
  { name: "Vertex Transport", fontFamily: "'Bebas Neue', sans-serif" },
  { name: "Omni Logistics", fontFamily: "'Pacifico', serif" },
  { name: "Infinity Freight", fontFamily: "'Open Sans', sans-serif" },
  { name: "Global Transport Network", fontFamily: "'Lobster', cursive" },
  { name: "Unity Cargo Services", fontFamily: "'Source Sans Pro', sans-serif" },
  { name: "Pinnacle Shipping Co.", fontFamily: "'Teko', sans-serif" },
  { name: "Elite Cargo Movers", fontFamily: "'Anton', sans-serif" },
  { name: "SwiftLine Logistics", fontFamily: "'Josefin Sans', sans-serif" },
  { name: "Eagle Eye Freight", fontFamily: "'Arvo', serif" },
  { name: "Royal Transport Group", fontFamily: "'Rubik', cursive" },
  { name: "Diamond Cargo Express", fontFamily: "'Noto Sans', sans-serif" },
  { name: "Falcon Freight Services", fontFamily: "'PT Sans', sans-serif" },
  { name: "Phoenix Distribution", fontFamily: "'Cormorant Garamond', serif" },
  { name: "Thunderbolt Shipping", fontFamily: "'Libre Baskerville', serif" },
  { name: "Vanguard Logistics", fontFamily: "'Work Sans', sans-serif" },
  { name: "Orion Transport Co.", fontFamily: "'Cabin', cursive" },
  { name: "Polaris Freight Network", fontFamily: "'Vollkorn', serif" },
];
function WeWorkWith() {
  return (
    <Box>
      <Typography sx={styles.typo_heading}>Our Partners</Typography>
      <Box sx={styles.parent_container}>
        <Box sx={styles.partner_box}>
          {partners_array.map((partner, index) => (
            <Typography
              key={index}
              sx={{ ...styles.partner_item, fontFamily: partner.fontFamily }}
            >
              {partner.name}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default WeWorkWith;
