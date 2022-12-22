import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  employedPortal,
  empPic,
  newestPic,
  serviceImg,
} from "../assets/images";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
const NewestDetail = () => {
  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(true);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked1);
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      container
    >
      <Box
        container
        sx={{
          mt: 4,
          height: "250px",
          width: "470px",
          bgcolor: "white",
          boxShadow: "1px 1px 5px  #000",
          borderRadius: "50px",
          display: "flex",
        }}
      >
        <Grid
          sx={{
            // height: "250px",
            width: "235px",
          }}
        >
          <img
            src={newestPic}
            style={{
              height: "220px",
              width: "220px",
              borderRadius: "100px",
            }}
          />
        </Grid>
        <Box
          style={{
            width: "235px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography fontSize={"18px"}>Jackson</Typography>
            <Typography fontSize={"12px"}>Jacksonmariay@gmail.com</Typography>
            <Box
              sx={{
                height: "35px",
                width: "200px",
                bgcolor: "white",
                boxShadow: "1px 1px 5px  #000",
                borderRadius: "10px",
                display: "flex",
                mt: 2,
                alignSelf: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography m={1} fontSize={"12px"}>
                Verified
              </Typography>
              <Switch
                checked1={checked1}
                onChange={handleChange1}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
            <Box
              sx={{
                height: "35px",
                width: "200px",
                bgcolor: "white",
                boxShadow: "1px 1px 5px  #000",
                borderRadius: "10px",
                display: "flex",
                mt: 2,
                alignSelf: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography m={1} fontSize={"12px"}>
                Unverified
              </Typography>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewestDetail;