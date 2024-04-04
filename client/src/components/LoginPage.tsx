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
        <div className={styles.logoContainer}>
          <img
            className={styles.logoImage}
            src="/images/bigger_logo-removebg.png"
          ></img>
          <div className={styles.loginTitle}>LOGIN</div>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일 주소를 입력해주세요."
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요."
            />
          </form>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <input id="rememberMe" type="checkbox" />
            <label
              htmlFor="rememberMe"
              style={{ fontSize: "17px", marginLeft: "6px" }}
            >
              내 아이디/비밀번호 기억하기
            </label>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.forgotPassword}>비밀번호를 잊었어요😢</div>
          <button type="submit" className={styles.loginButton}>
            LOGIN
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
