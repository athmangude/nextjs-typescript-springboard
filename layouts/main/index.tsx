import { FunctionComponent } from "react";
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import styles from './index.css';

const MainLayoutWrapper = styled.div`${styles}`;

const MainLayout: FunctionComponent = ({ children }) => {
  return (
    <MainLayoutWrapper>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6">
            NextJS TypeScript SpringBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <main className="content">
        {children}
      </main>
    </MainLayoutWrapper>
  );
}

export default MainLayout;