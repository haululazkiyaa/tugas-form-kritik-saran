import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(localStorage.darkTheme || false);

  const changeTheme = () => {
    if (darkTheme) {
      localStorage.removeItem("darkTheme");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("darkTheme", true);
      document.documentElement.classList.add("dark");
    }
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    }
  });

  const appProps = {
    darkTheme,
    changeTheme,
  };
  return (
    <ThemeContext.Provider value={appProps}>{children}</ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContextProvider;
