import React from "react";
import { makeStyles } from "@mui/styles";
import minusIcon from "../../assets/icon-minus.svg";
import plusIcon from "../../assets/icon-plus.svg";

type UpvoteProps = {
  upvote: number;
};

function Upvote({ upvote }: UpvoteProps) {
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
  return (
    <div className={classes.upvote}>
      <button>
        <img src={plusIcon} alt="" />
      </button>
      <p>{upvote}</p>
      <button>
        <img src={minusIcon} alt="" />
      </button>
    </div>
  );
}

export default Upvote;
