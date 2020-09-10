import React from "react";
import "./App.css";

import "fontsource-roboto/300.css";
import "fontsource-roboto/400.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";

import { Button, CssBaseline, Typography } from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  responsiveFontSizes,
  useTheme,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      secondary: {
        main: orange[50],
      },
    },
  })
);

const useStyles = makeStyles(({ palette: { secondary, common } }) => ({
  root: {
    backgroundColor: secondary.paper,
    "& button": {
      color: common.black,
    },
  },
}));

const App = () => {
  const { root } = useStyles();
  const {
    palette: { type },
  } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className={root}>
        <CssBaseline />
        <Typography variant="h1">hello, {type} world</Typography>
        <Button variant="contained" color="secondary">
          click me
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
