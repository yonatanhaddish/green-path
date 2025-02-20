"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    border: "solid blue 2px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Completed Delivery #1024", 159),
  createData("Started Delivery #1024", 160),
  createData("Completed Delivery #5498", 162),
  createData("Started Delivery #5498", 145),
  createData("Completed Delivery #1024", 3),
  createData("Started Delivery #1024", 44),
  createData("Completed Delivery #5498", 1562),
  createData("Started Delivery #5498", 1465),
];

export default function RecentActivity() {
  const styles = {
    tableContainer: {
      width: {
        xs: "95%",
      },
      marginTop: {
        xs: "25px",
      },
      marginBottom: {
        xs: "100px",
      },
    },
  };
  return (
    <TableContainer component={Paper} sx={styles.tableContainer}>
      <Typography fontWeight="bold">Recent Activity</Typography>
      <Table sx={{ marginTop: "20px" }} aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.calories}>
              <StyledTableCell component="th" scope="row" sx={{ width: "10%" }}>
                {row.calories}
              </StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
