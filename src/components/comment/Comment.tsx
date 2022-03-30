import React, { useState, useContext, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

//my imports
import Card from "../card/Card";
import Upvote from "../upvote/Upvote";
import Action from "../action/Action";
import Reply from "../reply/Reply";
import TextArea from "../textarea/TextArea";
import { UserContext } from "../../contexts/UserContext";
import { CommentsContext } from "../../contexts/CommentsContext";
import { CommentType } from "../../contexts/CommentsContext";
import CommentStyles from "./CommentStyles";
import Button from "../button/Button";

type CommentProps = {
  comment: CommentType;
};

function Comment({ comment }: CommentProps) {
  const classes = CommentStyles();
  const user = useContext(UserContext);
  const fromContext = useContext(CommentsContext);
  const dispatch = fromContext?.dispatch;

  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState(`@${comment.user.username},`);
  const [replyError, setReplyError] = useState(false);
  const replyTextAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyText(event.target.value);
    setReplyError(false);
  };

  const handleToggleReply = () => {
    setReplying(!replying);
    // replyTextAreaRef.current.focus();
  };
  const handleReply = () => {
    if (replyText.trim() === `@${comment.user.username},`) {
      setReplyError(true);
    } else {
      //select actual comment without the name in the default value
      let replyWithoutname = replyText
        .slice(comment.user.username.length + 2)
        .trim();
      dispatch({
        type: "REPLY",
        payload: {
          commentId: comment.id.toString(),
          reply: {
            content: replyWithoutname,
            createdAt: "now",
            id: uuidv4(),
            replyingTo: comment.user.username,
            score: 0,
            user,
          },
        },
      });
      //reset
      // setReplyText("");
      setReplyText(`@${comment.user.username},`);

      setReplying(false);
    }
  };

  return (
    <div>
      <Card style={{ marginTop: "1rem" }}>
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
            <Upvote upvote={comment.score} commentId={comment.id.toString()} />
          </div>
          <div className={classes.replyAndDelete}>
            <Action action="reply" onClick={handleToggleReply} />
          </div>
        </div>
      </Card>

      {replying && (
        <Card style={{ marginTop: "0.3rem" }}>
          <div className={classes.addReply}>
            <img src={user.image.png} alt="" />
            <TextArea
              defaultValue={replyText}
              onChange={handleChange}
              error={replyError}
              // ref={replyTextAreaRef}
            ></TextArea>
            {replyError && (
              <p className={classes.error}>Please enter a valid reply</p>
            )}
            <Button color="primary" onClick={handleReply}>
              Reply
            </Button>
          </div>
        </Card>
      )}

      {/* list of replies to the comment */}
      <div className={classes.replies}>
        {comment?.replies.map((reply, index) => (
          <Reply key={index} reply={reply} commentId={comment.id.toString()} />
        ))}
      </div>
    </div>
  );
}

export default Comment;
