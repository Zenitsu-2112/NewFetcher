import React from "react";
import Navigation from "./navbar";
import App from "./App";
import Trending from "./trending";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Main>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/app" element={<App />}></Route>
          <Route path="/trending" element={<Trending />}></Route>
        </Routes>
      </Main>
    </>
  );
}
