import React, { createContext, useReducer } from "react";
import comments from "../data.json";
import commentsReducer from "../reducers/commentsReducer";

type CommentsProviderProps = {
  children: React.ReactNode;
};

export const CommentsContext = createContext(comments);

export function CommentsProvider({ children }: CommentsProviderProps) {
  // const [state, dispatch] = useReducer(commentsReducer, comments)
  return (
    <CommentsContext.Provider value={comments}>
      {children}
    </CommentsContext.Provider>
  );
}
