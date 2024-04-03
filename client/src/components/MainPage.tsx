import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Layout from "../layouts/Layout";
import { useNavigate } from "react-router-dom";
import styles from "../styles/main.module.css";

const MainPage: React.FC = () => {
  const { user } = useContext(AuthContext); // Assuming user info is stored here
  const navigate = useNavigate();

  const chatRooms = [
    { id: 1, nickname: "Alice", message: "Hey, how are you doing?" },
    { id: 2, nickname: "Cindy", message: "What's up today?" },
    {
      id: 3,
      nickname: "Jenny",
      message: "I will have a meeting in a minuite.",
    },
    { id: 4, nickname: "Rose", message: "I'm sooo hungry!" },
    { id: 5, nickname: "Lisa", message: "I miss you." },
  ];

  return (
    <Layout>
      <div
        style={{
          fontSize: "20px",
          fontWeight: "500",
          marginTop: "50px",
        }}
      >
        My Profile
      </div>
      <div className={styles.profileSection}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            marginRight: "14px",
          }}
        >
          <span className={styles.myName}>{user?.nickname || "Lisboa"}</span>
          <span className={styles.myInfo}>I'm looking for freedom</span>
        </div>
        <img
          src="https://api.dicebear.com/8.x/pixel-art/svg?seed=James.svg"
          alt="Avatar"
          className={styles.myAvatar}
        />
      </div>
      <div
        style={{
          fontSize: "20px",
          fontWeight: "500",
          marginTop: "22px",
          marginBottom: "10px",
        }}
      >
        Messages
      </div>
      <div className={styles.chattingRoomSection}>
        {chatRooms.map((room) => (
          <div key={room.id} className={styles.chattingRoomItem}>
            <img
              src={`https://api.dicebear.com/8.x/pixel-art/svg?seed=John${room.id}-${room.nickname}.svg`}
              alt="Avatar"
              className={styles.avatar}
            />
            <div className={styles.chatting}>
              <div className={styles.nickName}>{room.nickname}</div>
              <p style={{ margin: "0px" }}>
                {room.message.length > 20
                  ? `${room.message.slice(0, 25)}...`
                  : room.message}
              </p>
            </div>
            <div className={styles.msgSendButton}>SEND</div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default MainPage;
