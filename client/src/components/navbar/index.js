import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/svg/navbar-logo.svg";
import { Heading, Link, Row } from "../../common";
import { setLogout } from "../../reducers/userReducer";
import { Btn } from "../registration";
import { Navbar } from "./styled";

const routes = [
  { name: "Log In", path: "/login" },
  { name: "Sign Up", path: "/signup" },
];

export const NavBar = () => {
  const isAuth = useSelector((s) => s.user.isAuth);
  const dispatch = useDispatch();

  const renderRoutes = () =>
    routes.map(({ name, path }) => (
      <Link key={name} to={path} m="0 15px">
        {name}
      </Link>
    ));

  const onLogout = () => dispatch(setLogout());

  return (
    <Navbar p="0 100px">
      <Row w="100%" align="center" p="0 100px">
        <Row>
          <Logo />
          <Heading m="0 0 0 10px" fz={24} fw={700}>
            CLOUD DISK
          </Heading>
        </Row>
        <Row>{isAuth ? <Btn onClick={onLogout}>Exit</Btn> : renderRoutes()}</Row>
      </Row>
    </Navbar>
  );
};
