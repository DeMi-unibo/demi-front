import { Box, Flex, Spacer, Heading, Container } from "@chakra-ui/react";
import { useLocation } from "react-router-dom"; // Import to check current location
import NavLink from "./NavLink";

function Navigation() {
  const location = useLocation();  // Hook to get the current location/path

  return (
    <Box bg="teal.500" py={4}>
      <Container maxW="container.xl">
        <Flex align="center">
          <Heading color="white" size="md">
            DeMi Project
          </Heading>
          <Spacer />
          <Flex gap={3}>
            <NavLink to="/demi-front/" isActive={location.pathname === "/demi-front/"}>
              Home
            </NavLink>
            <NavLink to="/demi-front/visualizations" isActive={location.pathname === "/demi-front/visualizations"}>
              Visualizations
            </NavLink>
            <NavLink to="/demi-front/metadata" isActive={location.pathname === "/demi-front/metadata"}>
              Metadata
            </NavLink>
            <NavLink to="/demi-front/documentation" isActive={location.pathname === "/demi-front/documentation"}>
              Documentation
            </NavLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navigation;
