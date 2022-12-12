import { Grid, Container, Button, Typography, Card } from "@mui/material";
import React from "react";
import * as SVG from "../assets";
import { Box } from "@mui/system";
import EarningCard from "../components/earning-card";
import { Graph } from "./graph";
function Earnings() {
  return (
    <Container>
      <h2>Earnings</h2>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {[0, 1, 2].map((item, index) => (
          <EarningCard />
        ))}
      </Grid>
      <Box
        sx={{
          backgroundColor: "#F4F4F4",
          padding: "15px",
          width: 1150,
          marginTop: "54px",
          borderRadius: "12px",
        }}
      >
        <Graph />
      </Box>
    </Container>
  );
}
export default Earnings;
