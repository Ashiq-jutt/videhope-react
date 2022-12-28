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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";
import {
  createNewUser,
  createpanaelLoginImage,
  CustomerServicesImage,
} from "../assets/images";
// import Masonry from "@mui/lab/Masonry";
const CreateNewUser = () => {
  const [age, setAge] = React.useState("");

  return (
    <Box
      display={"flex"}
      flexDirection="column"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        sx={{
          //   width: "cal(100% - 700px)",
          bgcolor: "red",
          // boxShadow: "1px 1px 2px  #000",
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
          display: "flex",
          bgcolor: "white",
          flexDirection: "column",
          mb: 1,
        }}
      >
        <Box
          mb={1.5}
          sx={{
            // px: 14,
            //   width: "cal(100% - 700px)",
            bgcolor: "white",
            borderBottomLeftRadius: "40px",
            borderBottomRightRadius: "40px",
            pt: 2,
          }}
        >
          <img
            src={createNewUser}
            width="280px"
            // height="232px"
          />
        </Box>

        <Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "32ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              autoComplete="off"
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "32ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              autoComplete="off"
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "32ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              autoComplete="off"
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "32ch" },
            }}
            noValidate
            autoComplete="off"
            mb={4}
          >
            <TextField
              id="standard-basic"
              label="ConfirmPassword"
              variant="standard"
              autoComplete="off"
            />
          </Box>
          <Box mb={2}>
            <FormControl
              sx={{ minWidth: "273px", borderColor: "white" }}
              size={"small"}
            >
              <InputLabel id="demo-simple-select-label">
                Users Access
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={(e) => setAge(e.target.value)}
              >
                <MenuItem value={20}>Accounting</MenuItem>
                <MenuItem value={10}>Creators Panel</MenuItem>
                <MenuItem value={30}>Customer Services</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box ml={3}>
            <Button
              sx={{
                bgcolor: "blue",
                color: "white",
                borderRadius: "50px",
                px: 12,
                py: 1,
              }}
            >
              Crate
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateNewUser;
