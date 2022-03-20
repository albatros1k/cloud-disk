import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { Column } from "./common";
import { Registration } from "./components/registration";
import { NavBar } from "./components/navbar";

const App = () => {
  const isAuth = useSelector((s) => s.user.isAuth);
  return (
    <BrowserRouter>
      <Column align="center">
        <NavBar />
        <Column>
          {!isAuth && (
            <Routes>
              <Route path="/signup" element={<Registration />} />
              <Route path="/login" element={<Registration isLogin />} />
            </Routes>
          )}
        </Column>
      </Column>
    </BrowserRouter>
  );
};

export default App;
