import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { Link, LinkProps } from 'react-router-dom';

type NavLinkProps = LinkProps & ButtonProps & { isActive: boolean };

const activeStyles = {
  color: "teal.800",
  bg: "white",
};

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, isActive, ...props }, ref) => (
    <Button
      as={Link}
      ref={ref as React.Ref<HTMLButtonElement>}
      variant="ghost"
      {...(isActive ? activeStyles : { color: "white", bg: "transparent" })}
      _hover={{ bg: "teal.600" }}
      _active={{ bg: "teal.700" }}
      {...props}
    >
      {children}
    </Button>
  )
);

export default NavLink;
