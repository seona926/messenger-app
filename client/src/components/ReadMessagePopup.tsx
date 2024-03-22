import React from "react";

const ReadMessagePopup: React.FC<{ message: string; onClose: () => void }> = ({
  message,
  onClose,
}) => {
  return (
    <div className="popup">
      <div className="message-content">{message}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ReadMessagePopup;
