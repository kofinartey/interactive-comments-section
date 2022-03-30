import React, { useContext } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";
import { UserContext } from "../../contexts/UserContext";
import Comment from "../comment/Comment";
import TextArea from "../textarea/TextArea";
import Button from "../button/Button";
import Card from "../card/Card";
import CommentsListStyles from "./CommentsListStyles";

function CommentsList() {
  const user = useContext(UserContext);
  const dataFromContext = useContext(CommentsContext);
  const comments = dataFromContext?.comments;

  const classes = CommentsListStyles();
  return (
    <div className={classes.CommentsList}>
      <div className={classes.wrapper}>
        {comments?.map((comment) => (
          <div key={comment.id}>
            <Comment comment={comment} />
          </div>
        ))}

        {/* section to add user comment */}
        <Card>
          <div className={classes.addComment}>
            <TextArea placeholder="Add a comment..." error={false}></TextArea>
            <img src={process.env.PUBLIC_URL + `${user.image.png}`} alt="" />
            <Button color="primary">Send</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CommentsList;
