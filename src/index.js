import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./components/layout";
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Destinations from "./pages/destinations";
import About from "./pages/about";
import Partner from "./pages/partner";

const router = (
  <Routes>
    <Route exact path="/" element={<App />}></Route>
    <Route path="/destinations" element={<Destinations />} />
    <Route path="/about" element={<About />}></Route>
    <Route path="/partner" element={<Partner />}></Route>
  </Routes>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Layout>{router}</Layout>
    </React.StrictMode>
  </BrowserRouter>
);
