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
  creatorImg,
  employedPortal,
  empPic,
  newestPic,
  repoeredImg,
  serviceImg,
} from "../assets/images";
// import Masonry from "@mui/lab/Masonry";
import { useNavigate } from "react-router-dom";

const Newest = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "white",
        boxShadow: "1px 1px 5px  #000",
        borderRadius: "30px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        mx: { sm: 10, xs: '0px' },
        p: '12px',
      }}
    >
      {/* <Typography textAlign={"center"}>Newest</Typography> */}
      {[1, 2, 3, 3, 4, 3, 4, 4].map(
        (item, index) => (
          <Grid m='6px'>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box mr={"5px"}>
                <img
                  src={creatorImg}
                  style={{
                    height: { xs: 190, sm: 90 },
                    width: { xs: 190, sm: 90 },
                    borderRadius: "33px",
                  }}
                />
              </Box>
              <Box flexDirection={"column"} display="flex">
                @jason
                <Button
                  onClick={() => navigate("/newestDetail")}
                  sx={{
                    variant: "outlined",
                    color: "white",
                    width: "70px",
                    height: "25px",
                    borderRadius: "20px",
                    bgcolor: "blue",
                    mt: 1,
                    mb: 1,
                    textTransform: 'capitalize',
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
  );
};

export default Newest;
