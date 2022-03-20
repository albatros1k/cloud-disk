import React, { Fragment } from "react";
import { NavBar } from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Column } from "./common";
import { Registration } from "./components/registration";

const App = () => {
  return (
    <Column align="center">
      <NavBar />
      <Routes>
        <Route to="/" element={<div>Home</div>} />
      </Routes>
    </Column>
  );
};

export default App;
