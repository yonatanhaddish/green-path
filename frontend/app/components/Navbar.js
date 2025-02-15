import React from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Stack,
} from "@mui/material";
const NavBar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "white", gap: 4 }}>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, color: "#009737", fontWeight: "bold" }}
          >
            Green Path
          </Typography>
          <Button color="inherit" sx={{ color: "#000" }}>
            <Link href="/" passHref>
              Home
            </Link>
          </Button>
          <Button color="inherit" sx={{ color: "#000" }}>
            <Link href="/job-board" passHref>
              Job Board
            </Link>
          </Button>
          <Button color="inherit" sx={{ color: "#000" }}>
            <Link href="/my-jobs" passHref>
              My Jobs
            </Link>
          </Button>
          <Stack sx={{ marginLeft: 8 }}>
            <Avatar sx={{ bgcolor: "#009737" }}>Y</Avatar>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
