import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { withdrawPic } from "../assets/images";
import { useNavigate } from "react-router-dom";

const WithdrawRwquest = () => {
  const navigate = useNavigate();

  const [age, setAge] = React.useState("");
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
          width: "200px",
          height: "50px",
          borderRadius: "5px 5px 20px 20px",
          mt: -4,
        }}
      >
        Withdraw Request
      </Button>
      <Box
        sx={{
          mt: 4,
          width: "37vw",
          boxShadow: "1px 1px 5px  #000",
          borderRadius: "30px",
          display: "flex",
          flex: 1,
        }}
      >
        <Box
          sx={{
            flex: 1,
            p: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            alt="photosd here"
            src={withdrawPic}
            style={{
              height: "180px",
              width: "180px",
              borderRadius: "1000px",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Grid container mt={3} justifyContent={"flex-end"}>
            <Typography
              borderRadius={"30px 0px 0px 30px"}
              bgcolor={"blue"}
              color={"white"}
              px={1}
              // mr={}
              fontSize={36}
            >
              100$
            </Typography>
          </Grid>
          <Typography fontSize={"34px"} mt={-2} color={"grey"}>
            Ahmad
          </Typography>
          <Typography fontSize={"12px"} mt={-1} color={"grey"}>
            ahmadworkspace@gmail.com
          </Typography>
          <Box mt={2}>
            <FormControl
              sx={{
                minWidth: "210px",
                color: "white",
                bgcolor: "blue",
                borderRadius: "20px",
              }}
              size={"small"}
            >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={(e) => setAge(e.target.value)}
              >
                <MenuItem value={20}>Approved</MenuItem>
                <MenuItem value={10}>Rejected</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { width: "42ch", my: 3 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Bank Account"
          variant="standard"
          autoComplete="off"
        />
      </Box>
      <Button
        onClick={() => navigate("/filterEarning")}
        sx={{
          variant: "outlined",
          bgcolor: "blue",
          color: "white",
          width: "270px",
          height: "35px",
          borderRadius: "20px",
          mb: 1,
          textAlign: "center",
          mt: 3,
        }}
      >
        Done
      </Button>
    </Box>
  );
};

export default WithdrawRwquest;
