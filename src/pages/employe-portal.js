import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { employedPortal, empPic } from "../assets/images";
const EmployeePortal = () => {
  const navigate = useNavigate();
  return (
    <Grid>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Box>
          <img alt="Pic here" src={employedPortal} />
        </Box>
        <Box>
          <Button
            onClick={() => navigate('/createNewUser')}
            sx={{
              mt: '20px',
              mb: '30px',
              bgcolor: "#0288d1",
              height: "40px",
              width: "320px",
              borderRadius: "16px",
              color: "#fff",
            }}
          >
            Create New User
          </Button>
        </Box>
      </Box>
      <Grid container justifyContent="center">
        {[0, 1, 2, 3, 4, 6].map((item) => (
          <Box
            // sx={{ }}
            sx={{
              boxShadow: "3px 4px 10px  #000",
              // shadowOpacity: 0.46,
              width: "28rem",
              // height: "3rem",
              // height: 60,
              // lineHeight: "3rem",
              bgcolor: "#fff",
              // "&:hover": {
              backgroundColor: "white",
              //   opacity: [0.9, 0.8, 0.7],
              // },
              // border: ".4px solid grey",
              px: '3px',
              py: '5px',
              my: '10px',
              mx: '20px',
              borderRadius: 3,
            }}
          >
            <Grid container alignItems={"center"} justifyContent={'space-between'}>
              <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                <Box>
                  <img
                    alt="Pic here"
                    src={empPic}
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "100px",
                      // resize: "-moz-initial",
                    }}
                  />
                </Box>
                <Typography ml={'5px'}>Ahmad</Typography>
              </Box>
              <Box display={'flex'} alignItems={'flex-end'} flexDirection={'column'}>
                <Button
                  onClick={() => navigate('/detail')}
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
                  onClick={() => navigate('/editProfile')}
                  sx={{
                    bgcolor: "#ff9800",
                    borderRadius: 10,
                    height: "26px",
                    width: "170px",
                    mt: '15px',
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
