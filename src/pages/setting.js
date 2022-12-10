import { Grid, Container, Button } from "@mui/material";
import React from "react";
// import { View, Text } from "react-native";
import profile from "../assets/settingProfile.svg";
import left from "../assets/left.svg";
function Setting() {
  const [name, setName] = React.useState(0);
  const handleChangeState = (val) => {
    setName(val);
  };
  return (
    <Container>
      <h2>Setting</h2>

      <Grid container sx={{ backgroundColor: "#F3F8FF" }}>
        <Grid>
          <img style={{ paddingLeft: 10 }} src={profile}></img>
        </Grid>
        <Grid>
          <h4 style={{ paddingLeft: 8 }}>Tyler Smith</h4>
        </Grid>
      </Grid>
      <Grid container sx={{ backgroundColor: "#F8F8F8", mt: 6 }}>
        <Button>
          <h4 style={{ paddingLeft: 30, color: "black" }}>Manage comissions</h4>
        </Button>
      </Grid>
      <Grid container sx={{ backgroundColor: "#F8F8F8", mt: 6 }}>
        <Button onClick={() => handleChangeState(1)}>
          <h4 style={{ paddingLeft: 30, color: "black" }}>change Name</h4>
        </Button>
      </Grid>
      <Grid container sx={{ backgroundColor: "#F8F8F8", mt: 6 }}>
        <Button>
          <h4 style={{ paddingLeft: 25, color: "black" }}>change Password</h4>
        </Button>
      </Grid>
    </Container>
  );
}
export default Setting;
