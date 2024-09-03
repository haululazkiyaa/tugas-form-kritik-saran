import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { listMenu } from "../data/menu";
import padiUmkmLogo from "../assets/logo.svg";
import padiUmkmLogoWhite from "../assets/logo-white.svg";
import { useContext } from "react";

const Header = () => {
  const { isLogin, handleLogin, handleLogout } = useContext(AuthContext);
  const { darkTheme } = useContext(ThemeContext);
  return (
    <header className="bg-white dark:bg-slate-800">
      <div className="container lg:px-20 xl:px-40 px-10 py-4 flex items-center">
        <a href="/" className="w-52">
          {darkTheme ? (
            <img
              src={padiUmkmLogoWhite}
              alt="PaDi UMKM Logo"
              className="h-[64px]"
            />
          ) : (
            <img src={padiUmkmLogo} alt="PaDi UMKM Logo" className="h-[64px]" />
          )}
        </a>
        <nav>
          <ul className="lg:!flex max-lg:hidden  max-lg:w-full lg:space-x-10 max-lg:space-y-3 max-lg:my-4  items-center">
            {listMenu.map((menu, index) => (
              <li key={index}>
                <NavLink
                  to={menu.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[18px] text-[#212427] dark:text-[#ffffff] font-bold border-b-4 w-fit border-[#009EA9] hover:text-[#009EA9]"
                      : "text-[18px] text-[#212427] dark:text-[#ffffff] hover:text-[#009EA9] py-2"
                  }
                >
                  {menu.text}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                className="border-[1px] border-[#009EA9] rounded-lg px-3 py-2 text-[#009EA9] cursor-pointer max-lg:w-fit"
                onClick={isLogin ? handleLogout : handleLogin}
              >
                {isLogin ? "Logout" : "Login"}
              </button>
            </li>
          </ul>
        </nav>
        <div className="flex-1"></div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
