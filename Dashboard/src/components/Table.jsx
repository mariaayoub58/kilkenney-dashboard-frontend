import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, productname, productId) {
  return { name, productname, productId };
}

const rows = [
  createData("Jewellery", "Earring", 18908424),
  createData("Utensils", "Plates", 18908424),
  createData("Cosmetics", "Lip sticks", 18908424),
];

export default function BasicTable() {
  return (
    <div className="Table">
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Department Name</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell align="left">Product ID</TableCell>

              <TableCell align="left">Graph</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.productname}</TableCell>
                <TableCell align="left">{row.productId}</TableCell>

                <Button align="left" className="Details">
                  Show
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
