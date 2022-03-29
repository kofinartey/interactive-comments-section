import data from "../data.json";

type upvoteType = {
  type: "UPVOTE";
  payload: string;
};
type downvoteType = {
  type: "DOWNVOTE";
  payload: string;
};
type replyType = {
  type: "REPLY";
  payload: {
    id: string;
    reply: string;
  };
};

export type actionType = upvoteType | downvoteType | replyType;

export type commentsType = typeof data.comments;

const commentsReducer = (state: commentsType, action: actionType) => {
  switch (action.type) {
    case "UPVOTE":
      return state.map((comment) =>
        comment.id.toString() !== action.payload
          ? comment
          : {
              ...comment,
              score: comment.score + 1,
            }
      );
    case "DOWNVOTE":
      return state.map((comment) =>
        comment.id.toString() !== action.payload
          ? comment
          : {
              ...comment,
              score: comment.score - 1,
            }
      );
    case "REPLY":
      return state.map;
    default:
      return state;
  }
};

export default commentsReducer;
