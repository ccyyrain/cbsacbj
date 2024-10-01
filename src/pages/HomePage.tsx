import React from "react";
import { Typography } from "@mui/material";
import PageLayout from "../components/PageLayout";

const HomePage: React.FC = () => {
  return (
    <PageLayout
      title="Bringing together CBS Alumni in Beijing"
      backgroundImage=""
    >
      <Typography variant="body1" paragraph>
        Welcome to the Columbia Business School Alumni Club of Beijing, a club
        run by and dedicated to CBS alumni in Beijing. Our mission is to ENGAGE
        the CBS community, ENRICH the CBS lifelong experience, and to ENHANCE
        the CBS brand.
      </Typography>
      <Typography variant="body1">
        Through social events, speaker series, outreach functions, and
        mentorship programs, CBSACBJ offers many opportunities for you to join
        us.
      </Typography>
    </PageLayout>
  );
};

export default HomePage;
