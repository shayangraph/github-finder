import React, { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  //Get initial user (testing purpeses)
  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };
  // set loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
