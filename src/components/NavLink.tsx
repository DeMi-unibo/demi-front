import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { Link, LinkProps } from 'react-router-dom';

type NavLinkProps = LinkProps & ButtonProps & { isActive: boolean };

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, isActive, ...props }, ref) => (
    <Button
      as={Link}
      ref={ref as React.Ref<HTMLButtonElement>}
      variant="ghost"
      colorScheme="whiteAlpha"
      color="white"
      _hover={{ bg: "teal.600" }} // Optional hover effect
      _active={{ bg: "teal.600" }} // Keep active state consistent
      fontWeight={isActive ? "bold" : "normal"}  // Make active link bold
      pointerEvents={isActive ? "none" : "auto"} // Disable clicking for active link
      {...props}  // Spread any additional props like 'to'
    >
      {children}
    </Button>
  )
);

export default NavLink;
