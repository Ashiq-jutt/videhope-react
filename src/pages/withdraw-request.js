import {
  Button, FormControl, Grid, MenuItem, Select, TextField,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  withdrawPic
} from "../assets/images";
const WithdrawRwquest = () => {
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
          mt: -1,
        }}
      >
        Withdraw Request
      </Button>
      <Box
        sx={{
          mt: 4,
          width: "35%",
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
              height: "230px",
              width: "230px",
              borderRadius: "1000px",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Grid container mt={3} justifyContent={"flex-end"} ml={2}>
            <Typography
              borderRadius={"30px 0px 0px 30px"}
              bgcolor={"blue"}
              color={"white"}
              // py={2}
              px={1}
              ml={-4}
              mr={2}
              fontSize={36}
            >
              100$
            </Typography>
          </Grid>
          <Typography fontSize={"34px"} color={"grey"}>
            Ahmad
          </Typography>
          <Typography fontSize={"12px"} mt={-1} color={"grey"}>
            ahmadworkspace@gmail.com
          </Typography>
          <Box mt={2}>
            <FormControl
              sx={{
                minWidth: "223px",
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
          "& > :not(style)": { width: "42ch", my: 4 },
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
      <Box
        sx={{
          // variant: "outlined",
          bgcolor: "blue",
          color: "white",
          width: "270px",
          height: "35px",
          borderRadius: "20px",
          mb: 1,
          textAlign: "center",
          mt: 4,
        }}
      >
        Done
      </Box>
    </Box>
  );
};

export default WithdrawRwquest;
