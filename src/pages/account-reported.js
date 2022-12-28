import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
  Box,
  Typography,
  TextField,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";
import {
  createpanaelLoginImage,
  CustomerServicesImage,
} from "../assets/images";
import AllUser from "./allUser";
// import Masonry from "@mui/lab/Masonry";
const AccountReported = () => {
  arr = [
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
      id: 1,
      profile: profile,
      email: "1@gmail.com",
      dateJoined: "12/02/22",
      folowers: 455,
      content: 123,
      subscribers: "455",
    },
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
      id: 1,
      profile: profile,
      email: "1@gmail.com",
      dateJoined: "12/02/22",
      folowers: 455,
      content: 123,
      subscribers: "455",
    },
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
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection="column"
      p={10}
      m={20}
      boxShadow="1px 1px 10px  #000"
    >
      <Box
        sx={{
          //   width: "cal(100% - 700px)",
          bgcolor: "white",
          boxShadow: "1px 1px 2px  #000",
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
          display: "flex",
          bgcolor: "white",
          flexDirection: "column",
          mb: 1,
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Usernames</TableCell>
                  <TableCell align="center">Date joined</TableCell>
                  <TableCell align="center">Private Content </TableCell>
                  <TableCell align="center">Followers</TableCell>
                  <TableCell align="center">Subscribers</TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ height: 20 }}>
                {arr.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" scope="row">
                      <Grid container alignItems={"center"}>
                        <img
                          src={row.profile}
                          onClick={() => navigate("/userProfile")}
                        />
                        <Typography ml={"10px"}>{`${row.email}`}</Typography>
                      </Grid>
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
        </Paper>
      </Box>
    </Box>
  );
};

export default AccountReported;
