import React from "react";
import { Typography } from "@mui/material";
import PageLayout from "../components/PageLayout";

const EventsPage: React.FC = () => {
  return (
    <PageLayout title="Contact Us">
      <Typography variant="body1">
        Get in touch with us for any questions or inquiries.
      </Typography>
    </PageLayout>
  );
};

export default EventsPage;
