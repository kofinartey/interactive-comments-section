import { useContext } from "react";

//my imports
import { UserContext } from "../../contexts/UserContext";
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
  commentId: string;
};

function Reply({ reply, commentId }: ReplyProps) {
  const classes = ReplyStyles();
  const user = useContext(UserContext);

  const userTag =
    user.username === reply.user.username ? (
      <span className={classes.userTag}>you</span>
    ) : (
      ""
    );

  const deleteButton =
    user.username === reply.user.username ? (
      <div className={classes.delete}>
        <Action action="delete" />
      </div>
    ) : (
      ""
    );

  const replyButton = (
    <div className={classes.reply}>
      {user.username === reply.user.username ? (
        <Action action="edit" />
      ) : (
        <Action action="reply" />
      )}
    </div>
  );
  return (
    <div>
      <Card style={{ margin: "1rem 0" }}>
        <div className={classes.Comment}>
          <div className={classes.comment__top}>
            <img
              src={process.env.PUBLIC_URL + `${reply.user.image.png}`}
              alt=""
            />
            <p className={classes.username}>
              {reply.user.username} {userTag}
            </p>
            <p className={classes.createdAt}>{reply.createdAt}</p>
          </div>
          <p className={classes.text}>
            <span>{reply.replyingTo}</span> {reply.content}
          </p>

          <div className={classes.upvote}>
            <Upvote
              upvote={reply.score}
              replyId={reply.id.toString()}
              commentId={commentId}
            />
          </div>
          <div className={classes.replyAndDelete}>
            {deleteButton}
            {replyButton}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Reply;
