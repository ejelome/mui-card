import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import "fontsource-roboto/300.css";
import "fontsource-roboto/400.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";

import { Box, CssBaseline, Typography } from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  responsiveFontSizes,
  useTheme,
} from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: grey[900],
    "& h1": { color: grey[50] },
  },
}));

let theme = createMuiTheme({ palette: { type: "dark" } });
theme = responsiveFontSizes(theme);

const App = () => {
  const { root } = useStyles();
  const {
    palette: { type },
  } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className={root}>
        <CssBaseline />
        <Typography variant="h1">
          hello,
          <Box component="span" bgcolor="text.secondary" color="text.primary">
            {type}
          </Box>
          world
        </Typography>
      </div>
    </ThemeProvider>
  );
};

export default App;
