import React, { useContext } from "react";
import { CommentsContext, CommentsProvider } from "./contexts/CommentsContext";
import Action from "./components/action/Action";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import TextArea from "./components/textarea/TextArea";
import Upvote from "./components/upvote/Upvote";

const styles = { backgroundColor: "#F5F6FA", minHeight: "100vh" };

function ICSapp() {
  const { comments } = useContext(CommentsContext);
  console.log(comments);
  return (
    <CommentsProvider>
      <div style={styles}>
        ICSapp
        <Card>
          <Button>No Cancel</Button>
          <Button color="danger">Yes Delete</Button>
          <p>Interactive Comments section</p>
          <Upvote upvote={5} />
          <Action action="reply" />
          <Action action="edit" />
          <Action action="delete" />
          <TextArea />
        </Card>
      </div>
    </CommentsProvider>
  );
}

export default ICSapp;
