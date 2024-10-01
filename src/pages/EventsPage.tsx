import React from "react";
import { Typography } from "@mui/material";
import PageLayout from "../components/PageLayout";

const EventsPage: React.FC = () => {
  return (
    <PageLayout title="Upcoming Events">
      <Typography variant="body1">
        Stay updated with our latest events and community gatherings.
      </Typography>
    </PageLayout>
  );
};

export default EventsPage;
