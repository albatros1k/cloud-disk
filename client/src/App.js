import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Column } from "./common";
import { Registration } from "./components/registration";
import { NavBar } from "./components/navbar";
import { auth } from "./actions/userActions";

const App = () => {
  const isAuth = useSelector((s) => s.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <BrowserRouter>
      <Column align="center">
        <NavBar />
        <Column>
          {!isAuth && (
            <Routes>
              <Route path="/signup" element={<Registration key="signUp" />} />
              <Route path="/login" element={<Registration key="logIn" isLogin />} />
            </Routes>
          )}
        </Column>
      </Column>
    </BrowserRouter>
  );
};

export default App;
