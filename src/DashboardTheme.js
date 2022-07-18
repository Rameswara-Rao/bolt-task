import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#424242",
    },
    secondary: {
      main: "#F5F5F5",
    },
  },
  typography: {
    fontHead: {
      fontFamily: "Inter",
      fontSize: "18px",
      color: "#000000",
      fontWeight: "700",
    },
    sideNavHead: {
      fontFamily: "Inter",
      fontSize: "24px",
      color: "#000000",
      fontWeight: "700",
    },
  },
});
