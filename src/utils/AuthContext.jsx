import { createContext, use, useContext, useState } from "react";

export const INITIAL_USER = {
  name: "",
  number: "",
  password: "",
  email: "",
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(INITIAL_USER);
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const value = {
    user,
    setUser,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
