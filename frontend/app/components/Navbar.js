import React from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Stack,
  Box,
} from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ width: "100%" }}>
      {/* <Box sx={{ bgcolor: "#009737", height: "40px", width: "100%" }}></Box> */}
      <Toolbar sx={{ bgcolor: "#fff", gap: 4 }}>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, color: "#009737", fontWeight: "bold" }}
        >
          Green Path
        </Typography>

        {/* Navigation Links */}
        <Button
          component={Link}
          href="/operator-home"
          sx={{
            color: "#000",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          Home
        </Button>
        <Button
          component={Link}
          href="/operator-job-board"
          sx={{
            color: "#000",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          Job Board
        </Button>
        <Button
          component={Link}
          href="/operator-my-jobs"
          sx={{
            color: "#000",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          My Jobs
        </Button>

        {/* Avatar */}
        <Stack sx={{ marginLeft: 8 }}>
          <Avatar sx={{ bgcolor: "#009737" }}>Y</Avatar>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
