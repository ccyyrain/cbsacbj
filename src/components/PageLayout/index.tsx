import React from "react";
import { Container, Box, Typography } from "@mui/material";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  backgroundImage?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  backgroundImage,
}) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: { xs: "120px", md: "150px" },
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textShadow: backgroundImage
            ? "0px 4px 6px rgba(0, 0, 0, 0.3)"
            : "none",
          backgroundColor: backgroundImage ? "transparent" : "#333",
        }}
      >
        <Typography variant="h3">{title}</Typography>
      </Box>

      <Container>
        <Box
          sx={{
            // textAlign: "center",
            paddingTop: { xs: "24px", md: "48px" },
            paddingBottom: { xs: "24px", md: "48px" },
          }}
        >
          {children}
        </Box>
      </Container>
    </>
  );
};

export default PageLayout;
