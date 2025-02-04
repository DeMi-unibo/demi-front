import { Box, Heading, Button } from '@chakra-ui/react'
import React from 'react'

function HomePage() {
  return (
    <>
            <Box textAlign="center" p={5}>
                <Heading as="h1" size="2xl" mb={4}>
                    Welcome to DeMi!
                </Heading>
                <Button
                    colorScheme="teal"
                    onClick={() => alert("Chakra-UI Button Clicked!")}
                >
                    Test Chakra-UI Button
                </Button>
            </Box>
        </>
  )
}

export default HomePage