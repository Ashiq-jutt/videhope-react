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
import { useNavigate } from "react-router-dom";
import {
  createPanel,
  employedPortal,
  empPic,
  repoeredImg,
  serviceImg,
} from "../assets/images";
// import Masonry from "@mui/lab/Masonry";
const CreatePanel = () => {
  const navigate = useNavigate();
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
          boxShadow: "1px 1px 2px  #000",
          borderRadius: "50px",
          px: '100px',
          py: 3,
        }}
      >
        <img src={createPanel} width="275px" height="252px" />
      </Box>
      <Grid
        // justifyContent={'center'}
        sx={{
          my: 3,
          //   width: "cal(100% - 700px)",
          bgcolor: "white",
          display: "flex",
          flexWrap: "wrap",
          p: 1,
          // px: '50px'
          width: '60%',
          //   bgcolor: "red",
        }}
      >
        {[1, 9, 0, 3, 0, 0].map(() => (
          <Box m={2}>
            <Box
              sx={{
                //   width: "cal(100% - 700px)",
                boxShadow: "0px 0px 4px  #000",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "180px",
                bgcolor: "white",
              }}
            >
              <Typography ml={1}>Unapproved</Typography>
              <Button
                onClick={() => navigate('/newestDetail')}
                sx={{ bgcolor: "blue", color: "white", borderRadius: "10px" }}
              >
                12
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default CreatePanel;
