import React from "react";
import Card from "../card/Card";
import Upvote from "../upvote/Upvote";
import Action from "../action/Action";
import ReplyStyles from "../comment/CommentStyles";

type ReplyProps = {
  reply: {
    content: string;
    createdAt: string;
    id: number;
    replyingTo: string;
    score: number;
    user: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    };
  };
};

function Reply({ reply }: ReplyProps) {
  const classes = ReplyStyles();
  return (
    <div>
      <Card style={{ margin: "1rem 0" }}>
        <div className={classes.Comment}>
          <div className={classes.comment__top}>
            <img
              src={process.env.PUBLIC_URL + `${reply.user.image.png}`}
              alt=""
            />
            <p className={classes.username}>{reply.user.username}</p>
            <p className={classes.createdAt}>{reply.createdAt}</p>
          </div>
          <p className={classes.text}>
            <span>{reply.replyingTo}</span>
            {reply.content}
          </p>

          <div className={classes.upvote}>
            <Upvote upvote={reply.score} />
          </div>
          <div className={classes.action}>
            <Action action="reply" />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Reply;
