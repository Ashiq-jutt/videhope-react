import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { filterDashboardImage } from "../assets";
import { filterProfile, withdrawPic } from "../assets/images";
const FilterEarning = () => {
  return (
    <Box>
      <Box container sx={{ display: "flex", direction: "row" }}>
        <Box>
          <Box
            sx={{
              mt: 10,
              mx: 8,
              borderRadius: "30px",
              display: "flex",
              bgcolor: "white",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <Box>
              <img
                src={filterDashboardImage}
                style={{ width: "384px", height: "263px", borderRadius: 25 }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              direction: "column",
              width: "384px",
              mx: 8,
            }}
          >
            <Typography
              fontSize={"24px"}
              mt={5}
              textAlign={"center"}
              color={"grey"}
            >
              Past Withdrawal
            </Typography>
            <Typography
              fontSize={"24px"}
              mt={5}
              textAlign={"center"}
              color={"grey"}
            >
              Filter
            </Typography>

            <Box sx={{ flex: 1, direction: "column", px: 10 }}>
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "blue",
                  color: "white",
                  boxShadow: "2px 2px 4px  #000",
                  borderRadius: "60px",
                  px: 11,
                  mt: 1,
                  py: "2px",
                }}
              >
                Daily
              </Button>
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "white",
                  color: "grey",
                  boxShadow: "2px 2px 4px  #000",
                  borderRadius: "60px",
                  px: 10,
                  my: 2,
                  py: "2px",
                }}
              >
                Monthly
              </Button>
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "white",
                  color: "grey",
                  boxShadow: "2px 2px 4px  #000",
                  borderRadius: "60px",
                  px: 11,

                  py: "2px",
                }}
              >
                yearly
              </Button>
            </Box>
            <Typography
              fontSize={"24px"}
              mt={3}
              textAlign={"center"}
              color={"grey"}
            >
              Custom
            </Typography>
            <Typography
              fontSize={"16px"}
              mt={3}
              //   textAlign={"center"}
              color={"grey"}
            >
              Start Date
            </Typography>
            <Typography
              fontSize={"16px"}
              mt={3}
              //   textAlign={""}
              color={"grey"}
            >
              End Date
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ ml: 7, mt: 2, fontSize: "24px", color: "grey" }}>
            Daily
          </Typography>
          <Box
            sx={{
              bgcolor: "white",
              width: "55vw",
              boxShadow: "1px 1px 5px  #000",
              borderRadius: "35px",
              direction: "column",
              px: 4,
              my: 1,
              mx: 4,
            }}
          >
            <Grid
              container
              sx={{
                width: "55vw",
                boxShadow: "1px 1px 5px  #000",
                borderRadius: "0px 0px 15px 15px ",
                direction: "row",
                py: "8px",
                mt: "1px",
              }}
            >
              <Grid
                container
                justifyContent={"center"}
                xs={4}
                fontSize={"18px"}
              >
                Approved
              </Grid>

              <Grid
                container
                fontSize={"18px"}
                justifyContent={"center"}
                xs={4}
              >
                Pending
              </Grid>
              <Grid
                container
                fontSize={"18px"}
                justifyContent={"center"}
                xs={4}
              >
                Rejected
              </Grid>
            </Grid>

            {[
              3,
              3,
              3,
              3,
              3,
              2,
              2,
              2,
              22,
              ,
              222,
              2,
              ,
              2,
              3,
              3,
              3,
              3,
              3,
              33,
              3,
              3,
              3,
            ].map((item, index) => (
              <Grid
                key={index}
                container
                sx={{
                  width: "55vw",
                  direction: "row",
                  py: 1.6,
                  // mt: "15px",
                }}
              >
                <Grid container justifyContent={"center"} xs={4}>
                  <img
                    source={withdrawPic}
                    // alt="djfhnfj"
                    style={{ height: 22, width: 33 }}
                  />
                </Grid>

                <Grid container justifyContent={"center"} xs={4}>
                  20$
                </Grid>
                <Grid container justifyContent={"center"} xs={4}>
                  3:04 pm
                </Grid>
              </Grid>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterEarning;
