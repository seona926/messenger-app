import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context's value
interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  user: any; // or a more specific type if you have one
}

// Provide a default value that matches AuthContextType structure
const defaultValue: AuthContextType = {
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  user: null, // Adjust according to your needs
};

// Create the context with a default value
export const AuthContext = createContext<AuthContextType>(defaultValue);

// AuthProvider component that wraps your app and provides the AuthContext
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null); // Replace `any` with your User type

  const login = (email: string, password: string) => {
    console.log("Login function called. Implement your logic here.");
    // Here you would usually call your backend API to authenticate the user,
    // then set the user state based on the response.
    setUser({ email }); // Placeholder for actual authentication logic
  };

  const logout = () => {
    console.log("Logout function called.");
    setUser(null);
  };

  const value = {
    isAuthenticated: !!user,
    login,
    logout,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
