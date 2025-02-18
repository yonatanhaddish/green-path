import * as React from "react";
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
    background: "linear-gradient(to right, white,white, #FFF176)",
  },
  boxDetail: {
    width: "80%",
    height: "100%",
  },
  boxIconImage: {
    width: "40%",
    alignContent: "center",
  },
};

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

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

    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </React.Fragment>
);

export default function WeatherCard() {
  return (
    <Box sx={{ maxWidth: "400px" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
