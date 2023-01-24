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
          px: "100px",
          py: 3,
        }}
      >
        <img src={createPanel} width="275px" height="252px" />
      </Box>
      <Grid
        justifyContent={"center"}
        sx={{
          my: 3,
          //   width: "cal(100% - 700px)",
          bgcolor: "white",
          display: "flex",
          flexWrap: "wrap",
          width: "70vw",
        }}
      >
        {[
          { item: "Unapproved", total: 35 },
          { item: "Most Subscribed", total: 20 },
          { item: "Verified", total: 25 },
          { item: "Denied", total: 12 },
          { item: "Most Followed", total: 80 },
          { item: "All Creators", total: 100 },
        ].map((item, index) => (
          <Box m={2}>
            <Box
              sx={{
                //   width: "cal(100% - 700px)",
                boxShadow: "0px 0px 4px  #000",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "17vw",
                bgcolor: "white",
              }}
            >
              <Typography ml={1}>{item.item}</Typography>
              <Button
                onClick={() => navigate("/newest")}
                sx={{
                  bgcolor: "blue",
                  py: "13px",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                {item.total}
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default CreatePanel;
