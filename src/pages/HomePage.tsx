import { Box, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

function HomePage() {
  return (
    <Box textAlign="center" p={5}>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to DeMi!
      </Heading>
      <Button
        colorScheme="teal"
        onClick={() => alert('Chakra-UI Button Clicked!')}
        mb={4}
      >
        Test Chakra-UI Button
      </Button>
      <Box mt={5}>
        <Button as={Link} to="/visualizations" colorScheme="blue" size="lg" mr={4}>
          Visualizations
        </Button>
        <Button as={Link} to="/metadata" colorScheme="blue" size="lg" mr={4}>
          Metadata
        </Button>
        <Button as={Link} to="/documentation" colorScheme="blue" size="lg">
          Documentation
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;