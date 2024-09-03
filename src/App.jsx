import AppLayout from "./layout/AppLayout";
import AppRoutes from "./routes/AppRoutes";
import AuthContextProvider from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Router>
          <AppLayout>
            <AppRoutes />
          </AppLayout>
        </Router>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
