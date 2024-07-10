// ResultsPage.tsx
import React, { useEffect, useState } from "react";
import SendMessageModal from "./SendMessageModal";
import Layout from "../layouts/Layout";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "../features/user/types"; // Adjust the import path as necessary

const ResultsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const navigate = useNavigate();

  const matches: UserProfile[] = [
    { id: "1", name: "User One" },
    { id: "2", name: "User Two" },
    // Assume this is populated with real data
  ];

  const handleSendMessage = (userId: string, message: string) => {
    console.log(`Sending message to user ${userId}: ${message}`);
    // Here, you would send the message to your backend or through your messaging API
  };

  const openModal = (userId: string) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <div>
        <h2>Matched Profiles</h2>
        {matches.map((match) => (
          <div key={match.id}>
            <p>{match.name}</p>
            <button onClick={() => openModal(match.id)}>Send Message</button>
          </div>
        ))}
        {isModalOpen && (
          <SendMessageModal
            userId={selectedUserId}
            onClose={() => setIsModalOpen(false)}
            onSend={handleSendMessage}
          />
        )}
      </div>
    </Layout>
  );
};

export default ResultsPage;
