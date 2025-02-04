import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

function Documentation() {
  return (
    <Box textAlign="center" p={5}>
      <Heading as="h2" size="xl" mb={4}>
        Documentation Page
      </Heading>
      <p>Here you can provide documentation for your project and its usage.</p>
    </Box>
  );
}

export default Documentation;
