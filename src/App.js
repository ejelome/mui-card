// import logo from "./logo.svg";
import "./App.css";
import "fontsource-roboto/300.css";
import "fontsource-roboto/400.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  CssBaseline,
  Divider,
  Hidden,
  IconButton,
  Link,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Facebook, MoreHoriz } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: grey[900],
    maxWidth: theme.breakpoints.values.sm,
    textAlign: "center",
    "& h1": { color: grey[50] },
    "& .MuiCardHeader-root": { display: "inline" },
    "& .MuiCardHeader-avatar": { marginTop: theme.spacing(4) },
    "& .MuiCardActions-root": { display: "flex", justifyContent: "center" },
    "& .MuiAvatar-root": {
      margin: "0 auto",
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  },
}));

let theme = createMuiTheme({ palette: { type: "dark" } });
theme = responsiveFontSizes(theme);

const App = () => {
  const { root } = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className={root} disableGutters={true}>
        <Card>
          <CardHeader
            avatar={<Avatar alt="" src="https://via.placeholder.com/96x96" />}
          />
          <CardContent>
            <Link variant="h1" color="inherit">
              title
            </Link>
            <Typography variant="subtitle1">subtitle</Typography>
            <Divider variant="middle" />
            <Typography variant="body1">description</Typography>
          </CardContent>
        </Card>
        <CardActions>
          <IconButton href="https://facebook.com">
            <Facebook />
          </IconButton>
          <Hidden smUp>
            <MoreHoriz />
          </Hidden>
        </CardActions>
      </Container>
    </ThemeProvider>
  );
};

export default App;
