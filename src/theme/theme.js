import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fdc448",
    },
    secondary: {
      main: "#5D6570",
    },
  },
  typography: {
      fontFamily: "'Stack Sans Headline', sans-serif",
      fontWeight: 900,
  },
});

export default theme;
