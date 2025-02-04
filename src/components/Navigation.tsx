import { 
  Box, 
  Flex, 
  Spacer, 
  Heading, 
  Container 
} from '@chakra-ui/react';
import NavLink from './NavLink';

function Navigation() {
  return (
    <Box bg="teal.500" py={4}>
      <Container maxW="container.xl">
        <Flex align="center">
          <Heading color="white" size="md">DeMi Project</Heading>
          <Spacer />
          <Flex gap={3}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/visualizations">Visualizations</NavLink>
            <NavLink to="/metadata">Metadata</NavLink>
            <NavLink to="/documentation">Documentation</NavLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navigation;