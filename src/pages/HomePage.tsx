import React from "react";
import { Grid2, Button, Typography } from "@mui/material";
import PageLayout from "../components/PageLayout";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <PageLayout
      title="Bringing together CBS Alumni in Beijing"
      backgroundImage=""
    >
      {/* Two columns */}
      <Grid2 container spacing={10} style={{ padding: '10px' }} direction="row">
        <Grid2
          container
          direction="column"
          alignItems="initial"
          justifyContent="center"
          size={{xs: 10, md: 4}}
        >
          <Typography variant="h4">
            Bringing together CBS Alumni in Beijing
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/join/how"
            style={{
              backgroundColor: '#1976d2',
              marginTop: '0px',
            }}
          >
            Join us
          </Button>
        </Grid2>

        <Grid2 size={{xs: 12, md: 6}}>
          <Typography variant="body1">
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
        </Grid2>
      </Grid2>


    </PageLayout>
  );
};

export default HomePage;
