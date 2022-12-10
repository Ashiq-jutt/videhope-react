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
export default function UserData() {
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "#F5F5F5" }}>
      <Table sx={{ minWidth: 10 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Usernames</TableCell>
            <TableCell align="center">Date joined</TableCell>
            <TableCell align="center">Private Content </TableCell>
            <TableCell align="center">Followers</TableCell>
            <TableCell align="center">Subscribers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" scope="row">
                <img src={row.profile} />
                {row.email}
              </TableCell>
              <TableCell align="center">{row.dateJoined}</TableCell>
              <TableCell align="center">{row.content}</TableCell>
              <TableCell align="center">{row.folowers}</TableCell>
              <TableCell align="center">{row.subscribers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
