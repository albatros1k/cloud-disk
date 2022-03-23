import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Column } from "./common";
import { Registration } from "./components/registration";
import { NavBar } from "./components/navbar";
import { auth } from "./actions/userActions";
import { Disk } from "./components/disk/Disk";

const App = () => {
  const isAuth = useSelector((s) => s.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Column align="center">
        <NavBar />
        <Column w="100%" align="center">
          <Routes>
            {!isAuth ? (
              <>
                <Route path="/signup" element={<Registration key="signUp" />} />
                <Route path="/login" element={<Registration key="logIn" isLogin />} />
                <Route path="/" element={<Registration key="logIn" isLogin />} />
              </>
            ) : (
              <>
                <Route exact path="/" element={<Disk />} />
              </>
            )}
            <Route path="*" element={<>Not Found</>} />
          </Routes>
        </Column>
      </Column>
    </BrowserRouter>
  );
};

export default App;
