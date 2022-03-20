import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { login, signup } from "../../actions/userActions";
import { Card, Heading } from "../../common";

export const Input = styled.input`
  border: none;
  border-bottom: ${({ theme: { primary } }) => primary} solid 3px;
  color: ${({ theme: { primary } }) => primary};
  background: transparent;
  width: 100%;
  padding: 3px;
  margin: 10px 0;
  transition: all 0.3s ease 0s;
  font-family: "Roboto";
  font-size: 14px;
  &:focus {
    outline: none;
    transform: scale(1.01);
  }
  &::placeholder {
  font-family: "Roboto";
  font-size: 14px;
  }
}
::-webkit-input-placeholder { /* Chrome */
  color: @font-color;
  font-weight: 700;
}
:-ms-input-placeholder { /* IE 10+ */
  color: @font-color;
  font-weight: 700;
}
::-moz-placeholder { /* Firefox 19+ */
  color: @font-color;
  font-weight: 700;
}
:-moz-placeholder { /* Firefox 4 - 18 */
  color: @font-color;
  font-weight: 700;
}
`;

export const Btn = styled.button`
  border: none;
  background-color: ${({ theme: { primary } }) => primary};
  border-radius: 8px;
  color: ${({ theme: { white } }) => white};
  font-weight: 700;
  padding: 5px 10px;
  align-self: flex-end;
  margin-top: 10px;
  height: 32px;
  margin: auto;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Registration = ({ isLogin = false }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const onChangeData = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });
  const onSignUp = () => signup(loginData);
  const onLogin = () => dispatch(login(loginData));

  return (
    <Card align="center" w="500px" br={20} p="30px" m="100px 0 0">
      <Heading fz={30}>{isLogin ? "Log In" : "Sign Up"}</Heading>
      <Input type="text" placeholder="Email" name="email" onChange={onChangeData} />
      <Input type="password" placeholder="Password" name="password" onChange={onChangeData} />
      <Btn onClick={isLogin ? onLogin : onSignUp}>{isLogin ? "Log In" : "Sign Up"}</Btn>
    </Card>
  );
};
