import React, { useState } from "react";

// Example images array - replace these URLs with the actual paths to your AI-generated images
const imageUrls = Array.from({ length: 30 }).map(
  (_, index) => `https://example.com/profiles/image${index + 1}.jpg`
);

const ProfilePictureSelector: React.FC<{
  onSelect: (imageUrl: string) => void;
}> = ({ onSelect }) => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    onSelect(imageUrl);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {imageUrls.map((imageUrl, index) => (
        <div
          key={index}
          style={{
            cursor: "pointer",
            border: selectedImage === imageUrl ? "2px solid blue" : "none",
          }}
        >
          <img
            src={imageUrl}
            alt={`Profile ${index + 1}`}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
            onClick={() => handleImageClick(imageUrl)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProfilePictureSelector;
