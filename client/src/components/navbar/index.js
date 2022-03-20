import React from "react";

import { ReactComponent as Logo } from "../../assets/svg/navbar-logo.svg";
import { Heading, Link, Row } from "../../common";
import { Navbar } from "./styled";

const routes = [
  { name: "Log In", path: "/login" },
  { name: "Sign Up", path: "/signup" },
];

export const NavBar = () => {
  const renderRoutes = () =>
    routes.map(({ name, path }) => (
      <Link key={name} to={path} m="0 15px">
        {name}
      </Link>
    ));

  return (
    <Navbar p="0 100px">
      <Row w="100%" align="center" p="0 100px">
        <Row>
          <Logo />
          <Heading m="0 0 0 10px" fz={24} fw={700}>
            MERN CLOUD
          </Heading>
        </Row>
        <Row>{renderRoutes()}</Row>
      </Row>
    </Navbar>
  );
};
