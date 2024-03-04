// login.tsx
import React from "react";
import Link from "next/link";
import styles from "../styles/login.module.css";

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Login Page</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>
        <Link href="/main">
          <a>Login</a>
        </Link>
      </button>
    </div>
  );
};

export default Login;
