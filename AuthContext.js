import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthService } from "../api/AuthService"; // Ensure this path matches your project structure

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check the AsyncStorage for a token to auto-login the user
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        if (token) {
          setUserToken(token);
        }
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };

    checkToken();
  }, []);

  const signIn = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const token = await AuthService.login(email, password);
      setUserToken(token);
      await AsyncStorage.setItem("userToken", token);
    } catch (error) {
      //console.error(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem("userToken");
      setUserToken(null);
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const token = await AuthService.signup(email, password);
      setUserToken(token);
      await AsyncStorage.setItem("userToken", token);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        signUp,
        userToken,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
AuthContext.js;
// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [userToken, setUserToken] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const login = () => {
//     // Your login logic here
//   };

//   const logout = () => {
//     // Your logout logic here
//   };

//   const value = {
//     userToken,
//     isLoading,
//     login,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
