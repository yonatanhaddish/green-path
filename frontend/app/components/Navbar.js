"use client";

import React from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Stack,
  useMediaQuery,
} from "@mui/material";

const NavBar = () => {
  const screenGreaterThan1920LessThan3840 = useMediaQuery(
    "(min-width: 1921px) and (max-width: 3840px)"
  );

  return (
    <div id="nav-bar">
      <AppBar
        position="static"
        sx={{
          width: screenGreaterThan1920LessThan3840 ? "80%" : "100%",
          justifySelf: screenGreaterThan1920LessThan3840 ? "center" : "",
        }}
      >
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
    </div>
  );
};

export default NavBar;
