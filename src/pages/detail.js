import {
  Button, Grid, Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  newestPic
} from "../assets/images";
const Detail = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection="column"
    >
      <Button
        sx={{
          variant: "outlined",
          color: "black",
          boxShadow: "1px 1px 5px  #000",
          width: "150px",
          height: "50px",
          borderRadius: "20px",
          mt: -2,
        }}
      >
        Detail
      </Button>
      <Box
        sx={{
          mt: 4,
          //   px:10,
          width: "40%",
          bgcolor: "white",
          boxShadow: "1px 1px 5px  #000",
          borderRadius: "30px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 1,
            py: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <img
              alt="Pic here"
              src={newestPic}
              style={{
                height: "170px",
                width: "170px",
                borderRadius: "100px",
              }}
            />
            <Box>
              <Typography fontSize={"24px"} ml={4}>
                Ahmad
              </Typography>
              <Typography fontSize={"12px"} ml={2} mt={-1}>
                Jacksonmariay@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          style={{
            // display: "flex",
            flex: 1,
          }}
        >
          <Box mt={3}>
            <Typography fontSize={"24px"} textAlign="center">
              Query Filter
            </Typography>
            <Box pr={3}>
              <Button
                sx={{
                  // variant: "outlined",
                  bgcolor: "blue",
                  color: "white",
                  boxShadow: "1px 1px 5px #000",
                  width: "270px",
                  height: "35px",
                  borderRadius: "20px",
                  mb: 1,
                  mt: 1,
                }}
              >
                Create Application
              </Button>
              <Button
                sx={{
                  // variant: "outlined",
                  bgcolor: "white",
                  color: "grey",
                  boxShadow: "1px 1px 5px #000",
                  width: "270px",
                  height: "35px",
                  borderRadius: "20px",
                  mb: 1,
                }}
              >
                Customer Service
              </Button>
              <Button
                sx={{
                  // variant: "outlined",
                  bgcolor: "white",
                  color: "grey",
                  boxShadow: "1px 1px 5px #000",
                  width: "270px",
                  height: "35px",
                  borderRadius: "20px",
                  mb: 1,
                }}
              >
                Widthrawal Requests
              </Button>
            </Box>
            <Box
              sx={{
                direction: "row",
                bgcolor: "white",
                color: "grey",
                display: "flex",
                boxShadow: "1px 1px 5px #000",
                width: "310px",
                height: "52px",
                borderRadius: "20px 0px 30px 20px ",
                mt: "2px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography color={"blue"} fontSize={34} fontWeight={700} mr={1}>
                25
              </Typography>
              <Typography textAlign={"center"}>Queries Recieved</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          width: "65vw",
          boxShadow: "1px 1px 5px  #000",
          borderRadius: "35px",
          direction: "column",
          px: 4,
          pb: "10px",
          my: 3,
        }}
      >
        <Grid
          container
          sx={{
            px: 2,
            width: "65vw",
            boxShadow: "1px 1px 5px  #000",
            borderRadius: "0px 0px 15px 15px ",
            // display: "flex",
            direction: "row",
            py: 1.6,
            mt: "1px",
          }}
        >
          <Grid container xs={2.4}>
            Query Recieved
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            xs={2.4}
            sx={{ borderLeft: 1 }}
          >
            Status
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            xs={2.4}
            sx={{ borderLeft: 1 }}
          >
            Query Respond
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            xs={2.4}
            sx={{ borderLeft: 1 }}
          >
            Login time
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            xs={2.4}
            sx={{ borderLeft: 1 }}
          >
            Logout time
          </Grid>
        </Grid>
        {[3, 3, 3, 3, 3, 33, 3, 3, 3].map((item, index) => (
          <Grid
            key={index}
            container
            sx={{
              width: "65vw",
              direction: "row",
              py: 1.6,
              mt: "15px",
            }}
          >
            <Grid container xs={2.4} textAlign={"center"}>
              <Typography
                borderRadius={"0px 15px 15px 0px"}
                bgcolor={"blue"}
                color={"white"}
                py={"5px"}
                px={1}
                ml={-4}
                mr={2}
              >
                AN
              </Typography>
              I'v login issue
            </Grid>
            <Grid container justifyContent={"center"} xs={2.4}>
              <Typography
                borderRadius={"20px"}
                bgcolor={"grey"}
                color={"white"}
                px={4}
                pt={"5px"}
              >
                pending
              </Typography>
            </Grid>
            <Grid container justifyContent={"center"} xs={2.4}>
              <Typography
                borderRadius={"20px"}
                bgcolor={"blue"}
                color={"white"}
                px={4}
                pt={"5px"}
              >
                detail
              </Typography>
            </Grid>
            <Grid container justifyContent={"center"} xs={2.4}>
              10:15 am
            </Grid>
            <Grid container justifyContent={"center"} xs={2.4}>
              12:10 pm
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default Detail;
