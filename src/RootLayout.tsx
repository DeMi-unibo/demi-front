import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import { Box } from '@chakra-ui/react';

function RootLayout() {
  return (
    <Box>
      <Navigation />
      <Box p={5}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default RootLayout;