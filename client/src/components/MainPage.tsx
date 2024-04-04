import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Layout from "../layouts/Layout";
import { useNavigate } from "react-router-dom";
import styles from "../styles/main.module.css";

const MainPage: React.FC = () => {
  const { user } = useContext(AuthContext); // Assuming user info is stored here
  const navigate = useNavigate();

  const chatRooms = [
    { id: 1, nickname: "EPIKHIGH", message: "오늘은 좀 어떻게 지내고있어?" },
    { id: 2, nickname: "SOPHIA", message: "아~~~ 오늘 아침에 지각했어" },
    {
      id: 3,
      nickname: "OMGOMG",
      message: "이번 주말에 우리 듄2 보러가자 ㅋㅋㅋ",
    },
    { id: 4, nickname: "NewJeans", message: "나는 베트남여행이 더 좋은듯?" },
    { id: 5, nickname: "__GoodGood___", message: "커피땡긴다 ㅋㅋ ㅠㅠ" },
  ];

  const handleSendClick = () => {
    navigate("/read-message/l_eein1234");
  };

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
            <span className={styles.newIcon}>N</span>
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
            <div className={styles.msgSendButton} onClick={handleSendClick}>
              OPEN
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default MainPage;
