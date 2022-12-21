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
  employedPortal,
  empPic,
  newestPic,
  repoeredImg,
  serviceImg,
} from "../assets/images";
// import Masonry from "@mui/lab/Masonry";
const ContentReport = () => {
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
      flexDirection="column"
    >
      <Button
        sx={{
          variant: "outlined",
          color: "black",
          boxShadow: "1px 1px 5px  #000",
          width: "210px",
          height: "50px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          mt: -0.9,
          mr: 120,
        }}
      >
        Content Reported
      </Button>
      <Box
        container
        sx={{
          my: 3,
          //   width: "1150px",
          bgcolor: "white",
          boxShadow: "1px 1px 5px  #000",
          borderRadius: "30px",
          display: "flex",
          flexWrap: "wrap",
          mx: 10,
          p: 1,
        }}
      >
        {[1, 2, 3, 3, 3].map((item, index) => (
          <Grid m={3}>
            <Box
              style={{
                width: "235px",
                display: "flex",
                height: "320px",
                justifyContent: "center",
                borderRadius: "30px",
                alignItems: "center",
                boxShadow: "1px 1px 7px  #000",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  fontSize={18}
                  mt={-1}
                  mb={1}
                  color="grey"
                  textAlign="center"
                >
                  @jacob
                </Typography>
                <img
                  src={repoeredImg}
                  style={{ height: 170, width: 170, borderRadius: "30px" }}
                />
                <Button
                  sx={{
                    variant: "outlined",
                    color: "white",
                    width: "180px",
                    height: "30px",
                    borderRadius: "20px",
                    bgcolor: "blue",
                    mt: 1,
                    mb: 1,
                  }}
                >
                  Block Account
                </Button>
                <Button
                  sx={{
                    variant: "outlined",
                    color: "black",
                    boxShadow: "1px 1px 2px  #000",
                    width: "180px",
                    height: "30px",
                    borderRadius: "20px",
                  }}
                >
                  Content Reported
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default ContentReport;
