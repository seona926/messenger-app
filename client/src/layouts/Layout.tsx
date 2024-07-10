import React, { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface LayoutProps {
  children: ReactNode; // This type accepts any valid React child, including undefined, null, boolean, number, string, ReactElement, or an array of these types.
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    width: "100%",
    top: 0,
    padding: "10px",
    backgroundColor: "#c76ea5",
    boxSizing: "border-box",
    height: "55px",
    zIndex: "9999",
  };

  return (
    <>
      {location.pathname.startsWith("/main") !== true ? (
        <header style={headerStyle}>
          <div
            onClick={() => navigate(-1)}
            style={{
              fontSize: "25px",
              fontWeight: "600",
              color: "#fff",
              cursor: "pointer",
              backgroundClip: "none",
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </header>
      ) : (
        <header style={headerStyle}>
          <img
            src="/images/bigger_logo-removebg.png"
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
      )}
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
      {location.pathname === "/main" ? (
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
          <div>
            <button
              onClick={() => navigate("/find-matches")}
              style={{
                fontSize: "17px",
                padding: "6px",
                width: "8em",
                border: "2px solid #c76ea5",
                borderRadius: "5px",
                fontWeight: "600",
                color: "rgb(68, 68, 68)",
                cursor: "pointer",
              }}
            >
              Find BF!
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Layout;
