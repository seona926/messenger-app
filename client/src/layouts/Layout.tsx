import React, { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode; // This type accepts any valid React child, including undefined, null, boolean, number, string, ReactElement, or an array of these types.
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          top: 0,
          padding: "10px",
          backgroundColor: "#c76ea5",
          boxSizing: "border-box",
          height: "50px",
        }}
      >
        <img
          src="/images/bigger_logo-removebg.png" // Replace with the path to your logo image
          alt="App Logo"
          style={{
            cursor: "pointer",
            width: "32px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            padding: "3px",
          }}
          onClick={() => navigate("/main")}
        />
        <div
          onClick={() => navigate("/login")}
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          LOGIN
        </div>
      </header>
      <div
        id="main-container"
        style={{
          marginTop: "60px", // Add top margin to account for the fixed header
          maxWidth: "480px",
          width: "100%",
          margin: "0 auto",
          backgroundColor: "#fff",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          bottom: 0,
          padding: "10px",
          backgroundColor: "#c76ea5",
          boxSizing: "border-box",
          height: "50px",
        }}
      >
        {location.pathname === "/main" && (
          <div>
            <button
              onClick={() => navigate("/find-matches")}
              style={{
                fontSize: "17px",
                padding: "6px",
                width: "10em",
                border: "2px solid #c76ea5",
                borderRadius: "5px",
                fontWeight: "600",
                color: "rgb(68, 68, 68)",
                cursor: "pointer",
              }}
            >
              Find Matches
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
