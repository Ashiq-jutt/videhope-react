import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import React from "react";
import {
  createpanaelLoginImage,
  CustomerServicesImage,
} from "../assets/images";
// import Masonry from "@mui/lab/Masonry";
const CreatorPanelLogin = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection="column"
    >
      <Box
        sx={{
          //   width: "cal(100% - 700px)",
          bgcolor: "white",
          boxShadow: "1px 1px 2px  #000",
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
          display: "flex",
          bgcolor: "white",
          flexDirection: "column",
          mb: 1,
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          mb={1.5}
          sx={{
            px: 14,
            //   width: "cal(100% - 700px)",
            bgcolor: "white",
            boxShadow: "1px 1px 2px  #000",
            borderBottomLeftRadius: "40px",
            borderBottomRightRadius: "40px",
            pt: 4,
            pb: 1,
          }}
        >
          <img src={createpanaelLoginImage} width="220px" height="232px" />
        </Box>

        <Box py={7}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 28,
              fontWeight: "700",
              color: "blue",
            }}
          >
            Login
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="username"
              variant="standard"
              autoComplete="off"
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "30ch" },
            }}
            noValidate
            autoComplete="off"
            mb={7}
          >
            <TextField
              id="standard-basic"
              label="password"
              variant="standard"
              autoComplete="off"
            />
          </Box>
          <Button
            sx={{
              bgcolor: "blue",
              color: "white",
              borderRadius: "50px",
              px: 12,
              py: 1,
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreatorPanelLogin;
