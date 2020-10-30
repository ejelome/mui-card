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
  Paper,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import { Facebook, MoreHoriz } from "@material-ui/icons";
import React from "react";

let theme = createMuiTheme({ palette: { type: "dark" } });
theme = responsiveFontSizes(theme);
const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: grey[900],
    textAlign: "center", // near-black: #212121
    "& h1": { color: grey[50] }, // near-white: #fafafa,
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

const App = () => {
  const { root } = useStyles();
  const { palette } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container className={root} disableGutters={true}>
        <CssBaseline />
        <Card component={Paper}>
          <CardHeader
            avatar={<Avatar alt="" src="https://via.placeholder.com/96x96" />}
          />
          <CardContent>
            <Link variant="h1" color="inherit">
              hello, {palette.type} title
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
