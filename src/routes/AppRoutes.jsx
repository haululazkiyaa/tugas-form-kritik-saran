import "../App.css";

import { Route, Routes } from "react-router-dom";

import About from "../pages/About";
import { AuthContext } from "../context/AuthContext";
import Contact from "../pages/Contact";
import Help from "../pages/Help";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Media from "../pages/Media";
import { useContext } from "react";

function AppRoutes() {
  const { isLogin } = useContext(AuthContext);
  return (
    <Routes>
      {isLogin ? (
        <>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/help" element={<Help />}></Route>
          <Route path="/media" element={<Media />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </>
      ) : (
        <>
          <Route path="*" element={<Login />}></Route>
        </>
      )}
    </Routes>
  );
}

export default AppRoutes;
