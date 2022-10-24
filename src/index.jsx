import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { OnlyVisitor, PrivateRoute } from "./components/login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Details from "./pages/Details";
import "./index.css"
import { useAxios } from "./hooks/useAxios";
const App = () => {
  useAxios()
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route exact path="/about" element={<PrivateRoute />}>
          <Route exact path="/about" element={<About />} />
        </Route>
        <Route exact path="/contact" element={<PrivateRoute />}>
          <Route exact path="/contact" element={<Contact />} />
        </Route>
        <Route exact path="/details" element={<PrivateRoute />}>
          <Route exact path="/details" element={<Details />} />
        </Route>
        <Route exact path="/login" element={<OnlyVisitor />}>
          <Route exact path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
