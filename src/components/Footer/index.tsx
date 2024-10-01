import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Donation from "../Donation"; // Import the Donation component

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#f8f9fa",
        borderTop: "1px solid #e0e0e0",
        padding: "16px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px -2px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flexDirection: { xs: "column", md: "row" }, // Stack in mobile, row in desktop
        }}
      >
        <Typography
          variant="body1"
          sx={{ marginBottom: { xs: "16px", md: 0 } }}
        >
          Columbia Business School Alumni Club of Beijing
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#0A66C2" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#4267B2" }}
            >
              <FacebookIcon />
            </IconButton>
          </Box>
          <Donation />
        </Box>
      </Box>
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          marginTop: "16px",
          width: "100%",
        }}
      >
        © {new Date().getFullYear()} Columbia Business School Alumni Club of
        Beijing. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
