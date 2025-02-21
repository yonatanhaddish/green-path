import React, { useEffect, useState } from "react";
import Box, { boxClasses } from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const styles = {
  cardContent: {
    display: "flex",
    justifyContent: "space-between",

    minHeight: "175px",
  },
  boxDetail: {
    width: "100%",
    height: "100%",
  },
  boxIconImage: {
    width: "40%",
    alignContent: "center",
  },
};

const card = (
  <React.Fragment>
    <CardContent sx={styles.cardContent}>
      <Box sx={styles.boxDetail}>
        <Typography fontWeight="bold">14-Feburary-2025</Typography>
        <Typography fontSize={35} marginLeft={3}>
          40°C
        </Typography>
        <Typography>Toronto, Canada</Typography>
        <Typography>Sunny</Typography>
      </Box>
      <Box sx={styles.boxIconImage}>
        <LightModeOutlinedIcon
          sx={{
            fontSize: 80,
          }}
        />
      </Box>
    </CardContent>
  </React.Fragment>
);

export default function WeatherCard() {
  const [temperatureStyle, setTemperatureStyle] = useState(30);
  const [temperatureString, setTemperatureString] = useState("");

  useEffect(() => {
    if (temperatureStyle > 30) {
      setTemperatureStyle("linear-gradient(to right, white,white, #FFF176)");
    }
    if (temperatureStyle <= 30) {
      setTemperatureStyle(
        "linear-gradient(to right, white,white,rgb(118, 166, 255))"
      );
    }
  }, []);
  console.log("test", temperatureStyle);

  return (
    <Box
      sx={{
        width: {
          // xs: "90%",
          // sm: "80%",
        },
        // border: "solid 1px red",
      }}
    >
      <Card
        variant="outlined"
        sx={{ background: temperatureStyle, border: "none" }}
      >
        {card}
      </Card>
    </Box>
  );
}
