import { Box, Heading, Button } from '@chakra-ui/react';

function HomePage() {
  return (
    <Box textAlign="center" p={5}>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to DeMi!
      </Heading>
      <Button colorScheme="teal" onClick={() => alert('Chakra-UI Button Clicked!')} mb={4}>
        Test Chakra-UI Button
      </Button>
    </Box>
  );
}

export default HomePage;