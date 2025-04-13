"use client";

import React, { useEffect } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";

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
        overflow: "hidden",
        width: "100%",
        whiteSpace: "nowrap",
        backgroundColor: "#c1c4c2",
        color: "#009737",
        width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
        height: screenLessThan430
          ? "160px"
          : screenGreaterThan430LessThan768
          ? "220px"
          : screenGreaterThan768LessThan1024
          ? "220px"
          : screenGreaterThan1024LessThan1280
          ? "180px"
          : screenGreaterThan1280LessThan1366
          ? "200px"
          : screenGreaterThan1366LessThan1440
          ? "200px"
          : screenGreaterThan1440LessThan1920
          ? "220px"
          : screenGreaterThan1920LessThan3840
          ? "260px"
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
            : screenGreaterThan1024LessThan1280
            ? "scroll-left 150s linear infinite"
            : screenGreaterThan1280LessThan1366
            ? "scroll-left 160s linear infinite"
            : screenGreaterThan1366LessThan1440
            ? "scroll-left 160s linear infinite"
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
                : screenGreaterThan1024LessThan1280
                ? "40px"
                : screenGreaterThan1280LessThan1366
                ? "45px"
                : screenGreaterThan1366LessThan1440
                ? "50px"
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
  );
};

export default OurPartners;
