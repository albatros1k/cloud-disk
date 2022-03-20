import React from "react";
import { NavBar } from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Column } from "./common";
import { Registration } from "./components/registration";

const App = () => {
  return (
    <BrowserRouter>
      <Column align="center">
        <NavBar />
        <Column>
          <Routes>
            <Route path="/signup" element={<Registration />} />
          </Routes>
        </Column>
      </Column>
    </BrowserRouter>
  );
};

export default App;
