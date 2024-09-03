import Footer from "../components/Footer";
import Header from "../components/Header";
import PropTypes from "prop-types";

const AppLayout = ({ children }) => {
  return (
    <main className="bg-white dark:bg-slate-800">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
