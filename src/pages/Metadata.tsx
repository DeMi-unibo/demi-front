import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

function Metadata() {
  return (
    <Box textAlign="center" p={5}>
      <Heading as="h2" size="xl" mb={4}>
        Metadata Page
      </Heading>
      <p>Here you can provide metadata related to your datasets and insights.</p>
    </Box>
  );
}

export default Metadata;
