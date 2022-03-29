import { useContext } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";
import { makeStyles } from "@mui/styles";
import minusIcon from "../../assets/icon-minus.svg";
import plusIcon from "../../assets/icon-plus.svg";

type UpvoteProps = {
  upvote: number;
  commentId: string;
};

function Upvote({ upvote, commentId }: UpvoteProps) {
  const classes = makeStyles({
    upvote: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#F5F6FA",
      width: "6.25rem",
      padding: "0.5rem 1rem",
      borderRadius: "0.5rem",
      "& button": {
        background: "none",
        borderStyle: "none",
        fontWeight: "700",
      },
      "& button:nth-of-type(2)": {
        paddingBottom: "0.3rem",
      },
      "& p": {
        color: "#5457B6",
        fontWeight: "700",
      },
    },
    "@media (min-width: 48rem)": {
      upvote: {
        flexDirection: "column",
        height: "6.25rem",
        width: "2.5rem",
      },
    },
  })();

  const fromContext = useContext(CommentsContext);
  const dispatch = fromContext.dispatch;

  const handleUpvote = () => {
    dispatch({ type: "UPVOTE", payload: commentId });
  };

  const handleDownvote = () => {
    dispatch({ type: "DOWNVOTE", payload: commentId });
  };

  return (
    <div className={classes.upvote}>
      <button onClick={handleUpvote}>
        <img src={plusIcon} alt="" />
      </button>
      <p>{upvote}</p>
      <button onClick={handleDownvote}>
        <img src={minusIcon} alt="" />
      </button>
    </div>
  );
}

export default Upvote;
