// SendMessageModal.tsx
import React, { useState } from "react";

interface SendMessageModalProps {
  userId: string;
  onClose: () => void; // Function to close the modal
  onSend: (userId: string, message: string) => void; // Function to handle sending the message
}

const SendMessageModal: React.FC<SendMessageModalProps> = ({
  userId,
  onClose,
  onSend,
}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend(userId, message);
    onClose(); // Close the modal after sending the message
  };

  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Send Message</h2>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here..."
        />
        <button onClick={handleSubmit}>Send</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SendMessageModal;
