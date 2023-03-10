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
import { reportedImg } from "../assets/images";
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
          mt: -3,
          mr: 120,
        }}
      >
        Content Reported
      </Button>
      <Box
        sx={{
          my: 3,
          bgcolor: "white",
          boxShadow: { xs: "none", sm: "1px 1px 5px  #000" },
          borderRadius: "30px",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" },
          width: { xs: "10px", sm: "600px",md:'800px',lg:"1000px" },
        }}
      >
        {[1, 2,6,7,7, 3].map((item, index) => (
          <Grid padding={{lg:3.5,md:6,sm:6,xs:7}}>
            <Box
            
              sx={{
                width: "14vw",
                display: "flex",
                height: "22vw",
                justifyContent: "center",
                borderRadius: "20px",
                alignItems: "center",
                boxShadow: "1px 1px 7px  #000",
                flexDirection: "column",
                marginBottom: { xs: "150px", sm: "0px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  display: "flex",
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
                  src={reportedImg}
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
