import React, { useCallback, useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
import { createContext } from "react";
import Storage from "../helpers/Storage";
import { authReducer, defaultValues } from "../reducers/authReducer";
import { useState } from "react";

export const AuthContext = createContext();

const AuthProvider = () => {
  const [state, dispatch] = useReducer(authReducer, defaultValues);
  const [loading, setloading] = useState(true);

    const login = useCallback(
        ({email, password}) => {
            const  
        },
        [input],
    )

  useEffect(() => {
    const getUser = async () => {
      const user = await axios.get();
      if(user){
          
      } 
    };
    getUser();
  }, []);

  return <AuthContext.Provider></AuthContext.Provider>;
};

export default AuthProvider;
