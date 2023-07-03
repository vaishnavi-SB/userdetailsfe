import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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

export default function Displayusers(props) {
  const { userDetails } = props;
  console.log("userDetails", userDetails);
  return (
    <div>
      <TableContainer sx={{ display: "flex", justifyContent: "center", pt: 4 }}>
        <Table sx={{ maxWidth: 650 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>User name</StyledTableCell>
              <StyledTableCell align="center">Date of birth</StyledTableCell>
              <StyledTableCell align="center">e-mail </StyledTableCell>
              <StyledTableCell align="center">Phone number</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDetails &&
              userDetails.length > 0 &&
              userDetails.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {row?.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {moment(row?.dob).format("DD/MM/YYYY")}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row?.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row?.number}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            {userDetails && userDetails.length === 0 ? (
              <StyledTableRow>
                <StyledTableCell align="center" colSpan={6}>
                  No users found
                </StyledTableCell>
              </StyledTableRow>
            ) : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
