import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { employedPortal, empPic } from "../assets/images";
import '../css/employe-portal.css';
const EmployeePortal = () => {
  const navigate = useNavigate();
  return (
    <Grid>
      <Grid sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Box>
          <img alt="Pic here" src={employedPortal}
            className='image'
          />
        </Box>
        <Button
          onClick={() => navigate('/createNewUser')}
          sx={{
            mt: '20px',
            mb: '30px',
            bgcolor: "#0288d1",
            height: "40px",
            width: { sm: '320px', xs: '200px' },
            borderRadius: "16px",
            color: "#fff",
            textTransform: 'capitalize'
            // outline: 'thick double #32a1ce'
          }}
        >
          Create New User
        </Button>
      </Grid>
      <Grid container justifyContent="center">
        {[0, 1, 2, 3, 4, 6].map((item) => (
          <Box
            className="card"
            sx={{
              boxShadow: "3px 4px 10px  #000",
              shadowOpacity: 0.46,
              width: "26rem",
              height: "4.2rem",

              bgcolor: "#fff",
              // "&:hover": {
              // backgroundColor: "red",
              //   opacity: [0.9, 0.8, 0.7],
              // },
              border: ".4px solid grey",
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
                <Typography className="text" ml={'5px'}>Ahmad</Typography>
              </Box>
              <Box display={'flex'} alignItems={'flex-end'} flexDirection={'column'}>
                <Button
                  onClick={() => navigate('/detail')}
                  className='button'
                  sx={{
                    borderRadius: 10,
                    height: "26px",
                    width: "170px",
                    bgcolor: "#0288d1",
                    color: "#fff",
                    fontSize: 12,
                    textTransform: 'capitalize'

                  }}
                >
                  Detail
                </Button>
                <Button
                  onClick={() => navigate('/editProfile')}
                  className='button'
                  sx={{
                    bgcolor: "#ff9800",
                    borderRadius: 10,
                    height: "26px",
                    width: "170px",
                    mt: '5px',
                    color: "#fff",
                    textTransform: 'capitalize'
                  }}
                >
                  Edit
                </Button>
              </Box>
            </Grid>
          </Box>
        ))}
      </Grid>
    </Grid >
  );
};

export default EmployeePortal;
