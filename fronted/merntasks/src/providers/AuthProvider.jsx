import React, { useCallback, useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { authReducer, defaultValues, ACTIONS } from "../reducers/authReducer";
import { useState } from "react";
import FullCenter from "../components/FullCenter/FullCenter";
import Loader from "../components/Loader/Loader";
import { whoIAm } from "../services/user";
import Storage from "../helpers/Storage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, defaultValues);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    if (!Storage.Token.get()) {
      setloading(false);
      return;
    }
    const getUser = async () => {
      try {
        const {
          data: {
            data: { user },
          },
        } = await whoIAm();
        if (user) {
          dispatch({
            type: ACTIONS.LOGIN,
            payload: {
              user,
            },
          });
        }
      } catch (e) {
        console.log(e);
      } finally {
        setloading(false);
      }
    };
    getUser();
  }, []);

  const login = useCallback(({ user, token }) => {
    Storage.Token.add(token);
    dispatch({
      type: ACTIONS.LOGIN,
      payload: {
        user,
      },
    });
  }, []);

  const logout = useCallback(() => {
    Storage.Token.remove();
    dispatch({
      type: ACTIONS.LOGOUT,
    });
  }, []);

  if (loading) {
    console.log("loading...");
    return (
      <FullCenter>
        <Loader size="xxl" color="red" />
      </FullCenter>
    );
  }

  return (
    <AuthContext.Provider value={{ login, logout, user: state }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
