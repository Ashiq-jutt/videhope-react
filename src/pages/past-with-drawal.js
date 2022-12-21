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
const PastWithDrawal = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection="column"
      //   height="100vh"
      //   width="100vw"
    >
      <Button
        sx={{
          variant: "outlined",
          color: "black",
          boxShadow: "1px 1px 5px  #000",
          width: "210px",
          height: "50px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          mt: -0.9,
          mr: 120,
        }}
      >
        PastWithdrawal
      </Button>
      <Box
        container
        sx={{
          my: 3,
          //   width: "cal(100% - 700px)",
          bgcolor: "white",
          boxShadow: "1px 1px 5px  #000",
          borderRadius: "30px",
          display: "flex",
          flexWrap: "wrap",
          mx: 10,
          p: 2,
        }}
      >
        {[1, 2, 3, 3, 3, 3, 3].map((item, index) => (
          <Grid m={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box>
                <img
                  src={repoeredImg}
                  style={{
                    height: 140,
                    width: 140,
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                  }}
                />
              </Box>
              <Button
                sx={{
                  variant: "outlined",
                  color: "black",
                  boxShadow: "1px 1px 2px  #000",
                  width: "140px",
                  height: "30px",
                  borderRadius: "10px",
                  mt: -3,
                }}
              ></Button>
              <Button
                sx={{
                  variant: "outlined",
                  color: "white",
                  width: "140px",
                  height: "30px",
                  borderRadius: "20px",
                  bgcolor: "blue",
                  mt: 1,
                  mb: 1,
                }}
              >
                Detail
              </Button>
            </Box>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default PastWithDrawal;
