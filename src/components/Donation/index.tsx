import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  TextField,
} from "@mui/material";

const Donation: React.FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleDialogOpen}>
        Donate
      </Button>
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Make a Donation</DialogTitle>
        <DialogContent>
          <Typography>
            Thank you for your support! Please fill out the form below to
            donate.
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "16px",
            }}
          >
            <TextField required label="Name" fullWidth variant="outlined" />
            <TextField
              required
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              required
              label="Donation Amount"
              type="number"
              fullWidth
              variant="outlined"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDialogClose} color="primary">
            Donate
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Donation;
