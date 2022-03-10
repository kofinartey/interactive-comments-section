import React from "react";
import Card from "../card/Card";
import Upvote from "../upvote/Upvote";
import Action from "../action/Action";
import Reply from "../reply/Reply";
import { CommentType } from "../../contexts/CommentsContext";
import CommentStyles from "./CommentStyles";

type CommentProps = {
  comment: CommentType;
};

function Comment({ comment }: CommentProps) {
  const classes = CommentStyles();

  return (
    <div>
      <Card style={{ margin: "1rem 0" }}>
        <div className={classes.Comment}>
          <div className={classes.comment__top}>
            <img
              src={process.env.PUBLIC_URL + `${comment.user.image.png}`}
              alt=""
            />
            <p className={classes.username}>{comment.user.username}</p>
            <p className={classes.createdAt}>{comment.createdAt}</p>
          </div>
          <p className={classes.text}>{comment.content}</p>

          <div className={classes.upvote}>
            <Upvote upvote={comment.score} />
          </div>
          <div className={classes.action}>
            <Action action="reply" />
          </div>
        </div>
      </Card>
      <div className={classes.replies}>
        {comment?.replies.map((reply, index) => (
          <Reply reply={reply} />
        ))}
      </div>
    </div>
  );
}

export default Comment;
