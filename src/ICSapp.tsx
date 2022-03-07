import React, { useContext } from "react";
import { CommentsProvider } from "./contexts/CommentsContext";
import CommentsList from "./components/commentsList/CommentsList";
import Action from "./components/action/Action";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import TextArea from "./components/textarea/TextArea";
import Upvote from "./components/upvote/Upvote";

const styles = { backgroundColor: "#F5F6FA", minHeight: "100vh" };

function ICSapp() {
  return (
    <CommentsProvider>
      <div style={styles}>
        <CommentsList />
      </div>
    </CommentsProvider>
  );
}

export default ICSapp;
