import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Layout from "../layouts/Layout";
import { useNavigate } from "react-router-dom";

const MainPage: React.FC = () => {
  const { user } = useContext(AuthContext); // Assuming user info is stored here
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Page-specific content goes here, without the additional div wrapper */}
      <div>Your Profile Info</div>
      {/* List of messages */}
      <button onClick={() => navigate("/find-matches")}>Find Matches</button>
    </Layout>
  );
};

export default MainPage;
