import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { employedPortal, empPic, serviceImg } from "../assets/images";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
const EmployeePortal = () => {
  return (
    <Grid container alignItems={"center"} justifyContent={"center"}>
      <Grid container alignItems={"center"} justifyContent={"center"}>
        <img src={employedPortal} />
      </Grid>
      <Button
        sx={{
          mt: 2,
          bgcolor: "#0288d1",
          height: "40px",
          width: "320px",
          borderRadius: "16px",
          color: "#fff",
        }}
      >
        Create New User
      </Button>
      <Grid container justifyContent="center">
        {[0, 1, 2, 3, 4, 6].map((item) => (
          <Box
            // sx={{ }}
            sx={{
              boxShadow: "3px 4px 10px  #000",
              // shadowOpacity: 0.46,
              width: "28rem",
              height: "3rem",
              // height: 60,
              // lineHeight: "3rem",
              bgcolor: "#fff",
              // "&:hover": {
              //   backgroundColor: "grey",
              //   opacity: [0.9, 0.8, 0.7],
              // },
              // border: ".4px solid grey",
              p: 2,
              m: 3,
              borderRadius: 3,
            }}
          >
            <Grid container alignItems={"center"}>
              <img
                src={empPic}
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "100px",
                  // resize: "-moz-initial",
                }}
              />
              <Typography ml={2}>Ahmad</Typography>
              <Box>
                <Button
                  sx={{
                    borderRadius: 10,
                    height: "26px",
                    width: "170px",
                    bgcolor: "#0288d1",
                    // ml: 19,
                    // mt: -4.5,
                    color: "#fff",
                    fontSize: 12,
                  }}
                >
                  Detail
                </Button>
                <Button
                  sx={{
                    bgcolor: "#ff9800",
                    borderRadius: 10,
                    height: "26px",
                    width: "170px",
                    // ml: 33.5,
                    // mt: -2.7,
                    color: "#fff",
                  }}
                >
                  Edit
                </Button>
              </Box>
            </Grid>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default EmployeePortal;
