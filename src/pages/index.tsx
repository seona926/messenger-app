// pages/index.tsx
import React from "react";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push("/login");
  };

  const navigateToMain = () => {
    router.push("/main");
  };

  return (
    <div>
      <h1>Dating App Home Page</h1>
      <button onClick={navigateToLogin}>Go to Login</button>
      <button onClick={navigateToMain}>Go to Main</button>
    </div>
  );
};

export default Home;
