import React from "react";
// import logo from "./logo.svg";
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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.paper,
    "& button": {
      color: theme.palette.common.black,
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Typography variant="h1">hello, world</Typography>
        <Button variant="contained" color="secondary">
          click me
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
