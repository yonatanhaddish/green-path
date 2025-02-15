import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
    <CardContent>
      <Typography sx={{ fontWeight: "bold" }}>Weather</Typography>
      <Typography>14-Feburary-2025</Typography>
      <Typography>40°C</Typography>
      <Typography>Toronto</Typography>
      <Typography>Sunny</Typography>
    </CardContent>

    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function DriverStat() {
  return (
    <Box>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
