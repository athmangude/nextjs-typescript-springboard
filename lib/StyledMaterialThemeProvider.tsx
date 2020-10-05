/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { FunctionComponent } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

interface Props {
  theme: Theme,
}

const MyThemeProvider: FunctionComponent<Props> = ({ theme, children }) => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <StyledThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          {children}
        </MuiThemeProvider>
      </StyledThemeProvider>
    </StylesProvider>
  );
}

export default MyThemeProvider;