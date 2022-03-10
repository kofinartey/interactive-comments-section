import React, { useContext } from "react";
import { CommentsProvider } from "./contexts/CommentsContext";
import { UserProvider } from "./contexts/UserContext";
import CommentsList from "./components/commentsList/CommentsList";

const styles = {
  backgroundColor: "#F5F6FA",
  minHeight: "100vh",
  padding: "3rem 0",
};

function ICSapp() {
  return (
    <UserProvider>
      <CommentsProvider>
        <div style={styles}>
          <CommentsList />
        </div>
      </CommentsProvider>
    </UserProvider>
  );
}

export default ICSapp;
