// SendMessageModal.tsx
import React, { useState, useEffect } from "react";
import Layout from "../layouts/Layout";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/sendMessage.module.css";

// interface SendMessageModalProps {
//   userId: string;
//   onSend: (userId: string, message: string) => void; // Function to handle sending the message
// }

const SendMessageModal: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    // 메시지 전송 로직 구현, 예를 들어 API 호출 등
    try {
      // 예시: API를 호출하여 메시지 전송
      // await sendMessageApi(userId, message);
      console.log(`Sending message to ${userId}: ${message}`);

      // 메시지 전송 후 동작, 예를 들어 메인 페이지로 이동
      navigate("/main"); // or navigate(-1) to go back
    } catch (error) {
      console.error("Failed to send message:", error);
      // 에러 처리
    }

    navigate(-1); // Go back to the previous page after sending the message
  };

  const adjustHeight = (element: HTMLTextAreaElement) => {
    const maxHeight = window.innerHeight * 0.7;
    element.style.height = "auto"; // 먼저 높이를 auto로 설정하여 실제 높이를 계산할 수 있게 함
    element.style.height = `${Math.min(element.scrollHeight, maxHeight)}px`; // scrollHeight와 최대 높이 중 작은 값을 선택
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    adjustHeight(e.target);
  };

  useEffect(() => {
    const textAreaElement = document.querySelector("textarea");
    if (textAreaElement) {
      adjustHeight(textAreaElement as HTMLTextAreaElement);
    }
  }, []);

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
            편지 보내기
          </div>
          <textarea
            value={message}
            className={styles.messageArea}
            onChange={handleChange}
            placeholder="이곳에 내용을 입력하세요..."
          />
          <span
            style={{
              width: "100%",
              textAlign: "end",
              marginTop: "7px",
            }}
          >
            {message.length} / 1500자
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <button className={styles.sendMessageButton} onClick={handleSubmit}>
              전송
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

export default SendMessageModal;
