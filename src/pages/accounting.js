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
  Stack,
  Alert,
} from "@mui/material";
import React from "react";
import { accountingImage } from "../assets/images";
import { useNavigate } from "react-router-dom";

const Accounting = () => {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection="column"
      mt={"-40px"}
    >
      <Box
        sx={{
          //   width: "cal(100% - 700px)",
          bgcolor: "white",

          display: "flex",
          bgcolor: "white",
          flexDirection: "column",
          mb: 1,
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          mb={1.5}
          sx={{
            px: "12vw",
            //   width: "cal(100% - 700px)",
            bgcolor: "white",
            boxShadow: "2px 2px 4px  #000",
            borderRadius: "0px 0px 80px 80px",
            // borderBottomRightRadius: "80px",
            // pt: 2,
            py: 5,
          }}
        >
          <img src={accountingImage} width="220px" height="232px" />
        </Box>

        <Button
          onClick={() => navigate("/subscription")}
          sx={{
            bgcolor: "white",
            color: "grey",
            boxShadow: "2px 2px 4px  #000",
            borderRadius: "60px",
            px: 14,
            py: 1.4,
            mt: 3,
          }}
        >
          Subscriptions
        </Button>

        <Button
          onClick={() => navigate("/filterEarning")}
          sx={{
            bgcolor: "white",
            color: "grey",
            boxShadow: "2px 2px 4px  #000",
            borderRadius: "60px",
            px: 12.2,
            py: 1.4,
            mt: 2,
          }}
        >
          Widthraw Request
        </Button>
        <Button
          onClick={() => navigate("/creatorEarning")}
          sx={{
            bgcolor: "white",
            color: "grey",
            boxShadow: "2px 2px 4px  #000",
            borderRadius: "60px",
            px: 12.2,
            py: 1.4,
            mt: 2,
          }}
        >
          Creator Earnings
        </Button>
        <Button
          onClick={() => navigate("/earnings")}
          sx={{
            bgcolor: "white",
            color: "grey",
            boxShadow: "2px 2px 4px  #000",
            borderRadius: "60px",
            px: 11.9,
            py: 1.4,
            mt: 2,
          }}
        >
          Subscribed Amount
        </Button>
      </Box>
    </Box>
  );
};

export default Accounting;
