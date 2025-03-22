"use client";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Tabs, Tab, useMediaQuery } from "@mui/material";
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
  const [loading, setLoading] = useState(undefined);

  const screenLessThan768 = useMediaQuery(
    "(min-width: 100px) and (max-width: 768px)"
  );
  const screenGreaterThan768LessThan1024 = useMediaQuery(
    "(min-width: 768px) and (max-width: 1024px)"
  );
  const screenGreaterThan1024LessThan1920 = useMediaQuery(
    "(min-width:1025px) and (max-width: 1920px)"
  );
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading === undefined) {
    return <div>Loading...</div>;
  }

  const styles = {
    box_tab: {
      paddingTop: "25px",
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
    boxParent: {
      width: screenLessThan768
        ? "100%"
        : screenGreaterThan768LessThan1024
        ? "50%"
        : screenGreaterThan1024LessThan1920
        ? "30%"
        : "10%",
      // border: "solid red 2px",
      display: "flex",
      flexDirection: "column",
      // justifySelf: "center",
    },
    boxGrandParent: {
      // border: "solid blue 2px",
      display: "flex",
      justifyContent: "center",
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={styles.boxGrandParent}>
        <Box sx={styles.boxParent}>
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
      </Box>
    </>
  );
}

export default page;
