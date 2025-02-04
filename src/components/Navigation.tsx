import { Box, Flex, Spacer, Heading, Container } from "@chakra-ui/react";
import NavLink from "./NavLink";

function Navigation() {
    return (
        <Box bg="teal.500" py={4}>
            <Container maxW="container.xl">
                <Flex align="center">
                    <Heading color="white" size="md">
                        DeMi Project
                    </Heading>
                    <Spacer />
                    <Flex gap={3}>
                        <NavLink to="/demi-front/">Home</NavLink>
                        <NavLink to="/demi-front/visualizations">
                            Visualizations
                        </NavLink>
                        <NavLink to="/demi-front/metadata">Metadata</NavLink>
                        <NavLink to="/demi-front/documentation">
                            Documentation
                        </NavLink>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}

export default Navigation;
