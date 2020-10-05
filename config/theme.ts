import { createMuiTheme } from "@material-ui/core/styles";
import { red, blue, yellow, green } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: { ...blue, main: blue.A400 },
    secondary: { ...green, main: green.A400 },
    background: {
      default: "#fafafa",
    },
    info: { ...blue, main: blue.A400 },
    success: { ...green, main: green.A400 },
    error: { ...red, main: red.A400 },
    warning: { ...yellow, main: yellow.A400 },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h2",
        subtitle2: "h3",
        body1: "span",
        body2: "span",
      },
    },
  },
  overrides: {
    MuiButton: {
      root: {
        boxShadow: "none",
      },
      contained: {
        boxShadow: "none",
      },
    },
    MuiExpansionPanel: {
      root: {
        boxShadow: "none",
        borderRadius: 0,
      },
    },
    MuiPaper: {
      root: {
        boxShadow: "none",
        borderRadius: 0,
      },
      rounded: {
        borderRadius: 0,
      },
    },
    MuiList: {
      root: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
      },
    },
    MuiMenuItem: {
      root: {
        display: "flex",
        alignItems: "flex-start !important",
        justifyContent: "flex-start !important",
        padding: "10px !important",
        width: "100%",
      },
    },
  },
});

export default theme;