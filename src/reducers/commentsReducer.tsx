import comments from "../data.json";

type actionType = {
  type: "UPVOTE" | "DOWNVOTE ";
};

type commentsType = typeof comments;

const commentsReducer = (state: commentsType, action: actionType) => {
  switch (action.type) {
    case "UPVOTE":
      return state;
    default:
      return state;
  }
};

export default commentsReducer;
