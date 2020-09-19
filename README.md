# mui-card

Learn [Material-UI](https://material-ui.com) with a card

---

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->

**Table of Contents**

- [mui-card](#mui-card)
  - [Usage](#usage)
    - [Install](#install)
    - [Serve](#serve)
  - [Prototypes](#prototypes)
  - [Lessons](#lessons)
    - [1. Setup](#1-setup)
      - [1.1. Install](#11-install)
      - [1.2. Configure](#12-configure)
        - [1.2.1. CssBaseline](#121-cssbaseline)
        - [1.2.2. Roboto font](#122-roboto-font)
        - [1.2.3. Viewport](#123-viewport)
    - [2. Theming](#2-theming)
      - [2.1. makeStyles](#21-makestyles)
      - [2.2. useTheme](#22-usetheme)
      - [2.3. hue[shade]](#23-hueshade)
      - [2.4. Custom theme](#24-custom-theme)
      - [2.5. responsiveFontSizes](#25-responsivefontsizes)
    - [3. Layout](#3-layout)
      - [3.1. Box](#31-box)
      - [3.2. Container](#32-container)
      - [3.3. Grid](#33-grid)
      - [3.4. Hidden](#34-hidden)
    - [4. Inputs](#4-inputs)
      - [4.1. Button](#41-button)
    - [5. Navigation](#5-navigation)
      - [5.1. Links](#51-links)
    - [6. Surfaces](#6-surfaces)
      - [6.1. Card](#61-card)
      - [6.2. Paper](#62-paper)
    - [7. Data Display](#7-data-display)
      - [7.1. Avatar](#71-avatar)
      - [7.2. Divider](#72-divider)
      - [7.3 Typography](#73-typography)
    - [8. Utils](#8-utils)
      - [8.1. CssBaseline](#81-cssbaseline)
  - [License](#license)

<!-- markdown-toc end -->

---

## Usage

### Install

```shell
$ npm [install|isntall|add|i]
```

### Serve

```shell
$ npm start
```

---

## Prototypes

[![](./.prototypes/thumbnails/breadboard.jpg)](./.prototypes/images/breadboard.jpg "Breadboard")
[![](./.prototypes/thumbnails/sketch.jpg)](./.prototypes/images/sketch.jpg "Sketch")
[![](./.prototypes/thumbnails/elements.jpg)](./.prototypes/images/elements.jpg "Elements")

---

## Lessons

### 1. Setup

#### 1.1. Install

```shell
$ npm i @material-ui/{core,icons} \
        fontsource-roboto
```

> **Notes:**
>
> - [`icons`](https://material-ui.com/components/material-icons) package are converted [`SvgIcon`](https://material-ui.com/api/svg-icon) components
> - `SvgIcon`s use [PascalCase](https://wiki.c2.com/?PascalCase) as naming convention
> - [Roboto](https://fonts.google.com/specimen/Roboto) fonts must be specified manually

#### 1.2. Configure

##### 1.2.1. CssBaseline

```javascript
// file: src/App.js
// …

import { CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <div …>
      <CssBaseline />
    // …
```

> **Note:** <br />
> The [`<CssBaseline />`](https://material-ui.com/components/css-baseline) fix inconsistencies across browsers and devices with an opinionated resets.

##### 1.2.2. Roboto font

```javascript
// file: src/App.js
// …
import "fontsource-roboto/300.css";
import "fontsource-roboto/400.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";

import { …, Typography } from "@material-ui/core";

const App = () => {
  return (
    <div …>
      // …
      <Typography variant="h1">hello, world</Typography>
    // …
```

> **Note:** <br />
> Only `300`, `400`, `500` and `700` of typography font weights are being used by Material-UI.

##### 1.2.3. Viewport

```html
<!-- file: public/index.html -->
<!-- … -->
<html …>
  <head>
    <!-- … -->
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
    <!-- … -->
  </head>
  <!-- … -->
</html>
```

> **Note:** <br />
> The [`<meta name="viewport" />`](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag#Enter_viewport_meta_tag) ensures proper rendering and touch zooming for all browsers and devices.

### 2. Theming

#### 2.1. makeStyles

```javascript
// file: src/App.js
// …
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette: { common: { black, white } } }) => ({
  root: {
    backgroundColor: black,
    "& h1": { color: white },
  },
}));

const App = () => {
  const { root } = useStyles();
  return (
    <div className={root}>
      // …
```

> **Notes:**
>
> - [`makeStyles`](https://material-ui.com/styles/api/#makestyles-styles-options-hook) links a style sheet with a function component (returns a hook)
> - `makeStyles(props)` can mix values of component `props` with `theme` object
> - `theme` property object contains the design properties of the application
> - `"&"` implies child elements under the element where `root` was assigned

#### 2.2. useTheme

```javascript
// file: src/App.js
// …
import { …, useTheme } from "@material-ui/core/styles";

// …
const App = () => {
  // …
  const {
    palette: { type },
  } = useTheme();

  return (
    <div …>
      // …
      <Typography …>hello, {type} world…
```

> **Note:** <br />
> The [`useTheme`](https://material-ui.com/styles/api/#usetheme-theme) hook returns the `theme` object that has access to theme's properties.

#### 2.3. hue[shade]

```javascript
// file: src/App.js
// …
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: grey[900], // near-black: #212121
    "& h1": { color: grey[50] }, // near-white: #fafafa
  // …
```

> **Note:** <br />
> The `grey` object is one of MUI's [color palette](https://material-ui.com/customization/color/#color-palette)s (`grey[50…900]` means `hue[shade]`).

#### 2.4. Custom theme

```javascript
// file: src/App.js
// …
import { createMuiTheme, …, ThemeProvider, … } from "@material-ui/core/styles";
// …
const theme = createMuiTheme({ palette: { type: "dark" } });

const App = () => {
  // …
  return (
    <ThemeProvider theme={theme}>
      // …
    </ThemeProvider>
  // …
```

> **Notes:**
>
> - [`createMuiTheme`](https://material-ui.com/customization/theming/#createmuitheme-options-args-theme) returns the [default theme](https://material-ui.com/customization/default-theme) object that can be overridden
> - [`<ThemeProvider>`](https://material-ui.com/styles/api/#themeprovider) can pass `theme` as property to allow its children to access theme properties

#### 2.5. responsiveFontSizes

```javascript
// file: src/App.js
// …
import { …, responsiveFontSizes, … } from "@material-ui/core/styles";
// …
let theme = createMuiTheme( … )
theme = responsiveFontSizes(theme);
// …
```

> **Note:** <br />
> The [`responsiveFontSizes`](https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme) generates responsive typography for the theme.

### 3. Layout

#### 3.1. Box

```javascript
// file: src/App.js
// …
import { Box, … } from "@material-ui/core";

const App …
  // …
  return (
    // …
    <ThemeProvider …>
      // …
        <Typography …>
          hello,
          <Box component="span" bgcolor="text.secondary" color="text.primary">
            {type}
          </Box>
          world
        …
```

> **Notes:**
>
> - [`<Box>`](https://material-ui.com/components/box) can access the full list of [style functions](https://material-ui.com/system/basics/#all-inclusive)
> - Use the `component` property to replace the element wrapper

#### 3.2. Container

```javascript
// file: src/App.js
// …
import { …, Container, … } from "@material-ui/core";
// …
const App = () => {
  // …
  return (
    <ThemeProvider …>
      <Container className={root} disableGutters={true}>
        // …
      </Container>
    // …
```

> **Notes:**
>
> - [`<Container>`](https://material-ui.com/components/container) centers its children horizontally
> - By default, `maxWidth` uses `lg` as grid breakpoint
> - `disableGutters` removes left and right `padding`

#### 3.3. Grid

```javascript
// file: src/App.js
// …
import { Box, …, Grid, Paper, Typography } from "@material-ui/core";
import { Mood } from "@material-ui/icons";
// …
const App = () => {
  // …
  return (
    // …
      <Container …>
        <Grid
          component={Paper}
          elevation={0}
          container
          direction="column"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <Box mt={4}>
              <img
                alt=""
                src="https://via.placeholder.com/96x96"
                width="96"
                height="96"
              />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h1">title</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">subtitle</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">description</Typography>
          </Grid>
          <Grid item container justify="space-evenly">
            <Mood />
          </Grid>
        </Grid>
      </Container>
    // …
```

> **Notes:**
>
> - [`<Grid>`](https://material-ui.com/components/grid) is based on [Material Design](https://material.io/design/layout/responsive-layout-grid.html)'s 12-column [responsive layout grid](https://material.io/design/layout/responsive-layout-grid.html)
> - It implements the grid system using [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox-1)
> - Types of grid layout includes: `container` or `item`
> - Supports nested grids by using both `container` and `item`
> - Supports five available grid [breakpoints](https://material-ui.com/customization/breakpoints/#default-breakpoints): `xs`, `sm`, `md`, `lg` and `xl`
> - Each grid uses percentage (fluid) and relative to parent element
> - Each grid has `padding` used to space content within the each grid item
> - Each grid are separated with [`spacing`](https://material-ui.com/customization/spacing) theme property
> - Each `spacing` is `8px` (minimum: `0`, maximum: `10`)
> - Each grid automatically resizes on available space (auto-layout)
> - [`<Paper>`](https://material-ui.com/components/paper) can be used as `<Grid>`'s `component` wrapper
> - `<Paper>`'s `props` becomes part of `<Grid>`'s `props`

#### 3.4. Hidden

```javascript
// file: src/App.js
// …
import { …, Hidden, … } from "@material-ui/core";
import { …, MoreHoriz } from "@material-ui/icons";
// …
const App = () => {
  // …
  return (
    // …
        <Grid …>
          // …
            <Mood />
            <Hidden smUp>
              <MoreHoriz />
            </Hidden>
          // …
```

> **Notes:**
>
> - [`<Hidden>`](https://material-ui.com/components/hidden) toggles component visibility with breakpoints
> - It is used in conjuction with `<Grid>`
> - By default, `js` is used to responsively hide components
> - `up` or `down` `props` hides _at_ or _above_ or _below_ breakpoint
> - `only` hides _at exact_ (`String` or `Array`) of breakpoint(s)

### 4. Inputs

#### 4.1. Button

```javascript
// file: src/App.js
// …
import { …, IconButton, … } from "@material-ui/core";
import { Facebook, … } from "@material-ui/icons";
// …
const App …
  // …
  return (
    // …
          <Grid item container justify="space-evenly">
            <IconButton href="https://facebook.com">
              <Facebook />
            </IconButton>
            // …
```

> **Notes:**
>
> - [`<Button>`](https://material-ui.com/components/buttons) communicates user actions
> - `<Button>`s typically is used in conjunction with `onClick` event
> - Use `contained` as `variant` `props` for primary and highly important actions
> - Use `outlined` as `variant` `props` for non-primary but important actions
> - Use a regular button (without `variant` `props`) for non-critical actions
> - Use `startIcon` `props` to prepend `<Button>` with an [icon](https://material-ui.com/ecomponents/icons) component
> - Use `<IconButton>` component to simply render a clickable icon
> - Use `<LoadingButton>` component to show pending state and disable interaction
> - For internal links, use `<Link>` from [`react-router-dom`](https://github.com/ReactTraining/react-router) with `component` and `to` `props`
> - `react-router-dom`'s `<Link>` must be within [`react-router`](https://reactrouter.com)'s '`<MemoryRouter>`
> - For external links, use `href` `props` (e.g. `<Button href={url}>…`); `url`'s [protocol](https://developer.mozilla.org/en-US/docs/Glossary/Protocol) is required

### 5. Navigation

#### 5.1. Links

```javascript
// file: src/App.js
// …
import { …, Link, … } from "@material-ui/core";
// …
const App …
  // …
  return (
    // …
          <Grid item>
            <Link variant="h1" color="inherit">
              title
            </Link>
          // …
```

> **Notes:**
>
> - [`<Link>`](https://material-ui.com/components/links) customize anchor elements with theme colors and typography styles
> - `<Link>` is built on top of `<Typography>` and shares all of its `props`
> - Use `rel="noopener"` to prevent external redirects
> - Use `rel="noreferrer"` to prevent sending _Referer_ header
> - Implementing internal links is similar to `<Button>`

### 6. Surfaces

#### 6.1. Card

```javascript
// file: src/App.js
// …
import {
  …,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  …
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // …
    textAlign: "center",
    // …
    "& .MuiCardHeader-root": { display: "inline" },
    "& .MuiCardHeader-avatar": { marginTop: theme.spacing(4) },
    "& .MuiCardActions-root": { display: "flex", justifyContent: "center" },
  },
}));

// …
const App …
  // …
  return (
    // …
      <Container …>
        <Card component={Paper}>
          <CardHeader
            avatar={
              <img
                alt=""
                src="https://via.placeholder.com/96x96"
                width="96"
                height="96"
              />
            }
          />
          <CardContent>
            <Link variant="h1" color="inherit">
              title
            </Link>
            <Typography variant="subtitle1">subtitle</Typography>
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
    // …
```

> **Notes:**
>
> - [`<Card>`](https://material-ui.com/components/cards) wraps content and actions for a single topic
> - `<CardMedia>` acts as banner and `<CardHeader>` as header
> - `<CardContent>` acts as body and `<CardActions>` as footer
> - `<CardActions>` contain UI controls and is placed at the bottom
> - `<Card>` inherits from `<Paper>` and so its `props` are availabe
> - Use _only_ as entry point to a more complex and detailed information
> - Use `outline` as value for `variant` `props` to render an outlined card

#### 6.2. Paper

```javascript
// Usage:
<Paper>…</Paper>                      // wraps child components
<Wrapper component={Paper}></Wrapper> // use <Paper> as wrapper
```

> **Notes:**
>
> - [`<Paper>`](https://material-ui.com/components/paper) tries to emulate properties of a real paper to the screen
> - It can be used to explicitly wrap child elements
> - Or be assigned as wrapper with `component` `props`
> - It is typically used as the _main_ background of the application

### 7. Data Display

#### 7.1. Avatar

```javascript
// file: src/App.js
// …
import { Avatar, … } from "@material-ui/core";
// …
const useStyles …
  root: {
    // …
    "& .MuiAvatar-root": {
      margin: "0 auto",
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  },
}));
// …
const App …
  // …
  return (
    // …
          <CardHeader
            avatar={<Avatar alt="" src="https://via.placeholder.com/96x96" />}
          />
          // …
```

> **Notes:**
>
> - [`<Avatar>`](https://material-ui.com/components/avatars) is used as graphical representation of a user
> - Use `src` or `srcSet` `props` to display an image avatar
> - Wrap icon or text as `children` `props` to display as avatar
> - Use `width` and `height` CSS properties to resize the avatar
> - Use `variant` `props` to shape the avatar
> - Broken avatar fallback from `children` to `alt` to a generic icon
> - Use `AvatarGroup` to render stacked avatars
> - Use [`<Badge>`](https://material-ui.com/components/badges) for online or followers effect

#### 7.2. Divider

```javascript
// file: src/App.js
// …
import { …, Divider, … } from "@material-ui/core";
// …
const App …
  // …
  return (
    // …
            <Typography …>…</Typography>
            <Divider variant="middle" />
            // …
```

> **Notes:**
>
> - [`<Divider>`](https://material-ui.com/components/dividers) separates different contents into clear groups
> - `<Divider />` uses `<hr />` by default (replace with `component` `props`)
> - Use `divider` `props` on `<ListItem>` to save rendering it separately
> - Use `li` as `component` `props` value when used with `<li>` elements
> - Use `div` as `component` `props` value to include text
> - Use `variant` `props` to specify style (e.g. `inset`)
> - Use `textAlign` `props` to align text (e.g. `right`)
> - Use `orientation` `props` to set orientation (e.g. `vertical`)

#### 7.3 Typography

```javascript
// Usage:
<Typography>…</Typography>
```

> **Notes:**
>
> - [`<Typography>`](https://material-ui.com/components/typography) is used to present a designed content
> - It uses [type scale](https://material.io/design/typography/the-type-system.html#type-scale) for consistent progression of font sizes
> - It uses _4:5:1_ [color contrast ratio](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) and [`rem`](https://next.material-ui.com/customization/typography/#font-size) as font size unit
> - Use [`theme.typography`](https://material-ui.com/customization/default-theme/?expand-path=$.typography) to access typography properties
> - Change elements with `createMuiTheme` function and `variantMapping` object
> - `variantMapping` is under `components.MuiTypography.defaultProps` object

### 8. Utils

#### 8.1. CssBaseline

```javascript
// Usage:
<CssBaseline />                          // global reset
<ScopedCssBaseline>…</ScopedCssBaseline> // scoped reset
```

> **Notes:**
>
> - [`<CssBaseline>`](https://material-ui.com/components/css-baseline) normalizes elements similar to [normalize.css](https://github.com/necolas/normalize.css)
> - Set `<body>`'s `margin` value to `0`
> - Set `<body>`'s background to `theme.palette.background.default`
> - For print devices, `<body>`'s background is set to plain white
> - Set `<html>`'s `box-sizing` value to `border-box`
> - Set all elements' `box-sizing` value to `inherit` (including `::before` and `::after`)
> - Set `<body>`'s font properties to `theme.typography.body2`
> - No `font-size` is set on `<html>`
> - Set `<b>` and `<strong>`'s `font-weight` value to `theme.typography.fontWeightBold`
> - Set `<html>` and `<body>`'s `font-smoothing` value to `antialiased`

---

## License

`mui-card` is licensed under [MIT](./LICENSE).
