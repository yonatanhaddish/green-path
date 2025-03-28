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
    <>
      <Box>
        {" "}
        <AppBar position="static" sx={{ width: "100%" }}>
          <Toolbar sx={{ bgcolor: "#228245", gap: 4 }}>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, color: "white", fontWeight: "bold" }}
            >
              Green Path
            </Typography>
            <Button
              color="inherit"
              sx={{
                color: "#000",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                },
              }}
            >
              <Link href="/operator-home" passHref>
                Home
              </Link>
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "#000",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                },
              }}
            >
              <Link href="/operator-job-board" passHref>
                Job Board
              </Link>
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "#000",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                },
              }}
            >
              <Link href="/operator-my-jobs" passHref>
                My Jobs
              </Link>
            </Button>
            <Stack sx={{ marginLeft: 8 }}>
              <Avatar sx={{ bgcolor: "#009737" }}>Y</Avatar>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
