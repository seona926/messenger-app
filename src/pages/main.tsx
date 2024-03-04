// main.tsx
import React from "react";
import Link from "next/link";
import styles from "../styles/main.module.css";

const MainPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Main Page</h1>
      <p>Welcome to the Dating App!</p>
      <Link href="/find-match">
        <a>Find Match</a>
      </Link>
    </div>
  );
};

export default MainPage;
