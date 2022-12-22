import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import {
  employedPortal,
  empPic,
  newestPic,
  repoeredImg,
  serviceImg,
} from "../assets/images";
// import Masonry from "@mui/lab/Masonry";
const Newest = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection="column"
    >
      <Box
        sx={{
          my: 3,
          //   width: "cal(100% - 700px)",
          bgcolor: "white",
          boxShadow: "1px 1px 5px  #000",
          borderRadius: "30px",
          display: "flex",
          flexWrap: "wrap",
          //   justifyContent: "center",
          //   alignItems: "center",
          mx: 10,
          p: 3,
        }}
      >
        {/* <Typography textAlign={"center"}>Newest</Typography> */}
        {[1, 2, 3, 3, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, , 4, 44, 4, 4, ,].map(
          (item, index) => (
            <Grid m={3} justifyContent="center">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  // spacing: 4,
                  alignItems: "center",
                }}
              >
                <Box mr={"5px"}>
                  <img
                    src={repoeredImg}
                    style={{
                      height: 70,
                      width: 70,
                      borderRadius: "25px",
                    }}
                  />
                </Box>
                <Box flexDirection={"column"} display="flex">
                  @jason
                  <Button
                    sx={{
                      variant: "outlined",
                      color: "white",
                      width: "70px",
                      height: "25px",
                      borderRadius: "20px",
                      bgcolor: "blue",
                      mt: 1,
                      mb: 1,
                    }}
                  >
                    Detail
                  </Button>
                </Box>
              </Box>
            </Grid>
          )
        )}
      </Box>
    </Box>
  );
};

export default Newest;
