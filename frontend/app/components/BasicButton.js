import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons({ message }) {
  return (
    <Stack direction="row" sx={{ width: "100%", height: "100%" }}>
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#000",

          height: {
            md: "30px",
          },
          fontSize: {
            md: "12px",
          },
        }}
      >
        {message}
      </Button>
    </Stack>
  );
}
