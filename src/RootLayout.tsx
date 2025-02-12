import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import { Box, Alert } from '@chakra-ui/react';

function RootLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust 768px to your desired breakpoint for mobile
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box>
      <Navigation />
      <Box p={5}>
        {/* Only show the alert to mobile users */}
        {isMobile && (
          <Alert.Root status="error">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Mobile View</Alert.Title>
            <Alert.Description>
            This site is best viewed on a tablet or laptop. You may experience limitations on mobile devices.
            </Alert.Description>
          </Alert.Content>
        </Alert.Root>
        )}

        {/* Render the Outlet for the rest of your page */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default RootLayout;
