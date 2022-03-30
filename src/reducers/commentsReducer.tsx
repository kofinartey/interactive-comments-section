import React from "react";
import data from "../data.json";

type upvoteType = {
  type: "SCORE";
  operation: "UPVOTE" | "DOWNVOTE";
  payload: {
    commentId: string;
    replyId?: string;
    // isReply?: boolean;
  };
};

type replyType = {
  type: "REPLY";
  payload: {
    id: string;
    reply: string;
  };
};

export type actionType = upvoteType | replyType;

export type commentsType = typeof data.comments;

//TODO : fix the ignore statement
// @ts-ignore
const commentsReducer: React.Reducer<commentsType, actionType> = (
  state: commentsType,
  action: actionType
) => {
  switch (action.type) {
    case "SCORE": //PS u
      //if no replyId provided, update the comment
      if (!action.payload.replyId) {
        return state.map((comment) =>
          comment.id.toString() !== action.payload.commentId
            ? comment
            : {
                ...comment,
                score:
                  action.operation === "UPVOTE"
                    ? comment.score + 1
                    : comment.score - 1, //for "DOWNVOTE"
              }
        );
      }
      //  if replyId exist, find the reply and upvote it
      else {
        return state.map((comment) =>
          comment.id.toString() !== action.payload.commentId
            ? comment
            : {
                ...comment,
                replies: comment.replies.map((reply) =>
                  reply.id.toString() !== action.payload.replyId
                    ? reply
                    : {
                        ...reply,
                        score:
                          action.operation === "UPVOTE"
                            ? reply.score + 1
                            : reply.score - 1,
                      }
                ),
              }
        );
      }

    case "REPLY":
      return state.map;
    default:
      return state;
  }
};

export default commentsReducer;
