import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          mt: "auto",
          py: 2,
          backgroundColor: "#000",
          color: "white",
          textAlign: "center",
          alignContent: "center",
          width: "100%",
          // height: "20px",
        }}
      >
        <Typography variant="body2">
          Job Board 2025 &copy; All right reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
