import { Box, Container } from "@mui/material";
import React from "react";
import ControlledOpenSelect from "../components/selector";
import BasicTable from "../components/Table";
export default function AllUser() {
  return (
    <Container
      maxWidth="xl"
      //   sx={{ ml: 35, mt: 10 }}
    >
      <Box style={{ flexDirection: "row" }}>
        <h2>All users (344)</h2>
        <h6 style={{ justyfyContent: "flex" }}>All :(344)</h6>
      </Box>
      {/* <ControlledOpenSelect /> */}
      <BasicTable />
    </Container>
  );
}
