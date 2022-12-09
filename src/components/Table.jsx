import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import profile from "../assets/profile.svg";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

var arr = [
  {
    id: 1,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: 123,
    subscribers: "455",
  },
  {
    id: 2,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: "123",
    subscribers: "455",
  },
  {
    id: 3,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: "123",
    subscribers: "455",
  },
  {
    id: 4,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: "123",
    subscribers: "455",
  },
  {
    id: 5,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: "123",
    subscribers: "455",
  },
  {
    id: 6,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: "123",
    subscribers: "455",
  },
  {
    id: 7,
    profile: profile,
    email: "1@gmail.com",
    dateJoined: "12/02/22",
    folowers: 455,
    content: "123",
    subscribers: "455",
  },
];
export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "#F5F5F5" }}>
      <Table sx={{ minWidth: 10 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Usernames</TableCell>
            <TableCell align="right">Date joined</TableCell>
            <TableCell align="right">Private Content </TableCell>
            <TableCell align="right">Followers</TableCell>
            <TableCell align="right">Subscribers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">
                <img src={row.profile} /> {row.email}
              </TableCell>
              <TableCell align="right">{row.dateJoined}</TableCell>
              <TableCell align="right">{row.content}</TableCell>
              <TableCell align="right">{row.folowers}</TableCell>
              <TableCell align="right">{row.subscribers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
