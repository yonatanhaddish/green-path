"use client";

import React, { useEffect } from "react";
import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";

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

const OurPartners = () => {
  const screenLessThan430 = useMediaQuery(
    "(min-width: 100px) and (max-width: 430px)"
  );
  const screenGreaterThan430LessThan768 = useMediaQuery(
    "(min-width: 431px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1024 = useMediaQuery(
    "(min-width: 769px) and (max-width: 1024px)"
  );
  const screenGreaterThan1024LessThan1440 = useMediaQuery(
    "(min-width: 1025px) and (max-width: 1440px)"
  );
  const screenGreaterThan1440LessThan1920 = useMediaQuery(
    "(min-width: 1441px) and (max-width: 1920px)"
  );
  const screenGreaterThan1920LessThan3840 = useMediaQuery(
    "(min-width: 1921px) and (max-width: 3840px)"
  );
  useEffect(() => {
    const uniqueFonts = [
      ...new Set(
        partners_array.map((partner) =>
          partner.fontFamily.split(",")[0].replace(/['"]+/g, "")
        )
      ),
    ];
    const link = document.createElement("link");
    link.href = `https://fonts.googleapis.com/css2?${uniqueFonts
      .map((font) => `family=${font.replace(/ /g, "+")}`)
      .join("&")}&display=swap`;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <Box
      sx={{
        // border: "solid red 2px",
        backgroundColor: "#c1c4c2",
        //   height: "100%",
        display: "flex",
        flexDirection: "column",
        width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
        justifySelf: "center",
        paddingBottom: "60px",
      }}
    >
      <Typography
        sx={{
          borderBottom: "solid green 2px",
          fontSize: screenLessThan430
            ? "25px"
            : screenGreaterThan430LessThan768
            ? "25px"
            : screenGreaterThan768LessThan1024
            ? "40px"
            : screenGreaterThan1024LessThan1440
            ? "35px"
            : screenGreaterThan1440LessThan1920
            ? "45px"
            : screenGreaterThan1920LessThan3840
            ? "45px"
            : "100px",
          width: screenLessThan430
            ? "40%"
            : screenGreaterThan430LessThan768
            ? "20%"
            : screenGreaterThan768LessThan1024
            ? "30%"
            : screenGreaterThan1024LessThan1440
            ? "20%"
            : screenGreaterThan1440LessThan1920
            ? "17%"
            : screenGreaterThan1920LessThan3840
            ? "20%"
            : "100%",
          marginLeft: "30px",
          marginBottom: "15px",
          //   paddingLeft: "30px",
          textAlign: "center",
        }}
      >
        Our Partners
      </Typography>
      <Box
        sx={{
          overflow: "hidden",
          width: "100%",
          whiteSpace: "nowrap",
          backgroundColor: "#009737",
          color: "#c1c4c2",
          height: screenLessThan430
            ? "180px"
            : screenGreaterThan430LessThan768
            ? "240px"
            : screenGreaterThan768LessThan1024
            ? "240px"
            : screenGreaterThan1024LessThan1440
            ? "200px"
            : screenGreaterThan1440LessThan1920
            ? "240px"
            : screenGreaterThan1920LessThan3840
            ? "280px"
            : "100px",
          justifySelf: "center",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            animation: screenLessThan430
              ? "scroll-left 100s linear infinite"
              : screenGreaterThan430LessThan768
              ? "scroll-left 120s linear infinite"
              : screenGreaterThan768LessThan1024
              ? "scroll-left 130s linear infinite"
              : screenGreaterThan1024LessThan1440
              ? "scroll-left 150s linear infinite"
              : screenGreaterThan1440LessThan1920
              ? "scroll-left 160s linear infinite"
              : screenGreaterThan1920LessThan3840
              ? "scroll-left 160s linear infinite"
              : "",
            height: "100%",
          }}
        >
          {[...partners_array, ...partners_array].map((partner, index) => (
            <Box
              key={index}
              sx={(theme) => ({
                display: "inline-block",
                padding: { xs: "0.8rem 1.5rem", sm: "1rem 2rem" },
                fontSize: screenLessThan430
                  ? "40px"
                  : screenGreaterThan430LessThan768
                  ? "60px"
                  : screenGreaterThan768LessThan1024
                  ? "50px"
                  : screenGreaterThan1024LessThan1440
                  ? "40px"
                  : screenGreaterThan1440LessThan1920
                  ? "50px"
                  : screenGreaterThan1920LessThan3840
                  ? "60px"
                  : "80px",
                whiteSpace: "nowrap",
                flexShrink: 0,
                fontFamily: partner.fontFamily,
                height: "30%",
                alignSelf: "center",
              })}
            >
              {partner.name}
            </Box>
          ))}
        </Box>

        {/* Custom animation keyframes */}
        <style>
          {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
        </style>
      </Box>
    </Box>
  );
};

export default OurPartners;
