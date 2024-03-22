import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: ReactNode; // This type accepts any valid React child, including undefined, null, boolean, number, string, ReactElement, or an array of these types.
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <header
        style={{
          position: "fixed",
          width: "100%",
          right: 0,
          top: 0,
          padding: "10px",
          backgroundColor: "lightcoral",
        }}
      >
        <button onClick={() => navigate("/")}>Home</button>
      </header>
      <main style={{ paddingTop: "60px" }}>{children}</main>
    </>
  );
};

export default Layout;
