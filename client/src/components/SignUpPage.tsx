import React, { useState } from "react";
import ProfilePictureSelector from "./ProfilePictureSelector";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [nickname, setNickname] = useState("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [selfIntroduction, setSelfIntroduction] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., via an API call
  };

  // Handler for when a profile picture is selected
  const handleSelectProfilePicture = (imageUrl: string) => {
    setProfilePictureUrl(imageUrl);
    // If you need to convert the URL to a File object, you would do that here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      {/* Repeat for other fields */}
      <ProfilePictureSelector onSelect={handleSelectProfilePicture} />
      <textarea
        value={selfIntroduction}
        onChange={(e) => setSelfIntroduction(e.target.value)}
        placeholder="Self-introduction (up to 700 characters)"
      ></textarea>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpPage;
