import React, { useState, useEffect } from "react";
import Layout from "../layouts/Layout";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/readMessage.module.css";

const ReadMessagePopup: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSendClick = (e: React.FormEvent) => {
    navigate("/send-message/" + userId);
  };

  useEffect(() => {
    fetch(`http://localhost:3001/message/getMessage/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message); // 가정: 응답 데이터에 메시지 내용이 'content' 필드에 있음
      });
  }, [userId]);

  return (
    <Layout>
      <div className={styles.modalBackground}>
        <div className={styles.modalContent}>
          <div
            style={{
              fontFamily: "'Nanum Gothic', sans-serif",
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "16px",
            }}
          >
            편지 읽기
          </div>
          <textarea value={message} className={styles.messageArea} readOnly />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <button
              className={styles.sendMessageButton}
              onClick={handleSendClick}
            >
              답장하기
            </button>
            <button className={styles.backButton} onClick={() => navigate(-1)}>
              취소
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReadMessagePopup;
