import { FunctionComponent } from "react";
import Box from '@material-ui/core/Box';

import MainLayout from 'layouts/main';

import styled from 'styled-components';
import styles from './index.css';
import { Typography } from "@material-ui/core";

const HomeWrapper = styled(Box)`${styles}`;

const Home: FunctionComponent = () => (
  <MainLayout>
    <HomeWrapper>
      <Box className="container">
        <Typography variant="h4">Build something Amazing</Typography>
        <Typography paragraph>Get started on your NextJS project fast.</Typography>
      </Box>
    </HomeWrapper>
  </MainLayout>
);

export default Home;