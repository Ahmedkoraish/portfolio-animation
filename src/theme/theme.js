import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fdc448",
    },
    secondary: {
      main: "#B7B89F",
    },
  },
  typography: {
      fontFamily: "'Stack Sans Headline', sans-serif",
      fontWeight: 900,
  },
});

export default theme;
