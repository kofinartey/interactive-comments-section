import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import { CommentsContext } from "../../contexts/CommentsContext";
import Comment from "../comment/Comment";

const styles = makeStyles({});

function CommentsList() {
  const { comments } = useContext(CommentsContext);
  console.log(comments);
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  );
}

export default CommentsList;
