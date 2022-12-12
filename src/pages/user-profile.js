import {
  Container,
  Grid,
  InputLabel,
  TextField,
  Typography,
  Stack,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import React from "react";
// import { View, Text } from "react-native";
import { Box } from "@mui/system";
import * as SVG from "../assets";
import UserData from "../components/userData";
import profile from "../assets/profile.svg";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
function UserProfile() {
  var arr = [
    {
      id: 1,
      profile: profile,
      email: "@jacob_w",
      dateJoined: "12/02/22",

      content: "$125.56",
    },

    {
      id: 6,
      profile: profile,
      email: "@jacob_w",
      dateJoined: "12/02/22",

      content: "$125.56",
    },
    {
      id: 2,
      profile: profile,
      email: "@jacob_w",
      dateJoined: "12/02/22",

      content: "'$125.56'",
    },
    {
      id: 3,
      profile: profile,
      email: "@jacob_w",
      dateJoined: "12/02/22",

      content: "'$125.56'",
    },
    {
      id: 4,
      profile: profile,
      email: "@jacob_w",
      dateJoined: "12/02/22",

      content: "'$125.56'",
    },
  ];
  return (
    <Container alignItems="center">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
        mt={"80px"}
        // ml={"20px"}
      >
        <img src={SVG.left} />
        <Typography
          sx={{ fontFamily: "Roboto", fontSize: "42px", fontWeight: "700" }}
        >
          User Profile
        </Typography>
        <img src={SVG.menue} />
      </Stack>

      <Box
        sx={{
          // backgroundColor: "#F4F4F4",
          mt: "30px",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            // backgroundColor: "#F4F4F4",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={SVG.profile} />
          <Typography>@jacob_w</Typography>
        </Stack>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          // backgroundColor={"red"}
        >
          <Stack
            sx={{
              // backgroundColor: "#F4F4F4",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: "#000000", fontFamily: "Roboto", fontSize: "22px" }}
            >
              15
            </Typography>
            <Typography
              sx={{ color: "#000000", fontFamily: "Roboto", fontSize: "13px" }}
            >
              Following
            </Typography>
          </Stack>
          <Stack
            sx={{
              mx: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: "#000000", fontFamily: "Roboto", fontSize: "22px" }}
            >
              38
            </Typography>
            <Typography
              sx={{ color: "#000000", fontFamily: "Roboto", fontSize: "13px" }}
            >
              Followers
            </Typography>
          </Stack>
          <Stack
            sx={{
              // backgroundColor: "#F4F4F4",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: "#000000", fontFamily: "Roboto", fontSize: "22px" }}
            >
              2
            </Typography>
            <Typography
              sx={{ color: "#000000", fontFamily: "Roboto", fontSize: "13px" }}
            >
              Subscribers
            </Typography>
          </Stack>
        </Grid>
        <Typography
          sx={{
            color: "#000000",
            fontFamily: "Roboto",
            fontSize: "15px",
            mt: 5,
          }}
        >
          Bio
        </Typography>

        <Typography
          border={"2px solid grey"}
          padding={"15px"}
          borderRadius={"5px"}
        >
          Living it and killing it!!! 100%
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontFamily: "Roboto",
            fontSize: "15px",
            mt: 2,
          }}
        >
          Interests
        </Typography>
        <Box border={"2px solid grey"} padding={"15px"} borderRadius={"5px"}>
          <Button
            variant="outlined"
            sx={{
              color: "#000000",
              fontFamily: "Avenir LT Std",
              fontSize: "12px",
              borderRadius: "35px",
              borderWidth: 1,
              borderColor: "#000000",
              ml: 6,
            }}
          >
            Music
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#000000",
              fontFamily: "Avenir LT Std",
              fontSize: "12px",
              borderRadius: "35px",
              borderWidth: 1,
              ml: 2,
              borderColor: "#000000",
            }}
          >
            Photography
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#000000",
              fontFamily: "Avenir LT Std",
              fontSize: "12px",
              borderRadius: "35px",
              borderWidth: 1,
              ml: 2,
              borderColor: "#000000",
            }}
          >
            Food
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#000000",
              fontFamily: "Avenir LT Std",
              fontSize: "12px",
              borderRadius: "35px",
              borderWidth: 1,
              ml: 2,
              borderColor: "#000000",
            }}
          >
            Diy
          </Button>
        </Box>
        <Typography
          sx={{
            color: "#000000",
            fontFamily: "Roboto",
            fontSize: "24px",
            fontWeight: "700",
            mt: 4,
          }}
        >
          Payout history
        </Typography>

        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            backgroundColor: "#F5F5F5",
            my: 1,
          }}
        >
          {/* <TableContainer sx={{ maxHeight: 600 }}> */}
          <Table stickyHeader aria-label="sticky table">
            <TableBody sx={{ height: 20 }}>
              {arr.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" scope="row">
                    <Grid container alignItems={"center"}>
                      <img src={row.profile} />
                      <Typography ml={"10px"}>{`${row.email}`}</Typography>
                    </Grid>
                  </TableCell>
                  <TableCell align="center"></TableCell>

                  <TableCell align="center">{row.dateJoined}</TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center">{row.content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* </TableContainer> */}
        </Paper>
      </Box>
    </Container>
  );
}
export default UserProfile;
