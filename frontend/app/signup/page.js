"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { SignupLoadOwner, SignupVanOwner } from "../components/SignupComponent";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function page() {
  const [value, setValue] = useState(0);

  const styles = {
    box_tab: {
      marginTop: "50px",
      "& .MuiTab-root": {
        backgroundColor: "#FAFAFA",
        color: "black",
        transition: "background-color 0.3s, color 0.3s",
      },
      "& .Mui-selected": {
        backgroundColor: "#009737",
        color: "white",
        textDecoration: "none",
      },
      "& .MuiTabs-indicator": {
        display: "none",
      },
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={styles.box_tab}
          >
            <Tab
              label="Load Owner"
              {...a11yProps(0)}
              sx={{
                color: "black",
                "&.Mui-selected": {
                  backgroundColor: "#009737",
                  color: "white",
                },
              }}
            />
            <Tab
              label="Van Owner"
              {...a11yProps(1)}
              sx={{
                color: "black",
                "&.Mui-selected": {
                  backgroundColor: "#009737",
                  color: "white",
                },
              }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <SignupLoadOwner />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SignupVanOwner />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default page;
