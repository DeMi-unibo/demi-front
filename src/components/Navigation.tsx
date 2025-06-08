import { Box, Flex, Spacer, Heading, Container, Button, Menu } from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";
import NavLink from "./NavLink";

const activeStyles = {
  color: "teal.800",
  bg: "white",
};

const MenuItemLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  return (
    <Menu.Item value={to}>
      <Link to={to} style={{ display: 'block', width: '100%', padding: '8px 12px' }}>
        {children}
      </Link>
    </Menu.Item>
  );
};

function Navigation() {
  const location = useLocation();
  const isVisualizationActive = location.pathname.includes("/demi-front/visualizations");

  return (
    <Box bg="teal.500" py={4}>
      <Container maxW="container.xl">
        <Flex align="center">
          <Heading color="white" size="md">
            DeMi Project
          </Heading>
          <Spacer />
          <Flex gap={3} align="center">
            <NavLink to="/demi-front/" isActive={location.pathname === "/demi-front/"}>
              Home
            </NavLink>
            <NavLink to="/demi-front/information" isActive={location.pathname === "/demi-front/information"}>
              Information
            </NavLink>

            <Menu.Root>
              <Menu.Trigger asChild>
                <Button
                  variant="ghost"
                  {...(isVisualizationActive ? activeStyles : { color: "white", bg: "transparent" })}
                  _hover={{ bg: "teal.600" }}
                  _active={{ bg: "teal.700" }}
                >
                  Visualizations
                </Button>
              </Menu.Trigger>
              <Menu.Positioner>
                <Menu.Content>
                  <MenuItemLink to="/demi-front/visualizations/geographical">
                    Geographical
                  </MenuItemLink>
                  <MenuItemLink to="/demi-front/visualizations/demographical">
                    Demographical
                  </MenuItemLink>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>

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
