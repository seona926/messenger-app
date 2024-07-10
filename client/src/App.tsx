import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./routes/AppRoutes"; // This would be your routing logic, similar to the provided snippet
import Layout from "./layouts/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes /> {/* Your routing logic */}
      </AuthProvider>
    </Router>
  );
};

export default App;
