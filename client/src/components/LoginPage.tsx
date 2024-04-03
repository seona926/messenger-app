import React, { useState, useContext } from "react";
import Layout from "../layouts/Layout";
import { AuthContext } from "../contexts/AuthContext";
import styles from "../styles/login.module.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Layout>
      <div className={styles.loginContainer}>
        <div className={styles.loginTitle}>LOGIN</div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit" className={styles.loginButton}>
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
