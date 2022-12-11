import { Grid, Container, Button, Typography, Card } from "@mui/material";
import React from "react";
// import { View, Text } from "react-native";
import profile from "../assets/settingProfile.svg";
import left from "../assets/left.svg";
import * as SVG from "../assets";
import { Box } from "@mui/system";
import EarningCard from "../components/earning-card";
function Earnings() {

  return (
    <Container>
      <h2>Earnings</h2>
      <Grid container
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        {[0, 1, 2].map((item, index) => <EarningCard />)}
      </Grid>
      <Box sx={{ backgroundColor: '#F4F4F4', padding: 15, marginTop: '54px', borderRadius: '12px' }}>
      </Box>
    </Container>

  );
}
export default Earnings;
