import React, { createContext, useReducer } from "react";
import data from "../data.json";
import commentsReducer from "../reducers/commentsReducer";

export type CommentType = typeof data.comments[0];
export type UserType = typeof data.currentUser;

type CommentsContextType = {
  comments: CommentType[];
};

type CommentsProviderProps = {
  children: React.ReactNode;
};

export const comments = data.comments;
console.log(comments);
export const CommentsContext = createContext<CommentsContextType>({ comments });

export function CommentsProvider({ children }: CommentsProviderProps) {
  return (
    <CommentsContext.Provider value={{ comments }}>
      {children}
    </CommentsContext.Provider>
  );
}
