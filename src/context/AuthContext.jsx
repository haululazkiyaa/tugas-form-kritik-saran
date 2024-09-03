import { createContext, useState } from "react";

import PropTypes from "prop-types";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(localStorage.loginStatus || false);

  const handleLogin = () => {
    localStorage.setItem("loginStatus", true);
    setIsLogin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("loginStatus");
    setIsLogin(false);
  };

  const appProps = {
    isLogin,
    handleLogin,
    handleLogout,
  };
  return (
    <AuthContext.Provider value={appProps}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
