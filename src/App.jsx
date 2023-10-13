import Header from "./components/header/Header";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/'
            exact
            element={<></>}
          ></Route>
          <Route
            path='/articles'
            element={<></>}
          ></Route>
          <Route
            path='/courses'
            element={<></>}
          ></Route>
          <Route
            path='/news'
            element={<></>}
          ></Route>
          <Route
            path='/aboutus'
            element={<></>}
          ></Route>
          <Route
            path='/jspro'
            element={<></>}
          ></Route>
          <Route
            path='/jsfornewbie'
            element={<></>}
          ></Route>
          <Route
            path='/jsninja'
            element={<></>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
