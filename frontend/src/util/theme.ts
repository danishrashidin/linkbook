"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {},
  shape: {
    borderRadius: "8px",
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export { theme };
